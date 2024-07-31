---
icon: edit
date: 2024-07-31 18:00:00.00 -3
tag:
  - java
  - datas
category:
  - aula
order: 9
---

# API de data do Java

[^ZUP_DATA]

## As entidades

O primeiro passo é conhecer os tipos de entidades que a API de data traz suporte. Segue uma lista resumida . 

Um ponto importante: a API traz representações que cobrem dia, mês, dia da semana, ano, timezone, offset, além da combinação de todas elas! 


```java
DayOfWeek dayOfWeek = DayOfWeek.MONDAY;
Month month = Month.JANUARY;
MonthDay monthDay = MonthDay.now();
YearMonth yearMonth = YearMonth.now();
Year year = Year.now();
LocalDate localDate = LocalDate.now();
LocalTime localTime = LocalTime.now();
LocalDateTime localDateTime = LocalDateTime.now();
OffsetDateTime offsetDateTime = OffsetDateTime.now();
ZonedDateTime zonedDateTime = ZonedDateTime.now();
Clock clock = Clock.systemUTC();
Instant instant = Instant.now();
TimeZone timeZone = TimeZone.getDefault();

System.out.println("DayOfWeek: " + dayOfWeek);
System.out.println("month: " + month);
System.out.println("MonthDay: " + monthDay);
System.out.println("YearMonth: " + yearMonth);
System.out.println("Year: " + year);
System.out.println("LocalDate: " + localDate);
System.out.println("LocalTime: " + localTime);
System.out.println("LocalDateTime: " + localDateTime);
System.out.println("OffsetDateTime: " + offsetDateTime);
System.out.println("ZonedDateTime: " + zonedDateTime);
System.out.println("Clock: " + clock.getZone());
System.out.println("Instant: " + instant);
System.out.println("TimeZone: " + timeZone.getDisplayName());
```

Formatando o `LocalDateTime`


```java
LocalDateTime agora = LocalDateTime.now();
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d/M/y h:m:s");
String agoraFormatado = agora.format(formatter);
System.out.println("LocalDateTime formatado: " + agoraFormatado);
```


Nesse memento, o que é feito a criação da cada tipo.

Salientamos aqui as possibilidades que podem ser utilizadas com tipos ou entidades que representam tempo na API, ao invés de usar apenas um único, como era realizado anteriormente. Por exemplo, o `YearMonth` para trabalhar com a data de validade de um cartão de crédito ou `Year` para lidar com o ano de publicação de um livro.

Essas variáveis, além de trazer uma melhor semântica para dentro do código, trazem clareza e simplificam como você realiza as validações. Isso é baseado no clássico e já mencionado “When Make a Type” do Martin Fowler. 


É possível também realizar combinações entre tipos para criar uma instância final, por exemplo, começamos com ano e vamos até à data.

```java
LocalDate myBirthday = Year.of(1988).atMonth(Month.JANUARY).atDay(9);
```


Assim, como primeiro passo, sugiro que você explore e leia um pouco mais sobre os tipos que a API suporta. Essas APIs são muito mais eficientes para representar o tempo que tipos mais genéricos como `int`, `long` ou `String`, já que a API de data possui validações temporáveis.



## Operações com data

Além de trazer mais semântica e validação para lidar com datas, a API também traz algumas operações bem interessantes que visam facilitar o seu dia, além de salvar o seu tempo. 

As operações mais básicas são as de adicionar ou remover períodos, como mês ou dias, através dos métodos com os sufixos “_plus_” ou “_minus_” respectivamente.


```java
LocalDate myBirthday = Year.of(1988).atMonth(Month.JANUARY).atDay(9);
LocalDate yesterday = myBirthday.minusDays(1);
LocalDate oneYear = myBirthday.plusDays(365);
```


A interface `TemporalAdjuster` permite ajustes customizados e algumas operações mais complexas e a partir dela é possível criar várias operações customizáveis e reutilizáveis. Como convenção, essa classe utilitária traz diversos recursos, por exemplo, verificar a próxima segunda-feira a partir da data atual, me refiro a classe `TemporalAdjusters`.

```java
LocalDate myBirthday = Year.of(1988).atMonth(Month.JANUARY).atDay(9);
LocalDate newYear = myBirthday.with(TemporalAdjusters.firstDayOfMonth());
LocalDate lastDayOfMonth = myBirthday.with(TemporalAdjusters.lastDayOfMonth());
LocalDate nextMonday = myBirthday.with(TemporalAdjusters.next(DayOfWeek.MONDAY));
```

É possível também realizar comparações entre datas, nada muito recente comparado as API mais antigas, no entanto, é sempre importante salientar que isso existe.

```java
LocalDate myBirthday = Year.of(1988).atMonth(Month.JANUARY).atDay(9);
LocalDate now = LocalDate.now();
Assertions.assertTrue(now.isAfter(myBirthday));
Assertions.assertFalse(now.isBefore(myBirthday));
```

As operações básicas são bem úteis, porém, é possível ir além com o `Period` e também `ChronoUnit`. Com eles, você consegue ver a diferença entre um determinado período.

```java
LocalDate today = LocalDate.now();
LocalDate tomorrow = LocalDate.now().plusDays(1);
Assertions.assertEquals(1, ChronoUnit.DAYS.between(today, tomorrow));

LocalDate dateA = LocalDate.of(2012, Month.APRIL, 7);
LocalDate dateB = LocalDate.of(2015, Month.DECEMBER,5);

Period period = Period.between(dateA, dateB);

Assertions.assertEquals(3, period.getYears());
Assertions.assertEquals(7, period.getMonths());
Assertions.assertEquals(28, period.getDays());
Assertions.assertEquals(43, period.toTotalMonths());
```


O último passo para comparação e verificação é o TemporalQuery, que tem o objetivo de extrair alguma informação do tempo.

```java
TemporalQuery<Boolean> weekend = temporal -> {
    int dayOfWeek = temporal.get(ChronoField.DAY_OF_WEEK);
    return dayOfWeek == DayOfWeek.SATURDAY.getValue()
           || dayOfWeek == DayOfWeek.SUNDAY.getValue();
};
LocalDate date = LocalDate.of(2018, 5, 4);
LocalDateTime sunday = LocalDateTime.of(2018, 5, 6, 17, 0);
Assertions.assertFalse(date.query(weekend));
Assertions.assertTrue(sunday.query(weekend));
```

O ponto de destaque de recursos de operações de data certamente é a possibilidade de trabalhar com os timezones.

```java
ZoneId saoPaulo = ZoneId.of("America/Sao_Paulo");
ZonedDateTime adenNow = ZonedDateTime.now(saoPaulo);
ZoneOffset offset = adenNow.getOffset();
Assertions.assertEquals(saoPaulo, adenNow.getZone());
Assertions.assertEquals("-03:00", offset.getId());
```

É possível realizar comparações de timezones diferentes, por exemplo, comparar um horário do Brasil e outro de Portugal, que no dia 3 de maio tem a diferença de quatro horas.

```java
ZoneId saoPaulo = ZoneId.of("America/Sao_Paulo");
ZoneId portugal = ZoneId.of("Portugal");
LocalDateTime timeSP = Year.of(2021).atMonth(Month.MAY).atDay(3)
.atTime(12,0,0);

LocalDateTime timeLisbon = Year.of(2021).atMonth(Month.MAY).atDay(3)
.atTime(16,0,0);

ZonedDateTime zoneSaoPaulo = ZonedDateTime.of(timeSP, saoPaulo);
ZonedDateTime zoneLisbon = ZonedDateTime.of(timeLisbon, portugal);
Assertions.assertTrue(zoneSaoPaulo.isEqual(zoneLisbon));
```


Comparando timezones de São Paulo e Portugal e achando sua equivalência de três horas no período.

É importante reforçar que o que mencionamos é apenas uma visão geral da API e vale muito ler a [documentação](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/package-summary.html) do projeto, que é extremamente rica e detalhada.


<!-- @include: ../bib/bib.md -->

