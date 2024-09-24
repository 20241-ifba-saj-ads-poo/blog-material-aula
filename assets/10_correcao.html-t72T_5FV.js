import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-CX7XYTt-.js";const p={},e=t(`<h1 id="correcao-av1" tabindex="-1"><a class="header-anchor" href="#correcao-av1"><span>Correção Av1</span></a></h1><p>Código da primeira questão da avaliação</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Usuario</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tarefa</span><span class="token punctuation">&gt;</span></span> tarefas<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> nome<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> quantidade <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Usuario</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token string">&quot;Usuario&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Usuario</span><span class="token punctuation">(</span><span class="token class-name">String</span> nome<span class="token punctuation">)</span> <span class="token punctuation">{</span>        
        <span class="token keyword">this</span><span class="token punctuation">.</span>nome <span class="token operator">=</span> nome<span class="token punctuation">;</span>
        <span class="token function">setId</span><span class="token punctuation">(</span><span class="token operator">++</span><span class="token class-name">Usuario</span><span class="token punctuation">.</span>quantidade<span class="token punctuation">)</span><span class="token punctuation">;</span>
        tarefas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getNome</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> nome<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNome</span><span class="token punctuation">(</span><span class="token class-name">String</span> nome<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nome <span class="token operator">=</span> nome<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// get e set de tarefas segue o mesmo modelo da classe grupo</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tarefa</span><span class="token punctuation">&gt;</span></span> <span class="token function">getTarefas</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// retornar lista em modo de somente leitura</span>
        <span class="token keyword">return</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>tarefas<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addTarefas</span><span class="token punctuation">(</span><span class="token class-name">Tarefa</span> tarefa<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// regras para controle da entrada tarefa no usuario</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>tarefa<span class="token punctuation">.</span><span class="token function">getResponsavel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            tarefa<span class="token punctuation">.</span><span class="token function">setResponsavel</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tarefas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>tarefa<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>tarefas<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>tarefa<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>tarefas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>tarefa<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeTarefas</span><span class="token punctuation">(</span><span class="token class-name">Tarefa</span> tarefa<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//remover tarefa da lista</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tarefas<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>tarefa<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Usuario</span> outraUsuario<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">==</span> outraUsuario<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getQtdTarefasConcluidas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> qtd <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Tarefa</span> tarefa <span class="token operator">:</span> <span class="token function">getTarefas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>tarefa<span class="token punctuation">.</span><span class="token function">isConcluido</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                qtd<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>            
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> qtd<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getQtdTarefasAndamento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> qtd <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Tarefa</span> tarefa <span class="token operator">:</span> <span class="token function">getTarefas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>tarefa<span class="token punctuation">.</span><span class="token function">isConcluido</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                qtd<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>            
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> qtd<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Usuario [id=&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">&quot;, nome=&quot;</span> <span class="token operator">+</span> nome <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Tarefa</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Grupo</span> grupo<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Usuario</span> responsavel<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> andamento<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> quantidade <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Tarefa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setId</span><span class="token punctuation">(</span><span class="token operator">++</span><span class="token class-name">Tarefa</span><span class="token punctuation">.</span>quantidade<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//para composição</span>
    <span class="token comment">/*
    public Tarefa(Grupo grupo) {
        this.grupo = grupo;
        setId(++Tarefa.quantidade);
    }
    */</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setGrupo</span><span class="token punctuation">(</span><span class="token class-name">Grupo</span> grupo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>grupo <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>grupo<span class="token punctuation">.</span><span class="token function">removeTarefas</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>grupo <span class="token operator">=</span> grupo<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>grupo <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>grupo<span class="token punctuation">.</span><span class="token function">addTarefas</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Grupo</span> <span class="token function">getGrupo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> grupo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Usuario</span> <span class="token function">getResponsavel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> responsavel<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setResponsavel</span><span class="token punctuation">(</span><span class="token class-name">Usuario</span> responsavel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>responsavel <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>responsavel<span class="token punctuation">.</span><span class="token function">removeTarefas</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>responsavel <span class="token operator">=</span> responsavel<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>responsavel <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>responsavel<span class="token punctuation">.</span><span class="token function">addTarefas</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getAndamento</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> andamento<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAndamento</span><span class="token punctuation">(</span><span class="token keyword">float</span> andamento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>andamento <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>andamento <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>andamento <span class="token operator">=</span> andamento<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isConcluido</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> andamento <span class="token operator">==</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Tarefa</span> outraTarefa<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">==</span> outraTarefa<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Tarefa [id=&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">&quot;, grupo=&quot;</span> <span class="token operator">+</span> grupo <span class="token operator">+</span> <span class="token string">&quot;, andamento=&quot;</span> <span class="token operator">+</span> andamento <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Grupo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span> <span class="token comment">// get publico</span>
    <span class="token keyword">private</span> <span class="token class-name">Usuario</span> responsavel<span class="token punctuation">;</span><span class="token comment">// get publico</span>
    <span class="token keyword">private</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tarefa</span><span class="token punctuation">&gt;</span></span> tarefas<span class="token punctuation">;</span><span class="token comment">// get publico somemnte </span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> quantidade <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Grupo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setId</span><span class="token punctuation">(</span><span class="token operator">++</span><span class="token class-name">Grupo</span><span class="token punctuation">.</span>quantidade<span class="token punctuation">)</span><span class="token punctuation">;</span>
        tarefas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Usuario</span> <span class="token function">getResponsavel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> responsavel<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setResponsavel</span><span class="token punctuation">(</span><span class="token class-name">Usuario</span> responsavel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>responsavel <span class="token operator">=</span> responsavel<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tarefa</span><span class="token punctuation">&gt;</span></span> <span class="token function">getTarefas</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// retornar lista em modo de somente leitura</span>
        <span class="token keyword">return</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>tarefas<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    //para composição
    public Tarefa addTarefas() {
        Tarefa tarefa = new Tarefa(this);
        this.tarefas.add(tarefa);
        return tarefa;
    }
    */</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addTarefas</span><span class="token punctuation">(</span><span class="token class-name">Tarefa</span> tarefa<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// regras para controle da entrada tarefa no grupo</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tarefa<span class="token punctuation">.</span><span class="token function">getGrupo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tarefa<span class="token punctuation">.</span><span class="token function">setGrupo</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>tarefas<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>tarefa<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>tarefas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>tarefa<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isConcluido</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// verifica a concluão de todas as tarefas do grupo</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Tarefa</span> tarefa <span class="token operator">:</span> tarefas<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tarefa<span class="token punctuation">.</span><span class="token function">isConcluido</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeTarefas</span><span class="token punctuation">(</span><span class="token class-name">Tarefa</span> tarefa<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tarefas<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>tarefa<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Grupo</span> outroGrupo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">==</span> outroGrupo<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getQtdTarefasConcluidas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> qtd <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Tarefa</span> tarefa <span class="token operator">:</span> <span class="token function">getTarefas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>tarefa<span class="token punctuation">.</span><span class="token function">isConcluido</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                qtd<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>            
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> qtd<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getQtdTarefasAndamento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> qtd <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Tarefa</span> tarefa <span class="token operator">:</span> <span class="token function">getTarefas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>tarefa<span class="token punctuation">.</span><span class="token function">isConcluido</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                qtd<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>            
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> qtd<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Grupo [id=&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">&quot;, responsavel=&quot;</span> <span class="token operator">+</span> responsavel <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
 * Main:
Escreve um método main para exemplificar o uso de suas classes. Cadastre Grupos, Tarefas, Usuários e mostre como atender a cada um dos itens solicitados na questão.

• quantas tarefas concluídas e quantas tarefas em andamento cada usuário possui.
• quantas tarefas concluídas e quantas tarefas em andamento cada grupo possui;
• se um grupo ja foi completamente concluído (todas suas tarefas estão em 100%).

 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// Cadastrar Grupo de tarefas</span>
        <span class="token class-name">Grupo</span> gPOO <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Grupo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Cadastrar Usuários</span>
        <span class="token class-name">Usuario</span> prof <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Usuario</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        prof<span class="token punctuation">.</span><span class="token function">setNome</span><span class="token punctuation">(</span><span class="token string">&quot;Leandro&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Usuario</span> aluno1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Usuario</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Usuario</span> aluno2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Usuario</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Cadastrar Tarefas</span>
        <span class="token class-name">Tarefa</span> avaliacao11 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tarefa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Tarefa</span> avaliacao12 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tarefa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// definir responsável por tarefa</span>
        avaliacao11<span class="token punctuation">.</span><span class="token function">setResponsavel</span><span class="token punctuation">(</span>aluno1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        avaliacao12<span class="token punctuation">.</span><span class="token function">setResponsavel</span><span class="token punctuation">(</span>aluno2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// definir responsável por grupo</span>
        gPOO<span class="token punctuation">.</span><span class="token function">setResponsavel</span><span class="token punctuation">(</span>prof<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// definir andamento da tarefa</span>
        avaliacao11<span class="token punctuation">.</span><span class="token function">setAndamento</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        avaliacao12<span class="token punctuation">.</span><span class="token function">setAndamento</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// colocar tarefas no grupo</span>
        gPOO<span class="token punctuation">.</span><span class="token function">addTarefas</span><span class="token punctuation">(</span>avaliacao11<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gPOO<span class="token punctuation">.</span><span class="token function">addTarefas</span><span class="token punctuation">(</span>avaliacao12<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// verificar quantidade de tarefas concluídas por usuário</span>
        <span class="token keyword">int</span> qtdTarefasConcluidasA1 <span class="token operator">=</span> aluno1<span class="token punctuation">.</span><span class="token function">getQtdTarefasConcluidas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;qtdTarefasConcluidasA1; &quot;</span> <span class="token operator">+</span> qtdTarefasConcluidasA1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> qtdTarefasAndamentoA1 <span class="token operator">=</span> aluno1<span class="token punctuation">.</span><span class="token function">getQtdTarefasAndamento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;qtdTarefasAndamentoA1; &quot;</span> <span class="token operator">+</span> qtdTarefasAndamentoA1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// verificar quantidade de tarefas concluídas por usuário</span>
        <span class="token keyword">int</span> qtdTarefasConcluidasA2 <span class="token operator">=</span> aluno2<span class="token punctuation">.</span><span class="token function">getQtdTarefasConcluidas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;qtdTarefasConcluidasA2; &quot;</span> <span class="token operator">+</span> qtdTarefasConcluidasA2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> qtdTarefasAndamentoA2 <span class="token operator">=</span> aluno2<span class="token punctuation">.</span><span class="token function">getQtdTarefasAndamento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;qtdTarefasAndamentoA2; &quot;</span> <span class="token operator">+</span> qtdTarefasAndamentoA2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// verificar quantidade de tarefas concluídas por grupo</span>
        <span class="token keyword">int</span> qtdTarefasConcluidasgPOO <span class="token operator">=</span> gPOO<span class="token punctuation">.</span><span class="token function">getQtdTarefasConcluidas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;qtdTarefasConcluidasgPOO; &quot;</span> <span class="token operator">+</span> qtdTarefasConcluidasgPOO<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> qtdTarefasAndamentogPOO <span class="token operator">=</span> gPOO<span class="token punctuation">.</span><span class="token function">getQtdTarefasAndamento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;qtdTarefasAndamentogPOO; &quot;</span> <span class="token operator">+</span> qtdTarefasAndamentogPOO<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// verificar se grupo esta totalmente concluído</span>
        <span class="token keyword">boolean</span> isConcluido <span class="token operator">=</span> gPOO<span class="token punctuation">.</span><span class="token function">isConcluido</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;isConcluido; &quot;</span> <span class="token operator">+</span> isConcluido<span class="token punctuation">)</span><span class="token punctuation">;</span>

        avaliacao11<span class="token punctuation">.</span><span class="token function">setAndamento</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Concluida todas as tarefas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// verificar quantidade de tarefas concluídas por usuário</span>
        qtdTarefasConcluidasA1 <span class="token operator">=</span> aluno1<span class="token punctuation">.</span><span class="token function">getQtdTarefasConcluidas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;qtdTarefasConcluidasA1; &quot;</span> <span class="token operator">+</span> qtdTarefasConcluidasA1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        qtdTarefasAndamentoA1 <span class="token operator">=</span> aluno1<span class="token punctuation">.</span><span class="token function">getQtdTarefasAndamento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;qtdTarefasAndamentoA1; &quot;</span> <span class="token operator">+</span> qtdTarefasAndamentoA1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// verificar quantidade de tarefas concluídas por usuário</span>
        qtdTarefasConcluidasA2 <span class="token operator">=</span> aluno2<span class="token punctuation">.</span><span class="token function">getQtdTarefasConcluidas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;qtdTarefasConcluidasA2; &quot;</span> <span class="token operator">+</span> qtdTarefasConcluidasA2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        qtdTarefasAndamentoA2 <span class="token operator">=</span> aluno2<span class="token punctuation">.</span><span class="token function">getQtdTarefasAndamento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;qtdTarefasAndamentoA2; &quot;</span> <span class="token operator">+</span> qtdTarefasAndamentoA2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// verificar quantidade de tarefas concluídas por grupo</span>
        qtdTarefasConcluidasgPOO <span class="token operator">=</span> gPOO<span class="token punctuation">.</span><span class="token function">getQtdTarefasConcluidas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;qtdTarefasConcluidasgPOO; &quot;</span> <span class="token operator">+</span> qtdTarefasConcluidasgPOO<span class="token punctuation">)</span><span class="token punctuation">;</span>
        qtdTarefasAndamentogPOO <span class="token operator">=</span> gPOO<span class="token punctuation">.</span><span class="token function">getQtdTarefasAndamento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;qtdTarefasAndamentogPOO; &quot;</span> <span class="token operator">+</span> qtdTarefasAndamentogPOO<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// verificar se grupo esta totalmente concluído</span>
        isConcluido <span class="token operator">=</span> gPOO<span class="token punctuation">.</span><span class="token function">isConcluido</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;isConcluido; &quot;</span> <span class="token operator">+</span> isConcluido<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","10_correcao.html.vue"]]),d=JSON.parse('{"path":"/posts/av/10_correcao.html","title":"Correção Av1","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-08-10T18:00:00.000Z","tag":["correcao"],"category":["aula"],"order":10,"description":"Correção Av1 Código da primeira questão da avaliação","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-poo.github.io/blog-material-aula/blog-material-aula/posts/av/10_correcao.html"}],["meta",{"property":"og:site_name","content":"20241 POO Blog das Aulas"}],["meta",{"property":"og:title","content":"Correção Av1"}],["meta",{"property":"og:description","content":"Correção Av1 Código da primeira questão da avaliação"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-08-10T19:40:24.000Z"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["meta",{"property":"article:tag","content":"correcao"}],["meta",{"property":"article:published_time","content":"2024-08-10T18:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-10T19:40:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Correção Av1\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-10T18:00:00.000Z\\",\\"dateModified\\":\\"2024-08-10T19:40:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Souza\\",\\"url\\":\\"https://github.com/leandro-costa\\"}]}"]]},"headers":[],"git":{"createdTime":1723318824000,"updatedTime":1723318824000,"contributors":[{"name":"Leandro Costa","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":0.12,"words":36},"filePathRelative":"posts/av/10_correcao.md","localizedDate":"10 de agosto de 2024","autoDesc":true}');export{r as comp,d as data};
