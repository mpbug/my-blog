import{_ as p,X as o,Y as c,Z as s,$ as n,a0 as t,a4 as e,E as l}from"./framework-d8252107.js";const r={},i=s("h1",{id:"infer",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#infer","aria-hidden":"true"},"#"),n(" infer")],-1),k=s("h2",{id:"介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),u=s("code",null,"infer",-1),d={href:"https://github.com/Microsoft/TypeScript/pull/21496",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"extends",-1),v=e(`<p>简单示例如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ParamType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token keyword">infer</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">?</span> <span class="token constant">P</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个条件语句 <code>T extends (arg: infer P) =&gt; any ? P : T</code> 中，<code>infer P</code> 表示待推断的函数参数。</p><p>整句表示为：如果 <code>T</code> 能赋值给 <code>(arg: infer P) =&gt; any</code>，则结果是 <code>(arg: infer P) =&gt; any</code> 类型中的参数 <code>P</code>，否则返回为 <code>T</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Func</span> <span class="token operator">=</span> <span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Param</span> <span class="token operator">=</span> ParamType<span class="token operator">&lt;</span>Func<span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// Param = User</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">AA</span></span> <span class="token operator">=</span> ParamType<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置类型" tabindex="-1"><a class="header-anchor" href="#内置类型" aria-hidden="true">#</a> 内置类型</h2><p>在 2.8 版本中，TypeScript 内置了一些与 <code>infer</code> 有关的映射类型：</p><ul><li><p>用于提取函数类型的返回值类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ReturnType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">P</span> <span class="token operator">?</span> <span class="token constant">P</span> <span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相比于文章开始给出的示例，<code>ReturnType&lt;T&gt;</code> 只是将 <code>infer P</code> 从参数位置移动到返回值位置，因此此时 <code>P</code> 即是表示待推断的返回值类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> User<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Test</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span>Func<span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// Test = User</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用于提取构造函数中参数（实例）类型：</p><p>一个构造函数可以使用 <code>new</code> 来实例化，因此它的类型通常表示如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Constructor</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当 <code>infer</code> 用于构造函数类型中，可用于参数位置 <code>new (...args: infer P) =&gt; any;</code> 和返回值位置 <code>new (...args: any[]) =&gt; infer P;</code>。</p><p>因此就内置如下两个映射类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 获取参数类型</span>
<span class="token keyword">type</span> <span class="token class-name">ConstructorParameters<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">new</span></span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token keyword">infer</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span>
  <span class="token operator">?</span> <span class="token constant">P</span>
  <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>

<span class="token comment">// 获取实例类型</span>
<span class="token keyword">type</span> <span class="token class-name">InstanceType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">new</span></span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TestClass</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Params</span> <span class="token operator">=</span> ConstructorParameters<span class="token operator">&lt;</span><span class="token keyword">typeof</span> TestClass<span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// [string, number]</span>

<span class="token keyword">type</span> <span class="token class-name">Instance</span> <span class="token operator">=</span> InstanceType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> TestClass<span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// TestClass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="一些用例" tabindex="-1"><a class="header-anchor" href="#一些用例" aria-hidden="true">#</a> 一些用例</h2><p>至此，相信你已经对 <code>infer</code> 已有基本了解，我们来看看一些使用它的「骚操作」：</p>`,10),y=e(`<p><strong>tuple</strong> 转 <strong>union</strong> ，如：<code>[string, number]</code> -&gt; <code>string | number</code></p><p>解答之前，我们需要了解 tuple 类型在一定条件下，是可以赋值给数组类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TTuple</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">TArray</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Res</span> <span class="token operator">=</span> TTuple <span class="token keyword">extends</span> <span class="token class-name">TArray</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">type</span> <span class="token class-name">ResO</span> <span class="token operator">=</span> TArray <span class="token keyword">extends</span> <span class="token class-name">TTuple</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，在配合 <code>infer</code> 时，这很容易做到：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ElementOf<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token keyword">infer</span> <span class="token constant">E</span><span class="token operator">&gt;</span></span> <span class="token operator">?</span> <span class="token constant">E</span> <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">TTuple</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ToUnion</span> <span class="token operator">=</span> ElementOf<span class="token operator">&lt;</span>TTuple<span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// string | number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),g={href:"https://stackoverflow.com/questions/44480644/typescript-string-union-to-string-array/45486495#45486495",target:"_blank",rel:"noopener noreferrer"},b=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TTuple</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Res</span> <span class="token operator">=</span> TTuple<span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// string | number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=s("p",null,[s("strong",null,"union"),n(" 转 "),s("strong",null,"intersection"),n("，如："),s("code",null,"T1 | T2"),n(" -> "),s("code",null,"T1 & T2")],-1),T=s("code",null,"infer",-1),f={href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"Wrapped",-1),x=s("code",null,"Array<T>",-1),P=s("code",null,"[T]",-1),U=s("code",null,"Promise<T>",-1),A=s("code",null,"extends",-1),M=s("code",null,"T extends U ? X : Y",-1),C=s("code",null,"T",-1),I=s("code",null,"A | B",-1),R=s("code",null,"A extends U ? X : Y | B extends U ? X : Y",-1),B={href:"https://github.com/Microsoft/TypeScript/pull/21496",target:"_blank",rel:"noopener noreferrer"},E=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T2</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Bar<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">{</span> <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token keyword">infer</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token keyword">infer</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">}</span> <span class="token operator">?</span> <span class="token constant">U</span> <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T20</span></span> <span class="token operator">=</span> Bar<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T21</span></span> <span class="token operator">=</span> Bar<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T1</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// T1 &amp; T2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),F={href:"https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type",target:"_blank",rel:"noopener noreferrer"},S=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UnionToIntersection<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">any</span></span> <span class="token operator">?</span> <span class="token punctuation">(</span>k<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">)</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>k<span class="token operator">:</span> <span class="token keyword">infer</span> <span class="token constant">I</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token constant">I</span> <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Result</span> <span class="token operator">=</span> UnionToIntersection<span class="token operator">&lt;</span><span class="token constant">T1</span> <span class="token operator">|</span> <span class="token constant">T2</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// T1 &amp; T2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当传入 <code>T1 | T2</code> 时：</p><ul><li><p>第一步：<code>(U extends any ? (k: U) =&gt; void : never)</code> 会把 union 拆分成 <code>(T1 extends any ? (k: T1) =&gt; void : never) | (T2 extends any ? (k: T2)=&gt; void : never)</code>，即是得到 <code>(k: T1) =&gt; void | (k: T2) =&gt; void</code>；</p></li><li><p>第二步：<code>(k: T1) =&gt; void | (k: T2) =&gt; void extends ((k: infer I) =&gt; void) ? I : never</code>，根据上文，可以推断出 <code>I</code> 为 <code>T1 &amp; T2</code>。</p></li></ul>`,3),N={href:"https://zhuanlan.zhihu.com/p/58704376",target:"_blank",rel:"noopener noreferrer"},L=s("strong",null,"union",-1),O=s("strong",null,"tuple",-1),V=s("h2",{id:"leetcode-的一道-typescript-面试题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#leetcode-的一道-typescript-面试题","aria-hidden":"true"},"#"),n(" LeetCode 的一道 TypeScript 面试题")],-1),X={href:"https://github.com/LeetCode-OpenSource/hire/blob/master/typescript_zh.md",target:"_blank",rel:"noopener noreferrer"},Y=e(`<p>假设有一个这样的类型（原题中给出的是类，这里简化为 interface）：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Module</span> <span class="token punctuation">{</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token generic-function"><span class="token function">asyncMethod</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>input<span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Action<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
  <span class="token generic-function"><span class="token function">syncMethod</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>action<span class="token operator">:</span> Action<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Action<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在经过 <code>Connect</code> 函数之后，返回值类型为</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Result</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token generic-function"><span class="token function">asyncMethod</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>input<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Action<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token generic-function"><span class="token function">syncMethod</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>action<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Action<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>Action&lt;T&gt;</code> 的定义为：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Action<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  payload<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里主要考察两点</p><ul><li>挑选出函数</li><li>此篇文章所提及的 <code>infer</code></li></ul>`,8),z={href:"http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html",target:"_blank",rel:"noopener noreferrer"},D=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">FuncName<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Function</span></span> <span class="token operator">?</span> <span class="token constant">P</span> <span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Connect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>module<span class="token operator">:</span> Module<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">T</span> <span class="token keyword">in</span> FuncName<span class="token operator">&lt;</span>Module<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">:</span> Module<span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">/*
 * type Connect = (module: Module) =&gt; {
 *   asyncMethod: &lt;T, U&gt;(input: Promise&lt;T&gt;) =&gt; Promise&lt;Action&lt;U&gt;&gt;;
 *   syncMethod: &lt;T, U&gt;(action: Action&lt;T&gt;) =&gt; Action&lt;U&gt;;
 * }
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来就比较简单了，主要是利用条件类型 + <code>infer</code>，如果函数可以赋值给 <code>asyncMethod&lt;T, U&gt;(input: Promise&lt;T&gt;): Promise&lt;Action&lt;U&gt;&gt;</code>，则取值为 <code>asyncMethod&lt;T, U&gt;(input: T): Action&lt;U&gt;</code>。具体答案就不给出了，感兴趣的小伙伴可以尝试一下。</p>`,2);function q(G,H){const a=l("ExternalLinkIcon");return o(),c("div",null,[i,k,s("p",null,[u,n(" 最早出现在此 "),s("a",d,[n("PR"),t(a)]),n(" 中，表示在 "),m,n(" 条件语句中待推断的类型变量。")]),v,s("ul",null,[s("li",null,[y,s("p",null,[n("在 "),s("a",g,[n("stackoverflow"),t(a)]),n(" 上看到另一种解法，比较简（牛）单（逼）：")]),b]),s("li",null,[h,s("p",null,[n("这个可能要稍微麻烦一点，需要 "),T,n(" 配合「 "),s("a",f,[n("Distributive conditional types"),t(a)]),n(" 」使用。")]),s("p",null,[n("在"),s("a",w,[n("相关链接"),t(a)]),n("中，我们可以了解到「Distributive conditional types」是由「naked type parameter」构成的条件类型。而「naked type parameter」表示没有被 "),_,n(" 的类型（如："),x,n("、"),P,n("、"),U,n(" 等都是不是「naked type parameter」）。「Distributive conditional types」主要用于拆分 "),A,n(" 左边部分的联合类型，举个例子：在条件类型 "),M,n(" 中，当 "),C,n(" 是 "),I,n(" 时，会拆分成 "),R,n("；")]),s("p",null,[n("有了这个前提，再利用在逆变位置上，"),s("a",B,[n("同一类型变量的多个候选类型将会被推断为交叉类型"),t(a)]),n("的特性，即")]),E,s("p",null,[n("因此，综合以上几点，我们可以得到在 "),s("a",F,[n("stackoverflow"),t(a)]),n(" 上的一个答案：")]),S])]),s("p",null,[n("当然，你可以玩出更多花样，比如 "),s("a",N,[L,n(" 转 "),O,t(a)]),n("。")]),V,s("p",null,[n("前段时间，在 "),s("a",X,[n("GitHub"),t(a)]),n(" 上，发现一道来自 LeetCode TypeScript 的面试题，比较有意思，题目的大致意思是：")]),Y,s("p",null,[n("挑选函数的方法，已经在 "),s("a",z,[n("handbook"),t(a)]),n(" 中已经给出，只需判断 value 能赋值给 Function 就行了：")]),D])}const Z=p(r,[["render",q],["__file","infer.html.vue"]]);export{Z as default};