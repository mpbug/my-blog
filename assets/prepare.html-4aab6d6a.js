import{_ as d,X as a,Y as p,Z as e,$ as o,a0 as n,a1 as l,a4 as t,E as r}from"./framework-d8252107.js";const i={},u={class:"hint-container warning"},h=e("p",{class:"hint-container-title"},"注意",-1),m=e("p",null,[o("在开始本章学习前，你需要了解"),e("code",null,"Hooks"),o("的基本用法。")],-1),k=e("code",null,"Hooks",-1),_={href:"https://zh-hans.reactjs.org/docs/hooks-intro.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zh-hans.reactjs.org/docs/hooks-intro.html#motivation",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"Hooks",-1),b=e("code",null,"框架使用者",-1),C=e("code",null,"设计动机",-1),v=t('<p>但是，为了更好的理解<code>Hooks</code>的<code>源码架构</code>，我们需要转换身份，以<code>框架开发者</code>的角度来看待<code>Hooks</code>的<code>设计理念</code>。</p><h2 id="从logo聊起" tabindex="-1"><a class="header-anchor" href="#从logo聊起" aria-hidden="true">#</a> 从LOGO聊起</h2>',2),H=["src"],R=t(`<p><code>React</code> <code>LOGO</code>的图案是代表<code>原子</code>（<code>atom</code>）的符号。世间万物由<code>原子</code>组成，<code>原子</code>的<code>类型</code>与<code>属性</code>决定了事物的外观与表现。</p><p>同样，在<code>React</code>中，我们可以将<code>UI</code>拆分为很多独立的单元，每个单元被称为<code>Component</code>。这些<code>Component</code>的<code>属性</code>与<code>类型</code>决定了<code>UI</code>的外观与表现。</p><p>讽刺的是，<code>原子</code>在希腊语中的意思为<code>不可分割的</code>（<code>indivisible</code>），但随后科学家在原子中发现了更小的粒子 —— 电子（<code>electron</code>）。电子可以很好的解释<code>原子</code>是如何工作的。</p><p>在<code>React</code>中，我们可以说<code>ClassComponent</code>是一类<code>原子</code>。</p><p>但对于<code>Hooks</code>来说，与其说是一类<code>原子</code>，不如说他是更贴近事物<code>运行规律</code>的<code>电子</code>。</p><p>我们知道，<code>React</code>的架构遵循<code>schedule - render - commit</code>的运行流程，这个流程是<code>React</code>世界最底层的<code>运行规律</code>。</p><p><code>ClassComponent</code>作为<code>React</code>世界的<code>原子</code>，他的<code>生命周期</code>（<code>componentWillXXX</code>/<code>componentDidXXX</code>）是为了介入<code>React</code>的运行流程而实现的更上层抽象，这么做是为了方便<code>框架使用者</code>更容易上手。</p><p>相比于<code>ClassComponent</code>的更上层抽象，<code>Hooks</code>则更贴近<code>React</code>内部运行的各种概念（<code>state</code> | <code>context</code> | <code>life-cycle</code>）。</p><p>作为使用<code>React</code>技术栈的开发者，当我们初次学习<code>Hooks</code>时，不管是官方文档还是身边有经验的同事，总会拿<code>ClassComponent</code>的生命周期来类比<code>Hooks API</code>的执行时机。</p><p>这固然是很好的上手方式，但是当我们熟练运用<code>Hooks</code>时，就会发现，这两者的概念有很多割裂感，并不是同一抽象层次可以互相替代的概念。</p><p>比如：替代<code>componentWillReceiveProps</code>的<code>Hooks</code>是什么呢？</p><p>可能有些同学会回答，是<code>useEffect</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token function">useEffect</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;something updated&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>props<span class="token punctuation">.</span>something<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是<code>componentWillReceiveProps</code>是在<code>render阶段</code>执行，而<code>useEffect</code>是在<code>commit阶段</code>完成渲染后异步执行。</p>`,14),w=e("code",null,"componentWillReceiveProps",-1),x={href:"https://juejin.im/post/5f05a3e25188252e5c576cdb",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,[o("所以，从源码运行规律的角度看待"),e("code",null,"Hooks"),o("，可能是更好的角度。这也是为什么上文说"),e("code",null,"Hooks"),o("是"),e("code",null,"React"),o("世界的"),e("code",null,"电子"),o("而不是"),e("code",null,"原子"),o("的原因。")],-1),X={href:"https://www.youtube.com/watch?v=dpw9EHDh2bM&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"},j=t('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><code>Concurrent Mode</code>是<code>React</code>未来的发展方向，而<code>Hooks</code>是能够最大限度发挥<code>Concurrent Mode</code>潜力的<code>Component</code>构建方式。</p><p>正如Dan在<code>React Conf 2018</code>演讲结尾所说：你可以从<code>React</code>的<code>LOGO</code>中看到这些围绕着<code>核心</code>的<code>电子飞行轨道</code>，<code>Hooks</code>可能一直就在其中。</p>',3);function E(s,D){const c=r("ExternalLinkIcon");return a(),p("div",null,[e("div",u,[h,m,e("p",null,[o("如果你还未使用过"),k,o("，可以从"),e("a",_,[o("官方文档"),n(c)]),o("开始。")])]),e("p",null,[o("你可以从"),e("a",f,[o("这里"),n(c)]),o("了解"),g,o("的设计动机。作为一名"),b,o("，了解"),C,o("对于我们日常开发就足够了。")]),v,e("img",{src:s.$withBase("/img/logo.png"),alt:"LOGO"},null,8,H),R,e("blockquote",null,[e("p",null,[o("这篇文章可以帮你更好理解"),w,o("："),e("a",x,[o("深入源码剖析componentWillXXX为什么UNSAFE"),n(c)])])]),O,e("blockquote",null,[e("p",null,[o("以上见解参考自"),e("a",X,[o("React Core Team Dan在 React Conf2018的演讲"),n(c)])])]),l(' ## Hooks设计动机\n\n那么真的有`Hooks`能做而`ClassComponent`无法实现的`feature`么？\n\n是的。\n\n让我们再来看看`React`耗时三年重构完成的`Fiber结构`。在之前的章节我们讲过，这次重构的一大目的是**使更新可以异步执行并且可中断**。\n\n现在让我们看看另一大目的：**使同一组件在同一时间可以拥有多个状态，即同一个组件可以拥有多条时间线**。\n\n<img :src="$withBase(\'/img/hooks-mental.png\')" alt="hooks设计理念">\n\n> [React Core Team Sebastian谈Hooks设计动机](https://twitter.com/sebmarkbage/status/1084539728743956481)\n\n`fiber`可以直译为`光纤`。\n\n<img :src="$withBase(\'/img/lightfiber.jpg\')" alt="fiber">\n\n可以看到，一束`光纤`内部存在多束同时工作的玻璃芯。在`React`中，每条玻璃芯代表一个`Component`的时间线。\n\n由于`ClassComponent`遵循`OOP`原则，`逻辑`和`状态`耦合在`实例`内部，无法在同一时间拥有多个`状态`（即同一时间只存在一个`this.state`）。\n\n对于`Hooks`来说，`FunctionComponent`契合`FP`的编程思想（即`无状态`），更新组件时`Hooks`的`状态`保存在`闭包`中。换言之，同一`FunctionComponent`在同一时间可以拥有保存在不同`闭包`中的多个`状态`。\n\n::: details 多条时间线 Demo\n\n你可以使用[useDeferredValue](https://zh-hans.reactjs.org/docs/concurrent-mode-reference.html#usedeferredvalue)使同一组件的某个`状态`在同一时间拥有多条时间线。\n\n不同时间线重合的时间视**用户设备的性能**不同而不同。\n\n在Demo中，你可以从控制台看到不同`状态`的`值`与`更新时间`\n\n[Demo](https://codesandbox.io/s/friendly-bush-hk5co)\n\n::: '),j])}const L=d(i,[["render",E],["__file","prepare.html.vue"]]);export{L as default};
