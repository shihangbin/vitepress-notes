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

## 数据库的操作（一）

> 查看当前数据库：

```sh
# 查看所有的数据
SHOW DATABASES;
# 使用某一个数据
USE coderhub;
# 查看当前正在使用的数据库
SELECT DATABASE();
```

> 创建新的数据库：

```sh
# 创建数据库语句
CREATE DATABASE bilibili;
CREATE DATABASE IF NOT EXISTS bilibili;
CREATE DATABASE IF NOT EXISTS bilibili
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
```

## 数据库的操作（二）

> 删除数据库：

```sh
# 删除数据库
DROP DATABASE bilibili;
DROP DATABASE IF EXIT bilibili;
```

> 修改数据库：

```sh
# 修改数据库的字符集和排序规则
ALTER DATABASE bilibili CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
```

## 数据表的操作（三）

> 查看数据表

```sh
# 查看所有的数据表
SHOW TABLES;
# 查看某一个表结构
DESC user;
```

> 创建数据表

```sh
CREATE TABLE IF NOT EXISTS `users`(
  name VARCHAR(20),
  age INT,
  height DOUBLE
);
```

## SQL 的数据类型 – 数字类型

> 我们知道不同的数据会划分为不同的数据类型，在数据库中也是一样：

- MySQL 支持的数据类型有：`数字类型，日期和时间类型，字符串（字符和字节）`类型，空间类型和 JSON 数据类型。

> 数字类型

- MySQL 的数字类型有很多：
- 整数数字类型：`INTEGER，INT，SMALLINT，TINYINT，MEDIUMINT，BIGINT`；
  - ![](https://img.xbin.cn/images/2023/10/07-01-14-305014.png)
- 浮点数字类型：`FLOAT，DOUBLE`（FLOAT 是 4 个字节，DOUBLE 是 8 个字节）；
- 精确数字类型：`DECIMAL，NUMERIC`（DECIMAL 是 NUMERIC 的实现形式）；

## SQL 的数据类型 – 日期类型

> MySQL 的日期类型也很多：

> YEAR 以 YYYY 格式显示值

- 范围 1901 到 2155，和 0000。

> DATE 类型用于具有日期部分但没有时间部分的值：

- DATE 以格式 YYYY-MM-DD 显示值 ；
- 支持的范围是 '1000-01-01' 到 '9999-12-31'；

> DATETIME 类型用于包含日期和时间部分的值：

- DATETIME 以格式'YYYY-MM-DD hh:mm:ss'显示值；
- 支持的范围是 1000-01-01 00:00:00 到 9999-12-31 23:59:59;

> TIMESTAMP 数据类型被用于同时包含日期和时间部分的值：

- TIMESTAMP 以格式'YYYY-MM-DD hh:mm:ss'显示值；
- 但是它的范围是 UTC 的时间范围：'1970-01-01 00:00:01'到'2038-01-19 03:14:07';

> 另外：DATETIME 或 TIMESTAMP 值可以包括在高达微秒（6 位）精度的后小数秒一部分（了解）

- 比如 DATETIME 表示的范围可以是'1000-01-01 00:00:00.000000'到'9999-12-31 23:59:59.999999';

## SQL 的数据类型 – 字符串类型

> MySQL 的字符串类型表示方式如下：

> CHAR 类型在创建表时为固定长度，长度可以是 0 到 255 之间的任何值；

- 在被查询时，会删除后面的空格；

> VARCHAR 类型的值是可变长度的字符串，长度可以指定为 0 到 65535 之间的值；

- 在被查询时，不会删除后面的空格；

> BINARY 和 VARBINARY 类型用于存储二进制字符串，存储的是字节字符串；

- https://dev.mysql.com/doc/refman/8.0/en/binary-varbinary.html

> BLOB 用于存储大的二进制类型；

> TEXT 用于存储大的字符串类型；

## 表约束
