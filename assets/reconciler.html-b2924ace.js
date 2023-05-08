const n=JSON.parse('{"key":"v-2d573122","path":"/views/Books/Front-end/JustReact/process/reconciler.html","title":"","lang":"zh-CN","frontmatter":{"description":"本章我们会讲解Fiber节点是如何被创建并构建Fiber树的。 render阶段开始于performSyncWorkOnRoot或performConcurrentWorkOnRoot方法的调用。这取决于本次更新是同步更新还是异步更新。 我们现在还不需要学习这两个方法，只需要知道在这两个方法中会调用如下两个方法： // performSyncWorkOnRoot会调用该方法 function workLoopSync() { while (workInProgress !== null) { performUnitOfWork(workInProgress); } } // performConcurrentWorkOnRoot会调用该方法 function workLoopConcurrent() { while (workInProgress !== null &amp;&amp; !shouldYield()) { performUnitOfWork(workInProgress); } }","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/JustReact/process/reconciler.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:description","content":"本章我们会讲解Fiber节点是如何被创建并构建Fiber树的。 render阶段开始于performSyncWorkOnRoot或performConcurrentWorkOnRoot方法的调用。这取决于本次更新是同步更新还是异步更新。 我们现在还不需要学习这两个方法，只需要知道在这两个方法中会调用如下两个方法： // performSyncWorkOnRoot会调用该方法 function workLoopSync() { while (workInProgress !== null) { performUnitOfWork(workInProgress); } } // performConcurrentWorkOnRoot会调用该方法 function workLoopConcurrent() { while (workInProgress !== null &amp;&amp; !shouldYield()) { performUnitOfWork(workInProgress); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"“递”阶段","slug":"递-阶段","link":"#递-阶段","children":[]},{"level":2,"title":"“归”阶段","slug":"归-阶段","link":"#归-阶段","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{},"readingTime":{"minutes":2.78,"words":835},"filePathRelative":"views/Books/Front-end/JustReact/process/reconciler.md","excerpt":"<p>本章我们会讲解<code>Fiber节点</code>是如何被创建并构建<code>Fiber树</code>的。</p>\\n<p><code>render阶段</code>开始于<code>performSyncWorkOnRoot</code>或<code>performConcurrentWorkOnRoot</code>方法的调用。这取决于本次更新是同步更新还是异步更新。</p>\\n<p>我们现在还不需要学习这两个方法，只需要知道在这两个方法中会调用如下两个方法：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// performSyncWorkOnRoot会调用该方法</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">workLoopSync</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>workInProgress <span class=\\"token operator\\">!==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">performUnitOfWork</span><span class=\\"token punctuation\\">(</span>workInProgress<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// performConcurrentWorkOnRoot会调用该方法</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">workLoopConcurrent</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>workInProgress <span class=\\"token operator\\">!==</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token operator\\">!</span><span class=\\"token function\\">shouldYield</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">performUnitOfWork</span><span class=\\"token punctuation\\">(</span>workInProgress<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
