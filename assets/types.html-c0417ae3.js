import{_ as a,X as t,Y as o,Z as s,$ as e,a0 as p,a4 as c,E as d}from"./framework-d8252107.js";const i={},r=s("h1",{id:"types",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#types","aria-hidden":"true"},"#"),e(" @types")],-1),l={href:"https://github.com/borisyankov/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"},u=c(`<p>这意味着，你可以非常高效地使用这些库，而无须在单独的窗口打开相应文档以确保输入的正确性。</p><h2 id="使用-types" tabindex="-1"><a class="header-anchor" href="#使用-types" aria-hidden="true">#</a> 使用 <code>@types</code></h2><p>你可以通过 <code>npm</code> 来安装使用 <code>@types</code>，例如为 <code>jquery</code> 添加声明文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @types/jquery --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>@types</code> 支持全局和模块类型定义。</p><h3 id="全局-types" tabindex="-1"><a class="header-anchor" href="#全局-types" aria-hidden="true">#</a> 全局 <code>@types</code></h3><p>默认情况下，TypeScript 会自动包含支持全局使用的任何声明定义。例如，对于 jquery，你应该能够在项目中开始全局使用 <code>$</code>。</p><h3 id="模块-types" tabindex="-1"><a class="header-anchor" href="#模块-types" aria-hidden="true">#</a> 模块 <code>@types</code></h3><p>安装完之后，不需要特别的配置，你就可以像使用模块一样使用它：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> $ <span class="token keyword">from</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 现在你可以此模块中任意使用$了 :)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制全局" tabindex="-1"><a class="header-anchor" href="#控制全局" aria-hidden="true">#</a> 控制全局</h2><p>可以看出，对于某些团队而言，拥有允许全局使用的定义是一个问题。因此，你可以通过配置 <code>tsconfig.json</code> 的 <code>compilerOptions.types</code> 选项，引入有意义的类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;types&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;jquery&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上例所示，通过配置 <code>compilerOptions.types: [ &quot;jquery&quot; ]</code> 后，只允许使用 <code>jquery</code> 的 <code>@types</code> 包，即使这个人安装了另一个声明文件，比如 <code>npm install @types/node</code>，它的全局变量（例如 <code>process</code>）也不会泄漏到你的代码中，直到你将它们添加到 tsconfig.json 类型选项。</p>`,14);function y(h,v){const n=d("ExternalLinkIcon");return t(),o("div",null,[r,s("p",null,[e("毫无疑问，"),s("a",l,[e("DefinitelyTyped"),p(n)]),e(" 是 TypeScript 最大的优势之一，社区已经记录了 90% 的顶级 JavaScript 库。")]),u])}const k=a(i,[["render",y],["__file","types.html.vue"]]);export{k as default};
