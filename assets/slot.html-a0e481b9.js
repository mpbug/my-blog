const t=JSON.parse(`{"key":"v-56bf3b06","path":"/views/Books/Front-end/JustVue2/extend/slot.html","title":"slot","lang":"zh-CN","frontmatter":{"description":"slot Vue 的组件提供了一个非常有用的特性 —— slot 插槽，它让组件的实现变的更加灵活。我们平时在开发组件库的时候，为了让组件更加灵活可定制，经常用插槽的方式让用户可以自定义内容。插槽分为普通插槽和作用域插槽，它们可以解决不同的场景，但它是怎么实现的呢，下面我们就从源码的角度来分析插槽的实现原理。 普通插槽 为了更加直观，我们还是通过一个例子来分析插槽的实现： let AppLayout = { template: '&lt;div class=\\"container\\"&gt;' + '&lt;header&gt;&lt;slot name=\\"header\\"&gt;&lt;/slot&gt;&lt;/header&gt;' + '&lt;main&gt;&lt;slot&gt;默认内容&lt;/slot&gt;&lt;/main&gt;' + '&lt;footer&gt;&lt;slot name=\\"footer\\"&gt;&lt;/slot&gt;&lt;/footer&gt;' + '&lt;/div&gt;' } let vm = new Vue({ el: '#app', template: '&lt;div&gt;' + '&lt;app-layout&gt;' + '&lt;h1 slot=\\"header\\"&gt;{{title}}&lt;/h1&gt;' + '&lt;p&gt;{{msg}}&lt;/p&gt;' + '&lt;p slot=\\"footer\\"&gt;{{desc}}&lt;/p&gt;' + '&lt;/app-layout&gt;' + '&lt;/div&gt;', data() { return { title: '我是标题', msg: '我是内容', desc: '其它信息' } }, components: { AppLayout } })","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/JustVue2/extend/slot.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"slot"}],["meta",{"property":"og:description","content":"slot Vue 的组件提供了一个非常有用的特性 —— slot 插槽，它让组件的实现变的更加灵活。我们平时在开发组件库的时候，为了让组件更加灵活可定制，经常用插槽的方式让用户可以自定义内容。插槽分为普通插槽和作用域插槽，它们可以解决不同的场景，但它是怎么实现的呢，下面我们就从源码的角度来分析插槽的实现原理。 普通插槽 为了更加直观，我们还是通过一个例子来分析插槽的实现： let AppLayout = { template: '&lt;div class=\\"container\\"&gt;' + '&lt;header&gt;&lt;slot name=\\"header\\"&gt;&lt;/slot&gt;&lt;/header&gt;' + '&lt;main&gt;&lt;slot&gt;默认内容&lt;/slot&gt;&lt;/main&gt;' + '&lt;footer&gt;&lt;slot name=\\"footer\\"&gt;&lt;/slot&gt;&lt;/footer&gt;' + '&lt;/div&gt;' } let vm = new Vue({ el: '#app', template: '&lt;div&gt;' + '&lt;app-layout&gt;' + '&lt;h1 slot=\\"header\\"&gt;{{title}}&lt;/h1&gt;' + '&lt;p&gt;{{msg}}&lt;/p&gt;' + '&lt;p slot=\\"footer\\"&gt;{{desc}}&lt;/p&gt;' + '&lt;/app-layout&gt;' + '&lt;/div&gt;', data() { return { title: '我是标题', msg: '我是内容', desc: '其它信息' } }, components: { AppLayout } })"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"slot\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"普通插槽","slug":"普通插槽","link":"#普通插槽","children":[]},{"level":2,"title":"编译","slug":"编译","link":"#编译","children":[]},{"level":2,"title":"作用域插槽","slug":"作用域插槽","link":"#作用域插槽","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":12,"words":3601},"filePathRelative":"views/Books/Front-end/JustVue2/extend/slot.md","excerpt":"<h1> slot</h1>\\n<p>Vue 的组件提供了一个非常有用的特性 —— <code>slot</code> 插槽，它让组件的实现变的更加灵活。我们平时在开发组件库的时候，为了让组件更加灵活可定制，经常用插槽的方式让用户可以自定义内容。插槽分为普通插槽和作用域插槽，它们可以解决不同的场景，但它是怎么实现的呢，下面我们就从源码的角度来分析插槽的实现原理。</p>\\n<h2> 普通插槽</h2>\\n<p>为了更加直观，我们还是通过一个例子来分析插槽的实现：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">let</span> AppLayout <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">template</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'&lt;div class=\\"container\\"&gt;'</span> <span class=\\"token operator\\">+</span>\\n  <span class=\\"token string\\">'&lt;header&gt;&lt;slot name=\\"header\\"&gt;&lt;/slot&gt;&lt;/header&gt;'</span> <span class=\\"token operator\\">+</span>\\n  <span class=\\"token string\\">'&lt;main&gt;&lt;slot&gt;默认内容&lt;/slot&gt;&lt;/main&gt;'</span> <span class=\\"token operator\\">+</span>\\n  <span class=\\"token string\\">'&lt;footer&gt;&lt;slot name=\\"footer\\"&gt;&lt;/slot&gt;&lt;/footer&gt;'</span> <span class=\\"token operator\\">+</span>\\n  <span class=\\"token string\\">'&lt;/div&gt;'</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">let</span> vm <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Vue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">el</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'#app'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">template</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'&lt;div&gt;'</span> <span class=\\"token operator\\">+</span>\\n  <span class=\\"token string\\">'&lt;app-layout&gt;'</span> <span class=\\"token operator\\">+</span>\\n  <span class=\\"token string\\">'&lt;h1 slot=\\"header\\"&gt;{{title}}&lt;/h1&gt;'</span> <span class=\\"token operator\\">+</span>\\n  <span class=\\"token string\\">'&lt;p&gt;{{msg}}&lt;/p&gt;'</span> <span class=\\"token operator\\">+</span>\\n  <span class=\\"token string\\">'&lt;p slot=\\"footer\\"&gt;{{desc}}&lt;/p&gt;'</span> <span class=\\"token operator\\">+</span>\\n  <span class=\\"token string\\">'&lt;/app-layout&gt;'</span> <span class=\\"token operator\\">+</span>\\n  <span class=\\"token string\\">'&lt;/div&gt;'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token function\\">data</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">title</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'我是标题'</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">msg</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'我是内容'</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">desc</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'其它信息'</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">components</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    AppLayout\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};