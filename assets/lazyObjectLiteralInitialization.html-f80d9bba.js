import{_ as n,X as s,Y as a,a4 as e}from"./framework-d8252107.js";const p={},t=e(`<h1 id="对象字面量的惰性初始化" tabindex="-1"><a class="header-anchor" href="#对象字面量的惰性初始化" aria-hidden="true">#</a> 对象字面量的惰性初始化</h1><p>在 JavaScript 中，像这样用字面量初始化对象的写法十分常见：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bas <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但在 TypeScript 中，同样的写法就会报错：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// Error: Property &#39;bar&#39; does not exist on type &#39;{}&#39;</span>
foo<span class="token punctuation">.</span>bas <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error: Property &#39;bas&#39; does not exist on type &#39;{}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为 TypeScript 在解析 <code>let foo = {}</code> 这段赋值语句时，会进行“类型推断”：它会认为等号左边 <code>foo</code> 的类型即为等号右边 <code>{}</code> 的类型。由于 <code>{}</code> 本没有任何属性，因此，像上面那样给 <code>foo</code> 添加属性时就会报错。</p><h2 id="最好的解决方案" tabindex="-1"><a class="header-anchor" href="#最好的解决方案" aria-hidden="true">#</a> 最好的解决方案</h2><p>最<em>好</em>的解决方案就是在为变量赋值的同时，添加属性及其对应的值：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  bas<span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法也比较容易通过其他人或工具的代码审核，对后期维护也是有利的。</p><blockquote><p>以下的快速解决方案采用<em>惰性</em>的思路，本质上是<em>在初始化变量时忘了添加属性</em>的做法。</p></blockquote><h2 id="快速解决方案" tabindex="-1"><a class="header-anchor" href="#快速解决方案" aria-hidden="true">#</a> 快速解决方案</h2><p>如果你的 JavaScript 项目很大，那么在迁移到 TypeScript 的时候，上面的做法可能会比较麻烦。此时，你可以利用 TypeScript 的“类型断言”机制让代码顺利通过编译：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bas <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="折中的解决方案" tabindex="-1"><a class="header-anchor" href="#折中的解决方案" aria-hidden="true">#</a> 折中的解决方案</h2><p>当然，总是用 <code>any</code> 肯定是不好的，因为这样做其实是在想办法绕开 TypeScript 的类型检查。那么，折中的方案就是创建 <code>interface</code>，这样的好处在于：</p><ul><li>方便撰写类型文档</li><li>TypeScript 会参与类型检查，确保类型安全</li></ul><p>请看以下的示例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  bas<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Foo<span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bas <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>interface</code> 可以确保类型安全，比如这种情况：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  bas<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Foo<span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>bas <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 然后我们尝试这样做：</span>
foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token string">&#39;Hello Stranger&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 错误：你可能把 \`bas\` 写成了 \`bar\`，不能为数字类型的属性赋值字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","lazyObjectLiteralInitialization.html.vue"]]);export{d as default};