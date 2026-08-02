# ============================================================
# SERVER.PY - SISPLAN
# Servidor para desenvolvimento e testes
# ============================================================

from flask import Flask, send_from_directory, request, jsonify
import json
import os
import socket

app = Flask(__name__)

# ============================================================
# FUNÇÕES AUXILIARES
# ============================================================

def load_json(filename):
    if os.path.exists(filename):
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            return {}
    return {}

def save_json(filename, data):
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        return True
    except:
        return False

# ============================================================
# ROTAS - PÁGINAS
# ============================================================

@app.route('/')
def index():
    return send_from_directory('.', 'teste_visualizador.html')

@app.route('/teste_visualizador.html')
def visualizador():
    return send_from_directory('.', 'teste_visualizador.html')

@app.route('/databases/<path:filename>')
def databases(filename):
    return send_from_directory('databases', filename)

# ============================================================
# ROTAS - API
# ============================================================

@app.route('/api/configuracoes', methods=['GET'])
def get_configuracoes():
    return jsonify(load_json('configuracoes.json'))

@app.route('/api/configuracoes/salvar', methods=['POST'])
def salvar_configuracao():
    data = request.json
    if not data:
        return jsonify({'error': 'Dados não fornecidos'}), 400
    configs = load_json('configuracoes.json')
    configs[data.get('configKey')] = data
    save_json('configuracoes.json', configs)
    return jsonify({'status': 'ok'})

@app.route('/api/planos', methods=['GET'])
def get_planos():
    return jsonify(load_json('planos.json'))

@app.route('/api/planos/salvar', methods=['POST'])
def salvar_plano():
    data = request.json
    if not data:
        return jsonify({'error': 'Dados não fornecidos'}), 400
    planos = load_json('planos.json')
    chave = data.get('chave')
    if data.get('plano') is None:
        if chave in planos:
            del planos[chave]
    else:
        planos[chave] = data['plano']
    save_json('planos.json', planos)
    return jsonify({'status': 'ok'})

@app.route('/api/arquivos')
def listar_arquivos():
    try:
        arquivos = []
        if os.path.exists('databases'):
            for f in os.listdir('databases'):
                if f.endswith('.js'):
                    arquivos.append(f)
        return jsonify({'arquivos': arquivos, 'total': len(arquivos)})
    except:
        return jsonify({'error': 'Erro ao listar arquivos'}), 500

# ============================================================
# INICIALIZAÇÃO
# ============================================================

if __name__ == '__main__':
    print('=' * 50)
    print('  SISPLAN - SERVIDOR DE DESENVOLVIMENTO')
    print('=' * 50)
    print()

    if not os.path.exists('databases'):
        os.makedirs('databases')
        print('✅ Pasta databases criada!')

    arquivos = [f for f in os.listdir('databases') if f.endswith('.js')]
    if arquivos:
        print('📁 Arquivos encontrados:')
        for f in arquivos:
            print(f'   📄 {f}')
    else:
        print('⚠️  Nenhum arquivo .js encontrado em databases/')
    print()

    # Encontra porta livre
    port = 5000
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        sock.bind(('0.0.0.0', port))
        sock.close()
    except OSError:
        port = 5001
        print(f'⚠️  Porta 5000 ocupada, usando porta {port}')

    print(f'🚀 Servidor: http://localhost:{port}')
    print(f'📊 Visualizador: http://localhost:{port}/teste_visualizador.html')
    print()
    print('=' * 50)
    print('  Pressione CTRL+C para encerrar')
    print('=' * 50)
    print()

    app.run(debug=True, host='0.0.0.0', port=port)