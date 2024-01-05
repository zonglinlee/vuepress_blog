---
title: android_basic
---

`AndroidX` 是谷歌在 2018 I/O 大会上推出的用于替换`android.support.library`的
Android 扩展库，按照官方文档说明，`android.support.library`在 Android
28版本之后就不再更新，未来的版本更新都在 AndroidX 中进行。不仅如此，AAC（Android Architecture
Components架构缩写）中的组件也被 合并到AndroidX中，所以在使用JetPack组件时经常会看到AndroidX相关的包。

androidx 命名空间包含 Android Jetpack 库。与支持库一样，androidx 命名空间中的库与 Android
平台分开提供，并向后兼容各个 Android 版本。

## 名词解释

- 重新生成整个屏幕所面临的一个难题是，在时间、计算能力和电池用量方面可能成本高昂。为了减少在这方面耗费的资源，Compose
  会智能地选择在任何给定时间需要重新绘制界面的哪些部分
- @Composable 注释。所有可组合函数都必须带有此注释；此注释可告知 Compose 编译器：此函数旨在将数据转换为界面
- To display a scrollable column we use a `LazyColumn`. `LazyColumn` renders only the visible items
  on screen, allowing performance gains when rendering a big list.`LazyColumn` and `LazyRow` are
  equivalent to `RecyclerView` in Android Views.
- The spring-based animation:spring spec does not take any time-related parameters. Instead it
  relies on physical properties (damping and stiffness) to make animations more natural.
- [LiveData](https://developer.android.com/topic/libraries/architecture/livedata?hl=zh-cn)
  是一种可观察的数据存储器类。与常规的可观察类不同，`LiveData` 具有生命周期感知能力，意指它遵循其他应用组件（如 activity、fragment 或 service）的生命周期。这种感知能力可确保
  LiveData 仅更新处于活跃生命周期状态的应用组件观察者
- [Android Navigation](https://blog.csdn.net/JMW1407/article/details/125714708):传统的应用开发，一般都是采用一个界面一个 Activity
  的形式，但是大家都知道， Activity 在 Android 中是属于重量级的组件，从而导致程序资源消耗大，用户体验不佳。而导航组件
  Navigation 采用的是 Fragment 轻量级的组件实现的，可以节省资源，提高用户体验。
  采用**单个Activity嵌套多个Fragment的UI**架构模式，已经被大多数的Android工程师所接受，需要通过FragmentManager和FragmentTransaction来管理Fragment之间的切换。
  在Android中，页面的切换和管理包括应用程序Appbar的管理、Fragment的动画切换以及Fragment之间的参数传递等内容。并且，纯代码的方式使用起来不是特别友好，并且Appbar在管理和使用的过程中显得很混乱。因此，Jetpack提供了一个名为Navigation的组件，旨在方便开发者管理Fragment页面和Appbar。

- `Fragment` 表示应用界面中可重复使用的一部分。fragment 定义和管理自己的布局，具有自己的生命周期，并且可以处理自己的输入事件。fragment 不能独立存在。它们必须由 activity 或其他 fragment
  托管。fragment 的视图层次结构会成为宿主的视图层次结构的一部分，或附加到宿主的视图层次结构。

## 开发须知

### [Activity 中使用视图绑定](https://developer.android.com/topic/libraries/view-binding?hl=zh-cn#usage)

为某个模块启用视图绑定功能后，系统会为该模块中包含的每个 **XML** 布局文件生成一个**绑定类**。每个绑定类均包含对根视图以及具有 ID 的所有视图的引用。系统会通过以下方式生成绑定类的名称：将 **XML**
文件的名称转换为驼峰式大小写，并在末尾添加“**Binding**”一词。

假设某个布局文件的名称为 `main_activity_layout.xml`, 则所生成的绑定类的名称就为 `MainActivityLayoutBinding`,此类具有两个字段：一个是名为 `name` 的 `TextView`
，另一个是名为
`button` 的 `Button`。该布局中的 `ImageView` 没有 `ID`，因此绑定类中不存在对它的引用。每个绑定类还包含一个 `getRoot()`
方法，用于为相应布局文件的根视图提供直接引用。在此示例中，`MainActivityLayoutBinding` 类中的 `getRoot()` 方法会返回 `LinearLayout` 根视图

```xml

<LinearLayout>
    <TextView android:id="@+id/name"/>
    <ImageView android:cropToPadding="true"/>
    <Button android:id="@+id/button"
            android:background="@drawable/rounded_button"/>
</LinearLayout>
```

与使用 `findViewById` 相比,`Null` 安全;类型安全：每个绑定类中的字段均具有与它们在 `XML` 文件中引用的视图相匹配的类型

### [数据绑定库](https://developer.android.com/topic/libraries/data-binding?hl=zh-cn#using_the_data_binding_library)

数据绑定库是一种支持库，借助该库，您可以使用声明性格式（而非程序化地）将布局中的界面组件绑定到应用中的数据源, 类似前端 vue 的双向数据绑定，引入 `observable data objects`(类似 vue 的 ref)
。数据绑定布局文件略有不同，以根标记 `layout` 开头，后跟 `data` 元素和 `view` 根元素。

普通界面元素内容赋值方法(操作 Dom)

```kotlin
// 给 TextView 元素赋值
findViewById<TextView>(R.id.sample_text).apply {
  text = viewModel.userName
}
```

数据绑定方式

```xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android">
    <data>
        <variable name="user" type="com.example.User"/>
    </data>
    <LinearLayout
            android:orientation="vertical"
            android:layout_width="match_parent"
            android:layout_height="match_parent">
        <TextView android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:text="@{user.firstName}"/>
        <TextView android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:text="@{user.lastName}"
                  android:onClick="@{handlers::onClickFriend}"
        />
    </LinearLayout>
</layout>
```

### [使用可观察的数据对象](https://developer.android.com/topic/libraries/data-binding/observability?hl=zh-cn)

当其中一个可观察数据对象绑定到界面并且该数据对象的属性发生更改时，界面会自动更新, 您可以使用通用 `Observable` 类和以下特定于基元的类，将字段设为可观察字段

```kotlin
    class User {
        val firstName = ObservableField<String>()
        val lastName = ObservableField<String>()
        val age = ObservableInt()
    }
     ObservableArrayMap<String, Any>().apply {
        put("firstName", "Google")
        put("lastName", "Inc.")
        put("age", 17)
    }
```
