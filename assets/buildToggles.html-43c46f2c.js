const e=JSON.parse(`{"key":"v-576beafc","path":"/views/Books/Front-end/TypescriptMaster/tips/buildToggles.html","title":"构建切换","lang":"zh-CN","frontmatter":{"description":"构建切换 根据 JavaScript 项目的运行环境进行切换环境变量是很常见的，通过 webpack 可以很轻松地做到这一点，因为它支持基于环境变量的死代码排除。 在你的 package.json script 里，添加不同的编译目标： //\\"build:test\\": \\"webpack -p --config ./src/webpack.config.js\\", //\\"build:prod\\": \\"webpack -p --define process?.env?.NODE_ENV='\\\\\\"production\\\\\\"' --config ./src/webpack.config.js\\"","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/Books/Front-end/TypescriptMaster/tips/buildToggles.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"构建切换"}],["meta",{"property":"og:description","content":"构建切换 根据 JavaScript 项目的运行环境进行切换环境变量是很常见的，通过 webpack 可以很轻松地做到这一点，因为它支持基于环境变量的死代码排除。 在你的 package.json script 里，添加不同的编译目标： //\\"build:test\\": \\"webpack -p --config ./src/webpack.config.js\\", //\\"build:prod\\": \\"webpack -p --define process?.env?.NODE_ENV='\\\\\\"production\\\\\\"' --config ./src/webpack.config.js\\""}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"魔法时空宝库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"构建切换\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔法时空宝库\\",\\"url\\":\\"https://mpbug.gitee.io/player/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.78,"words":235},"filePathRelative":"views/Books/Front-end/TypescriptMaster/tips/buildToggles.md","excerpt":"<h1> 构建切换</h1>\\n<p>根据 JavaScript 项目的运行环境进行切换环境变量是很常见的，通过 webpack 可以很轻松地做到这一点，因为它支持基于环境变量的死代码排除。</p>\\n<p>在你的 <code>package.json script</code> 里，添加不同的编译目标：</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token comment\\">//\\"build:test\\": \\"webpack -p --config ./src/webpack.config.js\\",</span>\\n<span class=\\"token comment\\">//\\"build:prod\\": \\"webpack -p --define process?.env?.NODE_ENV='\\\\\\"production\\\\\\"' --config ./src/webpack.config.js\\"</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};