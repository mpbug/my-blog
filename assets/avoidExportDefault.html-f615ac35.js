import{_ as s,X as a,Y as e,a4 as n}from"./framework-d8252107.js";const o={},t=n(`<h1 id="export-default-被认为是有害的" tabindex="-1"><a class="header-anchor" href="#export-default-被认为是有害的" aria-hidden="true">#</a> <code>export default</code> 被认为是有害的</h1><p>假如你有一个包含以下内容的 <code>foo.ts</code> 文件：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能会使用 ES6 语法导入它（在 <code>bar.ts</code> 里）：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> Foo <span class="token keyword">from</span> <span class="token string">&#39;./foo&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这存在一些可维护性的问题：</p><ul><li>如果你在 <code>foo.ts</code> 里重构 <code>Foo</code>，在 <code>bar.ts</code> 文件中，它将不会被重新命名；</li><li>如果你最终需要从 <code>foo.ts</code> 文件中导出更多有用的信息（在你的很多文件中都存在这种情景），那么你必须兼顾导入语法。</li></ul><p>由于这些原因，我推荐在导入时使用简单的 <code>export</code> 与解构的形式，如 <code>foo.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接着：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Foo&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面，我将会介绍更多的原因。</p><h2 id="可发现性差" tabindex="-1"><a class="header-anchor" href="#可发现性差" aria-hidden="true">#</a> 可发现性差</h2><p>默认导出的可发现性非常差，你不能智能的辨别一个模块它是否有默认导出。</p><p>在使用默认导出时，你什么也没有得到（可能它有默认导出，可能它没有）。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token comment">/* here */</span> <span class="token keyword">from</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>没有默认导出，你可以用以下方式获取智能提示：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token comment">/* here */</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="自动完成" tabindex="-1"><a class="header-anchor" href="#自动完成" aria-hidden="true">#</a> 自动完成</h2><p>不管你是否了解导出，你都可以在 <code>import { /* here */ } from &#39;./foo&#39;</code> 的 <code>here</code> 位置，来了解导出模块的信息。</p><h2 id="commonjs-互用" tabindex="-1"><a class="header-anchor" href="#commonjs-互用" aria-hidden="true">#</a> CommonJS 互用</h2><p>对于必须使用 <code>const { default } = require(&#39;module/foo&#39;)</code> 而不是 <code>const { Foo } = require(&#39;module/foo&#39;)</code> 的 CommonJS 的用户来说，这会是一个糟糕的体验。当你导入一个模块时，你很可能想重命名 <code>default</code> 作为导入的名字。</p><h2 id="防止拼写错误" tabindex="-1"><a class="header-anchor" href="#防止拼写错误" aria-hidden="true">#</a> 防止拼写错误</h2><p>当你在开发时使用 <code>import Foo from &#39;./foo&#39;</code> 时，并不会得到有关于拼写的任何错误，其他人可能会这么写 <code>import foo from &#39;./foo&#39;</code>；</p><h2 id="再次导出" tabindex="-1"><a class="header-anchor" href="#再次导出" aria-hidden="true">#</a> 再次导出</h2><p>再次导出是没必要的，但是在 <code>npm</code> 包的根文件 <code>index</code> 却是很常见。如：<code>import Foo from &#39;./foo&#39;；export { Foo }</code>（默认导出）VS <code>export * from &#39;./foo&#39;</code> （命名导出）。</p><h2 id="动态导入" tabindex="-1"><a class="header-anchor" href="#动态导入" aria-hidden="true">#</a> 动态导入</h2><p>在动态的 <code>import</code> 中，默认导出会以 <code>default</code> 的名字暴露自己，如：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> HighChart <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;https://code.highcharts.com/js/es-modules/masters/highcharts.src.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
HighChart<span class="token punctuation">.</span>default<span class="token punctuation">.</span><span class="token function">chart</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Notice \`.default\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,29),c=[t];function p(d,i){return a(),e("div",null,c)}const l=s(o,[["render",p],["__file","avoidExportDefault.html.vue"]]);export{l as default};