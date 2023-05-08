import{_ as o,X as p,Y as c,Z as s,$ as n,a0 as t,a4 as a,E as l}from"./framework-d8252107.js";const i={},u=a(`<p>当我们有了前面知识的铺垫，就很容易理解<code>this.setState</code>的工作流程。</p><h2 id="流程概览" tabindex="-1"><a class="header-anchor" href="#流程概览" aria-hidden="true">#</a> 流程概览</h2><p>可以看到，<code>this.setState</code>内会调用<code>this.updater.enqueueSetState</code>方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Component</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">partialState<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> partialState <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> partialState <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">||</span> partialState <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span> <span class="token string">&quot;setState(...): takes an object of state variables to update or a function which returns an object of state variables.&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>updater<span class="token punctuation">.</span><span class="token function">enqueueSetState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> partialState<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token string">&#39;setState&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react/src/ReactBaseClasses.js#L57",target:"_blank",rel:"noopener noreferrer"},r=a(`<p>在<code>enqueueSetState</code>方法中就是我们熟悉的从<code>创建update</code>到<code>调度update</code>的流程了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">enqueueSetState</span><span class="token punctuation">(</span><span class="token parameter">inst<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 通过组件实例获取对应fiber</span>
  <span class="token keyword">const</span> fiber <span class="token operator">=</span> <span class="token function">getInstance</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> eventTime <span class="token operator">=</span> <span class="token function">requestEventTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> suspenseConfig <span class="token operator">=</span> <span class="token function">requestCurrentSuspenseConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 获取优先级</span>
  <span class="token keyword">const</span> lane <span class="token operator">=</span> <span class="token function">requestUpdateLane</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> suspenseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建update</span>
  <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span>eventTime<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> suspenseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

  update<span class="token punctuation">.</span>payload <span class="token operator">=</span> payload<span class="token punctuation">;</span>

  <span class="token comment">// 赋值回调函数</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>callback <span class="token operator">=</span> callback<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 将update插入updateQueue</span>
  <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 调度update</span>
  <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberClassComponent.old.js#L196",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"enqueueSetState",-1),b=a(`<p>这里值得注意的是对于<code>ClassComponent</code>，<code>update.payload</code>为<code>this.setState</code>的第一个传参（即要改变的<code>state</code>）。</p><h2 id="this-forceupdate" tabindex="-1"><a class="header-anchor" href="#this-forceupdate" aria-hidden="true">#</a> this.forceUpdate</h2><p>在<code>this.updater</code>上，除了<code>enqueueSetState</code>外，还存在<code>enqueueForceUpdate</code>，当我们调用<code>this.forceUpdate</code>时会调用他。</p><p>可以看到，除了赋值<code>update.tag = ForceUpdate;</code>以及没有<code>payload</code>外，其他逻辑与<code>this.setState</code>一致。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">enqueueForceUpdate</span><span class="token punctuation">(</span><span class="token parameter">inst<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fiber <span class="token operator">=</span> <span class="token function">getInstance</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> eventTime <span class="token operator">=</span> <span class="token function">requestEventTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> suspenseConfig <span class="token operator">=</span> <span class="token function">requestCurrentSuspenseConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> lane <span class="token operator">=</span> <span class="token function">requestUpdateLane</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> suspenseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span>eventTime<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> suspenseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 赋值tag为ForceUpdate</span>
    update<span class="token punctuation">.</span>tag <span class="token operator">=</span> ForceUpdate<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      update<span class="token punctuation">.</span>callback <span class="token operator">=</span> callback<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),m={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberClassComponent.old.js#L260",target:"_blank",rel:"noopener noreferrer"},f=s("code",null,"enqueueForceUpdate",-1),h=a(`<p>那么赋值<code>update.tag = ForceUpdate;</code>有何作用呢？</p><p>在判断<code>ClassComponent</code>是否需要更新时有两个条件需要满足：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">const</span> shouldUpdate <span class="token operator">=</span>
  <span class="token function">checkHasForceUpdateAfterProcessing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span>
  <span class="token function">checkShouldComponentUpdate</span><span class="token punctuation">(</span>
    workInProgress<span class="token punctuation">,</span>
    ctor<span class="token punctuation">,</span>
    oldProps<span class="token punctuation">,</span>
    newProps<span class="token punctuation">,</span>
    oldState<span class="token punctuation">,</span>
    newState<span class="token punctuation">,</span>
    nextContext<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberClassComponent.old.js#L1137",target:"_blank",rel:"noopener noreferrer"},_=a("<ul><li><p>checkHasForceUpdateAfterProcessing：内部会判断本次更新的<code>Update</code>是否为<code>ForceUpdate</code>。即如果本次更新的<code>Update</code>中存在<code>tag</code>为<code>ForceUpdate</code>，则返回<code>true</code>。</p></li><li><p>checkShouldComponentUpdate：内部会调用<code>shouldComponentUpdate</code>方法。以及当该<code>ClassComponent</code>为<code>PureComponent</code>时会浅比较<code>state</code>与<code>props</code>。</p></li></ul>",1),C={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberClassComponent.old.js#L294",target:"_blank",rel:"noopener noreferrer"},U=s("code",null,"checkShouldComponentUpdate",-1),y=a('<p>所以，当某次更新含有<code>tag</code>为<code>ForceUpdate</code>的<code>Update</code>，那么当前<code>ClassComponent</code>不会受其他<code>性能优化手段</code>（<code>shouldComponentUpdate</code>|<code>PureComponent</code>）影响，一定会更新。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>至此，我们学习完了<code>HostRoot | ClassComponent</code>所使用的<code>Update</code>的更新流程。</p><p>在下一章我们会学习另一种数据结构的<code>Update</code> —— 用于<code>Hooks</code>的<code>Update</code>。</p>',4);function S(w,q){const e=l("ExternalLinkIcon");return p(),c("div",null,[u,s("blockquote",null,[s("p",null,[n("你可以在"),s("a",d,[n("这里"),t(e)]),n("看到这段代码")])]),r,s("blockquote",null,[s("p",null,[n("你可以在"),s("a",k,[n("这里"),t(e)]),n("看到"),v,n("代码")])]),b,s("blockquote",null,[s("p",null,[n("你可以在"),s("a",m,[n("这里"),t(e)]),n("看到"),f,n("代码")])]),h,s("blockquote",null,[s("p",null,[n("你可以在"),s("a",g,[n("这里"),t(e)]),n("看到这段代码")])]),_,s("blockquote",null,[s("p",null,[n("你可以在"),s("a",C,[n("这里"),t(e)]),n("看到"),U,n("代码")])]),y])}const F=o(i,[["render",S],["__file","setstate.html.vue"]]);export{F as default};
