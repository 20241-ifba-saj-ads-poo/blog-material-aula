---
icon: edit
date: 2024-09-24 17:40:00.00 -3
tag:
category:
  - aula
order: 16
---

# Estrutura Geral do Trabalho

A estrutura do trabalho é baseada na arquitetura em três camadas: **Camada de Apresentação**, **Camada de Negócio** e **Camada de Dados**. No entanto, nesta proposta, os dados não serão persistidos em um banco de dados, mas sim em estruturas de dados temporárias, como listas ou mapas, mantidas na memória durante a execução do programa.

## Camada de Apresentação (UI - JavaFX)

Responsável por toda a interação com o usuário. Esta camada deve exibir a interface gráfica, coletar dados dos formulários e apresentar os resultados ou mensagens de erro de maneira clara e amigável. É onde o JavaFX será utilizado para criar as janelas, botões, formulários e outros componentes gráficos.

### Exemplo de Funcionalidade

Um formulário para cadastrar produtos em um sistema de estoque ou uma tela que exibe o status das tarefas em um gerenciador de tarefas.

### Tratamento de Exceções

Exceções lançadas na camada de negócio devem ser capturadas nesta camada e exibidas ao usuário por meio de alertas, caixas de diálogo ou mensagens na interface gráfica.

## Camada de Negócio (Business Logic)

Contém a lógica do sistema e as regras de negócio. Nesta camada, são verificadas as condições impostas pelo domínio da aplicação (por exemplo, limites de estoque, validação de dados, etc.). Essa camada também é responsável por lançar exceções específicas quando as regras de negócio são violadas.

### Exemplo de Funcionalidade

Em um sistema de gerenciamento de estoque, esta camada seria responsável por verificar se a quantidade de produtos é suficiente antes de permitir uma venda ou gerar exceções caso um valor inválido seja informado.

### Tratamento de Exceções

Esta camada deve lançar exceções específicas que serão tratadas na camada de apresentação.

## Camada de Dados (Data Access)

Gerencia os dados da aplicação. Embora não haja persistência em um banco de dados, os dados serão armazenados temporariamente em estruturas de dados em memória (como `ArrayList`, `HashMap`, etc.). Esta camada simula o comportamento de uma camada de persistência, mas sem a necessidade de conexão com um banco de dados.

### Exemplo de Funcionalidade

Gerenciar a lista de produtos cadastrados, recuperar os dados de um produto ou remover um produto da lista. Todas as operações de CRUD (Create, Read, Update, Delete) serão realizadas diretamente sobre essas estruturas temporárias.

## Fluxo de Comunicação Entre as Camadas

1. O usuário interage com a **Camada de Apresentação** (JavaFX), por exemplo, preenchendo um formulário de cadastro de um produto.
2. A **Camada de Apresentação** envia os dados para a **Camada de Negócio**.
3. A **Camada de Negócio** aplica as regras e validações. Caso uma regra de negócio seja violada, uma exceção é lançada.
4. Se a validação for bem-sucedida, a **Camada de Negócio** interage com a **Camada de Dados** para armazenar, recuperar ou modificar os dados.
5. Qualquer erro ou exceção gerada na **Camada de Negócio** é capturada pela **Camada de Apresentação** e exibida de maneira amigável para o usuário.

### Barema para Avaliação do Trabalho

O barema a seguir será utilizado para avaliar a implementação do projeto. Cada critério possui um peso específico, totalizando 100 pontos.

#### 1. **Interface Gráfica (JavaFX) - 20 pontos**
   - **Completude e Funcionalidade da Interface (10 pontos)**: A interface permite que o usuário realize todas as ações propostas no trabalho (ex: cadastrar, remover, atualizar dados).
   - **Usabilidade e Apresentação (5 pontos)**: A interface é amigável, clara e intuitiva, com uma boa organização dos componentes gráficos.
   - **Exibição de Mensagens de Erro (5 pontos)**: As mensagens de erro e exceções são exibidas de forma clara, amigável e ajudam o usuário a corrigir os erros.

#### 2. **Camada de Negócio (Regras de Negócio) - 30 pontos**
   - **Implementação das Regras de Negócio (20 pontos)**: Todas as regras de negócio especificadas no projeto foram implementadas corretamente e respeitam as condições do domínio (ex: limites de estoque, validação de campos).
   - **Tratamento e Lançamento de Exceções (10 pontos)**: As exceções são corretamente lançadas pela camada de negócio quando há uma violação das regras. As exceções devem ser personalizadas (ex: `ProdutoInvalidoException`, `EstoqueInsuficienteException`).

#### 3. **Camada de Dados (Estruturas de Dados em Memória) - 20 pontos**
   - **Implementação das Estruturas de Dados (10 pontos)**: Os dados são corretamente gerenciados utilizando as estruturas de dados apropriadas (ex: `ArrayList`, `HashMap`). As operações de inserção, remoção, leitura e atualização funcionam adequadamente.
   - **Organização e Simulação de Persistência (10 pontos)**: A camada de dados é bem estruturada e simula a persistência de forma organizada, separando claramente a lógica de acesso a dados das regras de negócio.

#### 4. **Separação em Camadas - 20 pontos**
   - **Segregação Correta das Funções (10 pontos)**: A separação entre as camadas de apresentação, negócio e dados está clara, com cada uma desempenhando corretamente suas responsabilidades.
   - **Comunicação Entre as Camadas (10 pontos)**: A comunicação entre as camadas é feita de maneira fluida e correta, utilizando métodos e estruturas apropriadas para transferir dados entre as camadas.

#### 5. **Documentação e Boas Práticas - 10 pontos**
   - **Boas Práticas de Programação (10 pontos)**: O código segue boas práticas, incluindo nomeação adequada de variáveis, métodos e classes, além de evitar duplicação de código e garantir uma organização clara do projeto.
































## Propostas de projetos

### Sistema de Gerenciamento de Estoque

**Descrição:**
Desenvolver um sistema para gerenciar o estoque de uma loja. A interface permitirá adicionar, remover e atualizar produtos, além de gerar relatórios do inventário.

**Regras de Negócio:**
- Não permitir a entrada de produtos com quantidade ou preço negativo.
- Não permitir a venda de um produto sem estoque.
- Notificar quando o estoque estiver abaixo de um nível mínimo.

**Exceções:**
- `ProdutoInvalidoException` (para quantidades e preços negativos).
- `EstoqueInsuficienteException` (para vendas com estoque insuficiente).



### Sistema de Cadastro de Alunos e Notas

**Descrição:**
Desenvolver um sistema que permita o cadastro de alunos e notas. O sistema deve calcular a média e indicar a aprovação ou reprovação.

**Regras de Negócio:**
- Não permitir notas fora do intervalo de 0 a 10.
- Aprovação apenas com média maior ou igual a 7.

**Exceções:**
- `NotaInvalidaException` (para notas fora do intervalo permitido).
- `AlunoNaoCadastradoException` (tentativa de acessar aluno não cadastrado).

### Sistema de Reservas de Salas

**Descrição:**
Desenvolver uma aplicação para reservar salas de reuniões. O sistema deve permitir o agendamento e a visualização de horários disponíveis.

**Regras de Negócio:**
- Não permitir reserva de uma sala já ocupada no horário desejado.
- Não permitir reserva sem informar o número de participantes.

**Exceções:**
- `SalaOcupadaException`.
- `NumeroParticipantesInvalidoException`.

### Sistema de Gerenciamento de Cursos

**Descrição:**
Criar um sistema para gerenciar cursos e inscrições de alunos. O sistema deve permitir a criação de turmas e a inscrição de alunos nas turmas.

**Regras de Negócio:**
- Não permitir a inscrição de mais alunos do que o limite de vagas da turma.
- Não permitir a criação de turmas com menos de 5 alunos inscritos.

**Exceções:**
- `VagasInsuficientesException`.
- `TurmaInvalidaException`.

### Sistema de Pedidos de Restaurante

**Descrição:**
Desenvolver um sistema para registrar pedidos em um restaurante. O sistema deve permitir o cadastro de pratos, a criação de pedidos e o cálculo do valor total.

**Regras de Negócio:**
- Não permitir pedidos sem itens.
- Não permitir pedidos de itens fora do cardápio.

**Exceções:**
- `PedidoVazioException`.
- `ItemNaoEncontradoException`.

### Sistema de Gerenciamento de Viagens

**Descrição:**
Criar um sistema para agendar viagens e gerenciar o transporte de passageiros. O sistema deve permitir o cadastro de rotas, horários e veículos.

**Regras de Negócio:**
- Não permitir a criação de rotas com menos de dois pontos de parada.
- Não permitir viagens com excesso de passageiros.

**Exceções:**
- `RotaInvalidaException`.
- `ExcessoPassageirosException`.

### Sistema de Monitoramento de Equipamentos

**Descrição:**
Desenvolver uma aplicação que registre a manutenção de equipamentos em uma fábrica. O sistema deve permitir o agendamento de manutenção e a visualização do status de equipamentos.

**Regras de Negócio:**
- Não permitir a operação de equipamentos sem manutenção dentro do prazo.
- Notificar quando a manutenção estiver atrasada.

**Exceções:**
- `ManutencaoAtrasadaException`.
- `EquipamentoNaoOperacionalException`.

### Sistema de Gerenciamento de Tarefas

**Descrição:**
Criar um sistema para gerenciar tarefas de um projeto. O sistema deve permitir o cadastro de tarefas, a definição de prazos e a atribuição de responsáveis.

**Regras de Negócio:**
- Não permitir a criação de tarefas sem responsável.
- Não permitir a definição de prazo menor que a data atual.

**Exceções:**
- `ResponsavelNaoDefinidoException`.
- `PrazoInvalidoException`.


### Sistema de Gerenciamento de Clientes para uma Academia

**Descrição:**
Desenvolver uma aplicação que permita o gerenciamento de clientes de uma academia, incluindo o cadastro de planos de treino, pagamentos de mensalidades e acompanhamento de frequência.

**Regras de Negócio:**
- Não permitir o cadastro de clientes com idade inferior a 16 anos.
- Não permitir planos de treino sem a escolha de ao menos três exercícios.
- Notificar o atraso no pagamento da mensalidade.

**Exceções:**
- `IdadeInvalidaException`.
- `PlanoTreinoInvalidoException`.
- `MensalidadeAtrasadaException`.


### Sistema de Controle de Frota de Veículos

**Descrição:**
Criar um sistema para gerenciar a frota de veículos de uma empresa. O sistema deve permitir o cadastro de veículos, registro de manutenção e controle de viagens.

**Regras de Negócio:**
- Não permitir o registro de viagens para veículos com manutenção atrasada.
- Não permitir a inserção de veículos com quilometragem negativa.

**Exceções:**
- `ManutencaoAtrasadaException`.
- `QuilometragemInvalidaException`.

### Sistema de Controle de Projetos de Engenharia

**Descrição:**
Desenvolver um sistema que gerencie os projetos de uma empresa de engenharia. O sistema deve permitir o cadastro de projetos, atribuição de equipes e controle de prazos.

**Regras de Negócio:**
- Não permitir a criação de projetos sem equipe responsável.
- Prazos não podem ser inferiores a 30 dias.

**Exceções:**
- `EquipeNaoDefinidaException`.
- `PrazoInsuficienteException`.


### Sistema de Agendamento de Consultas Médicas

**Descrição:**
Criar um sistema para agendamento de consultas médicas em uma clínica. O sistema deve permitir o cadastro de médicos, pacientes e horários de consulta.

**Regras de Negócio:**
- Não permitir a marcação de consultas em horários já ocupados.
- Não permitir consultas sem um médico e paciente cadastrados.

**Exceções:**
- `ConsultaConflitoHorarioException`.
- `ConsultaInvalidaException`.

### Sistema de Controle de Inventário de Ferramentas

**Descrição:**
Desenvolver uma aplicação para gerenciar o inventário de ferramentas de uma oficina. O sistema deve permitir o cadastro de ferramentas, controle de empréstimos e devoluções.

**Regras de Negócio:**
- Não permitir o empréstimo de ferramentas sem quantidade disponível.
- Não permitir a devolução de ferramentas que não tenham sido emprestadas.

**Exceções:**
- `FerramentaIndisponivelException`.
- `FerramentaNaoEmprestadaException`.

### Sistema de Controle de Aluguel de Imóveis

**Descrição:**
Criar um sistema para gerenciar o aluguel de imóveis. O sistema deve permitir o cadastro de imóveis, contratos de aluguel e controle de pagamentos.

**Regras de Negócio:**
- Não permitir a assinatura de contratos sem a verificação de crédito do inquilino.
- Não permitir o aluguel de imóveis com contrato ativo.

**Exceções:**
- `VerificacaoCreditoInvalidaException`.
- `ImovelIndisponivelException`.


### Sistema de Cadastro de Pacientes para Exames Laboratoriais

**Descrição:**
Desenvolver um sistema para cadastrar pacientes e exames em um laboratório. O sistema deve controlar os exames realizados e a emissão de laudos.

**Regras de Negócio:**
- Não permitir a realização de exames sem o pagamento prévio.
- Não permitir a emissão de laudos sem a realização do exame.

**Exceções:**
- `PagamentoNaoEfetuadoException`.
- `ExameNaoRealizadoException`.


### Sistema de Controle de Produção para uma Fábrica

**Descrição:**
Criar um sistema que gerencie a produção de produtos em uma fábrica, permitindo o controle de matérias-primas, ordens de produção e inventário.

**Regras de Negócio:**
- Não permitir a criação de ordens de produção sem matéria-prima suficiente.
- Não permitir o cadastro de produtos com quantidade negativa.

**Exceções:**
- `MateriaPrimaInsuficienteException`.
- `ProdutoInvalidoException`.

### Sistema de Controle de Despesas Domésticas

**Descrição:**
Desenvolver uma aplicação para controlar as despesas domésticas, incluindo o cadastro de contas a pagar e recebimentos mensais.

**Regras de Negócio:**
- Não permitir o registro de despesas com valores negativos.
- Não permitir pagamentos de contas após a data de vencimento.

**Exceções:**
- `ValorInvalidoException`.
- `PagamentoAtrasadoException`.

### Sistema de Gerenciamento de Pacotes de Viagem

**Descrição:**
Criar um sistema para gerenciar pacotes de viagens oferecidos por uma agência. O sistema deve permitir o cadastro de pacotes, controle de reservas e emissão de vouchers.

**Regras de Negócio:**
- Não permitir a venda de pacotes sem vagas disponíveis.
- Não permitir a emissão de vouchers sem o pagamento total.

**Exceções:**
- `PacoteIndisponivelException`.
- `PagamentoIncompletoException`.

