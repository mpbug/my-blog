const n=JSON.parse('{"key":"v-81ef9ff4","path":"/views/Books/Front-end/JustVue2/data-driven/create-element.html","title":"createElement","lang":"zh-CN","frontmatter":{"description":"createElement Vue.js 利用 createElement 方法创建 VNode，它定义在 src/core/vdom/create-element.js 中： // wrapper function for providing a more flexible interface // without getting yelled at by flow export function createElement ( context: Component, tag: any, data: any, children: any, normalizationType: any, alwaysNormalize: boolean ): VNode | Array&lt;VNode&gt; { if (Array.isArray(data) || isPrimitive(data)) { normalizationType = children children = data data = undefined } if (isTrue(alwaysNormalize)) { normalizationType = ALWAYS_NORMALIZE } return _createElement(context, tag, data, children, normalizationType) }","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/JustVue2/data-driven/create-element.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"createElement"}],["meta",{"property":"og:description","content":"createElement Vue.js 利用 createElement 方法创建 VNode，它定义在 src/core/vdom/create-element.js 中： // wrapper function for providing a more flexible interface // without getting yelled at by flow export function createElement ( context: Component, tag: any, data: any, children: any, normalizationType: any, alwaysNormalize: boolean ): VNode | Array&lt;VNode&gt; { if (Array.isArray(data) || isPrimitive(data)) { normalizationType = children children = data data = undefined } if (isTrue(alwaysNormalize)) { normalizationType = ALWAYS_NORMALIZE } return _createElement(context, tag, data, children, normalizationType) }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"createElement\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"children 的规范化","slug":"children-的规范化","link":"#children-的规范化","children":[]},{"level":2,"title":"VNode 的创建","slug":"vnode-的创建","link":"#vnode-的创建","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":6.31,"words":1892},"filePathRelative":"views/Books/Front-end/JustVue2/data-driven/create-element.md","excerpt":"<h1> createElement</h1>\\n<p>Vue.js 利用 createElement 方法创建 VNode，它定义在 <code>src/core/vdom/create-element.js</code> 中：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// wrapper function for providing a more flexible interface</span>\\n<span class=\\"token comment\\">// without getting yelled at by flow</span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">createElement</span> <span class=\\"token punctuation\\">(</span>\\n  <span class=\\"token parameter\\"><span class=\\"token literal-property property\\">context</span><span class=\\"token operator\\">:</span> Component<span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">tag</span><span class=\\"token operator\\">:</span> any<span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">data</span><span class=\\"token operator\\">:</span> any<span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">children</span><span class=\\"token operator\\">:</span> any<span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">normalizationType</span><span class=\\"token operator\\">:</span> any<span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">alwaysNormalize</span><span class=\\"token operator\\">:</span> boolean</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> VNode <span class=\\"token operator\\">|</span> Array<span class=\\"token operator\\">&lt;</span>VNode<span class=\\"token operator\\">&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>Array<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">isArray</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">||</span> <span class=\\"token function\\">isPrimitive</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    normalizationType <span class=\\"token operator\\">=</span> children\\n    children <span class=\\"token operator\\">=</span> data\\n    data <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">undefined</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token function\\">isTrue</span><span class=\\"token punctuation\\">(</span>alwaysNormalize<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    normalizationType <span class=\\"token operator\\">=</span> <span class=\\"token constant\\">ALWAYS_NORMALIZE</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">_createElement</span><span class=\\"token punctuation\\">(</span>context<span class=\\"token punctuation\\">,</span> tag<span class=\\"token punctuation\\">,</span> data<span class=\\"token punctuation\\">,</span> children<span class=\\"token punctuation\\">,</span> normalizationType<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};