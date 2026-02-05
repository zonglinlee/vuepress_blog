---
title: maven basic
---

# Maven 核心知识点笔记：从依赖管理到打包模式

## 一、依赖冲突检查命令

Maven 依赖冲突排查的核心工具是 `dependency` 插件，常用命令如下：

1. **查看完整依赖树**

    ```Bash
    
    mvn dependency:tree
    ```

    - 冲突依赖会标记 `omitted for conflict with xxx`

    - 可选参数：

        - `-Dverbose`：显示所有依赖细节（含被排除的冲突依赖）

        - `-Dincludes=groupId:artifactId`：过滤指定依赖（支持通配符 `*`）

        - `-DoutputFile=文件名.txt`：将结果输出到文件

2. **分析依赖使用合理性**

    ```Bash
    
    mvn dependency:analyze
    ```

    - 输出：未使用的声明依赖、未声明但使用的依赖、冲突提示

3. **生成可视化 HTML 报告**

    ```Bash
    
    mvn project-info-reports:dependencies
    ```

    - 报告路径：`target/dependency-report.html`

4. **多模块项目排查**

    ```Bash
    
    # 查看指定子模块依赖树
    mvn dependency:tree -pl 子模块名称 -am
    ```

    - `-pl`：指定子模块；`-am`：同时构建依赖模块

## 二、排除特定依赖版本的两种方式

### 1. 局部排除（针对单个依赖的子依赖）

在目标依赖中通过 `<exclusions>` 标签排除，**无需写版本**，Maven 会排除对应 `groupId+artifactId` 的所有版本。

```XML

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-core</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<!-- 可选：手动引入目标版本 -->
```

- 适用场景：解决单个依赖的传递依赖冲突

### 2. 全局版本锁定（通过 `dependencyManagement`）

在父模块或当前模块的 `<dependencyManagement>` 中声明版本，强制项目统一使用该版本，间接排除其他版本。

```XML

<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>3.12.0</version>
        </dependency>
    </dependencies>
</dependencyManagement>
<!-- 子模块/当前模块引入时无需写版本 -->
```

- 适用场景：多依赖、多模块的版本统一管控

- 优先级：低于直接声明的版本

## 三、Maven 依赖解析规则（优先级从高到低）

1. **直接声明优先**：`<dependencies>` 中直接写版本的依赖，优先级最高。

2. **`dependencyManagement`** ** 锁定**：未直接声明版本时，使用该标签中锁定的版本。

3. **路径最短优先**：同一依赖的不同版本，依赖路径长度更短的优先（直接依赖路径长度为 1）。

4. **路径相同则先声明优先**：路径长度一致时，`pom.xml` 中先声明的依赖版本优先。

5. **主动干预规则**：`exclusions`（排除依赖）和 `optional=true`（可选依赖）的优先级高于 3、4 规则。

## 四、父子多模块依赖解析

### 1. 核心概念

- **聚合（** **`<modules>`** **）**：父模块用于批量构建子模块，不影响依赖解析，仅控制构建顺序。

- **继承（** **`<parent>`** **）**：子模块继承父模块的配置，是多模块依赖管理的核心。

### 2. 核心规则

1. **父模块 ** **`dependencyManagement`** ** 是核心**

    - 作用：统一声明依赖版本，子模块按需引入（无需写版本）。

    - 覆盖规则：子模块直接声明版本会覆盖父模块的锁定版本。

2. **子模块间依赖**

    - 遵循基础依赖解析规则（路径最短、先声明优先）。

    - 可通过 `<exclusions>` 排除其他子模块的传递依赖。

3. **继承的边界**

    - 子模块仅继承：`dependencyManagement`、`dependencies`、`properties`、`repositories`。

    - 最佳实践：父模块尽量只写 `dependencyManagement` 和 `properties`，避免子模块被动引入依赖。

4. **父模块打包方式**：必须为 `pom`。

### 3. 多模块最佳实践

- 用 `properties` 定义版本常量，便于统一升级。

- 避免子模块循环依赖，拆分公共逻辑为独立模块。

- 子模块间依赖显式声明 `groupId+artifactId`，提高可读性。

## 五、`pom.xml` 打包模式（`<packaging>`）

### 1. 核心打包模式（覆盖 90% 场景）

|打包模式|用途|适用场景|生命周期特点|
|---|---|---|---|
|`jar`（默认）|普通 Java 项目打包|工具类、业务模块、可依赖库|包含完整生命周期（clean → compile → test → package → install → deploy）|
|`war`|Web 项目打包|Spring MVC、Servlet 项目，部署到 Tomcat 等容器|包含完整生命周期，打包为符合 Web 标准的目录结构|
|`pom`|父/聚合模块|多模块项目的根模块，仅做配置管理|无 compile、test、package 阶段，仅保留 clean、install、deploy|
|`ear`|企业级应用打包|Java EE 项目，包含多个 war/jar 模块|需配合 `maven-ear-plugin`，部署到 JBoss 等 Java EE 容器|
### 2. 扩展打包模式（特殊场景）

- `maven-plugin`：开发自定义 Maven 插件，需 `maven-plugin-plugin`。

- `bundle`：OSGi 模块化项目，需 `maven-bundle-plugin`。

- `ejb`/`rar`：Java EE 组件项目，需对应插件支持。

### 3. 关键注意事项

- 未指定 `<packaging>` 时，默认使用 `jar`。

- 不同打包模式对应不同的构建生命周期，需匹配对应插件。

---
