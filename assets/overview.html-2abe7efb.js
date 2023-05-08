import{_ as t,X as n,Y as s,Z as e,$ as o,a0 as a,a5 as l,a4 as i,E as c}from"./framework-d8252107.js";const p={},u=e("h1",{id:"概览",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概览","aria-hidden":"true"},"#"),o(" 概览")],-1),h={href:"https://github.com/Microsoft/TypeScript/tree/master/src/compiler",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"src/compiler",-1),v=i('<blockquote><p>译注：Typescript Deep Dive 使用的源码应为 2016 年以前的源码。学习时请对照现有的源码</p></blockquote><p>它分为以下几个关键部分：</p><ul><li>Scanner 扫描器（<code>scanner.ts</code>）</li><li>Parser 解析器（<code>parser.ts</code>）</li><li>Binder 绑定器（<code>binder.ts</code>）</li><li>Checker 检查器（<code>checker.ts</code>）</li><li>Emitter 发射器（<code>emitter.ts</code>）</li></ul><p>每个部分在源文件中均有独立文件，本章稍后会对这些部分做解释。</p><h3 id="byots" tabindex="-1"><a class="header-anchor" href="#byots" aria-hidden="true">#</a> BYOTS</h3>',5),b={href:"https://github.com/basarat/byots",target:"_blank",rel:"noopener noreferrer"},g=i(`<h3 id="语法和语义" tabindex="-1"><a class="header-anchor" href="#语法和语义" aria-hidden="true">#</a> 语法和语义</h3><p><em>语法</em>正确并不意味着<em>语义</em>上也正确。下面的 TypeScript 代码，语法合法，但是语义却不正确</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">var</span> foo<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token string">&#39;not a number&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>语义</code> 从自然语言角度意味着有意义，理解这个概念对你很有用。</p><h3 id="处理概览" tabindex="-1"><a class="header-anchor" href="#处理概览" aria-hidden="true">#</a> 处理概览</h3><p>以下演示简单说明 TypeScript 编译器如何将上述几个关键部分组合在一起：</p><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>SourceCode（源码） ~~ 扫描器 ~~&gt; Token 流
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>Token 流 ~~ 解析器 ~~&gt; AST（抽象语法树）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>AST ~~ 绑定器 ~~&gt; Symbols（符号）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>符号（<code>Symbol</code>）是 TypeScript <em>语义</em>系统的主要构造块。如上所示，符号是绑定的结果。符号将 AST 中的声明节点与相同实体的其他声明相连。</p><p>符号和 AST 是检查器用来验证源代码<em>语义</em>的</p><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>AST + 符号 ~~ 检查器 ~~&gt; 类型验证
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，需要输出 JavaScript 时：</p><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>AST + 检查器 ~~ 发射器 ~~&gt; JavaScript 代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>TypeScript 编译器中还有一些其他文件，为我们接下来介绍的很多关键部分提供实用工具。</p><h2 id="文件-utilities" tabindex="-1"><a class="header-anchor" href="#文件-utilities" aria-hidden="true">#</a> 文件：Utilities</h2><p><code>core.ts</code> ：TypeScript 编译器使用的核心工具集，重要的有：</p><ul><li><code>let objectAllocator: ObjectAllocator</code> 是一个定义为全局单例的变量。提供以下定义： <ul><li><code>getNodeConstructor</code>（节点会在解析器 / AST 中介绍）</li><li><code>getSymbolConstructor</code>（符号会在绑定器中介绍）</li><li><code>getTypeConstructor</code>（类型会在检查器中介绍）</li><li><code>getSignatureConstructor</code>（签名是索引，调用和构造签名）</li></ul></li></ul><h2 id="文件-关键数据结构" tabindex="-1"><a class="header-anchor" href="#文件-关键数据结构" aria-hidden="true">#</a> 文件：关键数据结构</h2><p><code>types.ts</code> 包含整个编译器中使用的关键数据结构和接口，这里列出一些关键部分：</p><ul><li><code>SyntaxKind</code> AST 节点类型通过 <code>SyntaxKind</code> 枚举进行识别</li><li><code>TypeChecker</code> 类型检查器提供此接口</li><li><code>CompilerHost</code> 用于程序（<code>Program</code>）和系统之间的交互</li><li><code>Node</code> AST 节点</li></ul><h2 id="文件-系统" tabindex="-1"><a class="header-anchor" href="#文件-系统" aria-hidden="true">#</a> 文件：系统</h2><p><code>system.ts</code>，TypeScript 编译器与操作系统的所有交互均通过 <code>System</code> 接口进行。接口及其实现（<code>WScript</code> 和 <code>Node</code>） 均定义在 <code>system.ts</code> 中。你可以将其视为<em>操作环境（OE, Operating Environment）</em>。</p>`,23),S=e("code",null,"Program",-1);function _(y,T){const d=c("ExternalLinkIcon"),r=c("RouterLink");return n(),s("div",null,[u,e("p",null,[o("TypeScript 编译器源文件位于 "),e("a",h,[m,a(d)]),o(" 目录下")]),v,e("p",null,[o("我们有个名为 "),e("a",b,[o("Bring Your Own TypeScript (BYOTS)"),a(d)]),o(" 的项目，通过暴露内部接口让编译器 API 使用起来更简单。你可以在全局范围上暴露你 TypeScript 应用的本地变量。")]),g,e("p",null,[o("现在对主要文件有一个整体了解了，我们继续介绍程序（"),a(r,{to:"/views/Books/Front-end/TypescriptMaster/compiler/program.html"},{default:l(()=>[S]),_:1}),o("）的概念")])])}const x=t(p,[["render",_],["__file","overview.html.vue"]]);export{x as default};