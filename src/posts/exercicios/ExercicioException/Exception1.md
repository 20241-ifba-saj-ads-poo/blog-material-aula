---
icon: study
date: 2024-09-1 19:00:00.00 -3
tag:
  - exception
category:
  - exercicio
  - entrega
---

# Exercícios sobre Exception (IllegalArgumentException, SaldoInsufucienteException)

Considerando o exercicio [Modelagem Sistema Banco](../ExercicioHeranca/Heranca4%20Banco.md)

1. Na classe `Conta`, modifique o método deposita(double x). Ele deve lançar uma exception chamada
`IllegalArgumentException`, que já faz parte da biblioteca do Java, sempre que o valor passado como
argumento for inválido (por exemplo, quando for negativo).
    1. Adicione o try/catch para tratar o erro
    1. Ao lançar a `IllegalArgumentException`, passe via construtor uma mensagem a ser exibida. Lembre que a String recebida como parâmetro é acessível depois via o método getMessage() herdado por todas as Exceptions
1. Modificar o sistema de controle de contas correntes para lançar uma exceção de `SaldoInsufucienteException` caso o valor de saque seja maior que o saldo disponível

## Entrega
[link](https://classroom.github.com/a/uMpUJMLP)
