const e=JSON.parse('{"key":"v-17766cf6","path":"/views/Books/Front-end/TypescriptMaster/compiler/ast.html","title":"抽象语法树","lang":"zh-CN","frontmatter":{"description":"抽象语法树 Node 节点 节点是抽象语法树（AST） 的基本构造块。语法上，通常 Node 表示非末端（non-terminals）节点。但是，有些末端节点，如：标识符和字面量也会保留在树中。 AST 节点文档由两个关键部分构成。一是节点的 SyntaxKind 枚举，用于标识 AST 中的类型。二是其接口，即实例化 AST 时节点提供的 API。 这里是 interface Node 的一些关键成员： TextRange 标识该节点在源文件中的起止位置。 parent?: Node 当前节点（在 AST 中）的父节点","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/TypescriptMaster/compiler/ast.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"抽象语法树"}],["meta",{"property":"og:description","content":"抽象语法树 Node 节点 节点是抽象语法树（AST） 的基本构造块。语法上，通常 Node 表示非末端（non-terminals）节点。但是，有些末端节点，如：标识符和字面量也会保留在树中。 AST 节点文档由两个关键部分构成。一是节点的 SyntaxKind 枚举，用于标识 AST 中的类型。二是其接口，即实例化 AST 时节点提供的 API。 这里是 interface Node 的一些关键成员： TextRange 标识该节点在源文件中的起止位置。 parent?: Node 当前节点（在 AST 中）的父节点"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"抽象语法树\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":3,"title":"Node 节点","slug":"node-节点","link":"#node-节点","children":[]},{"level":3,"title":"SourceFile","slug":"sourcefile","link":"#sourcefile","children":[]},{"level":2,"title":"AST 技巧：访问子节点","slug":"ast-技巧-访问子节点","link":"#ast-技巧-访问子节点","children":[]},{"level":2,"title":"AST 技巧：SyntaxKind 枚举","slug":"ast-技巧-syntaxkind-枚举","link":"#ast-技巧-syntaxkind-枚举","children":[]},{"level":2,"title":"AST 杂项","slug":"ast-杂项","link":"#ast-杂项","children":[{"level":3,"title":"杂项的所有权","slug":"杂项的所有权","link":"#杂项的所有权","children":[]},{"level":3,"title":"杂项 API","slug":"杂项-api","link":"#杂项-api","children":[]},{"level":3,"title":"Token Start 和 Full Start 位置","slug":"token-start-和-full-start-位置","link":"#token-start-和-full-start-位置","children":[]}]}],"git":{},"readingTime":{"minutes":3.78,"words":1135},"filePathRelative":"views/Books/Front-end/TypescriptMaster/compiler/ast.md","excerpt":"<h1> 抽象语法树</h1>\\n<h3> Node 节点</h3>\\n<p>节点是抽象语法树（AST） 的基本构造块。语法上，通常 <code>Node</code> 表示非末端（non-terminals）节点。但是，有些末端节点，如：标识符和字面量也会保留在树中。</p>\\n<p>AST 节点文档由两个关键部分构成。一是节点的 <code>SyntaxKind</code> 枚举，用于标识 AST 中的类型。二是其接口，即实例化 AST 时节点提供的 API。</p>\\n<p>这里是 <code>interface Node</code> 的一些关键成员：</p>\\n<ul>\\n<li><code>TextRange</code> 标识该节点在源文件中的起止位置。</li>\\n<li><code>parent?: Node</code> 当前节点（在 AST 中）的父节点</li>\\n</ul>","autoDesc":true}');export{e as data};
