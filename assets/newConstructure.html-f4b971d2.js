import{_ as d,X as i,Y as p,Z as e,$ as n,a0 as s,a5 as c,a4 as t,E as r}from"./framework-d8252107.js";const u={},h=t('<p>上一节我们聊到React15架构不能支撑异步更新以至于需要重构。那么这一节我们来学习重构后的React16是如何支持异步更新的。</p><h2 id="react16架构" tabindex="-1"><a class="header-anchor" href="#react16架构" aria-hidden="true">#</a> React16架构</h2><p>React16架构可以分为三层：</p><ul><li>Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入<strong>Reconciler</strong></li><li>Reconciler（协调器）—— 负责找出变化的组件</li><li>Renderer（渲染器）—— 负责将变化的组件渲染到页面上</li></ul><p>可以看到，相较于React15，React16中新增了<strong>Scheduler（调度器）</strong>，让我们来了解下他。</p><h3 id="scheduler-调度器" tabindex="-1"><a class="header-anchor" href="#scheduler-调度器" aria-hidden="true">#</a> Scheduler（调度器）</h3><p>既然我们以浏览器是否有剩余时间作为任务中断的标准，那么我们需要一种机制，当浏览器有剩余时间时通知我们。</p>',7),_={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"React",-1),m=t("<ul><li>浏览器兼容性</li><li>触发频率不稳定，受很多因素影响。比如当我们的浏览器切换tab后，之前tab注册的<code>requestIdleCallback</code>触发的频率会变得很低</li></ul><p>基于以上原因，<code>React</code>实现了功能更完备的<code>requestIdleCallback</code>polyfill，这就是<strong>Scheduler</strong>。除了在空闲时触发回调的功能外，<strong>Scheduler</strong>还提供了多种调度优先级供任务设置。</p>",2),b={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/README.md",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"React",-1),R=e("h3",{id:"reconciler-协调器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reconciler-协调器","aria-hidden":"true"},"#"),n(" Reconciler（协调器）")],-1),f=e("strong",null,"Reconciler",-1),v={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1673",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>我们可以看见，更新工作从递归变成了可以中断的循环过程。每次循环都会调用<code>shouldYield</code>判断当前是否有剩余时间。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@noinline</span> */</span>
<span class="token keyword">function</span> <span class="token function">workLoopConcurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Perform work until Scheduler asks us to yield</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">shouldYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    workInProgress <span class="token operator">=</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么React16是如何解决中断更新时DOM渲染不完全的问题呢？</p><p>在React16中，<strong>Reconciler</strong>与<strong>Renderer</strong>不再是交替工作。当<strong>Scheduler</strong>将任务交给<strong>Reconciler</strong>后，<strong>Reconciler</strong>会为变化的虚拟DOM打上代表增/删/更新的标记，类似这样：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> Placement <span class="token operator">=</span> <span class="token comment">/*             */</span> <span class="token number">0b0000000000010</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Update <span class="token operator">=</span> <span class="token comment">/*                */</span> <span class="token number">0b0000000000100</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> PlacementAndUpdate <span class="token operator">=</span> <span class="token comment">/*    */</span> <span class="token number">0b0000000000110</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Deletion <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b0000000001000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),x={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactSideEffectTags.js",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,[n("整个"),e("strong",null,"Scheduler"),n("与"),e("strong",null,"Reconciler"),n("的工作都在内存中进行。只有当所有组件都完成"),e("strong",null,"Reconciler"),n("的工作，才会统一交给"),e("strong",null,"Renderer"),n("。")],-1),D={href:"https://zh-hans.reactjs.org/docs/codebase-overview.html#fiber-reconciler",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"React",-1),S=e("strong",null,"Reconciler",-1),j=e("h3",{id:"renderer-渲染器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#renderer-渲染器","aria-hidden":"true"},"#"),n(" Renderer（渲染器）")],-1),I=e("p",null,[e("strong",null,"Renderer"),n("根据"),e("strong",null,"Reconciler"),n("为虚拟DOM打的标记，同步执行对应的DOM操作。")],-1),P=e("p",null,"所以，对于我们在上一节使用过的Demo",-1),M={class:"hint-container details"},q=e("summary",null,"乘法小Demo",-1),L=e("strong",null,"222",-1),O=e("p",null,[e("code",null,"state.count = 1"),n("，每次点击按钮"),e("code",null,"state.count++")],-1),B=e("p",null,[n("列表中3个元素的值分别为1，2，3乘以"),e("code",null,"state.count"),n("的结果")],-1),E=e("p",null,"在React16架构中整个更新流程为：",-1),N=["src"],W=e("p",null,"其中红框中的步骤随时可能由于以下原因被中断：",-1),A=e("ul",null,[e("li",null,"有其他更高优任务需要先更新"),e("li",null,"当前帧没有剩余时间")],-1),F=e("p",null,"由于红框中的工作都在内存中进行，不会更新页面上的DOM，所以即使反复中断，用户也不会看见更新不完全的DOM（即上一节演示的情况）。",-1),V=e("strong",null,"Scheduler",-1),T=e("strong",null,"Reconciler",-1),z=e("code",null,"React",-1),J={href:"https://www.npmjs.com/package/react-reconciler",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"ReactDOM",-1),Y=e("strong",null,"参考资料",-1),G=t('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>通过本节我们知道了<code>React16</code>采用新的<code>Reconciler</code>。</p><p><code>Reconciler</code>内部采用了<code>Fiber</code>的架构。</p><p><code>Fiber</code>是什么？他和<code>Reconciler</code>或者说和<code>React</code>之间是什么关系？我们会在接下来三节解答。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',5),H={href:"https://www.youtube.com/watch?v=CGpMlWVcHok&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=7",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://agent-hunt.medium.com/hello-world-custom-react-renderer-9a95b7cd04bc",target:"_blank",rel:"noopener noreferrer"},$={class:"hint-container details"},X=e("summary",null,"同步/Debounce/Throttle/并发 情况下性能对比Demo",-1),K=e("strong",null,"323",-1);function Q(l,ee){const o=r("ExternalLinkIcon"),a=r("RouterLink");return i(),p("div",null,[h,e("p",null,[n("其实部分浏览器已经实现了这个API，这就是"),e("a",_,[n("requestIdleCallback"),s(o)]),n("。但是由于以下因素，"),k,n("放弃使用：")]),m,e("blockquote",null,[e("p",null,[e("a",b,[n("Scheduler"),s(o)]),n("是独立于"),g,n("的库")])]),R,e("p",null,[n("我们知道，在React15中"),f,n("是递归处理虚拟DOM的。让我们看看"),e("a",v,[n("React16的Reconciler"),s(o)]),n("。")]),w,e("blockquote",null,[e("p",null,[n("全部的标记见"),e("a",x,[n("这里"),s(o)])])]),y,e("blockquote",null,[e("p",null,[n("你可以在"),e("a",D,[n("这里"),s(o)]),n("看到"),C,n("官方对React16新"),S,n("的解释")])]),j,I,P,e("details",M,[q,e("p",null,[s(a,{to:"/views/Books/Front-end/JustReact/me.html"},{default:c(()=>[n("关注公众号")]),_:1}),n("，后台回复"),L,n("获得在线Demo地址")]),O,B]),E,e("img",{src:l.$withBase("/img/process.png"),alt:"更新流程"},null,8,N),W,A,F,e("blockquote",null,[e("p",null,[n("实际上，由于"),V,n("和"),T,n("都是平台无关的，所以"),z,n("为他们单独发了一个包"),e("a",J,[n("react-Reconciler"),s(o)]),n("。你可以用这个包自己实现一个"),U,n("，具体见"),Y])]),G,e("p",null,[e("a",H,[n("「英文 外网」Building a Custom React Renderer | React前经理Sophie Alpert"),s(o)]),e("a",Z,[n("hello-world-custom-react-renderer"),s(o)])]),e("details",$,[X,e("p",null,[s(a,{to:"/views/Books/Front-end/JustReact/me.html"},{default:c(()=>[n("关注公众号")]),_:1}),n("，后台回复"),K,n("获得在线Demo地址")])])])}const se=d(u,[["render",Q],["__file","newConstructure.html.vue"]]);export{se as default};
