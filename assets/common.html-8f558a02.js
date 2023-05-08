import{_ as c,X as d,Y as p,Z as n,$ as e,a0 as a,a5 as t,a4 as o,E as i}from"./framework-d8252107.js";const l={},r=o('<h1 id="常见的-error" tabindex="-1"><a class="header-anchor" href="#常见的-error" aria-hidden="true">#</a> 常见的 Error</h1><p>在此章节中，我们学习在实际应用中将会遇到的常见错误代码。</p><h2 id="ts2304" tabindex="-1"><a class="header-anchor" href="#ts2304" aria-hidden="true">#</a> TS2304</h2><p>例子：</p><blockquote><p><code>Cannot find name ga</code>, <code>Cannot find name $</code>, <code>Cannot find module jquery</code></p></blockquote>',5),u=n("code",null,"declare",-1),m=n("h2",{id:"ts2307",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ts2307","aria-hidden":"true"},"#"),e(" TS2307")],-1),h=n("p",null,"例子：",-1),k=n("blockquote",null,[n("p",null,[n("code",null,"Cannot find module 'underscore'")])],-1),v=n("h2",{id:"ts1148",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ts1148","aria-hidden":"true"},"#"),e(" TS1148")],-1),_=n("p",null,"例子：",-1),b=n("blockquote",null,[n("p",null,[n("code",null,"Cannot compile modules unless the '--module' flag provided")])],-1),f=o(`<h2 id="捕获不能有类型注解的简短变量" tabindex="-1"><a class="header-anchor" href="#捕获不能有类型注解的简短变量" aria-hidden="true">#</a> 捕获不能有类型注解的简短变量</h2><p>例子：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">something</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 捕获不能有类型注解的简短变量</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 正在保护你免受 JavaScript 代码的侵害，取而代之，使用类型保护：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">something</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 捕获不能有类型注解的简短变量</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口-elementclass-不能同时扩展类型别名-component-和-component" tabindex="-1"><a class="header-anchor" href="#接口-elementclass-不能同时扩展类型别名-component-和-component" aria-hidden="true">#</a> 接口 <code>ElementClass</code> 不能同时扩展类型别名 <code>Component</code> 和 <code>Component</code></h2><p>当在编译上下文中同时含有两个 <code>react.d.ts</code>（<code>@types/react/index.d.ts</code>）会发生这种情况。</p><p>修复：</p><ul><li>删除 <code>node_modules</code> 和任何 <code>package-lock</code>（或者 <code>yarn lock</code>），然后再一次 <code>npm install</code>；</li><li>如果这不能工作，查找无效的模块（你所使用的所用用到了 <code>react.d.ts</code> 模块应该作为 <code>peerDependency</code> 而不是作为 <code>dependency</code> 使用）并且把这个报告给相关模块。</li></ul>`,9);function y(g,x){const s=i("RouterLink");return d(),p("div",null,[r,n("p",null,[e("你可能在使用第三方的库（如：google analytics），但是你并没有 "),u,e(" 的声明。在没有声明它们之前，TypeScript 试图避免错误和使用变量。因此在使用一些额外的库时，你需要明确的声明使用的任何变量（"),a(s,{to:"/views/Books/Front-end/TypescriptMaster/typings/ambient.html"},{default:t(()=>[e("如何修复它")]),_:1}),e("）。")]),m,h,k,n("p",null,[e("你可能把第三方的库作为模块（"),a(s,{to:"/views/Books/Front-end/TypescriptMaster/project/modules.html"},{default:t(()=>[e("移步模块")]),_:1}),e("）来使用，并且没有一个与之对应的环境声明文件（"),a(s,{to:"/views/Books/Front-end/TypescriptMaster/typings/ambient.html"},{default:t(()=>[e("更多声明文件信息")]),_:1}),e("）。")]),v,_,b,n("p",null,[e("请查看"),a(s,{to:"/views/Books/Front-end/TypescriptMaster/project/modules.html"},{default:t(()=>[e("模块")]),_:1}),e("章节")]),f])}const C=c(l,[["render",y],["__file","common.html.vue"]]);export{C as default};
