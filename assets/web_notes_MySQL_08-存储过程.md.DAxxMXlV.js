import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.DwbewbAn.js";const g=JSON.parse('{"title":"存储过程","description":"","frontmatter":{},"headers":[],"relativePath":"web_notes/MySQL/08-存储过程.md","filePath":"web_notes/MySQL/08-存储过程.md","lastUpdated":1709045840000}'),l={name:"web_notes/MySQL/08-存储过程.md"},p=n(`<h1 id="存储过程" tabindex="-1">存储过程 <a class="header-anchor" href="#存储过程" aria-label="Permalink to &quot;存储过程&quot;">​</a></h1><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 准备工作：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1.导入atguigudb数据库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2.建立dbtest08数据库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DATABASE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dbtest08</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CHARACTER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> utf8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3.切换当前数据库为dbtest08</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">USE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dbtest08</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4.建立表</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TABLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> atguigudb.employees</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TABLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> depts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> atguigudb.departments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#------------------进行以下操--------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1、创建存储过程select_all_data()，查看 emps 表的所有数据。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCEDURE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> select_all_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">END</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CALL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> select_all_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2、创建存储过程avg_employee_salary()，返回所有员工的平均工资。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCEDURE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> avg_employee_salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AVG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">END</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CALL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> avg_employee_salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3、创建存储过程show_max_salary()，用来查看“emps”表的最高薪资值。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCEDURE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_max_salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MAX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">END</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CALL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_max_salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4、创建存储过程show_min_salary()，查看“emps”表的最低薪资值，并将最低薪资通过OUT参数“ms”输出。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCEDURE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_min_salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ms</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DOUBLE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ms</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">END</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CALL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_min_salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5、创建存储过程show_someone_salary()，查看“emps”表的某个员工的薪资，并用IN参数empname输入员工姓名。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCEDURE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_someone_salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> empname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> salary</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> last_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> empname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">END</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CALL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_someone_salary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;Lee&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 6、创建存储过程show_someone_salary2()，查看“emps”表的某个员工的薪资，并用IN参数empname输入员工姓名，用OUT参数empsalary输出员工薪资。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCEDURE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_someone_salary2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> empname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> empsalary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DOUBLE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> salary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> empsalary</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> last_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> empname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">END</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CALL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_someone_salary2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;Abel&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @emp_sal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @emp_sal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 7、创建存储过程show_mgr_name()，查询某个员工领导的姓名，并用INOUT参数“empname”输入员工姓名，输出领导的姓名。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCEDURE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_mgr_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">INOUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> empname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #创建一个局部变量mgrno</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    DECLARE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mgrno</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #通过empname查询得到管理者编号，送入mgrno</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manager_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mgrno</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> last_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> empname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #通过mgrno查询得到管理者的姓名,送入empname</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> last_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> empname</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    WHERE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> employee_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mgrno</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">END</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DELIMITER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @emp_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Abel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CALL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_mgr_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@emp_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @emp_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 8、查看所有的存储过程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SHOW</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCEDURE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> STATUS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 9、查看存储过程show_mgr_name的创建语句</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SHOW</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCEDURE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_mgr_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 10、删除所有的存储过程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DROP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCEDURE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_mgr_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DROP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCEDURE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_someone_salary2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br></div></div>`,2),h=[p];function k(e,t,r,F,E,d){return a(),i("div",null,h)}const c=s(l,[["render",k]]);export{g as __pageData,c as default};
