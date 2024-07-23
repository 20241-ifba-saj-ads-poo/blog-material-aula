---
icon: study
date: 2024-07-17 20:03:00.00 -3
tag:
  - java
category:
  - exercicio
prev: 06_exercicio_modelagem_dvd
---

# Exercícios Listas

1. **Biblioteca Digital:**
   Crie um sistema de biblioteca digital com livros, autores e categorias. Os livros pertencem a autores, e cada livro pode ser classificado em uma ou mais categorias. Os usuários podem fazer pesquisas por autor ou categoria e visualizar os livros disponíveis.

1. **Gerenciamento de Escola:**
   Desenvolva um programa para gerenciar informações de uma escola. Cada escola contém várias turmas, cada turma tem vários alunos e professores. Os alunos podem pertencer a mais de uma turma. Os professores ministram aulas em uma ou mais turmas. Os dados devem ser organizados para permitir consultas sobre quais turmas um professor leciona e quais alunos estão matriculados em uma turma específica.
   
   Entrega
   
   ::: details 

   ```plantuml
   @startuml
   class Aluno {
   - String nome
   - List<Turma> turmas
   }

   class Professor {
   - String nome
   - List<Turma> turmas
   }

   class Turma {
   - String nome
   - List<Professor> professores
   - List<Aluno> alunos
   }
   Turma .. Aluno
   Turma .. Professor
   @enduml

   ```
   ::: 
 <!-- 
   @[code](../code/exercicioListas/turmas/Escola.java)

   @[code](../code/exercicioListas/turmas/Turma.java)

   @[code](../code/exercicioListas/turmas/Aluno.java)

   @[code](../code/exercicioListas/turmas/Professor.java)

-->

1. **Sistema de Loja de Roupas:**
   Crie um sistema para gerenciar uma loja de roupas. A loja tem vários departamentos, como roupas masculinas, femininas e infantis. Cada departamento contém vários produtos (roupas) com informações como preço, tamanho e cor. Os clientes podem adicionar produtos ao carrinho de compras e finalizar suas compras. Implemente funcionalidades para calcular o total das compras e listar os produtos em um carrinho.

1. **Hierarquia Militar Simplificada:**
   Modele uma simplificação da hierarquia do Exército Brasileiro. Existem diferentes patentes militares, como Soldado, Cabo, Sargento, Tenente e Capitão. Cada patente tem atributos como nome, número de identificação e tempo de serviço. Os soldados reportam aos cabos, os cabos aos sargentos e assim por diante. Implemente métodos para listar os subordinados de um militar em uma patente superior e seu superior imediato.
   1. Fazer remoção de subordinado na troca do imediato.
<!--
   ::: details 
   @[code](../code/exercicioListas/militar/MontarPelotao.java)

   @[code](../code/exercicioListas/militar/Soldado.java)

   @[code](../code/exercicioListas/militar/Cabo.java)
   ::: 
 -->
1. **Sistema de Reservas de Hotéis:**
   Desenvolva um sistema de reservas de hotéis. Cada hotel possui vários quartos, e cada quarto tem diferentes categorias, como luxo, padrão, suíte, etc. Os clientes podem fazer reservas para datas específicas e escolher um tipo de quarto. O sistema deve rastrear a disponibilidade de quartos e calcular o preço total da reserva com base na categoria do quarto e no número de noites.

1. **Gestão de Projetos de Desenvolvimento de Software:**
   Crie um sistema para gerenciar projetos de desenvolvimento de software. Os projetos contêm várias tarefas, cada uma com um status (em andamento, concluída, atrasada, etc.) e responsável. Os funcionários da equipe de desenvolvimento podem ser atribuídos a várias tarefas. Implemente funcionalidades para visualizar o progresso do projeto, listar as tarefas de um funcionário e atribuir tarefas a membros da equipe.

1. **Sistema de Vendas Online:**
   Modele um sistema de vendas online. Existem diferentes produtos à venda, cada um com informações como nome, preço e estoque disponível. Os clientes podem adicionar produtos ao carrinho de compras e efetuar compras. O sistema deve rastrear o estoque de produtos, calcular o total da compra e permitir a geração de faturas para os clientes.

1. **Gestão de uma Clínica Médica:**
   Desenvolva um sistema para gerenciar uma clínica médica. A clínica tem vários médicos, cada um com informações pessoais e especialidades médicas. Os pacientes podem marcar consultas com médicos para datas específicas. Os médicos mantêm um registro de consultas passadas e futuras com os pacientes. Implemente funcionalidades para visualizar as consultas de um paciente, a disponibilidade de um médico e os detalhes de uma consulta agendada.

1. **Gestão de Eventos e Convidados:**
   Crie um sistema para gerenciar eventos, como casamentos, conferências ou festas. Cada evento tem uma lista de convidados, e cada convidado possui informações pessoais, como nome, endereço e número de telefone. Os eventos podem ser agendados para datas específicas e podem incluir diferentes atividades. Implemente funcionalidades para adicionar convidados a eventos, verificar a disponibilidade de datas e listar os convidados de um evento.

1. **Sistema de Mídia Social Simplificado:**
    Modele um sistema simplificado de mídia social. Os usuários podem criar perfis, publicar mensagens e adicionar amigos. Cada mensagem pode conter texto e imagens. Os usuários podem comentar nas mensagens de seus amigos. Implemente funcionalidades para listar as mensagens de um usuário, exibir os comentários em uma mensagem e mostrar os amigos de um usuário.

1. **Gestão de Estoque de uma Mercearia:**
    Desenvolva um sistema para gerenciar o estoque de uma mercearia. A mercearia possui diferentes produtos, como alimentos, bebidas e produtos de higiene. Cada produto tem informações como nome, preço, quantidade disponível em estoque e data de validade. Os clientes podem adicionar produtos ao carrinho de compras e efetuar compras. O sistema deve atualizar o estoque de produtos após cada compra.

1. **Biblioteca de Música Digital:**
    Crie um sistema para gerenciar uma biblioteca de música digital. Os usuários podem criar listas de reprodução, cada uma contendo várias músicas. Cada música tem informações, como título, artista e duração. Os usuários podem adicionar e remover músicas de suas listas de reprodução e reproduzir as músicas em suas listas. Implemente funcionalidades para listar as músicas em uma lista de reprodução, calcular a duração total da lista de reprodução e reproduzir músicas.

