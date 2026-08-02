// ==================== CONFIGURAÇÕES ====================

var componentesPorArea = {
    "Linguagens": ["Língua Portuguesa", "Arte", "Educação Física", "Literatura", "Língua Inglesa", "Língua Espanhola","Escrita Criativa", "Redação"],
    "Humanas": ["Filosofia","Geografia", "História", "Sociologia"]
};

var anosDisponiveis = ["1º ano EM", "2º ano EM", "3º ano EM", "6º ano EF", "7º ano EF", "8º ano EF", "9º ano EF"];

var database = {};
var currentDataRows = [];
var planosAula = {};
var currentWeekCount = 1;
var selectedRowIndex = -1;

// ==================== TEMPLATES PARA O BOTÃO CD ====================

const templatesPorPalavraChave = [
    {
        palavras: ["leitura", "poema", "poesia", "lírico", "soneto", "poético", "literário", "poetiza", "drummond", "leminski"],
        metodologia: "Leitura compartilhada e análise coletiva do texto, com mediação do professor para identificação de características do gênero, recursos expressivos e efeitos de sentido, estimulando a participação oral dos alunos.",
        materiais: "Texto impresso ou projetado, quadro branco, caderno dos alunos, dicionário (impresso ou online), áudio (se houver declamação).",
        evidencias: "Participação ativa nas discussões, identificação correta dos elementos do gênero, anotações no caderno, respostas orais às perguntas dirigidas.",
        instrumentos: "Observação direta com registro em diário de classe, verificação das anotações, análise da qualidade das contribuições orais."
    },
    {
        palavras: ["revisão", "gramática", "morfologia", "classe", "palavra", "substantivo", "adjetivo", "verbo", "pronome", "artigo", "numeral", "classes gramaticais"],
        metodologia: "Aula expositiva dialogada com construção coletiva de exemplos no quadro, sistematização dos conceitos e exercícios práticos de identificação e classificação.",
        materiais: "Quadro branco, marcadores, caderno dos alunos, lista de exercícios impressa ou projetada, slide com resumo dos conceitos.",
        evidencias: "Registro organizado no caderno contendo definições, subcategorias e exemplos; participação na construção das frases; acerto nos exercícios práticos.",
        instrumentos: "Verificação dos cadernos, correção coletiva dos exercícios, perguntas orais direcionadas, pequena atividade diagnóstica ao final."
    },
    {
        palavras: ["sintaxe", "sujeito", "predicado", "objeto direto", "objeto indireto", "verbo transitivo", "verbo intransitivo", "locução", "formas nominais"],
        metodologia: "Análise sintática coletiva de frases construídas no quadro, com identificação guiada de termos essenciais e integrantes da oração, articulando teoria e prática progressivamente.",
        materiais: "Quadro branco, marcadores, caderno dos alunos, projetor com frases-exemplo, lista de exercícios para fixação.",
        evidencias: "Identificação correta das funções sintáticas nas frases analisadas, registro no caderno, participação nas construções coletivas, acerto nos exercícios.",
        instrumentos: "Observação direta, verificação dos cadernos, correção compartilhada dos exercícios, perguntas orais durante a aula."
    },
    {
        palavras: ["avaliação", "prova", "teste", "diagnóstica", "CAED", "plataforma", "diagnóstico"],
        metodologia: "Aplicação de instrumento avaliativo individual com orientações iniciais sobre o formato, tempo de duração e critérios de correção, com acompanhamento silencioso do professor.",
        materiais: "Prova impressa ou plataforma digital (CAED), folha de respostas, caneta.",
        evidencias: "Realização completa da avaliação por todos os alunos, demonstração individual dos conhecimentos adquiridos, cumprimento do tempo estipulado.",
        instrumentos: "Correção da prova com atribuição de nota ou conceito, análise de desempenho por questão, registro de resultados em planilha."
    },
    {
        palavras: ["seminário", "apresentação", "exposição oral", "socialização", "compartilhamento", "textos jornalísticos"],
        metodologia: "Exposição oral pelos alunos sobre tema previamente pesquisado, com mediação do professor para garantir clareza, respeito ao tempo e participação da plateia com perguntas.",
        materiais: "Slides (se houver), projetor, computador, cronômetro, ficha de avaliação para os colegas (opcional).",
        evidencias: "Clareza e organização da exposição, domínio do conteúdo, capacidade de responder perguntas, participação da plateia com questionamentos pertinentes.",
        instrumentos: "Visto de avaliação preenchida pelo professor, registro das notas, autoavaliação do aluno, feedback oral individual."
    },
    {
        palavras: ["produção textual", "redação", "escrita", "texto", "parágrafo", "dissertação", "artigo", "crônica", "conto"],
        metodologia: "Produção individual ou colaborativa de texto seguindo roteiro e critérios previamente estabelecidos, com acompanhamento do professor para orientação e esclarecimento de dúvidas.",
        materiais: "Folha pautada ou computador, roteiro impresso, dicionário, quadro com instruções e critérios de avaliação.",
        evidencias: "Texto produzido dentro do prazo, atendimento aos critérios estabelecidos, coerência, coesão e adequação ao gênero proposto.",
        instrumentos: "Correção detalhada com devolutiva escrita, análise por Visto, reescrita orientada, autoavaliação do aluno."
    },
    {
        palavras: ["correção", "feedback", "devolutiva", "comentário", "revisão textual", "corrigidos"],
        metodologia: "Correção coletiva ou individual com mediação do professor, destacando acertos e apontando pontos de melhoria, com incentivo à participação ativa dos alunos na identificação de erros e soluções.",
        materiais: "Textos dos alunos (impressos ou projetados), quadro branco, canetas coloridas para marcação, lista de critérios de correção.",
        evidencias: "Identificação dos próprios erros após correção, aplicação das orientações na reescrita, participação nas discussões coletivas sobre os textos.",
        instrumentos: "Verificação das correções feitas pelos alunos, análise da reescrita, observação da participação, registro do progresso individual."
    }
];

const templatePadrao = {
    metodologia: "Aula expositiva dialogada com mediação do professor, utilizando exemplos práticos e participação ativa dos alunos para construção coletiva do conhecimento.",
    materiais: "Quadro branco, marcadores, caderno dos alunos, projetor (se necessário), materiais impressos complementares.",
    evidencias: "Participação oral nas discussões, registro organizado no caderno, respostas às perguntas dirigidas, realização das atividades propostas.",
    instrumentos: "Observação direta com registro em diário de classe, verificação dos cadernos, análise do desempenho nas atividades, feedback oral."
};

function escapeHtml(texto) {
    if (!texto) return "-";
    
    // Primeiro, substitui os <br> existentes por um marcador especial
    var comMarcadores = texto.replace(/<br\s*\/?>/gi, "{{BR_TAG}}");
    
    // Depois, escapa todos os caracteres especiais HTML
    var escapado = comMarcadores
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    
    // Restaura os <br> originais e converte \n em <br>
    return escapado
        .replace(/\{\{BR_TAG\}\}/g, "<br>")
        .replace(/\n/g, "<br>");
}

function completarDadosSemana(semanaIndex) {
    var etapaTextarea = document.querySelector(`.semana-etapas[data-semana="${semanaIndex}"]`);
    if (!etapaTextarea) {
        var row = document.querySelector(`#semanalTbody tr:nth-child(${semanaIndex})`);
        if (row) {
            etapaTextarea = row.querySelector('textarea:not(.semana-metodologia):not(.semana-materiais):not(.semana-evidencias):not(.semana-instrumentos)');
        }
    }
    
    var etapa = etapaTextarea ? etapaTextarea.value : "";
    if (!etapa || etapa.trim() === "") {
        alert("Preencha primeiro o campo 'Etapas/Momentos' da semana " + semanaIndex);
        return false;
    }
    
    etapa = etapa.toLowerCase();
    var melhorTemplate = null;
    var maxPalavrasEncontradas = 0;
    
    for (var i = 0; i < templatesPorPalavraChave.length; i++) {
        var template = templatesPorPalavraChave[i];
        var palavrasEncontradas = 0;
        for (var j = 0; j < template.palavras.length; j++) {
            if (etapa.includes(template.palavras[j].toLowerCase())) {
                palavrasEncontradas++;
            }
        }
        if (palavrasEncontradas > maxPalavrasEncontradas) {
            maxPalavrasEncontradas = palavrasEncontradas;
            melhorTemplate = template;
        }
    }
    
    var templateUsado = melhorTemplate || templatePadrao;
    
    var campoMetodologia = document.querySelector(`.semana-metodologia[data-semana="${semanaIndex}"]`);
    var campoMateriais = document.querySelector(`.semana-materiais[data-semana="${semanaIndex}"]`);
    var campoEvidencias = document.querySelector(`.semana-evidencias[data-semana="${semanaIndex}"]`);
    var campoInstrumentos = document.querySelector(`.semana-instrumentos[data-semana="${semanaIndex}"]`);
    
    if (campoMetodologia) campoMetodologia.value = templateUsado.metodologia;
    if (campoMateriais) campoMateriais.value = templateUsado.materiais;
    if (campoEvidencias) campoEvidencias.value = templateUsado.evidencias;
    if (campoInstrumentos) campoInstrumentos.value = templateUsado.instrumentos;
    
    showStatus("Dados preenchidos automaticamente!", false);
    return true;
}

function toBrazilianDate(isoDate) {
    if (!isoDate || isoDate === "") return "";
    var partes = isoDate.split('-');
    if (partes.length !== 3) return isoDate;
    return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function toISODate(brDate) {
    if (!brDate || brDate === "") return "";
    var partes = brDate.split('/');
    if (partes.length !== 3) return "";
    return partes[2] + "-" + partes[1] + "-" + partes[0];
}

function getDataInicioTrimestre(planos) {
    var menorData = null;
    for (var idx = 0; idx < planos.length; idx++) {
        var semanas = planos[idx].semanas;
        if (semanas) {
            for (var s in semanas) {
                var data = semanas[s].data;
                if (data && data.trim() !== "") {
                    if (menorData === null || data < menorData) {
                        menorData = data;
                    }
                }
            }
        }
    }
    return menorData;
}

function getDataFimTrimestre(planos) {
    var maiorData = null;
    for (var idx = 0; idx < planos.length; idx++) {
        var semanas = planos[idx].semanas;
        if (semanas) {
            for (var s in semanas) {
                var data = semanas[s].data;
                if (data && data.trim() !== "") {
                    if (maiorData === null || data > maiorData) {
                        maiorData = data;
                    }
                }
            }
        }
    }
    return maiorData;
}

function getConfigKey() {
    var area = document.getElementById("areaSelect").value;
    var componente = document.getElementById("componenteSelect").value;
    var ano = document.getElementById("anoSelect").value;
    if (!area || !componente || !ano) return null;
    return (area + "_" + componente + "_" + ano).replace(/\s+/g, '_');
}

function showStatus(msg, isError) {
    var div = document.getElementById("saveStatus");
    div.textContent = msg;
    div.classList.toggle("error", isError);
    div.classList.add("show");
    setTimeout(function() {
        div.classList.remove("show");
    }, 3000);
}

function atualizarComponentes() {
    var area = document.getElementById("areaSelect").value;
    var componenteSelect = document.getElementById("componenteSelect");
    var componentes = componentesPorArea[area] || [];

    componenteSelect.innerHTML = '<option value="" selected disabled>-- Selecione o Componente --</option>';
    for (var i = 0; i < componentes.length; i++) {
        var opt = document.createElement("option");
        opt.value = componentes[i];
        opt.textContent = componentes[i];
        componenteSelect.appendChild(opt);
    }
    componenteSelect.disabled = (componentes.length === 0);

    document.getElementById("anoSelect").innerHTML = '<option value="" selected disabled>-- Selecione o Ano --</option>';
    document.getElementById("anoSelect").disabled = true;
    limparCamposDependentes();
}

function atualizarAnos() {
    var anoSelect = document.getElementById("anoSelect");
    anoSelect.innerHTML = '<option value="" selected disabled>-- Selecione o Ano --</option>';
    for (var i = 0; i < anosDisponiveis.length; i++) {
        var opt = document.createElement("option");
        opt.value = anosDisponiveis[i];
        opt.textContent = anosDisponiveis[i];
        anoSelect.appendChild(opt);
    }
    anoSelect.disabled = false;
}

function limparCamposDependentes() {
    document.getElementById("turma").value = "";
    document.getElementById("turma").disabled = true;
    document.getElementById("professorRegente").value = "";
    document.getElementById("professorRegente").disabled = true;
    document.getElementById("cargaAnual").value = "";
    document.getElementById("cargaAnual").disabled = true;
    document.getElementById("cargaSemanal").value = "";
    document.getElementById("cargaSemanal").disabled = true;
    document.getElementById("cargaTrimestralDisplay").value = "---";
    document.getElementById("trimestreSelect").disabled = true;

    document.getElementById("trimestreSection").style.display = "none";
    document.getElementById("planoAulaSection").style.display = "none";

    document.getElementById("exportarTxtBtn").disabled = true;
    document.getElementById("imprimirMatrizBtn").disabled = true;
    document.getElementById("imprimirPlanosBtn").disabled = true;
    document.getElementById("addWeekBtn").disabled = true;
    document.getElementById("removeWeekBtn").disabled = true;
    document.getElementById("limparPlanoBtn").disabled = true;
    document.getElementById("salvarPlanoBtn").disabled = true;
    document.getElementById("planoAulaNumSelect").disabled = true;
}

function habilitarCampos() {
    document.getElementById("turma").disabled = false;
    document.getElementById("professorRegente").disabled = false;
    document.getElementById("cargaAnual").disabled = false;
    document.getElementById("cargaSemanal").disabled = false;
    document.getElementById("trimestreSelect").disabled = false;
    document.getElementById("exportarTxtBtn").disabled = false;
    document.getElementById("imprimirMatrizBtn").disabled = false;
    document.getElementById("imprimirPlanosBtn").disabled = false;
    document.getElementById("addWeekBtn").disabled = false;
    document.getElementById("limparPlanoBtn").disabled = false;
    document.getElementById("salvarPlanoBtn").disabled = false;
    document.getElementById("planoAulaNumSelect").disabled = false;

    document.getElementById("trimestreSection").style.display = "block";
    document.getElementById("planoAulaSection").style.display = "block";
}

async function salvarConfiguracoes() {
    var key = getConfigKey();
    if (!key) return false;

    var data = {
        configKey: key,
        area: document.getElementById("areaSelect").value,
        componente: document.getElementById("componenteSelect").value,
        ano: document.getElementById("anoSelect").value,
        turma: document.getElementById("turma").value,
        professorRegente: document.getElementById("professorRegente").value,
        cargaAnual: parseInt(document.getElementById("cargaAnual").value) || 0,
        cargaSemanal: parseInt(document.getElementById("cargaSemanal").value) || 0
    };

    try {
        var resp = await fetch('/api/configuracoes/salvar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (resp.ok) {
            console.log("Config salva:", key);
            return true;
        }
    } catch(e) {
        showStatus("ERRO: Servidor não está rodando!", true);
        return false;
    }
    return false;
}

async function carregarConfiguracoes() {
    var key = getConfigKey();
    if (!key) return false;

    try {
        var resp = await fetch('/api/configuracoes');
        if (resp.ok) {
            var all = await resp.json();
            if (all[key]) {
                var cfg = all[key];
                document.getElementById("turma").value = cfg.turma || "";
                document.getElementById("professorRegente").value = cfg.professorRegente || "";
                document.getElementById("cargaAnual").value = cfg.cargaAnual || "";
                document.getElementById("cargaSemanal").value = cfg.cargaSemanal || "";
                atualizarCargaTrimestral();
                return true;
            } else {
                document.getElementById("turma").value = "";
                document.getElementById("professorRegente").value = "";
                document.getElementById("cargaAnual").value = "";
                document.getElementById("cargaSemanal").value = "";
                document.getElementById("cargaTrimestralDisplay").value = "---";
            }
        }
    } catch(e) {
        showStatus("ERRO: Não foi possível carregar configurações", true);
    }
    return false;
}

async function carregarPlanos() {
    try {
        var resp = await fetch('/api/planos');
        if (resp.ok) {
            planosAula = await resp.json();
            var total = Object.keys(planosAula).length;
            document.getElementById("planoAulaStatus").innerHTML = '<i class="fas fa-check-circle"></i> ' + total + ' plano(s) salvo(s)';
            return true;
        }
    } catch(e) {
        showStatus("ERRO: Não foi possível carregar planos", true);
    }
    return false;
}

async function salvarPlano(planoKey, planoData) {
    try {
        var resp = await fetch('/api/planos/salvar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chave: planoKey, plano: planoData })
        });
        if (resp.ok) {
            planosAula[planoKey] = planoData;
            var total = Object.keys(planosAula).length;
            document.getElementById("planoAulaStatus").innerHTML = '<i class="fas fa-check-circle"></i> ' + total + ' plano(s) salvo(s)';
            showStatus("Plano salvo!", false);
            return true;
        }
    } catch(e) {
        showStatus("ERRO: Não foi possível salvar plano", true);
    }
    return false;
}

async function removerPlano(planoKey) {
    try {
        var resp = await fetch('/api/planos/salvar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chave: planoKey, plano: null })
        });
        if (resp.ok) {
            delete planosAula[planoKey];
            var total = Object.keys(planosAula).length;
            document.getElementById("planoAulaStatus").innerHTML = '<i class="fas fa-check-circle"></i> ' + total + ' plano(s) salvo(s)';
            showStatus("Plano removido!", false);
            return true;
        }
    } catch(e) {
        showStatus("ERRO: Não foi possível remover plano", true);
    }
    return false;
}

function replicarParaPlano() {
    document.getElementById("planoComponente").value = document.getElementById("componenteSelect").value || "---";
    document.getElementById("planoAno").value = document.getElementById("anoSelect").value || "---";
    document.getElementById("planoTurma").value = document.getElementById("turma").value || "---";
    document.getElementById("planoProfessor").value = document.getElementById("professorRegente").value || "---";
    document.getElementById("planoHeaderComponente").innerHTML = document.getElementById("componenteSelect").value || "---";
    document.getElementById("planoHeaderAno").innerHTML = document.getElementById("anoSelect").value || "---";
    var trimestreSelecionado = document.getElementById("trimestreSelect").value;
    document.getElementById("planoHeaderTrimestre").innerHTML = trimestreSelecionado.toUpperCase();
}

async function carregarDatabase(ano) {
    if (!ano) return false;
    var arquivo;
    if (ano === '1º ano EM') {
        arquivo = '1em.js';
    } else if (ano === '2º ano EM') {
        arquivo = '2em.js';
    } else if (ano === '3º ano EM') {
        arquivo = '3em.js';
    } else if (ano === '6º ano EF') {
        arquivo = '6ef.js';
    } else if (ano === '7º ano EF') {
        arquivo = '7ef.js';
    } else if (ano === '8º ano EF') {
        arquivo = '8ef.js';
    } else if (ano === '9º ano EF') {
        arquivo = '9ef.js';
    } else {
        return false;
    }
    try {
        var resp = await fetch(`/databases/${arquivo}`);
        var codigo = await resp.text();
        eval(codigo);
        if (typeof databaseAno !== 'undefined') {
            database = databaseAno;
            return true;
        }
    } catch(e) {
        console.error(e);
        return false;
    }
    return false;
}

function getTableData(componente, trimestre) {
    if (!database[componente]) return [];
    return database[componente][trimestre.toUpperCase()] || [];
}

function atualizarCargaTrimestral() {
    var anual = parseInt(document.getElementById("cargaAnual").value) || 0;
    if (anual > 0) {
        var trim = Math.ceil(anual / 3);
        document.getElementById("cargaTrimestralDisplay").value = trim;
        return trim;
    }
    document.getElementById("cargaTrimestralDisplay").value = "---";
    return 0;
}

function distribuirPeriodos(total) {
    if (!currentDataRows.length || !total || total <= 0) return;
    var base = Math.floor(total / currentDataRows.length);
    var resto = total % currentDataRows.length;
    for (var i = 0; i < currentDataRows.length; i++) {
        currentDataRows[i].periodos = base + (i < resto ? 1 : 0);
        if (currentDataRows[i].periodos < 1) currentDataRows[i].periodos = 1;
    }
    renderTabela();
}

function renderTabela() {
    var tbody = document.getElementById("tableBody");
    if (!currentDataRows.length) {
        tbody.innerHTML = '<tr><td colspan="6" class="message-placeholder">Nenhum planejamento disponível para esta combinação.</tbody></td>';
        document.getElementById("periodosFeedback").innerHTML = "";
        return;
    }
    var html = '';
    for (var i = 0; i < currentDataRows.length; i++) {
        var r = currentDataRows[i];
        var rowClass = (selectedRowIndex === i) ? 'row-selected' : '';
        html += '<tr class="' + rowClass + '" data-row-index="' + i + '">';
        html += '<td class="col-unidade">' + (r.unidade || '-') + '</td>';
        html += '<td class="col-habilidades">' + (r.habilidades || '-') + '</td>';
        html += '<td class="col-objetos">' + (r.objetos || '-') + '</td>';
        html += '<td class="col-expectativas">' + (r.expectativas || '-') + '</td>';
        html += '<td class="col-periodos-matriz"><span class="periodo-display">' + (r.periodos || '-') + '</span></td>';
        html += '<td class="col-aula-num">' + (i + 1) + '</td>';
        html += '</tr>';
    }
    tbody.innerHTML = html;

    var rows = tbody.querySelectorAll('tr');
    for (var i = 0; i < rows.length; i++) {
        rows[i].addEventListener('click', (function(index) {
            return function() { selecionarLinha(index); };
        })(i));
    }

    var soma = 0;
    for (var i = 0; i < currentDataRows.length; i++) soma += currentDataRows[i].periodos || 0;
    document.getElementById("periodosFeedback").innerHTML = '<div class="info-badge">Distribuição: ' + soma + ' períodos | Carga trimestral: ' + (document.getElementById("cargaTrimestralDisplay").value || '---') + '</div>';
}

function selecionarLinha(index) {
    selectedRowIndex = index;
    renderTabela();
    atualizarDropdownAulas();
    carregarConteudoPorAulaPorIndice(index);
}

function atualizarDropdownAulas() {
    var select = document.getElementById("planoAulaNumSelect");
    select.innerHTML = '<option value="">Selecione o número da aula</option>';

    for (var i = 0; i < currentDataRows.length; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.textContent = "Aula " + (i + 1);
        select.appendChild(opt);
    }
}

function getPlanoKey(componente, ano, trimestre, aulaIndex) {
    return componente + "_" + ano + "_" + trimestre + "_" + aulaIndex;
}

function carregarConteudoPorAulaPorIndice(aulaIndex) {
    if (aulaIndex === undefined || aulaIndex === null || aulaIndex === "" || !currentDataRows[aulaIndex]) {
        document.getElementById("unidadeDisplay").innerHTML = "---";
        document.getElementById("objetosDisplay").innerHTML = "---";
        document.getElementById("habilidadesDisplay").innerHTML = "---";
        document.getElementById("expectativasDisplay").innerHTML = "---";
        
        var tbody = document.getElementById("semanalTbody");
        tbody.innerHTML = '<tr><td colspan="8" class="message-placeholder">Selecione uma aula para visualizar o detalhamento semanal.</tbody>';
        
        document.getElementById("addWeekBtn").disabled = true;
        document.getElementById("removeWeekBtn").disabled = true;
        document.getElementById("removeWeekBtn").style.display = "none";
        currentWeekCount = 1;
        return;
    }
    
    document.getElementById("addWeekBtn").disabled = false;
    
    var habilidade = currentDataRows[aulaIndex];
    
    document.getElementById("unidadeDisplay").innerHTML = habilidade.unidade || "---";
    document.getElementById("objetosDisplay").innerHTML = habilidade.objetos || "---";
    document.getElementById("habilidadesDisplay").innerHTML = habilidade.habilidades || "---";
    document.getElementById("expectativasDisplay").innerHTML = habilidade.expectativas || "---";
    
    var componente = document.getElementById("componenteSelect").value;
    var trimestre = document.getElementById("trimestreSelect").value;
    var ano = document.getElementById("anoSelect").value;
    var planoKey = getPlanoKey(componente, ano, trimestre, aulaIndex);
    var plano = planosAula[planoKey];
    
    if (plano && plano.semanas) {
        var maxWeeks = 1;
        for (var k in plano.semanas) {
            var num = parseInt(k.split('_')[1]);
            if (num > maxWeeks) maxWeeks = num;
        }
        currentWeekCount = Math.max(maxWeeks, 1);
        gerarTabelaSemanal(currentWeekCount, plano.semanas);
    } else {
        currentWeekCount = 1;
        gerarTabelaSemanal(1, null);
    }
}

async function carregarConteudoPorAula() {
    var aulaIndex = document.getElementById("planoAulaNumSelect").value;
    if (aulaIndex !== "") {
        selectedRowIndex = parseInt(aulaIndex);
        renderTabela();
        carregarConteudoPorAulaPorIndice(parseInt(aulaIndex));
    } else {
        carregarConteudoPorAulaPorIndice(null);
    }
}

function gerarTabelaSemanal(weekCount, salvos) {
    var tbody = document.getElementById("semanalTbody");
    var html = "";
    for (var i = 1; i <= weekCount; i++) {
        var saved = salvos ? salvos["semana_" + i] : null;
        var periodosValue = (saved && saved.periodos) ? saved.periodos : "";
        var dataValue = (saved && saved.data) ? saved.data : "";
        
        html += '<tr>';
        html += '<td class="col-semana" style="vertical-align:top;"><div class="week-title">SEMANA ' + i + '</div><input type="date" class="semana-data" data-semana="' + i + '" value="' + dataValue + '" style="width:100%; margin-top:0.3rem;"></td>';
        html += '<td class="col-periodos-semanal" style="text-align:center; vertical-align:middle;"><input type="number" class="semana-periodos" data-semana="' + i + '" value="' + periodosValue + '" style="width:100%; text-align:center;" min="0" step="1" placeholder="0"></td>';
        html += '<td class="col-metodologia"><textarea class="semana-metodologia" data-semana="' + i + '" rows="2" placeholder="Metodologia e organização...">' + (saved ? saved.metodologia : '') + '</textarea></td>';
        html += '<td class="col-materiais"><textarea class="semana-materiais" data-semana="' + i + '" rows="2" placeholder="Materiais e recursos...">' + (saved ? saved.materiais : '') + '</textarea></td>';
        html += '<td class="col-etapas"><textarea class="semana-etapas" data-semana="' + i + '" rows="2" placeholder="Etapas e momentos...">' + (saved ? saved.etapas : '') + '</textarea></td>';
        html += '<td class="col-evidencias"><textarea class="semana-evidencias" data-semana="' + i + '" rows="2" placeholder="Evidências de aprendizagem...">' + (saved ? saved.evidencias : '') + '</textarea></td>';
        html += '<td class="col-instrumentos"><textarea class="semana-instrumentos" data-semana="' + i + '" rows="2" placeholder="Instrumentos de avaliação...">' + (saved ? saved.instrumentos : '') + '</textarea></td>';
        html += '<td class="col-botoes" style="text-align:center; vertical-align:middle;"><button class="btn-cd" data-semana="' + i + '" style="background:#4CAF50; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer; font-size:12px; margin:0;">📝 CD</button></td>';
        html += '</tr>';
    }
    tbody.innerHTML = html;
    
    for (var i = 1; i <= weekCount; i++) {
        var btn = document.querySelector('.btn-cd[data-semana="' + i + '"]');
        if (btn) {
            btn.onclick = (function(semana) {
                return function() { completarDadosSemana(semana); };
            })(i);
        }
    }
    
    atualizarBotaoRemover();
}

function coletarDadosSemanais() {
    var semanas = {};
    var rows = document.querySelectorAll("#semanalTbody tr");
    for (var i = 0; i < rows.length; i++) {
        var r = rows[i];
        var dataISODate = (r.querySelector('.semana-data') && r.querySelector('.semana-data').value) || "";
        semanas["semana_" + (i + 1)] = {
            data: dataISODate,
            periodos: (r.querySelector('.semana-periodos') && r.querySelector('.semana-periodos').value) || "",
            metodologia: (r.querySelector('.semana-metodologia') && r.querySelector('.semana-metodologia').value) || "",
            materiais: (r.querySelector('.semana-materiais') && r.querySelector('.semana-materiais').value) || "",
            etapas: (r.querySelector('.semana-etapas') && r.querySelector('.semana-etapas').value) || "",
            evidencias: (r.querySelector('.semana-evidencias') && r.querySelector('.semana-evidencias').value) || "",
            instrumentos: (r.querySelector('.semana-instrumentos') && r.querySelector('.semana-instrumentos').value) || ""
        };
    }
    return semanas;
}

function verificarUltimaSemanaVazia() {
    var rows = document.querySelectorAll("#semanalTbody tr");
    if (!rows.length) return false;
    var last = rows[rows.length - 1];
    
    var data = last.querySelector('.semana-data') && last.querySelector('.semana-data').value;
    var periodos = last.querySelector('.semana-periodos') && last.querySelector('.semana-periodos').value;
    var metodologia = last.querySelector('.semana-metodologia') && last.querySelector('.semana-metodologia').value;
    var materiais = last.querySelector('.semana-materiais') && last.querySelector('.semana-materiais').value;
    var etapas = last.querySelector('.semana-etapas') && last.querySelector('.semana-etapas').value;
    var evidencias = last.querySelector('.semana-evidencias') && last.querySelector('.semana-evidencias').value;
    var instrumentos = last.querySelector('.semana-instrumentos') && last.querySelector('.semana-instrumentos').value;
    
    var vazio = true;
    if (data && data.trim() !== "") vazio = false;
    if (periodos && periodos.trim() !== "" && periodos !== "0") vazio = false;
    if (metodologia && metodologia.trim() !== "") vazio = false;
    if (materiais && materiais.trim() !== "") vazio = false;
    if (etapas && etapas.trim() !== "") vazio = false;
    if (evidencias && evidencias.trim() !== "") vazio = false;
    if (instrumentos && instrumentos.trim() !== "") vazio = false;
    
    return vazio && currentWeekCount > 1;
}

function atualizarBotaoRemover() {
    var btn = document.getElementById("removeWeekBtn");
    if (verificarUltimaSemanaVazia() && currentWeekCount > 1) {
        btn.style.display = "inline-flex";
        btn.disabled = false;
    } else {
        btn.style.display = "none";
        btn.disabled = true;
    }
}

function addWeek() {
    currentWeekCount++;
    var semanasAtuais = coletarDadosSemanais();
    gerarTabelaSemanal(currentWeekCount, semanasAtuais);
}

function removeWeek() {
    if (currentWeekCount > 1 && verificarUltimaSemanaVazia()) {
        currentWeekCount--;
        var semanasAtuais = coletarDadosSemanais();
        delete semanasAtuais["semana_" + (currentWeekCount + 1)];
        gerarTabelaSemanal(currentWeekCount, semanasAtuais);
    } else {
        alert("A última semana não está vazia. Limpe os campos antes de removê-la.");
    }
}

async function salvarPlanoAula() {
    var componente = document.getElementById("componenteSelect").value;
    var trimestre = document.getElementById("trimestreSelect").value;
    var aulaIndex = document.getElementById("planoAulaNumSelect").value;
    var turma = document.getElementById("turma").value || "";
    var professor = document.getElementById("professorRegente").value || "";
    var ano = document.getElementById("anoSelect").value;
    
    if (aulaIndex === "" || !currentDataRows[aulaIndex]) { 
        alert("Selecione o número da aula."); 
        return; 
    }
    
    var habilidade = currentDataRows[aulaIndex];
    var semanas = coletarDadosSemanais();
    var planoKey = getPlanoKey(componente, ano, trimestre, aulaIndex);
    
    var planoData = {
        componente: componente,
        trimestre: trimestre,
        ano: ano,
        turma: turma,
        professor: professor,
        aulaNum: parseInt(aulaIndex) + 1,
        indice: parseInt(aulaIndex),
        unidade: habilidade.unidade,
        objetos: habilidade.objetos,
        habilidades: habilidade.habilidades,
        expectativas: habilidade.expectativas,
        periodosTotal: habilidade.periodos || 0,
        semanas: semanas,
        data: new Date().toISOString()
    };
    
    await salvarPlano(planoKey, planoData);
}

async function limparPlanoAula() {
    var componente = document.getElementById("componenteSelect").value;
    var trimestre = document.getElementById("trimestreSelect").value;
    var aulaIndex = document.getElementById("planoAulaNumSelect").value;
    var ano = document.getElementById("anoSelect").value;
    
    if (aulaIndex !== "") {
        var planoKey = getPlanoKey(componente, ano, trimestre, aulaIndex);
        await removerPlano(planoKey);
    }
    if (aulaIndex !== "" && currentDataRows[aulaIndex]) {
        carregarConteudoPorAulaPorIndice(parseInt(aulaIndex));
    }
    alert("Plano limpo com sucesso!");
}

function exportarTXT() {
    var area = document.getElementById("areaSelect").value;
    if (area === "Humanas") { alert("Matriz indisponível."); return; }
    var componente = document.getElementById("componenteSelect").value;
    var ano = document.getElementById("anoSelect").value;
    var trimestre = document.getElementById("trimestreSelect").value;
    var turma = document.getElementById("turma").value || "-";
    var professor = document.getElementById("professorRegente").value || "-";
    var cargaAnual = document.getElementById("cargaAnual").value || "0";
    var cargaTrim = document.getElementById("cargaTrimestralDisplay").value;
    var cargaSem = document.getElementById("cargaSemanal").value || "0";
    
    var txt = "=== PLANEJAMENTO 2026 - ESCOLA CARLOS GOMES ===\n";
    txt += "Área: " + area + "\nComponente: " + componente + " | " + ano + " | Turma: " + turma + " | " + trimestre + "\n";
    txt += "Professor: " + professor + "\nCarga anual: " + cargaAnual + " | Trimestral: " + cargaTrim + " | Semanal: " + cargaSem + "\n\n";
    txt += "=== CONTEÚDOS PROGRAMÁTICOS ===\n";
    for (var i = 0; i < currentDataRows.length; i++) {
        var r = currentDataRows[i];
        txt += (i+1) + ". " + r.unidade + "\n";
        txt += "   HABILIDADES: " + (r.habilidades ? r.habilidades.substring(0, 150) : "") + "...\n";
        txt += "   AULA: " + (i+1) + "\n\n";
    }
    var blob = new Blob([txt], {type: "text/plain"});
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "planejamento_" + componente + "_" + ano + "_" + trimestre + ".txt";
    link.click();
    URL.revokeObjectURL(link.href);
}

function imprimirMatriz() {
    var area = document.getElementById("areaSelect").value;
    var componente = document.getElementById("componenteSelect").value;
    var ano = document.getElementById("anoSelect").value;
    var trimestre = document.getElementById("trimestreSelect").value;
    var turma = document.getElementById("turma").value || "-";
    var professor = document.getElementById("professorRegente").value || "-";
    var cargaAnual = document.getElementById("cargaAnual").value || "0";
    var cargaTrim = document.getElementById("cargaTrimestralDisplay").value;
    var cargaSem = document.getElementById("cargaSemanal").value || "0";
    
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<!DOCTYPE html><html><head><title>Matriz - ' + componente + ' - ' + ano + ' - ' + trimestre + '</title>');
    printWindow.document.write('<meta charset="UTF-8">');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: "Arial", "Times New Roman", "Helvetica", sans-serif; margin: 15px; font-size: 11px; }');
    printWindow.document.write('.header-institucional { text-align: center; margin-bottom: 20px; }');
    printWindow.document.write('.header-institucional img { max-width: 160px; margin-bottom: 8px; }');
    printWindow.document.write('.header-institucional .linha { font-family: Arial, sans-serif; font-size: 6pt; margin: 1px 0; }');
    printWindow.document.write('.header-institucional .linha-bold { font-family: Arial, sans-serif; font-size: 6pt; font-weight: bold; margin: 1px 0; }');
    printWindow.document.write('.header-escola { text-align: center; margin: 15px 0 10px 0; }');
    printWindow.document.write('.header-escola h1 { font-size: 14px; margin: 0; }');
    printWindow.document.write('.header-escola h2 { font-size: 12px; margin: 5px 0 0 0; font-weight: normal; }');
    printWindow.document.write('h3 { font-size: 11px; font-weight: bold; margin: 10px 0 5px 0; }');
    printWindow.document.write('table { width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 9px; }');
    printWindow.document.write('th, td { border: 1px solid #000; padding: 4px; text-align: left; vertical-align: top; }');
    printWindow.document.write('th { background: #f0f0f0; font-weight: bold; }');
    printWindow.document.write('td { white-space: normal; word-wrap: break-word; }');
    printWindow.document.write('.info-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 10px; }');
    printWindow.document.write('.info-item { flex: 1; min-width: 120px; }');
    printWindow.document.write('.info-item label { font-weight: bold; display: block; font-size: 9px; }');
    printWindow.document.write('.info-item span { font-size: 10px; }');
    printWindow.document.write('</style></head><body>');
    
    printWindow.document.write('<div class="header-institucional">');
    printWindow.document.write('<img src="brasao.png" alt="Brasão do Estado">');
    printWindow.document.write('<div class="linha">ESTADO DO RIO GRANDE DO SUL</div>');
    printWindow.document.write('<div class="linha">SECRETARIA DA EDUCAÇÃO</div>');
    printWindow.document.write('<div class="linha">SUBSECRETARIA DE DESENVOLVIMENTO DA EDUCAÇÃO</div>');
    printWindow.document.write('<div class="linha-bold">DEPARTAMENTO DE DESENVOLVIMENTO CURRICULAR DA EDUCAÇÃO BÁSICA</div>');
    printWindow.document.write('<div class="linha-bold">DIVISÃO DO ENSINO FUNDAMENTAL E DIVISÃO DO ENSINO MÉDIO</div>');
    printWindow.document.write('</div>');
    
    printWindow.document.write('<div class="header-escola">');
    printWindow.document.write('<h1>Escola Estadual de Ensino Médio Carlos Gomes</h1>');
    printWindow.document.write('<h2>Planejamento Anual 2026 - Matriz de Referência SEDUC RS</h2>');
    printWindow.document.write('</div>');
    
    printWindow.document.write('<h3>IDENTIFICAÇÃO DO PLANEJAMENTO</h3>');
    printWindow.document.write('<div class="info-row">');
    printWindow.document.write('<div class="info-item"><label>Área</label><span>' + area + '</span></div>');
    printWindow.document.write('<div class="info-item"><label>Componente</label><span>' + componente + '</span></div>');
    printWindow.document.write('<div class="info-item"><label>Ano/Série</label><span>' + ano + '</span></div>');
    printWindow.document.write('<div class="info-item"><label>Turma</label><span>' + turma + '</span></div>');
    printWindow.document.write('<div class="info-item"><label>Trimestre</label><span>' + trimestre + '</span></div>');
    printWindow.document.write('</div>');
    printWindow.document.write('<div class="info-row">');
    printWindow.document.write('<div class="info-item"><label>Professor Regente</label><span>' + professor + '</span></div>');
    printWindow.document.write('<div class="info-item"><label>Carga Anual</label><span>' + cargaAnual + 'h</span></div>');
    printWindow.document.write('<div class="info-item"><label>Carga Trimestral</label><span>' + cargaTrim + 'h</span></div>');
    printWindow.document.write('<div class="info-item"><label>Carga Semanal</label><span>' + cargaSem + 'h</span></div>');
    printWindow.document.write('</div>');
    
    printWindow.document.write('<h3>MATRIZ DE REFERÊNCIA - ' + trimestre + ' TRIMESTRE</h3>');
    printWindow.document.write('<table>');
    printWindow.document.write('<thead>');
    printWindow.document.write('<tr>');
    printWindow.document.write('<th>UNIDADE TEMÁTICA</th>');
    printWindow.document.write('<th>HABILIDADES</th>');
    printWindow.document.write('<th>OBJETOS DO CONHECIMENTO</th>');
    printWindow.document.write('<th>EXPECTATIVAS DE APRENDIZAGEM</th>');
    printWindow.document.write('<th>PERÍODOS</th>');
    printWindow.document.write('<th>AULA Nº</th>');
    printWindow.document.write('</tr>');
    printWindow.document.write('</thead><tbody>');
    
    for (var i = 0; i < currentDataRows.length; i++) {
        var r = currentDataRows[i];
        printWindow.document.write('<tr>');
        printWindow.document.write('<td>' + escapeHtml(r.unidade) + '</td>');
        printWindow.document.write('<td>' + escapeHtml(r.habilidades) + '</td>');
        printWindow.document.write('<td>' + escapeHtml(r.objetos) + '</td>');
        printWindow.document.write('<td>' + escapeHtml(r.expectativas) + '</td>');
        printWindow.document.write('<td style="text-align:center">' + (r.periodos || '-') + '</td>');
        printWindow.document.write('<td style="text-align:center">' + (i + 1) + '</td>');
        printWindow.document.write('</tr>');
    }
    
    printWindow.document.write('</tbody>');
    printWindow.document.write('</table>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    
    printWindow.onload = function() { printWindow.print(); };
}

function imprimirPlanos() {
    var area = document.getElementById("areaSelect").value;
    var componente = document.getElementById("componenteSelect").value;
    var ano = document.getElementById("anoSelect").value;
    var trimestre = document.getElementById("trimestreSelect").value;
    var turma = document.getElementById("turma").value || "-";
    var professor = document.getElementById("professorRegente").value || "-";
    
    var planosDoTrimestre = [];
    var prefixo = componente + "_" + ano + "_" + trimestre + "_";
    
    for (var key in planosAula) {
        if (key.startsWith(prefixo)) {
            var plano = planosAula[key];
            if (plano.turma === turma) {
                planosDoTrimestre.push(plano);
            }
        }
    }
    
    planosDoTrimestre.sort(function(a, b) { return a.indice - b.indice; });
    
    if (planosDoTrimestre.length === 0) {
        alert("Nenhum plano de aula encontrado para " + componente + " - " + ano + " - " + trimestre + " - Turma " + turma);
        return;
    }
    
    var dataInicio = getDataInicioTrimestre(planosDoTrimestre);
    var dataFim = getDataFimTrimestre(planosDoTrimestre);
    var periodoDesenvolvimento = "";
    if (dataInicio && dataFim) {
        var inicioBr = toBrazilianDate(dataInicio);
        var fimBr = toBrazilianDate(dataFim);
        if (inicioBr === fimBr) {
            periodoDesenvolvimento = inicioBr;
        } else {
            periodoDesenvolvimento = inicioBr + " a " + fimBr;
        }
    } else {
        periodoDesenvolvimento = "Não definido";
    }
    
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<!DOCTYPE html><html><head><title>Planos de Aula - ' + componente + ' - ' + ano + ' - ' + trimestre + '</title>');
    printWindow.document.write('<meta charset="UTF-8">');
    printWindow.document.write('<style>');
    printWindow.document.write('* { margin: 0; padding: 0; box-sizing: border-box; }');
    printWindow.document.write('body { font-family: "Arial", "Times New Roman", "Helvetica", sans-serif; margin: 15px; font-size: 10px; }');
    printWindow.document.write('h1 { font-size: 13px; margin: 0 0 3px 0; }');
    printWindow.document.write('h2 { font-size: 11px; margin: 0 0 8px 0; }');
    printWindow.document.write('h3 { font-size: 10px; font-weight: bold; margin: 8px 0 4px 0; }');
    printWindow.document.write('h4 { font-size: 10px; font-weight: bold; margin: 6px 0 3px 0; border-left: 2px solid #000; padding-left: 5px; }');
    printWindow.document.write('table { width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 9px; }');
    printWindow.document.write('th, td { border: 1px solid #000; padding: 6px; text-align: left; vertical-align: top; }');
    printWindow.document.write('th { background: #f0f0f0; font-weight: bold; }');
    printWindow.document.write('.info-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; }');
    printWindow.document.write('.info-item { flex: 1; min-width: 100px; }');
    printWindow.document.write('.info-item label { font-weight: bold; display: block; font-size: 8px; }');
    printWindow.document.write('.info-item span { font-size: 9px; }');
    printWindow.document.write('.card-info-print { border: 1px solid #000; padding: 6px; margin: 8px 0; background: #fafafa; }');
    printWindow.document.write('.card-info-print p { margin: 3px 0; }');
    printWindow.document.write('.page-break { page-break-before: always; }');
    printWindow.document.write('.plano-title { font-size: 12px; font-weight: bold; margin: 10px 0 5px 0; border-bottom: 2px solid #000; }');
    printWindow.document.write('td { white-space: normal; word-wrap: break-word; }');
    printWindow.document.write('.expectativas-list { margin: 0; padding-left: 15px; }');
    printWindow.document.write('.expectativas-list li { margin: 2px 0; }');
    printWindow.document.write('.header-institucional { text-align: center; margin-bottom: 15px; }');
    printWindow.document.write('.header-institucional .linha { font-size: 7pt; margin: 1px 0; }');
    printWindow.document.write('.header-institucional .linha-bold { font-size: 7pt; font-weight: bold; margin: 1px 0; }');
    printWindow.document.write('table { page-break-inside: auto; }');
    printWindow.document.write('tr { page-break-inside: avoid; page-break-after: auto; }');
    printWindow.document.write('thead { display: table-header-group; }');
    printWindow.document.write('tfoot { display: table-footer-group; }');
    printWindow.document.write('.card-info-print, .plano-title { page-break-after: avoid; }');
    printWindow.document.write('</style></head><body>');
    
    printWindow.document.write('<div class="header-institucional">');
    printWindow.document.write('<div class="linha">ESTADO DO RIO GRANDE DO SUL</div>');
    printWindow.document.write('<div class="linha">SECRETARIA DA EDUCAÇÃO</div>');
    printWindow.document.write('<div class="linha-bold">Escola Estadual de Ensino Médio Carlos Gomes</div>');
    printWindow.document.write('</div>');
    
    printWindow.document.write('<h1>PLANOS DE AULA - ' + trimestre.toUpperCase() + ' TRIMESTRE</h1>');
    
    printWindow.document.write('<div class="info-row">');
    printWindow.document.write('<div class="info-item"><label>Componente Curricular</label><span>' + componente + '</span></div>');
    printWindow.document.write('<div class="info-item"><label>Ano/Série</label><span>' + ano + '</span></div>');
    printWindow.document.write('<div class="info-item"><label>Turma</label><span>' + turma + '</span></div>');
    printWindow.document.write('<div class="info-item"><label>Professor Regente</label><span>' + professor + '</span></div>');
    printWindow.document.write('<div class="info-item"><label>Período de desenvolvimento</label><span>' + periodoDesenvolvimento + '</span></div>');
    printWindow.document.write('</div>');
    
    for (var idx = 0; idx < planosDoTrimestre.length; idx++) {
        var plano = planosDoTrimestre[idx];
        
        printWindow.document.write('<div>');
        printWindow.document.write('<div class="plano-title">AULA ' + plano.aulaNum + '</div>');
        
        printWindow.document.write('<div class="card-info-print">');
        printWindow.document.write('<p><strong>Unidade Temática:</strong><br>' + (plano.unidade || '-') + '</p>');
        printWindow.document.write('<p><strong>Objetos do Conhecimento:</strong><br>' + (plano.objetos || '-') + '</p>');
        printWindow.document.write('<p><strong>Habilidade:</strong><br>' + (plano.habilidades || '-') + '</p>');
        
        var expectativasHtml = plano.expectativas || '-';
        if (expectativasHtml !== '-' && expectativasHtml.includes('•')) {
            var itens = expectativasHtml.split('<br/>');
            var listaHtml = '<ul class="expectativas-list">';
            for (var i = 0; i < itens.length; i++) {
                var item = itens[i].trim();
                if (item.startsWith('•')) {
                    item = item.substring(1).trim();
                }
                if (item !== '') {
                    listaHtml += '<li>' + item + '</li>';
                }
            }
            listaHtml += '</ul>';
            expectativasHtml = listaHtml;
        }
        printWindow.document.write('<p><strong>Expectativas de Aprendizagem:</strong><br>' + expectativasHtml + '</p>');
        printWindow.document.write('</div>');
        
        printWindow.document.write('<h4>Detalhamento Semanal</h4>');
        
        if (plano.semanas && Object.keys(plano.semanas).length > 0) {
            printWindow.document.write('<table>');
            printWindow.document.write('<thead>');
            printWindow.document.write('<tr>');
            printWindow.document.write('<th style="width:8%">SEMANA</th>');
            printWindow.document.write('<th style="width:10%">DATA</th>');
            printWindow.document.write('<th style="width:6%">PERÍODOS</th>');
            printWindow.document.write('<th style="width:20%">Metodologia</th>');
            printWindow.document.write('<th style="width:18%">Materiais</th>');
            printWindow.document.write('<th style="width:18%">Etapas</th>');
            printWindow.document.write('<th style="width:10%">Evidências</th>');
            printWindow.document.write('<th style="width:10%">Instrumentos</th>');
            printWindow.document.write('</tr>');
            printWindow.document.write('</thead>');
            printWindow.document.write('<tbody>');
            
            var semanasArray = [];
            for (var s in plano.semanas) {
                var num = parseInt(s.split('_')[1]);
                semanasArray.push({ num: num, data: plano.semanas[s] });
            }
            semanasArray.sort(function(a, b) { return a.num - b.num; });
            
            for (var si = 0; si < semanasArray.length; si++) {
                var semanaObj = semanasArray[si];
                var semana = semanaObj.data;
                var numSemana = semanaObj.num;
                var dataFormatada = toBrazilianDate(semana.data);
                
                printWindow.document.write('<tr>');
                printWindow.document.write('<td style="text-align:center"><strong>' + numSemana + '</strong></td>');
                printWindow.document.write('<td>' + (dataFormatada || "-") + '</td>');
                printWindow.document.write('<td style="text-align:center">' + (semana.periodos || "-") + '</td>');
                printWindow.document.write('<td>' + escapeHtml(semana.metodologia) + '</td>');
                printWindow.document.write('<td>' + escapeHtml(semana.materiais) + '</td>');
                printWindow.document.write('<td>' + escapeHtml(semana.etapas) + '</td>');
                printWindow.document.write('<td>' + escapeHtml(semana.evidencias) + '</td>');
                printWindow.document.write('<td>' + escapeHtml(semana.instrumentos) + '</td>');
                printWindow.document.write('</tr>');
            }
            printWindow.document.write('</tbody>');
            printWindow.document.write('</table>');
        } else {
            printWindow.document.write('<p style="margin: 10px 0; font-style: italic;">Nenhum detalhamento semanal cadastrado para esta aula.</p>');
        }
        
        printWindow.document.write('</div>');
        if (idx < planosDoTrimestre.length - 1) {
            printWindow.document.write('<div class="page-break"></div>');
        }
    }
    
    printWindow.document.write('<p style="margin-top: 15px; font-size: 8px; text-align: center;">Última página do documento - Planos de aula - SEDUC RS</p>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.onload = function() { printWindow.print(); };
}

async function recarregarTudo() {
    var area = document.getElementById("areaSelect").value;
    var componente = document.getElementById("componenteSelect").value;
    var ano = document.getElementById("anoSelect").value;
    
    if (!area || !componente || !ano) {
        limparCamposDependentes();
        document.getElementById("trimestreSection").style.display = "none";
        document.getElementById("planoAulaSection").style.display = "none";
        return;
    }
    
    if (area === "Humanas") {
        document.getElementById("headerSubtitle").innerHTML = "Ciências Humanas - Matriz em desenvolvimento";
        limparCamposDependentes();
        return;
    }
    
    document.getElementById("headerSubtitle").innerHTML = "Linguagens e suas Tecnologias - Matriz de Referência SEDUC RS";
    habilitarCampos();
    
    await carregarConfiguracoes();
    replicarParaPlano();
    
    if (Object.keys(database).length === 0) {
        await carregarDatabase(ano);
    }
    
    var trimestre = document.getElementById("trimestreSelect").value;
    var dados = getTableData(componente, trimestre);
    
    if (!dados.length) {
        currentDataRows = [];
        renderTabela();
        selectedRowIndex = -1;
        document.getElementById("trimestreTitle").innerHTML = "Matriz - " + trimestre + " - " + componente + " - " + ano + " (sem dados)";
        return;
    }
    
    currentDataRows = [];
    for (var i = 0; i < dados.length; i++) {
        currentDataRows.push({...dados[i], periodos: dados[i].periodos || 6});
    }
    document.getElementById("trimestreTitle").innerHTML = "Matriz de Referência SEDUC RS - " + trimestre + " TRIMESTRE - " + componente + " - " + ano;
    
    var totalTrim = atualizarCargaTrimestral();
    if (totalTrim > 0 && totalTrim !== "---") distribuirPeriodos(totalTrim);
    else renderTabela();
    
    if (currentDataRows.length > 0) {
        selectedRowIndex = -1;
        renderTabela();
        atualizarDropdownAulas();
        carregarConteudoPorAulaPorIndice(null);
    }
}

document.getElementById("areaSelect").addEventListener("change", function() {
    if (this.value) {
        atualizarComponentes();
        atualizarAnos();
        limparCamposDependentes();
    } else {
        document.getElementById("componenteSelect").innerHTML = '<option value="" selected disabled>-- Selecione o Componente --</option>';
        document.getElementById("componenteSelect").disabled = true;
        document.getElementById("anoSelect").innerHTML = '<option value="" selected disabled>-- Selecione o Ano --</option>';
        document.getElementById("anoSelect").disabled = true;
    }
});

document.getElementById("componenteSelect").addEventListener("change", function() {
    if (this.value && document.getElementById("areaSelect").value && document.getElementById("anoSelect").value) {
        recarregarTudo();
    }
});

document.getElementById("anoSelect").addEventListener("change", function() {
    if (this.value && document.getElementById("areaSelect").value && document.getElementById("componenteSelect").value) {
        database = {};
        recarregarTudo();
    }
});

document.getElementById("trimestreSelect").addEventListener("change", function() {
    if (document.getElementById("areaSelect").value && document.getElementById("componenteSelect").value && document.getElementById("anoSelect").value) {
        recarregarTudo();
    }
});

document.getElementById("turma").addEventListener("input", function() {
    replicarParaPlano();
    salvarConfiguracoes();
});

document.getElementById("professorRegente").addEventListener("input", function() {
    replicarParaPlano();
    salvarConfiguracoes();
});

document.getElementById("cargaAnual").addEventListener("input", function() {
    atualizarCargaTrimestral();
    if (currentDataRows.length && document.getElementById("cargaTrimestralDisplay").value !== "---") {
        distribuirPeriodos(parseInt(document.getElementById("cargaTrimestralDisplay").value));
    }
    salvarConfiguracoes();
});

document.getElementById("cargaSemanal").addEventListener("input", function() {
    salvarConfiguracoes();
});

document.getElementById("planoAulaNumSelect").addEventListener("change", carregarConteudoPorAula);
document.getElementById("salvarPlanoBtn").addEventListener("click", salvarPlanoAula);
document.getElementById("limparPlanoBtn").addEventListener("click", limparPlanoAula);
document.getElementById("addWeekBtn").addEventListener("click", addWeek);
document.getElementById("removeWeekBtn").addEventListener("click", removeWeek);
document.getElementById("exportarTxtBtn").addEventListener("click", exportarTXT);
document.getElementById("imprimirMatrizBtn").addEventListener("click", imprimirMatriz);
document.getElementById("imprimirPlanosBtn").addEventListener("click", imprimirPlanos);

document.getElementById('themeToggleBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i> Claro' : '<i class="fas fa-moon"></i> Escuro';
});

// ==================== SR. PAFÚNCIO - ESPECIALISTA EM AVALIAÇÃO ====================
// Baseado no Caderno "Gestão do Ensino e da Aprendizagem" - ICE

const srPafuncio = {
    nome: "Sr. Pafúncio",
    titulo: "Especialista em Avaliação da Aprendizagem",
    lema: "Avaliar não é caçar erros. É iluminar acertos e mostrar caminhos.",
    
    conhecimentos: {
        principios: [
            "A avaliação é prática processual a serviço da aprendizagem",
            "Erro é oportunidade de ensino, não de punição",
            "Avaliação deve considerar múltiplas dimensões: cognitiva, afetiva, psicomotora, social",
            "Feedback individualizado é mais importante que nota"
        ],
        tipos: {
            inicial: "Diagnóstica - Identifica conhecimentos prévios no início do ano/conteúdo",
            formativa: "Processual - Acompanha a aprendizagem ao longo das atividades",
            somativa: "Final - Verifica resultados ao final de cada etapa"
        }
    },
    
    palavrasChave: {
        leitura: ["leitura", "texto", "poema", "conto", "crônica", "romance", "lenda", "mito", "narrativa", "literatura", "interpretação", "compreensão"],
        producaoTexto: ["produção", "redação", "escrita", "texto", "parágrafo", "dissertação", "artigo", "reescrita", "revisão"],
        gramatica: ["gramática", "morfologia", "sintaxe", "classe", "palavra", "substantivo", "adjetivo", "verbo", "concordância", "ortografia", "pontuação"],
        oralidade: ["oral", "apresentação", "seminário", "debate", "exposição", "discurso", "argumentação", "persuasão", "entrevista"],
        grupo: ["grupo", "dupla", "equipe", "colaborativo", "coletivo", "cooperativo"],
        pesquisa: ["pesquisa", "investigação", "fonte", "consulta", "levantamento", "dados", "informação"],
        avaliacaoFormal: ["prova", "teste", "avaliação", "bimestral", "trimestral", "somativa"],
        autoavaliacao: ["autoavaliação", "reflexão", "metacognição", "consciência"],
        pratica: ["prática", "experimento", "oficina", "atividade prática", "maquete", "projeto"],
        diagnostico: ["diagnóstico", "diagnóstica", "inicial", "prévio", "nivelamento"],
        correcao: ["correção", "feedback", "devolutiva", "revisão textual"]
    },
    
    sugestoes: {
        leitura: {
            instrumentos: [
                "Observação direta com registro em diário de classe",
                "Roda de conversa / debate mediado",
                "Ficha de acompanhamento da leitura",
                "Autoavaliação oral da compreensão",
                "Registro de inferências e hipóteses"
            ],
            justificativa: "A leitura envolve processos internos que precisam ser externalizados. A observação e a conversa permitem captar a compreensão sem reduzir a nota."
        },
        producaoTexto: {
            instrumentos: [
                "Rubrica de correção com critérios claros (coerência, coesão, adequação ao gênero)",
                "Devolutiva escrita individualizada",
                "Reescrita orientada com comparação entre versões",
                "Autoavaliação do processo de escrita",
                "Portfólio com coletânea das produções"
            ],
            justificativa: "Produção textual é processo. A rubrica orienta o estudante sobre os critérios, e a reescrita consolida a aprendizagem."
        },
        gramatica: {
            instrumentos: [
                "Correção coletiva de exercícios no quadro",
                "Verificação de caderno com checklist",
                "Lista de exercícios com feedback escrito",
                "Pequeno teste diagnóstico para identificar lacunas",
                "Jogo didático com pontuação formativa"
            ],
            justificativa: "Gramática se aprende praticando. A correção coletiva transforma erro em aprendizado para toda a turma."
        },
        oralidade: {
            instrumentos: [
                "Rúbrica de apresentação oral (conteúdo, clareza, postura, tempo)",
                "Autoavaliação do desempenho",
                "Avaliação pelos pares com critérios combinados",
                "Gravação e autoescuta para reflexão",
                "Registro das intervenções em debate"
            ],
            justificativa: "A oralidade precisa ser observada em múltiplos aspectos. A rubrica dá transparência e a autoavaliação desenvolve consciência."
        },
        grupo: {
            instrumentos: [
                "Autoavaliação individual da contribuição no grupo",
                "Avaliação pelos pares (colegas avaliam colegas)",
                "Diário de bordo do grupo (registro das reuniões e decisões)",
                "Observação do professor com roteiro específico",
                "Relatório final com descrição das responsabilidades"
            ],
            justificativa: "Trabalho em grupo exige avaliar processo e produto. A autoavaliação e a avaliação pelos pares desenvolvem corresponsabilidade."
        },
        pesquisa: {
            instrumentos: [
                "Portfólio com registros do processo de busca",
                "Relatório de pesquisa estruturado",
                "Apresentação dos resultados com defesa oral",
                "Autoavaliação do percurso investigativo",
                "Checklist de fontes e confiabilidade"
            ],
            justificativa: "Pesquisa é sobre o processo, não só o resultado final. O portfólio documenta o caminho percorrido."
        },
        avaliacaoFormal: {
            instrumentos: [
                "Prova com questões de múltipla escolha e dissertativas",
                "Análise de desempenho por descritor/habilidade",
                "Correção com devolutiva qualitativa",
                "Autoavaliação pós-prova (o que acertou, o que errou, por quê)",
                "Prova refeita como estudo dirigido"
            ],
            justificativa: "Prova não é vilã. Prova sem devolutiva é que é. O importante é o que se aprende com ela."
        },
        autoavaliacao: {
            instrumentos: [
                "Ficha de autoavaliação estruturada com perguntas direcionadoras",
                "Diário de aprendizagem (registro semanal)",
                "Roda de conversa metacognitiva mediada pelo professor",
                "Semáforo da aprendizagem (verde, amarelo, vermelho)",
                "Carta ao professor sobre o próprio desempenho"
            ],
            justificativa: "Autoavaliação desenvolve protagonismo. O estudante precisa se enxergar como corresponsável pela própria aprendizagem."
        },
        pratica: {
            instrumentos: [
                "Observação com roteiro de execução (checklist)",
                "Relatório descritivo da atividade",
                "Portfólio de produções práticas",
                "Demonstração oral do aprendizado",
                "Autoavaliação do processo de criação"
            ],
            justificativa: "Atividades práticas exigem avaliação de habilidades procedimentais. A observação direta é insubstituível."
        },
        diagnostico: {
            instrumentos: [
                "Questionário de conhecimentos prévios",
                "Atividade diagnóstica curta e objetiva",
                "Roda de conversa para levantamento de saberes",
                "Mapa conceitual inicial",
                "Análise de erros por habilidade/descritor"
            ],
            justificativa: "Diagnóstico é o ponto de partida. Sem saber o que o estudante já sabe, não dá para planejar o ensino."
        },
        correcao: {
            instrumentos: [
                "Verificação das correções feitas pelos alunos",
                "Análise da reescrita comparativa",
                "Observação da participação na correção coletiva",
                "Registro de progresso individual (antes/depois)",
                "Feedback oral individualizado"
            ],
            justificativa: "Correção é momento de aprendizagem, não de punição. O importante é o estudante identificar e corrigir os próprios erros."
        }
    },
    
    analisarAula: function(aulaData) {
        var textoCompleto = (aulaData.unidade || "") + " " + 
                            (aulaData.objetos || "") + " " + 
                            (aulaData.habilidades || "") + " " + 
                            (aulaData.expectativas || "");
        
        textoCompleto = textoCompleto.toLowerCase();
        
        var tipoEncontrado = null;
        var pontuacao = {};
        
        for (var tipo in this.palavrasChave) {
            var palavras = this.palavrasChave[tipo];
            pontuacao[tipo] = 0;
            for (var i = 0; i < palavras.length; i++) {
                if (textoCompleto.includes(palavras[i])) {
                    pontuacao[tipo]++;
                }
            }
        }
        
        var maxPontos = 0;
        for (var tipo in pontuacao) {
            if (pontuacao[tipo] > maxPontos) {
                maxPontos = pontuacao[tipo];
                tipoEncontrado = tipo;
            }
        }
        
        if (!tipoEncontrado || maxPontos === 0) {
            tipoEncontrado = "leitura";
        }
        
        var sugestao = this.sugestoes[tipoEncontrado];
        
        return {
            tipoAtividade: tipoEncontrado,
            instrumentos: sugestao.instrumentos,
            justificativa: sugestao.justificativa,
            lema: this.lema
        };
    },
    
    gerarTooltip: function(sugestao) {
        // Corrigido para funcionar tanto no modo claro quanto escuro
        var isDark = document.body.classList.contains('dark');
        var bgColor = isDark ? '#1e2a1e' : '#f0f7f0';
        var textColor = isDark ? '#e0e0e0' : '#333';
        var borderColor = isDark ? '#6abf69' : '#4CAF50';
        var lemaColor = isDark ? '#a5d6a7' : '#2E7D32';
        
        var html = '<div class="pafuncio-card" style="background:' + bgColor + '; border-left: 4px solid ' + borderColor + '; padding: 12px; margin: 10px 0; border-radius: 8px; color: ' + textColor + ';">';
        html += '<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">';
        html += '<span style="font-size: 24px;">🧔</span>';
        html += '<div><strong style="color: ' + borderColor + ';">Sr. Pafúncio</strong><br><span style="font-size: 12px; color: ' + (isDark ? '#aaa' : '#555') + ';">Especialista em Avaliação</span></div>';
        html += '</div>';
        html += '<p style="font-style: italic; color: ' + lemaColor + '; margin: 8px 0;">"' + sugestao.lema + '"</p>';
        html += '<p><strong>🔍 Análise:</strong> Identifiquei esta atividade como do tipo <strong>' + this.obterNomeTipo(sugestao.tipoAtividade) + '</strong></p>';
        html += '<p><strong>📋 Instrumentos sugeridos:</strong></p>';
        html += '<ul style="margin: 5px 0 10px 20px; color: ' + textColor + ';">';
        for (var i = 0; i < sugestao.instrumentos.length; i++) {
            html += '<li style="margin: 3px 0;">' + sugestao.instrumentos[i] + '</li>';
        }
        html += '</ul>';
        html += '<p><strong>💡 Por quê?</strong> ' + sugestao.justificativa + '</p>';
        html += '<div style="margin-top: 10px; display: flex; gap: 10px;">';
        html += '<button class="btn-aplicar-pafuncio" data-tipo="' + sugestao.tipoAtividade + '" style="background:' + borderColor + '; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">✅ Aplicar sugestões</button>';
        html += '<button class="btn-fechar-pafuncio" style="background:#888; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">✖ Fechar</button>';
        html += '</div>';
        html += '</div>';
        return html;
    },
    
    obterNomeTipo: function(tipo) {
        var nomes = {
            leitura: "📖 Leitura e Interpretação",
            producaoTexto: "✍️ Produção Textual",
            gramatica: "📚 Gramática / Análise Linguística",
            oralidade: "🎤 Oralidade / Apresentação",
            grupo: "👥 Trabalho em Grupo",
            pesquisa: "🔍 Pesquisa / Investigação",
            avaliacaoFormal: "📝 Avaliação Formal (Prova/Teste)",
            autoavaliacao: "🪞 Autoavaliação / Reflexão",
            pratica: "🛠️ Atividade Prática / Experimento",
            diagnostico: "📊 Avaliação Diagnóstica",
            correcao: "🔄 Correção / Feedback"
        };
        return nomes[tipo] || tipo;
    },
    
aplicarInstrumentos: function(semanaIndex, instrumentos) {
    // CORREÇÃO: seletor específico para o campo de instrumentos da semana correta
    var campoInstrumentos = document.querySelector(`.semana-instrumentos[data-semana="${semanaIndex}"]`);
    
    if (!campoInstrumentos) {
        // Fallback: tenta encontrar pela linha da tabela
        var linhas = document.querySelectorAll("#semanalTbody tr");
        if (linhas.length >= semanaIndex) {
            var linha = linhas[semanaIndex - 1];
            campoInstrumentos = linha ? linha.querySelector('textarea:last-child') : null;
        }
    }
    
    if (campoInstrumentos) {
        var novoTexto = "• " + instrumentos.join("\n• ");
        var valorAtual = campoInstrumentos.value;
        
        if (valorAtual && valorAtual.trim() !== "" && !valorAtual.includes("• ")) {
            campoInstrumentos.value = novoTexto + "\n\n" + valorAtual;
        } else if (valorAtual && valorAtual.trim() !== "") {
            campoInstrumentos.value = valorAtual + "\n\n" + novoTexto;
        } else {
            campoInstrumentos.value = novoTexto;
        }
        
        showStatus("🧔 Sr. Pafúncio: Instrumentos aplicados na Semana " + semanaIndex + "!", false);
        return true;
    }
    
    showStatus("🧔 Sr. Pafúncio: Não encontrei o campo da Semana " + semanaIndex, true);
    return false;
}
};

// Variável global para guardar a semana atual do modal
var semanaModalAtual = null;

// Modal/flutuante do Sr. Pafúncio
function abrirModalPafuncio(semanaIndex) {
    semanaModalAtual = semanaIndex;
    
    var aulaIndex = document.getElementById("planoAulaNumSelect");
    if (!aulaIndex || !aulaIndex.value || !currentDataRows[aulaIndex.value]) {
        alert("🧔 Sr. Pafúncio: Selecione primeiro o número da aula.");
        return;
    }
    
    var aulaData = currentDataRows[aulaIndex.value];
    var sugestao = srPafuncio.analisarAula(aulaData);
    
    var modalExistente = document.getElementById('pafuncioModal');
    if (modalExistente) {
        modalExistente.remove();
    }
    
    var modal = document.createElement('div');
    modal.id = 'pafuncioModal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.7)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '10000';
    
    var modalContent = document.createElement('div');
    modalContent.style.backgroundColor = document.body.classList.contains('dark') ? '#2d2d2d' : 'white';
    modalContent.style.borderRadius = '12px';
    modalContent.style.maxWidth = '550px';
    modalContent.style.width = '90%';
    modalContent.style.maxHeight = '80vh';
    modalContent.style.overflow = 'auto';
    modalContent.style.padding = '20px';
    modalContent.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    modalContent.style.color = document.body.classList.contains('dark') ? '#e0e0e0' : '#333';
    
    modalContent.innerHTML = srPafuncio.gerarTooltip(sugestao);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    var btnAplicar = modalContent.querySelector('.btn-aplicar-pafuncio');
    var btnFechar = modalContent.querySelector('.btn-fechar-pafuncio');
    
    if (btnAplicar) {
        btnAplicar.onclick = function() {
            srPafuncio.aplicarInstrumentos(semanaModalAtual, sugestao.instrumentos);
            modal.remove();
        };
    }
    
    if (btnFechar) {
        btnFechar.onclick = function() {
            modal.remove();
        };
    }
    
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

function adicionarBotoesPafuncio() {
    // CORREÇÃO: pega apenas as linhas do corpo da tabela, não o cabeçalho
    var linhas = document.querySelectorAll("#semanalTbody tr");
    
    for (var i = 0; i < linhas.length; i++) {
        var linha = linhas[i];
        var colunaBotoes = linha.querySelector('.col-botoes');
        
        // Se a coluna de botões não existe ou já tem botão, pula
        if (!colunaBotoes || colunaBotoes.querySelector('.btn-pafuncio')) {
            continue;
        }
        
        var semana = i + 1; // semana 1, 2, 3...
        
        var btnPafuncio = document.createElement('button');
        btnPafuncio.innerHTML = '🧔 Sr. Pafúncio';
        btnPafuncio.className = 'btn-pafuncio';
        btnPafuncio.style.background = '#2E7D32';
        btnPafuncio.style.color = 'white';
        btnPafuncio.style.border = 'none';
        btnPafuncio.style.padding = '6px 10px';
        btnPafuncio.style.borderRadius = '4px';
        btnPafuncio.style.cursor = 'pointer';
        btnPafuncio.style.fontSize = '11px';
        btnPafuncio.style.marginTop = '5px';
        btnPafuncio.style.width = '100%';
        btnPafuncio.setAttribute('data-semana', semana);
        
        btnPafuncio.onclick = (function(s) {
            return function() { 
                console.log("🧔 Sr. Pafúncio: clicado na semana", s);
                abrirModalPafuncio(s); 
            };
        })(semana);
        
        colunaBotoes.appendChild(btnPafuncio);
    }
}

// Sobrescrever funções para incluir os botões
var gerarTabelaSemanalOriginal = window.gerarTabelaSemanal;
if (typeof gerarTabelaSemanalOriginal === 'function') {
    window.gerarTabelaSemanal = function(weekCount, salvos) {
        if (gerarTabelaSemanalOriginal) gerarTabelaSemanalOriginal(weekCount, salvos);
        setTimeout(adicionarBotoesPafuncio, 50);
    };
}

var addWeekOriginal = window.addWeek;
if (typeof addWeekOriginal === 'function') {
    window.addWeek = function() {
        if (addWeekOriginal) addWeekOriginal();
        setTimeout(adicionarBotoesPafuncio, 100);
    };
}

var removeWeekOriginal = window.removeWeek;
if (typeof removeWeekOriginal === 'function') {
    window.removeWeek = function() {
        if (removeWeekOriginal) removeWeekOriginal();
        setTimeout(adicionarBotoesPafuncio, 100);
    };
}

function inicializarSrPafuncio() {
    console.log("🧔 Sr. Pafúncio carregado com sucesso!");
    console.log('Lema: "' + srPafuncio.lema + '"');
    setTimeout(adicionarBotoesPafuncio, 500);
}

// Inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarSrPafuncio);
} else {
    inicializarSrPafuncio();
}

// ==================== FINAL DO BLOCO DO SR. PAFÚNCIO - ESPECIALISTA EM AVALIAÇÃO ====================

// ==================== AUTO-RESIZE PARA TEXTAREAS ====================
// Função que ajusta automaticamente a altura da textarea ao conteúdo
function autoResizeTextarea(textarea) {
    if (!textarea) return;
    
    // Reseta a altura para calcular corretamente
    textarea.style.height = 'auto';
    
    // Define a nova altura com base no scrollHeight (conteúdo)
    var newHeight = Math.max(textarea.scrollHeight, 40); // altura mínima 40px
    textarea.style.height = newHeight + 'px';
}

// Função para aplicar auto-resize em todas as textareas da tabela semanal
function aplicarAutoResizeEmTodasTextareas() {
    var textareas = document.querySelectorAll('#semanalTbody textarea');
    for (var i = 0; i < textareas.length; i++) {
        autoResizeTextarea(textareas[i]);
    }
}

// Handler separado para evitar duplicação
function autoResizeHandler(e) {
    autoResizeTextarea(e.target);
}

// Função para configurar os eventos de input em todas as textareas
function configurarAutoResizeEventos() {
    var textareas = document.querySelectorAll('#semanalTbody textarea');
    for (var i = 0; i < textareas.length; i++) {
        var textarea = textareas[i];
        
        // Remove event listener antigo para evitar duplicação
        textarea.removeEventListener('input', autoResizeHandler);
        
        // Adiciona novo event listener
        textarea.addEventListener('input', autoResizeHandler);
        
        // Aplica o resize imediatamente (para textos já preenchidos)
        autoResizeTextarea(textarea);
    }
}

// Observador de mutações para detectar quando novas linhas são adicionadas na tabela
var observadorTextareas = null;

function iniciarObservadorTextareas() {
    if (observadorTextareas) {
        observadorTextareas.disconnect();
    }
    
    var tabelaBody = document.getElementById('semanalTbody');
    if (!tabelaBody) return;
    
    observadorTextareas = new MutationObserver(function(mutations) {
        var precisaAtualizar = false;
        
        for (var i = 0; i < mutations.length; i++) {
            var mutation = mutations[i];
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                precisaAtualizar = true;
                break;
            }
        }
        
        if (precisaAtualizar) {
            setTimeout(function() {
                configurarAutoResizeEventos();
            }, 100);
        }
    });
    
    observadorTextareas.observe(tabelaBody, { childList: true, subtree: true });
}

// Guardar a função original ANTES de sobrescrever
var originalGerarTabelaSemanal = gerarTabelaSemanal;
var originalAddWeek = addWeek;
var originalRemoveWeek = removeWeek;

// Sobrescrever a função gerarTabelaSemanal
gerarTabelaSemanal = function(weekCount, salvos) {
    // Chama a função original
    originalGerarTabelaSemanal(weekCount, salvos);
    
    // Aplica auto-resize nas novas textareas
    setTimeout(function() {
        configurarAutoResizeEventos();
    }, 100);
};

// Sobrescrever addWeek
addWeek = function() {
    originalAddWeek();
    setTimeout(function() {
        configurarAutoResizeEventos();
    }, 150);
};

// Sobrescrever removeWeek
removeWeek = function() {
    originalRemoveWeek();
    setTimeout(function() {
        configurarAutoResizeEventos();
    }, 150);
};

// Inicializar o observador (sem tentar configurar textareas que não existem ainda)
function inicializarAutoResize() {
    iniciarObservadorTextareas();
    // Não chama configurarAutoResizeEventos aqui porque a tabela ainda não existe
    console.log("🧔 Auto-resize: observador iniciado, aguardando criação da tabela");
}

// Inicializar apenas o observador, não as textareas
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarAutoResize);
} else {
    inicializarAutoResize();
}

async function init() {
    await carregarPlanos();
}

init();