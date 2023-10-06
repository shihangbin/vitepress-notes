# 认识 SQL 语句

> 我们希望操作数据库（特别是在程序中），就需要有和数据库沟通的语言，这个语言就是 SQL：

- SQL 是 `Structured Query Language`，称之为`结构化查询语言`，简称 `SQL`；
- 使用 `SQL 编写出来的语句`，就称之为 `SQL 语句`；
- SQL 语句可以用于`对数据库进行操作`；

> 事实上，常见的关系型数据库 SQL 语句都是比较相似的，所以你学会了 MySQL 中的 SQL 语句，之后去操作比如 Oracle 或者其他

关系型数据库，也是非常方便的。

> SQL 语句的常用规范：

- 通常关键字使用大写的，比如 CREATE、TABLE、SHOW 等等；
- 一条语句结束后，需要以 ; 结尾；
- 如果遇到关键字作为表明或者字段名称，可以使用``包裹;

## SQL 语句的分类

> DDL（Data Definition Language）：数据定义语言；

- 可以通过 DDL 语句对数据库或者表进行：创建、删除、修改等操作；

> DML（Data Manipulation Language）：数据操作语言；

- 可以通过 DML 语句对表进行：添加、删除、修改等操作；

> DQL（Data Query Language）：数据查询语言；

- 可以通过 DQL 从数据库中查询记录；（重点）

> DCL（Data Control Language）：数据控制语言；

- 对数据库、表格的权限进行相关访问控制操作；

> 接下来我们对他们进行一个个的学习和掌握。
