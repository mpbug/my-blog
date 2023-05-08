import{_ as i,X as l,Y as u,Z as n,$ as s,a0 as a,a5 as c,a4 as t,E as p}from"./framework-d8252107.js";const r={},d=t(`<p>该阶段之所以称为<code>layout</code>，因为该阶段的代码都是在<code>DOM</code>修改完成（<code>mutation阶段</code>完成）后执行的。</p><p>注意：由于 JS 的同步执行阻塞了主线程，所以此时 JS 已经可以获取到新的<code>DOM</code>，但是浏览器对新的<code>DOM</code>并没有完成渲染。</p><p>该阶段触发的生命周期钩子和<code>hook</code>可以直接访问到已经改变后的<code>DOM</code>，即该阶段是可以参与<code>DOM layout</code>的阶段。</p><h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2><p>与前两个阶段类似，<code>layout阶段</code>也是遍历<code>effectList</code>，执行函数。</p><p>具体执行的函数是<code>commitLayoutEffects</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>root<span class="token punctuation">.</span>current <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span>

nextEffect <span class="token operator">=</span> firstEffect<span class="token punctuation">;</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">commitLayoutEffects</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">invariant</span><span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;Should be working on an effect.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">captureCommitPhaseError</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

nextEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commitlayouteffects" tabindex="-1"><a class="header-anchor" href="#commitlayouteffects" aria-hidden="true">#</a> commitLayoutEffects</h2><p>代码如下：</p>`,9),k={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2302",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"commitLayoutEffects",-1),m=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitLayoutEffects</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span> <span class="token literal-property property">committedLanes</span><span class="token operator">:</span> Lanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> effectTag <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>effectTag<span class="token punctuation">;</span>

    <span class="token comment">// 调用生命周期钩子和hook</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> <span class="token punctuation">(</span>Update <span class="token operator">|</span> Callback<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
      <span class="token function">commitLayoutEffectOnFiber</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> current<span class="token punctuation">,</span> nextEffect<span class="token punctuation">,</span> committedLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 赋值ref</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> Ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">commitAttachRef</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>commitLayoutEffects</code>一共做了两件事：</p><ol><li><p>commitLayoutEffectOnFiber（调用<code>生命周期钩子</code>和<code>hook</code>相关操作）</p></li><li><p>commitAttachRef（赋值 ref）</p></li></ol><h2 id="commitlayouteffectonfiber" tabindex="-1"><a class="header-anchor" href="#commitlayouteffectonfiber" aria-hidden="true">#</a> commitLayoutEffectOnFiber</h2><p><code>commitLayoutEffectOnFiber</code>方法会根据<code>fiber.tag</code>对不同类型的节点分别处理。</p>`,5),v={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberCommitWork.new.js#L459",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"commitLayoutEffectOnFiber",-1),h=n("code",null,"commitLayoutEffectOnFiber",-1),y=n("code",null,"commitLifeCycles",-1),_=n("code",null,"ClassComponent",-1),g=n("code",null,"current === null?",-1),E=n("code",null,"mount",-1),w=n("code",null,"update",-1),x={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberCommitWork.new.js#L538",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"componentDidMount",-1),F={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberCommitWork.new.js#L592",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"componentDidUpdate",-1),R=t(`<p>触发<code>状态更新</code>的<code>this.setState</code>如果赋值了第二个参数<code>回调函数</code>，也会在此时调用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">xxx</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i am update~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对于<code>FunctionComponent</code>及相关类型，他会调用<code>useLayoutEffect hook</code>的<code>回调函数</code>，调度<code>useEffect</code>的<code>销毁</code>与<code>回调</code>函数</li></ul><blockquote><p><code>相关类型</code>指特殊处理后的<code>FunctionComponent</code>，比如<code>ForwardRef</code>、<code>React.memo</code>包裹的<code>FunctionComponent</code></p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 以下都是FunctionComponent及相关类型</span>
    <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ForwardRef</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SimpleMemoComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Block</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 执行useLayoutEffect的回调函数</span>
      <span class="token function">commitHookEffectListMount</span><span class="token punctuation">(</span>HookLayout <span class="token operator">|</span> HookHasEffect<span class="token punctuation">,</span> finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 调度useEffect的销毁函数与回调函数</span>
      <span class="token function">schedulePassiveEffects</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),C={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L465-L491",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"mutation阶段",-1),W=n("code",null,"useLayoutEffect hook",-1),O=n("code",null,"销毁函数",-1),D=t(`<p>结合这里我们可以发现，<code>useLayoutEffect hook</code>从上一次更新的<code>销毁函数</code>调用到本次更新的<code>回调函数</code>调用是同步执行的。</p><p>而<code>useEffect</code>则需要先调度，在<code>Layout阶段</code>完成后再异步执行。</p><p>这就是<code>useLayoutEffect</code>与<code>useEffect</code>的区别。</p><ul><li>对于<code>HostRoot</code>，即<code>rootFiber</code>，如果赋值了第三个参数<code>回调函数</code>，也会在此时调用。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i am mount~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commitattachref" tabindex="-1"><a class="header-anchor" href="#commitattachref" aria-hidden="true">#</a> commitAttachRef</h2><p><code>commitLayoutEffects</code>会做的第二件事是<code>commitAttachRef</code>。</p>`,7),M={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberCommitWork.new.js#L823",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"commitAttachRef",-1),T=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commitAttachRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ref <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode<span class="token punctuation">;</span>

    <span class="token comment">// 获取DOM实例</span>
    <span class="token keyword">let</span> instanceToUse<span class="token punctuation">;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
        instanceToUse <span class="token operator">=</span> <span class="token function">getPublicInstance</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        instanceToUse <span class="token operator">=</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> ref <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果ref是函数形式，调用回调函数</span>
      <span class="token function">ref</span><span class="token punctuation">(</span>instanceToUse<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果ref是ref实例形式，赋值ref.current</span>
      ref<span class="token punctuation">.</span>current <span class="token operator">=</span> instanceToUse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码逻辑很简单：获取<code>DOM</code>实例，更新<code>ref</code>。</p><h2 id="current-fiber树切换" tabindex="-1"><a class="header-anchor" href="#current-fiber树切换" aria-hidden="true">#</a> current Fiber树切换</h2><p>至此，整个<code>layout阶段</code>就结束了。</p><p>在结束本节的学习前，我们关注下这行代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>root<span class="token punctuation">.</span>current <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),U={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2022",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"workInProgress Fiber树",-1),S=n("code",null,"commit阶段",-1),H=n("code",null,"current Fiber树",-1),N=n("code",null,"fiberRootNode",-1),I=n("code",null,"current Fiber树",-1),J=t('<p>那么这行代码为什么在这里呢？（在<code>mutation阶段</code>结束后，<code>layout阶段</code>开始前。）</p><p>我们知道<code>componentWillUnmount</code>会在<code>mutation阶段</code>执行。此时<code>current Fiber树</code>还指向前一次更新的<code>Fiber树</code>，在生命周期钩子内获取的<code>DOM</code>还是更新前的。</p><p><code>componentDidMount</code>和<code>componentDidUpdate</code>会在<code>layout阶段</code>执行。此时<code>current Fiber树</code>已经指向更新后的<code>Fiber树</code>，在生命周期钩子内获取的<code>DOM</code>就是更新后的。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>从这节我们学到，<code>layout阶段</code>会遍历<code>effectList</code>，依次执行<code>commitLayoutEffects</code>。该方法的主要工作为“根据<code>effectTag</code>调用不同的处理函数处理<code>Fiber</code>并更新<code>ref</code>。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',6),P={href:"https://blog.logrocket.com/useeffect-vs-uselayouteffect-examples/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://reactjs.org/docs/hooks-reference.html#uselayouteffect",target:"_blank",rel:"noopener noreferrer"};function X(Y,Z){const e=p("ExternalLinkIcon"),o=p("RouterLink");return l(),u("div",null,[d,n("blockquote",null,[n("p",null,[s("你可以在"),n("a",k,[s("这里"),a(e)]),s("看到"),f,s("源码")])]),m,n("blockquote",null,[n("p",null,[s("你可以在"),n("a",v,[s("这里"),a(e)]),s("看到"),b,s("源码（"),h,s("为别名，方法原名为"),y,s("）")])]),n("ul",null,[n("li",null,[s("对于"),_,s("，他会通过"),g,s("区分是"),E,s("还是"),w,s("，调用"),n("a",x,[L,a(e)]),s("或"),n("a",F,[j,a(e)]),s("。")])]),R,n("blockquote",null,[n("p",null,[s("你可以从"),n("a",C,[s("这里"),a(e)]),s("看到这段代码")])]),n("p",null,[s("在上一节介绍"),a(o,{to:"/views/Books/Front-end/JustReact/renderer/mutation.html#update-effect"},{default:c(()=>[s("Update effect")]),_:1}),s("时介绍过，"),q,s("会执行"),W,s("的"),O,s("。")]),D,n("blockquote",null,[n("p",null,[s("你可以在"),n("a",M,[s("这里"),a(e)]),s("看到"),B,s("源码")])]),T,n("blockquote",null,[n("p",null,[s("你可以在"),n("a",U,[s("这里"),a(e)]),s("看到这行代码")])]),n("p",null,[s("在"),a(o,{to:"/views/Books/Front-end/JustReact/process/doubleBuffer.html#%E4%BB%80%E4%B9%88%E6%98%AF-%E5%8F%8C%E7%BC%93%E5%AD%98"},{default:c(()=>[s("双缓存机制一节")]),_:1}),s("我们介绍过，"),A,s("在"),S,s("完成渲染后会变为"),H,s("。这行代码的作用就是切换"),N,s("指向的"),I,s("。")]),J,n("p",null,[n("a",P,[s("useeffect-vs-uselayouteffect-examples"),a(e)])]),n("p",null,[n("a",V,[s("hooks-reference.html#uselayouteffect"),a(e)])])])}const z=i(r,[["render",X],["__file","layout.html.vue"]]);export{z as default};