const e=JSON.parse(`{"key":"v-0a9daeb4","path":"/views/Books/Front-end/JustVue2/components/async-component.html","title":"异步组件","lang":"zh-CN","frontmatter":{"description":"异步组件 在我们平时的开发工作中，为了减少首屏代码体积，往往会把一些非首屏的组件设计成异步组件，按需加载。Vue 也原生支持了异步组件的能力，如下： Vue.component('async-example', function (resolve, reject) { // 这个特殊的 require 语法告诉 webpack // 自动将编译后的代码分割成不同的块， // 这些块将通过 Ajax 请求自动下载。 require(['./my-async-component'], resolve) })","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/JustVue2/components/async-component.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"异步组件"}],["meta",{"property":"og:description","content":"异步组件 在我们平时的开发工作中，为了减少首屏代码体积，往往会把一些非首屏的组件设计成异步组件，按需加载。Vue 也原生支持了异步组件的能力，如下： Vue.component('async-example', function (resolve, reject) { // 这个特殊的 require 语法告诉 webpack // 自动将编译后的代码分割成不同的块， // 这些块将通过 Ajax 请求自动下载。 require(['./my-async-component'], resolve) })"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"异步组件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"普通函数异步组件","slug":"普通函数异步组件","link":"#普通函数异步组件","children":[]},{"level":2,"title":"Promise 异步组件","slug":"promise-异步组件","link":"#promise-异步组件","children":[]},{"level":2,"title":"高级异步组件","slug":"高级异步组件","link":"#高级异步组件","children":[{"level":3,"title":"异步组件加载失败","slug":"异步组件加载失败","link":"#异步组件加载失败","children":[]},{"level":3,"title":"异步组件加载成功","slug":"异步组件加载成功","link":"#异步组件加载成功","children":[]},{"level":3,"title":"异步组件加载中","slug":"异步组件加载中","link":"#异步组件加载中","children":[]},{"level":3,"title":"异步组件加载超时","slug":"异步组件加载超时","link":"#异步组件加载超时","children":[]}]},{"level":2,"title":"异步组件 patch","slug":"异步组件-patch","link":"#异步组件-patch","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":9.97,"words":2992},"filePathRelative":"views/Books/Front-end/JustVue2/components/async-component.md","excerpt":"<h1> 异步组件</h1>\\n<p>在我们平时的开发工作中，为了减少首屏代码体积，往往会把一些非首屏的组件设计成异步组件，按需加载。Vue 也原生支持了异步组件的能力，如下：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>Vue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">component</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'async-example'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">resolve<span class=\\"token punctuation\\">,</span> reject</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n   <span class=\\"token comment\\">// 这个特殊的 require 语法告诉 webpack</span>\\n   <span class=\\"token comment\\">// 自动将编译后的代码分割成不同的块，</span>\\n   <span class=\\"token comment\\">// 这些块将通过 Ajax 请求自动下载。</span>\\n   <span class=\\"token function\\">require</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'./my-async-component'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> resolve<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
