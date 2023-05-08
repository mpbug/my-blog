const n=JSON.parse(`{"key":"v-0cdfe812","path":"/views/DevLog/Web/javascript/Snippet/audioAnalyser.html","title":"audioAnalyser","lang":"zh-CN","frontmatter":{"title":"audioAnalyser","icon":"page","order":1,"author":"admin","date":"2023-05-05T00:00:00.000Z","sticky":true,"head":[["script",{"src":"/assets/js/audioAnalyser.js"}],["meta",{"property":"og:url","content":"https://mpbug.gitee.io/views/DevLog/Web/javascript/Snippet/audioAnalyser.html"}],["meta",{"property":"og:site_name","content":"魔法Bug"}],["meta",{"property":"og:title","content":"audioAnalyser"}],["meta",{"property":"og:description","content":"创建音频分析仪 Code // 音频处理 // --创建音频分析仪 function createAudioAnalyser(audio, canvas) { // see: https://docs.w3cub.com/dom/web_audio_api/visualizations_with_web_audio_api.html // if (!isChromeApp()) { return null; } if (audio &amp;&amp; audio?.crossOrigin != 'anonymous' ) { return null; } //analyser // let audio = vDOM; // isChromeApp() &amp;&amp; (audio.crossOrigin = 'anonymous'); // audio.crossOrigin = ''; let dataArray, analyser,source,audioCtx; console.log('~~~analyser:event', { audio }); // // videoPlayerInstance.streamController.audioOnly:true // try { //创建一个音频上下文实例 audioCtx = new (window.AudioContext || window.webkitAudioContext)(); //添加一个音频源节点 source = audioCtx.createMediaElementSource(audio); //分析器节点 analyser = audioCtx.createAnalyser(); //fft分析器 越大 分析越细 analyser.fftSize = 256; console.log('~~~analyser:events', { audio,source,analyser }); // analyser.fftSize=2048; //创建一个无符号字节的数组 // dataArray=new Uint8Array( analyser.frequencyBinCount); // console.log('~~~analyser:dataArray',{dataArray}); // 音频源节点 链接分析器 source.connect(analyser) // 分析器链接输出设备 analyser.connect(audioCtx.destination) } catch (error) { console.log('~~~analyser:error', error) } // function destroyed() { try { audioCtx.close().then(function() { }); } catch (error) { } try { source.disconnet(); analyser.disconnet(); } catch (error) { } } // let canvasCtx = canvas.getContext('2d'); // let freqByteData = new Uint8Array(analyser.frequencyBinCount); // 频域数据 dataArray = new Uint8Array(analyser.frequencyBinCount); // 频域数据 console.log('~~~analyser:dataArray', { dataArray, canvas }); let [WIDTH, HEIGHT, bufferLength] = [canvas.width, canvas.height, analyser.frequencyBinCount]; // function drawWaveline() { requestAnimationFrame(drawWaveline); analyser.getByteTimeDomainData(dataArray); canvasCtx.fillStyle = \\"#000000\\"; canvasCtx.fillRect(0, 0, WIDTH, HEIGHT); canvasCtx.lineWidth = 2; canvasCtx.strokeStyle = \\"#32a35e\\"; canvasCtx.beginPath(); const sliceWidth = (WIDTH * 1.0) / bufferLength; let x = 0; for (let i = 0; i &lt; bufferLength; i++) { const v = dataArray[i] / 128.0; const y = (v * HEIGHT) / 2; if (i === 0) { canvasCtx.moveTo(x, y); } else { canvasCtx.lineTo(x, y); } x += sliceWidth; } canvasCtx.lineTo(canvas.width, canvas.height / 2); canvasCtx.stroke(); } // function drawRect() { requestAnimationFrame(drawRect); analyser.getByteFrequencyData(dataArray); canvasCtx.fillStyle = \\"#000000\\"; canvasCtx.fillRect(0, 0, WIDTH, HEIGHT); var barWidth = (WIDTH / bufferLength) * 2.5; var barHeight; var x = 0; for (let i = 0; i &lt; bufferLength; i++) { barHeight = dataArray[i] / 1; canvasCtx.fillStyle = '#410c0c';//'rgb(' + (barHeight+100) + ',50,50)'; // canvasCtx.fillRect((-barHeight / 2), x, barHeight, barWidth); canvasCtx.fillRect(x,(HEIGHT-barHeight/2),barWidth,barHeight); x += barWidth + 1; } } // // Math.random()&gt;0.45?drawRect():drawWaveline(); // drawRect(); return {analyser,source,audioCtx, destroyed}; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"admin"}],["meta",{"property":"article:published_time","content":"2023-05-05T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"audioAnalyser\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-05T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"admin\\"}]}"]],"description":"创建音频分析仪 Code // 音频处理 // --创建音频分析仪 function createAudioAnalyser(audio, canvas) { // see: https://docs.w3cub.com/dom/web_audio_api/visualizations_with_web_audio_api.html // if (!isChromeApp()) { return null; } if (audio &amp;&amp; audio?.crossOrigin != 'anonymous' ) { return null; } //analyser // let audio = vDOM; // isChromeApp() &amp;&amp; (audio.crossOrigin = 'anonymous'); // audio.crossOrigin = ''; let dataArray, analyser,source,audioCtx; console.log('~~~analyser:event', { audio }); // // videoPlayerInstance.streamController.audioOnly:true // try { //创建一个音频上下文实例 audioCtx = new (window.AudioContext || window.webkitAudioContext)(); //添加一个音频源节点 source = audioCtx.createMediaElementSource(audio); //分析器节点 analyser = audioCtx.createAnalyser(); //fft分析器 越大 分析越细 analyser.fftSize = 256; console.log('~~~analyser:events', { audio,source,analyser }); // analyser.fftSize=2048; //创建一个无符号字节的数组 // dataArray=new Uint8Array( analyser.frequencyBinCount); // console.log('~~~analyser:dataArray',{dataArray}); // 音频源节点 链接分析器 source.connect(analyser) // 分析器链接输出设备 analyser.connect(audioCtx.destination) } catch (error) { console.log('~~~analyser:error', error) } // function destroyed() { try { audioCtx.close().then(function() { }); } catch (error) { } try { source.disconnet(); analyser.disconnet(); } catch (error) { } } // let canvasCtx = canvas.getContext('2d'); // let freqByteData = new Uint8Array(analyser.frequencyBinCount); // 频域数据 dataArray = new Uint8Array(analyser.frequencyBinCount); // 频域数据 console.log('~~~analyser:dataArray', { dataArray, canvas }); let [WIDTH, HEIGHT, bufferLength] = [canvas.width, canvas.height, analyser.frequencyBinCount]; // function drawWaveline() { requestAnimationFrame(drawWaveline); analyser.getByteTimeDomainData(dataArray); canvasCtx.fillStyle = \\"#000000\\"; canvasCtx.fillRect(0, 0, WIDTH, HEIGHT); canvasCtx.lineWidth = 2; canvasCtx.strokeStyle = \\"#32a35e\\"; canvasCtx.beginPath(); const sliceWidth = (WIDTH * 1.0) / bufferLength; let x = 0; for (let i = 0; i &lt; bufferLength; i++) { const v = dataArray[i] / 128.0; const y = (v * HEIGHT) / 2; if (i === 0) { canvasCtx.moveTo(x, y); } else { canvasCtx.lineTo(x, y); } x += sliceWidth; } canvasCtx.lineTo(canvas.width, canvas.height / 2); canvasCtx.stroke(); } // function drawRect() { requestAnimationFrame(drawRect); analyser.getByteFrequencyData(dataArray); canvasCtx.fillStyle = \\"#000000\\"; canvasCtx.fillRect(0, 0, WIDTH, HEIGHT); var barWidth = (WIDTH / bufferLength) * 2.5; var barHeight; var x = 0; for (let i = 0; i &lt; bufferLength; i++) { barHeight = dataArray[i] / 1; canvasCtx.fillStyle = '#410c0c';//'rgb(' + (barHeight+100) + ',50,50)'; // canvasCtx.fillRect((-barHeight / 2), x, barHeight, barWidth); canvasCtx.fillRect(x,(HEIGHT-barHeight/2),barWidth,barHeight); x += barWidth + 1; } } // // Math.random()&gt;0.45?drawRect():drawWaveline(); // drawRect(); return {analyser,source,audioCtx, destroyed}; }"},"headers":[],"git":{},"readingTime":{"minutes":2.38,"words":715},"filePathRelative":"views/DevLog/Web/javascript/Snippet/audioAnalyser.md","localizedDate":"2023年5月5日","excerpt":"\\n<details class=\\"hint-container details\\"><summary>创建音频分析仪 Code</summary>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 音频处理</span>\\n<span class=\\"token comment\\">// --创建音频分析仪</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">createAudioAnalyser</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">audio<span class=\\"token punctuation\\">,</span> canvas</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// see: https://docs.w3cub.com/dom/web_audio_api/visualizations_with_web_audio_api.html</span>\\n    <span class=\\"token comment\\">// if (!isChromeApp()) { return null; }</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>audio <span class=\\"token operator\\">&amp;&amp;</span> audio<span class=\\"token operator\\">?.</span>crossOrigin <span class=\\"token operator\\">!=</span> <span class=\\"token string\\">'anonymous'</span> <span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span> <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">//analyser </span>\\n    <span class=\\"token comment\\">// let audio = vDOM;</span>\\n    <span class=\\"token comment\\">// isChromeApp() &amp;&amp; (audio.crossOrigin = 'anonymous');</span>\\n    <span class=\\"token comment\\">// audio.crossOrigin = '';</span>\\n    <span class=\\"token keyword\\">let</span> dataArray<span class=\\"token punctuation\\">,</span> analyser<span class=\\"token punctuation\\">,</span>source<span class=\\"token punctuation\\">,</span>audioCtx<span class=\\"token punctuation\\">;</span>\\n    console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'~~~analyser:event'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> audio <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">//</span>\\n    <span class=\\"token comment\\">// videoPlayerInstance.streamController.audioOnly:true</span>\\n    <span class=\\"token comment\\">//</span>\\n    <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">//创建一个音频上下文实例</span>\\n        audioCtx <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token punctuation\\">(</span>window<span class=\\"token punctuation\\">.</span>AudioContext <span class=\\"token operator\\">||</span> window<span class=\\"token punctuation\\">.</span>webkitAudioContext<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">//添加一个音频源节点</span>\\n        source <span class=\\"token operator\\">=</span> audioCtx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createMediaElementSource</span><span class=\\"token punctuation\\">(</span>audio<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">//分析器节点</span>\\n        analyser <span class=\\"token operator\\">=</span> audioCtx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createAnalyser</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">//fft分析器  越大 分析越细</span>\\n        analyser<span class=\\"token punctuation\\">.</span>fftSize <span class=\\"token operator\\">=</span> <span class=\\"token number\\">256</span><span class=\\"token punctuation\\">;</span>\\n        console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'~~~analyser:events'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> audio<span class=\\"token punctuation\\">,</span>source<span class=\\"token punctuation\\">,</span>analyser <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// analyser.fftSize=2048;</span>\\n        <span class=\\"token comment\\">//创建一个无符号字节的数组</span>\\n        <span class=\\"token comment\\">// dataArray=new Uint8Array( analyser.frequencyBinCount);</span>\\n        <span class=\\"token comment\\">// console.log('~~~analyser:dataArray',{dataArray});</span>\\n        <span class=\\"token comment\\">// 音频源节点 链接分析器</span>\\n        source<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">connect</span><span class=\\"token punctuation\\">(</span>analyser<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token comment\\">// 分析器链接输出设备</span>\\n        analyser<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">connect</span><span class=\\"token punctuation\\">(</span>audioCtx<span class=\\"token punctuation\\">.</span>destination<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span>error<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'~~~analyser:error'</span><span class=\\"token punctuation\\">,</span> error<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">//</span>\\n    <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">destroyed</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span> audioCtx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">then</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span>error<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n            source<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">disconnet</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            analyser<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">disconnet</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span>error<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            \\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">//</span>\\n    <span class=\\"token keyword\\">let</span> canvasCtx <span class=\\"token operator\\">=</span> canvas<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getContext</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'2d'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// let freqByteData = new Uint8Array(analyser.frequencyBinCount); // 频域数据</span>\\n    dataArray <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Uint8Array</span><span class=\\"token punctuation\\">(</span>analyser<span class=\\"token punctuation\\">.</span>frequencyBinCount<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 频域数据</span>\\n    console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'~~~analyser:dataArray'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span> dataArray<span class=\\"token punctuation\\">,</span> canvas <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">let</span> <span class=\\"token punctuation\\">[</span><span class=\\"token constant\\">WIDTH</span><span class=\\"token punctuation\\">,</span> <span class=\\"token constant\\">HEIGHT</span><span class=\\"token punctuation\\">,</span> bufferLength<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>canvas<span class=\\"token punctuation\\">.</span>width<span class=\\"token punctuation\\">,</span> canvas<span class=\\"token punctuation\\">.</span>height<span class=\\"token punctuation\\">,</span> analyser<span class=\\"token punctuation\\">.</span>frequencyBinCount<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">//</span>\\n    <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">drawWaveline</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">requestAnimationFrame</span><span class=\\"token punctuation\\">(</span>drawWaveline<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        analyser<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getByteTimeDomainData</span><span class=\\"token punctuation\\">(</span>dataArray<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        canvasCtx<span class=\\"token punctuation\\">.</span>fillStyle <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"#000000\\"</span><span class=\\"token punctuation\\">;</span>\\n        canvasCtx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fillRect</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token constant\\">WIDTH</span><span class=\\"token punctuation\\">,</span> <span class=\\"token constant\\">HEIGHT</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        canvasCtx<span class=\\"token punctuation\\">.</span>lineWidth <span class=\\"token operator\\">=</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>\\n        canvasCtx<span class=\\"token punctuation\\">.</span>strokeStyle <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"#32a35e\\"</span><span class=\\"token punctuation\\">;</span>\\n        canvasCtx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">beginPath</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">const</span> sliceWidth <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token constant\\">WIDTH</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">/</span> bufferLength<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">let</span> x <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> bufferLength<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">const</span> v <span class=\\"token operator\\">=</span> dataArray<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">/</span> <span class=\\"token number\\">128.0</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">const</span> y <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>v <span class=\\"token operator\\">*</span> <span class=\\"token constant\\">HEIGHT</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">/</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">===</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                canvasCtx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">moveTo</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n                canvasCtx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">lineTo</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n            x <span class=\\"token operator\\">+=</span> sliceWidth<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        canvasCtx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">lineTo</span><span class=\\"token punctuation\\">(</span>canvas<span class=\\"token punctuation\\">.</span>width<span class=\\"token punctuation\\">,</span> canvas<span class=\\"token punctuation\\">.</span>height <span class=\\"token operator\\">/</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        canvasCtx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">stroke</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">//</span>\\n    <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">drawRect</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">requestAnimationFrame</span><span class=\\"token punctuation\\">(</span>drawRect<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        analyser<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getByteFrequencyData</span><span class=\\"token punctuation\\">(</span>dataArray<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        canvasCtx<span class=\\"token punctuation\\">.</span>fillStyle <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"#000000\\"</span><span class=\\"token punctuation\\">;</span>\\n        canvasCtx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fillRect</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token constant\\">WIDTH</span><span class=\\"token punctuation\\">,</span> <span class=\\"token constant\\">HEIGHT</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">var</span> barWidth <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token constant\\">WIDTH</span> <span class=\\"token operator\\">/</span> bufferLength<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">2.5</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">var</span> barHeight<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">var</span> x <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> bufferLength<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            barHeight <span class=\\"token operator\\">=</span> dataArray<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">/</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n            canvasCtx<span class=\\"token punctuation\\">.</span>fillStyle <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'#410c0c'</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//'rgb(' + (barHeight+100) + ',50,50)';</span>\\n            <span class=\\"token comment\\">// canvasCtx.fillRect((-barHeight / 2), x, barHeight, barWidth);</span>\\n            canvasCtx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fillRect</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">(</span><span class=\\"token constant\\">HEIGHT</span><span class=\\"token operator\\">-</span>barHeight<span class=\\"token operator\\">/</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>barWidth<span class=\\"token punctuation\\">,</span>barHeight<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            x <span class=\\"token operator\\">+=</span> barWidth <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">//</span>\\n    <span class=\\"token comment\\">// Math.random()&gt;0.45?drawRect():drawWaveline();</span>\\n    <span class=\\"token comment\\">//</span>\\n    <span class=\\"token function\\">drawRect</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>analyser<span class=\\"token punctuation\\">,</span>source<span class=\\"token punctuation\\">,</span>audioCtx<span class=\\"token punctuation\\">,</span> destroyed<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></details>","autoDesc":true}`);export{n as data};
