#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import json
import datetime
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# NOVO CAMINHO: agora dentro da pasta databases
DATABASES_DIR = os.path.join(BASE_DIR, "databases")

# Garantir que a pasta databases existe
if not os.path.exists(DATABASES_DIR):
    os.makedirs(DATABASES_DIR)
    print(f"Criado: {DATABASES_DIR}")

# Arquivos agora dentro de databases
ARQUIVO_PLANOS = os.path.join(DATABASES_DIR, "planos_aula.json")
ARQUIVO_CONFIG = os.path.join(DATABASES_DIR, "configuracoes.json")

def carregar_planos():
    if os.path.exists(ARQUIVO_PLANOS):
        try:
            with open(ARQUIVO_PLANOS, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            return {}
    return {}

def salvar_planos(planos):
    with open(ARQUIVO_PLANOS, 'w', encoding='utf-8') as f:
        json.dump(planos, f, ensure_ascii=False, indent=2)
    print(f"Planos salvos: {len(planos)} registros")

def carregar_configuracoes():
    if os.path.exists(ARQUIVO_CONFIG):
        try:
            with open(ARQUIVO_CONFIG, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            return {}
    return {}

def salvar_configuracoes(config):
    with open(ARQUIVO_CONFIG, 'w', encoding='utf-8') as f:
        json.dump(config, f, ensure_ascii=False, indent=2)
    print(f"Configurações salvas: {len(config)} registros")

class PlanejamentoHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        
        if parsed.path == '/api/planos':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            planos = carregar_planos()
            self.wfile.write(json.dumps(planos, ensure_ascii=False).encode('utf-8'))
            return
        
        if parsed.path == '/api/configuracoes':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            config = carregar_configuracoes()
            self.wfile.write(json.dumps(config, ensure_ascii=False).encode('utf-8'))
            return
        
        if parsed.path == '/' or parsed.path == '/planejamento.html':
            self.path = '/planejamento.html'
        
        return super().do_GET()
    
    def do_POST(self):
        parsed = urlparse(self.path)
        
        if parsed.path == '/api/planos/salvar':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                dados = json.loads(post_data.decode('utf-8'))
                planos = carregar_planos()
                chave = dados.get('chave')
                plano = dados.get('plano')
                if chave:
                    if plano:
                        planos[chave] = plano
                        planos[chave]['dataAtualizacao'] = datetime.datetime.now().isoformat()
                    else:
                        if chave in planos:
                            del planos[chave]
                salvar_planos(planos)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "ok"}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
            return
        
        if parsed.path == '/api/configuracoes/salvar':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                dados = json.loads(post_data.decode('utf-8'))
                config = carregar_configuracoes()
                
                configKey = dados.get('configKey')
                if configKey:
                    config[configKey] = {
                        'area': dados.get('area', ''),
                        'componente': dados.get('componente', ''),
                        'ano': dados.get('ano', ''),
                        'turma': dados.get('turma', ''),
                        'professorRegente': dados.get('professorRegente', ''),
                        'cargaAnual': dados.get('cargaAnual', 200),
                        'cargaSemanal': dados.get('cargaSemanal', 5),
                        'ultimaAtualizacao': datetime.datetime.now().isoformat()
                    }
                else:
                    componente = dados.get('componente')
                    if componente:
                        config[componente] = {
                            'professorRegente': dados.get('professorRegente', ''),
                            'cargaAnual': dados.get('cargaAnual', 200),
                            'cargaSemanal': dados.get('cargaSemanal', 5),
                            'turma': dados.get('turma', ''),
                            'ultimaAtualizacao': datetime.datetime.now().isoformat()
                        }
                
                salvar_configuracoes(config)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "ok"}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
            return
        
        self.send_response(404)
        self.end_headers()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == '__main__':
    PORT = 8000
    server = HTTPServer(('', PORT), PlanejamentoHandler)
    print("=" * 50)
    print("Servidor de Planejamento de Aulas 2026")
    print("=" * 50)
    print(f"Acesse: http://localhost:{PORT}/planejamento.html")
    print(f"Arquivos de dados em: {DATABASES_DIR}")
    print("Pressione Ctrl+C para parar o servidor")
    print("=" * 50)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor encerrado.")