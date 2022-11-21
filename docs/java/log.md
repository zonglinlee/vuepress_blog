---
title: java log
---

## java.util.logging

Java标准库内置了日志包java.util.logging，我们可以直接用,它自动打印了时间、调用类、调用方法等很多有用的信息.
JDK的Logging定义了7个日志级别，从严重到普通：`SEVERE WARNING INFO CONFIG FINE FINER FINEST`,默认级别是INFO，因此，INFO级别以下的日志，不会被打印出来.

Logging系统在JVM启动时读取配置文件并完成初始化，一旦开始运行main()方法，就无法修改配置；配置不太方便。Java标准库内置的Logging使用并不是非常广泛

## Commons Logging(日志接口,负责充当日志API)

Commons Logging是一个第三方日志库，它是由 Apache 创建的日志模块，Commons Logging 的特色是，它可以挂接不同的日志系统，并通过配置文件指定挂接的日志系统。默认情况下，Commons Logging
自动搜索并使用 Log4j（Log4j是另一个流行的日志系统），如果没有找到Log4j，再使用JDK Logging。

Commons Logging定义了6个日志级别： `FATAL ERROR WARNING INFO DEBUG TRACE` 默认级别是INFO

## Log4j(负责实现日志底层)

Commons Logging，可以作为“日志接口”来使用。而真正的“日志实现”可以使用 Log4j,当我们使用Log4j输出一条日志时，Log4j自动通过不同的Appender把同一条日志输出到不同的目的地。

- console：输出到屏幕；
- file：输出到文件；
- socket：通过网络输出到远程计算机；
- jdbc：输出到数据库

在输出日志的过程中，通过Filter来过滤哪些log需要被输出，哪些log不需要被输出。例如，仅输出ERROR级别的日志。最后，通过 Layout 来格式化日志信息，例如，自动添加日期、时间、方法名称等信息。
在使用Log4j的时候，我们把一个 `log4j2.xml` 的文件放到 classpath 下就可以让 Log4j 读取配置文件并按照我们的配置来输出日志。

## SLF4J 和 Logback

[SLF4J](https://www.slf4j.org/manual.html)(日志接口,负责充当日志API),Logback(负责实现日志底层),如下图所示，无论基于何种实现框架首先要引入的就是 slf4j-api.jar 包，作为接口，小型项目可以使用 slf4j-simple.jar,一般我们会使用 logback 作为日志实现(maven如下)。
![SLF4J 日志实现框架](../images/java/concrete-bindings.png)
maven 依赖
```xml
<!-- slf4j日志接口 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>2.0.3</version>
</dependency>
<!-- logback 日志实现， logback-classic 会自动引入 logback-core -->
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.3.3</version>
</dependency>
```
### logback 配置
在 maven resource目录下配置 logback.xml 文件,更改默认日志输出级别为 DEBUG。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>

    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <encoder>
            <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
            <charset>utf-8</charset>
        </encoder>
        <file>log/output.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy">
            <fileNamePattern>log/output.log.%i</fileNamePattern>
        </rollingPolicy>
        <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
            <MaxFileSize>1MB</MaxFileSize>
        </triggeringPolicy>
    </appender>

    <root level="DEBUG">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE" />
    </root>
</configuration>
```
