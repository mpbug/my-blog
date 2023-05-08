import{_ as a,X as e,Y as t,Z as p,a4 as n}from"./framework-d8252107.js";const o={},c=n('<h1 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h1><p><code>nextTick</code> 是 Vue 的一个核心实现，在介绍 Vue 的 nextTick 之前，为了方便大家理解，我先简单介绍一下 JS 的运行机制。</p><h2 id="js-运行机制" tabindex="-1"><a class="header-anchor" href="#js-运行机制" aria-hidden="true">#</a> JS 运行机制</h2><p>JS 执行是单线程的，它是基于事件循环的。事件循环大致分为以下几个步骤：</p><p>（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。</p><p>（2）主线程之外，还存在一个&quot;任务队列&quot;（task queue）。只要异步任务有了运行结果，就在&quot;任务队列&quot;之中放置一个事件。</p><p>（3）一旦&quot;执行栈&quot;中的所有同步任务执行完毕，系统就会读取&quot;任务队列&quot;，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。</p><p>（4）主线程不断重复上面的第三步。</p>',8),i=["src"],l=n(`<p>主线程的执行过程就是一个 tick，而所有的异步结果都是通过 “任务队列” 来调度。 消息队列中存放的是一个个的任务（task）。 规范中规定 task 分为两大类，分别是 macro task 和 micro task，并且每个 macro task 结束后，都要清空所有的 micro task。</p><p>关于 macro task 和 micro task 的概念，这里不会细讲，简单通过一段代码演示他们的执行顺序：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>macroTask <span class="token keyword">of</span> macroTaskQueue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. Handle current MACRO-TASK</span>
    <span class="token function">handleMacroTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
    <span class="token comment">// 2. Handle all MICRO-TASK</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>microTask <span class="token keyword">of</span> microTaskQueue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleMicroTask</span><span class="token punctuation">(</span>microTask<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在浏览器环境中，常见的 macro task 有 setTimeout、MessageChannel、postMessage、setImmediate；常见的 micro task 有 MutationObsever 和 Promise.then。</p><h2 id="vue-的实现" tabindex="-1"><a class="header-anchor" href="#vue-的实现" aria-hidden="true">#</a> Vue 的实现</h2><p>在 Vue 源码 2.5+ 后，<code>nextTick</code> 的实现单独有一个 JS 文件来维护它，它的源码并不多，总共也就 100 多行。接下来我们来看一下它的实现，在 <code>src/core/util/next-tick.js</code> 中：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> noop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;shared/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> handleError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./error&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isIOS<span class="token punctuation">,</span> isNative <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./env&#39;</span>

<span class="token keyword">const</span> callbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> pending <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">function</span> <span class="token function">flushCallbacks</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  pending <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">const</span> copies <span class="token operator">=</span> callbacks<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  callbacks<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> copies<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    copies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Here we have async deferring wrappers using both microtasks and (macro) tasks.</span>
<span class="token comment">// In &lt; 2.4 we used microtasks everywhere, but there are some scenarios where</span>
<span class="token comment">// microtasks have too high a priority and fire in between supposedly</span>
<span class="token comment">// sequential events (e.g. #4521, #6690) or even between bubbling of the same</span>
<span class="token comment">// event (#6566). However, using (macro) tasks everywhere also has subtle problems</span>
<span class="token comment">// when state is changed right before repaint (e.g. #6813, out-in transitions).</span>
<span class="token comment">// Here we use microtask by default, but expose a way to force (macro) task when</span>
<span class="token comment">// needed (e.g. in event handlers attached by v-on).</span>
<span class="token keyword">let</span> microTimerFunc
<span class="token keyword">let</span> macroTimerFunc
<span class="token keyword">let</span> useMacroTask <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">// Determine (macro) task defer implementation.</span>
<span class="token comment">// Technically setImmediate should be the ideal choice, but it&#39;s only available</span>
<span class="token comment">// in IE. The only polyfill that consistently queues the callback after all DOM</span>
<span class="token comment">// events triggered in the same loop is by using MessageChannel.</span>
<span class="token comment">/* istanbul ignore if */</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> setImmediate <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>setImmediate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">macroTimerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setImmediate</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> MessageChannel <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
  <span class="token function">isNative</span><span class="token punctuation">(</span>MessageChannel<span class="token punctuation">)</span> <span class="token operator">||</span>
  <span class="token comment">// PhantomJS</span>
  MessageChannel<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object MessageChannelConstructor]&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> channel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> port <span class="token operator">=</span> channel<span class="token punctuation">.</span>port2
  channel<span class="token punctuation">.</span>port1<span class="token punctuation">.</span>onmessage <span class="token operator">=</span> flushCallbacks
  <span class="token function-variable function">macroTimerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    port<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">/* istanbul ignore next */</span>
  <span class="token function-variable function">macroTimerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Determine microtask defer implementation.</span>
<span class="token comment">/* istanbul ignore next, $flow-disable-line */</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>Promise<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function-variable function">microTimerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
    <span class="token comment">// in problematic UIWebViews, Promise.then doesn&#39;t completely break, but</span>
    <span class="token comment">// it can get stuck in a weird state where callbacks are pushed into the</span>
    <span class="token comment">// microtask queue but the queue isn&#39;t being flushed, until the browser</span>
    <span class="token comment">// needs to do some other work, e.g. handle a timer. Therefore we can</span>
    <span class="token comment">// &quot;force&quot; the microtask queue to be flushed by adding an empty timer.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isIOS<span class="token punctuation">)</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>noop<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// fallback to macro</span>
  microTimerFunc <span class="token operator">=</span> macroTimerFunc
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">withMacroTask</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fn</span><span class="token operator">:</span> Function</span><span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
  <span class="token keyword">return</span> fn<span class="token punctuation">.</span>_withTask <span class="token operator">||</span> <span class="token punctuation">(</span>fn<span class="token punctuation">.</span><span class="token function-variable function">_withTask</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    useMacroTask <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
    useMacroTask <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">nextTick</span> <span class="token punctuation">(</span><span class="token parameter">cb<span class="token operator">?</span><span class="token operator">:</span> Function<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _resolve
  callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> ctx<span class="token punctuation">,</span> <span class="token string">&#39;nextTick&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>_resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_resolve</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pending <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>useMacroTask<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">macroTimerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">microTimerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// $flow-disable-line</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      _resolve <span class="token operator">=</span> resolve
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>next-tick.js</code> 申明了 <code>microTimerFunc</code> 和 <code>macroTimerFunc</code> 2 个变量，它们分别对应的是 micro task 的函数和 macro task 的函数。对于 macro task 的实现，优先检测是否支持原生 <code>setImmediate</code>，这是一个高版本 IE 和 Edge 才支持的特性，不支持的话再去检测是否支持原生的 <code>MessageChannel</code>，如果也不支持的话就会降级为 <code>setTimeout 0</code>；而对于 micro task 的实现，则检测浏览器是否原生支持 Promise，不支持的话直接指向 macro task 的实现。</p><p><code>next-tick.js</code> 对外暴露了 2 个函数，先来看 <code>nextTick</code>，这就是我们在上一节执行 <code>nextTick(flushSchedulerQueue)</code> 所用到的函数。它的逻辑也很简单，把传入的回调函数 <code>cb</code> 压入 <code>callbacks</code> 数组，最后一次性地根据 <code>useMacroTask</code> 条件执行 <code>macroTimerFunc</code> 或者是 <code>microTimerFunc</code>，而它们都会在下一个 tick 执行 <code>flushCallbacks</code>，<code>flushCallbacks</code> 的逻辑非常简单，对 <code>callbacks</code> 遍历，然后执行相应的回调函数。</p><p>这里使用 <code>callbacks</code> 而不是直接在 <code>nextTick</code> 中执行回调函数的原因是保证在同一个 tick 内多次执行 <code>nextTick</code>，不会开启多个异步任务，而把这些异步任务都压成一个同步任务，在下一个 tick 执行完毕。</p><p><code>nextTick</code> 函数最后还有一段逻辑：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    _resolve <span class="token operator">=</span> resolve
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是当 <code>nextTick</code> 不传 <code>cb</code> 参数的时候，提供一个 Promise 化的调用，比如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当 <code>_resolve</code> 函数执行，就会跳到 <code>then</code> 的逻辑中。</p><p><code>next-tick.js</code> 还对外暴露了 <code>withMacroTask</code> 函数，它是对函数做一层包装，确保函数执行过程中对数据任意的修改，触发变化执行 <code>nextTick</code> 的时候强制走 <code>macroTimerFunc</code>。比如对于一些 DOM 交互事件，如 <code>v-on</code> 绑定的事件回调函数的处理，会强制走 macro task。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>通过这一节对 <code>nextTick</code> 的分析，并结合上一节的 setter 分析，我们了解到数据的变化到 DOM 的重新渲染是一个异步过程，发生在下一个 tick。这就是我们平时在开发的过程中，比如从服务端接口去获取数据的时候，数据做了修改，如果我们的某些方法去依赖了数据修改后的 DOM 变化，我们就必须在 <code>nextTick</code> 后执行。比如下面的伪代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">getData</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>xxx <span class="token operator">=</span> res<span class="token punctuation">.</span>data
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里我们可以获取变化后的 DOM</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue.js 提供了 2 种调用 <code>nextTick</code> 的方式，一种是全局 API <code>Vue.nextTick</code>，一种是实例上的方法 <code>vm.$nextTick</code>，无论我们使用哪一种，最后都是调用 <code>next-tick.js</code> 中实现的 <code>nextTick</code> 方法。</p>`,20);function u(s,r){return e(),t("div",null,[c,p("img",{src:s.$withBase("/assets/event-loop.png")},null,8,i),l])}const d=a(o,[["render",u],["__file","next-tick.html.vue"]]);export{d as default};
