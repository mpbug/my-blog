import{_ as n,X as s,Y as a,a4 as e}from"./framework-d8252107.js";const t={},p=e(`<h1 id="混合" tabindex="-1"><a class="header-anchor" href="#混合" aria-hidden="true">#</a> 混合</h1><p>TypeScript (和 JavaScript) 类只能严格的单继承，因此你不能做：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Tagged</span><span class="token punctuation">,</span> Timestamped <span class="token punctuation">{</span> <span class="token comment">// ERROR : 不能多重继承</span>
  <span class="token comment">// ..</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从可重用组件构建类的另一种方式是通过基类来构建它们，这种方式称为混合。</p><p>这个主意是简单的，采用函数 B 接受一个类 A，并且返回一个带有新功能的类的方式来替代 A 类扩展 B 来获取 B 上的功能，前者中的 B 即是混合。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>「混合」是一个函数：</p><ul><li>传入一个构造函数；</li><li>创建一个带有新功能，并且扩展构造函数的新类；</li><li>返回这个新类。</li></ul></div><p>一个完整的例子：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 所有 mixins 都需要</span>
<span class="token keyword">type</span> <span class="token class-name">Constructor<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>

<span class="token comment">/////////////</span>
<span class="token comment">// mixins 例子</span>
<span class="token comment">////////////</span>

<span class="token comment">// 添加属性的混合例子</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">Timestamped</span><span class="token generic class-name"><span class="token operator">&lt;</span>TBase <span class="token keyword">extends</span> Constructor<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>Base<span class="token operator">:</span> TBase<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> Base <span class="token punctuation">{</span>
    timestamp <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 添加属性和方法的混合例子</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">Activatable</span><span class="token generic class-name"><span class="token operator">&lt;</span>TBase <span class="token keyword">extends</span> Constructor<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>Base<span class="token operator">:</span> TBase<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> Base <span class="token punctuation">{</span>
    isActivated <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token function">activate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isActivated <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isActivated <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">///////////</span>
<span class="token comment">// 组合类</span>
<span class="token comment">///////////</span>

<span class="token comment">// 简单的类</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 添加 Timestamped 的 User</span>
<span class="token keyword">const</span> TimestampedUser <span class="token operator">=</span> <span class="token function">Timestamped</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Tina Timestamped 和 Activatable 的类</span>
<span class="token keyword">const</span> TimestampedActivatableUser <span class="token operator">=</span> <span class="token function">Timestamped</span><span class="token punctuation">(</span><span class="token function">Activatable</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//////////</span>
<span class="token comment">// 使用组合类</span>
<span class="token comment">//////////</span>

<span class="token keyword">const</span> timestampedUserExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimestampedUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timestampedUserExample<span class="token punctuation">.</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> timestampedActivatableUserExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimestampedActivatableUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timestampedActivatableUserExample<span class="token punctuation">.</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timestampedActivatableUserExample<span class="token punctuation">.</span>isActivated<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们分解这个例子。</p><h2 id="创建一个构造函数" tabindex="-1"><a class="header-anchor" href="#创建一个构造函数" aria-hidden="true">#</a> 创建一个构造函数</h2><p>混合接受一个类，并且使用新功能扩展它。因此，我们需要定义构造函数的类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Constructor<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="扩展一个类并且返回它" tabindex="-1"><a class="header-anchor" href="#扩展一个类并且返回它" aria-hidden="true">#</a> 扩展一个类并且返回它</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 添加属性的混合例子</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">Timestamped</span><span class="token generic class-name"><span class="token operator">&lt;</span>TBase <span class="token keyword">extends</span> Constructor<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>Base<span class="token operator">:</span> TBase<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> Base <span class="token punctuation">{</span>
    timestamp <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","mixins.html.vue"]]);export{r as default};
