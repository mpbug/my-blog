const n=JSON.parse('{"key":"v-1f12efbc","path":"/views/DevLog/Web/javascript/RegularExpression/password.html","title":"password","lang":"zh-CN","frontmatter":{"title":"password","icon":"page","order":1,"author":"admin","date":"2023-05-06T00:00:00.000Z","description":"// definition function validatePassword(value){ // 前置校验规则 ?= let numOfbit=`(?=.{8,})`; let rangeOfLowerWord=`(?=.*[a-z])`; let rangeOfUpperWord=`(?=.*[A-Z])`; let rangeOfNumber=`(?=.*[0-9])`; let rangeOfSymbol=`(?=.*\\\\\\\\W)`; // 高强密码校验：8位、包含：小写字母、大写字母、数字、特殊字符 // 中强度密码校验：8位及，包含：大小写字母、数字、特殊字符三项中有两项 // 弱强度密码校验：8位 let regExpList = { \'strong\':`^${numOfbit}${rangeOfLowerWord}${rangeOfUpperWord}${rangeOfNumber}${rangeOfSymbol}.*$`, \'medium\':`^${numOfbit}(${rangeOfLowerWord}${rangeOfUpperWord}|${rangeOfLowerWord}${rangeOfNumber}|${rangeOfNumber}${rangeOfUpperWord}|${rangeOfNumber}${rangeOfSymbol}|${rangeOfLowerWord}${rangeOfSymbol}|${rangeOfUpperWord}${rangeOfSymbol}).*$`, \'normal\':`^${numOfbit}.*$` } let results = Object.keys(regExpList).filter(cur =&gt; new RegExp(regExpList[cur], \\"g\\").test(value) )||[]; return results.length&gt;0 ? results.shift() : \'week\'; } // usage validatePassword(\'\'); &gt;\'week\' validatePassword(\'aa1\'); &gt;\'week\' validatePassword(\'aaaaaaaaa\'); &gt;\'normal\' validatePassword(\'aaaaaaaaa123\'); &gt;\'medium\' validatePassword(\'aaaaaaaaa123A\'); &gt;\'medium\' validatePassword(\'aaaaaaaaa123A.\'); &gt;\'strong\'","head":[["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/DevLog/Web/javascript/RegularExpression/password.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"password"}],["meta",{"property":"og:description","content":"// definition function validatePassword(value){ // 前置校验规则 ?= let numOfbit=`(?=.{8,})`; let rangeOfLowerWord=`(?=.*[a-z])`; let rangeOfUpperWord=`(?=.*[A-Z])`; let rangeOfNumber=`(?=.*[0-9])`; let rangeOfSymbol=`(?=.*\\\\\\\\W)`; // 高强密码校验：8位、包含：小写字母、大写字母、数字、特殊字符 // 中强度密码校验：8位及，包含：大小写字母、数字、特殊字符三项中有两项 // 弱强度密码校验：8位 let regExpList = { \'strong\':`^${numOfbit}${rangeOfLowerWord}${rangeOfUpperWord}${rangeOfNumber}${rangeOfSymbol}.*$`, \'medium\':`^${numOfbit}(${rangeOfLowerWord}${rangeOfUpperWord}|${rangeOfLowerWord}${rangeOfNumber}|${rangeOfNumber}${rangeOfUpperWord}|${rangeOfNumber}${rangeOfSymbol}|${rangeOfLowerWord}${rangeOfSymbol}|${rangeOfUpperWord}${rangeOfSymbol}).*$`, \'normal\':`^${numOfbit}.*$` } let results = Object.keys(regExpList).filter(cur =&gt; new RegExp(regExpList[cur], \\"g\\").test(value) )||[]; return results.length&gt;0 ? results.shift() : \'week\'; } // usage validatePassword(\'\'); &gt;\'week\' validatePassword(\'aa1\'); &gt;\'week\' validatePassword(\'aaaaaaaaa\'); &gt;\'normal\' validatePassword(\'aaaaaaaaa123\'); &gt;\'medium\' validatePassword(\'aaaaaaaaa123A\'); &gt;\'medium\' validatePassword(\'aaaaaaaaa123A.\'); &gt;\'strong\'"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"admin"}],["meta",{"property":"article:published_time","content":"2023-05-06T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"password\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-06T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"admin\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.92,"words":577},"filePathRelative":"views/DevLog/Web/javascript/RegularExpression/password.md","localizedDate":"2023年5月6日","excerpt":"\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// definition</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">validatePassword</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">value</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 前置校验规则 ?= </span>\\n  <span class=\\"token keyword\\">let</span> numOfbit<span class=\\"token operator\\">=</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">(?=.{8,})</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">let</span> rangeOfLowerWord<span class=\\"token operator\\">=</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">(?=.*[a-z])</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">let</span> rangeOfUpperWord<span class=\\"token operator\\">=</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">(?=.*[A-Z])</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">let</span> rangeOfNumber<span class=\\"token operator\\">=</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">(?=.*[0-9])</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">let</span> rangeOfSymbol<span class=\\"token operator\\">=</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">(?=.*\\\\\\\\W)</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">// 高强密码校验：8位、包含：小写字母、大写字母、数字、特殊字符</span>\\n  <span class=\\"token comment\\">// 中强度密码校验：8位及，包含：大小写字母、数字、特殊字符三项中有两项</span>\\n  <span class=\\"token comment\\">// 弱强度密码校验：8位</span>\\n  <span class=\\"token keyword\\">let</span> regExpList <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string-property property\\">\'strong\'</span><span class=\\"token operator\\">:</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">^</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>numOfbit<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfLowerWord<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfUpperWord<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfNumber<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfSymbol<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">.*$</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string-property property\\">\'medium\'</span><span class=\\"token operator\\">:</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">^</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>numOfbit<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">(</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfLowerWord<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfUpperWord<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">|</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfLowerWord<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfNumber<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">|</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfNumber<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfUpperWord<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">|</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfNumber<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfSymbol<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">|</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfLowerWord<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfSymbol<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">|</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfUpperWord<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>rangeOfSymbol<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">).*$</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string-property property\\">\'normal\'</span><span class=\\"token operator\\">:</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">^</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>numOfbit<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">.*$</span><span class=\\"token template-punctuation string\\">`</span></span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">let</span> results <span class=\\"token operator\\">=</span> Object<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">keys</span><span class=\\"token punctuation\\">(</span>regExpList<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">filter</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">cur</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">RegExp</span><span class=\\"token punctuation\\">(</span>regExpList<span class=\\"token punctuation\\">[</span>cur<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"g\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">test</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">||</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">return</span> results<span class=\\"token punctuation\\">.</span>length<span class=\\"token operator\\">&gt;</span><span class=\\"token number\\">0</span> <span class=\\"token operator\\">?</span> results<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">shift</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">:</span> <span class=\\"token string\\">\'week\'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token comment\\">// usage</span>\\n<span class=\\"token function\\">validatePassword</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\'\'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token operator\\">&gt;</span><span class=\\"token string\\">\'week\'</span>\\n<span class=\\"token function\\">validatePassword</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\'aa1\'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token operator\\">&gt;</span><span class=\\"token string\\">\'week\'</span>\\n<span class=\\"token function\\">validatePassword</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\'aaaaaaaaa\'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token operator\\">&gt;</span><span class=\\"token string\\">\'normal\'</span>\\n<span class=\\"token function\\">validatePassword</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\'aaaaaaaaa123\'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token operator\\">&gt;</span><span class=\\"token string\\">\'medium\'</span>\\n<span class=\\"token function\\">validatePassword</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\'aaaaaaaaa123A\'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token operator\\">&gt;</span><span class=\\"token string\\">\'medium\'</span>\\n<span class=\\"token function\\">validatePassword</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\'aaaaaaaaa123A.\'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token operator\\">&gt;</span><span class=\\"token string\\">\'strong\'</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
