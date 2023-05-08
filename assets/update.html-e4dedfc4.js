import{_ as d,X as l,Y as i,Z as e,$ as a,a0 as s,a5 as c,a4 as n,E as p}from"./framework-d8252107.js";const r={},u=n(`<p>通过本章第一节学习，我们知道<code>状态更新</code>流程开始后首先会<code>创建Update对象</code>。</p><p>本节我们学习<code>Update</code>的结构与工作流程。</p><blockquote><p>你可以将<code>Update</code>类比<code>心智模型</code>中的一次<code>commit</code>。</p></blockquote><h2 id="update的分类" tabindex="-1"><a class="header-anchor" href="#update的分类" aria-hidden="true">#</a> Update的分类</h2><p>我们先来了解<code>Update</code>的结构。</p><p>首先，我们将可以触发更新的方法所隶属的组件分类：</p><ul><li><p>ReactDOM.render —— HostRoot</p></li><li><p>this.setState —— ClassComponent</p></li><li><p>this.forceUpdate —— ClassComponent</p></li><li><p>useState —— FunctionComponent</p></li><li><p>useReducer —— FunctionComponent</p></li></ul><p>可以看到，一共三种组件（<code>HostRoot</code> | <code>ClassComponent</code> | <code>FunctionComponent</code>）可以触发更新。</p><p>由于不同类型组件工作方式不同，所以存在两种不同结构的<code>Update</code>，其中<code>ClassComponent</code>与<code>HostRoot</code>共用一套<code>Update</code>结构，<code>FunctionComponent</code>单独使用一种<code>Update</code>结构。</p><p>虽然他们的结构不同，但是他们工作机制与工作流程大体相同。在本节我们介绍前一种<code>Update</code>，<code>FunctionComponent</code>对应的<code>Update</code>在<code>Hooks</code>章节介绍。</p><h2 id="update的结构" tabindex="-1"><a class="header-anchor" href="#update的结构" aria-hidden="true">#</a> Update的结构</h2><p><code>ClassComponent</code>与<code>HostRoot</code>（即<code>rootFiber.tag</code>对应类型）共用同一种<code>Update结构</code>。</p><p>对应的结构如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">update</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  eventTime<span class="token punctuation">,</span>
  lane<span class="token punctuation">,</span>
  suspenseConfig<span class="token punctuation">,</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> UpdateState<span class="token punctuation">,</span>
  <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

  <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),k=e("code",null,"Update",-1),b=e("code",null,"createUpdate",-1),v={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactUpdateQueue.old.js#L189",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"createUpdate",-1),h=n("<p>字段意义如下：</p><ul><li><p>eventTime：任务时间，通过<code>performance.now()</code>获取的毫秒数。由于该字段在未来会重构，当前我们不需要理解他。</p></li><li><p>lane：优先级相关字段。当前还不需要掌握他，只需要知道不同<code>Update</code>优先级可能是不同的。</p></li></ul><blockquote><p>你可以将<code>lane</code>类比<code>心智模型</code>中<code>需求的紧急程度</code>。</p></blockquote>",3),_=n("<li><p>suspenseConfig：<code>Suspense</code>相关，暂不关注。</p></li><li><p>tag：更新的类型，包括<code>UpdateState</code> | <code>ReplaceState</code> | <code>ForceUpdate</code> | <code>CaptureUpdate</code>。</p></li><li><p>payload：更新挂载的数据，不同类型组件挂载的数据不同。对于<code>ClassComponent</code>，<code>payload</code>为<code>this.setState</code>的第一个传参。对于<code>HostRoot</code>，<code>payload</code>为<code>ReactDOM.render</code>的第一个传参。</p></li>",3),g=e("code",null,"回调函数",-1),f=e("li",null,[e("p",null,[a("next：与其他"),e("code",null,"Update"),a("连接形成链表。")])],-1),U=n('<h2 id="update与fiber的联系" tabindex="-1"><a class="header-anchor" href="#update与fiber的联系" aria-hidden="true">#</a> Update与Fiber的联系</h2><p>我们发现，<code>Update</code>存在一个连接其他<code>Update</code>形成链表的字段<code>next</code>。联系<code>React</code>中另一种以链表形式组成的结构<code>Fiber</code>，他们之间有什么关联么？</p><p>答案是肯定的。</p>',3),y=e("code",null,"Fiber节点",-1),Q=e("code",null,"Fiber树",-1),j=e("code",null,"Fiber树",-1),F=n(`<ul><li><p>代表当前页面状态的<code>current Fiber树</code></p></li><li><p>代表正在<code>render阶段</code>的<code>workInProgress Fiber树</code></p></li></ul><p>类似<code>Fiber节点</code>组成<code>Fiber树</code>，<code>Fiber节点</code>上的多个<code>Update</code>会组成链表并被包含在<code>fiber.updateQueue</code>中。</p><div class="hint-container warning"><p class="hint-container-title">什么情况下一个Fiber节点会存在多个Update？</p><p>你可能疑惑为什么一个<code>Fiber节点</code>会存在多个<code>Update</code>。这其实是很常见的情况。</p><p>在这里介绍一种最简单的情况：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在一个<code>ClassComponent</code>中触发<code>this.onClick</code>方法，方法内部调用了两次<code>this.setState</code>。这会在该<code>fiber</code>中产生两个<code>Update</code>。</p></div><p><code>Fiber节点</code>最多同时存在两个<code>updateQueue</code>：</p><ul><li><p><code>current fiber</code>保存的<code>updateQueue</code>即<code>current updateQueue</code></p></li><li><p><code>workInProgress fiber</code>保存的<code>updateQueue</code>即<code>workInProgress updateQueue</code></p></li></ul><p>在<code>commit阶段</code>完成页面渲染后，<code>workInProgress Fiber树</code>变为<code>current Fiber树</code>，<code>workInProgress Fiber树</code>内<code>Fiber节点</code>的<code>updateQueue</code>就变成<code>current updateQueue</code>。</p><h2 id="updatequeue" tabindex="-1"><a class="header-anchor" href="#updatequeue" aria-hidden="true">#</a> updateQueue</h2>`,7),x=e("code",null,"updateQueue",-1),C=e("code",null,"HostComponent",-1),w=n(`<p>剩下两种类型和<code>Update</code>的两种类型对应。</p><p><code>ClassComponent</code>与<code>HostRoot</code>使用的<code>UpdateQueue</code>结构如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">queue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">baseState</span><span class="token operator">:</span> fiber<span class="token punctuation">.</span>memoizedState<span class="token punctuation">,</span>
    <span class="token literal-property property">firstBaseUpdate</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastBaseUpdate</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">pending</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),R=e("code",null,"UpdateQueue",-1),B=e("code",null,"initializeUpdateQueue",-1),S={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactUpdateQueue.new.js#L157",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"initializeUpdateQueue",-1),H=n(`<p>字段说明如下：</p><ul><li>baseState：本次更新前该<code>Fiber节点</code>的<code>state</code>，<code>Update</code>基于该<code>state</code>计算更新后的<code>state</code>。</li></ul><blockquote><p>你可以将<code>baseState</code>类比<code>心智模型</code>中的<code>master分支</code>。</p></blockquote><ul><li><code>firstBaseUpdate</code>与<code>lastBaseUpdate</code>：本次更新前该<code>Fiber节点</code>已保存的<code>Update</code>。以链表形式存在，链表头为<code>firstBaseUpdate</code>，链表尾为<code>lastBaseUpdate</code>。之所以在更新产生前该<code>Fiber节点</code>内就存在<code>Update</code>，是由于某些<code>Update</code>优先级较低所以在上次<code>render阶段</code>由<code>Update</code>计算<code>state</code>时被跳过。</li></ul><blockquote><p>你可以将<code>baseUpdate</code>类比<code>心智模型</code>中执行<code>git rebase</code>基于的<code>commit</code>（节点D）。</p></blockquote><ul><li><code>shared.pending</code>：触发更新时，产生的<code>Update</code>会保存在<code>shared.pending</code>中形成单向环状链表。当由<code>Update</code>计算<code>state</code>时这个环会被剪开并连接在<code>lastBaseUpdate</code>后面。</li></ul><blockquote><p>你可以将<code>shared.pending</code>类比<code>心智模型</code>中本次需要提交的<code>commit</code>（节点ABC）。</p></blockquote><ul><li>effects：数组。保存<code>update.callback !== null</code>的<code>Update</code>。</li></ul><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><p><code>updateQueue</code>相关代码逻辑涉及到大量链表操作，比较难懂。在此我们举例对<code>updateQueue</code>的工作流程讲解下。</p><p>假设有一个<code>fiber</code>刚经历<code>commit阶段</code>完成渲染。</p><p>该<code>fiber</code>上有两个由于优先级过低所以在上次的<code>render阶段</code>并没有处理的<code>Update</code>。他们会成为下次更新的<code>baseUpdate</code>。</p><p>我们称其为<code>u1</code>和<code>u2</code>，其中<code>u1.next === u2</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>firstBaseUpdate <span class="token operator">===</span> u1<span class="token punctuation">;</span>
fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>lastBaseUpdate <span class="token operator">===</span> u2<span class="token punctuation">;</span>
u1<span class="token punctuation">.</span>next <span class="token operator">===</span> u2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们用<code>--&gt;</code>表示链表的指向：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>baseUpdate<span class="token operator">:</span> u1 <span class="token operator">--</span><span class="token operator">&gt;</span> u2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在我们在<code>fiber</code>上触发两次状态更新，这会先后产生两个新的<code>Update</code>，我们称为<code>u3</code>和<code>u4</code>。</p><p>每个 <code>update</code> 都会通过 <code>enqueueUpdate</code> 方法插入到 <code>updateQueue</code> 队列上</p><p>当插入<code>u3</code>后：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>shared<span class="token punctuation">.</span>pending <span class="token operator">===</span> u3<span class="token punctuation">;</span>
u3<span class="token punctuation">.</span>next <span class="token operator">===</span> u3<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>shared.pending</code>的环状链表，用图表示为：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>shared<span class="token punctuation">.</span>pending<span class="token operator">:</span>   u3 ─────┐ 
                                     <span class="token operator">^</span>      <span class="token operator">|</span>                                    
                                     └──────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着插入<code>u4</code>之后：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>shared<span class="token punctuation">.</span>pending <span class="token operator">===</span> u4<span class="token punctuation">;</span>
u4<span class="token punctuation">.</span>next <span class="token operator">===</span> u3<span class="token punctuation">;</span>
u3<span class="token punctuation">.</span>next <span class="token operator">===</span> u4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>shared.pending</code>是环状链表，用图表示为：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>shared<span class="token punctuation">.</span>pending<span class="token operator">:</span>   u4 ──<span class="token operator">&gt;</span> u3
                                     <span class="token operator">^</span>      <span class="token operator">|</span>                                    
                                     └──────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),I=e("code",null,"shared.pending",-1),L=e("code",null,"update",-1),P={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactUpdateQueue.new.js#L208",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"enqueueUpdate",-1),z=n(`<p>更新调度完成后进入<code>render阶段</code>。</p><p>此时<code>shared.pending</code>的环被剪开并连接在<code>updateQueue.lastBaseUpdate</code>后面：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>baseUpdate<span class="token operator">:</span> u1 <span class="token operator">--</span><span class="token operator">&gt;</span> u2 <span class="token operator">--</span><span class="token operator">&gt;</span> u3 <span class="token operator">--</span><span class="token operator">&gt;</span> u4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来遍历<code>updateQueue.baseUpdate</code>链表，以<code>fiber.updateQueue.baseState</code>为<code>初始state</code>，依次与遍历到的每个<code>Update</code>计算并产生新的<code>state</code>（该操作类比<code>Array.prototype.reduce</code>）。</p><p>在遍历时如果有优先级低的<code>Update</code>会被跳过。</p><p>当遍历完成后获得的<code>state</code>，就是该<code>Fiber节点</code>在本次更新的<code>state</code>（源码中叫做<code>memoizedState</code>）。</p>`,6),D=e("code",null,"render阶段",-1),J=e("code",null,"Update操作",-1),N=e("code",null,"processUpdateQueue",-1),T={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactUpdateQueue.new.js#L405",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"processUpdateQueue",-1),A=n("<p><code>state</code>的变化在<code>render阶段</code>产生与上次更新不同的<code>JSX</code>对象，通过<code>Diff算法</code>产生<code>effectTag</code>，在<code>commit阶段</code>渲染在页面上。</p><p>渲染完成后<code>workInProgress Fiber树</code>变为<code>current Fiber树</code>，整个更新流程结束。</p>",2);function M(O,W){const o=p("ExternalLinkIcon"),t=p("RouterLink");return l(),i("div",null,[u,e("blockquote",null,[e("p",null,[k,a("由"),b,a("方法返回，你可以从"),e("a",v,[a("这里"),s(o)]),a("看到"),m,a("的源码")])]),h,e("ul",null,[_,e("li",null,[e("p",null,[a("callback：更新的回调函数。即在"),s(t,{to:"/views/Books/Front-end/JustReact/renderer/layout.html#commitlayouteffectonfiber"},{default:c(()=>[a("commit 阶段的 layout 子阶段一节")]),_:1}),a("中提到的"),g,a("。")])]),f]),U,e("p",null,[a("从"),s(t,{to:"/views/Books/Front-end/JustReact/process/doubleBuffer.html"},{default:c(()=>[a("双缓存机制一节")]),_:1}),a("我们知道，"),y,a("组成"),Q,a("，页面中最多同时存在两棵"),j,a("：")]),F,e("p",null,[x,a("有三种类型，其中针对"),C,a("的类型我们在"),s(t,{to:"/views/Books/Front-end/JustReact/process/completeWork.html#update%E6%97%B6"},{default:c(()=>[a("completeWork一节")]),_:1}),a("介绍过。")]),w,e("blockquote",null,[e("p",null,[R,a("由"),B,a("方法返回，你可以从"),e("a",S,[a("这里"),s(o)]),a("看到"),q,a("的源码")])]),H,e("p",null,[I,a(" 会保证始终指向最后一个插入的"),L,a("，你可以在"),e("a",P,[a("这里"),s(o)]),a("看到"),E,a("的源码")]),z,e("blockquote",null,[e("p",null,[D,a("的"),J,a("由"),N,a("完成，你可以从"),e("a",T,[a("这里"),s(o)]),a("看到"),V,a("的源码")])]),A])}const Y=d(r,[["render",M],["__file","update.html.vue"]]);export{Y as default};