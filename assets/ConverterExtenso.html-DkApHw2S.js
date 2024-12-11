import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as o,a as n,b as p,d as c,e as i}from"./app-Bfn06KnA.js";const r={},l=i(`<h1 id="exercicio-converter-para-extenso" tabindex="-1"><a class="header-anchor" href="#exercicio-converter-para-extenso"><span>Exercício: Converter para Extenso</span></a></h1><p>Analisando o processo de conversão de um numero inteiro para o seu correspondente texto por extenso percebemos que existe muita coisa em comum quando são adicionados novos dígitos.</p><ol><li><p>Crie uma família de classes (utilize herança) para transformar um número inteiro em seu correspondente texto por extenso sendo possível executar o código abaixo.</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">ConverterExtenso</span> ce <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
ce <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConverterExtenso4Digitos</span><span class="token punctuation">(</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -&gt; Nove Mil Novecentos e Noventa e Nove</span>
ce <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConverterExtenso3Digitos</span><span class="token punctuation">(</span><span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -&gt; Novecentos e Noventa e Nove</span>
ce <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConverterExtenso2Digitos</span><span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -&gt; Noventa e Nove</span>
ce <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConverterExtenso1Digito</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -&gt; Nove</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Segue exemplo:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">class</span> <span class="token class-name">ConverterExtenso1Digito</span> <span class="token punctuation">{</span>
   
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> porExtenso <span class="token operator">=</span>  <span class="token punctuation">{</span> <span class="token string">&quot;Zero&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Um&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dois&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Três&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Quatro&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cinco&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Seis&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sete&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Oito&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Nove&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dez&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//...</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> porExtenso<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>numero<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="link" tabindex="-1"><a class="header-anchor" href="#link"><span>Link</span></a></h2>`,4),u={href:"https://classroom.github.com/a/Dawow9Fx",target:"_blank",rel:"noopener noreferrer"};function d(m,k){const s=e("ExternalLinkIcon");return t(),o("div",null,[l,n("p",null,[n("a",u,[p("Entrega"),c(s)])])])}const g=a(r,[["render",d],["__file","ConverterExtenso.html.vue"]]),b=JSON.parse('{"path":"/posts/exercicios/ExercicioHeranca/ConverterExtenso.html","title":"Exercício: Converter para Extenso","lang":"pt-BR","frontmatter":{"icon":"study","date":"2024-08-21T22:50:00.000Z","tag":["heranca"],"category":["exercicio","entrega"],"description":"Exercício: Converter para Extenso Analisando o processo de conversão de um numero inteiro para o seu correspondente texto por extenso percebemos que existe muita coisa em comum ...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-poo.github.io/blog-material-aula/blog-material-aula/posts/exercicios/ExercicioHeranca/ConverterExtenso.html"}],["meta",{"property":"og:site_name","content":"20241 POO Blog das Aulas"}],["meta",{"property":"og:title","content":"Exercício: Converter para Extenso"}],["meta",{"property":"og:description","content":"Exercício: Converter para Extenso Analisando o processo de conversão de um numero inteiro para o seu correspondente texto por extenso percebemos que existe muita coisa em comum ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-08-21T21:55:18.000Z"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["meta",{"property":"article:tag","content":"heranca"}],["meta",{"property":"article:published_time","content":"2024-08-21T22:50:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-21T21:55:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Exercício: Converter para Extenso\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-21T22:50:00.000Z\\",\\"dateModified\\":\\"2024-08-21T21:55:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Souza\\",\\"url\\":\\"https://github.com/leandro-costa\\"}]}"]]},"headers":[{"level":2,"title":"Link","slug":"link","link":"#link","children":[]}],"git":{"createdTime":1711577119000,"updatedTime":1724277318000,"contributors":[{"name":"Leandro Costa","email":"leandro.costa@ifba.edu.br","commits":1},{"name":"leandro-costa","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":0.51,"words":153},"filePathRelative":"posts/exercicios/ExercicioHeranca/ConverterExtenso.md","localizedDate":"21 de agosto de 2024","autoDesc":true}');export{g as comp,b as data};