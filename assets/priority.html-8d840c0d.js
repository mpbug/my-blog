import{_ as d,X as l,Y as i,Z as e,$ as a,a0 as s,a5 as t,a1 as u,a4 as p,E as c}from"./framework-d8252107.js";const k={},v=e("code",null,"更新",-1),b=e("code",null,"优先级",-1),h=e("p",null,[a("那么什么是"),e("code",null,"优先级"),a("？"),e("code",null,"优先级"),a("以什么为依据？如何通过"),e("code",null,"优先级"),a("决定哪个状态应该先被更新？")],-1),m=e("p",null,"本节我们会详细讲解。",-1),_=e("h2",{id:"什么是优先级",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是优先级","aria-hidden":"true"},"#"),a(" 什么是优先级")],-1),g=e("code",null,"React",-1),y=e("code",null,"UI",-1),f=e("code",null,"React",-1),U=p('<p><code>状态更新</code>由<code>用户交互</code>产生，用户心里对<code>交互</code>执行顺序有个预期。<code>React</code>根据<code>人机交互研究的结果</code>中用户对<code>交互</code>的预期顺序为<code>交互</code>产生的<code>状态更新</code>赋予不同优先级。</p><p>具体如下：</p><ul><li><p>生命周期方法：同步执行。</p></li><li><p>受控的用户输入：比如输入框内输入文字，同步执行。</p></li><li><p>交互事件：比如动画，高优先级执行。</p></li><li><p>其他：比如数据请求，低优先级执行。</p></li></ul><h2 id="如何调度优先级" tabindex="-1"><a class="header-anchor" href="#如何调度优先级" aria-hidden="true">#</a> 如何调度优先级</h2>',4),B=e("code",null,"React",-1),j=e("code",null,"Scheduler",-1),w=p("<p>具体到代码，每当需要调度任务时，<code>React</code>会调用<code>Scheduler</code>提供的方法<code>runWithPriority</code>。</p><p>该方法接收一个<code>优先级</code>常量与一个<code>回调函数</code>作为参数。<code>回调函数</code>会以<code>优先级</code>高低为顺序排列在一个<code>定时器</code>中并在合适的时间触发。</p>",2),x=e("code",null,"回调函数",-1),R=e("code",null,"render阶段的入口函数",-1),S={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/scheduler/src/Scheduler.js#L217",target:"_blank",rel:"noopener noreferrer"},E=e("mark",null,"unstable_runWithPriority",-1),A=e("code",null,"runWithPriority",-1),Q={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/scheduler/src/SchedulerPriorities.js",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"Scheduler",-1),I=e("h2",{id:"例子",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#例子","aria-hidden":"true"},"#"),a(" 例子")],-1),F=e("p",null,[a("优先级最终会反映到"),e("code",null,"update.lane"),a("变量上。当前我们只需要知道这个变量能够区分"),e("code",null,"Update"),a("的优先级。")],-1),D=e("p",null,[a("接下来我们通过一个例子结合上一节介绍的"),e("code",null,"Update"),a("相关字段讲解优先级如何决定更新的顺序。")],-1),L={href:"https://twitter.com/acdlite/status/978412930973687808",target:"_blank",rel:"noopener noreferrer"},P=["src"],X=p(`<p>在这个例子中，有两个<code>Update</code>。我们将“关闭黑夜模式”产生的<code>Update</code>称为<code>u1</code>，输入字母“I”产生的<code>Update</code>称为<code>u2</code>。</p><p>其中<code>u1</code>先触发并进入<code>render阶段</code>。其优先级较低，执行时间较长。此时：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">baseState</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">blackTheme</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;H&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">firstBaseUpdate</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastBaseUpdate</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pending</span><span class="token operator">:</span> u1
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>u1</code>完成<code>render阶段</code>前用户通过键盘输入字母“I”，产生了<code>u2</code>。<code>u2</code>属于<strong>受控的用户输入</strong>，优先级高于<code>u1</code>，于是中断<code>u1</code>产生的<code>render阶段</code>。</p><p>此时：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">.</span>shared<span class="token punctuation">.</span>pending <span class="token operator">===</span> u2 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> u1
                                     <span class="token operator">^</span>        <span class="token operator">|</span>
                                     <span class="token operator">|</span>________<span class="token operator">|</span>
<span class="token comment">// 即</span>
u2<span class="token punctuation">.</span>next <span class="token operator">===</span> u1<span class="token punctuation">;</span>
u1<span class="token punctuation">.</span>next <span class="token operator">===</span> u2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>u2</code>优先级高于<code>u1</code>。</p><p>接下来进入<code>u2</code>产生的<code>render阶段</code>。</p><p>在<code>processUpdateQueue</code>方法中，<code>shared.pending</code>环状链表会被剪开并拼接在<code>baseUpdate</code>后面。</p><p>需要明确一点，<code>shared.pending</code>指向最后一个<code>pending</code>的<code>update</code>，所以实际执行时<code>update</code>的顺序为：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>u1 <span class="token operator">--</span> u2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来遍历<code>baseUpdate</code>，处理优先级合适的<code>Update</code>（这一次处理的是更高优的<code>u2</code>）。</p><p>由于<code>u2</code>不是<code>baseUpdate</code>中的第一个<code>update</code>，在其之前的<code>u1</code>由于优先级不够被跳过。</p><p><code>update</code>之间可能有依赖关系，所以被跳过的<code>update</code>及其后面所有<code>update</code>会成为下次更新的<code>baseUpdate</code>。（即<code>u1 -- u2</code>）。</p><p>最终<code>u2</code>完成<code>render - commit阶段</code>。</p><p>此时：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">baseState</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">blackTheme</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;HI&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">firstBaseUpdate</span><span class="token operator">:</span> u1<span class="token punctuation">,</span>
  <span class="token literal-property property">lastBaseUpdate</span><span class="token operator">:</span> u2
  <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pending</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>commit</code>阶段结尾会再调度一次更新。在该次更新中会基于<code>baseState</code>中<code>firstBaseUpdate</code>保存的<code>u1</code>，开启一次新的<code>render阶段</code>。</p><p>最终两次<code>Update</code>都完成后的结果如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fiber<span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">baseState</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">blackTheme</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;HI&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">firstBaseUpdate</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastBaseUpdate</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pending</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看见，<code>u2</code>对应的更新执行了两次，相应的<code>render阶段</code>的生命周期勾子<code>componentWillXXX</code>也会触发两次。这也是为什么这些勾子会被标记为<code>unsafe_</code>。</p><h2 id="如何保证状态正确" tabindex="-1"><a class="header-anchor" href="#如何保证状态正确" aria-hidden="true">#</a> 如何保证状态正确</h2><p>现在我们基本掌握了<code>updateQueue</code>的工作流程。还有两个疑问：</p><ul><li><p><code>render阶段</code>可能被中断。如何保证<code>updateQueue</code>中保存的<code>Update</code>不丢失？</p></li><li><p>有时候当前<code>状态</code>需要依赖前一个<code>状态</code>。如何在支持跳过<code>低优先级状态</code>的同时保证<strong>状态依赖的连续性</strong>？</p></li></ul><p>我们分别讲解下。</p><h3 id="如何保证update不丢失" tabindex="-1"><a class="header-anchor" href="#如何保证update不丢失" aria-hidden="true">#</a> 如何保证<code>Update</code>不丢失</h3>`,26),J=e("code",null,"render阶段",-1),N=e("code",null,"shared.pending",-1),T=e("code",null,"updateQueue.lastBaseUpdate",-1),W=e("p",null,[a("实际上"),e("code",null,"shared.pending"),a("会被同时连接在"),e("code",null,"workInProgress updateQueue.lastBaseUpdate"),a("与"),e("code",null,"current updateQueue.lastBaseUpdate"),a("后面。")],-1),V={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactUpdateQueue.new.js#L424",target:"_blank",rel:"noopener noreferrer"},q=p(`<p>当<code>render阶段</code>被中断后重新开始时，会基于<code>current updateQueue</code>克隆出<code>workInProgress updateQueue</code>。由于<code>current updateQueue.lastBaseUpdate</code>已经保存了上一次的<code>Update</code>，所以不会丢失。</p><p>当<code>commit阶段</code>完成渲染，由于<code>workInProgress updateQueue.lastBaseUpdate</code>中保存了上一次的<code>Update</code>，所以 <code>workInProgress Fiber树</code>变成<code>current Fiber树</code>后也不会造成<code>Update</code>丢失。</p><h3 id="如何保证状态依赖的连续性" tabindex="-1"><a class="header-anchor" href="#如何保证状态依赖的连续性" aria-hidden="true">#</a> 如何保证状态依赖的连续性</h3><p>当某个<code>Update</code>由于优先级低而被跳过时，保存在<code>baseUpdate</code>中的不仅是该<code>Update</code>，还包括链表中该<code>Update</code>之后的所有<code>Update</code>。</p><p>考虑如下例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">baseState</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
shared<span class="token punctuation">.</span>pending<span class="token operator">:</span> <span class="token constant">A1</span> <span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token constant">B2</span> <span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token constant">C1</span> <span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token constant">D2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>字母</code>代表该<code>Update</code>要在页面插入的字母，<code>数字</code>代表<code>优先级</code>，值越低<code>优先级</code>越高。</p><p>第一次<code>render</code>，<code>优先级</code>为1。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">baseState</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token literal-property property">baseUpdate</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token literal-property property">render阶段使用的Update</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">A1</span><span class="token punctuation">,</span> <span class="token constant">C1</span><span class="token punctuation">]</span>
<span class="token literal-property property">memoizedState</span><span class="token operator">:</span> <span class="token string">&#39;AC&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>B2</code>由于优先级为2，低于当前优先级，所以他及其后面的所有<code>Update</code>会被保存在<code>baseUpdate</code>中作为下次更新的<code>Update</code>（即<code>B2 C1 D2</code>）。</p><p>这么做是为了保持<code>状态</code>的前后依赖顺序。</p><p>第二次<code>render</code>，<code>优先级</code>为2。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">baseState</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span>
<span class="token literal-property property">baseUpdate</span><span class="token operator">:</span> <span class="token constant">B2</span> <span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token constant">C1</span> <span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token constant">D2</span>
<span class="token literal-property property">render阶段使用的Update</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">B2</span><span class="token punctuation">,</span> <span class="token constant">C1</span><span class="token punctuation">,</span> <span class="token constant">D2</span><span class="token punctuation">]</span>
<span class="token literal-property property">memoizedState</span><span class="token operator">:</span> <span class="token string">&#39;ABCD&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意这里<code>baseState</code>并不是上一次更新的<code>memoizedState</code>。这是由于<code>B2</code>被跳过了。</p><p>即当有<code>Update</code>被跳过时，<code>下次更新的baseState !== 上次更新的memoizedState</code>。</p>`,15),z=e("code",null,"B2",-1),H={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactUpdateQueue.new.js#L479",target:"_blank",rel:"noopener noreferrer"},$=e("p",null,[a("通过以上例子我们可以发现，"),e("code",null,"React"),a("保证最终的状态一定和用户触发的"),e("code",null,"交互"),a("一致，但是中间过程"),e("code",null,"状态"),a("可能由于设备不同而不同。")],-1),Y={class:"hint-container details"},Z=e("summary",null,"高优先级任务打断低优先级任务Demo",-1),G=e("strong",null,"815",-1),K=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),M={href:"https://juejin.im/post/5f05a3e25188252e5c576cdb",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactUpdateQueue.new.js#L10",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://twitter.com/acdlite/status/978412930973687808",target:"_blank",rel:"noopener noreferrer"};function ae(r,se){const o=c("RouterLink"),n=c("ExternalLinkIcon");return l(),i("div",null,[e("p",null,[a("通过"),s(o,{to:"/views/Books/Front-end/JustReact/state/mental.html"},{default:t(()=>[a("更新的心智模型")]),_:1}),a("，我们了解到"),v,a("具有"),b,a("。")]),h,m,_,e("p",null,[a("在"),s(o,{to:"/views/Books/Front-end/JustReact/preparation/idea.html#%E7%90%86%E8%A7%A3-%E5%93%8D%E5%BA%94%E8%87%AA%E7%84%B6"},{default:t(()=>[a("React理念一节")]),_:1}),a("我们聊到"),g,a("将人机交互研究的结果整合到真实的"),y,a("中。具体到"),f,a("运行上这是什么意思呢？")]),U,e("p",null,[a("我们在"),s(o,{to:"/views/Books/Front-end/JustReact/preparation/newConstructure.html"},{default:t(()=>[a("新的React结构一节")]),_:1}),a("讲到，"),B,a("通过"),j,a("调度任务。")]),w,e("p",null,[a("对于更新来讲，传递的"),x,a("一般为"),s(o,{to:"/views/Books/Front-end/JustReact/state/prepare.html#render%E9%98%B6%E6%AE%B5%E7%9A%84%E5%BC%80%E5%A7%8B"},{default:t(()=>[a("状态更新流程概览一节")]),_:1}),a("讲到的"),R,a("。")]),e("blockquote",null,[e("p",null,[a("你可以在"),e("a",S,[E,a(" 这里"),s(n)]),a("看到"),A,a("方法的定义。在"),e("a",Q,[a("这里"),s(n)]),a("看到"),C,a("对优先级常量的定义。")])]),I,F,D,e("blockquote",null,[e("p",null,[a("该例子来自"),e("a",L,[a("React Core Team Andrew向网友讲解Update工作流程的推文"),s(n)])])]),e("img",{src:r.$withBase("/img/update-process.png"),alt:"优先级如何决定更新的顺序"},null,8,P),X,e("p",null,[a("在"),s(o,{to:"/views/Books/Front-end/JustReact/state/update.html#%E4%BE%8B%E5%AD%90"},{default:t(()=>[a("上一节例子")]),_:1}),a("中我们讲到，在"),J,a("，"),N,a("的环被剪开并连接在"),T,a("后面。")]),W,e("blockquote",null,[e("p",null,[a("具体代码见"),e("a",V,[a("这里"),s(n)])])]),q,e("blockquote",null,[e("p",null,[a("跳过"),z,a("的逻辑见"),e("a",H,[a("这里"),s(n)])])]),$,e("details",Y,[Z,e("p",null,[s(o,{to:"/views/Books/Front-end/JustReact/me.html"},{default:t(()=>[a("关注公众号")]),_:1}),a("，后台回复"),G,a("获得在线Demo地址")])]),K,e("p",null,[e("a",M,[a("深入源码剖析componentWillXXX为什么UNSAFE"),s(n)])]),e("p",null,[e("a",O,[a("React源码中讲解Update工作流程及优先级的注释"),s(n)])]),e("p",null,[e("a",ee,[a("React Core Team Andrew向网友讲解Update工作流程的推文"),s(n)])]),u(" beginWork getStateFromUpdate ")])}const oe=d(k,[["render",ae],["__file","priority.html.vue"]]);export{oe as default};