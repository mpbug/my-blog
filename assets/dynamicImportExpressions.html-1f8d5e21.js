import{_ as o,X as e,Y as p,Z as n,$ as s,a0 as t,a4 as c,E as i}from"./framework-d8252107.js";const l={},r=n("h1",{id:"动态导入表达式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#动态导入表达式","aria-hidden":"true"},"#"),s(" 动态导入表达式")],-1),u={href:"https://github.com/tc39/proposal-dynamic-import",target:"_blank",rel:"noopener noreferrer"},d=n("strong",null,"webpack",-1),k={href:"https://webpack.js.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"Code Splitting",-1),v={href:"https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#dynamic-import-expressions",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"tsconfig.json",-1),g=c(`<p>webpack 实现代码分割的方式有两种：使用 <code>import()</code> （首选，ECMAScript 的提案）和 <code>require.ensure()</code> （最后考虑，webpack 具体实现）。因此，我们期望 TypeScript 的输出是保留 <code>import()</code> 语句，而不是将其转化为其他任何代码。</p><p>让我们来看一个例子，在这个例子中，我们演示了如何配置 webpack 和 TypeScript 2.4 +。</p><p>在下面的代码中，我希望懒加载 <code>moment</code> 库，同时我也希望使用代码分割的功能，这意味 <code>moment</code> 会被分割到一个单独的 JavaScript 文件，当它被使用时，会被异步加载。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;momentjs&quot; */</span> <span class="token string">&#39;moment&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>moment <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 懒加载的模块拥有所有的类型，并且能够按期工作</span>
    <span class="token comment">// 类型检查会工作，代码引用也会工作  :100:</span>
    <span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TypeScript &gt;= 2.4.0 Dynamic Import Expression:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>err <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Failed to load moment&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是 <code>tsconfig.json</code> 的配置文件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;dom&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;scripthost&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;es2015.promise&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/js&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;./node_modules/@types&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;react-dom&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),q={class:"hint-container danger"},y=n("p",{class:"hint-container-title"},"重要的提示",-1),_=n("li",null,[s("使用 "),n("code",null,'"module": "esnext"'),s(" 选项：TypeScript 保留 "),n("code",null,"import()"),s(" 语句，该语句用于 Webpack Code Splitting。")],-1),h={href:"https://blog.josequinto.com/2017/06/29/dynamic-import-expressions-and-webpack-code-splitting-integration-with-typescript-2-4/",target:"_blank",rel:"noopener noreferrer"};function f(x,S){const a=i("ExternalLinkIcon");return e(),p("div",null,[r,n("p",null,[s("动态导入表达式是 ECMAScript 的一个新功能，它允许你在程序的任意位置异步加载一个模块，TC39 JavaScript 委员会有一个提案，目前处于第四阶段，它被称为 "),n("a",u,[s("import() proposal for JavaScript"),t(a)]),s("。")]),n("p",null,[s("此外，"),d,s(" bundler 有一个 "),n("a",k,[m,t(a)]),s(" 功能，它能允许你将代码拆分为许多块，这些块在将来可被异步下载。因此，你可以在程序中首先提供一个最小的程序启动包，并在将来异步加载其他模块。")]),n("p",null,[s("这很自然就会让人想到（如果我们工作在 webpack dev 的工作流程中）"),n("a",v,[s("TypeScript 2.4 dynamic import expressions"),t(a)]),s(" 将会把你最终生成的 JavaScript 代码自动分割成很多块。但是这似乎并不容易实现，因为它依赖于我们正在使用的 "),b,s(" 配置文件。")]),g,n("div",q,[y,n("ul",null,[_,n("li",null,[s("进一步了解有关信息，推荐阅读这篇文章："),n("a",h,[s("Dynamic Import Expressions and webpack 2 Code Splitting integration with TypeScript 2.4."),t(a)])])])])])}const j=o(l,[["render",f],["__file","dynamicImportExpressions.html.vue"]]);export{j as default};
