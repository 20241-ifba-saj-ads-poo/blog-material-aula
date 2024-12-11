import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as e,c as o,a,b as p,d as c,e as i}from"./app-Bfn06KnA.js";const l={},u=i(`<h1 id="exercicio-data-oo" tabindex="-1"><a class="header-anchor" href="#exercicio-data-oo"><span>Exercício: Data OO</span></a></h1><ol><li><p>Utilizando os conhecimentos de O.O. construa um programa que represente uma <code>Data</code> utilizando as informações abaixo.</p><ul><li>Toda <code>Data</code> deve representar dia, mês e ano.</li><li>Toda <code>Data</code> deve poder saber se ela é anterior, posterior ou igual a outra <code>Data</code>.</li><li>Toda <code>Data</code> deve poder incrementar o dia depois de ser criada.</li><li>Toda <code>Data</code> deve poder exibir suas informações no formato Texto.</li></ul></li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Data</span> data1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        data1<span class="token punctuation">.</span>dia <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        data1<span class="token punctuation">.</span>mes <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        data1<span class="token punctuation">.</span>ano <span class="token operator">=</span> <span class="token number">2024</span><span class="token punctuation">;</span>
        <span class="token class-name">Data</span> data2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        data2<span class="token punctuation">.</span>dia <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        data2<span class="token punctuation">.</span>mes <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        data2<span class="token punctuation">.</span>ano <span class="token operator">=</span> <span class="token number">2024</span><span class="token punctuation">;</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Data 1: &quot;</span><span class="token operator">+</span>data1<span class="token operator">+</span><span class="token string">&quot; | Data 2: &quot;</span><span class="token operator">+</span>data2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;data1.anterior(data2): &quot;</span><span class="token operator">+</span>data1<span class="token punctuation">.</span><span class="token function">anterior</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;data1.posterior(data2): &quot;</span><span class="token operator">+</span>data1<span class="token punctuation">.</span><span class="token function">posterior</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;data1.igual(data2): &quot;</span><span class="token operator">+</span>data1<span class="token punctuation">.</span><span class="token function">igual</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        data1<span class="token punctuation">.</span><span class="token function">incrementarDia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Data 1 :&quot;</span><span class="token operator">+</span>data1<span class="token operator">+</span><span class="token string">&quot;| Data 2 &quot;</span><span class="token operator">+</span>data2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;data1.anterior(data2): &quot;</span><span class="token operator">+</span>data1<span class="token punctuation">.</span><span class="token function">anterior</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;data1.posterior(data2): &quot;</span><span class="token operator">+</span>data1<span class="token punctuation">.</span><span class="token function">posterior</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;data1.igual(data2): &quot;</span><span class="token operator">+</span>data1<span class="token punctuation">.</span><span class="token function">igual</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        data1<span class="token punctuation">.</span><span class="token function">incrementarDia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Data 1 :&quot;</span><span class="token operator">+</span>data1<span class="token operator">+</span><span class="token string">&quot;| Data 2 &quot;</span><span class="token operator">+</span>data2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;data1.anterior(data2): &quot;</span><span class="token operator">+</span>data1<span class="token punctuation">.</span><span class="token function">anterior</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;data1.posterior(data2): &quot;</span><span class="token operator">+</span>data1<span class="token punctuation">.</span><span class="token function">posterior</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;data1.igual(data2): &quot;</span><span class="token operator">+</span>data1<span class="token punctuation">.</span><span class="token function">igual</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Saida esperada</p><div class="language-console line-numbers-mode" data-ext="console" data-title="console"><pre class="language-console"><code>Data 1: 1/1/2024 | Data 2: 2/1/2024
data1.anterior(data2): true
data1.posterior(data2): false
data1.igual(data2): false
Data 1 :2/1/2024| Data 2 2/1/2024
data1.anterior(data2): false
data1.posterior(data2): false
data1.igual(data2): true
Data 1 :3/1/2024| Data 2 2/1/2024
data1.anterior(data2): false
data1.posterior(data2): true
data1.igual(data2): false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="link-para-entrega" tabindex="-1"><a class="header-anchor" href="#link-para-entrega"><span>Link para Entrega</span></a></h2>`,6),r={href:"https://classroom.github.com/a/ZEH39nbx",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const n=t("ExternalLinkIcon");return e(),o("div",null,[u,a("p",null,[a("a",r,[p("Entrega"),c(n)])])])}const g=s(l,[["render",d],["__file","04_exercicio_data_OO.html.vue"]]),f=JSON.parse('{"path":"/posts/exercicios/04_exercicio_data_OO.html","title":"Exercício: Data OO","lang":"pt-BR","frontmatter":{"icon":"study","date":"2024-07-09T21:30:00.000Z","tag":["java"],"category":["exercicio","entrega"],"prev":"03_exercicio_predio_OO","next":"04_exercicio_modelagem_carro","description":"Exercício: Data OO Utilizando os conhecimentos de O.O. construa um programa que represente uma Data utilizando as informações abaixo. Toda Data deve representar dia, mês e ano. ...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-poo.github.io/blog-material-aula/blog-material-aula/posts/exercicios/04_exercicio_data_OO.html"}],["meta",{"property":"og:site_name","content":"20241 POO Blog das Aulas"}],["meta",{"property":"og:title","content":"Exercício: Data OO"}],["meta",{"property":"og:description","content":"Exercício: Data OO Utilizando os conhecimentos de O.O. construa um programa que represente uma Data utilizando as informações abaixo. Toda Data deve representar dia, mês e ano. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-07-10T22:07:39.000Z"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:published_time","content":"2024-07-09T21:30:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-10T22:07:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Exercício: Data OO\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-09T21:30:00.000Z\\",\\"dateModified\\":\\"2024-07-10T22:07:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Souza\\",\\"url\\":\\"https://github.com/leandro-costa\\"}]}"]]},"headers":[{"level":2,"title":"Link para Entrega","slug":"link-para-entrega","link":"#link-para-entrega","children":[]}],"git":{"createdTime":1720560505000,"updatedTime":1720649259000,"contributors":[{"name":"leandro-costa","email":"leandro.costa@ifba.edu.br","commits":5}]},"readingTime":{"minutes":0.47,"words":141},"filePathRelative":"posts/exercicios/04_exercicio_data_OO.md","localizedDate":"9 de julho de 2024","autoDesc":true}');export{g as comp,f as data};