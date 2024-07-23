---
icon: edit
date: 2024-07-10 17:40:00.00 -3
tag:
  - pacote
  - encapsulamento
  - construtor
category:
  - aula
order: 5
---

# Encapsulamento

- Separar o programa em partes, tornando cada parte mais isolada possível uma da outra
- A ideia é tornar o software mais flexível, fácil de modificar e de criar novas implementações
- Permite utilizar o objeto de uma classe sem necessariamente conhecer sua implementação
- Protege o acesso direto aos atributos de uma instância fora da classe onde estes foram criados
- Uma grande vantagem do encapsulamento é que toda parte encapsulada pode ser modificada sem que os usuários da classe em questão sejam afetados

## Pacotes
- Forma de organizar classes dentro de uma estrutura de árvores. 
- Podemos entender a estrutura de árvores como os diretórios do sistema operacional. 
- O nome completo de uma classe é definido pelo seu pacote e o nome. 
- Organiza suas classes e bibliotecas
    - Os diretórios estão diretamente relacionados aos chamados pacotes e costumam agrupar classes de funcionalidade parecida
- No pacote java.util por exemplo, temos as classes Date, SimpleDateFormat e GregorianCalendar; todas elas trabalham com datas de formas diferentes
    - Significa que essas classes estão no diretório java/util/

<figure>

```plantuml
@startuml
@startsalt
{
    {T
        + java
        ++ util
        +++ Date
    }
}
@endsalt
@enduml
```

<figcaption>Representação da estrutura de diretório.</figcaption>
</figure>

- A palavra chave *package* indica qual pacote que contém a classe

```java
package java.util;
```

- Para usar uma classe ou um pacote você precisa usar a import palavra-chave:

```java
import pacote.Class;   // Importa uma única classe
import pacotenovo.*;   // Importa todas as classes do pacote
```
<figure>
<div class="multicolumn">

```plantuml
@startuml
package java  {
    package util  {    
    }
}
@enduml
```
```plantuml
@startuml
package java.util  {        
}
@enduml
```

</div>
<figcaption>Visualizações diferentes de subpacotes</figcaption>
</figure>

- O nome da classe na verdade para o compilador é
    - java.util.Date
    - java.util.SimpleDateFormat
    - java.util.GregorianCalendar
    - java.io.File

<figure>

```plantuml
@startuml
package java  {
    package util  {    
    }
    package io  {
    }
}
class java.util.Date
class java.util.SimpleDateFormat
class java.util.GregorianCalendar
class java.io.File
@enduml
```

<figcaption>Representação de classes em seus pacotes.</figcaption>
</figure>

### Importar uma classe

Se você encontrar uma classe que deseja usar, por exemplo, a classe *Scanner*, que é usada para obter a entrada do usuário, escreva o seguinte código:

```java
import java.util.Scanner;
```
No exemplo acima, *java.util* é um pacote, enquanto *Scanner* é uma classe do pacote *java.util*.

Para usar a classe *Scanner*, crie um objeto da classe e use qualquer um dos métodos disponíveis encontrados na documentação da classe *Scanner*. Em nosso exemplo, usaremos o método *nextLine()*, que é usado para ler uma linha completa:

```java
import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Informe o nome");
    String nome = scanner.nextLine();
    System.out.println("nome é : " + nome);
  }
}
```
### Usar uma classe sem import

Para utilizar uma classe sem a palavra reservada `import` você pode referenciar a classe pelo nome completo (pacote.nomeClasse). Exemplo:

```java{3}
class Main {
  public static void main(String[] args) {
    java.util.Scanner scanner = new java.util.Scanner(System.in);
    System.out.println("Informe o nome");
    String nome = scanner.nextLine();
    System.out.println("nome é : " + nome);
  }
}
```


## Modificadores de acesso
- private
- protected
- public
- <padrão> (package, quando não é especificado nenhum dos 3 acima)

<figure>

```plantuml

@startuml
class A {
-int atributoA
#int atributoB
~int atributoC
+int atributoD
-int metodoA()
#int metodoB()
~int metodoC()
+int metodoD()
}

note left of A::atributoA
  private
end note
note left of A::atributoB
  protected
end note
note left of A::atributoC
  package
end note
note left of A::atributoD
  public
end note
note right of A::metodoA
  private
end note
note right of A::metodoB
  protected
end note
note right of A::metodoC
  package
end note
note right of A::metodoD
  public
end note
@enduml
```

<figcaption>Modificadores de acesso.</figcaption>
</figure>

- São aplicados a atributos, métodos, construtores e classes
- As classes só podem ser declaradas como public ou padrão
    - Uma classe com acesso padrão só pode ser detectada por classes do mesmo pacote
    - Uma classe com acesso público pode ser detectada por classes de todos os pacotes

- Private
    - Os membros privados só podem ser acessados por um código da mesma classe 
- Protected
    - Os membros protegidos podem ser acessados por outras classes do mesmo pacote, além de subclasses independente do pacote 
- Public
    - Os membros públicos podem ser acessados por todas as outras classes, mesmo de pacotes diferentes
- Padrão
    - Os membros padrão só podem ser acessados por outras classes do mesmo pacote

### Métodos de acesso (get e set)

Como os atributos/métodos privados ​​só podem ser acessadas dentro da mesma classe (uma classe externa não tem acesso a ela) é possível acessá-los se fornecermos métodos públicos *get* e *set*.

O *get* retorna o valor da variável e o *set* define o valor.

A sintaxe para ambos é que eles começam com *get* ou *set* seguido pelo nome do atributo com a primeira letra em maiúscula:

```java
public class Pessoa {
  private String nome; // private = acesso restrito
  // Get
  public String getNome() {
    return nome;
  }
  // Set
  public void setNome(String novoNome) {
    if(novoNome!= null && !novoNome.isEmpty() && !novoNome.isBlank()){
      this.nome = novoNome;
    }
  }
}
```
O método *get* retorna o valor da variável name.

O método *set* pega um parâmetro ( novoNome) e o atribui ao atributo *nome*. 

A palavra-chave `this` é usada para se referir ao objeto atual.

No entanto, como o atributo `name` é declarada como `private`, não podemos acessá-la de fora desta classe:

```java
public class Main {
  public static void main(String[] args) {
    Pessoa pessoa = new Pessoa();
    pessoa.nome = "João";  // error
    System.out.println(pessoa.nome); // error 
  }
}
```

Se o atributo foi declarada como *public,* esperaríamos a seguinte saída:
```shell
    João
```

No entanto, ao tentar acessar um atributo *private,* obtemos um erro:

```shell
    Main.java:4: error: nome has private access in Pessoa
        pessoa.nome = "João";
              ^
    Main.java:5: error: nome has private access in Pessoa
        System.out.println(pessoa.nome);
                                 ^
    2 errors
```
    
Em vez disso, usamos os métodos getNome()e setNome()para acessar e atualizar a variável:

Exemplo
```java
public class Main {
  public static void main(String[] args) {
    Pessoa pessoa = new Pessoa();
    pessoa.setNome("João"); // Seta o valor do atributo nome para "João"
    System.out.println(pessoa.getNome());
  }
}
```
saida 

```shell
    "João"
```
## Construtor

- Método especial definido na classe e executado no momento que o objeto é instanciado
- Diferente de outro método pois não possui retorno
- Deve ter o mesmo nome da classe.
- Pode receber parâmetros
  - Normalmente utilizados para inicializar os valores dos atributos do objeto

```java{7-9}
class Conta{
  int numero;
  String cliente;
  double saldo;
  double limite;

  Conta(){

  }

  void saca(double quantidade){
    double novoSaldo = this.saldo - quantidade;
    this.saldo = novoSaldo;
  }

  void deposita(double quantidade){
    this.saldo += quantidade;
  }
}
```

### O que o new faz?

- A classe chamada é instanciada
- Memória é alocada
- Os passos definidos dentro do método construtor da classe são executados
  - Construtor é um método especial para criar e inicializar novas instâncias da classe. 
  - Construtores podem ser sobrecarregados


```java
class Conta{
  //...
  Conta(){
    this.limite = 100;
  }
  //...
}
```


### Sobrecarga 

- É a capacidade de definir métodos com o mesmo nome
  - Assinatura seja diferente. 
  - A mudança na assinatura ocorre alterando a quantidade e/ou tipo de parâmetros que um método recebe


- Sobrecarga é a capacidade de um objeto responder à mesma mensagem, com comportamentos (métodos) distintos, a depender dos tipos dos parâmetros recebidos
  - aplicarInjecao()
  - aplicarInjecao(String nomeRemedio)


```java
//...
public int somar(int v1, int v2){ 
    return v1 + v2; 
} 

public int operar(int v1, int v2){ 
    return operar('+', v1, v2); 
} 

public int operar(char op, int v1, int v2){ 
  switch(op){ 
    case '+': 
      return somar(v1, v2); 
      break; 
    case '-': 
      return subtrair(v1, v2); 
  } 
}
//...
```


```java
class Conta{
  //...
  Conta(int numero, String cliente){
    this.numero = numero;
    this.cliente = cliente;
    this.saldo = 0;
    this.limite = 0;
  }
  Conta(int numero, String cliente, double saldo, double limite){
    this(numero, cliente);
    this.saldo = saldo;
    this.limite = limite;
  }

  //...
}
```

```java
class Programa{
  public static void main(String[] args){
    Conta minhaConta1;
    minhaConta1 = new Conta(1, "Leandro1");
    minhaConta1.saldo = 100;
    Conta minhaConta2;
    minhaConta2 = new Conta(2, "Leandro2", 100, 0);   
  }
}
```
 
 
## Por que encapsulamento?

- Melhor controle dos atributos e métodos da classe
- Os atributos de classe podem ser somente leitura (se você usar apenas o método *get*) ou somente gravação (se você usar apenas o método *set*)
- Flexível: o programador pode alterar uma parte do código sem afetar outras partes
- Maior segurança de dados

