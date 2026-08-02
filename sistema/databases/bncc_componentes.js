// ============================================================
// BNCC COMPONENTES CURRICULARES - RCG
// Extraído do RCGrecorte.pdf - Coluna 4
// Códigos com faixa etária (12, 15, 35, 67, 69, 89)
// ============================================================

const bnccComponentes = {
    "titulo": "BNCC - Componentes Curriculares (RCG)",
    "fonte": "RCG - Recorte Curricular Gaúcho",
    "codigos": {
        // ============================================================
        // LÍNGUA PORTUGUESA - FAIXAS
        // ============================================================
        "EF12LP03": {
            "codigo": "EF12LP03",
            "descricao": "Copiar textos breves, mantendo suas características e voltando para o texto sempre que tiver dúvidas sobre sua distribuição gráfica, espaçamento entre as palavras, escrita das palavras e pontuação.",
            "componente": "Língua Portuguesa",
            "anos": ["1º ano", "2º ano"],
            "faixa": "12" // 1º e 2º ano
        },
        "EF12LP04": {
            "codigo": "EF12LP04",
            "descricao": "Ler e compreender, em colaboração com os colegas e com a ajuda do professor ou já com certa autonomia, listas, agendas, calendários, avisos, convites, receitas, instruções de montagem (digitais ou impressos), dentre outros gêneros do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto do texto e relacionando sua forma de organização à sua finalidade.",
            "componente": "Língua Portuguesa",
            "anos": ["1º ano", "2º ano"],
            "faixa": "12"
        },
        "EF12LP18": {
            "codigo": "EF12LP18",
            "descricao": "Apreciar poemas e outros textos versificados, observando rimas, sonoridades, jogos de palavras, reconhecendo seu pertencimento ao mundo imaginário e sua dimensão de encantamento, jogo e fruição.",
            "componente": "Língua Portuguesa",
            "anos": ["1º ano", "2º ano"],
            "faixa": "12"
        },
        // ... mais códigos de LP

        // ============================================================
        // LÍNGUA PORTUGUESA - ANOS ESPECÍFICOS (01, 02, 03, 04, 05)
        // ============================================================
        "EF01LP03": {
            "codigo": "EF01LP03",
            "descricao": "Observar escritas convencionais, comparando-as às suas produções escritas, percebendo semelhanças e diferenças.",
            "componente": "Língua Portuguesa",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01LP04": {
            "codigo": "EF01LP04",
            "descricao": "Distinguir as letras do alfabeto de outros sinais gráficos.",
            "componente": "Língua Portuguesa",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01LP05": {
            "codigo": "EF01LP05",
            "descricao": "Reconhecer o sistema de escrita alfabética como representação dos sons da fala.",
            "componente": "Língua Portuguesa",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01LP08": {
            "codigo": "EF01LP08",
            "descricao": "Relacionar elementos sonoros (sílabas, fonemas, partes de palavras) com sua representação escrita.",
            "componente": "Língua Portuguesa",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01LP09": {
            "codigo": "EF01LP09",
            "descricao": "Comparar palavras, identificando semelhanças e diferenças entre sons de sílabas iniciais.",
            "componente": "Língua Portuguesa",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01LP18": {
            "codigo": "EF01LP18",
            "descricao": "Registrar, em colaboração com os colegas e com a ajuda do professor, cantigas, quadras, quadrinhas, parlendas, trava-línguas, dentre outros gêneros do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
            "componente": "Língua Portuguesa",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01LP25": {
            "codigo": "EF01LP25",
            "descricao": "Produzir, tendo o professor como escriba, recontagens de histórias lidas pelo professor, histórias imaginadas ou baseadas em livros de imagens, observando a forma de composição de textos narrativos (personagens, enredo, tempo e espaço).",
            "componente": "Língua Portuguesa",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01LP26": {
            "codigo": "EF01LP26",
            "descricao": "Identificar elementos de uma narrativa lida ou escutada, incluindo personagens, enredo, tempo e espaço.",
            "componente": "Língua Portuguesa",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF02LP01": {
            "codigo": "EF02LP01",
            "descricao": "Utilizar, ao produzir o texto, grafia correta de palavras conhecidas ou com estruturas silábicas já dominadas, letras maiúsculas em início de frases e em substantivos próprios, segmentação entre as palavras, ponto final, ponto de interrogação e ponto de exclamação.",
            "componente": "Língua Portuguesa",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02LP05": {
            "codigo": "EF02LP05",
            "descricao": "Ler e escrever corretamente palavras com marcas de nasalidade (til, m, n).",
            "componente": "Língua Portuguesa",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02LP06": {
            "codigo": "EF02LP06",
            "descricao": "Perceber o princípio acrofônico que opera nos nomes das letras do alfabeto.",
            "componente": "Língua Portuguesa",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02LP09": {
            "codigo": "EF02LP09",
            "descricao": "Usar adequadamente ponto final, ponto de interrogação e ponto de exclamação.",
            "componente": "Língua Portuguesa",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02LP26": {
            "codigo": "EF02LP26",
            "descricao": "Ler e compreender, com certa autonomia, textos literários, de gêneros variados, desenvolvendo o gosto pela leitura.",
            "componente": "Língua Portuguesa",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02LP29": {
            "codigo": "EF02LP29",
            "descricao": "Observar, em poemas visuais, o formato do texto na página, as ilustrações e outros efeitos visuais.",
            "componente": "Língua Portuguesa",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF03LP06": {
            "codigo": "EF03LP06",
            "descricao": "Identificar a sílaba tônica em palavras, classificando-as em oxítonas, paroxítonas e proparoxítonas.",
            "componente": "Língua Portuguesa",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03LP12": {
            "codigo": "EF03LP12",
            "descricao": "Ler e compreender, com autonomia, cartas pessoais e diários, com expressão de sentimentos e opiniões, dentre outros gêneros do campo da vida cotidiana, de acordo com as convenções do gênero carta e considerando a situação comunicativa e o tema/assunto do texto.",
            "componente": "Língua Portuguesa",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03LP14": {
            "codigo": "EF03LP14",
            "descricao": "Planejar e produzir textos injuntivos instrucionais, com a estrutura própria desses textos (verbos imperativos, indicação de passos a ser seguidos) e mesclando palavras, imagens e recursos gráfico-visuais, considerando a situação comunicativa e o tema/assunto do texto.",
            "componente": "Língua Portuguesa",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03LP22": {
            "codigo": "EF03LP22",
            "descricao": "Planejar e produzir, em colaboração com os colegas, telejornal para público infantil com algumas notícias e textos de campanhas que possam ser repassados oralmente ou em meio digital, em áudio ou vídeo, considerando a situação comunicativa, a organização específica da fala nesses gêneros e o tema/assunto/finalidade dos textos.",
            "componente": "Língua Portuguesa",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03LP24": {
            "codigo": "EF03LP24",
            "descricao": "Ler/ouvir e compreender, com autonomia, relatos de observações e de pesquisas em fontes de informações, considerando a situação comunicativa e o tema/assunto do texto.",
            "componente": "Língua Portuguesa",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03LP26": {
            "codigo": "EF03LP26",
            "descricao": "Identificar e reproduzir, em relatórios de observação e pesquisa, a formatação e diagramação específica desses gêneros (passos ou listas de itens, tabelas, ilustrações, gráficos, resumo dos resultados), inclusive em suas versões orais.",
            "componente": "Língua Portuguesa",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF04LP12": {
            "codigo": "EF04LP12",
            "descricao": "Assistir, em vídeo digital, a programa infantil com instruções de montagem, de jogos e brincadeiras e, a partir dele, planejar e produzir tutoriais em áudio ou vídeo.",
            "componente": "Língua Portuguesa",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04LP21": {
            "codigo": "EF04LP21",
            "descricao": "Planejar e produzir textos sobre temas de interesse, com base em resultados de observações e pesquisas em fontes de informações impressas ou eletrônicas, incluindo, quando pertinente, imagens e gráficos ou tabelas simples, considerando a situação comunicativa e o tema/assunto do texto.",
            "componente": "Língua Portuguesa",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04LP22": {
            "codigo": "EF04LP22",
            "descricao": "Planejar e produzir, com certa autonomia, verbetes de enciclopédia infantil, digitais ou impressos, considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
            "componente": "Língua Portuguesa",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04LP23": {
            "codigo": "EF04LP23",
            "descricao": "Identificar e reproduzir, em verbetes de enciclopédia infantil, digitais ou impressos, a formatação e diagramação específica desse gênero (título do verbete, definição, detalhamento, curiosidades), considerando a situação comunicativa e o tema/assunto/finalidade do texto.",
            "componente": "Língua Portuguesa",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04LP24": {
            "codigo": "EF04LP24",
            "descricao": "Identificar e reproduzir, em seu formato, tabelas, diagramas e gráficos em relatórios de observação e pesquisa, como forma de apresentação de dados e informações.",
            "componente": "Língua Portuguesa",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04LP27": {
            "codigo": "EF04LP27",
            "descricao": "Identificar, em textos dramáticos, marcadores das falas das personagens e de cena.",
            "componente": "Língua Portuguesa",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04LP28": {
            "codigo": "EF04LP28",
            "descricao": "Identificar e reproduzir, em seu formato, tabelas, diagramas e gráficos em relatórios de observação e pesquisa, como forma de apresentação de dados e informações.",
            "componente": "Língua Portuguesa",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF05LP03": {
            "codigo": "EF05LP03",
            "descricao": "Acentuar corretamente palavras oxítonas, paroxítonas e proparoxítonas.",
            "componente": "Língua Portuguesa",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05LP05": {
            "codigo": "EF05LP05",
            "descricao": "Identificar a expressão de presente, passado e futuro em tempos verbais do modo indicativo.",
            "componente": "Língua Portuguesa",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05LP11": {
            "codigo": "EF05LP11",
            "descricao": "Registrar, com autonomia, anedotas, piadas e cartuns, dentre outros gêneros do campo da vida cotidiana, de acordo com as convenções do gênero e considerando a situação comunicativa e a finalidade do texto.",
            "componente": "Língua Portuguesa",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05LP14": {
            "codigo": "EF05LP14",
            "descricao": "Identificar e reproduzir, em textos de resenha crítica de brinquedos ou livros de literatura infantil, a formatação própria desses textos (apresentação e avaliação do produto).",
            "componente": "Língua Portuguesa",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05LP15": {
            "codigo": "EF05LP15",
            "descricao": "Ler/assistir e compreender, com autonomia, notícias, reportagens, vídeos em vlogs argumentativos, dentre outros gêneros do campo político-cidadão, de acordo com as convenções dos gêneros e considerando a situação comunicativa e o tema/assunto do texto.",
            "componente": "Língua Portuguesa",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05LP16": {
            "codigo": "EF05LP16",
            "descricao": "Comparar informações sobre um mesmo fato veiculadas em diferentes mídias e concluir sobre qual é mais confiável e por quê.",
            "componente": "Língua Portuguesa",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05LP27": {
            "codigo": "EF05LP27",
            "descricao": "Utilizar, ao produzir o texto, recursos de coesão pronominal (pronomes anafóricos) e articuladores de relações de sentido (tempo, causa, oposição, conclusão, comparação), com nível adequado de informatividade.",
            "componente": "Língua Portuguesa",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05LP28": {
            "codigo": "EF05LP28",
            "descricao": "Observar, em ciberpoemas e minicontos infantis em mídia digital, os recursos multissemióticos presentes nesses textos digitais.",
            "componente": "Língua Portuguesa",
            "anos": ["5º ano"],
            "faixa": "05"
        },

        // ============================================================
        // LÍNGUA PORTUGUESA - ANOS FINAIS (6º AO 9º) - FAIXAS 67, 69, 89
        // ============================================================
        "EF67LP05": {
            "codigo": "EF67LP05",
            "descricao": "Identificar e avaliar teses/opiniões/posicionamentos explícitos e argumentos em textos argumentativos (carta de leitor, comentário, artigo de opinião, resenha crítica etc.), manifestando concordância ou discordância.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },
        "EF67LP07": {
            "codigo": "EF67LP07",
            "descricao": "Identificar o uso de recursos persuasivos em textos argumentativos diversos (como a elaboração do título, escolhas lexicais, construções metafóricas, a explicitação ou a ocultação de fontes de informação) e perceber seus efeitos de sentido.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },
        "EF67LP09": {
            "codigo": "EF67LP09",
            "descricao": "Planejar notícia impressa e para circulação em outras mídias (rádio ou TV/vídeo), tendo em vista as condições de produção, do texto – objetivo, leitores/espectadores, veículos e mídia de circulação etc. –, a partir da escolha do fato a ser noticiado (de relevância para a turma, escola ou comunidade), do levantamento de dados e informações sobre o fato – que pode envolver entrevistas com envolvidos ou com especialistas, consultas a fontes, análise de documentos, cobertura de eventos etc.–, do registro dessas informações e dados, da escolha de fotos ou imagens a produzir ou a utilizar etc. e a previsão de uma estrutura hipertextual (no caso de publicação em sites ou blogs noticiosos).",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },
        "EF67LP12": {
            "codigo": "EF67LP12",
            "descricao": "Produzir resenhas críticas, vlogs, vídeos, podcasts variados e produções e gêneros próprios das culturas juvenis (algumas possibilidades: fanzines, fanclipes, e-zines, gameplay, detonado etc.), que apresentem/descrevam e/ou avaliem produções culturais (livro, filme, série, game, canção, disco, videoclipe etc.) ou evento (show, sarau, slam etc.), tendo em vista o contexto de produção dado, as características do gênero, os recursos das mídias envolvidas e a textualização adequada dos textos e/ou produções.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },
        "EF67LP20": {
            "codigo": "EF67LP20",
            "descricao": "Realizar pesquisa, a partir de recortes e questões definidos previamente, usando fontes indicadas e abertas.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },
        "EF67LP21": {
            "codigo": "EF67LP21",
            "descricao": "Divulgar resultados de pesquisas por meio de apresentações orais, painéis, artigos de divulgação científica, verbetes de enciclopédia, podcasts científicos etc.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },
        "EF67LP23": {
            "codigo": "EF67LP23",
            "descricao": "Respeitar os turnos de fala, na participação em conversações e em discussões ou atividades coletivas, na sala de aula e na escola e formular perguntas coerentes e adequadas em momentos oportunos em situações de aulas, apresentação oral, seminário etc.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },
        "EF67LP27": {
            "codigo": "EF67LP27",
            "descricao": "Analisar, entre os textos literários e entre estes e outras manifestações artísticas (como cinema, teatro, música, artes visuais e midiáticas), referências explícitas ou implícitas a outros textos, quanto aos temas, personagens e recursos literários e semióticos.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },
        "EF67LP28": {
            "codigo": "EF67LP28",
            "descricao": "Ler, de forma autônoma, e compreender – selecionando procedimentos e estratégias de leitura adequados a diferentes objetivos e levando em conta características dos gêneros e suportes –, romances infantojuvenis, contos populares, contos de terror, lendas brasileiras, indígenas e africanas, narrativas de aventuras, narrativas de enigma, mitos, crônicas, autobiografias, histórias em quadrinhos, mangás, poemas de forma livre e fixa (como sonetos e cordéis), vídeo-poemas, poemas visuais, dentre outros, expressando avaliação sobre o texto lido e estabelecendo preferências por gêneros, temas, autores.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },

        // ============================================================
        // LÍNGUA PORTUGUESA - ANOS FINAIS (6º AO 9º) - FAIXAS 69
        // ============================================================
        "EF69LP01": {
            "codigo": "EF69LP01",
            "descricao": "Diferenciar liberdade de expressão de discursos de ódio, posicionando-se contrariamente a esse tipo de discurso e vislumbrando possibilidades de denúncia quando for o caso.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69LP02": {
            "codigo": "EF69LP02",
            "descricao": "Analisar e comparar peças publicitárias variadas (cartazes, folhetos, outdoor, anúncios e propagandas em diferentes mídias, spots, jingle, vídeos etc.), de forma a perceber a articulação entre elas em campanhas, as especificidades das várias semioses e mídias, a adequação dessas peças ao público-alvo, aos objetivos do anunciante e/ou da campanha e à construção composicional e estilo dos gêneros em questão, como forma de ampliar suas possibilidades de compreensão (e produção) de textos pertencentes a esses gêneros.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69LP04": {
            "codigo": "EF69LP04",
            "descricao": "Identificar e analisar os efeitos de sentido que fortalecem a persuasão nos textos publicitários, relacionando as estratégias de persuasão e apelo ao consumo com os recursos linguístico-discursivos utilizados, como imagens, tempo verbal, jogos de palavras, figuras de linguagem etc., com vistas a fomentar práticas de consumo conscientes.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69LP09": {
            "codigo": "EF69LP09",
            "descricao": "Planejar uma campanha publicitária sobre questões/problemas, temas, causas significativas para a escola e/ou comunidade, a partir de um levantamento de material sobre o tema ou evento, da definição do público-alvo, do texto ou peça a ser produzido – cartaz, banner, folheto, panfleto, anúncio impresso e para internet, spot, propaganda de rádio, TV etc. –, da ferramenta de edição de texto, áudio ou vídeo que será utilizada, do recorte e enfoque a ser dado, das estratégias de persuasão que serão utilizadas etc.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69LP20": {
            "codigo": "EF69LP20",
            "descricao": "Identificar, tendo em vista o contexto de produção, a forma de organização dos textos normativos e legais, a lógica de hierarquização de seus itens e subitens e suas partes: parte inicial (título – nome e data – e ementa), blocos de artigos (parte, livro, capítulo, seção, subseção), artigos (caput e parágrafos e incisos) e parte final (disposições pertinentes à sua implementação) e analisar efeitos de sentido causados pelo uso de vocabulário técnico, pelo uso do imperativo, de palavras e expressões que indicam circunstâncias, como advérbios e locuções adverbiais, de palavras que indicam generalidade, como alguns pronomes indefinidos, de forma a poder compreender o caráter imperativo, coercitivo e generalista das leis e de outras formas de regulamentação.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69LP21": {
            "codigo": "EF69LP21",
            "descricao": "Posicionar-se em relação a conteúdos veiculados em práticas não institucionalizadas de participação social, sobretudo àquelas vinculadas a manifestações artísticas, produções culturais, intervenções urbanas e práticas próprias das culturas juvenis que pretendam denunciar, expor uma problemática ou 'convocar' para uma reflexão/ação, relacionando esse texto/produção com seu contexto de produção e relacionando as partes e semioses presentes para a construção de sentidos.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69LP32": {
            "codigo": "EF69LP32",
            "descricao": "Selecionar informações e dados relevantes de fontes diversas (impressas, digitais, orais etc.), avaliando a qualidade e a utilidade dessas fontes, organizar, esquematicamente, com ajuda do professor, as informações necessárias (sem excedê-las) com ou sem apoio de ferramentas digitais, em quadros, tabelas ou gráficos.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69LP33": {
            "codigo": "EF69LP33",
            "descricao": "Articular o verbal com os esquemas, infográficos, imagens variadas etc. na (re)construção dos sentidos dos textos de divulgação científica e retextualizar do discursivo para o esquemático – infográfico, esquema, tabela, gráfico, ilustração etc. – e, ao contrário, transformar o conteúdo das tabelas, esquemas, infográficos, ilustrações etc. em texto discursivo, como forma de ampliar as possibilidades de compreensão desses textos e analisar as características das multissemioses e dos gêneros em questão.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69LP35": {
            "codigo": "EF69LP35",
            "descricao": "Planejar textos de divulgação científica, a partir da elaboração de esquema que considere as pesquisas feitas anteriormente, de notas e sínteses de leituras ou de registros de experimentos ou de estudo de campo, produzir, revisar e editar textos voltados para a divulgação do conhecimento e de dados e resultados de pesquisas, tais como artigo de divulgação científica, artigo de opinião, reportagem científica, verbete de enciclopédia, verbete de enciclopédia digital colaborativa, infográfico, relatório, relato de experimento científico, relato (multimidiático) de campo, tendo em vista seus contextos de produção, que podem envolver a disponibilização de informações e conhecimentos em circulação em um formato mais acessível para um público específico ou a divulgação de conhecimentos advindos de pesquisas bibliográficas, experimentos científicos e estudos de campo realizados.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69LP36": {
            "codigo": "EF69LP36",
            "descricao": "Produzir, revisar e editar textos voltados para a divulgação do conhecimento e de dados e resultados de pesquisas, tais como artigos de divulgação científica, verbete de enciclopédia, infográfico, infográfico animado, podcast ou vlog científico, relato de experimento, relatório, relatório multimidiático de campo, dentre outros, considerando o contexto de produção e as regularidades dos gêneros em termos de suas construções composicionais e estilos.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69LP38": {
            "codigo": "EF69LP38",
            "descricao": "Organizar os dados e informações pesquisados em painéis ou slides de apresentação, levando em conta o contexto de produção, o tempo disponível, as características do gênero apresentação oral, a multissemiose, as mídias e tecnologias que serão utilizadas, ensaiar a apresentação, considerando também elementos paralinguísticos e cinésicos e proceder à exposição oral de resultados de estudos e pesquisas, no tempo determinado, a partir do planejamento e da definição de diferentes formas de uso da fala – memorizada, com apoio da leitura ou fala espontânea.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69LP42": {
            "codigo": "EF69LP42",
            "descricao": "Analisar a construção composicional dos textos pertencentes a gêneros relacionados à divulgação de conhecimentos: título, (olho), introdução, divisão do texto em subtítulos, imagens ilustrativas de conceitos, relações, ou resultados complexos (fotos, ilustrações, esquemas, gráficos, infográficos, diagramas, figuras, tabelas, mapas) etc., exposição, contendo definições, descrições, comparações, enumerações, exemplificações e remissões a conceitos e relações por meio de notas de rodapé, boxes ou links; ou título, contextualização do campo, ordenação temporal ou temática por tema ou subtema, intercalação de trechos verbais com fotos, ilustrações, áudios, vídeos etc. e reconhecer traços da linguagem dos textos de divulgação científica, fazendo uso consciente das estratégias de impessoalização da linguagem (ou de pessoalização, se o tipo de publicação e objetivos assim o demandarem, como em alguns podcasts e vídeos de divulgação científica), 3ª pessoa, presente atemporal, recurso à citação, uso de vocabulário técnico/especializado etc., como forma de ampliar suas capacidades de compreensão e produção de textos nesses gêneros.",
            "componente": "Língua Portuguesa",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },

        // ============================================================
        // LÍNGUA PORTUGUESA - ANOS FINAIS (8º AO 9º) - FAIXAS 89
        // ============================================================
        "EF89LP02": {
            "codigo": "EF89LP02",
            "descricao": "Analisar diferentes práticas (curtir, compartilhar, comentar, curar etc.) e textos pertencentes a diferentes gêneros da cultura digital (meme, gif, comentário, charge digital etc.) envolvidos no trato com a informação e opinião, de forma a possibilitar uma presença mais crítica e ética nas redes.",
            "componente": "Língua Portuguesa",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89LP04": {
            "codigo": "EF89LP04",
            "descricao": "Identificar e avaliar teses/opiniões/posicionamentos explícitos e implícitos, argumentos e contra-argumentos em textos argumentativos do campo (carta de leitor, comentário, artigo de opinião, resenha crítica etc.), posicionando-se frente à questão controversa de forma sustentada.",
            "componente": "Língua Portuguesa",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89LP11": {
            "codigo": "EF89LP11",
            "descricao": "Produzir, revisar e editar peças e campanhas publicitárias, envolvendo o uso articulado e complementar de diferentes peças publicitárias: cartaz, banner, indoor, folheto, panfleto, anúncio de jornal/revista, para internet, spot, propaganda de rádio, TV, a partir da escolha da questão/problema/causa significativa para a escola e/ou a comunidade escolar, da definição do público-alvo, das peças que serão produzidas, das estratégias de persuasão e convencimento que serão utilizadas.",
            "componente": "Língua Portuguesa",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89LP14": {
            "codigo": "EF89LP14",
            "descricao": "Analisar, em textos argumentativos e propositivos, os movimentos argumentativos de sustentação, refutação e negociação e os tipos de argumentos, avaliando a força/tipo dos argumentos utilizados.",
            "componente": "Língua Portuguesa",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89LP20": {
            "codigo": "EF89LP20",
            "descricao": "Comparar propostas políticas e de solução de problemas, identificando o que se pretende fazer/implementar, por que (motivações, justificativas), para que (objetivos, benefícios e consequências esperados), como (ações e passos), quando etc. e a forma de avaliar a eficácia da proposta/solução, contrastando dados e informações de diferentes fontes, identificando coincidências, complementaridades e contradições, de forma a poder compreender e posicionar-se criticamente sobre os dados e informações usados em fundamentação de propostas e analisar a coerência entre os elementos, de forma a tomar decisões fundamentadas.",
            "componente": "Língua Portuguesa",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89LP21": {
            "codigo": "EF89LP21",
            "descricao": "Realizar enquetes e pesquisas de opinião, de forma a levantar prioridades, problemas a resolver ou propostas que possam contribuir para melhoria da escola ou da comunidade, caracterizar demanda/necessidade, documentando-a de diferentes maneiras por meio de diferentes procedimentos, gêneros e mídias e, quando for o caso, selecionar informações e dados relevantes de fontes pertinentes diversas (sites, impressos, vídeos etc.), avaliando a qualidade e a utilidade dessas fontes, que possam servir de contextualização e fundamentação de propostas, de forma a justificar a proposição de propostas, projetos culturais e ações de intervenção.",
            "componente": "Língua Portuguesa",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89LP24": {
            "codigo": "EF89LP24",
            "descricao": "Realizar pesquisa, estabelecendo o recorte das questões, usando fontes abertas e confiáveis.",
            "componente": "Língua Portuguesa",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89LP25": {
            "codigo": "EF89LP25",
            "descricao": "Divulgar o resultado de pesquisas por meio de apresentações orais, verbetes de enciclopédias colaborativas, reportagens de divulgação científica, vlogs científicos, vídeos de diferentes tipos etc.",
            "componente": "Língua Portuguesa",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89LP27": {
            "codigo": "EF89LP27",
            "descricao": "Tecer considerações e formular problematizações pertinentes, em momentos oportunos, em situações de aulas, apresentação oral, seminário etc.",
            "componente": "Língua Portuguesa",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89LP30": {
            "codigo": "EF89LP30",
            "descricao": "Analisar a estrutura de hipertexto e hiperlinks em textos de divulgação científica que circulam na Web e proceder à remissão a conceitos e relações por meio de links.",
            "componente": "Língua Portuguesa",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89LP31": {
            "codigo": "EF89LP31",
            "descricao": "Analisar e utilizar modalização epistêmica, isto é, modos de indicar uma avaliação sobre o valor de verdade e as condições de verdade de uma proposição, tais como os asseverativos – quando se concorda com ('realmente, evidentemente, naturalmente, efetivamente, claro, certo, lógico, sem dúvida' etc.) ou discorda de ('de jeito nenhum, de forma alguma') uma ideia; e os quase-asseverativos, que indicam que se considera o conteúdo como quase certo ('talvez, assim, possivelmente, provavelmente, eventualmente').",
            "componente": "Língua Portuguesa",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },

        // ============================================================
        // ARTE - FAIXAS 15
        // ============================================================
        "EF15AR01": {
            "codigo": "EF15AR01",
            "descricao": "Identificar e apreciar formas distintas das artes visuais tradicionais e contemporâneas, cultivando a percepção, o imaginário, a capacidade de simbolizar e o repertório imagético.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR02": {
            "codigo": "EF15AR02",
            "descricao": "Explorar e reconhecer elementos constitutivos das artes visuais (ponto, linha, forma, cor, espaço, movimento, etc.).",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR03": {
            "codigo": "EF15AR03",
            "descricao": "Reconhecer e analisar a influência de distintas matrizes estéticas e culturais das artes visuais nas manifestações artísticas das culturas locais, regionais e nacionais.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR04": {
            "codigo": "EF15AR04",
            "descricao": "Experimentar diferentes formas de expressão artística (desenho, pintura, colagem, quadrinhos, dobradura, escultura, modelagem, instalação, vídeo, fotografia, etc.), fazendo uso sustentável de materiais, instrumentos, recursos e técnicas convencionais e não convencionais.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR05": {
            "codigo": "EF15AR05",
            "descricao": "Experimentar a criação em artes visuais de modo individual, coletivo e colaborativo, explorando diferentes espaços da escola e da comunidade.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR06": {
            "codigo": "EF15AR06",
            "descricao": "Dialogar sobre a sua criação e as dos colegas, para alcançar sentidos plurais.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR07": {
            "codigo": "EF15AR07",
            "descricao": "Reconhecer algumas categorias do sistema das artes visuais (museus, galerias, instituições, artistas, artesãos, curadores etc.).",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR08": {
            "codigo": "EF15AR08",
            "descricao": "Experimentar e apreciar formas distintas de manifestações da dança presentes em diferentes contextos, cultivando a percepção, o imaginário, a capacidade de simbolizar e o repertório corporal.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR10": {
            "codigo": "EF15AR10",
            "descricao": "Experimentar diferentes formas de orientação no espaço (deslocamentos, planos, direções, caminhos, etc.) e ritmos de movimento (lento, moderado e rápido) na construção do movimento dançado.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR13": {
            "codigo": "EF15AR13",
            "descricao": "Identificar e apreciar criticamente diversas formas e gêneros de expressão musical, reconhecendo e analisando os usos e as funções da música em diversos contextos de circulação, em especial, aqueles da vida cotidiana.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR14": {
            "codigo": "EF15AR14",
            "descricao": "Perceber e explorar os elementos constitutivos da música (altura, intensidade, timbre, melodia, ritmo, etc.), por meio de jogos, brincadeiras, canções e práticas diversas de composição/criação, execução e apreciação musical.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR16": {
            "codigo": "EF15AR16",
            "descricao": "Explorar diferentes formas de registro musical não convencional (representação gráfica de sons, partituras criativas etc.), bem como procedimentos e técnicas de registro em áudio e audiovisual, e reconhecer a notação musical convencional.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR20": {
            "codigo": "EF15AR20",
            "descricao": "Experimentar o trabalho colaborativo, coletivo e autoral em improvisações teatrais e processos narrativos criativos em teatro, explorando desde a teatralidade dos gestos e das ações do cotidiano até elementos de diferentes matrizes estéticas e culturais.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR23": {
            "codigo": "EF15AR23",
            "descricao": "Reconhecer e experimentar, em projetos temáticos, as relações processuais entre diversas linguagens artísticas.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR24": {
            "codigo": "EF15AR24",
            "descricao": "Caracterizar e experimentar brinquedos, brincadeiras, jogos, danças, canções e histórias de diferentes matrizes estéticas e culturais.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF15AR26": {
            "codigo": "EF15AR26",
            "descricao": "Explorar diferentes tecnologias e recursos digitais (multimeios, animações, jogos eletrônicos, gravações em áudio e vídeo, fotografia, softwares etc.) nos processos de criação artística.",
            "componente": "Arte",
            "anos": ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"],
            "faixa": "15"
        },
        "EF01AR03": {
            "codigo": "EF01AR03",
            "descricao": "Selecionar, organizar e explorar elementos das linguagens artísticas em suas criações.",
            "componente": "Arte",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01AR04": {
            "codigo": "EF01AR04",
            "descricao": "Experimentar diferentes formas de expressão artística para comunicar ideias, sentimentos e vivências.",
            "componente": "Arte",
            "anos": ["1º ano"],
            "faixa": "01"
        },

        // ============================================================
        // ARTE - ANOS FINAIS (6º AO 9º) - FAIXAS 69
        // ============================================================
        "EF69AR01": {
            "codigo": "EF69AR01",
            "descricao": "Pesquisar, apreciar e analisar formas distintas das artes visuais tradicionais e contemporâneas, em obras de artistas brasileiros e estrangeiros de diferentes épocas e em diferentes matrizes estéticas e culturais, de modo a ampliar a experiência com diferentes contextos e práticas artístico-visuais e cultivar a percepção, o imaginário, a capacidade de simbolizar e o repertório imagético.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR03": {
            "codigo": "EF69AR03",
            "descricao": "Analisar situações nas quais as linguagens das artes visuais se integram às linguagens audiovisuais (cinema, animações, vídeos etc.), gráficas (capas de livros, ilustrações de textos diversos etc.), cenográficas, coreográficas, musicais etc.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR04": {
            "codigo": "EF69AR04",
            "descricao": "Analisar os elementos constitutivos das artes visuais (ponto, linha, forma, direção, cor, tom, escala, dimensão, espaço, movimento etc.) na apreciação de diferentes produções artísticas.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR05": {
            "codigo": "EF69AR05",
            "descricao": "Experimentar e analisar diferentes formas de expressão artística (desenho, pintura, colagem, quadrinhos, dobradura, escultura, modelagem, instalação, vídeo, fotografia, performance, etc.).",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR06": {
            "codigo": "EF69AR06",
            "descricao": "Desenvolver processos de criação em artes visuais, com base em temas ou interesses artísticos, de modo individual, coletivo e colaborativo, fazendo uso de materiais, instrumentos e recursos convencionais, alternativos e digitais.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR07": {
            "codigo": "EF69AR07",
            "descricao": "Dialogar com princípios conceituais, proposições temáticas, repertórios imagéticos e processos de criação nas suas produções visuais.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR08": {
            "codigo": "EF69AR08",
            "descricao": "Diferenciar as categorias de artista, artesão, produtor cultural, curador, designer, entre outras, estabelecendo relações entre os profissionais do sistema das artes visuais.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR13": {
            "codigo": "EF69AR13",
            "descricao": "Investigar brincadeiras, jogos, danças coletivas e outras práticas de dança de diferentes matrizes estéticas e culturais como referência para a criação e a composição de danças autorais, individualmente e em grupo.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR14": {
            "codigo": "EF69AR14",
            "descricao": "Analisar e experimentar diferentes elementos (figurino, iluminação, cenário, trilha sonora etc.) e espaços (convencionais e não convencionais) para composição cênica e apresentação coreográfica.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR19": {
            "codigo": "EF69AR19",
            "descricao": "Identificar e analisar diferentes estilos musicais, contextualizando-os no tempo e no espaço, de modo a aprimorar a capacidade de apreciação da estética musical.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR22": {
            "codigo": "EF69AR22",
            "descricao": "Explorar e identificar diferentes formas de registro musical (notação musical tradicional, partituras criativas e procedimentos da música contemporânea), bem como procedimentos e técnicas de registro em áudio e audiovisual.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR31": {
            "codigo": "EF69AR31",
            "descricao": "Relacionar as práticas artísticas às diferentes dimensões da vida social, cultural, política, histórica, econômica, estética e ética.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR32": {
            "codigo": "EF69AR32",
            "descricao": "Analisar e explorar, em projetos temáticos, as relações processuais entre diversas linguagens artísticas.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },
        "EF69AR35": {
            "codigo": "EF69AR35",
            "descricao": "Identificar e manipular diferentes tecnologias e recursos digitais para acessar, apreciar, produzir, registrar e compartilhar práticas e repertórios artísticos, de modo reflexivo, ético e responsável.",
            "componente": "Arte",
            "anos": ["6º ano", "7º ano", "8º ano", "9º ano"],
            "faixa": "69"
        },

        // ============================================================
        // EDUCAÇÃO FÍSICA - FAIXAS 12, 35, 67, 89
        // ============================================================
        "EF12EF01": {
            "codigo": "EF12EF01",
            "descricao": "Experimentar, fruir e recriar diferentes brincadeiras e jogos da cultura popular presentes no contexto comunitário e regional, reconhecendo e respeitando as diferenças individuais de desempenho dos colegas.",
            "componente": "Educação Física",
            "anos": ["1º ano", "2º ano"],
            "faixa": "12"
        },
        "EF12EF02": {
            "codigo": "EF12EF02",
            "descricao": "Explicar, por meio de múltiplas linguagens (corporal, visual, oral e escrita), as brincadeiras e os jogos populares do contexto comunitário e regional, reconhecendo e valorizando a importância desses jogos e brincadeiras para suas culturas de origem.",
            "componente": "Educação Física",
            "anos": ["1º ano", "2º ano"],
            "faixa": "12"
        },
        "EF12EF03": {
            "codigo": "EF12EF03",
            "descricao": "Planejar e utilizar estratégias para resolver desafios de brincadeiras e jogos populares do contexto comunitário e regional, com base no reconhecimento das características dessas práticas.",
            "componente": "Educação Física",
            "anos": ["1º ano", "2º ano"],
            "faixa": "12"
        },
        "EF12EF04": {
            "codigo": "EF12EF04",
            "descricao": "Colaborar na proposição e na produção de alternativas para a prática, em outros momentos e espaços, de brincadeiras e jogos e demais práticas corporais tematizadas na escola, produzindo textos (orais, escritos, audiovisuais) para divulgá-las na escola e na comunidade.",
            "componente": "Educação Física",
            "anos": ["1º ano", "2º ano"],
            "faixa": "12"
        },
        "EF12EF05": {
            "codigo": "EF12EF05",
            "descricao": "Experimentar e fruir, prezando pelo trabalho coletivo e pelo protagonismo, a prática de esportes de marca e de precisão, identificando os elementos comuns a esses esportes.",
            "componente": "Educação Física",
            "anos": ["1º ano", "2º ano"],
            "faixa": "12"
        },
        "EF12EF06": {
            "codigo": "EF12EF06",
            "descricao": "Discutir a importância da observação das normas e das regras dos esportes de marca e de precisão para assegurar a integridade própria e as dos demais participantes.",
            "componente": "Educação Física",
            "anos": ["1º ano", "2º ano"],
            "faixa": "12"
        },
        "EF12EF07": {
            "codigo": "EF12EF07",
            "descricao": "Experimentar, fruir e identificar diferentes elementos básicos da ginástica (equilíbrios, saltos, giros, rotações, acrobacias, com e sem materiais) e da ginástica geral, de forma individual e em pequenos grupos, adotando procedimentos de segurança.",
            "componente": "Educação Física",
            "anos": ["1º ano", "2º ano"],
            "faixa": "12"
        },
        "EF12EF08": {
            "codigo": "EF12EF08",
            "descricao": "Planejar e utilizar estratégias para a execução de diferentes elementos básicos da ginástica e da ginástica geral.",
            "componente": "Educação Física",
            "anos": ["1º ano", "2º ano"],
            "faixa": "12"
        },
        "EF12EF12": {
            "codigo": "EF12EF12",
            "descricao": "Identificar os elementos constitutivos (ritmo, espaço, gestos) das danças do contexto comunitário e regional, valorizando e respeitando as manifestações de diferentes culturas.",
            "componente": "Educação Física",
            "anos": ["1º ano", "2º ano"],
            "faixa": "12"
        },

        // ============================================================
        // EDUCAÇÃO FÍSICA - FAIXAS 35 (3º AO 5º)
        // ============================================================
        "EF35EF02": {
            "codigo": "EF35EF02",
            "descricao": "Planejar e utilizar estratégias para possibilitar a participação segura de todos os estudantes em brincadeiras e jogos populares do Brasil e de matriz indígena e africana.",
            "componente": "Educação Física",
            "anos": ["3º ano", "4º ano", "5º ano"],
            "faixa": "35"
        },
        "EF35EF03": {
            "codigo": "EF35EF03",
            "descricao": "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita, audiovisual), as brincadeiras e os jogos populares do Brasil e de matriz indígena e africana, explicando suas características e a importância desse patrimônio histórico cultural na preservação das diferentes culturas.",
            "componente": "Educação Física",
            "anos": ["3º ano", "4º ano", "5º ano"],
            "faixa": "35"
        },
        "EF35EF05": {
            "codigo": "EF35EF05",
            "descricao": "Experimentar e fruir diversos tipos de esportes de campo e taco, rede/parede e invasão, identificando seus elementos comuns e criando estratégias individuais e coletivas básicas para sua execução, prezando pelo trabalho coletivo e pelo protagonismo.",
            "componente": "Educação Física",
            "anos": ["3º ano", "4º ano", "5º ano"],
            "faixa": "35"
        },
        "EF35EF06": {
            "codigo": "EF35EF06",
            "descricao": "Diferenciar os conceitos de jogo e esporte, identificando as características que os constituem na contemporaneidade e suas manifestações (profissional e comunitária/lazer).",
            "componente": "Educação Física",
            "anos": ["3º ano", "4º ano", "5º ano"],
            "faixa": "35"
        },
        "EF35EF07": {
            "codigo": "EF35EF07",
            "descricao": "Experimentar e fruir, de forma coletiva, combinações de diferentes elementos da ginástica geral (equilíbrios, saltos, giros, rotações, acrobacias, com e sem materiais), propondo coreografias com diferentes temas do cotidiano.",
            "componente": "Educação Física",
            "anos": ["3º ano", "4º ano", "5º ano"],
            "faixa": "35"
        },
        "EF35EF08": {
            "codigo": "EF35EF08",
            "descricao": "Planejar e utilizar estratégias para resolver desafios na execução de elementos básicos de apresentações coletivas de ginástica geral, reconhecendo as potencialidades e os limites do corpo e adotando procedimentos de segurança.",
            "componente": "Educação Física",
            "anos": ["3º ano", "4º ano", "5º ano"],
            "faixa": "35"
        },

        // ============================================================
        // EDUCAÇÃO FÍSICA - FAIXAS 67 (6º AO 7º)
        // ============================================================
        "EF67EF01": {
            "codigo": "EF67EF01",
            "descricao": "Experimentar e fruir, na escola e fora dela, jogos eletrônicos diversos, valorizando e respeitando os sentidos e significados atribuídos a eles por diferentes grupos sociais e etários.",
            "componente": "Educação Física",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },
        "EF67EF02": {
            "codigo": "EF67EF02",
            "descricao": "Identificar as transformações nas características dos jogos eletrônicos em função dos avanços das tecnologias e nas respectivas exigências corporais colocadas por esses diferentes tipos de jogos.",
            "componente": "Educação Física",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },
        "EF67EF04": {
            "codigo": "EF67EF04",
            "descricao": "Praticar um ou mais esportes de marca, precisão, invasão e técnico combinatórios oferecidos pela escola, usando habilidades técnico-táticas básicas e respeitando regras.",
            "componente": "Educação Física",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },
        "EF67EF10": {
            "codigo": "EF67EF10",
            "descricao": "Diferenciar exercício físico de atividade física e propor alternativas para a prática de exercícios físicos dentro e fora do ambiente escolar.",
            "componente": "Educação Física",
            "anos": ["6º ano", "7º ano"],
            "faixa": "67"
        },

        // ============================================================
        // EDUCAÇÃO FÍSICA - FAIXAS 89 (8º AO 9º)
        // ============================================================
        "EF89EF03": {
            "codigo": "EF89EF03",
            "descricao": "Formular e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de campo e taco, rede/parede, invasão e combate como nas modalidades esportivas escolhidas para praticar de forma específica.",
            "componente": "Educação Física",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89EF05": {
            "codigo": "EF89EF05",
            "descricao": "Identificar as transformações históricas do fenômeno esportivo e discutir alguns de seus problemas (doping, corrupção, violência etc.) e a forma como as mídias os apresentam.",
            "componente": "Educação Física",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89EF06": {
            "codigo": "EF89EF06",
            "descricao": "Verificar locais disponíveis na comunidade para a prática de esportes e das demais práticas corporais tematizadas na escola, propondo e produzindo alternativas para utilizá-los no tempo livre.",
            "componente": "Educação Física",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89EF08": {
            "codigo": "EF89EF08",
            "descricao": "Discutir as transformações históricas dos padrões de desempenho, saúde e beleza, considerando a forma como são apresentados nos diferentes meios (científico, midiático etc.).",
            "componente": "Educação Física",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89EF09": {
            "codigo": "EF89EF09",
            "descricao": "Problematizar a prática excessiva de exercícios físicos e o uso de medicamentos para a ampliação do rendimento ou potencialização das transformações corporais.",
            "componente": "Educação Física",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },
        "EF89EF18": {
            "codigo": "EF89EF18",
            "descricao": "Discutir as transformações históricas, o processo de esportivização e a midiatização de uma ou mais lutas, valorizando e respeitando as culturas de origem.",
            "componente": "Educação Física",
            "anos": ["8º ano", "9º ano"],
            "faixa": "89"
        },

        // ============================================================
        // CIÊNCIAS - ANOS ESPECÍFICOS
        // ============================================================
        "EF01CI01": {
            "codigo": "EF01CI01",
            "descricao": "Comparar características de diferentes materiais presentes em objetos de uso cotidiano, discutindo sua origem, os modos como são descartados e como podem ser usados de forma mais consciente.",
            "componente": "Ciências",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01CI02": {
            "codigo": "EF01CI02",
            "descricao": "Localizar, nomear e representar graficamente (por meio de desenhos) partes do corpo humano e explicar suas funções.",
            "componente": "Ciências",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01CI03": {
            "codigo": "EF01CI03",
            "descricao": "Discutir as razões pelas quais os hábitos de higiene do corpo (lavar as mãos antes de comer, escovar os dentes, limpar os olhos, o nariz e as orelhas etc.) são necessários para a manutenção da saúde.",
            "componente": "Ciências",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01CI04": {
            "codigo": "EF01CI04",
            "descricao": "Comparar características físicas entre os colegas, reconhecendo a diversidade e a importância da valorização, do acolhimento e do respeito às diferenças.",
            "componente": "Ciências",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01CI05": {
            "codigo": "EF01CI05",
            "descricao": "Identificar e nomear diferentes escalas de tempo: os períodos diários (manhã, tarde, noite) e a sucessão de dias, semanas, meses e anos.",
            "componente": "Ciências",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01CI06": {
            "codigo": "EF01CI06",
            "descricao": "Selecionar exemplos de como a sucessão de dias e noites orienta o ritmo de atividades diárias de seres humanos e de outros seres vivos.",
            "componente": "Ciências",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF02CI01": {
            "codigo": "EF02CI01",
            "descricao": "Identificar de que materiais (metais, madeira, vidro etc.) são feitos os objetos que fazem parte da vida cotidiana, como esses objetos são utilizados e com quais materiais eram produzidos no passado.",
            "componente": "Ciências",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02CI02": {
            "codigo": "EF02CI02",
            "descricao": "Propor o uso de diferentes materiais para a construção de objetos de uso cotidiano, tendo em vista algumas propriedades desses materiais (flexibilidade, dureza, transparência etc.).",
            "componente": "Ciências",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02CI03": {
            "codigo": "EF02CI03",
            "descricao": "Discutir os cuidados necessários à prevenção de acidentes domésticos (objetos cortantes e inflamáveis, eletricidade, produtos de limpeza, medicamentos etc.).",
            "componente": "Ciências",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02CI04": {
            "codigo": "EF02CI04",
            "descricao": "Descrever características de plantas e animais (tamanho, forma, cor, fase da vida, local onde se desenvolvem etc.) que fazem parte de seu cotidiano e relacioná-las ao ambiente em que eles vivem.",
            "componente": "Ciências",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02CI05": {
            "codigo": "EF02CI05",
            "descricao": "Investigar a importância da água e da luz para a manutenção da vida de plantas em geral.",
            "componente": "Ciências",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02CI06": {
            "codigo": "EF02CI06",
            "descricao": "Identificar as principais partes de uma planta (raiz, caule, folhas, flores e frutos) e a função desempenhada por cada uma delas, e analisar as relações entre as plantas, o ambiente e os demais seres vivos.",
            "componente": "Ciências",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02CI08": {
            "codigo": "EF02CI08",
            "descricao": "Comparar o efeito da radiação solar (aquecimento e reflexão) em diferentes tipos de superfície (água, areia, solo, superfícies escura, clara e metálica etc.).",
            "componente": "Ciências",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF03CI02": {
            "codigo": "EF03CI02",
            "descricao": "Experimentar e relatar o que ocorre com a passagem da luz através de objetos transparentes (copos, janelas de vidro, lentes, prismas, água etc.), no contato com superfícies polidas (espelhos) e na intersecção com objetos opacos (paredes, pratos, pessoas e outros objetos de uso cotidiano).",
            "componente": "Ciências",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03CI04": {
            "codigo": "EF03CI04",
            "descricao": "Identificar características sobre o modo de vida (o que comem, como se reproduzem, como se deslocam etc.) dos animais mais comuns no ambiente próximo.",
            "componente": "Ciências",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03CI05": {
            "codigo": "EF03CI05",
            "descricao": "Descrever e comunicar as alterações que ocorrem desde o nascimento em animais de diferentes meios terrestres ou aquáticos, inclusive o homem.",
            "componente": "Ciências",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03CI06": {
            "codigo": "EF03CI06",
            "descricao": "Comparar alguns animais e organizar grupos com base em características externas comuns (presença de penas, pelos, escamas, bico, garras, antenas, patas etc.).",
            "componente": "Ciências",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03CI09": {
            "codigo": "EF03CI09",
            "descricao": "Comparar diferentes amostras de solo do entorno da escola com base em características como cor, textura, cheiro, tamanho das partículas, permeabilidade etc.",
            "componente": "Ciências",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03CI10": {
            "codigo": "EF03CI10",
            "descricao": "Identificar os diferentes usos do solo (plantação e extração de materiais, dentre outras possibilidades), reconhecendo a importância do solo para a agricultura e para a vida.",
            "componente": "Ciências",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF04CI01": {
            "codigo": "EF04CI01",
            "descricao": "Identificar misturas na vida diária, com base em suas propriedades físicas observáveis, reconhecendo sua composição.",
            "componente": "Ciências",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04CI02": {
            "codigo": "EF04CI02",
            "descricao": "Testar e relatar transformações nos materiais do dia a dia quando expostos a diferentes condições (aquecimento, resfriamento, luz e umidade).",
            "componente": "Ciências",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04CI03": {
            "codigo": "EF04CI03",
            "descricao": "Concluir que algumas mudanças causadas por aquecimento ou resfriamento são reversíveis (como as mudanças de estado físico da água) e outras não (como o cozimento do ovo, a queima do papel etc.).",
            "componente": "Ciências",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04CI04": {
            "codigo": "EF04CI04",
            "descricao": "Analisar e construir cadeias alimentares simples, reconhecendo a posição ocupada pelos seres vivos nessas cadeias e o papel do Sol como fonte primária de energia na produção de alimentos.",
            "componente": "Ciências",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04CI05": {
            "codigo": "EF04CI05",
            "descricao": "Descrever e destacar semelhanças e diferenças entre o ciclo da matéria e o fluxo de energia entre os componentes vivos e não vivos de um ecossistema.",
            "componente": "Ciências",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04CI06": {
            "codigo": "EF04CI06",
            "descricao": "Relacionar a participação de fungos e bactérias no processo de decomposição, reconhecendo a importância ambiental desse processo.",
            "componente": "Ciências",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04CI07": {
            "codigo": "EF04CI07",
            "descricao": "Verificar a participação de microrganismos na produção de alimentos, combustíveis, medicamentos, entre outros.",
            "componente": "Ciências",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04CI08": {
            "codigo": "EF04CI08",
            "descricao": "Propor, a partir do conhecimento das formas de transmissão de alguns microrganismos (vírus, bactérias e protozoários), atitudes e medidas adequadas para prevenção de doenças a eles associadas.",
            "componente": "Ciências",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04CI09": {
            "codigo": "EF04CI09",
            "descricao": "Identificar os pontos cardeais, com base no registro de diferentes posições relativas do Sol e da sombra de uma vara (gnômon).",
            "componente": "Ciências",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04CI10": {
            "codigo": "EF04CI10",
            "descricao": "Comparar as indicações dos pontos cardeais resultantes da observação das sombras de uma vara (gnômon) com aquelas obtidas por meio de uma bússola.",
            "componente": "Ciências",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF05CI01": {
            "codigo": "EF05CI01",
            "descricao": "Explorar fenômenos da vida cotidiana que evidenciem propriedades físicas dos materiais - como densidade, condutibilidade térmica e elétrica, respostas a forças magnéticas, solubilidade, respostas a forças mecânicas (dureza, elasticidade etc.), entre outras.",
            "componente": "Ciências",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05CI03": {
            "codigo": "EF05CI03",
            "descricao": "Selecionar argumentos que justifiquem a importância da cobertura vegetal para a manutenção do ciclo da água, a conservação dos solos, dos cursos de água e da qualidade do ar atmosférico.",
            "componente": "Ciências",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05CI04": {
            "codigo": "EF05CI04",
            "descricao": "Identificar os principais usos da água e de outros materiais nas atividades cotidianas para discutir e propor formas sustentáveis de utilização desses recursos.",
            "componente": "Ciências",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05CI06": {
            "codigo": "EF05CI06",
            "descricao": "Selecionar argumentos que justifiquem por que os sistemas digestório e respiratório são considerados corresponsáveis pelo processo de nutrição do organismo, com base na identificação das funções desses sistemas.",
            "componente": "Ciências",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05CI07": {
            "codigo": "EF05CI07",
            "descricao": "Justificar a relação entre o funcionamento do sistema circulatório, a distribuição dos nutrientes pelo organismo e a eliminação dos resíduos produzidos.",
            "componente": "Ciências",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05CI08": {
            "codigo": "EF05CI08",
            "descricao": "Organizar um cardápio equilibrado com base nas características dos grupos alimentares (nutrientes e calorias) e nas necessidades individuais (atividades realizadas, idade, sexo etc.) para a manutenção da saúde do organismo.",
            "componente": "Ciências",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05CI09": {
            "codigo": "EF05CI09",
            "descricao": "Discutir a ocorrência de distúrbios nutricionais (como obesidade, subnutrição etc.) entre crianças e jovens a partir da análise de seus hábitos (tipos e quantidade de alimento ingerido, prática de atividade física etc.).",
            "componente": "Ciências",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05CI10": {
            "codigo": "EF05CI10",
            "descricao": "Identificar algumas constelações no céu, com o apoio de recursos (como mapas celestes e aplicativos digitais, entre outros), e os períodos do ano em que elas são visíveis no início da noite.",
            "componente": "Ciências",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05CI12": {
            "codigo": "EF05CI12",
            "descricao": "Concluir sobre a periodicidade das fases da Lua, com base na observação e no registro das formas aparentes da Lua no céu ao longo de, pelo menos, dois meses.",
            "componente": "Ciências",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05CI13": {
            "codigo": "EF05CI13",
            "descricao": "Projetar e construir dispositivos para observação à distância (luneta, periscópio etc.), para observação ampliada de objetos (lupas, microscópios) ou para registro de imagens (máquinas fotográficas) e discutir usos sociais desses dispositivos.",
            "componente": "Ciências",
            "anos": ["5º ano"],
            "faixa": "05"
        },

        // ============================================================
        // CIÊNCIAS - ANOS FINAIS (6º AO 9º)
        // ============================================================
        "EF06CI01": {
            "codigo": "EF06CI01",
            "descricao": "Classificar como homogênea ou heterogênea a mistura de dois ou mais materiais (água e sal, água e óleo, água e areia etc.).",
            "componente": "Ciências",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06CI02": {
            "codigo": "EF06CI02",
            "descricao": "Identificar evidências de transformações químicas a partir do resultado de misturas de materiais que originam produtos diferentes dos que foram misturados (mistura de ingredientes para fazer um bolo, mistura de vinagre com bicarbonato de sódio etc.).",
            "componente": "Ciências",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06CI03": {
            "codigo": "EF06CI03",
            "descricao": "Selecionar métodos mais adequados para a separação de diferentes sistemas heterogêneos a partir da identificação de processos de separação de materiais (como a produção de sal de cozinha, a destilação de petróleo, entre outros).",
            "componente": "Ciências",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06CI04": {
            "codigo": "EF06CI04",
            "descricao": "Associar a produção de medicamentos e outros materiais sintéticos ao desenvolvimento científico e tecnológico, reconhecendo benefícios e avaliando impactos socioambientais.",
            "componente": "Ciências",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06CI07": {
            "codigo": "EF06CI07",
            "descricao": "Justificar o papel do sistema nervoso na coordenação das ações motoras e sensoriais do corpo, com base na análise de suas estruturas básicas e respectivas funções.",
            "componente": "Ciências",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06CI08": {
            "codigo": "EF06CI08",
            "descricao": "Explicar a importância da visão (captação e interpretação das imagens) na interação do organismo com o meio e, com base no funcionamento do olho humano, selecionar lentes adequadas para a correção de diferentes defeitos da visão.",
            "componente": "Ciências",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06CI10": {
            "codigo": "EF06CI10",
            "descricao": "Explicar como o funcionamento do sistema nervoso pode ser afetado por substâncias psicoativas.",
            "componente": "Ciências",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06CI12": {
            "codigo": "EF06CI12",
            "descricao": "Identificar diferentes tipos de rocha, relacionando a formação de fósseis a rochas sedimentares em diferentes períodos geológicos.",
            "componente": "Ciências",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06CI14": {
            "codigo": "EF06CI14",
            "descricao": "Inferir que as mudanças na sombra de uma vara (gnômon) ao longo do dia em diferentes períodos do ano são uma evidência dos movimentos relativos entre a Terra e o Sol, que podem ser explicados por meio dos movimentos de rotação e translação da Terra e da inclinação de seu eixo de rotação em relação ao plano de sua órbita em torno do Sol.",
            "componente": "Ciências",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF07CI02": {
            "codigo": "EF07CI02",
            "descricao": "Diferenciar temperatura, calor e sensação térmica nas diferentes situações de equilíbrio termodinâmico cotidianas.",
            "componente": "Ciências",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07CI03": {
            "codigo": "EF07CI03",
            "descricao": "Utilizar o conhecimento das formas de propagação do calor para justificar a utilização de determinados materiais (condutores e isolantes) na vida cotidiana, explicar o princípio de funcionamento de alguns equipamentos (garrafa térmica, coletor solar etc.) e/ou construir soluções tecnológicas a partir desse conhecimento.",
            "componente": "Ciências",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07CI05": {
            "codigo": "EF07CI05",
            "descricao": "Discutir o uso de diferentes tipos de combustível e máquinas térmicas ao longo do tempo, para avaliar avanços, questões econômicas e problemas socioambientais causados pela produção e uso desses materiais e máquinas.",
            "componente": "Ciências",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07CI06": {
            "codigo": "EF07CI06",
            "descricao": "Discutir e avaliar mudanças econômicas, culturais e sociais, tanto na vida cotidiana quanto no mundo do trabalho, decorrentes do desenvolvimento de novos materiais e tecnologias (como automação e informatização).",
            "componente": "Ciências",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07CI09": {
            "codigo": "EF07CI09",
            "descricao": "Interpretar as condições de saúde da comunidade, cidade ou estado, com base na análise e comparação de indicadores de saúde (como taxa de mortalidade infantil, cobertura de saneamento básico e incidência de doenças de veiculação hídrica, atmosférica entre outras) e dos resultados de políticas públicas destinadas à saúde.",
            "componente": "Ciências",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07CI11": {
            "codigo": "EF07CI11",
            "descricao": "Analisar historicamente o uso da tecnologia, incluindo a digital, nas diferentes dimensões da vida humana, considerando indicadores ambientais e de qualidade de vida.",
            "componente": "Ciências",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07CI13": {
            "codigo": "EF07CI13",
            "descricao": "Descrever o mecanismo natural do efeito estufa, seu papel fundamental para o desenvolvimento da vida na Terra, discutir as ações humanas responsáveis pelo seu aumento artificial (queima dos combustíveis fósseis, desmatamento, queimadas etc.) e selecionar e implementar propostas para a reversão ou controle desse quadro.",
            "componente": "Ciências",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF08CI01": {
            "codigo": "EF08CI01",
            "descricao": "Identificar e classificar diferentes fontes (renováveis e não renováveis) e tipos de energia utilizados em residências, comunidades ou cidades.",
            "componente": "Ciências",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08CI03": {
            "codigo": "EF08CI03",
            "descricao": "Classificar equipamentos elétricos residenciais (chuveiro, ferro, lâmpadas, TV, rádio, geladeira etc.) de acordo com o tipo de transformação de energia (da energia elétrica para a térmica, luminosa, sonora e mecânica, por exemplo).",
            "componente": "Ciências",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08CI04": {
            "codigo": "EF08CI04",
            "descricao": "Calcular o consumo de eletrodomésticos a partir dos dados de potência (descritos no próprio equipamento) e tempo médio de uso para avaliar o impacto de cada equipamento no consumo doméstico mensal.",
            "componente": "Ciências",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08CI05": {
            "codigo": "EF08CI05",
            "descricao": "Propor ações coletivas para otimizar o uso de energia elétrica em sua escola e/ou comunidade, com base na seleção de equipamentos segundo critérios de sustentabilidade (consumo de energia e eficiência energética) e hábitos de consumo responsável.",
            "componente": "Ciências",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08CI07": {
            "codigo": "EF08CI07",
            "descricao": "Comparar diferentes processos reprodutivos em plantas e animais em relação aos mecanismos adaptativos e evolutivos.",
            "componente": "Ciências",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08CI08": {
            "codigo": "EF08CI08",
            "descricao": "Analisar e explicar as transformações que ocorrem na puberdade considerando a atuação dos hormônios sexuais e do sistema nervoso.",
            "componente": "Ciências",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08CI09": {
            "codigo": "EF08CI09",
            "descricao": "Comparar o modo de ação e a eficácia dos diversos métodos contraceptivos e justificar a necessidade de compartilhar a responsabilidade na escolha e na utilização do método mais adequado à prevenção da gravidez precoce e indesejada e de Doenças Sexualmente Transmissíveis (DST).",
            "componente": "Ciências",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08CI10": {
            "codigo": "EF08CI10",
            "descricao": "Identificar os principais sintomas, modos de transmissão e tratamento de algumas DST (com ênfase na AIDS), e discutir estratégias e métodos de prevenção.",
            "componente": "Ciências",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08CI11": {
            "codigo": "EF08CI11",
            "descricao": "Selecionar argumentos que evidenciem as múltiplas dimensões da sexualidade humana (biológica, sociocultural, afetiva e ética).",
            "componente": "Ciências",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08CI13": {
            "codigo": "EF08CI13",
            "descricao": "Representar os movimentos de rotação e translação da Terra e analisar o papel da inclinação do eixo de rotação da Terra em relação à sua órbita na ocorrência das estações do ano, com a utilização de modelos tridimensionais.",
            "componente": "Ciências",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08CI15": {
            "codigo": "EF08CI15",
            "descricao": "Identificar as principais variáveis envolvidas na previsão do tempo e simular situações nas quais elas possam ser medidas.",
            "componente": "Ciências",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF09CI04": {
            "codigo": "EF09CI04",
            "descricao": "Planejar e executar experimentos que evidenciem que todas as cores de luz podem ser formadas pela composição das três cores primárias da luz e que a cor de um objeto está relacionada também à cor da luz que o ilumina.",
            "componente": "Ciências",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09CI06": {
            "codigo": "EF09CI06",
            "descricao": "Classificar as radiações eletromagnéticas por suas frequências, fontes e aplicações, discutindo e avaliando as implicações de seu uso em controle remoto, telefone celular, raio X, forno de micro-ondas, fotocélulas etc.",
            "componente": "Ciências",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09CI13": {
            "codigo": "EF09CI13",
            "descricao": "Propor iniciativas individuais e coletivas para a solução de problemas ambientais da cidade ou da comunidade, com base na análise de ações de consumo consciente e de sustentabilidade bem-sucedidas.",
            "componente": "Ciências",
            "anos": ["9º ano"],
            "faixa": "09"
        },

        // ============================================================
        // HISTÓRIA - ANOS ESPECÍFICOS
        // ============================================================
        "EF01HI01": {
            "codigo": "EF01HI01",
            "descricao": "Identificar aspectos do seu crescimento por meio do registro das lembranças particulares ou de lembranças dos membros de sua família e/ou de sua comunidade.",
            "componente": "História",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01HI02": {
            "codigo": "EF01HI02",
            "descricao": "Identificar a relação entre as suas histórias e as histórias de sua família e de sua comunidade.",
            "componente": "História",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01HI03": {
            "codigo": "EF01HI03",
            "descricao": "Descrever e distinguir os seus papéis e responsabilidades relacionados à família, à escola e à comunidade.",
            "componente": "História",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01HI04": {
            "codigo": "EF01HI04",
            "descricao": "Identificar as diferenças entre os variados ambientes em que vive (doméstico, escolar e da comunidade), reconhecendo as especificidades dos hábitos e das regras que os regem.",
            "componente": "História",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01HI06": {
            "codigo": "EF01HI06",
            "descricao": "Conhecer as histórias da família e da escola e identificar o papel desempenhado por diferentes sujeitos em diferentes espaços.",
            "componente": "História",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF02HI01": {
            "codigo": "EF02HI01",
            "descricao": "Identificar e descrever práticas e papéis sociais que as pessoas exercem em diferentes comunidades.",
            "componente": "História",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02HI02": {
            "codigo": "EF02HI02",
            "descricao": "Identificar e descrever práticas e papéis sociais que as pessoas exercem em diferentes comunidades.",
            "componente": "História",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02HI03": {
            "codigo": "EF02HI03",
            "descricao": "Selecionar situações cotidianas que remetam à percepção de mudança, pertencimento e memória.",
            "componente": "História",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02HI04": {
            "codigo": "EF02HI04",
            "descricao": "Selecionar e compreender o significado de objetos e documentos pessoais como fontes de memórias e histórias nos âmbitos pessoal, familiar, escolar e comunitário.",
            "componente": "História",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02HI06": {
            "codigo": "EF02HI06",
            "descricao": "Identificar e organizar, temporalmente, fatos da vida cotidiana, usando noções relacionadas ao tempo (antes, durante, ao mesmo tempo e depois).",
            "componente": "História",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02HI08": {
            "codigo": "EF02HI08",
            "descricao": "Compilar histórias da família e/ou da comunidade registradas em diferentes fontes.",
            "componente": "História",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF03HI02": {
            "codigo": "EF03HI02",
            "descricao": "Selecionar, por meio da consulta de fontes de diferentes naturezas, e registrar acontecimentos ocorridos ao longo do tempo na cidade ou região em que vive.",
            "componente": "História",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03HI03": {
            "codigo": "EF03HI03",
            "descricao": "Identificar e comparar pontos de vista em relação a eventos significativos do local em que vive, aspectos relacionados a condições sociais e à presença de diferentes grupos sociais e culturais, com especial destaque para as culturas africanas, indígenas e de migrantes.",
            "componente": "História",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03HI05": {
            "codigo": "EF03HI05",
            "descricao": "Identificar os marcos históricos do lugar em que vive e compreender seus significados.",
            "componente": "História",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03HI08": {
            "codigo": "EF03HI08",
            "descricao": "Identificar modos de vida na cidade e no campo no presente, comparando-os com os do passado.",
            "componente": "História",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF04HI05": {
            "codigo": "EF04HI05",
            "descricao": "Relacionar os processos de ocupação do campo a intervenções na natureza, avaliando os resultados dessas intervenções.",
            "componente": "História",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04HI08": {
            "codigo": "EF04HI08",
            "descricao": "Identificar as transformações ocorridas nos meios de comunicação (cultura oral, imprensa, rádio, televisão, cinema, internet e demais tecnologias digitais de informação e comunicação) e discutir seus significados para os diferentes grupos ou estratos sociais.",
            "componente": "História",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF05HI06": {
            "codigo": "EF05HI06",
            "descricao": "Comparar o uso de diferentes linguagens e tecnologias no processo de comunicação e avaliar os significados sociais, políticos e culturais atribuídos a elas.",
            "componente": "História",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05HI07": {
            "codigo": "EF05HI07",
            "descricao": "Identificar os processos de produção, hierarquização e difusão dos marcos de memória e discutir a presença e/ou a ausência de diferentes grupos que compõem a sociedade na nomeação desses marcos de memória.",
            "componente": "História",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05HI08": {
            "codigo": "EF05HI08",
            "descricao": "Identificar formas de marcação da passagem do tempo em distintas sociedades, incluindo os povos indígenas originários e os povos africanos.",
            "componente": "História",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05HI09": {
            "codigo": "EF05HI09",
            "descricao": "Comparar pontos de vista sobre temas que impactam a vida cotidiana no tempo presente, por meio do acesso a diferentes fontes, incluindo orais.",
            "componente": "História",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05HI10": {
            "codigo": "EF05HI10",
            "descricao": "Inventariar os patrimônios materiais e imateriais da humanidade e analisar mudanças e permanências desses patrimônios ao longo do tempo.",
            "componente": "História",
            "anos": ["5º ano"],
            "faixa": "05"
        },

        // ============================================================
        // HISTÓRIA - ANOS FINAIS (6º AO 9º)
        // ============================================================
        "EF06HI02": {
            "codigo": "EF06HI02",
            "descricao": "Identificar a gênese da produção do saber histórico e analisar o significado das fontes que originaram determinadas formas de registro em sociedades e épocas distintas.",
            "componente": "História",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06HI15": {
            "codigo": "EF06HI15",
            "descricao": "Descrever as dinâmicas de circulação de pessoas, produtos e culturas no Mediterrâneo e seu significado.",
            "componente": "História",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF07HI01": {
            "codigo": "EF07HI01",
            "descricao": "Explicar o significado de 'modernidade' e suas lógicas de inclusão e exclusão, com base em uma concepção europeia.",
            "componente": "História",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07HI03": {
            "codigo": "EF07HI03",
            "descricao": "Identificar aspectos e processos específicos das sociedades africanas e americanas antes da chegada dos europeus, com destaque para as formas de organização social e o desenvolvimento de saberes e técnicas.",
            "componente": "História",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07HI08": {
            "codigo": "EF07HI08",
            "descricao": "Identificar os principais aspectos da colonização portuguesa na América e suas implicações ambientais e sociais.",
            "componente": "História",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF08HI03": {
            "codigo": "EF08HI03",
            "descricao": "Analisar os impactos da Revolução Industrial na produção e circulação de povos, produtos e culturas.",
            "componente": "História",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08HI11": {
            "codigo": "EF08HI11",
            "descricao": "Identificar e explicar os protagonismos e a atuação de diferentes grupos sociais e étnicos nas lutas de independência no Brasil, na América espanhola e no Haiti.",
            "componente": "História",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08HI16": {
            "codigo": "EF08HI16",
            "descricao": "Identificar, comparar e analisar a diversidade política, social e regional nas rebeliões e nos movimentos contestatórios ao poder centralizado.",
            "componente": "História",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08HI25": {
            "codigo": "EF08HI25",
            "descricao": "Caracterizar e contextualizar aspectos das relações entre os Estados Unidos da América e a América Latina no século XIX.",
            "componente": "História",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF09HI25": {
            "codigo": "EF09HI25",
            "descricao": "Relacionar as transformações da sociedade brasileira aos protagonismos da sociedade civil após 1989.",
            "componente": "História",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09HI26": {
            "codigo": "EF09HI26",
            "descricao": "Discutir e analisar as causas da violência contra populações marginalizadas (negros, indígenas, mulheres, homossexuais, camponeses, pobres etc.) com vistas à tomada de consciência e à construção de uma cultura de paz, empatia e respeito às pessoas.",
            "componente": "História",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09HI28": {
            "codigo": "EF09HI28",
            "descricao": "Identificar e analisar aspectos da Guerra Fria, seus principais conflitos e as tensões geopolíticas no interior dos blocos liderados por soviéticos e estadunidenses.",
            "componente": "História",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09HI33": {
            "codigo": "EF09HI33",
            "descricao": "Analisar as transformações nas relações políticas locais e globais geradas pelo desenvolvimento das tecnologias digitais de informação e comunicação.",
            "componente": "História",
            "anos": ["9º ano"],
            "faixa": "09"
        },

        // ============================================================
        // GEOGRAFIA - ANOS ESPECÍFICOS
        // ============================================================
        "EF01GE01": {
            "codigo": "EF01GE01",
            "descricao": "Descrever características observadas de seus lugares de vivência (moradia, escola etc.) e identificar semelhanças e diferenças entre esses lugares.",
            "componente": "Geografia",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01GE02": {
            "codigo": "EF01GE02",
            "descricao": "Identificar semelhanças e diferenças entre jogos e brincadeiras de diferentes épocas e lugares.",
            "componente": "Geografia",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01GE03": {
            "codigo": "EF01GE03",
            "descricao": "Identificar e relatar semelhanças e diferenças de usos do espaço público (praças, parques) para o lazer e diferentes manifestações.",
            "componente": "Geografia",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01GE05": {
            "codigo": "EF01GE05",
            "descricao": "Observar e descrever ritmos naturais (dia e noite, variação de temperatura e umidade etc.) em diferentes escalas espaciais e temporais, comparando a sua realidade com outras.",
            "componente": "Geografia",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01GE08": {
            "codigo": "EF01GE08",
            "descricao": "Criar mapas mentais e desenhos com base em itinerários, contos literários, histórias inventadas e brincadeiras.",
            "componente": "Geografia",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01GE09": {
            "codigo": "EF01GE09",
            "descricao": "Elaborar e utilizar mapas simples para localizar elementos do local de vivência, considerando referenciais espaciais (frente e atrás, esquerda e direita, em cima e embaixo, dentro e fora) e tendo o corpo como referência.",
            "componente": "Geografia",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01GE10": {
            "codigo": "EF01GE10",
            "descricao": "Descrever características de seus lugares de vivência relacionadas aos ritmos da natureza (chuva, vento, calor etc.).",
            "componente": "Geografia",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF02GE01": {
            "codigo": "EF02GE01",
            "descricao": "Descrever a história das migrações no bairro ou comunidade em que vive.",
            "componente": "Geografia",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02GE02": {
            "codigo": "EF02GE02",
            "descricao": "Comparar costumes e tradições de diferentes populações inseridas no bairro ou comunidade em que vive, reconhecendo a importância do respeito às diferenças.",
            "componente": "Geografia",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02GE03": {
            "codigo": "EF02GE03",
            "descricao": "Comparar diferentes meios de transporte e de comunicação, indicando o seu papel na conexão entre lugares, e discutir os riscos para a vida e para o ambiente e seu uso responsável.",
            "componente": "Geografia",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02GE04": {
            "codigo": "EF02GE04",
            "descricao": "Reconhecer semelhanças e diferenças nos hábitos, nas relações com a natureza e no modo de viver de pessoas em diferentes lugares.",
            "componente": "Geografia",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02GE05": {
            "codigo": "EF02GE05",
            "descricao": "Analisar mudanças e permanências, comparando imagens de um mesmo lugar em diferentes tempos.",
            "componente": "Geografia",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02GE07": {
            "codigo": "EF02GE07",
            "descricao": "Descrever as atividades extrativas (minerais, agropecuárias e industriais) de diferentes lugares, identificando os impactos ambientais.",
            "componente": "Geografia",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02GE08": {
            "codigo": "EF02GE08",
            "descricao": "Identificar e elaborar diferentes formas de representação (desenhos, mapas mentais, maquetes) para representar componentes da paisagem dos lugares de vivência.",
            "componente": "Geografia",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF03GE01": {
            "codigo": "EF03GE01",
            "descricao": "Identificar e comparar aspectos culturais dos grupos sociais de seus lugares de vivência, seja na cidade, seja no campo.",
            "componente": "Geografia",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03GE05": {
            "codigo": "EF03GE05",
            "descricao": "Identificar alimentos, minerais e outros produtos cultivados e extraídos da natureza, comparando as atividades de trabalho em diferentes lugares.",
            "componente": "Geografia",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03GE06": {
            "codigo": "EF03GE06",
            "descricao": "Identificar e interpretar imagens bidimensionais e tridimensionais em diferentes tipos de representação cartográfica.",
            "componente": "Geografia",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF04GE02": {
            "codigo": "EF04GE02",
            "descricao": "Descrever processos migratórios e suas contribuições para a formação da sociedade brasileira.",
            "componente": "Geografia",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04GE03": {
            "codigo": "EF04GE03",
            "descricao": "Distinguir funções e papéis dos órgãos do poder público municipal e canais de participação social na gestão do Município, incluindo a Câmara de Vereadores e Conselhos Municipais.",
            "componente": "Geografia",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04GE04": {
            "codigo": "EF04GE04",
            "descricao": "Reconhecer especificidades e analisar a interdependência do campo e da cidade, considerando fluxos econômicos, de informações, de ideias e de pessoas.",
            "componente": "Geografia",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04GE05": {
            "codigo": "EF04GE05",
            "descricao": "Distinguir unidades político-administrativas oficiais nacionais (Distrito, Município, Unidade da Federação e grande região), suas fronteiras e sua hierarquia, localizando seus lugares de vivência.",
            "componente": "Geografia",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04GE07": {
            "codigo": "EF04GE07",
            "descricao": "Comparar as características do trabalho no campo e na cidade.",
            "componente": "Geografia",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04GE08": {
            "codigo": "EF04GE08",
            "descricao": "Descrever e discutir o processo de produção (transformação de matérias-primas), circulação e consumo de diferentes produtos.",
            "componente": "Geografia",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04GE10": {
            "codigo": "EF04GE10",
            "descricao": "Comparar tipos variados de mapas, identificando suas características, elaboradores, finalidades, diferenças e semelhanças.",
            "componente": "Geografia",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04GE11": {
            "codigo": "EF04GE11",
            "descricao": "Identificar as características das paisagens naturais e antrópicas (relevo, cobertura vegetal, rios etc.) no ambiente em que vive, bem como a ação humana na conservação ou degradação dessas áreas.",
            "componente": "Geografia",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF05GE01": {
            "codigo": "EF05GE01",
            "descricao": "Descrever e analisar dinâmicas populacionais na Unidade da Federação em que vive, estabelecendo relações entre migrações e condições de infraestrutura.",
            "componente": "Geografia",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05GE03": {
            "codigo": "EF05GE03",
            "descricao": "Identificar as formas e funções das cidades e analisar as mudanças sociais, econômicas e ambientais provocadas pelo seu crescimento.",
            "componente": "Geografia",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05GE04": {
            "codigo": "EF05GE04",
            "descricao": "Reconhecer as características da cidade e analisar as interações entre a cidade e o campo e entre cidades na rede urbana.",
            "componente": "Geografia",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05GE05": {
            "codigo": "EF05GE05",
            "descricao": "Identificar e comparar as mudanças dos tipos de trabalho e desenvolvimento tecnológico na agropecuária, na indústria, no comércio e nos serviços.",
            "componente": "Geografia",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05GE06": {
            "codigo": "EF05GE06",
            "descricao": "Identificar e comparar transformações dos meios de transporte e de comunicação.",
            "componente": "Geografia",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05GE07": {
            "codigo": "EF05GE07",
            "descricao": "Identificar os diferentes tipos de energia utilizados na produção industrial, agrícola e extrativa e no cotidiano das populações.",
            "componente": "Geografia",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05GE09": {
            "codigo": "EF05GE09",
            "descricao": "Estabelecer conexões e hierarquias entre diferentes cidades, utilizando mapas temáticos e representações gráficas.",
            "componente": "Geografia",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05GE10": {
            "codigo": "EF05GE10",
            "descricao": "Reconhecer e comparar atributos da qualidade ambiental e algumas formas de poluição dos cursos de água e dos oceanos (esgotos, efluentes industriais, marés negras etc.).",
            "componente": "Geografia",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05GE11": {
            "codigo": "EF05GE11",
            "descricao": "Identificar e descrever problemas ambientais que ocorrem no entorno da escola e da residência (lixões, indústrias poluentes, destruição do patrimônio histórico etc.), propondo soluções (inclusive tecnológicas) para esses problemas.",
            "componente": "Geografia",
            "anos": ["5º ano"],
            "faixa": "05"
        },

        // ============================================================
        // GEOGRAFIA - ANOS FINAIS (6º AO 9º)
        // ============================================================
        "EF06GE05": {
            "codigo": "EF06GE05",
            "descricao": "Relacionar padrões climáticos, tipos de solo, relevo e formações vegetais.",
            "componente": "Geografia",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06GE06": {
            "codigo": "EF06GE06",
            "descricao": "Identificar as características das paisagens transformadas pelo trabalho humano a partir do desenvolvimento da agropecuária e do processo de industrialização.",
            "componente": "Geografia",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06GE10": {
            "codigo": "EF06GE10",
            "descricao": "Explicar as diferentes formas de uso do solo (rotação de terras, terraceamento, aterros etc.) e de apropriação dos recursos hídricos (sistema de irrigação, tratamento e redes de distribuição), bem como suas vantagens e desvantagens em diferentes épocas e lugares.",
            "componente": "Geografia",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06GE11": {
            "codigo": "EF06GE11",
            "descricao": "Analisar distintas interações das sociedades com a natureza, com base na distribuição dos componentes físico-naturais, incluindo as transformações da biodiversidade local e do mundo.",
            "componente": "Geografia",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06GE13": {
            "codigo": "EF06GE13",
            "descricao": "Analisar consequências, vantagens e desvantagens das práticas humanas na dinâmica climática (ilha de calor etc.).",
            "componente": "Geografia",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF07GE02": {
            "codigo": "EF07GE02",
            "descricao": "Analisar a influência dos fluxos econômicos e populacionais na formação socioeconômica e territorial do Brasil, compreendendo os conflitos e as tensões históricas e contemporâneas.",
            "componente": "Geografia",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07GE06": {
            "codigo": "EF07GE06",
            "descricao": "Discutir em que medida a produção, a circulação e o consumo de mercadorias provocam impactos ambientais, assim como influem na distribuição de riquezas, em diferentes lugares.",
            "componente": "Geografia",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07GE09": {
            "codigo": "EF07GE09",
            "descricao": "Interpretar e elaborar mapas temáticos e históricos, inclusive utilizando tecnologias digitais, com informações demográficas e econômicas do Brasil (cartogramas), identificando padrões espaciais, regionalizações e analogias.",
            "componente": "Geografia",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07GE11": {
            "codigo": "EF07GE11",
            "descricao": "Caracterizar dinâmicas dos componentes físico-naturais no território nacional, bem como sua distribuição e biodiversidade (Florestas Tropicais, Cerrados, Caatingas, Campos Sulinos e Matas de Araucária).",
            "componente": "Geografia",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF08GE01": {
            "codigo": "EF08GE01",
            "descricao": "Descrever as rotas de dispersão da população humana pelo planeta e os principais fluxos migratórios em diferentes períodos da história, discutindo os fatores históricos e condicionantes físico-naturais associados à distribuição da população humana pelos continentes.",
            "componente": "Geografia",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08GE02": {
            "codigo": "EF08GE02",
            "descricao": "Relacionar fatos e situações representativas da história das famílias do Município em que se localiza a escola, considerando a diversidade e os fluxos migratórios da população mundial.",
            "componente": "Geografia",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08GE03": {
            "codigo": "EF08GE03",
            "descricao": "Analisar aspectos representativos da dinâmica demográfica, considerando características da população (perfil etário, crescimento vegetativo e mobilidade espacial).",
            "componente": "Geografia",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08GE06": {
            "codigo": "EF08GE06",
            "descricao": "Analisar a atuação das organizações mundiais nos processos de integração cultural e econômica nos contextos americano e africano, reconhecendo, em seus lugares de vivência, marcas desses processos.",
            "componente": "Geografia",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08GE10": {
            "codigo": "EF08GE10",
            "descricao": "Distinguir e analisar conflitos e ações dos movimentos sociais brasileiros, no campo e na cidade, comparando com outros movimentos sociais existentes nos países latino-americanos.",
            "componente": "Geografia",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08GE18": {
            "codigo": "EF08GE18",
            "descricao": "Elaborar mapas ou outras formas de representação cartográfica para analisar as redes e as dinâmicas urbanas e rurais, ordenamento territorial, contextos culturais, modo de vida e usos e ocupação de solos da África e América.",
            "componente": "Geografia",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08GE22": {
            "codigo": "EF08GE22",
            "descricao": "Identificar os principais recursos naturais dos países da América Latina, analisando seu uso para a produção de matéria-prima e energia e sua relevância para a cooperação entre os países do Mercosul.",
            "componente": "Geografia",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08GE23": {
            "codigo": "EF08GE23",
            "descricao": "Identificar paisagens da América Latina e associá-las, por meio da artografia, aos diferentes povos da região, com base em aspectos da geomorfologia, da biogeografia e da climatologia.",
            "componente": "Geografia",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF09GE11": {
            "codigo": "EF09GE11",
            "descricao": "Relacionar as mudanças técnicas e científicas decorrentes do processo de industrialização com as transformações no trabalho em diferentes regiões do mundo e suas consequências no Brasil.",
            "componente": "Geografia",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09GE14": {
            "codigo": "EF09GE14",
            "descricao": "Elaborar e interpretar gráficos de barras e de setores, mapas temáticos e esquemáticos (croquis) e anamorfoses geográficas para analisar, sintetizar e apresentar dados e informações sobre diversidade, diferenças e desigualdades sociopolíticas e geopolíticas mundiais.",
            "componente": "Geografia",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09GE15": {
            "codigo": "EF09GE15",
            "descricao": "Comparar e classificar diferentes regiões do mundo com base em informações populacionais, econômicas e socioambientais representadas em mapas temáticos e com diferentes projeções cartográficas.",
            "componente": "Geografia",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09GE18": {
            "codigo": "EF09GE18",
            "descricao": "Identificar e analisar as cadeias industriais e de inovação e as consequências dos usos de recursos naturais e das diferentes fontes de energia (tais como termoelétrica, hidrelétrica, eólica e nuclear) em diferentes países.",
            "componente": "Geografia",
            "anos": ["9º ano"],
            "faixa": "09"
        },

        // ============================================================
        // ENSINO RELIGIOSO - ANOS ESPECÍFICOS
        // ============================================================
        "EF01ER01": {
            "codigo": "EF01ER01",
            "descricao": "Identificar e acolher as semelhanças e diferenças entre o eu, o outro e o nós.",
            "componente": "Ensino Religioso",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01ER02": {
            "codigo": "EF01ER02",
            "descricao": "Reconhecer que o seu nome e o das demais pessoas os identificam e os diferenciam.",
            "componente": "Ensino Religioso",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01ER04": {
            "codigo": "EF01ER04",
            "descricao": "Valorizar atitudes de cuidado consigo, com as outras pessoas e com o ambiente, reconhecendo ações que promovam o bem comum.",
            "componente": "Ensino Religioso",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01ER05": {
            "codigo": "EF01ER05",
            "descricao": "Identificar e acolher sentimentos, lembranças, memórias e saberes de cada um.",
            "componente": "Ensino Religioso",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01ER06": {
            "codigo": "EF01ER06",
            "descricao": "Identificar as diferentes formas pelas quais as pessoas manifestam sentimentos, ideias, memórias, gostos e crenças em diferentes espaços.",
            "componente": "Ensino Religioso",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF02ER01": {
            "codigo": "EF02ER01",
            "descricao": "Reconhecer os diferentes espaços de convivência.",
            "componente": "Ensino Religioso",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02ER02": {
            "codigo": "EF02ER02",
            "descricao": "Identificar costumes, crenças e formas diversas de viver em variados ambientes de convivência.",
            "componente": "Ensino Religioso",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02ER03": {
            "codigo": "EF02ER03",
            "descricao": "Identificar as diferentes formas de registro das memórias pessoais, familiares e escolares (fotos, músicas, narrativas, álbuns...).",
            "componente": "Ensino Religioso",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02ER04": {
            "codigo": "EF02ER04",
            "descricao": "Identificar os símbolos presentes nos variados espaços de convivência.",
            "componente": "Ensino Religioso",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02ER05": {
            "codigo": "EF02ER05",
            "descricao": "Identificar, distinguir e respeitar símbolos religiosos de distintas manifestações, tradições e instituições religiosas.",
            "componente": "Ensino Religioso",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02ER06": {
            "codigo": "EF02ER06",
            "descricao": "Exemplificar alimentos considerados sagrados por diferentes culturas, tradições e expressões religiosas.",
            "componente": "Ensino Religioso",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF03ER01": {
            "codigo": "EF03ER01",
            "descricao": "Identificar e respeitar os diferentes espaços e territórios religiosos de diferentes tradições e movimentos religiosos.",
            "componente": "Ensino Religioso",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03ER02": {
            "codigo": "EF03ER02",
            "descricao": "Caracterizar os espaços e territórios religiosos como locais de realização das práticas celebrativas.",
            "componente": "Ensino Religioso",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03ER03": {
            "codigo": "EF03ER03",
            "descricao": "Identificar e respeitar práticas celebrativas (cerimônias, orações, festividades, peregrinações, entre outras) de diferentes tradições religiosas.",
            "componente": "Ensino Religioso",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03ER04": {
            "codigo": "EF03ER04",
            "descricao": "Caracterizar as práticas celebrativas como parte integrante do conjunto das manifestações religiosas de diferentes culturas e sociedades.",
            "componente": "Ensino Religioso",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF04ER04": {
            "codigo": "EF04ER04",
            "descricao": "Identificar as diversas formas de expressão da espiritualidade (orações, cultos, gestos, cantos, dança, meditação) nas diferentes tradições religiosas.",
            "componente": "Ensino Religioso",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04ER05": {
            "codigo": "EF04ER05",
            "descricao": "Identificar representações religiosas em diferentes expressões artísticas (pinturas, arquitetura, esculturas, ícones, símbolos, imagens), reconhecendo-as como parte da identidade de diferentes culturas e tradições religiosas.",
            "componente": "Ensino Religioso",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF05ER01": {
            "codigo": "EF05ER01",
            "descricao": "Identificar e respeitar acontecimentos sagrados de diferentes culturas e tradições religiosas como recurso para preservar a memória.",
            "componente": "Ensino Religioso",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05ER02": {
            "codigo": "EF05ER02",
            "descricao": "Identificar mitos de criação em diferentes culturas e tradições religiosas.",
            "componente": "Ensino Religioso",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05ER03": {
            "codigo": "EF05ER03",
            "descricao": "Reconhecer funções e mensagens religiosas contidas nos mitos de criação (concepções de mundo, natureza, ser humano, divindades, vida e morte).",
            "componente": "Ensino Religioso",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05ER05": {
            "codigo": "EF05ER05",
            "descricao": "Identificar elementos da tradição oral nas culturas e religiosidades indígenas, afro-brasileiras, ciganas, entre outras.",
            "componente": "Ensino Religioso",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05ER06": {
            "codigo": "EF05ER06",
            "descricao": "Identificar o papel dos sábios e anciãos na comunicação e preservação da tradição oral.",
            "componente": "Ensino Religioso",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05ER07": {
            "codigo": "EF05ER07",
            "descricao": "Reconhecer, em textos orais, ensinamentos relacionados a modos de ser e viver.",
            "componente": "Ensino Religioso",
            "anos": ["5º ano"],
            "faixa": "05"
        },

        // ============================================================
        // ENSINO RELIGIOSO - ANOS FINAIS (6º AO 9º)
        // ============================================================
        "EF06ER03": {
            "codigo": "EF06ER03",
            "descricao": "Reconhecer, em textos escritos, ensinamentos relacionados a modos de ser e viver.",
            "componente": "Ensino Religioso",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06ER05": {
            "codigo": "EF06ER05",
            "descricao": "Discutir como o estudo e a interpretação dos textos religiosos influenciam os adeptos a vivenciarem os ensinamentos das tradições religiosas.",
            "componente": "Ensino Religioso",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06ER07": {
            "codigo": "EF06ER07",
            "descricao": "Exemplificar a relação entre mito, rito e símbolo nas práticas celebrativas de diferentes tradições religiosas.",
            "componente": "Ensino Religioso",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF07ER02": {
            "codigo": "EF07ER02",
            "descricao": "Identificar práticas de espiritualidade utilizadas pelas pessoas em determinadas situações (acidentes, doenças, fenômenos climáticos).",
            "componente": "Ensino Religioso",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07ER05": {
            "codigo": "EF07ER05",
            "descricao": "Discutir estratégias que promovam a convivência ética e respeitosa entre as religiões.",
            "componente": "Ensino Religioso",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07ER07": {
            "codigo": "EF07ER07",
            "descricao": "Identificar e discutir o papel das lideranças religiosas e seculares na defesa e promoção dos direitos humanos.",
            "componente": "Ensino Religioso",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07ER08": {
            "codigo": "EF07ER08",
            "descricao": "Reconhecer o direito à liberdade de consciência, crença ou convicção, questionando concepções e práticas sociais que a violam.",
            "componente": "Ensino Religioso",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF08ER01": {
            "codigo": "EF08ER01",
            "descricao": "Discutir como as crenças e convicções podem influenciar escolhas e atitudes pessoais e coletivas.",
            "componente": "Ensino Religioso",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08ER02": {
            "codigo": "EF08ER02",
            "descricao": "Analisar filosofias de vida, manifestações e tradições religiosas destacando seus princípios éticos.",
            "componente": "Ensino Religioso",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08ER04": {
            "codigo": "EF08ER04",
            "descricao": "Discutir como filosofias de vida, tradições e instituições religiosas podem influenciar diferentes campos da esfera pública (política, saúde, educação, economia).",
            "componente": "Ensino Religioso",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08ER05": {
            "codigo": "EF08ER05",
            "descricao": "Debater sobre as possibilidades e os limites da interferência das tradições religiosas na esfera pública.",
            "componente": "Ensino Religioso",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08ER07": {
            "codigo": "EF08ER07",
            "descricao": "Analisar as formas de uso das mídias e tecnologias pelas diferentes denominações religiosas.",
            "componente": "Ensino Religioso",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF09ER02": {
            "codigo": "EF09ER02",
            "descricao": "Discutir as diferentes expressões de valorização e de desrespeito à vida, por meio da análise de matérias nas diferentes mídias.",
            "componente": "Ensino Religioso",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09ER06": {
            "codigo": "EF09ER06",
            "descricao": "Reconhecer a coexistência como uma atitude ética de respeito à vida e à dignidade humana.",
            "componente": "Ensino Religioso",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09ER07": {
            "codigo": "EF09ER07",
            "descricao": "Identificar princípios éticos (familiares, religiosos e culturais) que possam alicerçar a construção de projetos de vida.",
            "componente": "Ensino Religioso",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09ER08": {
            "codigo": "EF09ER08",
            "descricao": "Construir projetos de vida assentados em princípios e valores éticos.",
            "componente": "Ensino Religioso",
            "anos": ["9º ano"],
            "faixa": "09"
        },

        // ============================================================
        // MATEMÁTICA - ANOS ESPECÍFICOS
        // ============================================================
        "EF01MA01": {
            "codigo": "EF01MA01",
            "descricao": "Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas e reconhecer situações em que os números não indicam contagem nem ordem, mas sim código de identificação.",
            "componente": "Matemática",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01MA02": {
            "codigo": "EF01MA02",
            "descricao": "Contar de maneira exata ou aproximada, utilizando diferentes estratégias como o pareamento e outros agrupamentos.",
            "componente": "Matemática",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01MA09": {
            "codigo": "EF01MA09",
            "descricao": "Organizar e ordenar objetos familiares ou representações por figuras, por meio de atributos, tais como cor, forma e medida.",
            "componente": "Matemática",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01MA12": {
            "codigo": "EF01MA12",
            "descricao": "Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial.",
            "componente": "Matemática",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01MA13": {
            "codigo": "EF01MA13",
            "descricao": "Relacionar figuras geométricas espaciais (cones, cilindros, esferas e blocos retangulares) a objetos familiares do mundo físico.",
            "componente": "Matemática",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01MA16": {
            "codigo": "EF01MA16",
            "descricao": "Relatar em linguagem verbal ou não verbal sequência de acontecimentos relativos a um dia, utilizando, quando possível, os horários dos eventos.",
            "componente": "Matemática",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF01MA21": {
            "codigo": "EF01MA21",
            "descricao": "Ler dados expressos em tabelas e em gráficos de colunas simples.",
            "componente": "Matemática",
            "anos": ["1º ano"],
            "faixa": "01"
        },
        "EF02MA04": {
            "codigo": "EF02MA04",
            "descricao": "Compor e decompor números naturais de até três ordens, com suporte de material manipulável, por meio de diferentes adições.",
            "componente": "Matemática",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02MA09": {
            "codigo": "EF02MA09",
            "descricao": "Construir sequências de números naturais em ordem crescente ou decrescente a partir de um número qualquer, utilizando uma regularidade estabelecida.",
            "componente": "Matemática",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02MA10": {
            "codigo": "EF02MA10",
            "descricao": "Descrever um padrão (ou regularidade) de sequências repetitivas e de sequências recursivas, por meio de palavras, símbolos ou desenhos.",
            "componente": "Matemática",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02MA11": {
            "codigo": "EF02MA11",
            "descricao": "Descrever os elementos ausentes em sequências repetitivas e em sequências recursivas de números naturais, objetos ou figuras.",
            "componente": "Matemática",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02MA16": {
            "codigo": "EF02MA16",
            "descricao": "Estimar, medir e comparar comprimentos de lados de salas (incluindo contorno) e de polígonos, utilizando unidades de medida não padronizadas e padronizadas (metro, centímetro e milímetro) e instrumentos adequados.",
            "componente": "Matemática",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02MA18": {
            "codigo": "EF02MA18",
            "descricao": "Indicar a duração de intervalos de tempo entre duas datas, como dias da semana e meses do ano, utilizando calendário, para planejamentos e organização de agenda.",
            "componente": "Matemática",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF02MA19": {
            "codigo": "EF02MA19",
            "descricao": "Medir a duração de um intervalo de tempo por meio de relógio digital e registrar o horário do início e do fim do intervalo.",
            "componente": "Matemática",
            "anos": ["2º ano"],
            "faixa": "02"
        },
        "EF03MA01": {
            "codigo": "EF03MA01",
            "descricao": "Ler, escrever e comparar números naturais de até a ordem de unidade de milhar, estabelecendo relações entre os registros numéricos e em língua materna.",
            "componente": "Matemática",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03MA02": {
            "codigo": "EF03MA02",
            "descricao": "Identificar características do sistema de numeração decimal, utilizando a composição e a decomposição de número natural de até quatro ordens.",
            "componente": "Matemática",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03MA05": {
            "codigo": "EF03MA05",
            "descricao": "Utilizar diferentes procedimentos de cálculo mental e escrito, inclusive os convencionais, para resolver problemas significativos envolvendo adição e subtração com números naturais.",
            "componente": "Matemática",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03MA06": {
            "codigo": "EF03MA06",
            "descricao": "Resolver e elaborar problemas de adição e subtração com os significados de juntar, acrescentar, separar, retirar, comparar e completar quantidades, utilizando diferentes estratégias de cálculo exato ou aproximado, incluindo cálculo mental.",
            "componente": "Matemática",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03MA07": {
            "codigo": "EF03MA07",
            "descricao": "Resolver e elaborar problemas de multiplicação (por 2, 3, 4, 5 e 10) com os significados de adição de parcelas iguais e elementos apresentados em disposição retangular, utilizando diferentes estratégias de cálculo e registros.",
            "componente": "Matemática",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03MA08": {
            "codigo": "EF03MA08",
            "descricao": "Resolver e elaborar problemas de divisão de um número natural por outro (até 10), com resto zero e com resto diferente de zero, com os significados de repartição equitativa e de medida, por meio de estratégias e registros pessoais.",
            "componente": "Matemática",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03MA10": {
            "codigo": "EF03MA10",
            "descricao": "Identificar regularidades em sequências ordenadas de números naturais, resultantes da realização de adições ou subtrações sucessivas, por um mesmo número, descrever uma regra de formação da sequência e determinar elementos faltantes ou seguintes.",
            "componente": "Matemática",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03MA20": {
            "codigo": "EF03MA20",
            "descricao": "Estimar e medir capacidade e massa, utilizando unidades de medida não padronizadas e padronizadas mais usuais (litro, mililitro, quilograma, grama e miligrama), reconhecendo-as em leitura de rótulos e embalagens, entre outros.",
            "componente": "Matemática",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03MA22": {
            "codigo": "EF03MA22",
            "descricao": "Ler e registrar medidas e intervalos de tempo, utilizando relógios (analógico e digital) para informar os horários de início e término de realização de uma atividade e sua duração.",
            "componente": "Matemática",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03MA26": {
            "codigo": "EF03MA26",
            "descricao": "Resolver problemas cujos dados estão apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas.",
            "componente": "Matemática",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF03MA27": {
            "codigo": "EF03MA27",
            "descricao": "Ler, interpretar e comparar dados apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas, envolvendo resultados de pesquisas significativas, utilizando termos como maior e menor frequência, apropriando-se desse tipo de linguagem para compreender aspectos da realidade sociocultural significativos.",
            "componente": "Matemática",
            "anos": ["3º ano"],
            "faixa": "03"
        },
        "EF04MA01": {
            "codigo": "EF04MA01",
            "descricao": "Ler, escrever e ordenar números naturais até a ordem de dezenas de milhar.",
            "componente": "Matemática",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04MA02": {
            "codigo": "EF04MA02",
            "descricao": "Mostrar, por decomposição e composição, que todo número natural pode ser escrito por meio de adições e multiplicações por potências de dez, para compreender o sistema de numeração decimal e desenvolver estratégias de cálculo.",
            "componente": "Matemática",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04MA07": {
            "codigo": "EF04MA07",
            "descricao": "Resolver e elaborar problemas de divisão cujo divisor tenha no máximo dois algarismos, envolvendo os significados de repartição equitativa e de medida, utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos.",
            "componente": "Matemática",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04MA10": {
            "codigo": "EF04MA10",
            "descricao": "Reconhecer que as regras do sistema de numeração decimal podem ser estendidas para a representação decimal de um número racional e relacionar décimos e centésimos com a representação do sistema monetário brasileiro.",
            "componente": "Matemática",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04MA16": {
            "codigo": "EF04MA16",
            "descricao": "Descrever deslocamentos e localização de pessoas e de objetos no espaço, por meio de malhas quadriculadas e representações como desenhos, mapas, planta baixa e croquis, empregando termos como direita e esquerda, mudanças de direção e sentido, intersecção, transversais, paralelas e perpendiculares.",
            "componente": "Matemática",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04MA20": {
            "codigo": "EF04MA20",
            "descricao": "Medir e estimar comprimentos (incluindo perímetros), massas e capacidades, utilizando unidades de medida padronizadas mais usuais, valorizando e respeitando a cultura local.",
            "componente": "Matemática",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04MA27": {
            "codigo": "EF04MA27",
            "descricao": "Analisar dados apresentados em tabelas simples ou de dupla entrada e em gráficos de colunas ou pictóricos, com base em informações das diferentes áreas do conhecimento, e produzir texto com a síntese de sua análise.",
            "componente": "Matemática",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF04MA28": {
            "codigo": "EF04MA28",
            "descricao": "Realizar pesquisa envolvendo variáveis categóricas e numéricas e organizar dados coletados por meio de tabelas e gráficos de colunas simples ou agrupadas, com e sem uso de tecnologias digitais.",
            "componente": "Matemática",
            "anos": ["4º ano"],
            "faixa": "04"
        },
        "EF05MA01": {
            "codigo": "EF05MA01",
            "descricao": "Ler, escrever e ordenar números naturais até a ordem das centenas de milhar com compreensão das principais características do sistema de numeração decimal.",
            "componente": "Matemática",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05MA06": {
            "codigo": "EF05MA06",
            "descricao": "Associar as representações 10%, 25%, 50%, 75% e 100% respectivamente à décima parte, quarta parte, metade, três quartos e um inteiro, para calcular porcentagens, utilizando estratégias pessoais, cálculo mental e calculadora, em contextos de educação financeira, entre outros.",
            "componente": "Matemática",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05MA07": {
            "codigo": "EF05MA07",
            "descricao": "Resolver e elaborar problemas de adição e subtração com números naturais e com números racionais, cuja representação decimal seja finita, utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos.",
            "componente": "Matemática",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05MA08": {
            "codigo": "EF05MA08",
            "descricao": "Resolver e elaborar problemas de multiplicação e divisão com números naturais e com números racionais cuja representação decimal é finita (com multiplicador natural e divisor natural e diferente de zero), utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos.",
            "componente": "Matemática",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05MA14": {
            "codigo": "EF05MA14",
            "descricao": "Utilizar e compreender diferentes representações para a localização de objetos no plano, como mapas, células em planilhas eletrônicas e coordenadas geográficas, a fim de desenvolver as primeiras noções de coordenadas cartesianas.",
            "componente": "Matemática",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05MA16": {
            "codigo": "EF05MA16",
            "descricao": "Associar figuras espaciais a suas planificações (prismas, pirâmides, cilindros e cones) e analisar, nomear e comparar seus atributos.",
            "componente": "Matemática",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05MA17": {
            "codigo": "EF05MA17",
            "descricao": "Reconhecer, nomear e comparar polígonos, considerando lados, vértices e ângulos, e desenhá-los, utilizando material de desenho ou tecnologias digitais.",
            "componente": "Matemática",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05MA19": {
            "codigo": "EF05MA19",
            "descricao": "Resolver e elaborar problemas envolvendo medidas das grandezas comprimento, área, massa, tempo, temperatura e capacidade, recorrendo a transformações entre as unidades mais usuais em contextos socioculturais.",
            "componente": "Matemática",
            "anos": ["5º ano"],
            "faixa": "05"
        },
        "EF05MA25": {
            "codigo": "EF05MA25",
            "descricao": "Realizar pesquisa envolvendo variáveis categóricas e numéricas, organizar dados coletados por meio de tabelas, gráficos de colunas, pictóricos e de linhas, com e sem uso de tecnologias digitais, e apresentar texto escrito sobre a finalidade da pesquisa e a síntese dos resultados.",
            "componente": "Matemática",
            "anos": ["5º ano"],
            "faixa": "05"
        },

        // ============================================================
        // MATEMÁTICA - ANOS FINAIS (6º AO 9º)
        // ============================================================
        "EF06MA04": {
            "codigo": "EF06MA04",
            "descricao": "Construir algoritmo em linguagem natural e representá-lo por fluxograma que indique a resolução de um problema simples (por exemplo, se um número natural qualquer é par).",
            "componente": "Matemática",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06MA05": {
            "codigo": "EF06MA05",
            "descricao": "Classificar números naturais em primos e compostos, estabelecer relações entre números, expressas pelos termos 'é múltiplo de', 'é divisor de', 'é fator de', e estabelecer, por meio de investigações, critérios de divisibilidade por 2, 3, 4, 5, 6, 8, 9, 10, 100 e 1000.",
            "componente": "Matemática",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06MA12": {
            "codigo": "EF06MA12",
            "descricao": "Fazer estimativas de quantidades e aproximar números para múltiplos da potência de 10 mais próxima.",
            "componente": "Matemática",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06MA16": {
            "codigo": "EF06MA16",
            "descricao": "Associar pares ordenados de números a pontos do plano cartesiano do 1.º quadrante, em situações como a localização dos vértices de um polígono.",
            "componente": "Matemática",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06MA24": {
            "codigo": "EF06MA24",
            "descricao": "Resolver e elaborar problemas que envolvam as grandezas comprimento, massa, tempo, temperatura, área (triângulos e retângulos), capacidade e volume (sólidos formados por blocos retangulares), sem uso de fórmulas, inseridos, sempre que possível, em contextos oriundos de situações reais e/ou relacionadas às outras áreas do conhecimento.",
            "componente": "Matemática",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06MA31": {
            "codigo": "EF06MA31",
            "descricao": "Identificar as variáveis e suas frequências e os elementos constitutivos (título, eixos, legendas, fontes e datas) em diferentes tipos de gráfico.",
            "componente": "Matemática",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06MA32": {
            "codigo": "EF06MA32",
            "descricao": "Interpretar e resolver situações que envolvam dados de pesquisas sobre contextos ambientais, sustentabilidade, trânsito, consumo responsável, entre outros, apresentadas pela mídia em tabelas e em diferentes tipos de gráficos e redigir textos escritos com o objetivo de sintetizar conclusões.",
            "componente": "Matemática",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF06MA33": {
            "codigo": "EF06MA33",
            "descricao": "Planejar e coletar dados de pesquisa referente a práticas sociais escolhidas pelos estudantes e fazer uso de planilhas eletrônicas para registro, representação e interpretação das informações, em tabelas, vários tipos de gráficos e textos.",
            "componente": "Matemática",
            "anos": ["6º ano"],
            "faixa": "06"
        },
        "EF07MA07": {
            "codigo": "EF07MA07",
            "descricao": "Representar por meio de um fluxograma os passos utilizados para resolver um grupo de problemas.",
            "componente": "Matemática",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07MA20": {
            "codigo": "EF07MA20",
            "descricao": "Reconhecer e representar, no plano cartesiano, o simétrico de figuras em relação aos eixos e à origem.",
            "componente": "Matemática",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07MA32": {
            "codigo": "EF07MA32",
            "descricao": "Resolver e elaborar problemas de cálculo de medida de área de figuras planas que podem ser decompostas por quadrados, retângulos e/ou triângulos, utilizando a equivalência entre áreas.",
            "componente": "Matemática",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07MA34": {
            "codigo": "EF07MA34",
            "descricao": "Planejar e realizar experimentos aleatórios ou simulações que envolvem cálculo de probabilidades ou estimativas por meio de frequência de ocorrências.",
            "componente": "Matemática",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07MA36": {
            "codigo": "EF07MA36",
            "descricao": "Planejar e realizar pesquisa envolvendo tema da realidade social, identificando a necessidade de ser censitária ou de usar amostra, e interpretar os dados para comunicá-los por meio de relatório escrito, tabelas e gráficos, com o apoio de planilhas eletrônicas.",
            "componente": "Matemática",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF07MA37": {
            "codigo": "EF07MA37",
            "descricao": "Interpretar e analisar dados apresentados em gráfico de setores divulgados pela mídia e compreender quando é possível ou conveniente sua utilização.",
            "componente": "Matemática",
            "anos": ["7º ano"],
            "faixa": "07"
        },
        "EF08MA03": {
            "codigo": "EF08MA03",
            "descricao": "Resolver e elaborar problemas de contagem cuja resolução envolva a aplicação do princípio multiplicativo.",
            "componente": "Matemática",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08MA04": {
            "codigo": "EF08MA04",
            "descricao": "Resolver e elaborar problemas, envolvendo cálculo de porcentagens, incluindo o uso de tecnologias digitais.",
            "componente": "Matemática",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08MA11": {
            "codigo": "EF08MA11",
            "descricao": "Identificar a regularidade de uma sequência numérica recursiva e construir um algoritmo por meio de um fluxograma que permita indicar os números seguintes.",
            "componente": "Matemática",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF08MA24": {
            "codigo": "EF08MA24",
            "descricao": "Classificar as frequências de uma variável contínua de uma pesquisa em classes, de modo que resumam os dados de maneira adequada para a tomada de decisões.",
            "componente": "Matemática",
            "anos": ["8º ano"],
            "faixa": "08"
        },
        "EF09MA15": {
            "codigo": "EF09MA15",
            "descricao": "Descrever, por escrito e por meio de um fluxograma, um algoritmo para a construção de um polígono regular cuja medida do lado é conhecida, utilizando régua e compasso, como também softwares.",
            "componente": "Matemática",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09MA20": {
            "codigo": "EF09MA20",
            "descricao": "Reconhecer, em experimentos aleatórios, eventos independentes e dependentes e calcular a probabilidade de sua ocorrência, nos dois casos.",
            "componente": "Matemática",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09MA21": {
            "codigo": "EF09MA21",
            "descricao": "Analisar e identificar, em gráficos divulgados pela mídia, os elementos que podem induzir, às vezes propositadamente, erros de leitura, como escalas inapropriadas, legendas não explicitadas corretamente, omissão de informações importantes (fontes e datas), entre outros.",
            "componente": "Matemática",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09MA22": {
            "codigo": "EF09MA22",
            "descricao": "Escolher e construir o gráfico mais adequado (colunas, setores, linhas), com ou sem uso de planilhas eletrônicas, para apresentar um determinado conjunto de dados, destacando aspectos como as medidas de tendência central.",
            "componente": "Matemática",
            "anos": ["9º ano"],
            "faixa": "09"
        },
        "EF09MA23": {
            "codigo": "EF09MA23",
            "descricao": "Planejar e executar pesquisa amostral envolvendo tema da realidade social e comunicar os resultados por meio de relatório contendo avaliação de medidas de tendência central e da amplitude, tabelas e gráficos adequados, construídos com o apoio de planilhas eletrônicas.",
            "componente": "Matemática",
            "anos": ["9º ano"],
            "faixa": "09"
        }
    }
};

// EXPORTA PARA O ESCOPO GLOBAL
window.bnccComponentes = bnccComponentes;