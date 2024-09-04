---
icon: edit
date: 2024-09-04 17:40:00.00 -3
tag:
  - camadas
category:
  - aula
order: 13
---

# Separação em Camadas e ferramentas

A separação da aplicação em camadas é um conceito fundamental em engenharia de software que se aplica a diversos tipos de sistemas, desde aplicativos de desktop até sistemas embarcados e serviços corporativos. O princípio básico é dividir o sistema em partes (camadas) com responsabilidades específicas, o que facilita a manutenção, a escalabilidade e a evolução da aplicação.

<figure>

```plantuml
@startuml
<style>
database {
  BackGroundColor #ff9933
  LineThickness 1
  LineColor black
}
frame {
  BackGroundColor #d0c310
  LineThickness 1
  LineColor black
}
node {
  BackGroundColor #22ccaa
  LineThickness 1
  LineColor black
}
</style>
database "Base de Dados"{
    
}
frame "Apresentação"{
    label "Interface Gráfica"
}
node "Negócio"{
}

"Apresentação" .> "Negócio"
"Negócio" .> "Base de Dados"
@enduml
```

<figcaption> Exemplo separação em camadas.</figcaption>
</figure>

## Conceitos Fundamentais

### Camada de Apresentação(UI - User Interface)

A camada de apresentação é responsável pela interação com o usuário, essa camada renderiza a interface visual e captura entradas. Isso inclui não apenas a exibição de dados, mas também a coleta de informações e a apresentação de feedback. O foco aqui é garantir que a interface seja intuitiva, responsiva e amigável para o usuário final.

A camada de apresentação pode ser uma tela web, desktop ou ate mesmo um chatbot

<figure>

```plantuml
@startsalt
{+
  Login    | "MyName   "
  Password | "****     "
  [Cancel] | [  OK   ]
}
@endsalt
```

<figcaption> Exemplo de tela de login.</figcaption>
</figure>

### Camada de Negócio (Business Logic)

A camada de negócio encapsula a lógica que implementa as regras e processos específicos da aplicação. Essa camada é onde são definidas as regras que governam como os dados podem ser manipulados e o que deve acontecer em determinadas situações.

Esta camada processa os dados recebidos da camada de apresentação, aplica as regras de negócio, e decide como responder a essas solicitações. 


### Camada de Dados(Data Access)

A camada de dados gerencia a persistência e o acesso aos dados da aplicação. Ela é responsável por interagir com bancos de dados, arquivos ou outros sistemas de armazenamento para garantir que os dados sejam armazenados e recuperados conforme necessário.

### Exemplo em um Sistema de Gerenciamento de Estoque

Considere um sistema de gerenciamento de estoque de uma loja que um operador utiliza para gerenciar produtos.

- **Camada de Apresentação:** Um formulário no aplicativo que permite ao operador adicionar um novo produto ao inventário, exibindo campos como nome, quantidade e preço.

- **Camada de Negócio:** Ao tentar remover um produto cuja quantidade no estoque não é zero, a camada de negócio detecta essa condição e gera uma exceção, informando que a operação não é permitida.

- **Camada de Dados:** Salvar as informações do novo produto no banco de dados quando o operador o adiciona via interface.

### Integração das Camadas

Imagine que o operador tenta registrar um produto com preço negativo. A camada de apresentação coleta os dados inseridos pelo usuário e os envia para a camada de negócio. A camada de negócio, ao detectar a violação da regra de negócio (preço negativo), retorna uma mensagem de erro para a camada de apresentação. É responsabilidade da camada de apresentação exibir essa mensagem de erro de forma clara e amigável ao operador, talvez em uma caixa de diálogo informando: "Erro: O preço do produto não pode ser negativo."

Esse processo garante que a lógica crítica do sistema, como as regras de negócio, seja tratada de forma centralizada e consistente, enquanto a camada de apresentação se concentra em como comunicar essas regras ao usuário final.

## Apache Maven

O Apache Maven é uma ferramenta de automação e gerenciamento de projetos, amplamente utilizada no desenvolvimento de software, especialmente em projetos Java. Ele desempenha um papel fundamental ao simplificar e padronizar o processo de construção de projetos, permitindo aos desenvolvedores focar no código, sem se preocupar com as tarefas repetitivas e complexas de compilação, empacotamento e gerenciamento de dependências.

### Estrutura e Funcionamento

O Maven utiliza um conceito de **modelagem de projeto** baseado no arquivo de configuração chamado `pom.xml` (Project Object Model). Esse arquivo é onde se definem as dependências, plugins e outros parâmetros essenciais. Através desse modelo, o Maven automatiza o processo de:

1. **Compilação**: Converte o código-fonte em binários.
2. **Execução de testes**: Utiliza frameworks como JUnit para garantir a integridade do código.
3. **Empacotamento**: Gera artefatos (como arquivos `.jar` ou `.war`), prontos para serem implantados.
4. **Distribuição**: Faz o deploy dos artefatos em repositórios remotos.

O arquivo `pom.xml` é onde os desenvolvedores especificam essas configurações de maneira declarativa, o que significa que ao invés de definir um conjunto de scripts manuais, o Maven interpreta as instruções e executa as tarefas automaticamente.

### Gerenciamento de Dependências

Um dos aspectos mais poderosos do Maven é seu sistema de **gerenciamento de dependências**. Em um projeto típico, diversas bibliotecas externas são necessárias para que a aplicação funcione corretamente. O Maven simplifica esse processo permitindo que os desenvolvedores especifiquem as dependências no `pom.xml`, sem precisar baixar ou configurar manualmente essas bibliotecas. O Maven se conecta a repositórios centrais (como o Maven Central Repository) ou repositórios privados, faz o download das bibliotecas necessárias e as integra no ciclo de vida do projeto.

Além disso, o Maven também gerencia versões de dependências e resolve conflitos, garantindo que todas as bibliotecas utilizadas sejam compatíveis entre si.

### Estrutura Básica do Projeto Maven
Um projeto Maven típico tem a seguinte estrutura de diretórios:

<figure>

```plantuml
@startsalt
{
{T
 + my-app
 ++ src
 +++ main
 ++++ java
 ++++ resources
 +++ test
 ++++ java
 ++ POM.xml
}
}
@endsalt
```
<figcaption> Exemplo de estrutura de diretório de um projeto utilizando maven.</figcaption>
</figure>


Exemplo de POM.xml

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>br.edu.ifba.saj.ads</groupId>
    <artifactId>app-demo</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>
    <properties>
        <java.version>17</java.version> <!-- Define a versão do Java -->
    </properties>
    <dependencies>
        <!-- Dependência do banco de dados embarcado H2 -->
        <dependency>
          <groupId>com.h2database</groupId>
          <artifactId>h2</artifactId>
          <scope>runtime</scope>
      </dependency>
    </dependencies>
</project>
```

## Spring Boot

O Spring Boot é um framework de código aberto que visa simplificar o desenvolvimento de aplicativos Java. Ele foi projetado para permitir a criação rápida de aplicativos autônomos e prontos para produção, com mínima configuração manual. O Spring Boot abstrai muitas das complexidades envolvidas na configuração de projetos tradicionais, oferecendo uma experiência de desenvolvimento mais ágil e produtiva.

### Inicialização Rápida

O Spring Boot permite que os desenvolvedores criem um aplicativo funcional em questão de minutos. Com a ajuda do [Spring Initializr](https://start.spring.io/), uma ferramenta online que gera projetos Spring Boot, é possível configurar uma nova aplicação selecionando dependências essenciais e, em seguida, importar o projeto diretamente para o ambiente de desenvolvimento.

### Autoconfiguração

O Spring Boot detecta automaticamente as dependências presentes no projeto e configura o aplicativo conforme necessário. Isso reduz drasticamente a necessidade de configuração manual. Por exemplo, ao adicionar uma dependência para um banco de dados, o Spring Boot pode configurar automaticamente uma conexão JDBC e um DataSource.

Exemplo de dependências que o maven e o Spring Boot configuram automaticamente.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
    <optional>true</optional>
</dependency>
```

### Aplicativos Autônomos

O Spring Boot facilita a criação de aplicativos autônomos, que podem ser executados diretamente a partir de um arquivo .jar. Isso elimina a necessidade de um servidor de aplicação externo, como o Tomcat ou o Jetty, pois ele vem embutido no projeto. Ao rodar um único comando, como java -jar, o aplicativo entra em execução.

exemplo de arquivo `src\main\resources\application.properties`

@[code](../includes/demo/src/main/resources/application.properties)

Caso tenha o maven instalado, inicie a aplicação com o comando

```console
mvn compile spring-boot:run
```
se tiver baixado pelo [Spring Initializr](https://start.spring.io/), pode utilizar o Maven Wrapper

```console
./mvnw compile spring-boot:run
```


e accesse o endereço http://localhost:8080/h2-console


### Acesso a dados simplificado 

#### Entidade

@[code](../includes/demo/src/main/java/br/edu/ifba/saj/ads/demo/model/User.java)

#### Repositório

O Spring Data JPA simplifica a criação do repositório. Basta criar uma interface que estende `JpaRepository`.

@[code](../includes/demo/src/main/java/br/edu/ifba/saj/ads/demo/repository/UserRepository.java)



#### Main
Exemplo de Classe Principal Spring Boot

@[code](../includes/demo/src/main/java/br/edu/ifba/saj/ads/demo/DemoApplication.java)
