import{_ as e,c as a,o as i,a5 as r}from"./chunks/framework.DwbewbAn.js";const b=JSON.parse('{"title":"Buffer","description":"","frontmatter":{},"headers":[],"relativePath":"web_notes/Nodejs重学/03-Node中流-buffer.md","filePath":"web_notes/Nodejs重学/03-Node中流-buffer.md","lastUpdated":1709045840000}'),t={name:"web_notes/Nodejs重学/03-Node中流-buffer.md"},f=r('<h1 id="buffer" tabindex="-1">Buffer <a class="header-anchor" href="#buffer" aria-label="Permalink to &quot;Buffer&quot;">​</a></h1><h2 id="buffer-和二进制" tabindex="-1">Buffer 和二进制 <a class="header-anchor" href="#buffer-和二进制" aria-label="Permalink to &quot;Buffer 和二进制&quot;">​</a></h2><p>我们会发现，对于前端开发来说，通常<code>很少会和二进制直接打交道</code>，但是对于服务器端为了做很多的功能，我们<code>必须直接去操作其二进制的数据</code>；</p><p>所以 Node 为了可以方便开发者完成更多功能，提供给了我们一个类 Buffer，并且它是全局的。</p><p>我们前面说过，Buffer 中存储的是二进制数据，那么到底是如何存储呢？</p><ul><li>我们可以将 Buffer 看成是一个存储二进制的数组；</li><li>这个数组中的<code>每一项</code>，可以<code>保存 8 位二进制</code>： 0000 0000</li></ul><p>为什么是 8 位呢？</p><ul><li>在计算机中，<code>很少的情况我们会直接操作一位二进制</code>，因为<code>一位二进制存储的数据是非常有限的</code>；</li><li>所以通常会<code>将 8 位合在一起作为一个单元</code>，这个单元称之为<code>一个字节（byte）</code>；</li><li><code>也就是说 1byte = 8bit</code>，1kb=1024byte，1M=1024kb；</li><li>比如很多编程语言中的 <code>int 类型是 4 个字节</code>，<code>long 类型时 8 个字节</code>；</li><li>比如 <code>TCP 传输的是字节流</code>，在<code>写入和读取时都需要说明字节的个数</code>；</li><li>比如 <code>RGB 的值分别都是 255</code>，所以<code>本质上在计算机中都是用一个字节存储的</code>；</li></ul><h2 id="buffer-和字符串" tabindex="-1">Buffer 和字符串 <a class="header-anchor" href="#buffer-和字符串" aria-label="Permalink to &quot;Buffer 和字符串&quot;">​</a></h2><p>Buffer 相当于是一个字节的数组，数组中的每一项对应一个字节的大小： <img src="https://img.xbin.cn/images/2023/09/11-16-21-f0c06a.png" alt=""></p><p>如果我们希望将一个字符串放入到 Buffer 中，是怎么样的过程呢？ <img src="https://img.xbin.cn/images/2023/09/11-16-21-d80997.png" alt=""></p><p>它是怎么样的过程呢？ <img src="https://img.xbin.cn/images/2023/09/11-16-21-9c3371.png" alt=""></p><h2 id="如果是中文呢" tabindex="-1">如果是中文呢？ <a class="header-anchor" href="#如果是中文呢" aria-label="Permalink to &quot;如果是中文呢？&quot;">​</a></h2><p>默认编码：utf-8 <img src="https://img.xbin.cn/images/2023/09/11-16-22-4c4122.png" alt=""></p><p>如果编码和解码不同： <img src="https://img.xbin.cn/images/2023/09/11-16-22-e5cbb7.png" alt=""></p><h2 id="buffer-alloc" tabindex="-1">Buffer.alloc <a class="header-anchor" href="#buffer-alloc" aria-label="Permalink to &quot;Buffer.alloc&quot;">​</a></h2><p>来看一下 Buffer.alloc:</p><ul><li>我们会发现创建了一个 8 位长度的 Buffer，里面所有的数据默认为 00；</li></ul><p><img src="https://img.xbin.cn/images/2023/09/11-16-23-b2cc1e.png" alt=""></p><p>我们也可以对其进行操作 <img src="https://img.xbin.cn/images/2023/09/11-16-23-0d1b57.png" alt=""></p><h2 id="buffer-和文件读取" tabindex="-1">Buffer 和文件读取 <a class="header-anchor" href="#buffer-和文件读取" aria-label="Permalink to &quot;Buffer 和文件读取&quot;">​</a></h2><p>文本文件的读取 <img src="https://img.xbin.cn/images/2023/09/11-16-24-1d699c.png" alt=""></p><p>图片文件的读取 <img src="https://img.xbin.cn/images/2023/09/11-16-24-487661.png" alt=""></p><h2 id="buffer-的创建过程" tabindex="-1">Buffer 的创建过程 <a class="header-anchor" href="#buffer-的创建过程" aria-label="Permalink to &quot;Buffer 的创建过程&quot;">​</a></h2><p>事实上我们创建 Buffer 时，并不会频繁的向操作系统申请内存，它会默认先申请一个 8 * 1024 个字节大小的内存，也就是 8kb <img src="https://img.xbin.cn/images/2023/09/11-16-25-13df5a.png" alt=""></p><h2 id="buffer-from-源码" tabindex="-1">Buffer.from 源码 <a class="header-anchor" href="#buffer-from-源码" aria-label="Permalink to &quot;Buffer.from 源码&quot;">​</a></h2><p>假如我们调用 Buffer.from 申请 Buffer：</p><ul><li>这里我们以从字符串创建为例</li><li>node/lib/buffer.js：290 行</li></ul><p><img src="https://img.xbin.cn/images/2023/09/11-16-26-f1a3bb.png" alt=""></p><h2 id="fromstring-的源码" tabindex="-1">fromString 的源码 <a class="header-anchor" href="#fromstring-的源码" aria-label="Permalink to &quot;fromString 的源码&quot;">​</a></h2><p><img src="https://img.xbin.cn/images/2023/09/11-16-26-9216b9.png" alt=""></p><h2 id="fromstringfast" tabindex="-1">fromStringFast <a class="header-anchor" href="#fromstringfast" aria-label="Permalink to &quot;fromStringFast&quot;">​</a></h2><p>接着我们查看 fromStringFast：</p><ul><li>这里做的事情是判断剩余的长度是否还足够填充这个字符串；</li><li>如果不足够，那么就要通过 createPool 创建新的空间；</li><li>如果够就直接使用，但是之后要进行 poolOffset 的偏移变化；</li><li>node/lib/buffer.js：428 行</li></ul><p><img src="https://img.xbin.cn/images/2023/09/11-16-26-9bfa6c.png" alt=""></p><p><img src="https://img.xbin.cn/images/2023/09/11-16-27-72fc32.png" alt=""></p>',36),o=[f];function l(c,n,s,d,p,u){return i(),a("div",null,o)}const h=e(t,[["render",l]]);export{b as __pageData,h as default};
