import{_ as n,X as s,Y as a,a4 as t}from"./framework-d8252107.js";const p={},e=t(`<h3 id="文本下载" tabindex="-1"><a class="header-anchor" href="#文本下载" aria-hidden="true">#</a> 文本下载</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// download 文本信息文件下载</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">downloadRes</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> name<span class="token punctuation">,</span> onprogress <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> onDone <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> onError <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        onError <span class="token operator">&amp;&amp;</span> <span class="token function">onError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 下载中</span>
    <span class="token keyword">const</span> reader <span class="token operator">=</span> response<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">getReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Step 2: get total length</span>
    <span class="token keyword">const</span> contentLength <span class="token operator">=</span> <span class="token operator">+</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Length&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> contentLengthUint <span class="token operator">=</span> <span class="token function">toStringUint</span><span class="token punctuation">(</span>contentLength<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment">// Step 3: read the data</span>
    <span class="token keyword">let</span> receivedLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// received that many bytes at the moment</span>
    <span class="token keyword">let</span> chunks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// array of received binary chunks (comprises the body)</span>
    <span class="token keyword">let</span> percentage <span class="token operator">=</span> <span class="token number">0.0</span>
    <span class="token comment">// eslint-disable-next-line no-constant-condition</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> done<span class="token punctuation">,</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> reader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        chunks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        receivedLength <span class="token operator">+=</span> value<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">const</span> receivedLengthUnit <span class="token operator">=</span> <span class="token function">toStringUint</span><span class="token punctuation">(</span>receivedLength<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token comment">// console.log(\`Received \${receivedLengthUnit} of \${contentLengthUint}\`)</span>
        percentage <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>receivedLength<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> contentLength<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
        onprogress <span class="token operator">&amp;&amp;</span> <span class="token function">onprogress</span><span class="token punctuation">(</span><span class="token punctuation">{</span> receivedLengthUnit<span class="token punctuation">,</span> contentLengthUint<span class="token punctuation">,</span> percentage <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//</span>
    <span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>chunks<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 内容转变成blob地址</span>
    <span class="token comment">// let blob = await response.blob()</span>
    <span class="token comment">// 创建隐藏的可下载链接</span>
    <span class="token keyword">let</span> objectUrl <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">//地址</span>
    a<span class="token punctuation">.</span>href <span class="token operator">=</span> objectUrl
    <span class="token comment">//修改文件名</span>
    a<span class="token punctuation">.</span>download <span class="token operator">=</span> name
    <span class="token comment">// 触发点击</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//移除</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        a<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        onDone <span class="token operator">&amp;&amp;</span> <span class="token function">onDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","download.html.vue"]]);export{k as default};
