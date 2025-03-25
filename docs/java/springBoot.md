---
title: springBoot
---

### FAQ

- [使用SpringBoot时关于静态资源的访问问题](https://www.jianshu.com/p/5f5b82e7ee23)

```shell
# 项目路径
server.servlet.context-path=/test-demo
# 静态资源配置
spring.mvc.static-path-pattern=/static/**

# 访问地址 http://server:port/test-demo/static/xxx.jpg
```

- [解决决SpringBoot图片上传需重启服务器才能显示的问题](https://blog.csdn.net/qq_49137582/article/details/123601007)

```java
// 前端页面实现头像图片上传并实时更新显示的功能，但是文件上传成功后不能实时显示，必须重启服务器后才能显示出来
// 这是服务器的自我保护机制，为了防止暴露绝对路径
@Configuration
public class ImageUploadConfig implements WebMvcConfigurer {
        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/images/upload/**").addResourceLocations("file:E:\\Allworkspaces\\idea-workspace\\SpringBoot\\store\\src\\main\\resources\\static\\images\\upload\\");
    }
}
```

- mybatis sql 日志打印
    - mybatis/mybatis-plus 日志打印配置：这两个需要通过配置 [mybatis日志输出](https://mybatis.org/mybatis-3/zh/logging.html)
      ,或者配置 [mybatis-plus](https://baomidou.com/pages/f84a74/#%E5%90%AF%E5%8A%A8-mybatis-%E6%9C%AC%E8%BA%AB%E7%9A%84-log-%E6%97%A5%E5%BF%97)
      日志输出，最终都是配置 mybatis
      来输出日志，详细的配置可以参考 [How Does Mybatis-Plus Print SQL Logs and Parameters To The Log File Under SpringBoot](https://medium.com/illumination/how-does-mybatis-plus-print-sql-logs-and-parameters-to-the-log-file-under-springboot-d9573c30f9e6)

```yaml
#springBoot mybatis-plus配置
logging.level.com.baomidou.mybatisplus=DEBUG
  #Project mapper directory
logging.level.com.dragonsoft.demojar.mapper=DEBUG
mybatis-plus.configuration.log-impl=org.apache.ibatis.logging.slf4j.Slf4jImpl
```

- [Show Hibernate/JPA SQL Statements from Spring Boot](https://www.baeldung.com/sql-logging-spring-boot)
    - Spring Data JDBC,Java为关系数据库定义了一套标准的访问接口：`JDBC（Java Database Connectivity）`
      ,JDBC接口是Java标准库自带的,可以直接编译,具体的JDBC驱动是由数据库厂商提供的，例如，MySQL的JDBC驱动由Oracle提供。因此，访问某个具体的数据库，我们只需要引入该厂商提供的JDBC驱动，就可以通过JDBC接口来访问，这样保证了Java程序编写的是一套数据库访问代码，却可以访问各种不同的数据库，因为他们都提供了标准的JDBC驱动.实际上，一个MySQL的JDBC的驱动就是一个jar包，它本身也是纯Java编写的。我们自己编写的代码只需要引用Java标准库提供的java.sql包下面的相关接口，由此再间接地通过MySQL驱动的jar包通过网络访问MySQL服务器，所有复杂的网络通讯都被封装到JDBC驱动中，因此，Java程序本身只需要引入一个MySQL驱动的jar包就可以正常访问MySQL服务器
    - Spring Data JPA, makes it easy to easily implement JPA-based `(Java Persistence API)` repositories. JPA就是JavaEE的一个
      ORM 标准，它的实现其实和 Hibernate 没啥本质区别，但是用户如果使用JPA，那么引用的就是`jakarta.persistence`这个“标准”包，而不是`org.hibernate`
      这样的第三方包。因为JPA只是接口，所以，还需要选择一个实现产品，跟JDBC接口和MySQL驱动一个道理。 我们使用JPA时也完全可以选择 `Hibernate`
      作为底层实现，但也可以选择其它的JPA提供方，比如 `EclipseLink`。Spring内置了JPA的集成，并支持选择 `Hibernate` 或 `EclipseLink` 作为实现

```yaml
  #To Standard Output
  spring.jpa.show-sql=true
  spring.jpa.properties.hibernate.format_sql=true
  #Via Loggers
  logging.level.org.hibernate.SQL=DEBUG
  logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE
  #Logging JdbcTemplate Queries
  logging.level.org.springframework.jdbc.core.JdbcTemplate=DEBUG
  logging.level.org.springframework.jdbc.core.StatementCreatorUtils=TRACE
```

- [mybatis mapper xml 字段和表自动提示](https://blog.csdn.net/b452608/article/details/122704798)
- [spring boot 配置项查看](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#features.developing-auto-configuration.understanding-auto-configured-beans)
  ![spring boot auto configuration](../images/java/spring-boot-autoconfiguration.png)
- [spring-boot 文档以及配置项](https://docs.spring.io/spring-boot/docs/2.0.1.RELEASE/reference/htmlsingle/#common-application-properties)
- [mvn cli options](https://maven.apache.org/ref/3.6.1/maven-embedder/cli.html)
- [spring-boot-maven-plugin 默认继承参数](https://docs.spring.io/spring-boot/maven-plugin/using.html)

- [spring-boot 项目 lib 包和项目 class 文件分开打包](https://www.cnblogs.com/qdhxhz/p/17477778.html)

```xml
<!--需要先正常打包，将lib文件夹拷贝出来，然后在使用 ZIP layout 打包，启动的时候需要指定lib包路径  java -Dloader.path=./lib -jar app.jar-->

<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <executable>true</executable>
                <layout>ZIP</layout>
                <!--这里是填写需要包含进去的jar，必须项目中的某些模块，会经常变动，那么就应该将其坐标写进来,如果没有则 nothing(不一定非要填写nothing，因为项目中没有一个叫nothing的依赖，所以打出来的包中就不包含任何依赖) ，表示不打包依赖 -->
                <includes>
                    <include>
                        <groupId>nothing</groupId>
                        <artifactId>nothing</artifactId>
                    </include>
                </includes>
            </configuration>
        </plugin>
    </plugins>
</build>
```

### springBoot 重要的类

- `ApplicationContext`
- `BeanFactory` `BeanNameAware`
- `ApplicationContextAware`：通过实现此接口，Bean 可以直接访问 ApplicationContext，从而能够动态获取其他 Bean、资源文件、环境配置等容器级功能
- `ApplicationRunner` or `CommandLineRunner`
- `JsonObjectSerializer` and `JsonObjectDeserializer`
- `BeanPostProcessor`接口: 用于在 Spring 容器实例化、配置以及初始化 bean 的过程中对 bean 进行自定义处理。它允许开发者在 bean 的生命周期的特定阶段插入自定义逻辑，**
  BeanPostProcessor** 会作用于容器中的所有 **bean**,：多个 **BeanPostProcessor** 可以通过实现 **Ordered** 接口或使用 **@Order** 注解来指定执行顺序。

- `@Autowired` applies to fields, constructors, and multi-argument methods, allowing for narrowing through `@Qualifier`
  annotations at the parameter level. In contrast, `@Resource` is supported only for fields and bean property setter
  methods with a single argument.`@Resource` takes a name attribute. By default, Spring interprets that value as the
  bean name to be injected


- @Value is typically used to inject externalized properties
- @PostConstruct and @PreDestroy: lifecycle annotations

- @RequestParam:URL参数：适用于GET请求，参数拼接在URL中,`http://example.com/api?param1=value1&param2=value2`;表单参数：适用于POST请求，Content-Type为`application/x-www-form-urlencoded`，参数在请求体中以键值对形式传递。
- @RequestBody: 适用于POST、PUT等请求，Content-Type为`application/json`
- @ModelAttribute 表单参数：与`@RequestParam`类似，适用于Content-Type为`application/x-www-form-urlencoded`的POST请求。 JSON数据：与`@RequestBody`类似，适用于Content-Type为`application/json`的POST请求。
- @RequestPart 文件上传：适用于`multipart/form-data`类型的请求，用于上传文件和其他表单数据
- @PathVariable: 用于从URL路径中获取参数
- @RequestHeader: 用途：用于获取请求头中的参数。
- @CookieValue: 用途：用于获取请求中的Cookie值
- @SessionAttribute: 用途：用于从HTTP Session中获取属性
- 不同类型请求中混合使用@RequestParam、@RequestBody、@ModelAttribute和@RequestPart注解时，需要根据请求的Content-Type和具体需求进行搭配

- @DependsOn: forces certain other beans to be initialized first
- @Profile: this annotation lets you indicate that a component is eligible for registration when one or more specified profiles are active.
- ApplicationListener && ApplicationEvent && @EventListener :If a bean that implements the ApplicationListener interface is deployed into the context, every time an ApplicationEvent gets published to the ApplicationContext, that bean is notified.
- Converter :