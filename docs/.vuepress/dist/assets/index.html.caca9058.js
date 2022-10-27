import{_ as n,o as s,c as a,a as p}from"./app.c8cc6e98.js";const t={},o=p(`<h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><h2 id="内部引用组件库" tabindex="-1"><a class="header-anchor" href="#内部引用组件库" aria-hidden="true">#</a> 内部引用组件库</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 全部引入（ main.js ）</span>
<span class="token keyword">import</span> <span class="token string">&#39;../components/css/index.css&#39;</span>
<span class="token keyword">import</span> <span class="token constant">SUI</span> <span class="token keyword">from</span> <span class="token string">&quot;../components/lib/index&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">SUI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 按需引入（ main.js ）</span>
<span class="token keyword">import</span> <span class="token string">&#39;../components/css/index.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;../components/css/card.css&#39;</span>
<span class="token keyword">import</span> Demo <span class="token keyword">from</span> <span class="token string">&#39;../components/lib/demo/index&#39;</span>
<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">&#39;../components/lib/card/index&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Card<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="外部引用组件库" tabindex="-1"><a class="header-anchor" href="#外部引用组件库" aria-hidden="true">#</a> 外部引用组件库</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 安装</span>
npm run see<span class="token operator">-</span>you<span class="token operator">-</span>ui
or
yarn see<span class="token operator">-</span>you<span class="token operator">-</span>ui

<span class="token comment">// 全部引入（ main.js ）</span>
<span class="token keyword">import</span> <span class="token string">&#39;see-you-ui/dist/css/index.css&#39;</span>
<span class="token keyword">import</span> <span class="token constant">SUI</span> <span class="token keyword">from</span> <span class="token string">&quot;see-you-ui&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">SUI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 按需引入（ main.js ）</span>
<span class="token keyword">import</span> <span class="token string">&#39;see-you-ui/dist/css/demo.css&#39;</span>
<span class="token keyword">import</span> <span class="token constant">SUI</span> <span class="token keyword">from</span> <span class="token string">&quot;see-you-ui&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Demo <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token constant">SUI</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre></div><p>Copyright (c) 2022-present zdp</p>`,6),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","index.html.vue"]]);export{k as default};
