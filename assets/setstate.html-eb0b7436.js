const t=JSON.parse(`{"key":"v-2b59e299","path":"/views/Books/Front-end/JustReact/state/setstate.html","title":"","lang":"zh-CN","frontmatter":{"description":"当我们有了前面知识的铺垫，就很容易理解this.setState的工作流程。 流程概览 可以看到，this.setState内会调用this.updater.enqueueSetState方法。 Component.prototype.setState = function (partialState, callback) { if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) { { throw Error( \\"setState(...): takes an object of state variables to update or a function which returns an object of state variables.\\" ); } } this.updater.enqueueSetState(this, partialState, callback, 'setState'); };","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/JustReact/state/setstate.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:description","content":"当我们有了前面知识的铺垫，就很容易理解this.setState的工作流程。 流程概览 可以看到，this.setState内会调用this.updater.enqueueSetState方法。 Component.prototype.setState = function (partialState, callback) { if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) { { throw Error( \\"setState(...): takes an object of state variables to update or a function which returns an object of state variables.\\" ); } } this.updater.enqueueSetState(this, partialState, callback, 'setState'); };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"流程概览","slug":"流程概览","link":"#流程概览","children":[]},{"level":2,"title":"this.forceUpdate","slug":"this-forceupdate","link":"#this-forceupdate","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":1.89,"words":568},"filePathRelative":"views/Books/Front-end/JustReact/state/setstate.md","excerpt":"<p>当我们有了前面知识的铺垫，就很容易理解<code>this.setState</code>的工作流程。</p>\\n<h2> 流程概览</h2>\\n<p>可以看到，<code>this.setState</code>内会调用<code>this.updater.enqueueSetState</code>方法。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token class-name\\">Component</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">setState</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">partialState<span class=\\"token punctuation\\">,</span> callback</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> partialState <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'object'</span> <span class=\\"token operator\\">||</span> <span class=\\"token keyword\\">typeof</span> partialState <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'function'</span> <span class=\\"token operator\\">||</span> partialState <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">throw</span> <span class=\\"token function\\">Error</span><span class=\\"token punctuation\\">(</span> <span class=\\"token string\\">\\"setState(...): takes an object of state variables to update or a function which returns an object of state variables.\\"</span> <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>updater<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">enqueueSetState</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">,</span> partialState<span class=\\"token punctuation\\">,</span> callback<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'setState'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
