const n=JSON.parse(`{"key":"v-1cf3483d","path":"/views/Books/Front-end/JustVue2/vue-router/install.html","title":"路由注册","lang":"zh-CN","frontmatter":{"description":"路由注册 Vue 从它的设计上就是一个渐进式 JavaScript 框架，它本身的核心是解决视图渲染的问题，其它的能力就通过插件的方式来解决。Vue-Router 就是官方维护的路由插件，在介绍它的注册实现之前，我们先来分析一下 Vue 通用的插件注册原理。 Vue.use Vue 提供了 Vue.use 的全局 API 来注册这些插件，所以我们先来分析一下它的实现原理，定义在 vue/src/core/global-api/use.js 中： export function initUse (Vue: GlobalAPI) { Vue.use = function (plugin: Function | Object) { const installedPlugins = (this._installedPlugins || (this._installedPlugins = [])) if (installedPlugins.indexOf(plugin) &gt; -1) { return this } const args = toArray(arguments, 1) args.unshift(this) if (typeof plugin.install === 'function') { plugin.install.apply(plugin, args) } else if (typeof plugin === 'function') { plugin.apply(null, args) } installedPlugins.push(plugin) return this } }","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/JustVue2/vue-router/install.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"路由注册"}],["meta",{"property":"og:description","content":"路由注册 Vue 从它的设计上就是一个渐进式 JavaScript 框架，它本身的核心是解决视图渲染的问题，其它的能力就通过插件的方式来解决。Vue-Router 就是官方维护的路由插件，在介绍它的注册实现之前，我们先来分析一下 Vue 通用的插件注册原理。 Vue.use Vue 提供了 Vue.use 的全局 API 来注册这些插件，所以我们先来分析一下它的实现原理，定义在 vue/src/core/global-api/use.js 中： export function initUse (Vue: GlobalAPI) { Vue.use = function (plugin: Function | Object) { const installedPlugins = (this._installedPlugins || (this._installedPlugins = [])) if (installedPlugins.indexOf(plugin) &gt; -1) { return this } const args = toArray(arguments, 1) args.unshift(this) if (typeof plugin.install === 'function') { plugin.install.apply(plugin, args) } else if (typeof plugin === 'function') { plugin.apply(null, args) } installedPlugins.push(plugin) return this } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"路由注册\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"Vue.use","slug":"vue-use","link":"#vue-use","children":[]},{"level":2,"title":"路由安装","slug":"路由安装","link":"#路由安装","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":4.06,"words":1219},"filePathRelative":"views/Books/Front-end/JustVue2/vue-router/install.md","excerpt":"<h1> 路由注册</h1>\\n<p>Vue 从它的设计上就是一个渐进式 JavaScript 框架，它本身的核心是解决视图渲染的问题，其它的能力就通过插件的方式来解决。Vue-Router 就是官方维护的路由插件，在介绍它的注册实现之前，我们先来分析一下 Vue 通用的插件注册原理。</p>\\n<h2> <code>Vue.use</code></h2>\\n<p>Vue 提供了 <code>Vue.use</code> 的全局 API 来注册这些插件，所以我们先来分析一下它的实现原理，定义在 <code>vue/src/core/global-api/use.js</code> 中：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">initUse</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token literal-property property\\">Vue</span><span class=\\"token operator\\">:</span> GlobalAPI</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  Vue<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">use</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token literal-property property\\">plugin</span><span class=\\"token operator\\">:</span> Function <span class=\\"token operator\\">|</span> Object</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">const</span> installedPlugins <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_installedPlugins <span class=\\"token operator\\">||</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_installedPlugins <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>installedPlugins<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">indexOf</span><span class=\\"token punctuation\\">(</span>plugin<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">const</span> args <span class=\\"token operator\\">=</span> <span class=\\"token function\\">toArray</span><span class=\\"token punctuation\\">(</span>arguments<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n    args<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">unshift</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> plugin<span class=\\"token punctuation\\">.</span>install <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'function'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      plugin<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">install</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">apply</span><span class=\\"token punctuation\\">(</span>plugin<span class=\\"token punctuation\\">,</span> args<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> plugin <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'function'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">plugin</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">apply</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">,</span> args<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    installedPlugins<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>plugin<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
