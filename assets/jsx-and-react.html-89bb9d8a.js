const n=JSON.parse(`{"key":"v-d15840e2","path":"/views/Books/Front-end/TypescriptMaster/faqs/jsx-and-react.html","title":"JSX 和 React","lang":"zh-CN","frontmatter":{"description":"JSX 和 React 我写了声明 declare var MyComponent: React.Component，为什么我不能写 &lt;MyComponent /&gt; 我写下了如下代码，为什么会抛出错误？ class Display extends React.Component&lt;any, any&gt; { render() { ... } } let SomeThing: Display = /* ... */; // Error here, isn't this OK? let jsx = &lt;SomeThing /&gt;;","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/TypescriptMaster/faqs/jsx-and-react.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"JSX 和 React"}],["meta",{"property":"og:description","content":"JSX 和 React 我写了声明 declare var MyComponent: React.Component，为什么我不能写 &lt;MyComponent /&gt; 我写下了如下代码，为什么会抛出错误？ class Display extends React.Component&lt;any, any&gt; { render() { ... } } let SomeThing: Display = /* ... */; // Error here, isn't this OK? let jsx = &lt;SomeThing /&gt;;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JSX 和 React\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"我写了声明 declare var MyComponent: React.Component，为什么我不能写 <MyComponent />","slug":"我写了声明-declare-var-mycomponent-react-component-为什么我不能写-mycomponent","link":"#我写了声明-declare-var-mycomponent-react-component-为什么我不能写-mycomponent","children":[]}],"git":{},"readingTime":{"minutes":0.7,"words":210},"filePathRelative":"views/Books/Front-end/TypescriptMaster/faqs/jsx-and-react.md","excerpt":"<h1> JSX 和 React</h1>\\n<h2> 我写了声明 <code>declare var MyComponent: React.Component</code>，为什么我不能写 <code>&lt;MyComponent /&gt;</code></h2>\\n<blockquote>\\n<p>我写下了如下代码，为什么会抛出错误？</p>\\n</blockquote>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Display</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">React</span><span class=\\"token punctuation\\">.</span>Component<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">any</span><span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">any</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token operator\\">...</span> <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">let</span> SomeThing<span class=\\"token operator\\">:</span> Display <span class=\\"token operator\\">=</span> <span class=\\"token comment\\">/* ... */</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// Error here, isn't this OK?</span>\\n<span class=\\"token keyword\\">let</span> jsx <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">&lt;</span>SomeThing <span class=\\"token operator\\">/</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};