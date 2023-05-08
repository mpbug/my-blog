import{_ as n,X as s,Y as a,a4 as e}from"./framework-d8252107.js";const o={},p=e(`<h1 id="解析器" tabindex="-1"><a class="header-anchor" href="#解析器" aria-hidden="true">#</a> 解析器</h1><p>TypeScript 解析器代码均位于 <code>parser.ts</code> 中。在内部，由解析器控制扫描器将源码转化为 AST。其期望结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>源码 ~~ 扫描器 ~~&gt; Token 流 ~~ 解析器 ~~&gt; AST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析器实现原理是单例模式（其原因类似扫描器，如果能重新初始化就不重新构建）。实际实现成 <code>namespace Parser</code>，包含解析器的各种<em>状态</em>变量和单例扫描器（<code>const scanner</code>）。该扫描器由解析器函数管理。</p><h3 id="程序对解析器的使用" tabindex="-1"><a class="header-anchor" href="#程序对解析器的使用" aria-hidden="true">#</a> 程序对解析器的使用</h3><p>解析器由程序间接驱动（通过之前提到过的 <code>CompilerHost</code>）。基本上，简化的调用栈如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>程序 -&gt;
    CompilerHost.getSourceFile -&gt;
        (全局函数 parser.ts).createSourceFile -&gt;
            Parser.parseSourceFile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>parseSourceFile</code> 不仅准备好解析器的状态，还调用 <code>initializeState</code> 准备好扫描器的状态。然后使用 <code>parseSourceFileWorker</code> 继续解析源代码。</p><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><p>深入解析器的内部之前，这里有个使用 TypeScript 解析器的示例，（使用 <code>ts.createSourceFile</code>）获取一个源文件的 AST 并打印它。</p><p><code>code/compiler/parser/runParser.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ts <span class="token keyword">from</span> <span class="token string">&#39;ntypescript&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">printAllChildren</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ts<span class="token punctuation">.</span>Node<span class="token punctuation">,</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;----&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ts<span class="token punctuation">.</span><span class="token function">formatSyntaxKind</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>kind<span class="token punctuation">)</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>pos<span class="token punctuation">,</span> node<span class="token punctuation">.</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
  depth<span class="token operator">++</span><span class="token punctuation">;</span>
  node<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token function">printAllChildren</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> depth<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> sourceCode <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
var foo = 123;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> sourceFile <span class="token operator">=</span> ts<span class="token punctuation">.</span><span class="token function">createSourceFile</span><span class="token punctuation">(</span><span class="token string">&#39;foo.ts&#39;</span><span class="token punctuation">,</span> sourceCode<span class="token punctuation">,</span> ts<span class="token punctuation">.</span>ScriptTarget<span class="token punctuation">.</span><span class="token constant">ES5</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printAllChildren</span><span class="token punctuation">(</span>sourceFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该段代码会打印以下内容：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>SourceFile <span class="token number">0</span> <span class="token number">14</span>
<span class="token operator">--</span><span class="token operator">--</span> SyntaxList <span class="token number">0</span> <span class="token number">14</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> VariableStatement <span class="token number">0</span> <span class="token number">14</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> VariableDeclarationList <span class="token number">0</span> <span class="token number">13</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> VarKeyword <span class="token number">0</span> <span class="token number">3</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> SyntaxList <span class="token number">3</span> <span class="token number">13</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> VariableDeclaration <span class="token number">3</span> <span class="token number">13</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> Identifier <span class="token number">3</span> <span class="token number">7</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> FirstAssignment <span class="token number">7</span> <span class="token number">9</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> FirstLiteralToken <span class="token number">9</span> <span class="token number">13</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> SemicolonToken <span class="token number">13</span> <span class="token number">14</span>
<span class="token operator">--</span><span class="token operator">--</span> EndOfFileToken <span class="token number">14</span> <span class="token number">14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果把头向左倾，这个看起来像棵（右侧）树</p><h2 id="解析器函数" tabindex="-1"><a class="header-anchor" href="#解析器函数" aria-hidden="true">#</a> 解析器函数</h2><p>如前所述，<code>parseSourceFile</code> 设置初始状态并将工作交给 <code>parseSourceFileWorker</code> 函数。</p><h3 id="parsesourcefileworker" tabindex="-1"><a class="header-anchor" href="#parsesourcefileworker" aria-hidden="true">#</a> <code>parseSourceFileWorker</code></h3><p>该函数先创建一个 <code>SourceFile</code> AST 节点，然后从 <code>parseStatements</code> 函数开始解析源代码。一旦返回结果，就用额外信息（例如 <code>nodeCount</code>, <code>identifierCount</code>等） 完善 <code>SourceFile</code> 节点。</p><h3 id="parsestatements" tabindex="-1"><a class="header-anchor" href="#parsestatements" aria-hidden="true">#</a> <code>parseStatements</code></h3><p>是最重要的 <code>parseXXX</code> 系函数之一（概念接下来介绍）。它根据扫描器返回的当前 token 来切换（调用相应的 <code>parseXXX</code> 函数），例如：如果当前 token 是一个 <code>SemicolonToken</code>（分号标记），就会调用 <code>paserEmptyStatement</code> 为空语句创建一个 AST 节点。</p><h3 id="节点创建" tabindex="-1"><a class="header-anchor" href="#节点创建" aria-hidden="true">#</a> 节点创建</h3><p>解析器有一系列 <code>parseXXX</code> 函数用来创建相应类型为<code>XXX</code>的节点，通常在相应类型的节点出现时被（其他解析器函数）调用。该过程的典型示例是解析空语句（例如 <code>;;;;;;</code>）时要用的 <code>parseEmptyStatement()</code> 函数。下面是其全部代码：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">parseEmptyStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Statement <span class="token punctuation">{</span>
  <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token operator">&lt;</span>Statement<span class="token operator">&gt;</span><span class="token function">createNode</span><span class="token punctuation">(</span>SyntaxKind<span class="token punctuation">.</span>EmptyStatement<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">parseExpected</span><span class="token punctuation">(</span>SyntaxKind<span class="token punctuation">.</span>SemicolonToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">finishNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它展示了 3 个关键函数 <code>createNode</code>, <code>parseExpected</code> 和 <code>finishNode</code>.</p><h4 id="createnode" tabindex="-1"><a class="header-anchor" href="#createnode" aria-hidden="true">#</a> <code>createNode</code></h4><p>解析器函数 <code>function createNode(kind: SyntaxKind, pos?: number): Node</code> 负责创建节点，设置传入的 <code>SyntaxKind</code>（语法类别），和初始位置（默认使用当前扫描器状态提供的位置信息）。</p><h4 id="parseexpected" tabindex="-1"><a class="header-anchor" href="#parseexpected" aria-hidden="true">#</a> <code>parseExpected</code></h4><p>解析器的 <code>parseExpected</code> 函数 <code>function parseExpected(kind: SyntaxKind, diagnosticMessage?: DiagnosticMessage): boolean</code> 会检查解析器状态中的当前 token 是否与指定的 <code>SyntaxKind</code> 匹配。如果不匹配，则会向传入的 <code>diagnosticMessage</code>（诊断消息）报告，未传入则创建某种通用形式 <code>xxx expected</code>。该函数内部用 <code>parseErrorAtPosition</code> 函数（使用扫描位置）提供良好的错误报告。</p><h4 id="finishnode" tabindex="-1"><a class="header-anchor" href="#finishnode" aria-hidden="true">#</a> <code>finishNode</code></h4><p>解析器的 <code>finishNode</code> 函数 <code>function finishNode&lt;T extends Node&gt;(node: T, end?: number): T</code> 设置节点的 <code>end</code> 位置，并添加一些有用的信息，例如上下文标志（<code>parserContextFlags</code>）以及解析该节点前出现的错误（如果有错的话，就不能在增量解析中重用此 AST 节点）。</p>`,31),t=[p];function c(r,l){return s(),a("div",null,t)}const d=n(o,[["render",c],["__file","parser.html.vue"]]);export{d as default};