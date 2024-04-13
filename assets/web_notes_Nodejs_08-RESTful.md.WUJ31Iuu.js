import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.DwbewbAn.js";const o=JSON.parse('{"title":"RESTful","description":"","frontmatter":{},"headers":[],"relativePath":"web_notes/Nodejs/08-RESTful.md","filePath":"web_notes/Nodejs/08-RESTful.md","lastUpdated":1709045840000}'),l={name:"web_notes/Nodejs/08-RESTful.md"},e=n(`<h1 id="restful" tabindex="-1">RESTful <a class="header-anchor" href="#restful" aria-label="Permalink to &quot;RESTful&quot;">​</a></h1><p>REST 表现层状态装换，实际就是一种接口的命名规范。</p><ul><li><p>url（请求路径）用来定义资源名称</p></li><li><p>method（请求类型）用来定义资源动作</p></li></ul><h2 id="请求类型" tabindex="-1">请求类型 <a class="header-anchor" href="#请求类型" aria-label="Permalink to &quot;请求类型&quot;">​</a></h2><ul><li><p>get（获取，查询）</p></li><li><p>pust（新增）</p></li><li><p>put（修改）</p></li><li><p>delete（删除）</p></li></ul><h2 id="请求方式" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式" aria-label="Permalink to &quot;请求方式&quot;">​</a></h2><p>如果传递的数据中有一个唯一值 _id，我们会将 _id 放到 url 中。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 前端（删除）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">axios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;delete&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`/students/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 后端（删除）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">router.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/:_id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> servDelStudents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(req.params._id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="https://img.xbin.cn/images/2023/07/24-03-28-60ab8b.png" alt="image-20230207172859014"></p><p><img src="https://img.xbin.cn/images/2023/07/24-03-28-b3cd2c.png" alt="image-20230207162143798"></p>`,10),p=[e];function t(h,k,r,E,d,c){return a(),i("div",null,p)}const u=s(l,[["render",t]]);export{o as __pageData,u as default};
