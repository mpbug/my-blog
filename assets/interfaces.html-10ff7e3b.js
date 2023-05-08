const n=JSON.parse('{"key":"v-3c90c98a","path":"/views/Books/Front-end/TypescriptMaster/typings/interfaces.html","title":"接口","lang":"zh-CN","frontmatter":{"description":"接口 接口运行时的影响为 0。在 TypeScript 接口中有很多方式来声明变量的结构。 下面两个是等效的声明, 示例 A 使用内联注解，示例 B 使用接口形式： // 示例 A declare const myPoint: { x: number; y: number }; // 示例 B interface Point { x: number; y: number; } declare const myPoint: Point;","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/TypescriptMaster/typings/interfaces.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"接口"}],["meta",{"property":"og:description","content":"接口 接口运行时的影响为 0。在 TypeScript 接口中有很多方式来声明变量的结构。 下面两个是等效的声明, 示例 A 使用内联注解，示例 B 使用接口形式： // 示例 A declare const myPoint: { x: number; y: number }; // 示例 B interface Point { x: number; y: number; } declare const myPoint: Point;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"类可以实现接口","slug":"类可以实现接口","link":"#类可以实现接口","children":[]},{"level":2,"title":"注意","slug":"注意","link":"#注意","children":[{"level":3,"title":"并非每个接口都是很容易实现的","slug":"并非每个接口都是很容易实现的","link":"#并非每个接口都是很容易实现的","children":[]}]}],"git":{},"readingTime":{"minutes":1.74,"words":521},"filePathRelative":"views/Books/Front-end/TypescriptMaster/typings/interfaces.md","excerpt":"<h1> 接口</h1>\\n<p>接口运行时的影响为 0。在 TypeScript 接口中有很多方式来声明变量的结构。</p>\\n<p>下面两个是等效的声明, 示例 A 使用内联注解，示例 B 使用接口形式：</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token comment\\">// 示例 A</span>\\n<span class=\\"token keyword\\">declare</span> <span class=\\"token keyword\\">const</span> myPoint<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span> x<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span> y<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 示例 B</span>\\n<span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Point</span> <span class=\\"token punctuation\\">{</span>\\n  x<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span>\\n  y<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">declare</span> <span class=\\"token keyword\\">const</span> myPoint<span class=\\"token operator\\">:</span> Point<span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};