const n=JSON.parse(`{"key":"v-abc2cf2c","path":"/views/Books/Front-end/JustVue2/reactive/component-update.html","title":"组件更新","lang":"zh-CN","frontmatter":{"description":"组件更新 在组件化章节，我们介绍了 Vue 的组件化实现过程，不过我们只讲了 Vue 组件的创建过程，并没有涉及到组件数据发生变化，更新组件的过程。而通过我们这一章对数据响应式原理的分析，了解到当数据发生变化的时候，会触发渲染 watcher 的回调函数，进而执行组件的更新过程，接下来我们来详细分析这一过程。 updateComponent = () =&gt; { vm._update(vm._render(), hydrating) } new Watcher(vm, updateComponent, noop, { before () { if (vm._isMounted) { callHook(vm, 'beforeUpdate') } } }, true /* isRenderWatcher */)","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/JustVue2/reactive/component-update.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"组件更新"}],["meta",{"property":"og:description","content":"组件更新 在组件化章节，我们介绍了 Vue 的组件化实现过程，不过我们只讲了 Vue 组件的创建过程，并没有涉及到组件数据发生变化，更新组件的过程。而通过我们这一章对数据响应式原理的分析，了解到当数据发生变化的时候，会触发渲染 watcher 的回调函数，进而执行组件的更新过程，接下来我们来详细分析这一过程。 updateComponent = () =&gt; { vm._update(vm._render(), hydrating) } new Watcher(vm, updateComponent, noop, { before () { if (vm._isMounted) { callHook(vm, 'beforeUpdate') } } }, true /* isRenderWatcher */)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组件更新\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"新旧节点不同","slug":"新旧节点不同","link":"#新旧节点不同","children":[]},{"level":2,"title":"新旧节点相同","slug":"新旧节点相同","link":"#新旧节点相同","children":[]},{"level":2,"title":"updateChildren","slug":"updatechildren","link":"#updatechildren","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":10.86,"words":3258},"filePathRelative":"views/Books/Front-end/JustVue2/reactive/component-update.md","excerpt":"<h1> 组件更新</h1>\\n<p>在组件化章节，我们介绍了 Vue 的组件化实现过程，不过我们只讲了 Vue 组件的创建过程，并没有涉及到组件数据发生变化，更新组件的过程。而通过我们这一章对数据响应式原理的分析，了解到当数据发生变化的时候，会触发渲染 <code>watcher</code> 的回调函数，进而执行组件的更新过程，接下来我们来详细分析这一过程。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token function-variable function\\">updateComponent</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  vm<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">_update</span><span class=\\"token punctuation\\">(</span>vm<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">_render</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> hydrating<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Watcher</span><span class=\\"token punctuation\\">(</span>vm<span class=\\"token punctuation\\">,</span> updateComponent<span class=\\"token punctuation\\">,</span> noop<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">before</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>vm<span class=\\"token punctuation\\">.</span>_isMounted<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">callHook</span><span class=\\"token punctuation\\">(</span>vm<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'beforeUpdate'</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">true</span> <span class=\\"token comment\\">/* isRenderWatcher */</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};