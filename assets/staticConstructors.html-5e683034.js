const t=JSON.parse('{"key":"v-95124668","path":"/views/Books/Front-end/TypescriptMaster/tips/staticConstructors.html","title":"TypeScript 中的静态构造函数","lang":"zh-CN","frontmatter":{"description":"TypeScript 中的静态构造函数 TypeScript 中的 class （JavaScript 中的 class）没有静态构造函数的功能，但是你可以通过调用它自己来获取相同的效果： class MyClass { static initalize() { // } } MyClass.initalize();","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/TypescriptMaster/tips/staticConstructors.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"TypeScript 中的静态构造函数"}],["meta",{"property":"og:description","content":"TypeScript 中的静态构造函数 TypeScript 中的 class （JavaScript 中的 class）没有静态构造函数的功能，但是你可以通过调用它自己来获取相同的效果： class MyClass { static initalize() { // } } MyClass.initalize();"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TypeScript 中的静态构造函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.18,"words":55},"filePathRelative":"views/Books/Front-end/TypescriptMaster/tips/staticConstructors.md","excerpt":"<h1> TypeScript 中的静态构造函数</h1>\\n<p>TypeScript 中的 <code>class</code> （JavaScript 中的 <code>class</code>）没有静态构造函数的功能，但是你可以通过调用它自己来获取相同的效果：</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">MyClass</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">static</span> <span class=\\"token function\\">initalize</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">//</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\nMyClass<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">initalize</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
