const n=JSON.parse(`{"key":"v-3bb65616","path":"/views/Books/Front-end/TypescriptMaster/tips/singletonPatern.html","title":"单例模式","lang":"zh-CN","frontmatter":{"description":"单例模式 传统的单例模式可以用来解决所有代码必须写到 class 中的问题： class Singleton { private static instance: Singleton; private constructor() { // .. } public static getInstance() { if (!Singleton.instance) { Singleton.instance = new Singleton(); } return Singleton.instance; } someMethod() {} } let someThing = new Singleton(); // Error: constructor of 'singleton' is private let instacne = Singleton.getInstance(); // do some thing with the instance","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/TypescriptMaster/tips/singletonPatern.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"单例模式"}],["meta",{"property":"og:description","content":"单例模式 传统的单例模式可以用来解决所有代码必须写到 class 中的问题： class Singleton { private static instance: Singleton; private constructor() { // .. } public static getInstance() { if (!Singleton.instance) { Singleton.instance = new Singleton(); } return Singleton.instance; } someMethod() {} } let someThing = new Singleton(); // Error: constructor of 'singleton' is private let instacne = Singleton.getInstance(); // do some thing with the instance"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单例模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.57,"words":172},"filePathRelative":"views/Books/Front-end/TypescriptMaster/tips/singletonPatern.md","excerpt":"<h1> 单例模式</h1>\\n<p>传统的单例模式可以用来解决所有代码必须写到 <code>class</code> 中的问题：</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Singleton</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">static</span> instance<span class=\\"token operator\\">:</span> Singleton<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">private</span> <span class=\\"token function\\">constructor</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// ..</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token function\\">getInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>Singleton<span class=\\"token punctuation\\">.</span>instance<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      Singleton<span class=\\"token punctuation\\">.</span>instance <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Singleton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">return</span> Singleton<span class=\\"token punctuation\\">.</span>instance<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token function\\">someMethod</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">let</span> someThing <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Singleton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// Error: constructor of 'singleton' is private</span>\\n\\n<span class=\\"token keyword\\">let</span> instacne <span class=\\"token operator\\">=</span> Singleton<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// do some thing with the instance</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};