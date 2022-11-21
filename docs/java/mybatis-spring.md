---
title: MyBatis-Spring
---

## [MyBatis-Spring](https://mybatis.org/spring/zh/index.html)

MyBatis-Spring 会帮助你将 MyBatis 代码无缝地整合到 Spring 中。它将允许 MyBatis 参与到 Spring 的事务管理之中，创建映射器 mapper 和 SqlSession 并注入到 bean 中，以及将
Mybatis 的异常转换为 Spring 的 DataAccessException

maven依赖

```xml

<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>2.0.7</version>
</dependency>
```

## [数据库连接池](https://segmentfault.com/a/1190000039164770)

Java应用程序开发时，常用的连接池有C3P0、DBCP、HikariCP、Druid等。
springboot2.x之后，系统的默认数据源由原来的的org.apache.tomcat.jdbc.pool.DataSource更改为com.zaxxer.hikari.HikariDataSource。

数据库连接池负责分配、管理和释放数据库连接，它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个。

不使用连接池流程，以访问MySQL为例，执行一个SQL命令，如果不使用连接池，需要经过哪些流程

- TCP建立连接的三次握手
- MySQL认证的三次握手
- 真正的SQL执行
- MySQL的关闭
- TCP的四次握手关闭
