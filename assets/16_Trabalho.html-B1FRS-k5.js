import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as s,c as r,a as i,d as t,w as d,e as n,b as l}from"./app-CX7XYTt-.js";const c={},m=n('<h1 id="estrutura-geral-do-trabalho" tabindex="-1"><a class="header-anchor" href="#estrutura-geral-do-trabalho"><span>Estrutura Geral do Trabalho</span></a></h1><p>A estrutura do trabalho é baseada na arquitetura em três camadas: <strong>Camada de Apresentação</strong>, <strong>Camada de Negócio</strong> e <strong>Camada de Dados</strong>. No entanto, nesta proposta, os dados não serão persistidos em um banco de dados, mas sim em estruturas de dados temporárias, como listas ou mapas, mantidas na memória durante a execução do programa.</p><h2 id="camada-de-apresentacao-ui-javafx" tabindex="-1"><a class="header-anchor" href="#camada-de-apresentacao-ui-javafx"><span>Camada de Apresentação (UI - JavaFX)</span></a></h2><p>Responsável por toda a interação com o usuário. Esta camada deve exibir a interface gráfica, coletar dados dos formulários e apresentar os resultados ou mensagens de erro de maneira clara e amigável. É onde o JavaFX será utilizado para criar as janelas, botões, formulários e outros componentes gráficos.</p><h3 id="exemplo-de-funcionalidade" tabindex="-1"><a class="header-anchor" href="#exemplo-de-funcionalidade"><span>Exemplo de Funcionalidade</span></a></h3><p>Um formulário para cadastrar produtos em um sistema de estoque ou uma tela que exibe o status das tarefas em um gerenciador de tarefas.</p><h3 id="tratamento-de-excecoes" tabindex="-1"><a class="header-anchor" href="#tratamento-de-excecoes"><span>Tratamento de Exceções</span></a></h3><p>Exceções lançadas na camada de negócio devem ser capturadas nesta camada e exibidas ao usuário por meio de alertas, caixas de diálogo ou mensagens na interface gráfica.</p><h2 id="camada-de-negocio-business-logic" tabindex="-1"><a class="header-anchor" href="#camada-de-negocio-business-logic"><span>Camada de Negócio (Business Logic)</span></a></h2><p>Contém a lógica do sistema e as regras de negócio. Nesta camada, são verificadas as condições impostas pelo domínio da aplicação (por exemplo, limites de estoque, validação de dados, etc.). Essa camada também é responsável por lançar exceções específicas quando as regras de negócio são violadas.</p><h3 id="exemplo-de-funcionalidade-1" tabindex="-1"><a class="header-anchor" href="#exemplo-de-funcionalidade-1"><span>Exemplo de Funcionalidade</span></a></h3><p>Em um sistema de gerenciamento de estoque, esta camada seria responsável por verificar se a quantidade de produtos é suficiente antes de permitir uma venda ou gerar exceções caso um valor inválido seja informado.</p><h3 id="tratamento-de-excecoes-1" tabindex="-1"><a class="header-anchor" href="#tratamento-de-excecoes-1"><span>Tratamento de Exceções</span></a></h3><p>Esta camada deve lançar exceções específicas que serão tratadas na camada de apresentação.</p><h2 id="camada-de-dados-data-access" tabindex="-1"><a class="header-anchor" href="#camada-de-dados-data-access"><span>Camada de Dados (Data Access)</span></a></h2><p>Gerencia os dados da aplicação. Embora não haja persistência em um banco de dados, os dados serão armazenados temporariamente em estruturas de dados em memória (como <code>ArrayList</code>, <code>HashMap</code>, etc.). Esta camada simula o comportamento de uma camada de persistência, mas sem a necessidade de conexão com um banco de dados.</p><h3 id="exemplo-de-funcionalidade-2" tabindex="-1"><a class="header-anchor" href="#exemplo-de-funcionalidade-2"><span>Exemplo de Funcionalidade</span></a></h3><p>Gerenciar a lista de produtos cadastrados, recuperar os dados de um produto ou remover um produto da lista. Todas as operações de CRUD (Create, Read, Update, Delete) serão realizadas diretamente sobre essas estruturas temporárias.</p><h2 id="fluxo-de-comunicacao-entre-as-camadas" tabindex="-1"><a class="header-anchor" href="#fluxo-de-comunicacao-entre-as-camadas"><span>Fluxo de Comunicação Entre as Camadas</span></a></h2><ol><li>O usuário interage com a <strong>Camada de Apresentação</strong> (JavaFX), por exemplo, preenchendo um formulário de cadastro de um produto.</li><li>A <strong>Camada de Apresentação</strong> envia os dados para a <strong>Camada de Negócio</strong>.</li><li>A <strong>Camada de Negócio</strong> aplica as regras e validações. Caso uma regra de negócio seja violada, uma exceção é lançada.</li><li>Se a validação for bem-sucedida, a <strong>Camada de Negócio</strong> interage com a <strong>Camada de Dados</strong> para armazenar, recuperar ou modificar os dados.</li><li>Qualquer erro ou exceção gerada na <strong>Camada de Negócio</strong> é capturada pela <strong>Camada de Apresentação</strong> e exibida de maneira amigável para o usuário.</li></ol><h3 id="barema-para-avaliacao-do-trabalho" tabindex="-1"><a class="header-anchor" href="#barema-para-avaliacao-do-trabalho"><span>Barema para Avaliação do Trabalho</span></a></h3><p>O barema a seguir será utilizado para avaliar a implementação do projeto. Cada critério possui um peso específico, totalizando 100 pontos.</p><h4 id="_1-interface-grafica-javafx-20-pontos" tabindex="-1"><a class="header-anchor" href="#_1-interface-grafica-javafx-20-pontos"><span>1. <strong>Interface Gráfica (JavaFX) - 20 pontos</strong></span></a></h4><ul><li><strong>Completude e Funcionalidade da Interface (10 pontos)</strong>: A interface permite que o usuário realize todas as ações propostas no trabalho (ex: cadastrar, remover, atualizar dados).</li><li><strong>Usabilidade e Apresentação (5 pontos)</strong>: A interface é amigável, clara e intuitiva, com uma boa organização dos componentes gráficos.</li><li><strong>Exibição de Mensagens de Erro (5 pontos)</strong>: As mensagens de erro e exceções são exibidas de forma clara, amigável e ajudam o usuário a corrigir os erros.</li></ul><h4 id="_2-camada-de-negocio-regras-de-negocio-30-pontos" tabindex="-1"><a class="header-anchor" href="#_2-camada-de-negocio-regras-de-negocio-30-pontos"><span>2. <strong>Camada de Negócio (Regras de Negócio) - 30 pontos</strong></span></a></h4><ul><li><strong>Implementação das Regras de Negócio (20 pontos)</strong>: Todas as regras de negócio especificadas no projeto foram implementadas corretamente e respeitam as condições do domínio (ex: limites de estoque, validação de campos).</li><li><strong>Tratamento e Lançamento de Exceções (10 pontos)</strong>: As exceções são corretamente lançadas pela camada de negócio quando há uma violação das regras. As exceções devem ser personalizadas (ex: <code>ProdutoInvalidoException</code>, <code>EstoqueInsuficienteException</code>).</li></ul><h4 id="_3-camada-de-dados-estruturas-de-dados-em-memoria-20-pontos" tabindex="-1"><a class="header-anchor" href="#_3-camada-de-dados-estruturas-de-dados-em-memoria-20-pontos"><span>3. <strong>Camada de Dados (Estruturas de Dados em Memória) - 20 pontos</strong></span></a></h4><ul><li><strong>Implementação das Estruturas de Dados (10 pontos)</strong>: Os dados são corretamente gerenciados utilizando as estruturas de dados apropriadas (ex: <code>ArrayList</code>, <code>HashMap</code>). As operações de inserção, remoção, leitura e atualização funcionam adequadamente.</li><li><strong>Organização e Simulação de Persistência (10 pontos)</strong>: A camada de dados é bem estruturada e simula a persistência de forma organizada, separando claramente a lógica de acesso a dados das regras de negócio.</li></ul><h4 id="_4-separacao-em-camadas-20-pontos" tabindex="-1"><a class="header-anchor" href="#_4-separacao-em-camadas-20-pontos"><span>4. <strong>Separação em Camadas - 20 pontos</strong></span></a></h4><ul><li><strong>Segregação Correta das Funções (10 pontos)</strong>: A separação entre as camadas de apresentação, negócio e dados está clara, com cada uma desempenhando corretamente suas responsabilidades.</li><li><strong>Comunicação Entre as Camadas (10 pontos)</strong>: A comunicação entre as camadas é feita de maneira fluida e correta, utilizando métodos e estruturas apropriadas para transferir dados entre as camadas.</li></ul><h4 id="_5-boas-praticas-10-pontos" tabindex="-1"><a class="header-anchor" href="#_5-boas-praticas-10-pontos"><span>5. <strong>Boas Práticas - 10 pontos</strong></span></a></h4><ul><li><strong>Boas Práticas de Programação (10 pontos)</strong>: O código segue boas práticas, incluindo nomeação adequada de variáveis, métodos e classes, além de evitar duplicação de código e garantir uma organização clara do projeto.</li></ul><h2 id="propostas-de-projetos" tabindex="-1"><a class="header-anchor" href="#propostas-de-projetos"><span>Propostas de projetos</span></a></h2><h3 id="sistema-de-gerenciamento-de-estoque" tabindex="-1"><a class="header-anchor" href="#sistema-de-gerenciamento-de-estoque"><span>Sistema de Gerenciamento de Estoque</span></a></h3><p><strong>Descrição:</strong> Desenvolver um sistema para gerenciar o estoque de uma loja. A interface permitirá adicionar, remover e atualizar produtos, além de gerar relatórios do inventário.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir a entrada de produtos com quantidade ou preço negativo.</li><li>Não permitir a venda de um produto sem estoque.</li><li>Notificar quando o estoque estiver abaixo de um nível mínimo.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>ProdutoInvalidoException</code> (para quantidades e preços negativos).</li><li><code>EstoqueInsuficienteException</code> (para vendas com estoque insuficiente).</li></ul><h3 id="sistema-de-cadastro-de-alunos-e-notas" tabindex="-1"><a class="header-anchor" href="#sistema-de-cadastro-de-alunos-e-notas"><span>Sistema de Cadastro de Alunos e Notas</span></a></h3><p><strong>Descrição:</strong> Desenvolver um sistema que permita o cadastro de alunos e notas. O sistema deve calcular a média e indicar a aprovação ou reprovação.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir notas fora do intervalo de 0 a 10.</li><li>Aprovação apenas com média maior ou igual a 7.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>NotaInvalidaException</code> (para notas fora do intervalo permitido).</li><li><code>AlunoNaoCadastradoException</code> (tentativa de acessar aluno não cadastrado).</li></ul><h3 id="sistema-de-reservas-de-salas" tabindex="-1"><a class="header-anchor" href="#sistema-de-reservas-de-salas"><span>Sistema de Reservas de Salas</span></a></h3><p><strong>Descrição:</strong> Desenvolver uma aplicação para reservar salas de reuniões. O sistema deve permitir o agendamento e a visualização de horários disponíveis.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir reserva de uma sala já ocupada no horário desejado.</li><li>Não permitir reserva sem informar o número de participantes.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>SalaOcupadaException</code>.</li><li><code>NumeroParticipantesInvalidoException</code>.</li></ul><h3 id="sistema-de-gerenciamento-de-cursos" tabindex="-1"><a class="header-anchor" href="#sistema-de-gerenciamento-de-cursos"><span>Sistema de Gerenciamento de Cursos</span></a></h3><p><strong>Descrição:</strong> Criar um sistema para gerenciar cursos e inscrições de alunos. O sistema deve permitir a criação de turmas e a inscrição de alunos nas turmas.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir a inscrição de mais alunos do que o limite de vagas da turma.</li><li>Não permitir a criação de turmas com menos de 5 alunos inscritos.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>VagasInsuficientesException</code>.</li><li><code>TurmaInvalidaException</code>.</li></ul><h3 id="sistema-de-pedidos-de-restaurante" tabindex="-1"><a class="header-anchor" href="#sistema-de-pedidos-de-restaurante"><span>Sistema de Pedidos de Restaurante</span></a></h3><p><strong>Descrição:</strong> Desenvolver um sistema para registrar pedidos em um restaurante. O sistema deve permitir o cadastro de pratos, a criação de pedidos e o cálculo do valor total.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir pedidos sem itens.</li><li>Não permitir pedidos de itens fora do cardápio.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>PedidoVazioException</code>.</li><li><code>ItemNaoEncontradoException</code>.</li></ul><h3 id="sistema-de-gerenciamento-de-viagens" tabindex="-1"><a class="header-anchor" href="#sistema-de-gerenciamento-de-viagens"><span>Sistema de Gerenciamento de Viagens</span></a></h3><p><strong>Descrição:</strong> Criar um sistema para agendar viagens e gerenciar o transporte de passageiros. O sistema deve permitir o cadastro de rotas, horários e veículos.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir a criação de rotas com menos de dois pontos de parada.</li><li>Não permitir viagens com excesso de passageiros.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>RotaInvalidaException</code>.</li><li><code>ExcessoPassageirosException</code>.</li></ul><h3 id="sistema-de-monitoramento-de-equipamentos" tabindex="-1"><a class="header-anchor" href="#sistema-de-monitoramento-de-equipamentos"><span>Sistema de Monitoramento de Equipamentos</span></a></h3><p><strong>Descrição:</strong> Desenvolver uma aplicação que registre a manutenção de equipamentos em uma fábrica. O sistema deve permitir o agendamento de manutenção e a visualização do status de equipamentos.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir a operação de equipamentos sem manutenção dentro do prazo.</li><li>Notificar quando a manutenção estiver atrasada.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>ManutencaoAtrasadaException</code>.</li><li><code>EquipamentoNaoOperacionalException</code>.</li></ul><h3 id="sistema-de-gerenciamento-de-tarefas" tabindex="-1"><a class="header-anchor" href="#sistema-de-gerenciamento-de-tarefas"><span>Sistema de Gerenciamento de Tarefas</span></a></h3><p><strong>Descrição:</strong> Criar um sistema para gerenciar tarefas de um projeto. O sistema deve permitir o cadastro de tarefas, a definição de prazos e a atribuição de responsáveis.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir a criação de tarefas sem responsável.</li><li>Não permitir a definição de prazo menor que a data atual.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>ResponsavelNaoDefinidoException</code>.</li><li><code>PrazoInvalidoException</code>.</li></ul><h3 id="sistema-de-gerenciamento-de-clientes-para-uma-academia" tabindex="-1"><a class="header-anchor" href="#sistema-de-gerenciamento-de-clientes-para-uma-academia"><span>Sistema de Gerenciamento de Clientes para uma Academia</span></a></h3><p><strong>Descrição:</strong> Desenvolver uma aplicação que permita o gerenciamento de clientes de uma academia, incluindo o cadastro de planos de treino, pagamentos de mensalidades e acompanhamento de frequência.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir o cadastro de clientes com idade inferior a 16 anos.</li><li>Não permitir planos de treino sem a escolha de ao menos três exercícios.</li><li>Notificar o atraso no pagamento da mensalidade.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>IdadeInvalidaException</code>.</li><li><code>PlanoTreinoInvalidoException</code>.</li><li><code>MensalidadeAtrasadaException</code>.</li></ul><h3 id="sistema-de-controle-de-frota-de-veiculos" tabindex="-1"><a class="header-anchor" href="#sistema-de-controle-de-frota-de-veiculos"><span>Sistema de Controle de Frota de Veículos</span></a></h3><p><strong>Descrição:</strong> Criar um sistema para gerenciar a frota de veículos de uma empresa. O sistema deve permitir o cadastro de veículos, registro de manutenção e controle de viagens.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir o registro de viagens para veículos com manutenção atrasada.</li><li>Não permitir a inserção de veículos com quilometragem negativa.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>ManutencaoAtrasadaException</code>.</li><li><code>QuilometragemInvalidaException</code>.</li></ul><h3 id="sistema-de-controle-de-projetos-de-engenharia" tabindex="-1"><a class="header-anchor" href="#sistema-de-controle-de-projetos-de-engenharia"><span>Sistema de Controle de Projetos de Engenharia</span></a></h3><p><strong>Descrição:</strong> Desenvolver um sistema que gerencie os projetos de uma empresa de engenharia. O sistema deve permitir o cadastro de projetos, atribuição de equipes e controle de prazos.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir a criação de projetos sem equipe responsável.</li><li>Prazos não podem ser inferiores a 30 dias.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>EquipeNaoDefinidaException</code>.</li><li><code>PrazoInsuficienteException</code>.</li></ul><h3 id="sistema-de-agendamento-de-consultas-medicas" tabindex="-1"><a class="header-anchor" href="#sistema-de-agendamento-de-consultas-medicas"><span>Sistema de Agendamento de Consultas Médicas</span></a></h3><p><strong>Descrição:</strong> Criar um sistema para agendamento de consultas médicas em uma clínica. O sistema deve permitir o cadastro de médicos, pacientes e horários de consulta.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir a marcação de consultas em horários já ocupados.</li><li>Não permitir consultas sem um médico e paciente cadastrados.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>ConsultaConflitoHorarioException</code>.</li><li><code>ConsultaInvalidaException</code>.</li></ul><h3 id="sistema-de-controle-de-inventario-de-ferramentas" tabindex="-1"><a class="header-anchor" href="#sistema-de-controle-de-inventario-de-ferramentas"><span>Sistema de Controle de Inventário de Ferramentas</span></a></h3><p><strong>Descrição:</strong> Desenvolver uma aplicação para gerenciar o inventário de ferramentas de uma oficina. O sistema deve permitir o cadastro de ferramentas, controle de empréstimos e devoluções.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir o empréstimo de ferramentas sem quantidade disponível.</li><li>Não permitir a devolução de ferramentas que não tenham sido emprestadas.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>FerramentaIndisponivelException</code>.</li><li><code>FerramentaNaoEmprestadaException</code>.</li></ul><h3 id="sistema-de-controle-de-aluguel-de-imoveis" tabindex="-1"><a class="header-anchor" href="#sistema-de-controle-de-aluguel-de-imoveis"><span>Sistema de Controle de Aluguel de Imóveis</span></a></h3><p><strong>Descrição:</strong> Criar um sistema para gerenciar o aluguel de imóveis. O sistema deve permitir o cadastro de imóveis, contratos de aluguel e controle de pagamentos.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir a assinatura de contratos sem a verificação de crédito do inquilino.</li><li>Não permitir o aluguel de imóveis com contrato ativo.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>VerificacaoCreditoInvalidaException</code>.</li><li><code>ImovelIndisponivelException</code>.</li></ul><h3 id="sistema-de-cadastro-de-pacientes-para-exames-laboratoriais" tabindex="-1"><a class="header-anchor" href="#sistema-de-cadastro-de-pacientes-para-exames-laboratoriais"><span>Sistema de Cadastro de Pacientes para Exames Laboratoriais</span></a></h3><p><strong>Descrição:</strong> Desenvolver um sistema para cadastrar pacientes e exames em um laboratório. O sistema deve controlar os exames realizados e a emissão de laudos.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir a realização de exames sem o pagamento prévio.</li><li>Não permitir a emissão de laudos sem a realização do exame.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>PagamentoNaoEfetuadoException</code>.</li><li><code>ExameNaoRealizadoException</code>.</li></ul><h3 id="sistema-de-controle-de-producao-para-uma-fabrica" tabindex="-1"><a class="header-anchor" href="#sistema-de-controle-de-producao-para-uma-fabrica"><span>Sistema de Controle de Produção para uma Fábrica</span></a></h3><p><strong>Descrição:</strong> Criar um sistema que gerencie a produção de produtos em uma fábrica, permitindo o controle de matérias-primas, ordens de produção e inventário.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir a criação de ordens de produção sem matéria-prima suficiente.</li><li>Não permitir o cadastro de produtos com quantidade negativa.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>MateriaPrimaInsuficienteException</code>.</li><li><code>ProdutoInvalidoException</code>.</li></ul><h3 id="sistema-de-controle-de-despesas-domesticas" tabindex="-1"><a class="header-anchor" href="#sistema-de-controle-de-despesas-domesticas"><span>Sistema de Controle de Despesas Domésticas</span></a></h3><p><strong>Descrição:</strong> Desenvolver uma aplicação para controlar as despesas domésticas, incluindo o cadastro de contas a pagar e recebimentos mensais.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir o registro de despesas com valores negativos.</li><li>Não permitir pagamentos de contas após a data de vencimento.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>ValorInvalidoException</code>.</li><li><code>PagamentoAtrasadoException</code>.</li></ul><h3 id="sistema-de-gerenciamento-de-pacotes-de-viagem" tabindex="-1"><a class="header-anchor" href="#sistema-de-gerenciamento-de-pacotes-de-viagem"><span>Sistema de Gerenciamento de Pacotes de Viagem</span></a></h3><p><strong>Descrição:</strong> Criar um sistema para gerenciar pacotes de viagens oferecidos por uma agência. O sistema deve permitir o cadastro de pacotes, controle de reservas e emissão de vouchers.</p><p><strong>Regras de Negócio:</strong></p><ul><li>Não permitir a venda de pacotes sem vagas disponíveis.</li><li>Não permitir a emissão de vouchers sem o pagamento total.</li></ul><p><strong>Exceções:</strong></p><ul><li><code>PacoteIndisponivelException</code>.</li><li><code>PagamentoIncompletoException</code>.</li></ul>',141);function p(u,g){const e=o("RouteLink");return s(),r("div",null,[m,i("p",null,[t(e,{to:"/posts/exercicios/Trabalho/equipes.html"},{default:d(()=>[l("Equipes")]),_:1})])])}const x=a(c,[["render",p],["__file","16_Trabalho.html.vue"]]),f=JSON.parse('{"path":"/posts/16_Trabalho.html","title":"Estrutura Geral do Trabalho","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-09-24T20:40:00.000Z","category":["aula"],"order":16,"description":"Estrutura Geral do Trabalho A estrutura do trabalho é baseada na arquitetura em três camadas: Camada de Apresentação, Camada de Negócio e Camada de Dados. No entanto, nesta prop...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-poo.github.io/blog-material-aula/blog-material-aula/posts/16_Trabalho.html"}],["meta",{"property":"og:site_name","content":"20241 POO Blog das Aulas"}],["meta",{"property":"og:title","content":"Estrutura Geral do Trabalho"}],["meta",{"property":"og:description","content":"Estrutura Geral do Trabalho A estrutura do trabalho é baseada na arquitetura em três camadas: Camada de Apresentação, Camada de Negócio e Camada de Dados. No entanto, nesta prop..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-09-24T21:48:50.000Z"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["meta",{"property":"article:published_time","content":"2024-09-24T20:40:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-24T21:48:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Estrutura Geral do Trabalho\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-24T20:40:00.000Z\\",\\"dateModified\\":\\"2024-09-24T21:48:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Souza\\",\\"url\\":\\"https://github.com/leandro-costa\\"}]}"]]},"headers":[{"level":2,"title":"Camada de Apresentação (UI - JavaFX)","slug":"camada-de-apresentacao-ui-javafx","link":"#camada-de-apresentacao-ui-javafx","children":[{"level":3,"title":"Exemplo de Funcionalidade","slug":"exemplo-de-funcionalidade","link":"#exemplo-de-funcionalidade","children":[]},{"level":3,"title":"Tratamento de Exceções","slug":"tratamento-de-excecoes","link":"#tratamento-de-excecoes","children":[]}]},{"level":2,"title":"Camada de Negócio (Business Logic)","slug":"camada-de-negocio-business-logic","link":"#camada-de-negocio-business-logic","children":[{"level":3,"title":"Exemplo de Funcionalidade","slug":"exemplo-de-funcionalidade-1","link":"#exemplo-de-funcionalidade-1","children":[]},{"level":3,"title":"Tratamento de Exceções","slug":"tratamento-de-excecoes-1","link":"#tratamento-de-excecoes-1","children":[]}]},{"level":2,"title":"Camada de Dados (Data Access)","slug":"camada-de-dados-data-access","link":"#camada-de-dados-data-access","children":[{"level":3,"title":"Exemplo de Funcionalidade","slug":"exemplo-de-funcionalidade-2","link":"#exemplo-de-funcionalidade-2","children":[]}]},{"level":2,"title":"Fluxo de Comunicação Entre as Camadas","slug":"fluxo-de-comunicacao-entre-as-camadas","link":"#fluxo-de-comunicacao-entre-as-camadas","children":[{"level":3,"title":"Barema para Avaliação do Trabalho","slug":"barema-para-avaliacao-do-trabalho","link":"#barema-para-avaliacao-do-trabalho","children":[]}]},{"level":2,"title":"Propostas de projetos","slug":"propostas-de-projetos","link":"#propostas-de-projetos","children":[{"level":3,"title":"Sistema de Gerenciamento de Estoque","slug":"sistema-de-gerenciamento-de-estoque","link":"#sistema-de-gerenciamento-de-estoque","children":[]},{"level":3,"title":"Sistema de Cadastro de Alunos e Notas","slug":"sistema-de-cadastro-de-alunos-e-notas","link":"#sistema-de-cadastro-de-alunos-e-notas","children":[]},{"level":3,"title":"Sistema de Reservas de Salas","slug":"sistema-de-reservas-de-salas","link":"#sistema-de-reservas-de-salas","children":[]},{"level":3,"title":"Sistema de Gerenciamento de Cursos","slug":"sistema-de-gerenciamento-de-cursos","link":"#sistema-de-gerenciamento-de-cursos","children":[]},{"level":3,"title":"Sistema de Pedidos de Restaurante","slug":"sistema-de-pedidos-de-restaurante","link":"#sistema-de-pedidos-de-restaurante","children":[]},{"level":3,"title":"Sistema de Gerenciamento de Viagens","slug":"sistema-de-gerenciamento-de-viagens","link":"#sistema-de-gerenciamento-de-viagens","children":[]},{"level":3,"title":"Sistema de Monitoramento de Equipamentos","slug":"sistema-de-monitoramento-de-equipamentos","link":"#sistema-de-monitoramento-de-equipamentos","children":[]},{"level":3,"title":"Sistema de Gerenciamento de Tarefas","slug":"sistema-de-gerenciamento-de-tarefas","link":"#sistema-de-gerenciamento-de-tarefas","children":[]},{"level":3,"title":"Sistema de Gerenciamento de Clientes para uma Academia","slug":"sistema-de-gerenciamento-de-clientes-para-uma-academia","link":"#sistema-de-gerenciamento-de-clientes-para-uma-academia","children":[]},{"level":3,"title":"Sistema de Controle de Frota de Veículos","slug":"sistema-de-controle-de-frota-de-veiculos","link":"#sistema-de-controle-de-frota-de-veiculos","children":[]},{"level":3,"title":"Sistema de Controle de Projetos de Engenharia","slug":"sistema-de-controle-de-projetos-de-engenharia","link":"#sistema-de-controle-de-projetos-de-engenharia","children":[]},{"level":3,"title":"Sistema de Agendamento de Consultas Médicas","slug":"sistema-de-agendamento-de-consultas-medicas","link":"#sistema-de-agendamento-de-consultas-medicas","children":[]},{"level":3,"title":"Sistema de Controle de Inventário de Ferramentas","slug":"sistema-de-controle-de-inventario-de-ferramentas","link":"#sistema-de-controle-de-inventario-de-ferramentas","children":[]},{"level":3,"title":"Sistema de Controle de Aluguel de Imóveis","slug":"sistema-de-controle-de-aluguel-de-imoveis","link":"#sistema-de-controle-de-aluguel-de-imoveis","children":[]},{"level":3,"title":"Sistema de Cadastro de Pacientes para Exames Laboratoriais","slug":"sistema-de-cadastro-de-pacientes-para-exames-laboratoriais","link":"#sistema-de-cadastro-de-pacientes-para-exames-laboratoriais","children":[]},{"level":3,"title":"Sistema de Controle de Produção para uma Fábrica","slug":"sistema-de-controle-de-producao-para-uma-fabrica","link":"#sistema-de-controle-de-producao-para-uma-fabrica","children":[]},{"level":3,"title":"Sistema de Controle de Despesas Domésticas","slug":"sistema-de-controle-de-despesas-domesticas","link":"#sistema-de-controle-de-despesas-domesticas","children":[]},{"level":3,"title":"Sistema de Gerenciamento de Pacotes de Viagem","slug":"sistema-de-gerenciamento-de-pacotes-de-viagem","link":"#sistema-de-gerenciamento-de-pacotes-de-viagem","children":[]}]}],"git":{"createdTime":1727208435000,"updatedTime":1727214530000,"contributors":[{"name":"Leandro Costa","email":"leandro.costa@ifba.edu.br","commits":1},{"name":"leandro-costa","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":6.53,"words":1958},"filePathRelative":"posts/16_Trabalho.md","localizedDate":"24 de setembro de 2024","autoDesc":true}');export{x as comp,f as data};