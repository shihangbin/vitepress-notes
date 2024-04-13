import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.DwbewbAn.js";const u=JSON.parse('{"title":"项目搭建规范","description":"","frontmatter":{},"headers":[],"relativePath":"document/vu3+ts后台管理系统/项目搭建和接口文档.md","filePath":"document/vu3+ts后台管理系统/项目搭建和接口文档.md","lastUpdated":1705827463000}'),e={name:"document/vu3+ts后台管理系统/项目搭建和接口文档.md"},t=n(`<h1 id="项目搭建规范" tabindex="-1">项目搭建规范 <a class="header-anchor" href="#项目搭建规范" aria-label="Permalink to &quot;项目搭建规范&quot;">​</a></h1><h2 id="一-代码规范" tabindex="-1">一. 代码规范 <a class="header-anchor" href="#一-代码规范" aria-label="Permalink to &quot;一. 代码规范&quot;">​</a></h2><h3 id="_1-1-集成-editorconfig-配置" tabindex="-1">1.1. 集成 editorconfig 配置 <a class="header-anchor" href="#_1-1-集成-editorconfig-配置" aria-label="Permalink to &quot;1.1. 集成 editorconfig 配置&quot;">​</a></h3><p>EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># http://editorconfig.org</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">root = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[*] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 表示所有文件适用</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">charset = utf-8</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 设置文件字符集为 utf-8</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">indent_style = space</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 缩进风格（tab | space）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">indent_size = 2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 缩进大小</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">end_of_line = lf</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 控制换行类型(lf | cr | crlf)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">trim_trailing_whitespace = true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 去除行尾的任意空白字符</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">insert_final_newline = true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 始终在文件末尾插入一个新行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.md] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 表示仅 md 文件适用以下规则</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">max_line_length = off</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">trim_trailing_whitespace = false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>VSCode 需要安装一个插件：EditorConfig for VS Code</p><p><img src="https://img.xbin.cn/images/2023/08/18-20-16-9e58a6.png" alt=""></p><h3 id="_1-2-使用-prettier-工具" tabindex="-1">1.2. 使用 prettier 工具 <a class="header-anchor" href="#_1-2-使用-prettier-工具" aria-label="Permalink to &quot;1.2. 使用 prettier 工具&quot;">​</a></h3><p>Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。</p><p>1.安装 prettier</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prettier</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.配置.prettierrc 文件：</p><ul><li>useTabs：使用 tab 缩进还是空格缩进，选择 false；</li><li>tabWidth：tab 是空格的情况下，是几个空格，选择 2 个；</li><li>printWidth：当行字符的长度，推荐 80，也有人喜欢 100 或者 120；</li><li>singleQuote：使用单引号还是双引号，选择 true，使用单引号；</li><li>trailingComma：在多行输入的尾逗号是否添加，设置为 <code>none</code>，比如对象类型的最后一个属性后面是否加一个，；</li><li>semi：语句末尾是否要加分号，默认值 true，选择 false 表示不加；</li></ul><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;useTabs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;tabWidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;printWidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;singleQuote&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;trailingComma&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;none&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;semi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>3.创建.prettierignore 忽略文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/dist/*</span></span>
<span class="line"><span>.local</span></span>
<span class="line"><span>.output.js</span></span>
<span class="line"><span>/node_modules/**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**/*.svg</span></span>
<span class="line"><span>**/*.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/public/*</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>4.VSCode 需要安装 prettier 的插件</p><p><img src="https://img.xbin.cn/images/2023/08/18-20-16-0a19a0.png" alt=""></p><p>5.VSCod 中的配置</p><ul><li>settings =&gt;format on save =&gt; 勾选上</li><li>settings =&gt; editor default format =&gt; 选择 prettier</li></ul><p><img src="https://img.xbin.cn/images/2023/08/18-20-28-a5db22.png" alt=""><img src="https://img.xbin.cn/images/2023/08/20-03-59-c97e60.png" alt=""></p><p>6.测试 prettier 是否生效</p><ul><li>测试一：在代码中保存代码；</li><li>测试二：配置一次性修改的命令；</li></ul><p>在 package.json 中配置一个 scripts：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;prettier&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier --write .&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-3-使用-eslint-检测" tabindex="-1">1.3. 使用 ESLint 检测 <a class="header-anchor" href="#_1-3-使用-eslint-检测" aria-label="Permalink to &quot;1.3. 使用 ESLint 检测&quot;">​</a></h3><p>1.在前面创建项目的时候，我们就选择了 ESLint，所以 Vue 会默认帮助我们配置需要的 ESLint 环境。</p><p>2.VSCode 需要安装 ESLint 插件：</p><p><img src="https://img.xbin.cn/images/2023/08/18-20-17-e3340c.png" alt=""></p><p>3.解决 eslint 和 prettier 冲突的问题：</p><p>安装插件：（vue 在创建项目时，如果选择 prettier，那么这两个插件会自动安装）</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint-plugin-prettier</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint-config-prettier</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加 prettier 插件：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint-env node */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">require(&#39;@rushstack/eslint-patch/modern-module-resolution&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">module.exports = {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  extends</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &#39;plugin:vue/vue</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-essential&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &#39;eslint:recommended&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &#39;@vue/eslint-config-typescript&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &#39;@vue/eslint-config-prettier/skip-formatting&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 添加prettier</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &#39;plugin:prettier/recommended&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  parserOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    ecmaVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;latest&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &#39;@typescript-eslint/no-unused-vars&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;off&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &#39;vue/multi-word-component-names&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;off&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>4.VSCode 中 eslint 的配置</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;eslint.lintTask.enable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;eslint.alwaysShowStatus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;eslint.validate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;javascriptreact&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;typescript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;typescriptreact&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;editor.codeActionsOnSave&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;source.fixAll.eslint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_1-4-git-husky-和-eslint-后续" tabindex="-1">1.4. git Husky 和 eslint（后续） <a class="header-anchor" href="#_1-4-git-husky-和-eslint-后续" aria-label="Permalink to &quot;1.4. git Husky 和 eslint（后续）&quot;">​</a></h3><p>虽然我们已经要求项目使用 eslint 了，但是不能保证组员提交代码之前都将 eslint 中的问题解决掉了：</p><ul><li><p>也就是我们希望保证代码仓库中的代码都是符合 eslint 规范的；</p></li><li><p>那么我们需要在组员执行 <code>git commit </code> 命令的时候对其进行校验，如果不符合 eslint 规范，那么自动通过规范进行修复；</p></li></ul><p>那么如何做到这一点呢？可以通过 Husky 工具：</p><ul><li>husky 是一个 git hook 工具，可以帮助我们触发 git 提交的各个阶段：pre-commit、commit-msg、pre-push</li></ul><p>如何使用 husky 呢？</p><p>这里我们可以使用自动配置命令：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky-init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这里会做三件事：</p><p>1.安装 husky 相关的依赖：</p><p><img src="https://img.xbin.cn/images/2023/09/08-23-34-5c6612.png" alt=""></p><p>2.在项目目录下创建 <code>.husky</code> 文件夹：</p><p><img src="https://img.xbin.cn/images/2023/09/08-23-34-117095.png" alt=""></p><p>3.在 package.json 中添加一个脚本：</p><p><img src="https://img.xbin.cn/images/2023/09/08-23-35-4e3cd5.png" alt=""></p><p>接下来，我们需要去完成一个操作：在进行 commit 时，执行 lint 脚本：</p><p><img src="https://img.xbin.cn/images/2023/09/08-23-36-5b33bd.png" alt=""></p><p>这个时候我们执行 git commit 的时候会自动对代码进行 lint 校验。</p><h3 id="_1-5-git-commit-规范-后续" tabindex="-1">1.5. git commit 规范（后续） <a class="header-anchor" href="#_1-5-git-commit-规范-后续" aria-label="Permalink to &quot;1.5. git commit 规范（后续）&quot;">​</a></h3><h4 id="_1-5-1-代码提交风格" tabindex="-1">1.5.1. 代码提交风格 <a class="header-anchor" href="#_1-5-1-代码提交风格" aria-label="Permalink to &quot;1.5.1. 代码提交风格&quot;">​</a></h4><p>通常我们的 git commit 会按照统一的风格来提交，这样可以快速定位每次提交的内容，方便之后对版本进行控制。</p><p><img src="https://img.xbin.cn/images/2023/09/08-23-48-453ed7.png" alt=""></p><p>但是如果每次手动来编写这些是比较麻烦的事情，我们可以使用一个工具：Commitizen</p><ul><li><p>Commitizen 是一个帮助我们编写规范 commit message 的工具；</p><p>1.安装 Commitizen</p></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitizen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.安装 cz-conventional-changelog，并且初始化 cz-conventional-changelog：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitizen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cz-conventional-changelog</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-exact</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这个命令会帮助我们安装 cz-conventional-changelog：</p><p><img src="https://img.xbin.cn/images/2023/09/08-23-51-b02506.png" alt=""></p><p>并且在 package.json 中进行配置：</p><p><img src="https://img.xbin.cn/images/2023/09/08-23-33-62371b.png" alt=""></p><p>这个时候我们提交代码需要使用 <code>npx cz</code>：</p><ul><li>第一步是选择 type，本次更新的类型</li></ul><table><thead><tr><th>Type</th><th>作用</th></tr></thead><tbody><tr><td>feat</td><td>新增特性 (feature)</td></tr><tr><td>fix</td><td>修复 Bug(bug fix)</td></tr><tr><td>docs</td><td>修改文档 (documentation)</td></tr><tr><td>style</td><td>代码格式修改(white-space, formatting, missing semi colons, etc)</td></tr><tr><td>refactor</td><td>代码重构(refactor)</td></tr><tr><td>perf</td><td>改善性能(A code change that improves performance)</td></tr><tr><td>test</td><td>测试(when adding missing tests)</td></tr><tr><td>build</td><td>变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）</td></tr><tr><td>ci</td><td>更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等</td></tr><tr><td>chore</td><td>变更构建流程或辅助工具(比如更改测试环境)</td></tr><tr><td>revert</td><td>代码回退</td></tr></tbody></table><ul><li>第二步选择本次修改的范围（作用域）</li></ul><p><img src="https://img.xbin.cn/images/2023/09/09-00-05-eb21d5.png" alt=""></p><ul><li>第三步选择提交的信息</li></ul><p><img src="https://img.xbin.cn/images/2023/09/09-00-06-1a599d.png" alt=""></p><ul><li>第四步提交详细的描述信息</li></ul><p><img src="https://img.xbin.cn/images/2023/09/09-00-07-520f36.png" alt=""></p><ul><li>第五步是否是一次重大的更改</li></ul><p><img src="https://img.xbin.cn/images/2023/09/09-00-07-7921ce.png" alt=""></p><ul><li>第六步是否影响某个 open issue</li></ul><p><img src="https://img.xbin.cn/images/2023/09/09-00-07-9df5d7.png" alt=""></p><p>我们也可以在 scripts 中构建一个命令来执行 cz：</p><p><img src="https://img.xbin.cn/images/2023/09/08-23-37-f27f5c.png" alt=""></p><h4 id="_1-5-2-代码提交验证" tabindex="-1">1.5.2. 代码提交验证 <a class="header-anchor" href="#_1-5-2-代码提交验证" aria-label="Permalink to &quot;1.5.2. 代码提交验证&quot;">​</a></h4><p>如果我们按照 cz 来规范了提交风格，但是依然有同事通过 <code>git commit</code> 按照不规范的格式提交应该怎么办呢？</p><ul><li><p>我们可以通过 commitlint 来限制提交；</p><p>1.安装 @commitlint/config-conventional 和 @commitlint/cli</p></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/config-conventional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.在根目录创建 commitlint.config.js 文件，配置 commitlint</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@commitlint/config-conventional&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>3.使用 husky 生成 commit-msg 文件，验证提交信息：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .husky/commit-msg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;npx --no-install commitlint --edit </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="二-接口文档" tabindex="-1">二. 接口文档 <a class="header-anchor" href="#二-接口文档" aria-label="Permalink to &quot;二. 接口文档&quot;">​</a></h2><p>账号 1：coderwhy 密码：123456 账号 2：coderdemo 密码：123456</p><p>接口文档 v1 版本：</p><p><a href="https://documenter.getpostman.com/view/12387168/TzsfmQvw" target="_blank" rel="noreferrer">https://documenter.getpostman.com/view/12387168/TzsfmQvw</a></p><p>baseURL 的值：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>http://123.207.32.32:5000</span></span>
<span class="line"><span>http://codercba.com:5000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>设置全局 token 的方法：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pm.response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pm.globals.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;token&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, res.data.token)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>接口文档 v2 版本：（有部分更新）</p><p><a href="https://documenter.getpostman.com/view/12387168/TzzDKb12" target="_blank" rel="noreferrer">https://documenter.getpostman.com/view/12387168/TzzDKb12</a></p>`,100),l=[t];function p(h,r,k,d,c,o){return a(),i("div",null,l)}const m=s(e,[["render",p]]);export{u as __pageData,m as default};
