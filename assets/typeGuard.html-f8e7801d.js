import{_ as n,X as s,Y as a,a4 as p}from"./framework-d8252107.js";const t={},o=p(`<h1 id="类型保护" tabindex="-1"><a class="header-anchor" href="#类型保护" aria-hidden="true">#</a> 类型保护</h1><p>类型保护允许你使用更小范围下的对象类型。</p><h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h2><p>TypeScript 熟知 JavaScript 中 <code>instanceof</code> 和 <code>typeof</code> 运算符的用法。如果你在一个条件块中使用这些，TypeScript 将会推导出在条件块中的的变量类型。如下例所示，TypeScript 将会辨别 <code>string</code> 上是否存在特定的函数，以及是否发生了拼写错误：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">doSome</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在这个块中，TypeScript 知道 \`x\` 的类型必须是 \`string\`</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">subtr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: &#39;subtr&#39; 方法并没有存在于 \`string\` 上</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
  <span class="token punctuation">}</span>

  x<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: 无法保证 \`x\` 是 \`string\` 类型</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h2><p>这有一个关于 <code>class</code> 和 <code>instanceof</code> 的例子：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  common <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>
  bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  common <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Foo <span class="token operator">|</span> Bar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arg <span class="token keyword">instanceof</span> <span class="token class-name">Foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arg <span class="token keyword">instanceof</span> <span class="token class-name">Bar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 甚至能够理解 <code>else</code>。当你使用 <code>if</code> 来缩小类型时，TypeScript 知道在其他块中的类型并不是 <code>if</code> 中的类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>
  bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Foo <span class="token operator">|</span> Bar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arg <span class="token keyword">instanceof</span> <span class="token class-name">Foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这个块中，一定是 &#39;Bar&#39;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h2><p><code>in</code> 操作符可以安全的检查一个对象上是否存在一个属性，它通常也被作为类型保护使用：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
  y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span>q<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">|</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span> <span class="token keyword">in</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// q: A</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// q: B</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字面量类型保护" tabindex="-1"><a class="header-anchor" href="#字面量类型保护" aria-hidden="true">#</a> 字面量类型保护</h2><p>当你在联合类型里使用字面量类型时，你可以检查它们是否有区别：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Foo</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 字面量类型</span>
  foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Bar</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 字面量类型</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Foo <span class="token operator">|</span> Bar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arg<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 一定是 Bar</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用定义的类型保护" tabindex="-1"><a class="header-anchor" href="#使用定义的类型保护" aria-hidden="true">#</a> 使用定义的类型保护</h2><p>JavaScript 并没有内置非常丰富的、运行时的自我检查机制。当你在使用普通的 JavaScript 对象时（使用结构类型，更有益处），你甚至无法访问 <code>instanceof</code> 和 <code>typeof</code>。在这种情景下，你可以创建<em>用户自定义的类型保护函数</em>，这仅仅是一个返回值为类似于<code>someArgumentName is SomeType</code> 的函数，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 仅仅是一个 interface</span>
<span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  common<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  common<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用户自己定义的类型保护！</span>
<span class="token keyword">function</span> <span class="token function">isFoo</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Foo <span class="token operator">|</span> Bar<span class="token punctuation">)</span><span class="token operator">:</span> arg <span class="token keyword">is</span> Foo <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>arg <span class="token keyword">as</span> Foo<span class="token punctuation">)</span><span class="token punctuation">.</span>foo <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用户自己定义的类型保护使用用例：</span>
<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Foo <span class="token operator">|</span> Bar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFoo</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> common<span class="token operator">:</span> <span class="token string">&#39;123&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> common<span class="token operator">:</span> <span class="token string">&#39;123&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),e=[o];function c(i,l){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","typeGuard.html.vue"]]);export{k as default};