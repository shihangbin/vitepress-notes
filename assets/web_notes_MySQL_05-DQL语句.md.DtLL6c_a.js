import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.DwbewbAn.js";const y=JSON.parse('{"title":"DQL 语句","description":"","frontmatter":{},"headers":[],"relativePath":"web_notes/MySQL/05-DQL语句.md","filePath":"web_notes/MySQL/05-DQL语句.md","lastUpdated":1709045840000}'),h={name:"web_notes/MySQL/05-DQL语句.md"},l=n('<h1 id="dql-语句" tabindex="-1">DQL 语句 <a class="header-anchor" href="#dql-语句" aria-label="Permalink to &quot;DQL 语句&quot;">​</a></h1><blockquote><p>DQL：Data Query Language（数据查询语言）</p></blockquote><ul><li>SELECT 用于从一个或者多个表中检索选中的行（Record）。</li></ul><h2 id="查询的格式如下" tabindex="-1">查询的格式如下： <a class="header-anchor" href="#查询的格式如下" aria-label="Permalink to &quot;查询的格式如下：&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> select_expr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">select_expr]...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [FROM table_references]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [WHERE where_condition]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [ORDER BY expr [ASC </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DESC]]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [LIMIT {[offset,] row_count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row_count OFFSET offset}]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [GROUP BY expr]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [HAVING where_condition]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="准备数据" tabindex="-1">准备数据： <a class="header-anchor" href="#准备数据" aria-label="Permalink to &quot;准备数据：&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TABLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NOT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EXISTS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PRIMARY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> KEY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AUTO_INCREMENT,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  brand</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  title</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NOT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NULL,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  price</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DOUBLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NOT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NULL,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  score</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DECIMAL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2,1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  voteCnt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INT,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  pid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INT</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mysql</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mysql2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> connection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mysql.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createConnection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  host: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;localhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  port: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3306</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  user: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  password: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Coderwhy888.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  database: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;coderhub&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> statement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `INSERT INTO products SET ?;`</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> phoneJson</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./phone.json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> phone </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> phoneJson) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  connection.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(statement, phone)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="基本查询" tabindex="-1">基本查询 <a class="header-anchor" href="#基本查询" aria-label="Permalink to &quot;基本查询&quot;">​</a></h2><blockquote><p>查询所有的数据并且显示所有的字段：</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>查询 title、brand、price：</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> title,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> brand,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> price</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>我们也可以给字段起别名：</p></blockquote><ul><li>别名一般在多张表或者给客户端返回对应的 key 时会使用到；</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> title</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> t,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> brand</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> price</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="where-查询条件-一" tabindex="-1">where 查询条件（一） <a class="header-anchor" href="#where-查询条件-一" aria-label="Permalink to &quot;where 查询条件（一）&quot;">​</a></h2><blockquote><p>在开发中，我们希望根据条件来筛选我们的数据，这个时候我们要使用条件查询：</p></blockquote><ul><li>条件查询会使用 WEHRE 查询子句；</li></ul><blockquote><p>WHERE 的比较运算符</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询价格小于1000的手机</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> price</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询价格大于等于2000的手机</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> price</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 价格等于3399的手机</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> price</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3399</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 价格不等于3399的手机</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> price</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3399</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询华为品牌的手机</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brand</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;华为&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="where-查询条件-二" tabindex="-1">where 查询条件（二） <a class="header-anchor" href="#where-查询条件-二" aria-label="Permalink to &quot;where 查询条件（二）&quot;">​</a></h2><blockquote><p>WHERE 的逻辑运算符</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询品牌是华为，并且小于2000元的手机</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brand</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;华为&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">price</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brand</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;华为&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">price</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询1000到2000的手机（不包含1000和2000）</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> price</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> price</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># OR: 符合一个条件即可</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询所有的华为手机或者价格小于1000的手机</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> brand</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;华为&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> price</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询1000到2000的手机（包含1000和2000）</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> price</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BETWEEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看多个结果中的一个</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> brand</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;华为&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;小米&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="where-查询条件-三" tabindex="-1">where 查询条件（三） <a class="header-anchor" href="#where-查询条件-三" aria-label="Permalink to &quot;where 查询条件（三）&quot;">​</a></h2><blockquote><p>模糊查询使用 LIKE 关键字，结合两个特殊的符号：</p></blockquote><ul><li>%表示匹配任意个的任意字符；</li><li>_表示匹配一个的任意字符；</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询所有以v开头的title</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> title</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LIKE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;v%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询带M的title</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> title</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LIKE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;%M%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询带M的title必须是第三个字符</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> title</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LIKE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;__M%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="查询结果排序" tabindex="-1">查询结果排序 <a class="header-anchor" href="#查询结果排序" aria-label="Permalink to &quot;查询结果排序&quot;">​</a></h2><blockquote><p>当我们查询到结果的时候，我们希望讲结果按照某种方式进行排序，这个时候使用的是 ORDER BY； <code>ORDER BY</code> 有两个常用的值：</p></blockquote><ul><li><code>ASC：升序排列；</code></li><li><code>DESC：降序排列；</code></li></ul><p>查询结果排序</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> brand</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;华为&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> price</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ORDER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> price</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ASC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="分页查询" tabindex="-1">分页查询 <a class="header-anchor" href="#分页查询" aria-label="Permalink to &quot;分页查询&quot;">​</a></h2><blockquote><p>当数据库中的数据非常多时，一次性查询到所有的结果进行显示是不太现实的：</p></blockquote><ul><li>在真实开发中，我们都会要求用户传入 offset、limit 或者 page 等字段；</li><li>它们的目的是让我们可以在数据库中进行分页查询；</li><li>它的用法有[LIMIT {[offset,] row_count | row_count OFFSET offset}]</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LIMIT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OFFSET</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LIMIT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OFFSET</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LIMIT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OFFSET</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 另外一种写法：offset, row_count</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LIMIT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 90,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',37),p=[l];function k(t,e,F,r,d,E){return a(),i("div",null,p)}const C=s(h,[["render",k]]);export{y as __pageData,C as default};
