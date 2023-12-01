---
title: MyBatis
---

Every MyBatis application centers around an instance of SqlSessionFactory. A SqlSessionFactory instance can be acquired
by using the SqlSessionFactoryBuilder. SqlSessionFactoryBuilder can build a SqlSessionFactory instance from an XML
configuration file, or from a custom prepared instance of the Configuration class.

SqlSession: The primary Java interface for working with MyBatis. Through this interface you can execute commands, get
mappers and manage transactions. SqlSessionFactory: Creates an SqlSession out of a connection or a DataSource

## spring + mybatis + mysql + 连接池

```xml
<!-- MyBatis SQL mapper framework -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>${mybatis.version}</version>
</dependency>
        <!-- An easy-to-use Spring bridge for MyBatis sql mapping framework -->
<dependency>
<groupId>org.mybatis</groupId>
<artifactId>mybatis-spring</artifactId>
<version>${mybatis-spring.version}</version>
</dependency>
        <!-- JDBC connection pool -->
<dependency>
<groupId>com.zaxxer</groupId>
<artifactId>HikariCP</artifactId>
<version>${hikaricp.version}</version>
</dependency>
        <!-- mysql  数据库驱动 -->
<dependency>
<groupId>mysql</groupId>
<artifactId>mysql-connector-java</artifactId>
<version>${mysql.version}</version>
</dependency>
```

## 注解

### from myBatis

- @Mapper: Marker interface for MyBatis mappers, 添加@Mapper注解之后这个接口在编译时会生成相应的实现类

### from springBoot

- @MapperScan： 直接在Mapper类上面添加注解@Mapper，这种方式要求每一个mapper类都需要添加此注解，太麻烦。 通过使用@MapperScan可以指定要扫描的Mapper类的包的路径

### from myBatisPlus

- @TableName: 表名注解，标识实体类对应的表, 在实体类上使用
- @TableId： 主键注解，在实体类主键字段上使用
- @TableField：字段注解（非主键），如果实体类字段和数据库字段不一致，可以用这个做转换

## 接口和类

### from myBatisPlus

- `BaseMapper`: Mapper 继承该接口后，无需编写 mapper.xml 文件，即可获得CRUD功能

```java
public interface UserMapper extends BaseMapper<User> 
```

- `IService`: 顶级 Service, 它的实现类是 `ServiceImpl`,通过继承该类可以获得 CRUD 功能，在项目中如下使用

```java
// 接口继承
public interface UserService extends IService<User> 
// 实现类继承
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService
```

- `AbstractWrapper`:sql条件构造器，QueryWrapper(LambdaQueryWrapper) 和 UpdateWrapper(LambdaUpdateWrapper) 的父类 ,用于生成 sql 的 where
  条件

- [BaseMapper和IService的区别](https://blog.csdn.net/pingfandehaozai/article/details/103537250):BaseMapper 针对dao层的方法封装 CRUD
  IService<M,T> 针对业务逻辑层的封装 需要指定Dao层类和对应的实体类 是在BaseMapper基础上的加强
- `IPage 接口`: 它的简单实现类是 `Page`

## myBatis 主键

@SelectKey 应用场景： 如果向数据库中插入一条数据，同时有希望返回该条记录的主键，该怎么处理了？有两种情况：

- （1）数据库主键不是自增列，需要预先生成
- （2）是自增列，插入之后才能获知

这两种情况都可以通过SelectKey解决，第一个种就是before，第二张是after。

@SelectKey的属性有下面几个：

- statement属性：填入将会被执行的 SQL 字符串数组。
- keyProperty属性：填入将会被更新的参数对象的属性的值。
- before属性：填入 true 或 false 以指明 SQL 语句应被在插入语句的之前还是之后执行。
- resultType属性：填入 keyProperty 的 Java 类型。
- statementType属性：填入Statement、 PreparedStatement 和 CallableStatement 中的STATEMENT、 PREPARED 或 CALLABLE 中任一值填入 。默认值是
  PREPARED

如下所示插入主键 id 为 UUID， 其中 `select replace(uuid(), '-', '')` 中的 `uuid()` 和 `replace()` 函数均为 mysql 自带的字符串处理函数

```java
@SelectKey(statement = "select replace(uuid(), '-', '')", keyProperty = "user.id", before = true, resultType = String.class)
@Options(useGeneratedKeys = true, keyProperty = "user.id", keyColumn = "user.id")
@Insert("INSERT INTO users (id, email, password, name, createdAt) VALUES (#{user.id}, #{user.email}, #{user.password}, #{user.name}, #{user.createdAt})")
boolean insert(@Param("user") User user);
```

## myBatis 日志

某些查询可能会返回庞大的结果集，此时只想记录其执行的 SQL 语句而不想记录结果该怎么办？为此，Mybatis 中 SQL 语句的日志级别被设为DEBUG（JDK 日志设为 FINE），结果的日志级别为 TRACE（JDK 日志设为
FINER)。所以，只要将日志级别调整为 DEBUG 即可达到目的。

如果项目使用的是 logback 作为日志，则在 logback.xml 文件中调整日志输出级别，达到 mybatis 日志输出级别就可以输出日志了。

## myBatis 批处理

- [基于SqlSession的ExecutorType进行批量操作](https://juejin.cn/post/6844903991147495437)

## [MyBatis中模糊查询LIKE的三种方式](https://blog.csdn.net/wrs120/article/details/82530653)

## [Mybatis一对多查询](https://blog.csdn.net/shuai8624/article/details/116563491)

## [mybatis-plus分页查询三种方法](https://blog.csdn.net/weixin_46146718/article/details/126962110)

## [mybatis-plus 查询传入参数Map，返回List＜Map＞](https://blog.csdn.net/yfx000/article/details/108222312)

## [MyBatis中@MapKey使用详解](https://blog.csdn.net/u012734441/article/details/85861337)

## reference

- [myBatis](https://mybatis.org/mybatis-3/)
- [MyBatis笔记](https://blog.csdn.net/qq_19387933/article/details/123256034)
- [myBatisPlus](https://baomidou.com/pages/24112f/)
