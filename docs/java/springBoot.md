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
