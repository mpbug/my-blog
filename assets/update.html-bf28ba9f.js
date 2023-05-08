const n=JSON.parse(`{"key":"v-afdbadb0","path":"/views/Books/Front-end/JustVue2/data-driven/update.html","title":"update","lang":"zh-CN","frontmatter":{"description":"update Vue 的 _update 是实例的一个私有方法，它被调用的时机有 2 个，一个是首次渲染，一个是数据更新的时候；由于我们这一章节只分析首次渲染部分，数据更新部分会在之后分析响应式原理的时候涉及。_update 方法的作用是把 VNode 渲染成真实的 DOM，它的定义在 src/core/instance/lifecycle.js 中： Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) { const vm: Component = this const prevEl = vm.$el const prevVnode = vm._vnode const prevActiveInstance = activeInstance activeInstance = vm vm._vnode = vnode // Vue.prototype.__patch__ is injected in entry points // based on the rendering backend used. if (!prevVnode) { // initial render vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */) } else { // updates vm.$el = vm.__patch__(prevVnode, vnode) } activeInstance = prevActiveInstance // update __vue__ reference if (prevEl) { prevEl.__vue__ = null } if (vm.$el) { vm.$el.__vue__ = vm } // if parent is an HOC, update its $el as well if (vm.$vnode &amp;&amp; vm.$parent &amp;&amp; vm.$vnode === vm.$parent._vnode) { vm.$parent.$el = vm.$el } // updated hook is called by the scheduler to ensure that children are // updated in a parent's updated hook. }","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/JustVue2/data-driven/update.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"update"}],["meta",{"property":"og:description","content":"update Vue 的 _update 是实例的一个私有方法，它被调用的时机有 2 个，一个是首次渲染，一个是数据更新的时候；由于我们这一章节只分析首次渲染部分，数据更新部分会在之后分析响应式原理的时候涉及。_update 方法的作用是把 VNode 渲染成真实的 DOM，它的定义在 src/core/instance/lifecycle.js 中： Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) { const vm: Component = this const prevEl = vm.$el const prevVnode = vm._vnode const prevActiveInstance = activeInstance activeInstance = vm vm._vnode = vnode // Vue.prototype.__patch__ is injected in entry points // based on the rendering backend used. if (!prevVnode) { // initial render vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */) } else { // updates vm.$el = vm.__patch__(prevVnode, vnode) } activeInstance = prevActiveInstance // update __vue__ reference if (prevEl) { prevEl.__vue__ = null } if (vm.$el) { vm.$el.__vue__ = vm } // if parent is an HOC, update its $el as well if (vm.$vnode &amp;&amp; vm.$parent &amp;&amp; vm.$vnode === vm.$parent._vnode) { vm.$parent.$el = vm.$el } // updated hook is called by the scheduler to ensure that children are // updated in a parent's updated hook. }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"update\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":9.83,"words":2948},"filePathRelative":"views/Books/Front-end/JustVue2/data-driven/update.md","excerpt":"<h1> update</h1>\\n<p>Vue 的 <code>_update</code> 是实例的一个私有方法，它被调用的时机有 2 个，一个是首次渲染，一个是数据更新的时候；由于我们这一章节只分析首次渲染部分，数据更新部分会在之后分析响应式原理的时候涉及。<code>_update</code> 方法的作用是把 VNode 渲染成真实的 DOM，它的定义在 <code>src/core/instance/lifecycle.js</code> 中：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token class-name\\">Vue</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">_update</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token literal-property property\\">vnode</span><span class=\\"token operator\\">:</span> VNode<span class=\\"token punctuation\\">,</span> hydrating<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> boolean</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token literal-property property\\">vm</span><span class=\\"token operator\\">:</span> Component <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span>\\n  <span class=\\"token keyword\\">const</span> prevEl <span class=\\"token operator\\">=</span> vm<span class=\\"token punctuation\\">.</span>$el\\n  <span class=\\"token keyword\\">const</span> prevVnode <span class=\\"token operator\\">=</span> vm<span class=\\"token punctuation\\">.</span>_vnode\\n  <span class=\\"token keyword\\">const</span> prevActiveInstance <span class=\\"token operator\\">=</span> activeInstance\\n  activeInstance <span class=\\"token operator\\">=</span> vm\\n  vm<span class=\\"token punctuation\\">.</span>_vnode <span class=\\"token operator\\">=</span> vnode\\n  <span class=\\"token comment\\">// Vue.prototype.__patch__ is injected in entry points</span>\\n  <span class=\\"token comment\\">// based on the rendering backend used.</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>prevVnode<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// initial render</span>\\n    vm<span class=\\"token punctuation\\">.</span>$el <span class=\\"token operator\\">=</span> vm<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">__patch__</span><span class=\\"token punctuation\\">(</span>vm<span class=\\"token punctuation\\">.</span>$el<span class=\\"token punctuation\\">,</span> vnode<span class=\\"token punctuation\\">,</span> hydrating<span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">false</span> <span class=\\"token comment\\">/* removeOnly */</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// updates</span>\\n    vm<span class=\\"token punctuation\\">.</span>$el <span class=\\"token operator\\">=</span> vm<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">__patch__</span><span class=\\"token punctuation\\">(</span>prevVnode<span class=\\"token punctuation\\">,</span> vnode<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  activeInstance <span class=\\"token operator\\">=</span> prevActiveInstance\\n  <span class=\\"token comment\\">// update __vue__ reference</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>prevEl<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    prevEl<span class=\\"token punctuation\\">.</span>__vue__ <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>vm<span class=\\"token punctuation\\">.</span>$el<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    vm<span class=\\"token punctuation\\">.</span>$el<span class=\\"token punctuation\\">.</span>__vue__ <span class=\\"token operator\\">=</span> vm\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token comment\\">// if parent is an HOC, update its $el as well</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>vm<span class=\\"token punctuation\\">.</span>$vnode <span class=\\"token operator\\">&amp;&amp;</span> vm<span class=\\"token punctuation\\">.</span>$parent <span class=\\"token operator\\">&amp;&amp;</span> vm<span class=\\"token punctuation\\">.</span>$vnode <span class=\\"token operator\\">===</span> vm<span class=\\"token punctuation\\">.</span>$parent<span class=\\"token punctuation\\">.</span>_vnode<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    vm<span class=\\"token punctuation\\">.</span>$parent<span class=\\"token punctuation\\">.</span>$el <span class=\\"token operator\\">=</span> vm<span class=\\"token punctuation\\">.</span>$el\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token comment\\">// updated hook is called by the scheduler to ensure that children are</span>\\n  <span class=\\"token comment\\">// updated in a parent's updated hook.</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};