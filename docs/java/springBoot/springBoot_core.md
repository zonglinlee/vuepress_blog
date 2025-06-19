---
title: springBoot 常见问题
---

### springBoot 通过 ApplicationContext 动态获取 Bean

查看 springSecurity 的默认过滤器链

```java
    private ApplicationContext applicationContext;
    DefaultSecurityFilterChain bean = applicationContext.getBean(DefaultSecurityFilterChain.class);
```
