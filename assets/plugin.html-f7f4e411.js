const n=JSON.parse('{"key":"v-3ecee66e","path":"/views/Books/Front-end/JustVue2/vuex/plugin.html","title":"插件","lang":"zh-CN","frontmatter":{"description":"插件 Vuex 除了提供的存取能力，还提供了一种插件能力，让我们可以监控 store 的变化过程来做一些事情。 Vuex 的 store 接受 plugins 选项，我们在实例化 Store 的时候可以传入插件，它是一个数组，然后在执行 Store 构造函数的时候，会执行这些插件： const { plugins = [], strict = false } = options // apply plugins plugins.forEach(plugin =&gt; plugin(this))","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/JustVue2/vuex/plugin.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"插件"}],["meta",{"property":"og:description","content":"插件 Vuex 除了提供的存取能力，还提供了一种插件能力，让我们可以监控 store 的变化过程来做一些事情。 Vuex 的 store 接受 plugins 选项，我们在实例化 Store 的时候可以传入插件，它是一个数组，然后在执行 Store 构造函数的时候，会执行这些插件： const { plugins = [], strict = false } = options // apply plugins plugins.forEach(plugin =&gt; plugin(this))"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"Logger 插件","slug":"logger-插件","link":"#logger-插件","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":2.32,"words":697},"filePathRelative":"views/Books/Front-end/JustVue2/vuex/plugin.md","excerpt":"<h1> 插件</h1>\\n<p>Vuex 除了提供的存取能力，还提供了一种插件能力，让我们可以监控 <code>store</code> 的变化过程来做一些事情。</p>\\n<p>Vuex 的 <code>store</code> 接受 <code>plugins</code> 选项，我们在实例化 <code>Store</code> 的时候可以传入插件，它是一个数组，然后在执行 <code>Store</code> 构造函数的时候，会执行这些插件：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">{</span>\\n  plugins <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n  strict <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span>\\n<span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> options\\n<span class=\\"token comment\\">// apply plugins</span>\\nplugins<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">plugin</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">plugin</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};