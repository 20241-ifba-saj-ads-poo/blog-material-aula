import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c as p,a,b as n,d as c,e as i}from"./app-Cawx75Hb.js";const l={},u=i(`<h1 id="trabalhando-com-arraylist" tabindex="-1"><a class="header-anchor" href="#trabalhando-com-arraylist"><span>Trabalhando com ArrayList</span></a></h1><p><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>Antes de chegarmos em toda a hierarquia das <code>Collections</code> vamos falar e utilizar um pouco o <code>ArrayList</code></p><h2 id="adicionando-elementos-em-uma-lista" tabindex="-1"><a class="header-anchor" href="#adicionando-elementos-em-uma-lista"><span>Adicionando elementos em uma lista</span></a></h2><p>Para criar um objeto do tipo <code>ArrayList</code>, certamente fazemos como sempre: utilizando o operador <code>new</code>. Mas repare que acabamos passando um pouco mais de informações. Ao declarar a referência a uma <code>ArrayList</code>, passamos qual o tipo de objeto com o qual ela trabalhará. Se queremos uma lista de nomes de aulas, vamos declarar <code>ArrayList&lt;String&gt;</code>. Crie a classe <code>TestandoListas</code>, adicionando os nomes de algumas aulas que teremos nesse curso:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestandoListas</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> aula1 <span class="token operator">=</span> <span class="token string">&quot;Modelando a classe Aula&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> aula2 <span class="token operator">=</span> <span class="token string">&quot;Conhecendo mais de listas&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> aula3 <span class="token operator">=</span> <span class="token string">&quot;Trabalhando com Cursos e Sets&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> aulas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aulas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>aula1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        aulas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>aula2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        aulas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>aula3<span class="token punctuation">)</span><span class="token punctuation">;</span>        

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aulas<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Qual é o resultado desse código? Ele mostra as aulas adicionadas em sequência! Por que isso acontece? Pois a classe <code>ArrayList</code>, ou uma de suas mães, reescreveu o método <code>toString</code>, para que internamente fizesse um for, concatenando os seus elementos internos separados por vírgula.</p><h2 id="removendo-elementos" tabindex="-1"><a class="header-anchor" href="#removendo-elementos"><span>Removendo elementos</span></a></h2><p>Bastante simples! O que mais podemos fazer com uma lista? As operações mais básicas que podemos imaginar, como por exemplo remover um determinado elemento. Usamos o método remove e depois mostramos o resultado para ver que a primeira foi removida:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>aulas<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aulas<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Por que 0? Pois as listas, assim como a maioria dos casos no Java, são indexadas a partir do 0, e não do 1.</p><h2 id="percorrendo-uma-lista" tabindex="-1"><a class="header-anchor" href="#percorrendo-uma-lista"><span>Percorrendo uma lista</span></a></h2><p>Bem, talvez não seja a melhor das ideias fazer um <code>System.out.println</code> na nossa lista, pois talvez queiramos mostrar esses itens de alguma outra forma, como por exemplo um por linha. Como fazer isso? Utilizando o for de uma maneira especial, popularmente foreach. Lembrando que foreach não existe no Java como comando, e sim como um caso especial do for mesmo. Olhe o código:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> aula <span class="token operator">:</span> aulas<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Aula: &quot;</span> <span class="token operator">+</span> aula<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="acessando-elementos" tabindex="-1"><a class="header-anchor" href="#acessando-elementos"><span>Acessando elementos</span></a></h2><p>E se eu quisesse saber apenas a primeira aula? O método aqui é o get. Ele retorna o primeiro elemento se passarmos o 0 como argumento:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">String</span> primeiraAula <span class="token operator">=</span> aulas<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A primeira aula é &quot;</span> <span class="token operator">+</span> primeiraAula<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Você pode usar esse mesmo método para percorrer a lista toda, em vez do foreach. Para isso, precisamos saber quantos elementos temos nessa lista. Nesse caso, utilizamos o método size para limitar o nosso for:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> aulas<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;aula : &quot;</span> <span class="token operator">+</span> aulas<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mais-uma-forma-de-percorrer-elementos-agora-com-java-8" tabindex="-1"><a class="header-anchor" href="#mais-uma-forma-de-percorrer-elementos-agora-com-java-8"><span>Mais uma forma de percorrer elementos, agora com Java 8</span></a></h2><p>Uma outra forma de percorrer nossa lista é utilizando as sintaxes e métodos novos incluídos no Java 8. Temos um método (não um comando!) agora que se chama <code>forEach</code>. Ele recebe um objeto do tipo <code>Consumer</code>, mas o interessante é que você não precisa criá-lo, você pode utilizar uma sintaxe bem mais enxuta, mas talvez assustadora a primeira vista, chamada <em>lambda</em>. Repare:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>aulas<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>aula <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Percorrendo:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Aula &quot;</span> <span class="token operator">+</span> aula<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exemplo-sistema-banco" tabindex="-1"><a class="header-anchor" href="#exemplo-sistema-banco"><span>Exemplo sistema banco</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">br<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>ifba<span class="token punctuation">.</span>saj<span class="token punctuation">.</span>ads<span class="token punctuation">.</span>poo<span class="token punctuation">.</span>sistemabanco</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Conta</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> numeroConta<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Conta</span><span class="token punctuation">(</span><span class="token keyword">int</span> numeroConta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>numeroConta <span class="token operator">=</span> numeroConta<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getNumeroConta</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> numeroConta<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Conta [numeroConta=&quot;</span> <span class="token operator">+</span> numeroConta <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">br<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>ifba<span class="token punctuation">.</span>saj<span class="token punctuation">.</span>ads<span class="token punctuation">.</span>poo<span class="token punctuation">.</span>sistemabanco</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Agencia</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> numero<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Conta</span><span class="token punctuation">&gt;</span></span> contas<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Agencia</span><span class="token punctuation">(</span><span class="token keyword">int</span> numero<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>numero <span class="token operator">=</span> numero<span class="token punctuation">;</span>
        contas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getNumero</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> numero<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Conta</span> <span class="token function">criarConta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//calcula o numero da nova conta</span>
        <span class="token keyword">int</span> numeroConta <span class="token operator">=</span> numero<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">;</span>
        numeroConta<span class="token operator">+=</span> contas<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//instancia nova conta com o numero calculado</span>
        <span class="token class-name">Conta</span> novConta <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Conta</span><span class="token punctuation">(</span>numeroConta<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//guardo nova conta na minha lista de contas</span>
        contas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>novConta<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//devolvo a conta para quem pediu</span>
        <span class="token keyword">return</span> novConta<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">totalContas</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> contas<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">br<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>ifba<span class="token punctuation">.</span>saj<span class="token punctuation">.</span>ads<span class="token punctuation">.</span>poo<span class="token punctuation">.</span>sistemabanco</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token static">out</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UsuarioAgencia</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//criar agencia</span>
        <span class="token class-name">Agencia</span> ag1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Agencia</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        

        <span class="token class-name">Conta</span> minhaConta<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//pedir para agencia criar uma conta</span>
            ag1<span class="token punctuation">.</span><span class="token function">criarConta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//pedir para agencia criar uma conta</span>
        minhaConta <span class="token operator">=</span> ag1<span class="token punctuation">.</span><span class="token function">criarConta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>minhaConta<span class="token punctuation">)</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;quantidade de contas dentro da agencia: &quot;</span><span class="token operator">+</span>ag1<span class="token punctuation">.</span><span class="token function">totalContas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias"><span>Referências</span></a></h2><hr class="footnotes-sep">`,28),r={class:"footnotes"},d={class:"footnotes-list"},m={id:"footnote1",class:"footnote-item"},k={href:"https://www.alura.com.br/conteudo/java-collections--amp",target:"_blank",rel:"noopener noreferrer"},v=a("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function b(g,h){const s=t("ExternalLinkIcon");return o(),p("div",null,[u,a("section",r,[a("ol",d,[a("li",m,[a("p",null,[n("Java Collections: Dominando Listas, Sets e Mapas. "),a("a",k,[n("https://www.alura.com.br/conteudo/java-collections--amp"),c(s)]),n(". (Acessado em 21/10/2022) "),v])])])])])}const w=e(l,[["render",b],["__file","06_ArrayList.html.vue"]]),j=JSON.parse('{"path":"/posts/06_ArrayList.html","title":"Trabalhando com ArrayList","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-07-10T20:40:00.000Z","tag":["vetor","lista"],"category":["aula"],"order":6,"article":false,"gitInclude":["../../src/bib/bib.md"],"description":"Trabalhando com ArrayList [1] Antes de chegarmos em toda a hierarquia das Collections vamos falar e utilizar um pouco o ArrayList Adicionando elementos em uma lista Para criar u...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-poo.github.io/blog-material-aula/blog-material-aula/posts/06_ArrayList.html"}],["meta",{"property":"og:site_name","content":"20241 POO Blog das Aulas"}],["meta",{"property":"og:title","content":"Trabalhando com ArrayList"}],["meta",{"property":"og:description","content":"Trabalhando com ArrayList [1] Antes de chegarmos em toda a hierarquia das Collections vamos falar e utilizar um pouco o ArrayList Adicionando elementos em uma lista Para criar u..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-07-10T23:37:12.000Z"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["meta",{"property":"article:tag","content":"vetor"}],["meta",{"property":"article:tag","content":"lista"}],["meta",{"property":"article:published_time","content":"2024-07-10T20:40:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-10T23:37:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Trabalhando com ArrayList\\",\\"description\\":\\"Trabalhando com ArrayList [1] Antes de chegarmos em toda a hierarquia das Collections vamos falar e utilizar um pouco o ArrayList Adicionando elementos em uma lista Para criar u...\\"}"]]},"headers":[{"level":2,"title":"Adicionando elementos em uma lista","slug":"adicionando-elementos-em-uma-lista","link":"#adicionando-elementos-em-uma-lista","children":[]},{"level":2,"title":"Removendo elementos","slug":"removendo-elementos","link":"#removendo-elementos","children":[]},{"level":2,"title":"Percorrendo uma lista","slug":"percorrendo-uma-lista","link":"#percorrendo-uma-lista","children":[]},{"level":2,"title":"Acessando elementos","slug":"acessando-elementos","link":"#acessando-elementos","children":[]},{"level":2,"title":"Mais uma forma de percorrer elementos, agora com Java 8","slug":"mais-uma-forma-de-percorrer-elementos-agora-com-java-8","link":"#mais-uma-forma-de-percorrer-elementos-agora-com-java-8","children":[]},{"level":2,"title":"Exemplo sistema banco","slug":"exemplo-sistema-banco","link":"#exemplo-sistema-banco","children":[]},{"level":2,"title":"Referências","slug":"referencias","link":"#referencias","children":[]}],"git":{"createdTime":1710890167000,"updatedTime":1720654632000,"contributors":[{"name":"Leandro Costa","email":"leandro.costa@ifba.edu.br","commits":1},{"name":"Leandro Souza","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":1.78,"words":535},"filePathRelative":"posts/06_ArrayList.md","localizedDate":"10 de julho de 2024","autoDesc":true}');export{w as comp,j as data};