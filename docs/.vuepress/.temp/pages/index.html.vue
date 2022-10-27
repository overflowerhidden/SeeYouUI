<template><div><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1>
<h2 id="内部引用组件库" tabindex="-1"><a class="header-anchor" href="#内部引用组件库" aria-hidden="true">#</a> 内部引用组件库</h2>
<div class="language-javascript" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 全部引入（ main.js ）</span>
<span class="token keyword">import</span> <span class="token string">'../components/css/index.css'</span>
<span class="token keyword">import</span> <span class="token constant">SUI</span> <span class="token keyword">from</span> <span class="token string">"../components/lib/index"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">SUI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>

<span class="token comment">// 按需引入（ main.js ）</span>
<span class="token keyword">import</span> <span class="token string">'../components/css/index.css'</span>
<span class="token keyword">import</span> <span class="token string">'../components/css/card.css'</span>
<span class="token keyword">import</span> Demo <span class="token keyword">from</span> <span class="token string">'../components/lib/demo/index'</span>
<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">'../components/lib/card/index'</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Card<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="外部引用组件库" tabindex="-1"><a class="header-anchor" href="#外部引用组件库" aria-hidden="true">#</a> 外部引用组件库</h2>
<div class="language-javascript" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 安装</span>
npm run see<span class="token operator">-</span>you<span class="token operator">-</span>ui
or
yarn see<span class="token operator">-</span>you<span class="token operator">-</span>ui

<span class="token comment">// 全部引入（ main.js ）</span>
<span class="token keyword">import</span> <span class="token string">'see-you-ui/dist/css/index.css'</span>
<span class="token keyword">import</span> <span class="token constant">SUI</span> <span class="token keyword">from</span> <span class="token string">"see-you-ui"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">SUI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>

<span class="token comment">// 按需引入（ main.js ）</span>
<span class="token keyword">import</span> <span class="token string">'see-you-ui/dist/css/demo.css'</span>
<span class="token keyword">import</span> <span class="token constant">SUI</span> <span class="token keyword">from</span> <span class="token string">"see-you-ui"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Demo <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token constant">SUI</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>

</code></pre></div><p>Copyright (c) 2022-present zdp</p>
</div></template>


