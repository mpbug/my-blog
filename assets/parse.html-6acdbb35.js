const t=JSON.parse('{"key":"v-32656982","path":"/views/Books/Front-end/JustVue2/compile/parse.html","title":"parse","lang":"zh-CN","frontmatter":{"description":"parse 编译过程首先就是对模板做解析，生成 AST，它是一种抽象语法树，是对源代码的抽象语法结构的树状表现形式。在很多编译技术中，如 babel 编译 ES6 的代码都会先生成 AST。 这个过程是比较复杂的，它会用到大量正则表达式对字符串解析，如果对正则不是很了解，建议先去补习正则表达式的知识。为了直观地演示 parse 的过程，我们先来看一个例子： &lt;ul :class=\\"bindCls\\" class=\\"list\\" v-if=\\"isShow\\"&gt; &lt;li v-for=\\"(item,index) in data\\" @click=\\"clickItem(index)\\"&gt;{{item}}:{{index}}&lt;/li&gt; &lt;/ul&gt;","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/JustVue2/compile/parse.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"parse"}],["meta",{"property":"og:description","content":"parse 编译过程首先就是对模板做解析，生成 AST，它是一种抽象语法树，是对源代码的抽象语法结构的树状表现形式。在很多编译技术中，如 babel 编译 ES6 的代码都会先生成 AST。 这个过程是比较复杂的，它会用到大量正则表达式对字符串解析，如果对正则不是很了解，建议先去补习正则表达式的知识。为了直观地演示 parse 的过程，我们先来看一个例子： &lt;ul :class=\\"bindCls\\" class=\\"list\\" v-if=\\"isShow\\"&gt; &lt;li v-for=\\"(item,index) in data\\" @click=\\"clickItem(index)\\"&gt;{{item}}:{{index}}&lt;/li&gt; &lt;/ul&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"parse\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"整体流程","slug":"整体流程","link":"#整体流程","children":[{"level":3,"title":"从 options 中获取方法和配置","slug":"从-options-中获取方法和配置","link":"#从-options-中获取方法和配置","children":[]},{"level":3,"title":"解析 HTML 模板","slug":"解析-html-模板","link":"#解析-html-模板","children":[]},{"level":3,"title":"处理开始标签","slug":"处理开始标签","link":"#处理开始标签","children":[]},{"level":3,"title":"处理闭合标签","slug":"处理闭合标签","link":"#处理闭合标签","children":[]},{"level":3,"title":"处理文本内容","slug":"处理文本内容","link":"#处理文本内容","children":[]}]},{"level":2,"title":"流程图","slug":"流程图","link":"#流程图","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":14.63,"words":4390},"filePathRelative":"views/Books/Front-end/JustVue2/compile/parse.md","excerpt":"<h1> parse</h1>\\n<p>编译过程首先就是对模板做解析，生成 AST，它是一种抽象语法树，是对源代码的抽象语法结构的树状表现形式。在很多编译技术中，如 babel 编译 ES6 的代码都会先生成 AST。</p>\\n<p>这个过程是比较复杂的，它会用到大量正则表达式对字符串解析，如果对正则不是很了解，建议先去补习正则表达式的知识。为了直观地演示 <code>parse</code> 的过程，我们先来看一个例子：</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ul</span> <span class=\\"token attr-name\\">:class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>bindCls<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>list<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-if</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>isShow<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span> <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>(item,index) in data<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">@click</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>clickItem(index)<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>{{item}}:{{index}}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ul</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
