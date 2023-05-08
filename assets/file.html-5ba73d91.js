const e=JSON.parse('{"key":"v-5547c6f2","path":"/views/Books/Front-end/JustReact/preparation/file.html","title":"","lang":"zh-CN","frontmatter":{"description":"经过之前的学习，我们已经知道React16的架构分为三层： Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler Reconciler（协调器）—— 负责找出变化的组件 Renderer（渲染器）—— 负责将变化的组件渲染到页面上 那么架构是如何体现在源码的文件结构上呢，让我们一起看看吧。 顶层目录 除去配置文件和隐藏文件夹，根目录的文件夹包括三个： 根目录 ├── fixtures # 包含一些给贡献者准备的小型 React 测试项目 ├── packages # 包含元数据（比如 package.json）和 React 仓库中所有 package 的源码（子目录 src） ├── scripts # 各种工具链的脚本，比如git、jest、eslint等","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/JustReact/preparation/file.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:description","content":"经过之前的学习，我们已经知道React16的架构分为三层： Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler Reconciler（协调器）—— 负责找出变化的组件 Renderer（渲染器）—— 负责将变化的组件渲染到页面上 那么架构是如何体现在源码的文件结构上呢，让我们一起看看吧。 顶层目录 除去配置文件和隐藏文件夹，根目录的文件夹包括三个： 根目录 ├── fixtures # 包含一些给贡献者准备的小型 React 测试项目 ├── packages # 包含元数据（比如 package.json）和 React 仓库中所有 package 的源码（子目录 src） ├── scripts # 各种工具链的脚本，比如git、jest、eslint等"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[{"level":2,"title":"顶层目录","slug":"顶层目录","link":"#顶层目录","children":[]},{"level":2,"title":"packages目录","slug":"packages目录","link":"#packages目录","children":[{"level":3,"title":"react文件夹","slug":"react文件夹","link":"#react文件夹","children":[]},{"level":3,"title":"scheduler文件夹","slug":"scheduler文件夹","link":"#scheduler文件夹","children":[]},{"level":3,"title":"shared文件夹","slug":"shared文件夹","link":"#shared文件夹","children":[]},{"level":3,"title":"Renderer相关的文件夹","slug":"renderer相关的文件夹","link":"#renderer相关的文件夹","children":[]},{"level":3,"title":"试验性包的文件夹","slug":"试验性包的文件夹","link":"#试验性包的文件夹","children":[]},{"level":3,"title":"辅助包的文件夹","slug":"辅助包的文件夹","link":"#辅助包的文件夹","children":[]},{"level":3,"title":"react-reconciler文件夹","slug":"react-reconciler文件夹","link":"#react-reconciler文件夹","children":[]}]}],"git":{},"readingTime":{"minutes":2.34,"words":701},"filePathRelative":"views/Books/Front-end/JustReact/preparation/file.md","excerpt":"<p>经过之前的学习，我们已经知道<code>React16</code>的架构分为三层：</p>\\n<ul>\\n<li>Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入<strong>Reconciler</strong></li>\\n<li>Reconciler（协调器）—— 负责找出变化的组件</li>\\n<li>Renderer（渲染器）—— 负责将变化的组件渲染到页面上</li>\\n</ul>\\n<p>那么架构是如何体现在源码的文件结构上呢，让我们一起看看吧。</p>\\n<h2> 顶层目录</h2>\\n<p>除去配置文件和隐藏文件夹，根目录的文件夹包括三个：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>根目录\\n├── fixtures        # 包含一些给贡献者准备的小型 React 测试项目\\n├── packages        # 包含元数据（比如 package.json）和 React 仓库中所有 package 的源码（子目录 src）\\n├── scripts         # 各种工具链的脚本，比如git、jest、eslint等\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
