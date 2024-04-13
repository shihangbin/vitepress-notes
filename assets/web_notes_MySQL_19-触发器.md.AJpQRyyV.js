import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.DwbewbAn.js";const y=JSON.parse('{"title":"触发器","description":"","frontmatter":{},"headers":[],"relativePath":"web_notes/MySQL/19-触发器.md","filePath":"web_notes/MySQL/19-触发器.md","lastUpdated":1709045840000}'),p={name:"web_notes/MySQL/19-触发器.md"},l=n(`<h1 id="触发器" tabindex="-1">触发器 <a class="header-anchor" href="#触发器" aria-label="Permalink to &quot;触发器&quot;">​</a></h1><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1、建立数据库dbtest08，字符集为utf8。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DATABASE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dbtest08</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CHARACTER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> utf8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#　2、切换当前数据库为dbtest08。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">USE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dbtest08</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3、创建表</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TABLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PRIMARY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> KEY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">t_note</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TABLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_trigger_log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PRIMARY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> KEY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">t_log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4、创建触发器：创建名称为before_insert的触发器，向test_trigger数据表插入数据之前，向test_trigger_log数据表中插入before_insert的日志信息。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TRIGGER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> before_insert</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BEFORE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INSERT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_trigger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FOR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EACH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ROW</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    INSERT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_trigger_log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">t_log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CONCAT(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;before insert:&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new.t_note</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">END</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5、向test_trigger数据表中插入数据</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">INSERT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">t_note</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;Apple123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#　6、查看test_trigger_log数据表中的数据</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_trigger_log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 7、查看当前数据库下所有的触发器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SHOW</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TRIGGERS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 8、查看before_insert触发器的创建语句</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SHOW</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TRIGGER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> before_insert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 9、删除before_insert触发器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DROP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TRIGGER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> before_insert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 10、创建名称为after_insert的触发器，向test_trigger数据表插入数据之后，向test_trigger_log数据表中插入after_insert的日志信息。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TRIGGER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> after_insert</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AFTER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INSERT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_trigger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FOR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EACH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ROW</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    INSERT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_trigger_log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">t_log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CONCAT(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;After insert:&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new.t_note</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">END</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 11、向test_trigger数据表中插入数据。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">INSERT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">t_note</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;Orange345&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 12、查看test_trigger_log数据表中的数据</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_trigger_log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -----------------------------------------------------第二节课内容-------------------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#0. 准备工作</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 导入数据库atguigudb.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换当前数据库为dbtest08。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">USE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dbtest08</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TABLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> employee_id,last_name,salary</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> atguigudb.employees</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#1. 复制一张emps表的空表emps_back，只有表结构，不包含任何数据</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TABLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps_back</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FALSE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#2. 查询emps_back表中的数据</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps_back</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#3. 创建触发器emps_insert_trigger，每当向emps表中添加一条记录时，同步将这条记录添加到emps_back表</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TRIGGER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps_insert_trigger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AFTER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INSERT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FOR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EACH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ROW</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    INSERT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps_back</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new.employee_id,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new.last_name,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new.salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">END</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#4. 验证触发器是否起作用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">INSERT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">300,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;John&#39;,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps_back</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--------------------------------------------------------------------------------------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#1. 复制一张emps表的空表emps_back1，只有表结构，不包含任何数据</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TABLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps_back1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FALSE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#2. 查询emps_back1表中的数据</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps_back1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#3. 创建触发器emps_del_trigger，每当向emps表中删除一条记录时，同步将删除的这条记录添加到</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">emps_back1表中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TRIGGER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps_del_trigger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AFTER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DELETE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FOR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EACH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ROW</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    INSERT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps_back1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">old.employee_id,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> old.last_name,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> old.salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">END</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#4. 验证触发器是否起作用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELETE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> employee_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 110</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps_back1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br></div></div>`,2),h=[l];function k(e,t,r,F,E,g){return a(),i("div",null,h)}const c=s(p,[["render",k]]);export{y as __pageData,c as default};
