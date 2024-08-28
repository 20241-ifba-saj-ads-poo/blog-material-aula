---
icon: study
date: 2024-08-28 19:10:00.00 -3
tag:
  - heranca
  - abstratas
  - interface
category:
  - exercicio
---

# Exercício Sistema Biblioteca

Desensolva um  sistema de gerenciamento de biblioteca. A biblioteca possui diversos tipos de `Item` no seu acervo e alguns estão disponíveis para empréstimo, como `Livro`, `Revista` e `DVD`. Ja `Quadro` não esta disponível para empréstimo. Todos os itens possuem informações básicas como título, autor/diretor e ano de publicação/lançamento. No entanto, cada tipo de item também possui características específicas:

- Livros: Possuem ISBN e número de páginas.
- Revistas: Possuem edição e data de publicação.
- DVDs: Possuem gênero e duração.
- Quadro: Estilo

O sistema deve permitir cadastrar diferentes tipos de itens, realizar empréstimos e devoluções, além de calcular a multa por atraso na devolução. A multa é calculada da seguinte forma:

- Livros: R$ 0,50 por dia de atraso.
- Revistas: R$ 0,25 por dia de atraso.
- DVDs: R$ 1,00 por dia de atraso.

Utilizando os conceitos de classe abstrata e interface em Java, modele o sistema da biblioteca descrito acima.

Classe Abstrata: Crie uma classe abstrata chamada Item para representar o item genérico da biblioteca. Essa classe deve conter os atributos e métodos comuns a todos os tipos de itens. O método para calcular a multa deve ser abstrato, pois a implementação varia de acordo com o tipo de item.

Interfaces: Crie uma interface para representar os métodos relacionados com a possibilite do item ser emprestado e devolvido. Essa interface Emprestavel deve conter os métodos para empréstimo, devolução e calculo de multa por dia de atraso.

Classes Concretas: Crie classes concretas para cada tipo de item (Livro, Revista, DVD, Quadro) que herdem da classe abstrata Item e implementem a interface Emprestavel. Implemente o método calcularMulta(int diasAtraso) em cada classe concreta de acordo com a regra específica de cada tipo de item. Implemente um método toString() na classe Item que exiba as informações básicas do item. Sobrescreva esse método nas classes concretas para exibir também as informações específicas de cada tipo de item.

Classe Principal: Crie uma classe principal para testar o sistema, instanciando objetos de diferentes tipos de itens, realizando empréstimos e devoluções e calculando as multas por atraso.

Classe Biblioteca: Crie uma classe Biblioteca para gerenciar a lista de itens disponíveis e emprestados.
