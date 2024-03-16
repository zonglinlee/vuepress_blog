import{f as y,g as k,w as E,h as j,t as M,u as D,i as F,_,o as u,c as h,j as B,v as N,a as f,n as b,k as v,F as R,l as P,m as w,p as A,q as O}from"./app-4d1d3ef4.js";const H=[{path:"/",title:"风滚草的个人笔记",pathLocale:"/",contents:[{header:"TodoList",slug:"todolist",content:`更换主题： vuepress-reco.recoluan
eventloop time-slicing
坑：移动端100vh
css-animation-101
interview
how-to-create-a-real-world-node-cli-app-with-node
regex-lookarounds`},{header:"websites you should visit",slug:"websites-you-should-visit",content:`openbase
npms
project-based-learning
wikibooks
free-programming-books
awesome
awesome-shell
awesome-java
frontend-dev-bookmarks
awesome-courses
computer-science
build-your-own-x
Best-websites-a-programmer-should-visit
CS-Notes
regular-expression
sql1
sql2
编程大佬的自学笔记
Awesome-GitHub-Repo
understand-nodejs
animista
Hello 算法
java: TheAlgorithms
javascript: TheAlgorithms
algorithm-visualizer
Wiki of OI
awesome-react-component
awesome-react`},{header:"BLOG",slug:"blog",content:`woai3c/Front-end-articles
进击的java菜鸟`},{header:"books you should read",slug:"books-you-should-read",content:`wiki/Shelf:Computer_programming_languages
HTML Canvas Deep Dive
webgl fundamentals
GLSL 中文手册`}]},{path:"/algorithms/algorithms.html",title:"algorithms",pathLocale:"/",contents:[{header:"数组去重",slug:"数组去重",content:"效率：哈希表 > Set >> indexof+array >> indexof+filter"},{header:"哈希表方式",slug:"哈希表方式",content:`function uniqueArray1(arr) { const map = {} const a = [] for (let i = 0; i < arr.length; i++) { let v = arr[i] if (map[v]) continue else { map[v] = 1 a.push(arr[i]) } } return a
}`},{header:"indexOf",slug:"indexof",content:`function uniqueArray2(arr) { var a = [] for (let i = 0; i < arr.length; i++) { if (a.indexOf(arr[i]) === -1 && arr[i] !== '') a.push(arr[i]) } return a
}`},{header:"indexOf + filter",slug:"indexof-filter",content:`function uniqueArray3(a) { return a.filter(function onlyUnique(value, index, self) { return self.indexOf(value) === index })
}`},{header:"new Set",slug:"new-set",content:`function uniqueArray4(a) { return [...new Set(a)]
}`}]},{path:"/algorithms/basic_concept.html",title:"terminology",pathLocale:"/",contents:[{header:"terminology",slug:"terminology",content:`BloomFilter-布隆过滤
Disjoint-set/union–find-set/merge–find-set | 并查集
javascript 数组 sort const arr = [1, 9, 5, 2]
// 这个就是升序排列， 当 sortFun 返回值大于 0 时候就是升序
arr.sort((a, b) => { if (a > b) { return 1 } else if (a < b) { return -1 } else { return 0 }
})
// 简写如下
arr.sort((a, b) => a - b)`}]},{path:"/aliyun/",title:"云服务器相关",pathLocale:"/",contents:[{header:"域名解析",slug:"域名解析",content:"注意 主机记录是@，表示没有域名前缀。域名解析有问题可以参考 阿里云网站运维检测平台"},{header:"开放云服务器出入端口",slug:"开放云服务器出入端口",content:"域名解析完成后还要配置云服务器的安全组，否则入网和出网端口没有放开，这里我将所有1-65535的进出口端口都放开了，实际运用中根据自己的需求自定义端口和协议开放特定的出入口 出站端口 入站端口"}]},{path:"/aliyun/domain.html",title:"云服务器相关",pathLocale:"/",contents:[{header:"域名解析",slug:"域名解析",content:"注意 主机记录是@，表示没有域名前缀。域名解析有问题可以参考 阿里云网站运维检测平台"},{header:"开放云服务器出入端口",slug:"开放云服务器出入端口",content:"域名解析完成后还要配置云服务器的安全组，否则入网和出网端口没有放开，这里我将所有1-65535的进出口端口都放开了，实际运用中根据自己的需求自定义端口和协议开放特定的出入口 出站端口 入站端口"}]},{path:"/android/android_basic.html",title:"android_basic",pathLocale:"/",contents:[{header:"",slug:"",content:`AndroidX 是谷歌在 2018 I/O 大会上推出的用于替换android.support.library的
Android 扩展库，按照官方文档说明，android.support.library在 Android
28版本之后就不再更新，未来的版本更新都在 AndroidX 中进行。不仅如此，AAC（Android Architecture
Components架构缩写）中的组件也被 合并到AndroidX中，所以在使用JetPack组件时经常会看到AndroidX相关的包。
androidx 命名空间包含 Android Jetpack 库。与支持库一样，androidx 命名空间中的库与 Android
平台分开提供，并向后兼容各个 Android 版本。`},{header:"名词解释",slug:"名词解释",content:`重新生成整个屏幕所面临的一个难题是，在时间、计算能力和电池用量方面可能成本高昂。为了减少在这方面耗费的资源，Compose
会智能地选择在任何给定时间需要重新绘制界面的哪些部分 @Composable 注释。所有可组合函数都必须带有此注释；此注释可告知 Compose 编译器：此函数旨在将数据转换为界面 To display a scrollable column we use a LazyColumn. LazyColumn renders only the visible items
on screen, allowing performance gains when rendering a big list.LazyColumn and LazyRow are
equivalent to RecyclerView in Android Views. The spring-based animation:spring spec does not take any time-related parameters. Instead it
relies on physical properties (damping and stiffness) to make animations more natural. LiveData
是一种可观察的数据存储器类。与常规的可观察类不同，LiveData 具有生命周期感知能力，意指它遵循其他应用组件（如 activity、fragment 或 service）的生命周期。这种感知能力可确保
LiveData 仅更新处于活跃生命周期状态的应用组件观察者 Android Navigation:传统的应用开发，一般都是采用一个界面一个 Activity
的形式，但是大家都知道， Activity 在 Android 中是属于重量级的组件，从而导致程序资源消耗大，用户体验不佳。而导航组件
Navigation 采用的是 Fragment 轻量级的组件实现的，可以节省资源，提高用户体验。
采用单个Activity嵌套多个Fragment的UI架构模式，已经被大多数的Android工程师所接受，需要通过FragmentManager和FragmentTransaction来管理Fragment之间的切换。
在Android中，页面的切换和管理包括应用程序Appbar的管理、Fragment的动画切换以及Fragment之间的参数传递等内容。并且，纯代码的方式使用起来不是特别友好，并且Appbar在管理和使用的过程中显得很混乱。因此，Jetpack提供了一个名为Navigation的组件，旨在方便开发者管理Fragment页面和Appbar。 Fragment 表示应用界面中可重复使用的一部分。fragment 定义和管理自己的布局，具有自己的生命周期，并且可以处理自己的输入事件。fragment 不能独立存在。它们必须由 activity 或其他 fragment
托管。fragment 的视图层次结构会成为宿主的视图层次结构的一部分，或附加到宿主的视图层次结构。`},{header:"开发须知",slug:"开发须知",content:""},{header:"Activity 中使用视图绑定",slug:"activity-中使用视图绑定",content:`为某个模块启用视图绑定功能后，系统会为该模块中包含的每个 XML 布局文件生成一个绑定类。每个绑定类均包含对根视图以及具有 ID 的所有视图的引用。系统会通过以下方式生成绑定类的名称：将 XML
文件的名称转换为驼峰式大小写，并在末尾添加“Binding”一词。
假设某个布局文件的名称为 main_activity_layout.xml, 则所生成的绑定类的名称就为 MainActivityLayoutBinding,此类具有两个字段：一个是名为 name 的 TextView
，另一个是名为
button 的 Button。该布局中的 ImageView 没有 ID，因此绑定类中不存在对它的引用。每个绑定类还包含一个 getRoot()
方法，用于为相应布局文件的根视图提供直接引用。在此示例中，MainActivityLayoutBinding 类中的 getRoot() 方法会返回 LinearLayout 根视图 <LinearLayout> <TextView android:id="@+id/name"/> <ImageView android:cropToPadding="true"/> <Button android:id="@+id/button" android:background="@drawable/rounded_button"/>
</LinearLayout>
与使用 findViewById 相比,Null 安全;类型安全：每个绑定类中的字段均具有与它们在 XML 文件中引用的视图相匹配的类型`},{header:"数据绑定库",slug:"数据绑定库",content:`数据绑定库是一种支持库，借助该库，您可以使用声明性格式（而非程序化地）将布局中的界面组件绑定到应用中的数据源, 类似前端 vue 的双向数据绑定，引入 observable data objects(类似 vue 的 ref)
。数据绑定布局文件略有不同，以根标记 layout 开头，后跟 data 元素和 view 根元素。
普通界面元素内容赋值方法(操作 Dom)
// 给 TextView 元素赋值
findViewById<TextView>(R.id.sample_text).apply { text = viewModel.userName
}
数据绑定方式
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"> <data> <variable name="user" type="com.example.User"/> </data> <LinearLayout android:orientation="vertical" android:layout_width="match_parent" android:layout_height="match_parent"> <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="@{user.firstName}"/> <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="@{user.lastName}" android:onClick="@{handlers::onClickFriend}" /> </LinearLayout>
</layout>`},{header:"使用可观察的数据对象",slug:"使用可观察的数据对象",content:'当其中一个可观察数据对象绑定到界面并且该数据对象的属性发生更改时，界面会自动更新, 您可以使用通用 Observable 类和以下特定于基元的类，将字段设为可观察字段 class User { val firstName = ObservableField<String>() val lastName = ObservableField<String>() val age = ObservableInt() } ObservableArrayMap<String, Any>().apply { put("firstName", "Google") put("lastName", "Inc.") put("age", 17) }'},{header:"android navigation",slug:"android-navigation",content:"没有同时包含抽屉式导航栏和底部导航栏的布局，这是因为 Material Design 指南不允许出现这种情况。"}]},{path:"/android/kotlin_basic.html",title:"kotlin_basic",pathLocale:"/",contents:[{header:"kotlin",slug:"kotlin",content:`Kotlin File vs Class: idea
中新建 kotlin Class 不能直接运行 ?? kotlin file可以
class Point {init{}} curly braces can be omitted init block Kotlin does not have a new keyword class casts
spread operator
ternary operator typescript
as
...array
x ? y : z java
()
无
x ? y : z kotlin
as 或 as?
*array
if (a > b) a else b default import
String templates
switch case typescript \` his name is \${name}\`
switch ... case java
无 switch ... case kotlin
kotlin.* kotlin.collections.* 等
"\${s1.replace("is", "was")}, but now is $a"
when 变量 //Read-only local variables are defined using the keyword val. They can be assigned a value only once.
val a: Int = 1 // immediate assignment
val b = 2 // \`Int\` type is inferred
val c: Int // Type required when no initializer is provided
c = 3 // deferred assignment
//Variables that can be reassigned use the var keyword.
var x = 5 // \`Int\` type is inferred for 循环 val items = listOf("apple", "banana", "kiwifruit")
for (item in items) { println(item)
}
for (index in items.indices) { println("item at $index is \${items[index]}")
}
for (i in 1..3) { println(i)
}
for (i in 6 downTo 0 step 2) { println(i)
} Ranges //Check if a number is out of range
if (-1 !in 0..list.lastIndex) { println("-1 is out of range")
} lambda expressions val fruits = listOf("banana", "avocado", "apple", "kiwifruit")
fruits .filter { it.startsWith("a") } .sortedBy { it } .map { it.uppercase() } .forEach { println(it) } Nullable values and null checks :A reference must be explicitly marked as nullable when null value
is possible. Nullable type names
have ? at the end. //Return null if str does not hold an integer
fun parseInt(str: String): Int? {} Type checks and automatic casts : is operator 类： Inheritance between classes is declared by a colon (:). Classes are **final** by default;
to
make a class inheritable, mark it as open open class Shape class Rectangle(val height: Double, val length: Double) : Shape() { val perimeter = (height + length) * 2
} functions: Kotlin functions are first-class, which means they can be stored in variables and
data
structures, and can be passed as arguments to and returned from other higher-order
functions.Functions with block body must always specify return types explicitly, unless it's
intended for them to return Unit, in which case specifying the return type is optional. fun sum(a: Int, b: Int): Int { return a + b
} //A function body can be an expression. Its return type is inferred.
fun sum(a: Int, b: Int) = a + b //A function that returns no meaningful value(Unit),Unit return type can be omitted fun printSum(a: Int, b: Int): Unit { println("sum of $a and $b is \${a + b}")
}
fun printSum(a: Int, b: Int) { println("sum of $a and $b is \${a + b}")
} //if can also be used as an expression
fun maxOf(a: Int, b: Int) = if (a > b) a else b //Single-expression functions
fun theAnswer() = 42
fun theAnswer(): Int { return 42
} Lambda expressions and anonymous functions are function literals. Function literals are
functions
that are not declared but are passed immediately as an expression.A lambda expression is always
surrounded by curly braces.If the inferred return type of the lambda is not Unit, the last (or
possibly single) expression inside the lambda body is treated as the return value.
Passing trailing lambdas:According to Kotlin convention, if the last parameter of a function is a
function, then a lambda expression passed as the corresponding argument can be placed outside the
parentheses:
it: implicit name of a single parameter(If the compiler can parse the signature without any
parameters, the parameter does not need to be declared and -> can be omitted,The parameter will be
implicitly declared under the name it) // Lambda expression syntax
val sum: (Int, Int) -> Int = { x: Int, y: Int -> x + y }
// notice: there is no parentheses for arguments
val sum: (Int, Int) -> Int = { x: Int, y: Int -> x + y }
val sum = { x: Int, y: Int -> x + y }
// Passing trailing lambdas
val product = items.fold(1) { acc, e -> acc * e }
// this literal is of type '(it: Int) -> Boolean'
ints.filter { it > 0 } Scope functions: execute a block of code
within the context of an object,When you call such a
function on an object with a lambda expression provided, it forms a temporary scope. In this
scope, you can access the object without its name.There are five of them: let, run, with
, apply, and also. Executing a lambda on non-nullable objects: let Introducing an expression as a variable in local scope: let Object configuration: apply Object configuration and computing the result: run Running statements where an expression is required: non-extension run Additional effects: also Grouping function calls on an object: with Object expressions:Object expressions create objects of anonymous classes, that is, classes that
aren't explicitly declared with the class declaration. Such classes are useful for one-time use. Data classes in Kotlin are classes whose main purpose is to hold data. Data classes come automatically with
additional
member functions that allow you to print an instance to readable output, compare instances, copy instances, and more.
Data classes are marked with data ,The compiler automatically derives the following members from all properties
declared in the primary constructor:.equals(),.hashCode(),.toString(),.componentN(),.copy() Data objects:Just like data classes, you can mark an object declaration with the data modifier. This instructs
the
compiler to generate a number of functions for your object: toString(),equals()/hashCode() pair Companion objects: An object declaration inside a class can be marked with the companion keyword val helloWorld = object { val hello = "Hello" val world = "World" // object expressions extend Any, so \`override\` is required on \`toString()\` override fun toString() = "$hello $world"
} print(helloWorld) Object expressions create objects of anonymous classes, that is, classes that aren't explicitly declared with the
class declaration. Such classes are useful for one-time use. You can define them from scratch, inherit from existing
classes, or implement interfaces. Instances of anonymous classes are also called anonymous objects because they are
defined by an expression, not a name. [常用函数][https://kotlinlang.org/docs/idioms.html] // console.log | System.out.println
println()
// Read-only list
val list = listOf("a", "b", "c")
// Read-only map
val map = mapOf("a" to 1, "b" to 2, "c" to 3)
map["c"] = 4
//Traverse a map or a list of pairs
for ((k, v) in map) { println("$k -> $v")
}
//Lazy property
val p: String by lazy { // the value is computed only on first access // compute the string
} //Extension functions
fun String.spaceToCamelCase() {}
"Convert this to camelcase".spaceToCamelCase()
//Create a singleton
object Resource { val name = "Name"
}
//If-not-null shorthand
val files = File("Test").listFiles()
println(files?.size) // size is printed if files is not null
println(files?.size ?: "empty") // if files is null, this prints "empty"`},{header:"coroutine",slug:"coroutine",content:`Suspending functions:Suspending functions can be used inside coroutines just like regular
functions, but their
additional feature is that they can, in turn, use other suspending functions (like delay in this
example) to suspend execution of a coroutine. Suspending functions treat the thread fairly and don't block it for "**
waiting**". However, this doesn't yet bring any concurrency into the picture. runBlocking and coroutineScope builders may look similar because they both wait for their body
and
all its children to complete. The main difference is that the runBlocking method blocks the
current
thread for waiting, while coroutineScope just suspends, releasing the underlying thread for other
usages. Because of that difference, runBlocking is a regular function and coroutineScope
is
a
suspending function. async vs launch`},{header:"trick",slug:"trick",content:`lambda extension by:In simple words, you can
understand by keyword as provided by. From the perspective of property consumer, val is something that
has getter (
get) and var is something that has getter
and setter (get, set). For each var property there is a default provider of get and set methods that we don't need
to
specify explicitly. But, when using by keyword, you are stating that this getter/getter&setter is provided
elsewhere (
i.e. it's been
delegated). It's provided by the function that comes after by.`}]},{path:"/android/react-native.html",title:"react-native",pathLocale:"/",contents:[{header:"reactNative",slug:"reactnative",content:`React Native Generate APK — Debug and Release APK
React Native-Error: EPERM: operation not permitted, lstat # 或者尝试在 gitbash 下运行，powershell 可能权限不足 （或者需要以管理员身份运行）
cd android
./gradlew clean
cd ..
npx react-native run-android reactive 构建太慢，以及多个 jdk 选择 # 在 android 目录下找到 gradle.properties, 配置 java home
org.gradle.java.home=C:\\\\Program Files\\\\Java\\\\jdk-11
# 在 android 目录下找到 gradle.properties, 配置 gradle 代理 （clash 全局代理不生效，需要单独配置）
systemProp.http.proxyHost=127.0.0.1
systemProp.http.proxyPort=1081
systemProp.https.proxyHost=127.0.0.1
systemProp.https.proxyPort=1081`},{header:"Reference",slug:"reference",content:"reactNative 第三方组件"}]},{path:"/android/starter.html",title:"env question",pathLocale:"/",contents:[{header:"android studio 环境配置",slug:"android-studio-环境配置",content:`Android gradle plugin version vs gradle version problem
adb命令`}]},{path:"/css/css_layout.html",title:"css layout",pathLocale:"/",contents:[{header:"三栏布局",slug:"三栏布局",content:""},{header:"圣杯布局",slug:"圣杯布局",content:`圣杯布局 ： 为了让中间div内容不被遮挡，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position:
relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div
缺点：正常情况下没有问题，但是特殊情况下就会暴漏此方案的弊端，如果浏览器无限放大时，圣杯将会破坏掉。当center部分的宽小于right部分时就会发生布局混乱。（center<right即会变形） <div class="outer"> <!-- 中间的元素在第一位--> <div class="center"></div> <div class="left"></div> <div class="right"></div>
</div>
.outer { height: 100px; padding-left: 100px; padding-right: 200px;
} .left { float: left; /* margin-left: -100%;由于负外边距-100%计算值是宿主元素 div.outer 内容盒模型的宽度, 这会导致div.left从第二行移动到第一行 */ margin-left: -100%; /* div.left向左移动100px,占据父元素 div.outer的padding-left空间 */ position: relative; left: -100px; width: 100px; height: 100px; background: tomato;
} .right { position: relative; left: 200px; float: right; margin-left: -200px; width: 200px; height: 100px; background: gold;
} .center { float: left; width: 100%; height: 100px; background: lightgreen;
}`},{header:"双飞翼布局",slug:"双飞翼布局",content:`双飞翼布局：为了让中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该div里用margin-left和margin-right为左右两栏div留出位置。双飞翼布局把定位优化掉了。 <div class="father text-white"> <div class="center-wrap"> <div class="center">div.center</div> </div> <div class="left">div.left</div> <div class="right">div.right</div>
</div>
.center { height: 200px; background: red; margin-left: 200px; margin-right: 150px;
} .center-wrap { width: 100%;
} .center-wrap, .left, .right { float: left; } .left { background: yellow; height: 200px; width: 200px; margin-left: -100%;
} .right { background: black; height: 200px; width: 150px; margin-left: -150px;
}
垂直居中
What's the difference between align-content and align-items?`},{header:"css sticky position",slug:"css-sticky-position",content:`sticky-js
position:sticky`}]},{path:"/css/css_transition_animation.html",title:"css transition vs animation",pathLocale:"/",contents:[{header:"css transition",slug:"css-transition",content:`Transitions are when the browser animates from one state to another (A to B). They’re usually triggered by an action
such hovering over an element, or adding or removing a class using JavaScript.
Transitions take place in the browser when an element changes from one state to another. The browser draws the frames
between each state automatically to create movement.`},{header:"transition",slug:"transition",content:`Notice the transition property to the first button reference in the CSS state. This tells the browser to apply a
transition to any change of state such as on hover as well as when changing back from the hover state.
If we applied the transition property to the hover state only, it would only transition to the hover state but not back.
button { background: white; transition: background 0.5s linear;
} button:hover { background: green; /*transition: background 0.5s linear;*/
}`},{header:"css Animations",slug:"css-animations",content:`Animations are more involved, and let you create sequences of animations with as many keyframes as you need along the
way. They trigger automatically, and can loop.`},{header:"animation-delay",slug:"animation-delay",content:`If the animation loops, the delay does not apply each time it loops. The delay only applies to when the animation
is applied to the element. You can give this property a negative value such as -1s. This would cause the animation to start as if a second has
already elapsed.`},{header:"animation-fill-mode",slug:"animation-fill-mode",content:`By default, an animation will play and then the element returns to its normal state.Using animation-fill-mode we can
have the animation “stick” at either the end or beginning state.
Using the value forwards tells the animation to finish and stay on the last keyframe. The value backwards returns to
the first keyframe when the animation finishes.`},{header:"animation-play-state",slug:"animation-play-state",content:`If you ever need to pause or resume an animation, this property lets you do so. It takes the values of running or
paused, with the default being running. One idea might be to set this value on an animation using JavaScript.`},{header:"animation-timing-function",slug:"animation-timing-function",content:`This takes the same values the timing function property in transitions, but behaves a little differently. While a timing
function, such as ease-out applies to the entire transition, the timing function of an animation applies between
each keyframe.
/*animation-timing-function : ease-out;*/
@keyframes foo { 0% { /* Animation starts fast and ease-out makes it slow down before 50% */ } 50% { /* Again, starts fast and slows toward 100% */ } 100% { /* fin */ }
} /*so we usually define animation-timing-function on a per-keyframe basis*/
@keyframes my-animation { 0% { /*...*/ animation-timing-function: linear; } 50% { /*...*/ animation-timing-function: ease-out; }
}`},{header:"Things to look out for",slug:"things-to-look-out-for",content:`keywords from and to is simple an alternate way of writing 0% and 100%
You may have noticed that sometimes more than one percentage value is used on the same line. This is a way to have
the animation pause for a while, or hold a particular state. /*This example will have the element start with an opacity of 0, and stay invisible until 20% through the animation*/
@keyframes name { 0%, 20% { opacity: 0; } 100% { opacity: 1; }
} Lastly, you can omit the 0% keyframe and the browser will take the element’s style as implied. For example, to
have something fade away, we don’t necessarily have to give it a starting opacity of 1 (assuming the element is
already visible) @keyframes name { 100% { opacity: 0; }
} If a keyframe rule doesn't specify the start or end states of the animation (that is, 0%/from and 100%/to),
browsers
will use the element's existing styles for the start/end states. This can be used to animate an element from its
initial state and back.`},{header:"Multiple animations",slug:"multiple-animations",content:""},{header:"拖拽过渡动画",slug:"拖拽过渡动画",content:`draggable-balls 初始状态下维护一个 layout 数组， 用来记录各个 ball 的 translateX 和 translateY, 再维护一个 order 数组，用来记录各个 ball 的顺序，当鼠标拖拽球进行移动时，计算拖拽移动的距离 deltaX, deltaY，并根据整体 width 和 height 对 order 数组进行重排序，对前进行拖拽的 ball 根据鼠标移动的距离进行 translate 变换， 其余的 ball 则变换到重新排序后的 layout[index] 位置上去，layout 数组会保证各个 ball 的位置最终结果
比如刚开始 order=[0, 1, 2, 3, 9, 4, 5, 6, 7, 8, 10], 当最后一个球拖拽到第一个球位置上之后,order 进行重排，order=[10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]，所有位置的 DOM 节点都会后移一个位置，translate 参数可以在 layout 中查询出来，剩下的交给浏览器进行位移动画即可`},{header:"FQ",slug:"fq",content:`CSS transition not working The transition can only be applied to animatable properties.
Check that the animating property is not set to auto. Transitions can not animate CSS properties that are not
explicitly set and auto Why does switching from display: none to display: block not display a transition animation? The reason switching from display: none to display: block doesn't display a transition animation is because the display property is not one of the CSS properties that can be smoothly transitioned. Transition animations typically apply to properties that can smoothly transition between different values, such as opacity, width, height, margin, padding, and others.
When you switch the display property from none directly to block, the browser instantly shows or hides the element with no transition. This is because changes in the display property are instantaneous and have no intermediate states, making it unsuitable for transition effects.
If you want to achieve a transition effect from invisible to visible, you can use the opacity property or the visibility property
instead of the display property. Here's an example using the opacity property:
.element { opacity: 0; display: block; transition: opacity 0.5s;
} .element.visible { opacity: 1;
}
In this example, we transition the opacity of the element from 0 to 1, creating a transition effect from invisible to visible. You can trigger this transition effect by adding or removing the "visible" class. display:none 和 display:block 对元素 animation 的影响 display: none:当一个元素的 display 属性被设置为 none，该元素会从文档流中移除，它在页面上将不可见，也不占用空间。
任何应用在这个元素上的动画、过渡或其他视觉效果都将被取消，因为该元素已经被隐藏，无法显示任何动画效果。 display: block:当将一个元素的 display 属性从 none 设置为 block，元素将重新显示在页面上，并按照正常的文档流占用空间。
如果你在元素上应用了动画，这些动画会在元素重新显示时生效。这意味着动画将在元素由不可见变为可见时播放。
总之，display: none 会立即隐藏元素，取消任何与元素相关的动画，而 display: block 会使元素重新显示，同时允许动画在元素显示时生效。如果你希望在显>示和隐藏元素时有过渡效果，通常使用 opacity、visibility 或其他 CSS 属性来实现动画，而不是直接切换 display 属性。`}]},{path:"/css/css_tricks.html",title:"css tricks",pathLocale:"/",contents:[{header:"Reference",slug:"reference",content:"Remove Whitespace Between Inline-Block Elements"},{header:"svg 改变颜色",slug:"svg-改变颜色",content:`父元素设置 red 无效，因为 <path> 标签的最后默认设置了 blue，此时该 svg 图片是 蓝色的 <div style="color: red"> <svg width="1em" height="1em" viewBox="0 0 1024 1024"> <path d="M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8..." fill="blue"/> </svg>
</div> svg 标签中加入 fill="currentColor"
path 标签中去掉 fill="blue <div style="color: red"> <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024"> <path d="M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8..."/> </svg>
</div>`},{header:"让CSS flex布局最后一行列表左对齐的N种方法",slug:"让css-flex布局最后一行列表左对齐的n种方法",content:""},{header:"set scrollbar style",slug:"set-scrollbar-style",content:`body::-webkit-scrollbar { width: 1em;
} body::-webkit-scrollbar-track { box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
} body::-webkit-scrollbar-thumb { background-color: darkgrey; outline: 1px solid slategrey;
}`}]},{path:"/css/css_websites.html",title:"css websites",pathLocale:"/",contents:[{header:"",slug:"",content:`csstriggers.com During a CSS animation, this process repeats every frame. However, CSS properties that never affect geometry or
position, such as color, may skip the Layout step. If a color changes, the browser doesn’t calculate any new geometry,
it goes to Paint → Composite. And there are few properties that directly go to Composite.
Layout: re-compute the geometry and position of each element, then Paint: re-compute how everything should look like at their places, including background, colors, Composite: render the final results into pixels on screen, apply CSS transforms if they exist.`}]},{path:"/css/css%E8%A1%A5%E6%BC%8F.html",title:"css 补漏",pathLocale:"/",contents:[{header:"css参考",slug:"css参考",content:""},{header:"工具网站",slug:"工具网站",content:`cubic-bezier
animista(css animation)
css-box-shadow-example
w3schools.com_css_howto`},{header:"library",slug:"library",content:"tailwindcss v2"},{header:"在线电子书",slug:"在线电子书",content:"cssanimation"},{header:"caret-color",slug:"caret-color",content:`The caret-color CSS property sets the color of the insertion caret, the visible marker where the next character
typed will be inserted. This is sometimes referred to as the text input cursor.`},{header:"::after vs ::before",slug:"after-vs-before",content:"创建一个伪元素，作为已选中元素的最后一个/第一个子元素。通常会配合content属性来为该元素添加装饰内容。这个虚拟元素默认是行内元素"},{header:"box-sizing",slug:"box-sizing",content:`box-sizing 只有两个取值 ：content-box(default) 和 border-box content-box: 如果你设置一个元素的宽为 100px，那么这个元素的内容区会有 100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
border-box 不包含 margin`},{header:"css 世界",slug:"css-世界",content:""},{header:"内部尺寸",slug:"内部尺寸",content:`内部尺寸：元素的尺寸由内部元素决定，而非由外部容器决定，假如这个元素内部没有内容，宽度就是 0 ,典型的如 display: inline-block, 比如html中的 button 元素，默认就是 inline-block
,它的宽度会随文字的增加而变宽。
以下代码可以实现文字少的时候居中显示，文字多的时候居左显示
.box { text-align: center;
} .content { display: inline-block; text-align: left;
}`},{header:"首选最小宽度",slug:"首选最小宽度",content:`中文中最小宽度为每个汉字的宽度
英文中单词一般是连续的，终止于空格、短横线、问号、以及其他非英文字符, 如果想让英文字符和中文字符一样，可以使用 word-break:break-all;`},{header:"width:auto",slug:"width-auto",content:`对于块状元素，如果 width:auto，则元素会如水流般充满整个容器，而一旦设定了 width 具体数值，则元素的流动性就会被阻断，因为元素给定宽度就像河流中间竖了两个大闸一样， 就没有了流动性。尤其宽度作用在 content-box
上，更是内外流动性全无.`},{header:"CSS 流体布局下的宽度分离原则",slug:"css-流体布局下的宽度分离原则",content:`宽度分离原则: CSS 中的 width 属性不与影响宽度的 padding/border（有时候包括 margin）属性共存,也就是不能出现 .box { width: 100px; border: 1px solid; }
或者 .box { width: 100px; padding: 20px; }
正确的书写方式
.father { width: 180px;
} .son { margin: 0 20px; padding: 20px; border: 1px solid;
}`},{header:"textarea",slug:"textarea",content:`textarea 为替换元素，替换元素的特性之一就是尺寸由内部元素决定，且无论其 display 属性值是 inline 还是 block。这个特性很有意思，对于非替换元素，如果其 display 属性值为
block，则会具有流动性，宽度由外部尺寸决定，但是替换元素的宽度却不受 display 水平影响，因此，我们通过 CSS 修改 textarea 的 display 水平是无法让尺寸 100%自适应父容器的：
textarea { display: block; /* 还是原来的尺寸 */
}
所以，我们只能通过 width 设定让 textarea 尺寸 100%自适应父容器`},{header:"height:100%",slug:"height-100",content:`如果包含块的高度没有显式指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为 auto。一句话总结就是：因为解释成了 auto。要知道，auto 和百分比计算，肯定是算不了的.
如何让元素支持 height:100%效果 设定显式的高度值
使用绝对定位`},{header:"幽灵空白节点",slug:"幽灵空白节点",content:`Each line box starts with a zero-width inline box with the element’s font and line height properties. We call that
imaginary box a “strut”.`},{header:"替换元素",slug:"替换元素",content:`img object video iframe textarea input 等都是替换元素 内容可以被替换
内容的外观不受页面上的 CSS 的影响，用专业的话讲就是在样式表现在 CSS 作用域之外。如何更改替换元素本身的外观？需要类似 appearance 属性，或者浏览器自身暴露的一些样式接口
有自己的尺寸。在 Web 中，很多替换元素在没有明确尺寸设定的情况下，其默认的尺寸（不包括边框）是 300 像素×150 像素，如<video>、<iframe>或者<canvas>等，也有少部分替换元素为 0
像素，如<img>图片，而表单元素的替换元素的尺寸则和浏览器有关，没有明显的规律
在很多 CSS 属性上有自己的一套表现规则。比较具有代表性的就是 vertical-align 属性，对于替换元素和非替换元素，vertical-align 属性值的解释是不一样的 固有尺寸指的是替换内容原本的尺寸。例如，图片、视频作为一个独立文件存在的时候，都是有着自己的宽度和高度的。这个宽度和高度的大小就是这里的“固有尺寸”。对于表单类替换元素，“固有尺寸”可以理解为“不加修饰的默认尺寸”。比方说，你在空白页面写<input>
，此时的尺寸就可以看成是<input>元素的“固有尺寸”。这就是输入框、下拉框这些表单元素默认的 font-size/padding/margin 等属性全部使用 px
作为单位的原因，因为这样可以保证这些元素的“固有尺寸”是固定大小，不会受外界 CSS 的影响 CSS 世界中的替换元素的固有尺寸有一个很重要的特性，那就是“我们是无法改变这个替换元素内容的固有尺寸的,下面的例子中 width 和 height 属性都被直接无视了 div:before { /* 使用 content 属性插入的内容都是匿名的可替换元素。*/ content: url("1.jpg"); display: block; width: 200px; height: 200px;
} /*既然图片的固定尺寸不受 CSS 宽高控制，那为何我们设定 width 和 height 会影响图片的尺寸呢？*/
/*那是因为图片中的 content 替换内容默认的适配方式是填充（fill），也就是外部设定的尺寸多大，我就填满、跟着一样大。*/
/*换句话说，尺寸变化的本质并不是改变固有尺寸，而是采用了填充作为适配 HTML 尺寸和 CSS 尺寸的方式，*/
/*且在 CSS3 之前，此适配方式是不能修改的*/
/*实际项目中，content 图片生成用得并不多，主要原因在于图片的尺寸不好控制，我们设置宽高无法改变图片的固有尺寸*/`},{header:"object-fit",slug:"object-fit",content:`CSS3中 ，<img> 和其他一些替换元素的替换内容的适配方式可以通过 object-fit 属性修改了。例如，<img> 元素的默认声明是 object-fit:fill，如果我们设置 object-fit:none
，则我们图片的尺寸就完全不受控制，表现会和非替换元素::before生成的图片尺寸类似；如果我们设置 object-fit:contain，则图片会以保持比例图片，尽可能利用 HTML
尺寸但又不会超出的方式显示`},{header:"padding",slug:"padding",content:""},{header:"内联元素 垂直 padding",slug:"内联元素-垂直-padding",content:`内联元素 padding 对视觉层和布局层具有双重影响。我们可以在不影响当前布局的情况下，优雅地增加链接或按钮的点击区域大小，比方说，文章中会有一些文字链接，默认情况下，这些链接的点击区域的高度是受 font-size
字体大小控制的，和行高没有关系。尤其在 Chrome 等浏览器下，高度仅
1em，这么小的高度，要是在移动端，我们的手指不一定能够一次点中，可能要戳好多下，此时就有必要增加链接的点击区域大小，但是前提是不影响当前的内容布局。此时，我们就可以使用 padding 天然实现我们想要的效果，例如：
/*注意这里并没有将 a 标签设置为 display:inline-block;*/
/*如果我们设置成 inline-block，则行间距等很多麻烦事就会出来*/
article a { padding: .25em 0;
}`},{header:"padding 百分比值",slug:"padding-百分比值",content:`和 margin 属性不同，padding 属性是不支持负值的；其二，padding 支持百分比值，但是，和 height 等属性的百分比计算规则有些差异，差异在于：padding
百分比值无论是水平方向还是垂直方向均是**
相对于宽度**计算的！
/*利用padding实现固定宽高比的 box, 这里padding-left和padding-right都为50%，刚好占据了整个 width */
/* demo: https://demo.cssworld.cn/4/2-3.php*/
.box { padding: 10% 50%; position: relative;
} .box > img { position: absolute; width: 100%; height: 100%; left: 0; top: 0;
}`},{header:"margin",slug:"margin",content:`等高布局: 此布局多出现在分栏有背景色或者中间有分隔线的布局中，有可能左侧栏内容多，也有可能右侧栏内容多，但无论内容多少，两栏背景色都和容器一样高 /*由于 height:100%需要在父级设定具体高度值时才有效，因此我们需要使用其他技巧来实现*/
/*方法一 (推荐使用)：使用 display:table-cell 布局，左右两栏作为单元格处理*/
/*方法二 (会有其它问题，这里只做展示)：使用我们这里的 margin 负值实现： https://demo.cssworld.cn/4/3-2.php */
.column-box { overflow: hidden;
} .column-left,
.column-right { margin-bottom: -9999px; padding-bottom: 9999px;
} /*垂直方向 margin 无法改变元素的内部尺寸，但却能改变外部尺寸，这里我们设置了 \`margin-bottom:-9999px\` 意味着元素的外部尺寸在垂直方向上小了 9999px。
默认情况下，垂直方向块级元素上下距离是 0，一旦 \`margin-bottom:-9999px\` 就意味着后面所有元素和上面元素的空间距离变成了-9999px，
也就是后面元素都往上移动了 9999px。此时，通过神来一笔padding-bottom:9999px 增加元素高度，
这正负一抵消，对布局层并无影响，但却带来了我们需要的东西—视觉层多了 9999px 高度的可使用的背景色。
但是，9999px 太大了，所以需要配合父级 overflow:hidden 把多出来的色块背景隐藏掉，于是实现了视觉上的等高布局效果*/ 和 padding 属性一样，margin 的百分比值无论是水平方向还是垂直方向都是相对于宽度计算的`},{header:"margin 合并",slug:"margin-合并",content:`块级元素的上外边距（margin-top）与下外边距（margin-bottom）有时会合并为单个外边距 块级元素，但不包括浮动和绝对定位元素，尽管浮动和绝对定位可以让元素块状化。
只发生在垂直方向，需要注意的是，这种说法在不考虑 writing-mode 的情况下才是正确的，严格来讲，应该是只发生在和当前文档流方向的相垂直的方向上。由于默认文档流是水平流，因此发生 margin 合并的就是垂直方向 margin 合并有以下 3 种场景， margin 合并的计算规则为 “正正取大值” “正负值相加” “负负最负值” 相邻兄弟元素 margin 合并
父级和第一个/最后一个子元素,查看 demo,这里最终的 margin
全部合到了父元素上，这里只是表现为合并到父元素之上了，实际中使用 getComputedStyle
方法获取父元素的 margin-top 值还是 CSS 属性中设置值
空块级元素的 margin 合并（自身上下边距会合并为一个） 阻止 margin-top 合并 父元素设置为块状格式化上下文元素；
父元素设置 border-top 值；
父元素设置 padding-top 值；
父元素和第一个子元素之间添加内联元素进行分隔 阻止 margin-bottom 合并 父元素设置为块状格式化上下文元素；
父元素设置 border-bottom 值；
父元素设置 padding-bottom 值；
父元素和最后一个子元素之间添加内联元素进行分隔；
父元素设置 height、min-height 或 max-height margin:auto 的填充规则 如果一侧定值，一侧 auto，则 auto 为剩余空间大小。
如果两侧均是 auto，则平分剩余空间。
如果想让某个块状元素右对齐，脑子里不要就一个 float:right，很多时候，margin-left:auto 才是最佳的实践 Q1: 为什么明明 容器定高、元素定高，margin:auto 却无法垂直居中 ?
原因在于触发 margin:auto 计算有一个前提条件，就是 width 或 height 为 auto 时，元素是具有对应方向的自动填充特性的,width
可以自动填充，所以水平方向可以居中，但是height一般是根据内容高度撑开的，不会自动填充为父级高度，所以垂直方向不能自动居中，可以使用 writing-mode:vertical-lr; 改变父级文档流的方向，但这样之后水平方向就不能
auto 居中了
.father { height: 200px;
} .son { height: 100px; margin: auto;
}
绝对定位元素的 margin:auto 居中， 查看 demo
.father { width: 300px; height: 150px; position: relative;
} /*此时.son 这个元素的尺寸表现为“格式化宽度和格式化高度, 尺寸自动填充父级元素的可用尺寸*/
/*设置宽高之后，剩余空间会被 margin 均匀分配*/
.son { position: absolute; width: 200px; height: 100px; top: 0; right: 0; bottom: 0; left: 0;
}
margin失效的情况： display 计算值 inline 的非替换元素的垂直 margin 是无效的
表格中的<tr>和<td>元素或者设置 display 计算值是 table-cell 或 table-row 的元素的 margin 都是无效的
margin 合并的时候，更改 margin 值可能是没有效果的
绝对定位元素非定位方位的 margin 值“无效”
定高容器的子元素的 margin-bottom 或者宽度定死的子元素的 margin-right 的定位“失效
内联特性导致的 margin 无效`},{header:"border",slug:"border",content:`border-color 有一个很重要也很实用的特性，就是“border-color 默认颜色就是color 色值
三角等图形绘制 div { width: 0; border: 10px solid; border-color: #f30 transparent transparent;
}`},{header:"字母 x",slug:"字母-x",content:`在各种内联相关模型中，凡是涉及垂直方向的排版或者对齐的，都离不开最基本的基线 （baseline）。例如 line-height 行高的定义就是两基线的间距，vertical-align 的默认值就是基线。字母 x
的下边缘（线）就是我们的基线
字母 x 与 CSS 中的 x-height: x-height 指的就是小写字母 x 的高度，术语描述就是基线和等分线（mean line）（也称作中线，midline）之间的距离,在 CSS 世界中，middle 指的是基线往上
1/2 x-height 高度。我们可以近似理解为字母 x 交叉点那个位置。 由此可见，vertical-align:middle 并不是绝对的垂直居中对齐，我们平常看到的 middle 效果只是一种近似效果(跟当前字体
fontFamily 中字母 x 有关)
The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box line-height 计算 数值，如 line-height:1.5，其最终的计算值是和当前 font-size 相乘后的值(后代元素继承的是 1.5)
百分比值，如 line-height:150%，其最终的计算值是和当前 font-size 相乘后的值 (后代元素继承的是 150%*fontSize 计算出来的 px 值)`},{header:"vertical-align",slug:"vertical-align",content:`vertical-align 属性值分为以下 4 类： 线类，如 baseline（默认值）、top、middle、bottom。 vertical-align:top 就是垂直上边缘对齐，具体定义如下。 内联元素：元素底部和当前行框盒子的顶部对齐。
table-cell 元素：元素底 padding 边缘和表格行的顶部对齐
vertical-align:middle 与近似垂直居中
vertical-align 上标下标类属性值指的就是 sub 和 super 两个值，分别表示下标和上标 文本类，如 text-top、text-bottom；
上标下标类，如 sub、super；
数值百分比类，如 20px、2em、20%等 问题:如下代码中 .box 元素的高度是多少?
<!--事实上，高度并不是 32px，而是要大那么几像素，这是受 vertical-align 影响-->
<!--div 中的 幽灵空白节点 和 span中的 font-size 大小不一致，内外x基线需要对齐-->
<style> .box { line-height: 32px; } .box > span { font-size: 24px; }
</style>
<div class="box"> x<span>x文字</span>
</div>
一处是字母 x 构成了一个“匿名内联盒子”，另一处是“文字 x”所在的<span>元素，构成了一个“内联盒子”。由于都受 line-height:32px 影响，因此，这两个“内联盒子”的高度都是
32px。下面关键的来了，对字符而言，font-size
越大字符的基线位置越往下，因为文字默认全部都是基线对齐，所以当字号大小不一样的两个文字在一起的时候，彼此就会发生上下位移，如果位移距离足够大，就会超过行高的限制，而导致出现意料之外的高度
vertical-align 起作用是有前提条件的，这个前提条件就是：只能应用于内联元素以及 display 值为 table-cell 的元素,换句话说，vertical-align 属性只能作用在 display 计算值为
inline、inline-block，inline-table 或 table-cell 的元素上，有一些 CSS 属性值会在背后默默地改变元素 display 属性的计算值，从而导致 vertical-align
不起作用。比方说，浮动和绝对定位会让元素块状化
对 table-cell 元素而言，vertical-align 起作用的是 table-cell元素自身，其它元素是根据 行框盒子 起作用
vertical-align 和 line-height 之间的关系
最明显的就是 vertical-align 的百分比值是相对于 line-height 计算的`},{header:"div元素中图片底部留白的原因",slug:"div元素中图片底部留白的原因",content:`如下所示：图片底部会留白，间隙产生的三大元凶就是“幽灵空白节点”、line-height 和 vertical-align 属性。 我们可以在图片前面辅助一个字符 x 代替“幽灵空白节点”，并想办法通过背景色显示其行高范围。
当前 line-height 计算值是 20px，而 font-size 只有 14px，因此，字母 x 往下一定有至少 3px 的半行间距（具体大小与字体有关），而图片作为替换元素其基线是自身的下边缘。根据定义，默认和基线（也就是这里字母
x 的下边缘）对齐，字母 x 往下的行高产生的多余的间隙就嫁祸到图片下面，让人以为是图片产生的间隙，实际上，是“幽灵空白节点”、 line-height 和 vertical-align 属性共同作用的结果。 <style> .box { width: 280px; outline: 1px solid #aaa; text-align: center; } .box > img { height: 96px; }
</style>
<div class="box"> <img src="1.jpg">
</div>
处理方式 图片块状化
容器 line-height 足够小，只要半行间距小到字母 x 的下边缘位置或者再往上，自然就没有了撑开底部间隙高度空间了。比方说，容器设置 line-height:0
容器 font-size 足够小
图片设置其他 vertical-align 属性值。间隙的产生原因之一就是基线对齐，所以我们设置 vertical-align 的值为 top、middle、bottom 中的任意一个都是可以的`},{header:"vertical-align 与 inline-block",slug:"vertical-align-与-inline-block",content:`vertical-align 属性的默认值 baseline 在文本之类的内联元素那里就是字符 x 的下边缘，对于替换元素则是替换元素的下边缘。但是，如果是 inline-block 元素，则规则要复杂了：一个 inline-block
元素，如果里面没有内联元素，或者 overflow 不是 visible，则该元素的基线就是其 margin 底边缘；否则其基线就是元素里面最后一行内联元素的基线`},{header:"float",slug:"float",content:`浮动的本质就是为了实现文字环绕效果 ,float 都有哪些有意思的特性呢？具体如下： 包裹性: 假设浮动元素父元素宽度 200px，浮动元素子元素是一个 128px 宽度的图片，则此时浮动元素宽度表现为“包裹”，就是里面图片的宽度 128px; 如果浮动元素的子元素不只是一张 128px
宽度的图片，还有一大波普通的文字,则此时浮动元素宽度就自适应父元素的 200px 宽度，最终的宽度表现也是 200px
块状化并格式化上下文
破坏文档流；
没有任何 margin 合并 内联元素的浮动是基于当前行框盒子进行浮动的 比如 <div>我是一段测试文字。<a style="float:right">我是浮动a标签</a>我是一段测试文字。</div>`},{header:"浮动产生的异常",slug:"浮动产生的异常",content:`demo1:虽然肉眼看上去容器和图片一样高，内联状态下的图片底部是有间隙的，也就是.float 这个浮动元素的实际高度并不是 64px，而是要比 64px
高几像素，带来的问题就是浮动元素的高度超出.father 几像素。 于是，下面的文字就遭殃了。垂直位置有了重叠，尽管就那么几像素。于是，区域被限制，形成了“被环绕”效果。`},{header:"浮动的清除",slug:"浮动的清除",content:`clear 属性只有块级元素才有效的，而::after 等伪元素默认都是内联水平，这就是借助伪元素清除浮动影响时需要设置 display 属性值的原因, clear:both 的作用本质是让自己不和 float
元素在一行显示，并不是真正意义上的清除浮动，因此 float 元素一些不好的特性依然存在，查看 (demo)[https://demo.cssworld.cn/6/2-1.php],这里 div
左侧不能有浮动元素，所以一直到图片最底下才开始展示文字
.clear:after { content: ''; /*// 也可以是 'block' ，或者是 'list-item'*/ display: table; clear: both;
}
要想彻底清除浮动的影响，最适合的属性不是 clear 而是 overflow。一般使用 overflow:hidden，利用 BFC 的“结界”特性彻底解决浮动对外部或兄弟元素的影响`},{header:"BFC",slug:"bfc",content:`BFC 全称为 block formatting context，中文为“块级格式化上下文”。相对应的还有 IFC，也就是 inline formatting context，中文为“内联格式化上下”
如果一个元素具有 BFC，内部子元素再怎么翻江倒海、翻云覆雨，都不会影响外部的元素。所以，BFC 元素是不可能发生 margin 重叠的，因为 margin重叠是会影响外面的元素的；BFC
元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元素高度塌陷，必然会影响后面元素布局和定位，这显然有违 BFC 元素的子元素不会影响外部元素的设定
什么时候会触发 BFC 呢？常见的情况如下： <html>根元素；
float 的值不为 none；
overflow 的值为 auto、scroll 或 hidden；
display 的值为 table-cell、table-caption 和 inline-block 中的任何一个；
position 的值不为 relative 和 static 只要元素符合上面任意一个条件，就无须使用 clear:both 属性去清除浮动的影响了`},{header:"overflow",slug:"overflow",content:`HTML 中有两个标签是默认可以产生滚动条的，一个是根元素<html>，另一个是文本域<textarea>。之所以可以出现滚动条，是因为这两个标签默认的 overflow 属性值不是visible，都使用 auto 作为默认的属性值
在 PC 端，无论是什么浏览器，默认滚动条均来自<html>，而不是<body>标签, 在 PC 端，对<html>标签设置 overflow:hidden 可以隐藏滚动条禁止滚动，但是在移动端基本上无效。在 PC 端，
窗体滚动高度可以使用 document.documentElement.scrollTop 获取，但是在移动端， 可能就要使用 document.body.scrollTop 获取
滚动条自定义 整体部分，::-webkit-scrollbar；
两端按钮，::-webkit-scrollbar-button；
外层轨道，::-webkit-scrollbar-track；
内层轨道，::-webkit-scrollbar-track-piece；
滚动滑块，::-webkit-scrollbar-thumb；
边角，::-webkit-scrollbar-corner`},{header:"overflow 与锚点定位",slug:"overflow-与锚点定位",content:`基于 URL 地址的锚链（如上面的#1，可以使用 location.hash 获取）实现锚点跳转的方法有两种，一种是<a>标签以及 name 属性，还有一种就是使用标签的 id 属性.
<!--方式一: 利用a标签和name属性-->
<a href="#1">发展历程></a>
<a name="1"></a>
<!--方式二：利用a标签和 id-->
<a href="#1">发展历程></a>
<h2 id="1">发展历程</h2>
下面两种情况可以触发锚点定位行为的发生 URL 地址中的锚链与锚点元素对应并有交互行为(不需要依赖 JavaScript,让元素定位在浏览器窗体的上边缘)
可 focus 的锚点元素处于 focus 状态(“focus 锚点定位”指的是类似链接或者按钮、输入框等可以被 focus 的元素在被 focus 时发生的页面重定位现象,不依赖于
JavaScript，是浏览器内置的无障碍访问行为，并且所有浏览器都是如此,让元素在浏览器窗体范围内显示即可，不一定是在上边缘) 如果我们的锚链就是一个很简单的 #，则定位行为发生的时候，页面是定位到顶部的,所以我们一般实现返回顶部效果都是使用这样的 HTML：<a href="#">返回顶部></a>
锚点定位行为的发生，本质上是通过改变容器滚动高度或者宽度来实现的`},{header:"定位",slug:"定位",content:`当 absolute 和 float 同时存在的时候，float 属性是无任何效果的。因此，没有任何理由 absolute 和 float 同时使用：
.brother { position: absolute; float: left; /*无效*/
}
实际上 absolute 天然具有“包裹性”， absolute 的自适应性最大宽度往往不是由父元素决定的，本质上说，这个差异是由“包含块”的差异决定的。换句话说，absolute
元素具有与众不同的“包含块”，而绝对定位元素的宽度是相对于第一个 position 不为 static 的祖先元素计算的。 根元素（很多场景下可以看成是<html>）被称为“初始包含块”，其尺寸等同于浏览器可视窗口的大小。
对于其他元素，如果该元素的 position 是 relative 或者 static，则“包含块”由其最近的块容器祖先盒的 content box 边界形成。
如果元素 position:fixed，则“包含块”是“初始包含块”。
如果元素 position:absolute，则“包含块”由最近的 position 不为 static 的祖先元素建立，具体方式如下。
如果该祖先元素是纯 inline 元素，则规则略复杂： 假设给内联元素的前后各生成一个宽度为 0 的内联盒子（inline box），则这两个内联盒子的 padding box 外面的包围盒就是内联元素的“包含块”；
如果该内联元素被跨行分割了，那么“包含块”是未定义的，也就是 CSS2.1规范并没有明确定义，浏览器自行发挥。
否则(祖先元素不是 inline 元素)，“包含块”由该祖先的 padding box 边界形成。如果没有符合条件的祖先元素，则“包含块”是“初始包含块” height:100%和 height:inherit 的区别。对于普通元素，两者确实没什么区别，但是对于绝对定位元素就不一样了。height:100% 是第一个具有定位属性值的祖先元素的高度，而 height:inherit
则是单纯的父元素的高度继承
一个绝对定位元素，没有任何 left/top/right/bottom 属性设置，并且其祖先元素全部都是非定位元素，其位置在哪里？demo
,这个例子中是相对于初始包含块定位的(即 html 标签)`},{header:"CSS key concepts",slug:"css-key-concepts",content:`Layout and the containing block
HTMLElement: offsetParent property
Dom element dimensions and css transforms`}]},{path:"/css/scss.html",title:"scss",pathLocale:"/",contents:[{header:"Mixins",slug:"mixins",content:`@mixin text-ellipsis(){ overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
} @mixin flexbox ($align:center, $justify:space-between,$direction: row) { display: flex; flex-direction: $direction; align-items: $align; justify-content: $justify;
}`},{header:"常用命令",slug:"常用命令",content:""},{header:"@each 指令",slug:"each-指令",content:`$bgColors: ( "1": #FC1786, "2": #2EC8FA, "3": #2672ae, "4":#f80, "5":#f2c2b9, "6":#1c6072, "7":#779ced, "8":#303d69, "9":#fbc9b8, "10":#412e45, "11":#88e9e4, "12":#98c3bf, "13":#e3bafa, "14":#9add8d, "15":#5e7987, "16":#dedf7b, "17":#5d94a6, "18":#0571b4, "19":#bd5008, "20":#4d41be
); @each $key, $value in $bgColors { .card_bg#{$key} { background-color: $value; }
}`}]},{path:"/css/vue_group_transition_flip.html",title:"FLIP Your Animations",pathLocale:"/",contents:[{header:"what is Flip",slug:"what-is-flip",content:`FLIP stands for First, Last, Invert, Play.
vue2 group transitions example
flip plugin`}]},{path:"/database/sql_faq.html",title:"sql-faq",pathLocale:"/",contents:[{header:"",slug:"",content:"Why would someone use WHERE 1=1 AND <conditions> in a SQL clause?"}]},{path:"/element-ui/code_organization.html",title:"packageJson文件",pathLocale:"/",contents:[{header:"prerequisite",slug:"prerequisite",content:""},{header:"Cross-platform Utilities",slug:"cross-platform-utilities",content:`Utilities to perform common command-line tasks without worrying about cross-platform compatibility. rimraf - Delete files or directories; like rm -rf.
del-cli - Safer file and folder deletion.
mkdirp - Create a directory, creating parent directories if needed; like mkdir -p.
cpr - cp -r for Node.js.
cpy-cli - File/directory copying/renaming.
copyfiles - Copy a list of files into a directory.
sync-files - rsync-like directory syncing with watch mode.
echo-cli - Cross-platform echo with JS escape sequence support.
clear-cli - Clear the terminal.
cross-env - Set environment variables for scripts, unix-style.
cross-os - Run platform-specific npm scripts.
ntee - Utility that reads from standard input and writes to standard output and files; like Unix tee.
catw - Print a file to stdout, with optional watch mode; sorta like Unix cat.`},{header:"npm scripts",slug:"npm-scripts",content:`"scripts": { "dist": "npm run clean && npm run build:file && npm run lint && webpack --config build/webpack.conf.js && webpack --config build/webpack.common.js && webpack --config build/webpack.component.js && npm run build:utils && npm run build:umd && npm run build:theme", "bootstrap": "yarn || npm i", "build:file": "node build/bin/iconInit.js & node build/bin/build-entry.js & node build/bin/i18n.js & node build/bin/version.js", "build:theme": "node build/bin/gen-cssfile && gulp build --gulpfile packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk", "build:utils": "cross-env BABEL_ENV=utils babel src --out-dir lib --ignore src/index.js", "build:umd": "node build/bin/build-locale.js", "clean": "rimraf lib && rimraf packages/*/lib && rimraf test/**/coverage", "deploy:build": "npm run build:file && cross-env NODE_ENV=production webpack --config build/webpack.demo.js && echo element.eleme.io>>examples/element-ui/CNAME", "deploy:extension": "cross-env NODE_ENV=production webpack --config build/webpack.extension.js", "dev:extension": "rimraf examples/extension/dist && cross-env NODE_ENV=development webpack --watch --config build/webpack.extension.js", "dev": "npm run bootstrap && npm run build:file && cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js & node build/bin/template.js", "dev:play": "npm run build:file && cross-env NODE_ENV=development PLAY_ENV=true webpack-dev-server --config build/webpack.demo.js", "i18n": "node build/bin/i18n.js", "lint": "eslint src/**/* test/**/* packages/**/* build/**/* --quiet", "pub": "npm run bootstrap && sh build/git-release.sh && sh build/release.sh && node build/bin/gen-indices.js",
}`},{header:"build:file",slug:"build-file",content:`使用了 postcss 对 packages/theme-chalk/src/icon.scss 进行了解析，提取了所有的 icon class
// icon.scss 其实是一个css文件，所以可以使用 postcss.parse
var fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'), 'utf8');
var nodes = postcss.parse(fontFile).nodes;
解析根目录下的components.json文件, 使用 模板字符串 的方式生成 src/index.js json-templater
JSON template(r) is an opinionated simple way to do mustache style template replacements on your js and json
objects (
and of course strings too)! uppercamelcase
Convert a dash/dot/underscore/space separated string to UpperCamelCase: foo-bar → FooBar var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');
var endOfLine = require('os').EOL;`},{header:"构建 demo 文件",slug:"构建-demo-文件",content:`在 deploy:build 脚本中使用 cross-env NODE_ENV=production webpack --config build/webpack.demo.js命令构建了 element-UI 文档中的
demo， 这里使用了elementUI自研的 md-loader, 这个loader会先将 Markdown
文档使用 markdown-it 将 markdown 解析为
html
,然后再使用 vue-template-compiler将html文件转换为
Vue组件交给 vue-loader 去处理 { test: /\\.md$/, use: [ { loader: 'vue-loader', options: { compilerOptions: { preserveWhitespace: false } } }, { loader: path.resolve(__dirname, './md-loader/index.js') } ] },
调试 md-loader,将打包命令单独拉出来，如下
将断点设置好，在 webstorm 中 debug build:md 脚本进行调试
"build:md": "cross-env NODE_ENV=production webpack --config build/webpack.demo.js",
Element 自定义了 Markdown-container 解析，并覆写了 markdown-it 的默认的 fence 渲染策略 markdown-it-container Plugin for creating block-level custom containers for markdown-it markdown parser.`},{header:"MakeFile 文件",slug:"makefile-文件",content:`Makefile 是一个适用于 C/C++ 的工具，较早作为工程化工具出现在 UNIX 系统中， 通过 make 命令来执行一系列的编译和连接操作。在拥有 make 环境的目录下， 如果存在一个 Makefile
文件。 那么输入 make 命令将会执行 Makefile 文件中的某个目标命令。
Windows下载 make 的 GUN 工具`},{header:"reference",slug:"reference",content:"ElementUI的构建流程"}]},{path:"/element-ui/dialog.html",title:"el-dialog",pathLocale:"/",contents:[{header:"PopupManager",slug:"popupmanager",content:`element 中有一个 PopupManager 专门用来管理弹框，在 src/utils/popup/index.js 中导出了 mixin形式的 PopupManager 和全局公用的 PopupManager 方法, 分别用于组件mixin和全局状态管理. // 在 mixin PopupManager中会将当前 dialog 组件注册到 全局 PopupManager,关联当前dialog组件和 PopupManager beforeMount() { this._popupId = 'popup-' + idSeed++; PopupManager.register(this._popupId, this); }
当dialog传入的属性 visible 变化时，会显示和隐藏dialog，dialog的遮罩层由 PopupManager 独自维护 visible(val) { // watch中监听 visible 属性，打开/关闭弹框 if (val) { this.closed = false; this.$emit('open'); // 触发自定义事件 即传入 el-dialog @open=handler (Dialog 打开的回调) this.$el.addEventListener('scroll', this.updatePopper); // 当滚动的时候更新 ElSelectDropdown组件 和 ElDropdownMenu组件下拉的位置 this.$nextTick(() => { this.$refs.dialog.scrollTop = 0; }); if (this.appendToBody) { document.body.appendChild(this.$el); // 将dialog 组件的 dom 挂载到 body上 } } else { this.$el.removeEventListener('scroll', this.updatePopper); if (!this.closed) this.$emit('close'); // 触发自定义事件 @close if (this.destroyOnClose) { this.$nextTick(() => { this.key++; }); } } }
添加遮罩层 并将遮罩层加入 modalStack 中进行管理 openModal: function(id, zIndex, dom, modalClass, modalFade) { if (Vue.prototype.$isServer) return; if (!id || zIndex === undefined) return; this.modalFade = modalFade; const modalStack = this.modalStack; // 遮罩层栈 for (let i = 0, j = modalStack.length; i < j; i++) { const item = modalStack[i]; if (item.id === id) { return; } } const modalDom = getModal(); addClass(modalDom, 'v-modal'); if (this.modalFade && !hasModal) { addClass(modalDom, 'v-modal-enter'); } if (modalClass) { let classArr = modalClass.trim().split(/\\s+/); classArr.forEach(item => addClass(modalDom, item)); } setTimeout(() => { removeClass(modalDom, 'v-modal-enter'); }, 200); // 为 popup 添加遮罩 if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) { dom.parentNode.appendChild(modalDom); } else { document.body.appendChild(modalDom); } if (zIndex) { modalDom.style.zIndex = zIndex; } modalDom.tabIndex = 0; modalDom.style.display = ''; this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass }); }`}]},{path:"/element-ui/dropdown.html",title:"dropDown",pathLocale:"/",contents:[{header:"dropdown 组件部分层级展示",slug:"dropdown-组件部分层级展示",content:`组件渲染顺序 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed el-scrollbar el-roving-focus-group 1# el-roving-focus-group-collection 2# el-roving-focus-group-impl 3# el-dropdown-collection 4# el-dropdown-menu 5# el-dropdown-item 6# el-dropdown-collection-item 7# roving-focus-item 8# el-roving-focus-collection-item 9# dropdown-item-impl 10#
组件说明 1#：仅仅是一个 wrapper , 将父级的 $attr 传给孙子级组件 el-roving-focus-group-impl
2#：ElCollection, 抽象逻辑组件, 向后代组件 provide: itemMap,getItems,collectionRef 这三个属性, 用来管理后代组件中的 items
3#：组合 elRovingFocusGroup 对象，并向后代组件 provide：elRovingFocusGroup 对象，在 5# 和 8# 中inject 相应的方法
4#：ElCollection， 抽象逻辑组件，向后代组件 provide: itemMap,getItems,collectionRef 这三个属性, 用来管理后代组件中的 items
5#：暴露给用户的子级组件（ 作为最终渲染的标签， ul 上绑定了 composeRefs 函数作为 ref, 最终将 ul dom 引用赋值给
contentRef,dropdownCollectionRef,focusTrapRef,rovingFocusGroupRef,rovingFocusGroupCollectionRef）
6#：暴露给用户的子级组件
7#：ElCollectionItem, 抽象逻辑组件,对应 4# 中的祖先组件, 该组件会inject 4# 中的三个属性，并向后代组件中 provide: collectionItemRef,在 mounted 中会将
collectionItemRef 收集至 itemMap
8#：provide: rovingFocusGroupItemRef
9#：ElCollectionItem, 对应 2# 中的祖先组件, 该组件会inject 4# 中的三个属性，并向后代组件中 provide: collectionItemRef,在 mounted 中会将
collectionItemRef 收集至 itemMap
10#：这里对应 7# 8# 9#, 绑定最终 li dom 元素至 collectionItemRef:(
dropdownCollectionItemRef/rovingFocusCollectionItemRef/rovingFocusGroupItemRef) （这里子级组件先 mounted, 然后父级组件再 mounted）`}]},{path:"/element-ui/element_utils.html",title:"element-utils",pathLocale:"/",contents:[{header:"directives utils",slug:"directives-utils",content:""},{header:"repeat-click.js",slug:"repeat-click-js",content:`在 input-number 组件中有应用 v-repeat-click,当长按加或减时候，会持续调用绑定的函数 MouseEvent.button
是只读属性，它返回一个值，代表用户按下并触发了事件的鼠标按键,0：主按键，通常指鼠标左键或默认值; 1：辅助按键，通常指鼠标滚轮中键; 2：次按键，通常指鼠标右键`},{header:"mousewheel.js",slug:"mousewheel-js",content:`normalize-wheelMouse wheel normalization across multiple multiple
browsers.
normalize-wheel was used to standardize the mousewheel event If you need to react to the mouse wheel in a predictable way, this code is like your bestest friend.
As of today, there are 4 DOM event types you can listen to:
'wheel' -- Chrome(31+), FF(17+), IE(9+)
'mousewheel' -- Chrome, IE(6+), Opera, Safari
'MozMousePixelScroll' -- FF(3.5 only!) (2010-2013) -- don't bother!
'DOMMouseScroll' -- FF(0.9.7+) since 2003 In your event callback, use this code to get sane interpretation of the deltas. This code will return an object with 4 properties:
spinX -- normalized spin speed (use for zoom) - x plane
spinY -- " - y plane
pixelX -- normalized distance (to pixels) - x plane
pixelY -- " - y plane fireFox 中监听的是 DOMMouseScroll 事件，其他浏览器中监听的是 mousewheel事件， v-mousewheel在table组件中有所使用
import normalizeWheel from 'normalize-wheel'; const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1; const mousewheel = function (element, callback) { if (element && element.addEventListener) { element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) { const normalized = normalizeWheel(event); callback && callback.apply(this, [event, normalized]); }); }
};`},{header:"clickoutside.js",slug:"clickoutside-js",content:`v-clickoutside 在element中应用很广泛，以 <el-color-picker /> 组件为例，当组件挂载的时候，clickoutside.js 模块会将使用 v-clickoutside
指令的dom元素保存到nodeList 变量中，并且在该 dom 元素中绑定属性为 @@clickoutsideContext 的对象，该对象上绑定了3个重要的属性 documentHandler: 当 document mouseup 事件触发时，nodeList会循环触发所有绑定v-clickoutside指令所在dom元素上的 documentHandler 函数，
并且判断当前mouse事件是否作用于 dom 元素的内部还是外部，当作用于dom外部的时候，会执行 v-clickoutside 绑定的函数，该函数执行的时候会传入两个事件对象 mouseup 和 mousedown
methodName: v-clickoutside 指令绑定的函数名,可以通过 vnode.context[el[ctx].methodName]() 调用
bindingFn: v-clickoutside 指令绑定的函数对象，可以通过 el[ctx].bindingFn() 直接调用 当前dom元素包含或者就是点击的元素时候，判定位作用于当前dom上
el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target
当前vue实例存在popperElm(弹出层)
(vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains( mousedown.target)))
// clickoutside.js
import Vue from 'vue';
import {on} from 'element-ui/src/utils/dom'; const nodeList = [];
const ctx = '@@clickoutsideContext'; let startClick;
let seed = 0; !Vue.prototype.$isServer && on(document, 'mousedown', e => (startClick = e)); !Vue.prototype.$isServer && on(document, 'mouseup', e => { nodeList.forEach(node => node[ctx].documentHandler(e, startClick));
}); function createDocumentHandler(el, binding, vnode) { return function (mouseup = {}, mousedown = {}) { // vnode.context 是 Vue组件实例 if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || (vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target)))) return; if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) { vnode.context[el[ctx].methodName](); } else { el[ctx].bindingFn && el[ctx].bindingFn(); } };
} /** * v-clickoutside * @desc 点击元素外面才会触发的事件 */
export default { bind(el, binding, vnode) { nodeList.push(el); const id = seed++; el[ctx] = { id, documentHandler: createDocumentHandler(el, binding, vnode), methodName: binding.expression, bindingFn: binding.value }; }, update(el, binding, vnode) { el[ctx].documentHandler = createDocumentHandler(el, binding, vnode); el[ctx].methodName = binding.expression; el[ctx].bindingFn = binding.value; }, unbind(el) { let len = nodeList.length; for (let i = 0; i < len; i++) { if (nodeList[i][ctx].id === el[ctx].id) { nodeList.splice(i, 1); break; } } delete el[ctx]; }
};`},{header:"mixins",slug:"mixins",content:""},{header:"emitter.js",slug:"emitter-js",content:`dispatch方法：通过 componentName 向上搜索 parent component，并触发父组件上的 event
broadcast方法：通过 componentName 向下搜索 children component，并触发子组件上的 event this.dispatch('ElFormItem', 'el.form.change', value);
this.broadcast('ElSelectDropdown', 'updatePopper');`},{header:"transitions",slug:"transitions",content:""},{header:"collapse-transition.js",slug:"collapse-transition-js",content:`这是一个组件名为ElCollapseTransition的函数式组件,它的 render
函数返回值得是一个 transition 组件，通过js操作子组件的 height,
它会使得包裹其中的子组件呈现过渡展开的效果，在 Collapse 折叠面板 中有所使用
return h('transition', data, children)
<transition> 元素作为单个元素/组件的过渡效果。<transition> 只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM 元素，也不会出现在可被检查的组件层级中`},{header:"utils",slug:"utils",content:""},{header:"after-leave.js",slug:"after-leave-js",content:`这是一个兼容性工具函数，有的浏览器当前组件上的 after-leave 事件不会触发，after-leave.js会在当vue组件前实例上再次绑定一个 after-leave
事件，绑定完成之后默认400ms之后会执行绑定的回调函数，在element loading组件中有所使用，loading组件最外层是一个 transition
组件,当过渡完成之后，transition组件会触发当前loading组件上的after-leave
事件，但是在某些浏览器下可能会失效，则400ms之后回调函数也会执行，如果两者都发生了调用，after-leave.js中的 called 标记会保证回调只执行一次
<!--loading组件中的 after-leave 事件的触发-->
<transition name="el-loading-fade" @after-leave="handleAfterLeave"></transition>
<script> handleAfterLeave() { this.$emit('after-leave') }
<\/script>`},{header:"date.js && date-util.js",slug:"date-js-date-util-js",content:`date.js is Modified from fecha which is a Lightweight date formatting and
parsing utils(~2KB) and Meant to replace parsing and formatting functionality of moment.js
date.util.js is for date-picker component, which include some useful functions for date operation.
interesting
Question: Incrementing a date in JavaScript`},{header:"dom.js",slug:"dom-js",content:`on
off
once
hasClass
addClass
removeClass
getStyle
setStyle
isScroll
getScrollContainer
isInContainer`},{header:"popper.js && vue-popper.js && utils/popup/popup-manager.js && utils/popup/index.js",slug:"popper-js-vue-popper-js-utils-popup-popup-manager-js-utils-popup-index-js",content:""},{header:"Popper.js V1",slug:"popper-js-v1",content:`A popper is an element on the screen which "pops out" from the natural flow of your application. Common examples of
poppers are tooltips, popovers, and drop-downs.
Popper.js is a positioning engine; its purpose is to calculate the position of an element to make it possible to
position it near a given reference element.`},{header:"vue-popper.js",slug:"vue-popper-js",content:`vue integrate popper.js, export as vue mixins,used by **
color-picker,cascader,date-picker,dropdown,menu,popover,select,tooltip,table(filter-panel)** .etc positioning related
components`},{header:"utils/popup/index.js",slug:"utils-popup-index-js",content:`index.js 中默认导出了 popup mixin(整合了PopupManager), 它的作用是用来管理弹出框用的，在drawer,dialog,message-box
组件中均有应用;
此外还导出了 PopupManager
对象,在 loading,message,notification,table(filter-panel) 组件中均有应用，用于管理弹出层`},{header:"resize-event.js",slug:"resize-event-js",content:`使用了 resize-observer-polyfill npm包来兼容 ResizeObserver 浏览器对象, 当被监听的 dom 元素 resize 事件触发的时候, 执行相应的 handler
// 使用
addResizeListener(this.$el, this.handleResize);
if (this.$el && this.handleResize) removeResizeListener(this.$el, this.handleResize);`},{header:"scrollbar-width.js",slug:"scrollbar-width-js",content:`由于各个浏览器的滚动条宽度不一致，这个函数是用来获取当前浏览器滚动条宽度的，通过在 body 上创建一个不可见 div 元素，通过设置样式使其出现滚动条，计算滚动条宽度后移除该 div 元素,这个主要用于 element-ui
内置组件 scrollbar 中，它是一个模拟了横竖滚动条的容器组件`},{header:"scroll-into-view.js",slug:"scroll-into-view-js",content:`在 select,date-picker(time-select) 中有应用，当 select 组件展开的时候，选中项应该展示在可视区域中
获取选中子元素相对于 container 的所有 offsetParents，处于可视区域上半部分的，当前选中元素的 selected.offsetTop 值必然小于 container.scrollTop(
offsetTop相对于父元素的左上角计算);处于可视区域下半部分的, 当前选中元素的 selected.offsetTop + selected.offsetHeight 值必然大于 container.scrollTop +
container.clientHeight
import Vue from 'vue'; export default function scrollIntoView(container, selected) { if (Vue.prototype.$isServer) return; if (!selected) { container.scrollTop = 0; return; } const offsetParents = []; let pointer = selected.offsetParent; // 获取 container 元素中某个子元素相对于 container 的所有 offsetParents while (pointer && container !== pointer && container.contains(pointer)) { offsetParents.push(pointer); pointer = pointer.offsetParent; } // 累加当前元素距离container元素的 top 值 const top = selected.offsetTop + offsetParents.reduce((prev, curr) => (prev + curr.offsetTop), 0); const bottom = top + selected.offsetHeight; const viewRectTop = container.scrollTop; const viewRectBottom = viewRectTop + container.clientHeight; if (top < viewRectTop) { // seleted dom is hidden in upper scroll section container.scrollTop = top; } else if (bottom > viewRectBottom) { // seleted dom is hidden in bottom scroll section container.scrollTop = bottom - container.clientHeight; } else { // do nothing cause seleted dom is in view }
}`},{header:"util.js && types.js",slug:"util-js-types-js",content:""}]},{path:"/element-ui/scrollBar.html",title:"el-scrollBar",pathLocale:"/",contents:[{header:"you should know",slug:"you-should-know",content:`Document.documentElement returns the Element that is the root element of the document
设置一个可滚动元素的 scrollTop/scrollLeft 是会触发该元素上的 scroll 事件的 document instanceof Document // true
document instanceof Node // true
document.scrollTop // undefined
document.scrollLeft // undefined
document.documentElement.scrollTop // 0
document.documentElement.scrollLeft // 0
坑点：
// 在 document 上监听 scroll 事件
document.addEventListener('scroll', function () { console.log('trigger-scroll')
})
// 由于 document 没有 scrollTop 和 scrollLeft 属性，
// 所以必须在 document.documentElement 上设置 scrollTop/scrollLeft 才能触发 scroll 事件
document.documentElement = 200 // console: trigger-scroll`},{header:"Reference",slug:"reference",content:"element ScrollBar滚动组件源码深入分析"}]},{path:"/element-ui/table.html",title:"el-table",pathLocale:"/",contents:[{header:"<colgroup>元素",slug:"colgroup-元素",content:`The <colgroup> HTML element defines a group of columns within a table. The <colgroup> HTML element defines a group
of columns within a table. the <colgroup> must appear after any optional <caption> element but before
any <thead>, <th>, <tbody>, <tfoot> and <tr> element.`},{header:"Table元素初始化",slug:"table元素初始化",content:`table 组件由TableHeader, TableFooter, TableBody 三个子组件构成,在table组件data中通过createStore
创建了一个store对象，并将store作为props传递给了TableHeader, TableFooter, TableBody 三个子组件;此外table组件data中还维护了一个layout
对象，用来管理table组件的尺寸调节，layout对象中保存了对store对象的引用。
store 是通过 Vue.extend 创建的一个Vue实例，并且在store对象上挂载了对table组件实例的引用。在这里Vue.extend
创建的Vue实例内部维护了一组响应式数据，可以当做一个store来用, 并且store的 prototype 上挂载了一个 mutations 对象和一个 commit 方法，用来修改当前store内部的状态
export function createStore(table, initialState = {}) { if (!table) { throw new Error('Table is required.'); } const store = new Store(); store.table = table; /** * .... 省略 .... */ return store;
}`},{header:"table-column",slug:"table-column",content:`tableColumn 组件就是补全当前列的 props, 设置当前列单元格渲染 render 函数，设置 watch 监听各个 props 的变化，并在 mounted 的时候将当前列添加到 el-table
组件内部的 store上，在 destroyed 的时候将当前 column 从 store 中移除掉。
tableColumn 组件的 computed 属性中有个 owner 属性，它指向的是当前 tableColumn 组件所归属的父组件实例（可能是 el-table 或者 el-table-column,
存在多级表头的情况）
owner(){ let parent = this.$parent; while (parent && !parent.tableId) { parent = parent.$parent; } return parent;
}
tableColumn 组件在 mounted 钩子中会调用 store 原型上的 commit 方法插入 tableColumn 组件，将所有挂载的 tableColumn
组件维护在store.states._columns 中，然后在table-header组件中使用
owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);`},{header:"设置 column 初始属性",slug:"设置-column-初始属性",content:`在 table-column.js 中 created 时，会进行 column 默认属性的补全，会调用 compose,从右项左依次执行
const chains = compose(this.setColumnRenders, this.setColumnWidth, this.setColumnForcedProps);
column = chains(column);
this.columnConfig = column;`},{header:"compose 函数",slug:"compose-函数",content:`compose 的参数是函数，返回的也是一个函数。
除了初始函数（最右侧的一个）外，其他函数的接收参数都是一个函数的返回值，所以初始函数的参数可以是多元的，而其他函数的接收值是一元的。
compose 函数可以接收任意的参数，所有的参数都是函数，且执行方向为自右向左。初始函数一定要放到参数的最右侧。 export function compose(...funcs) { if (funcs.length === 0) { return arg => arg; } if (funcs.length === 1) { return funcs[0]; } return funcs.reduce((a, b) => (...args) => a(b(...args)));
} function fn1(a) {
} function fn2(b) {
} function fn3(c) {
} compose(fn1, fn2, fn3) // 注意 compose 中函数执行的顺序是从右到左`},{header:"setColumnRenders",slug:"setcolumnrenders",content:`这个函数中主要是添加当前 column 的 renderCell 和 renderHeader 方法，用来实现当前列的单元格内容的渲染
默认的 renderCell 方法,是从路径上获取当前字段的值
this.$scopedSlots.default 是个函数, 它的ts类型是 type ScopedSlot = (props: any) => ScopedSlotChildren
column.renderCell = (h, data) => { let children = null; if (this.$scopedSlots.default) { // 注意： 这里会将 data 作为 v-slot:default="data" 作为插槽 props 传入 children = this.$scopedSlots.default(data); } else { // 默认情况下调用 getPropByPath 获取 value,默认情况下 children 是个 primitive value children = originRenderCell(h, data); } const prefix = treeCellPrefix(h, data); const props = { class: 'cell', style: {} }; if (column.showOverflowTooltip) { props.class += ' el-tooltip'; props.style = {width: (data.column.realWidth || data.column.width) - 1 + 'px'}; } // 默认 renderCell 返回的 jsx return (<div {...props}> {prefix} {children} </div>);
};
给定一个多层嵌套对象，根据路径获取对应的值，String.prototype.replace
// 根据路径提取值
export function getPropByPath(obj, path, strict) { let tempObj = obj; // 将 obj[variable1] 转换成 obj.variable1 形式，方便 split // $1 是替换 第一个捕获组中的匹配内容的 path = path.replace(/\\[(\\w+)\\]/g, '.$1'); // 将 . 开头的路径 移除起始位的 . path = path.replace(/^\\./, ''); let keyArr = path.split('.'); let i = 0; for (let len = keyArr.length; i < len - 1; ++i) { if (!tempObj && !strict) break; let key = keyArr[i]; if (key in tempObj) { tempObj = tempObj[key]; } else { if (strict) { throw new Error('please transfer a valid prop path to form item!'); } break; } } return { o: tempObj, k: keyArr[i], v: tempObj ? tempObj[keyArr[i]] : null };
};`},{header:"setColumnWidth",slug:"setcolumnwidth",content:`这个步骤是为了标准化当前 column 上的with 属性，table-column 中有个计算属性 realWidth,如果 el-column 组件传入了 width 属性，则会将 with
进行 parseInt 转换为 number类型 赋给 this.width 和 this.realWith;如果没有传入 width 属性， 则 with 和 realWith 为 undefined;
如果没有传入 minWidth 属性，则设置默认 minWith 为 80。对于 with 和 realWith 为 undefined的列，最后会被当作弹性列 flexColumns,会给它们分配剩余空间`},{header:"table-header",slug:"table-header",content:""},{header:"vue内置方法this._l",slug:"vue内置方法this-l",content:`this._l 是 vue 框架中的遍历方法（Runtime helper for rendering v-for lists） 返回值是 Array<VNode>,这个方法存在于
vue/src/core/instance/render-helpers/render-list.js （vue version 2.6）
它接收两个参数 第一个是要渲染的 对象 ，第二个参数是一个 render 函数
export function renderList( val: any, render: ( val: any, keyOrIndex: string | number, index?: number ) => VNode
): ?Array<VNode> { let ret: ?Array<VNode>, i, l, keys, key if (Array.isArray(val) || typeof val === 'string') { ret = new Array(val.length) for (i = 0, l = val.length; i < l; i++) { ret[i] = render(val[i], i) } } else if (typeof val === 'number') { ret = new Array(val) for (i = 0; i < val; i++) { ret[i] = render(i + 1, i) } } else if (isObject(val)) { if (hasSymbol && val[Symbol.iterator]) { ret = [] const iterator: Iterator<any> = val[Symbol.iterator]() let result = iterator.next() while (!result.done) { ret.push(render(result.value, ret.length)) result = iterator.next() } } else { keys = Object.keys(val) ret = new Array(keys.length) for (i = 0, l = keys.length; i < l; i++) { key = keys[i] ret[i] = render(val[key], key, i) } } } if (!isDef(ret)) { ret = [] } // (ret: any)._isVList = true return ret
}`},{header:"Reference",slug:"reference",content:`固定列和表头的表格实现
横向滚动条保持在可视范围中`}]},{path:"/flutter/flutter_basic.html",title:"flutter 入门",pathLocale:"/",contents:[{header:"真机调试(小米)",slug:"真机调试-小米",content:"手机开启开发者模式，勾选 允许USB调试，并且 pc 上需要安装小米 USB驱动程序。"},{header:"ref",slug:"ref",content:`Flutter官网
flutter setup
Write your first Flutter app`}]},{path:"/front-end/setNpmGitProxy.html",title:"代理设置",pathLocale:"/",contents:[{header:"V2rayN代理软件设置",slug:"v2rayn代理软件设置",content:"ssr节点 v2rayN下载地址：https://github.com/v2ray/v2ray-core"},{header:"vscode debug",slug:"vscode-debug",content:`npm run start # app launch at: http://localhost:8000
# open Run and debug panel
# add configuration: Chrome Launch
{ "name": "Launch Chrome", "request": "launch", "type": "chrome", "url": "http://localhost:8000", "webRoot": "\${workspaceFolder}"
}
# click 'start debugging' button start debug`},{header:"webstorm 配置",slug:"webstorm-配置",content:""},{header:"软件破解",slug:"软件破解",content:""},{header:"webstorm 2021.3 版本激活教程",slug:"webstorm-2021-3-版本激活教程",content:"注意不是2021.3.1版本：https://www.bilibili.com/read/cv14405690"},{header:"jetbrains 2021.3.x、2021.2.x、2021.1.x等 版本激活教程",slug:"jetbrains-2021-3-x、2021-2-x、2021-1-x等-版本激活教程",content:"注意：webstorm 2021.3.1版本之后需要登陆账号才可以试用，而且绑定账号，试用期结束后无法再次试用"},{header:"webstorm代理设置",slug:"webstorm代理设置",content:"ieda中插件市场下载太慢，v2rayN全局代理不生效，需要给idea配置代理，打开idea Settings- System Settings - http proxy"},{header:"webstorm 常用插件",slug:"webstorm-常用插件",content:`theme： settings-plugin - (one Dark theme)
Emmet everywhere插件
Database Navigator （数据库连接插件）
.env files support
statistic (统计项目代码)
camelCase (驼峰命名和下划线命名转换 shift + alt + u / ctrl + shift + u)
rainbow bracket`},{header:"IDEA 常用插件",slug:"idea-常用插件",content:"maven helper: 用来分析 pom.xml 文件中的依赖关系"},{header:"webstorm常见问题",slug:"webstorm常见问题",content:"tailwindcss 不能智能提示 需要升级到 webstorm 2021.3.1以后才可以智能提示 webstorm ctrl + tab 键不显示 npm工具栏 在 `package.json` 上点击右键，然后选择 `show npm scripts` 选项即可，\n会发现左下角侧边栏上出现了一个 npm 的按钮 webstorm 光标变粗解决方案 应该是不小心按了键盘上的 insert 键，再按下切换回来就可以 webstorm 不能识别 vue项目中 alias 路径 在 WebStorm Setting -> Language & Framework -> JavaScript -> Webpack\n由 auto -> manual -> auto,切换一下，webstorm 就会自行 analyze webstorm 不识别 node 中的 require/process 等\n在 WebStorm Setting -> Language & Framework -> JavaScript -> library 中 download - node"},{header:"webstorm debug",slug:"webstorm-debug",content:`webstorm debug 出现： Please ensure that the browser was started successfully with remote debugging port opened. Port
cannot be opened if Chrome having the same User Data Directory is already launched. Settings -> Tools -> Web Browsers and Preview webstorm debug
debug-angular-app-in-intellij-with-chrome-under-windows`},{header:"npm代理配置",slug:"npm代理配置",content:""},{header:"使用nrm管理registry地址",slug:"使用nrm管理registry地址",content:`npm install -g nrm
nrm add npm http://registry.npmjs.org
nrm add taobao https://registry.npm.taobao.org
# 切换npm registry地址
nrm use taobao
nrm use npm
# 移除代理
npm config delete proxy
npm config delete https-proxy
# 配置代理
npm config set proxy=http://127.0.0.1:1081
# 查看代理
npm config get proxy`},{header:"git 代理配置",slug:"git-代理配置",content:`# 设置全局代理
git config --global http.proxy http://127.0.0.1:1081
git config --global https.proxy https://127.0.0.1:1081
# 使用socks5代理的
git config --global http.proxy socks5://127.0.0.1:1081
git config --global https.proxy socks5://127.0.0.1:1081 # 只对github.com使用代理，其他仓库不走代理
git config --global http.https://github.com.proxy socks5://127.0.0.1:1081
git config --global https.https://github.com.proxy socks5://127.0.0.1:1081
# 取消github代理
git config --global --unset http.https://github.com.proxy
git config --global --unset https.https://github.com.proxy # 取消全局代理
git config --global --unset http.proxy
git config --global --unset https.proxy`},{header:"Installing NVM on Ubuntu",slug:"installing-nvm-on-ubuntu",content:""},{header:"Node.js – nvm proxy settings configuration file",slug:"node-js-–-nvm-proxy-settings-configuration-file",content:`NVM uses curl, so modifying the file ~/.curlrc file (or create it if it does not exist)
proxy = <proxy_host>:<proxy_port>`},{header:"npm和git自动设置代理脚本",slug:"npm和git自动设置代理脚本",content:"需要安装 shelljs 依赖 @code js"},{header:"Cygwin64",slug:"cygwin64",content:`Cygwin is: a large collection of GNU and Open Source tools which provide functionality similar to a Linux distribution
on Windows.
安装 cygwin ,相当于一个子 Linux 系统,安装完成之后目录如下`},{header:"how to open-cygwin-at-a-specific-folder",slug:"how-to-open-cygwin-at-a-specific-folder",content:""},{header:"搭建make环境",slug:"搭建make环境",content:`windows 下 make 环境搭建，将 react-draggable 仓库克隆到 Cygwin 安装目录下的 /home/workspace 中, 在 webstorm
中 settings-Tools-Terminal 中设置终端路径 F:\\programs\\cygwin\\Cygwin.bat, 并配置 Flow
类型校验，setting->Languages & Frameworks->JavaScript 选择语言版本为 Flow, 然后就可以在终端执行 make dev 命令了 react-draggable
在 WebStorm 中配置 React for Flow`}]},{path:"/html/html_basic.html",title:"html补漏",pathLocale:"/",contents:[{header:"<base>",slug:"base",content:`The Document Base URL element. The <base> HTML element specifies the base URL to use for all relative URLs in a
document. There can be only one <base> element in a document.
A document's used base URL can be accessed by scripts with Node.baseURI. If the document has no <base> elements,
then baseURI defaults to location.href.
vueRouter4 中 createWebHistory normalizeBase(base)需要对 base 进行格式化，就用到了 <base> 标签`}]},{path:"/java/ItextPdf.html",title:"itextPdf",pathLocale:"/",contents:[{header:"itextPdf 解析富文本标签",slug:"itextpdf-解析富文本标签",content:`maven 依赖
<dependency> <groupId>com.itextpdf</groupId> <artifactId>itextpdf</artifactId> <version>5.5.9</version>
</dependency>
<dependency> <groupId>com.itextpdf</groupId> <artifactId>itext-asian</artifactId> <version>5.2.0</version>
</dependency>
<dependency> <groupId>com.itextpdf.tool</groupId> <artifactId>xmlworker</artifactId> <version>5.5.10</version>
</dependency>
xml解析 富文本 工具类
import com.itextpdf.text.*;
import com.itextpdf.tool.xml.ElementList;
import com.itextpdf.tool.xml.XMLWorker;
import com.itextpdf.tool.xml.XMLWorkerFontProvider;
import com.itextpdf.tool.xml.XMLWorkerHelper;
import com.itextpdf.tool.xml.css.CssFile;
import com.itextpdf.tool.xml.css.StyleAttrCSSResolver;
import com.itextpdf.tool.xml.html.CssAppliers;
import com.itextpdf.tool.xml.html.CssAppliersImpl;
import com.itextpdf.tool.xml.html.Tags;
import com.itextpdf.tool.xml.parser.XMLParser;
import com.itextpdf.tool.xml.pipeline.css.CSSResolver;
import com.itextpdf.tool.xml.pipeline.css.CssResolverPipeline;
import com.itextpdf.tool.xml.pipeline.end.ElementHandlerPipeline;
import com.itextpdf.tool.xml.pipeline.html.HtmlPipeline;
import com.itextpdf.tool.xml.pipeline.html.HtmlPipelineContext; import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern; public class MyXMLWorkerHelper { public static class MyFontsProvider extends XMLWorkerFontProvider { public MyFontsProvider() { super(null, null); } @Override public Font getFont(final String fontname, String encoding, float size, final int style) { String fntname = fontname; if (fntname == null) { fntname = "宋体"; } return super.getFont(fntname, encoding, size, style); } } public static ElementList parseToElementList(String html, String css) throws IOException { // CSS CSSResolver cssResolver = new StyleAttrCSSResolver(); if (css != null) { CssFile cssFile = XMLWorkerHelper.getCSS(new ByteArrayInputStream(css.getBytes())); cssResolver.addCss(cssFile); } // HTML MyFontsProvider fontProvider = new MyFontsProvider(); CssAppliers cssAppliers = new CssAppliersImpl(fontProvider); HtmlPipelineContext htmlContext = new HtmlPipelineContext(cssAppliers); htmlContext.setTagFactory(Tags.getHtmlTagProcessorFactory()); htmlContext.autoBookmark(false); // Pipelines ElementList elements = new ElementList(); ElementHandlerPipeline end = new ElementHandlerPipeline(elements, null); HtmlPipeline htmlPipeline = new HtmlPipeline(htmlContext, end); CssResolverPipeline cssPipeline = new CssResolverPipeline(cssResolver, htmlPipeline); // XML Worker XMLWorker worker = new XMLWorker(cssPipeline, true); XMLParser p = new XMLParser(worker); // fix: ul/ol 中换行会解析为 li标签的问题 Pattern reg = Pattern.compile("<[ou]l.*>(\\\\s+)<li|</li>(\\\\s+)<((li)|(/[ou]l>))",Pattern.CASE_INSENSITIVE|Pattern.MULTILINE); Matcher matcher = reg.matcher(html); StringBuffer operatorStr=new StringBuffer(html); while (matcher.find()){ String group1 = matcher.group(1); String group2 = matcher.group(2); if(group1!=null){ operatorStr.replace(matcher.start(1),matcher.end(1),""); } if(group2!=null){ operatorStr.replace(matcher.start(2),matcher.end(2),""); } matcher = reg.matcher(operatorStr); } // fix: sub sup 标签不生效 添加样式 html = operatorStr.toString().replace("<sub>", "<sub style=\\"vertical-align: sub;\\">").replace("<sup>", "<sup style=\\"vertical-align: super;\\">"); // fix: XMLWorker 解析 xml, html 标签中的单标签结构不符合要求 html = html.replace("<br>", "<br></br>").replace("<hr>", "<hr></hr>"); p.parse(new ByteArrayInputStream(html.getBytes())); // for (int i = 0; i < elements.size(); i++) {
// Element element = elements.get(i);
// int type = element.type();
// if (type==14){
// List element1 = (List) element;
// element1.getItems().removeIf(item->{
// int type1 = item.type();
// if(type1==15){
// return ((Chunk) ((ListItem) item).get(0)).getContent().equals("\\n");
// }else {
// return false;
// }
// });
// }
// } return elements; } }
代码中使用 PdfPCell cell1 = new PdfPCell(); cell1.setHorizontalAlignment(Element.ALIGN_LEFT); cell1.setVerticalAlignment(Element.ALIGN_TOP); for (Element e : MyXMLWorkerHelper.parseToElementList(projectInfo.getCompAbout(), null)) { cell1.addElement(e); } table.addCell(cell1); document.add(table);`}]},{path:"/java/java_api.html",title:"java api",pathLocale:"/",contents:[{header:"字符串转数组",slug:"字符串转数组",content:`Scanner in = new Scanner(System.in);
int[] nums = Arrays.stream(in.nextLine().split(",")).mapToInt(Integer::parseInt).toArray();`},{header:"泛型数组",slug:"泛型数组",content:`在 Java 中，是不能直接创建泛型对象和泛型数组的。原因是 Java 有类型擦除，任何泛型类型在擦除之后就变成了 Object 类型，因此创建泛型对象就相当于创建了一个 Object 类型的对象。创建 Object
类型的对象通常没有任何意义，所以直接创建泛型对象的行为被编译器禁止。泛型数组也是一样。
正确的做法： 创建一个容积为 10 的泛型 Vector 数组
private Vector<Integer>[] arr;
arr = (Vector<Integer>[]) new Vector[10];`},{header:"LinkedList",slug:"linkedlist",content:`add和remove是一对，源自Collection；
offer和poll是一对，源自Queue；
push和pop是一对，源自Deque，其本质是栈（Stack类由于某些历史原因，官方已不建议使用，使用Deque代替）；
offerFirst/offerLast和pollFirst/pollLast是一对，源自Deque，其本质是双端队列。 Queue offer； Inserts the specified element into this queue
poll: Retrieves and removes the head of this queue
peek: Retrieves, but does not remove, the head of this queue, Deque: A linear collection that supports element insertion and removal at both ends. The name deque is short for "
double ended queue" and is usually pronounced "deck". push: Pushes an element onto the stack represented by this deque (in other words, at the head of this deque)
pop: Pops an element from the stack represented by this deque. In other words, removes and returns the first
element of this deque. 在使用的时候，建议根据用途来使用不同的方法，比如你想把 LinkedList 当做集合 list，那么应该用 add/remove，如果想用作队列，则使用offer/poll，如果用作栈，则使用push/pop
，如果用作双端队列，则使用offerFirst/offerLast/pollFirst/pollLast`},{header:"Convert int array to Integer array in Java",slug:"convert-int-array-to-integer-array-in-java",content:`method1
int[] primitiveArray = { 1, 2, 3, 4, 5 };
Integer[] boxedArray = new Integer[primitiveArray.length];
for (int i = 0; i < primitiveArray.length; i++) { boxedArray[i] = Integer.valueOf(primitiveArray[i]);
}
method2
int[] primitiveArray = { 1, 2, 3, 4, 5 };
Integer[] boxedArray = Arrays.stream(primitiveArray) // IntStream .boxed() // Stream<Integer> .toArray(Integer[]::new);
}`},{header:"二维数组声明",slug:"二维数组声明",content:"public static int[][] directions = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};"},{header:"二维数组声明",slug:"二维数组声明-1",content:"public static int[][] directions = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};"},{header:"字符串转为数组",slug:"字符串转为数组",content:`Arrays.stream(s.split(",")).map(row -> row.split(" ")).toArray(String[][]::new);
Arrays.stream(s.split(",")).map(row -> row.split(" ")).toArray(size -> new String[size][]);
Arrays.stream(s.split(",")).mapToInt(Integer::parseInt).toArray();`}]},{path:"/java/java_web.html",title:"java web basic",pathLocale:"/",contents:[{header:"TCP 编程",slug:"tcp-编程",content:`Socket:一个应用程序通过一个Socket来建立一个远程连接，而Socket内部通过TCP/IP协议把数据传输到网络.Socket、TCP和部分IP的功能都是由操作系统提供的，不同的编程语言只是提供了对操作系统调用的简单的封装。
为什么需要Socket进行网络通信？因为仅仅通过IP地址进行通信是不够的，同一台计算机同一时间会运行多个网络应用程序。当操作系统接收到一个数据包的时候，如果只有IP地址，它没法判断应该发给哪个应用程序，所以，操作系统抽象出Socket接口，每个应用程序需要各自对应到不同的Socket，数据包才能根据Socket正确地发到对应的应用程序。
一个Socket就是由IP地址和端口号（范围是0～65535）组成，可以把Socket简单理解为IP地址加端口号。
使用Socket进行网络编程时，本质上就是两个进程之间的网络通信。其中一个进程必须充当服务器端，它会主动监听某个指定的端口，另一个进程必须充当客户端，它必须主动连接服务器的IP地址和指定端口，如果连接成功，服务器端和客户端就成功地建立了一个TCP连接，双方后续就可以随时发送和接收数据。`},{header:"http",slug:"http",content:`HTTP是HyperText Transfer Protocol的缩写，翻译为超文本传输协议，它是基于TCP协议之上的一种请求-响应协议。
浏览器也是一种HTTP客户端，所以，客户端的HTTP编程，它的行为本质上和浏览器是一样的，即发送一个HTTP请求，接收服务器响应后，获得响应内容。只不过浏览器进一步把响应内容解析后渲染并展示给了用户，而我们使用Java进行HTTP客户端编程仅限于获得响应内容。Java标准库提供了基于HTTP的包，但是要注意，早期的JDK版本是通过HttpURLConnection访问HTTP,代码编写比较繁琐，并且需要手动处理InputStream，所以用起来很麻烦。从Java
11开始，引入了新的HttpClient，它使用链式调用的API，能大大简化HTTP的处理。`},{header:"Servlet",slug:"servlet",content:`在JavaEE平台上，处理TCP连接，解析HTTP协议这些底层工作统统扔给现成的Web服务器去做，我们只需要把自己的应用程序跑在Web服务器上。为了实现这一目的，JavaEE提供了Servlet API，我们使用Servlet
API编写自己的Servlet来处理HTTP请求，Web服务器实现Servlet API接口，实现底层功能
一个Servlet总是继承自HttpServlet，然后覆写doGet()或doPost()方法。注意到doGet()
方法传入了HttpServletRequest和HttpServletResponse两个对象，分别代表HTTP请求和响应。我们使用Servlet
API时，并不直接与底层TCP交互，也不需要解析HTTP协议，因为HttpServletRequest和HttpServletResponse就已经封装好了请求和响应
servlet程序打包类型不是jar，而是war，表示Java Web Application Archive。
普通的Java程序是通过启动JVM，然后执行main()
方法开始运行。但是Web应用程序有所不同，我们无法直接运行war文件，必须先启动Web服务器，再由Web服务器加载我们编写的HelloServlet，这样就可以让HelloServlet处理浏览器发送的请求。
我们首先要找一个支持Servlet API的Web服务器。常用的服务器有： Tomcat。
类似Tomcat这样的服务器也是Java编写的，启动Tomcat服务器实际上是启动Java虚拟机，执行Tomcat的main()
方法，然后由Tomcat负责加载我们的.war文件，并创建一个HelloServlet实例，最后以多线程的模式来处理HTTP请求。类似Tomcat这样的Web服务器也称为Servlet容器。
在Servlet中定义的实例变量会被多个线程同时访问，要注意线程安全； HttpServletRequest和HttpServletResponse实例是由Servlet容器传入的局部变量，它们只能被当前线程访问，不存在多个线程访问的问题；
在doGet()或doPost()方法中，如果使用了ThreadLocal，但没有清理，那么它的状态很可能会影响到下次的某个请求，因为Servlet容器很可能用线程池实现线程复用。 一个Web App就是由一个或多个Servlet组成的，每个Servlet通过注解说明自己能处理的路径。浏览器发出的HTTP请求总是由Web
Server先接收，然后，根据Servlet配置的映射，不同的路径转发到不同的Servlet。这种根据路径转发的功能我们一般称为Dispatch。映射到 / 的IndexServlet比较特殊，它实际上会接收所有未匹配的路径，相当于/*
有了HttpServletRequest和HttpServletResponse这两个高级接口，我们就不需要直接处理HTTP协议。注意到具体的实现类是由各服务器提供的，而我们编写的Web应用程序只关心接口方法，并不需要关心具体实现的子类 通过 HttpServletRequest 提供的接口方法可以拿到 HTTP 请求的几乎全部信息
HttpServletResponse封装了一个HTTP响应。由于HTTP响应必须先发送Header，再发送Body，所以，操作HttpServletResponse对象时，必须先调用设置Header的方法，最后调用发送Body的方法`},{header:"Servlet多线程模型",slug:"servlet多线程模型",content:`一个Servlet类在服务器中只有一个实例，但对于每个HTTP请求，Web服务器会使用多线程执行请求。因此，一个Servlet的doGet()、doPost()
等处理请求的方法是多线程并发执行的。如果Servlet中定义了字段，要注意多线程并发访问的问题
public class HelloServlet extends HttpServlet { private Map<String, String> map = new ConcurrentHashMap<>(); protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { // 注意读写map字段是多线程并发的: this.map.put(key, value); }
}
对于每个请求，Web服务器会创建唯一的HttpServletRequest和HttpServletResponse实例，因此，HttpServletRequest和HttpServletResponse实例只有在当前处理线程中有效，它们总是局部变量，不存在多线程共享的问题`},{header:"使用Filter",slug:"使用filter",content:`为了把一些公用逻辑从各个Servlet中抽离出来，JavaEE的Servlet规范还提供了一种Filter组件，即过滤器，它的作用是，在HTTP请求到达Servlet之前，可以被一个或多个Filter预处理，类似打印日志、登录检查等逻辑，完全可以放到Filter中。 编写一个最简单的EncodingFilter，它强制把输入和输出的编码设置为UTF-8。编写Filter时，必须实现Filter接口，在doFilter()方法内部，要继续处理请求，必须调用chain.doFilter()
。最后，用@WebFilter注解标注该Filter需要过滤的URL。这里的/*表示所有路径。
@WebFilter(urlPatterns = "/*")
public class EncodingFilter implements Filter { public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException { System.out.println("EncodingFilter:doFilter"); request.setCharacterEncoding("UTF-8"); response.setCharacterEncoding("UTF-8"); chain.doFilter(request, response); }
}
还可以继续添加其他Filter， 多个Filter会组成一个链，每个请求都被链上的Filter依次处理，
Servlet规范并没有对@WebFilter注解标注的Filter规定顺序。如果一定要给每个Filter指定顺序，就必须在web.xml文件中对这些Filter再配置一遍`},{header:"为什么HttpServletRequest的输入流只能读一次",slug:"为什么httpservletrequest的输入流只能读一次",content:`当我们调用 getInputStream() 方法获取输入流时得到的是一个 InputStream 对象，而实际类型是 ServletInputStream，它继承于 InputStream。 InputStream 的 read()
方法内部有一个 position，标志当前流被读取到的位置，每读取一次，该标志就会移动一次，如果读到最后，read()会返回 -1，表示已经读取完了。如果想要重新读取则需要调用 reset()
方法，position 就会移动到上次调用 mark 的位置，mark 默认是0，所以就能从头再读了。调用 reset() 方法的前提是已经重写了 reset() 方法，当然能否 reset 也是有条件的，它取决于
markSupported()
方法是否返回true。 InputStream 默认不实现 reset 的相关方法，而 ServletInputStream 也没有重写 reset 的相关方法，这样就无法重复读取流，这就是我们从 request
对象中获取的输入流就只能读取一次的原因。`},{header:"修改请求 HttpServletRequestWrapper",slug:"修改请求-httpservletrequestwrapper",content:""},{header:"修改响应 HttpServletResponseWrapper",slug:"修改响应-httpservletresponsewrapper",content:""},{header:"使用Listener",slug:"使用listener",content:`Listener顾名思义就是监听器，有好几种Listener，其中最常用的是ServletContextListener,通过Listener我们可以监听Web应用程序的生命周期
任何标注为@WebListener，且实现了特定接口的类会被Web服务器自动初始化,它会在整个Web应用程序初始化完成后，以及Web应用程序关闭后获得回调通知。`},{header:"ioc 容器",slug:"ioc-容器",content:`在 application.xml 中配置 bean 依赖关系 <beans xmlns="http://www.springframework.org/schema/beans"> <bean id="userService" class="com.learnJava.service.UserService"> <property name="mailService" ref="mailService"/> </bean> <bean id="mailService" class="com.learnJava.service.MailService"/>
</beans>
在入口函数中加载 application.xml， Spring容器会为我们创建并装配好配置文件中指定的所有Bean， 接下来就可以从Spring容器中“取出”装配好的Bean然后使用它
public class Main { public static void main(String[] args) { ApplicationContext context = new ClassPathXmlApplicationContext("application.xml"); UserService userService = context.getBean(UserService.class); User user = userService.login("bob@example.com", "password"); System.out.println(user.getName()); }
}
Spring容器就是 ApplicationContext，它是一个接口，有很多实现类，这里我们选择 ClassPathXmlApplicationContext，表示它会自动从 classpath 中查找指定的XML配置文件
Spring还提供另一种IoC容器叫BeanFactory，使用方式和ApplicationContext类似：
BeanFactory factory = new XmlBeanFactory(new ClassPathResource("application.xml"));
MailService mailService = factory.getBean(MailService.class);
BeanFactory 和 ApplicationContext 的区别在于，BeanFactory 的实现是按需创建，即第一次获取 Bean 时才创建这个Bean，而 ApplicationContext 会一次性创建所有的 Bean`},{header:"Annotation配置",slug:"annotation配置",content:`使用Spring的IoC容器，实际上就是通过类似XML这样的配置文件，把我们自己的Bean的依赖关系描述出来，然后让容器来创建并装配Bean。一旦容器初始化完毕，我们就直接从容器中获取Bean使用它们。 使用 XML
配置的优点是所有的Bean都能一目了然地列出来，并通过配置注入能直观地看到每个Bean的依赖。它的缺点是写起来非常繁琐，每增加一个组件，就必须把新的Bean配置到XML中.
为了解决这个问题，我们可以使用Annotation配置，可以完全不需要XML，让Spring自动扫描Bean并组装它们。 每个Bean被标注为@Component并正确使用@Autowired注入；
配置类被标注为@Configuration和@ComponentScan；
所有Bean均在指定包以及子包内`},{header:"定制bean",slug:"定制bean",content:`对于Spring容器来说，当我们把一个Bean标记为@Component后，它就会自动为我们创建一个单例（Singleton），即容器初始化时创建Bean，容器关闭前销毁Bean。在容器运行期间，我们调用getBean(Class)
获取到的Bean总是同一个实例。 还有一种Bean，我们每次调用getBean(Class)
，容器都返回一个新的实例，这种Bean称为Prototype（原型），它的生命周期显然和Singleton不同。声明一个Prototype的Bean时，需要添加一个额外的@Scope注解 注入List ： 有些时候，我们会有一系列接口相同，不同实现的 Bean, 比如我们有一个 Validator 接口，它有3个实现类，分别是 EmailValidator、PasswordValidator、NameValidator。
Spring会自动把所有类型为Validator的Bean装配为一个List注入进来，这样一来，我们每新增一个Validator类型，就自动被Spring装配到Validators中了，非常方便 @Component
public class Validators { @Autowired List<Validator> validators; public void validate(String email, String password, String name) { for (var validator : this.validators) { validator.validate(email, password, name); } }
} 创建第三方Bean ，如果一个Bean不在我们自己的package管理之内，我们自己在@Configuration类中编写一个Java方法创建并返回它，注意给方法标记一个@Bean注解
，Spring对标记为@Bean的方法只调用一次，因此返回的Bean仍然是单例。 初始化和销毁 有些时候，一个Bean在注入必要的依赖后，需要进行初始化（监听消息等）。在容器关闭时，有时候还需要清理资源（关闭连接池等）。我们通常会定义一个init()方法进行初始化，定义一个shutdown()
方法进行清理，然后，引入JSR-250定义的Annotation(一个jar包)，在Bean的初始化和清理方法上标记@PostConstruct和@PreDestroy，Spring容器会对上述Bean做如下初始化流程：
调用构造方法创建实例； 根据@Autowired进行注入； 调用标记有@PostConstruct的init()方法进行初始化。 而销毁时，容器会首先调用标记有@PreDestroy的shutdown()方法 @Component
public class MailService { @Autowired(required = false) ZoneId zoneId = ZoneId.systemDefault(); @PostConstruct public void init() { System.out.println("Init mail service with zoneId = " + this.zoneId); } @PreDestroy public void shutdown() { System.out.println("Shutdown mail service"); }
} 使用别名:
默认情况下，对一种类型的Bean，容器只创建一个实例。但有些时候，我们需要对一种类型的Bean创建多个实例。例如，同时连接多个数据库，就必须创建多个DataSource实例。这个时候，需要给每个Bean添加不同的名字,或者把其中某个Bean指定为@Primary，这样，在注入时，如果没有指出Bean的名字，Spring会注入标记有@Primary的Bean 使用条件装配：Spring为应用程序准备了Profile这一概念，用来表示不同的环境。创建某个Bean时，Spring容器可以根据注解@Profile来决定是否创建。Spring还可以根据@Conditional决定是否创建某个Bean。`},{header:"AOP",slug:"aop",content:`AOP是Aspect Oriented Programming，即面向切面编程。而AOP是一种新的编程方式，它和OOP不同.
在Java平台上，对于AOP的织入，有3种方式：
编译期：在编译时，由编译器把切面调用编译进字节码，这种方式需要定义新的关键字并扩展编译器，AspectJ就扩展了Java编译器，使用关键字aspect来实现织入；
类加载器：在目标类被装载到JVM时，通过一个特殊的类加载器，对目标类的字节码重新“增强”；
运行期：目标对象和切面都是普通Java类，通过JVM的动态代理功能或者第三方库实现运行期动态织入。
最简单的方式是第三种，Spring的AOP实现就是基于JVM的动态代理。由于JVM的动态代理要求必须实现接口，如果一个普通类没有业务接口，就需要通过CGLIB或者Javassist这些第三方库实现。
AOP技术看上去比较神秘，但实际上，它本质就是一个动态代理，让我们把一些常用功能如权限检查、日志、事务等，从每个业务方法中剥离出来。`},{header:"JDBC",slug:"jdbc",content:`Java为关系数据库定义了一套标准的访问接口：JDBC（Java Database，在Java的标准库java.sql
Connectivity）,使用Java程序访问数据库时，Java代码并不是直接通过TCP连接去访问数据库，而是通过JDBC接口来访问，而JDBC接口则通过JDBC驱动来实现真正对数据库的访问。我们把某个数据库实现了JDBC接口的jar包称为JDBC驱动
例如，我们在Java代码中如果要访问MySQL，那么必须编写代码操作JDBC接口。注意到JDBC接口是Java标准库自带的，所以可以直接编译。而具体的JDBC驱动是由数据库厂商提供的，例如，MySQL的JDBC驱动由Oracle提供。因此，访问某个具体的数据库，我们只需要引入该厂商提供的JDBC驱动，就可以通过JDBC接口来访问，这样保证了Java程序编写的是一套数据库访问代码，却可以访问各种不同的数据库，因为他们都提供了标准的JDBC驱动。从代码来看，Java标准库自带的JDBC接口其实就是定义了一组接口，而某个具体的JDBC驱动其实就是实现了这些接口的类
实际上，一个MySQL的JDBC的驱动就是一个jar包，它本身也是纯Java编写的。我们自己编写的代码只需要引用Java标准库提供的java.sql包下面的相关接口，由此再间接地通过MySQL驱动的jar包通过网络访问MySQL服务器，所有复杂的网络通讯都被封装到JDBC驱动中，因此，Java程序本身只需要引入一个MySQL驱动的jar包就可以正常访问MySQL服务器`},{header:"JDBC连接",slug:"jdbc连接",content:`使用JDBC时，我们先了解什么是Connection。Connection代表一个JDBC连接，它相当于Java程序到数据库的连接（通常是TCP连接）。打开一个Connection时，需要准备URL、用户名和口令，才能成功连接到数据库。
URL是由数据库厂商指定的格式
例如，MySQL的URL是： jdbc:mysql://<hostname>:<port>/<db>?key1=value1&key2=value2
数据库操作总结起来就四个字：增删改查，行话叫CRUD：Create，Retrieve，Update和Delete。
在执行JDBC的增删改查的操作时，如果每一次操作都来一次打开连接，操作，关闭连接，那么创建和销毁JDBC连接的开销就太大了。为了避免频繁地创建和销毁JDBC连接，我们可以通过连接池（Connection
Pool）复用已经创建好的连接。JDBC连接池有一个标准的接口javax.sql.DataSource，注意这个类位于Java标准库中，但仅仅是接口。要使用JDBC连接池，我们必须选择一个JDBC连接池的实现。常用的JDBC连接池有：HikariCP,
C3P0, BoneCP, Druid`},{header:"spring with jdbc",slug:"spring-with-jdbc",content:`在Spring使用JDBC，首先我们通过IoC容器创建并管理一个DataSource实例，然后，Spring提供了一个JdbcTemplate，可以方便地让我们操作JDBC，因此，通常情况下，我们会实例化一个JdbcTemplate。顾名思义，这个类主要使用了Template模式。
需要强调的是，JdbcTemplate只是对JDBC操作的一个简单封装，它的目的是尽量减少手动编写try(resource) {...}的代码，对于查询，主要通过RowMapper实现了JDBC结果集到Java对象的转换。 针对简单查询，优选query()和queryForObject()，因为只需提供SQL语句、参数和RowMapper；
针对更新操作，优选update()，因为只需提供SQL语句和参数；
任何复杂的操作，最终也可以通过execute(ConnectionCallback)实现，因为拿到Connection就可以做任何JDBC操作 jdbcTemplate.execute()
jdbcTemplate.update()
jdbcTemplate.query()
jdbcTemplate.queryForObject
Spring提供了一个PlatformTransactionManager来表示事务管理器，所有的事务都由它负责管理。而事务由TransactionStatus表示。Spring为啥要抽象出PlatformTransactionManager和TransactionStatus？原因是JavaEE除了提供JDBC事务外，它还支持分布式事务JTA（Java
Transaction API）。分布式事务是指多个数据源（比如多个数据库，多个消息系统）要在分布式环境下实现事务的时候，应该怎么实现。
一般我们的代码只需要JDBC事务，因此，在AppConfig中，需要再定义一个PlatformTransactionManager对应的Bean，它的实际类型是DataSourceTransactionManager，使用编程的方式使用Spring事务仍然比较繁琐，更好的方式是通过声明式事务来实现。使用声明式事务非常简单，除了在AppConfig中追加一个上述定义的PlatformTransactionManager外，再加一个@EnableTransactionManagement就可以启用声明式事务。然后，对需要事务支持的方法，加一个@Transactional注解，或者更简单一点，直接class处加上@Transactional，表示所有public方法都具有事务支持
默认情况下，如果发生了RuntimeException，Spring的声明式事务将自动回滚。在一个事务方法中，如果程序判断需要回滚事务，只需抛出RuntimeException
Spring的声明式事务为事务传播定义了几个级别，默认传播级别就是 REQUIRED，它的意思是，如果当前没有事务，就创建一个新事务，如果当前有事务，就加入到当前事务中执行。REQUIRED级别基本上满足绝大部分的需求
Spring对一个声明式事务的方法，如何开启事务支持？原理仍然是AOP代理，即通过自动创建Bean的Proxy实现
Spring使用声明式事务，最终也是通过执行JDBC事务来实现功能的，那么，一个事务方法，如何获知当前是否存在事务？
答案是使用ThreadLocal。Spring总是把JDBC相关的Connection和TransactionStatus实例绑定到ThreadLocal。如果一个事务方法从ThreadLocal未取到事务，那么它会打开一个新的JDBC连接，同时开启一个新的事务，否则，它就直接使用从ThreadLocal获取的JDBC连接以及TransactionStatus。
因此，事务能正确传播的前提是，方法调用是在一个线程内才行。
事务只能在当前线程传播，无法跨线程传播。
那如果我们想实现跨线程传播事务呢？原理很简单，就是要想办法把当前线程绑定到ThreadLocal的Connection和TransactionStatus实例传递给新线程，但实现起来非常复杂，根据异常回滚更加复杂，不推荐自己去实现。`},{header:"使用DAO",slug:"使用dao",content:`编写数据访问层的时候，可以使用DAO模式。DAO即Data Access
Object的缩写。Spring提供了一个JdbcDaoSupport类，用于简化DAO的实现。这个JdbcDaoSupport没什么复杂的，核心代码就是持有一个JdbcTemplate`},{header:"ORM",slug:"orm",content:`这种把关系数据库的表记录映射为Java对象的过程就是ORM：Object-Relational Mapping。ORM既可以把记录转换成Java对象，也可以把Java对象转换为行记录。
使用JdbcTemplate配合RowMapper可以看作是最原始的ORM。如果要实现更自动化的ORM，可以选择成熟的ORM框架,比如：Hibernate
myBatis:介于全自动ORM如Hibernate和手写全部如JdbcTemplate之间，还有一种半自动的ORM，它只负责把ResultSet自动映射到Java Bean，或者自动填充Java
Bean参数，但仍需自己写出SQL。MyBatis就是这样一种半自动化ORM框架.
ORM的设计套路都是类似的。使用MyBatis的核心就是创建SqlSessionFactory，这里我们需要创建的是SqlSessionFactoryBean.和Hibernate不同的是，MyBatis使用Mapper来实现映射，而且Mapper必须是接口。这里的Mapper不是JdbcTemplate的RowMapper的概念，它是定义访问users表的接口方法。比如我们定义了一个User getById(long)
的主键查询方法，不仅要定义接口方法本身，还要明确写出查询的SQL，这里用注解@Select标记。SQL语句的任何参数，都与方法参数按名称对应。例如，方法参数id的名字通过注解@Param()
标记为id，则SQL语句里将来替换的占位符就是#{id}。
public interface UserMapper { @Select("SELECT * FROM users WHERE id = #{id}") User getById(@Param("id") long id);
}
有了UserMapper接口，还需要对应的实现类 UserMapperImp
才能真正执行这些数据库操作的方法。虽然可以自己写实现类，但我们除了编写UserMapper接口外，还有BookMapper、BonusMapper……一个一个写太麻烦，因此，MyBatis提供了一个MapperFactoryBean来自动创建所有Mapper的实现类。可以用一个简单的注解来启用它 @MapperScan("com.itranswarp.learnjava.mapper")
。有了@MapperScan，就可以让MyBatis自动扫描指定包的所有Mapper并创建实现类。在真正的业务逻辑中，我们可以直接注入
XML配置 :
上述在Spring中集成MyBatis的方式，我们只需要用到注解，并没有任何XML配置文件。MyBatis也允许使用XML配置映射关系和SQL语句,编写XML配置的优点是可以组装出动态SQL，并且把所有SQL操作集中在一起。缺点是配置起来太繁琐，调用方法时如果想查看SQL还需要定位到XML配置中
使用MyBatis最大的问题是所有SQL都需要全部手写，优点是执行的SQL就是我们自己写的SQL，对SQL进行优化非常简单，也可以编写任意复杂的SQL，或者使用数据库的特定语法，但切换数据库可能就不太容易。好消息是大部分项目并没有切换数据库的需求，完全可以针对某个数据库编写尽可能优化的SQL。`},{header:"springMVC 项目结构",slug:"springmvc-项目结构",content:`其中，src/main/webapp是标准web目录，WEB-INF存放web.xml，编译的class，第三方jar，以及不允许浏览器直接访问的View模版，static目录存放所有静态文件。
在src/main/resources目录中存放的是Java程序读取的classpath资源文件`},{header:"使用Spring MVC",slug:"使用spring-mvc",content:`Servlet容器为每个Web应用程序自动创建一个唯一的ServletContext实例，这个实例就代表了Web应用程序本身. Spring提供的是一个IoC容器，所有的Bean，包括Controller，都在Spring
IoC容器中被初始化，而Servlet容器由JavaEE服务器提供（如Tomcat），Servlet容器对Spring一无所知，他们之间到底依靠什么进行联系，又是以何种顺序初始化的？ web.xml 是java web
项目的一个重要的配置文件，但是web.xml文件并不是Java
web工程必须的。web.xml可以定制servlet、JSP、Context的初始化参数，然后可以再servlet、JSP、Context中获取这些参数值,依次启动servlet和ioc容器 和普通Spring配置一样，我们编写正常的AppConfig后，只需加上@EnableWebMvc注解，就“激活”了Spring
MVC,除了创建DataSource、JdbcTemplate、PlatformTransactionManager外，AppConfig需要额外创建几个用于Spring MVC的Bean 使用@RestController可以方便地编写REST服务，Spring默认使用JSON作为输入和输出。 要控制序列化和反序列化，可以使用Jackson提供的@JsonIgnore和@JsonProperty注解。 springMVC的controller方法中如果参数需要传入HttpServletRequest、HttpServletResponse或者HttpSession，直接添加这个类型的参数即可，Spring MVC会自动按类型传入 处理CORS：在WebMvcConfigurer中定义一个全局CORS配置 异步处理：在Servlet模型中，每个请求都是由某个线程处理，然后，将响应写入IO流，发送给客户端。从开始处理请求，到写入响应完成，都是在同一个线程中处理的。这种线程模型非常重要，因为Spring的JDBC事务是基于ThreadLocal实现的，
如果在处理过程中，一会由线程A处理，一会又由线程B处理，那事务就全乱套了。此外，很多安全认证，也是基于ThreadLocal实现的，可以保证在处理请求的过程中，各个线程互不影响。但是，如果一个请求处理的时间较长，例如几秒钟甚至更长，那么，这种基于线程池的同步模型很快就会把所有线程耗尽，导致服务器无法响应新的请求。如果把长时间处理的请求改为异步处理，那么线程池的利用率就会大大提高。Servlet从3.0规范开始添加了异步支持，允许对一个请求进行异步处理。第一种async处理方式是返回一个Callable，Spring
MVC自动把返回的Callable放入线程池执行，等待结果返回后再写入响应。第二种async处理方式是返回一个DeferredResult对象，然后在另一个线程中，设置此对象的值并写入响应。
在实际使用时，经常用到的就是DeferredResult，因为返回DeferredResult时，可以设置超时、正常结果和错误结果，易于编写比较灵活的逻辑。
使用async异步处理响应时，要时刻牢记，在另一个异步线程中的事务和Controller方法中执行的事务不是同一个事务，在Controller中绑定的ThreadLocal信息也无法在异步线程中获取。 Servlet
3.0规范添加的异步支持是针对同步模型打了一个“补丁”，虽然可以异步处理请求，但高并发异步请求时，它的处理效率并不高，因为这种异步模型并没有用到真正的“原生”异步。Java标准库提供了封装操作系统的异步IO包java.nio，是真正的多路复用IO模型，可以用少量线程支持大量并发。使用NIO编程复杂度比同步IO高很多，因此我们很少直接使用NIO。相反，大部分需要高性能异步IO的应用程序会选择Netty这样的框架，它基于NIO提供了更易于使用的API，方便开发异步应用程序。 WebSocket：WebSocket是一种基于HTTP的长链接技术。传统的HTTP协议是一种请求-响应模型，如果浏览器不发送请求，那么服务器无法主动给浏览器推送数据。HTTP本身是基于TCP连接的，所以，WebSocket在HTTP协议的基础上做了一个简单的升级，即建立TCP连接后，浏览器发送请求时，附带几个头：Upgrade: websocket
,就表示客户端希望升级连接，变成长连接的WebSocket，服务器返回升级成功的响应。收到成功响应后表示WebSocket“握手”成功，这样，代表WebSocket的这个TCP连接将不会被服务器关闭，而是一直保持，服务器可随时向浏览器推送消息，浏览器也可随时向服务器推送消息。双方推送的消息既可以是文本消息，也可以是二进制消息，一般来说，绝大部分应用程序会推送基于JSON的文本消息。`},{header:"SpringMvc中使用 Filter",slug:"springmvc中使用-filter",content:`Servlet容器实例化的Filter，间接引用Spring容器实例化的AuthFilter。Spring
MVC提供了一个DelegatingFilterProxy，专门来干这个事情。Servlet容器从web.xml中读取配置，实例化DelegatingFilterProxy，注意命名是authFilter；
Spring容器通过扫描@Component实例化AuthFilter。
当DelegatingFilterProxy生效后，它会自动查找注册在ServletContext上的Spring容器，再试图从容器中查找名为authFilter的Bean，也就是我们用@Component声明的AuthFilter`},{header:"SpringMvc中使用 Interceptor",slug:"springmvc中使用-interceptor",content:`Filter由Servlet容器管理，它在Spring MVC的Web应用程序中作用范围如下 如果只基于Spring MVC开发应用程序，还可以使用Spring
MVC提供的一种功能类似Filter的拦截器：Interceptor。和Filter相比，Interceptor拦截范围不是后续整个处理流程，而是仅针对Controller拦截，所以，Interceptor
的拦截范围其实就是Controller方法，它实际上就相当于基于AOP的方法拦截。使用Interceptor的好处是Interceptor本身是Spring管理的Bean，因此注入任意Bean都非常简单。 此外，可以应用多个Interceptor，并通过简单的@Order指定顺序。一个Interceptor必须实现HandlerInterceptor接口，可以选择实现preHandle()
、postHandle()和afterCompletion()方法。preHandle()是Controller方法调用前执行，postHandle()是Controller方法正常返回后执行，而afterCompletion()
无论Controller方法是否抛异常都会执行，参数ex就是Controller方法抛出的异常（未抛出异常是null）。 在preHandle()
中，也可以直接处理响应，然后返回false表示无需调用Controller方法继续处理了，通常在认证或者安全检查失败时直接返回错误响应。在postHandle()
中，因为捕获了Controller方法返回的ModelAndView，所以可以继续往ModelAndView里添加一些通用数据，很多页面需要的全局数据如Copyright信息等都可以放到这里，无需在每个Controller方法中重复添加。
最后，要让拦截器生效，我们在WebMvcConfigurer中注册所有的Interceptor
@Bean
WebMvcConfigurer createWebMvcConfigurer(@Autowired HandlerInterceptor[] interceptors) { return new WebMvcConfigurer() { public void addInterceptors(InterceptorRegistry registry) { for (var interceptor : interceptors) { registry.addInterceptor(interceptor); } } };
}`},{header:"springBoot",slug:"springboot",content:`application.yml : 这是Spring Boot默认的配置文件，它采用YAML格式而不是.properties格式，文件名必须是application.yml而不是其他名称。 logback-spring.xml:这是Spring Boot的logback配置文件名称。 使用Spring Boot时，强烈推荐从spring-boot-starter-parent继承，因为这样就可以引入Spring Boot的预置配置。
紧接着，我们引入了依赖spring-boot-starter-web和spring-boot-starter-jdbc，它们分别引入了Spring MVC相关依赖和Spring
JDBC相关依赖，无需指定版本号，因为引入的<parent>内已经指定了，只有我们自己引入的某些第三方jar包需要指定版本号。 springMvc中我们定义的数据源、声明式事务、JdbcTemplate在哪创建的？这些自动创建的Bean就是Spring Boot的特色：AutoConfiguration。
当我们引入spring-boot-starter-jdbc时，启动时会自动扫描所有的XxxAutoConfiguration。DataSourceAutoConfiguration
：自动创建一个DataSource，其中配置项从application.yml的spring.datasource读取；DataSourceTransactionManagerAutoConfiguration
：自动创建了一个基于JDBC的事务管理器；JdbcTemplateAutoConfiguration：自动创建了一个JdbcTemplate。 因此，我们自动得到了一个
DataSource、一个DataSourceTransactionManager和一个JdbcTemplate。Spring
Boot大量使用XxxAutoConfiguration来使得许多组件被自动化配置并创建，而这些创建过程又大量使用了Spring的Conditional功能。 Spring Boot自动装配功能是通过自动扫描+条件装配实现的，这一套机制在默认情况下工作得很好，但是，如果我们要手动控制某个Bean的创建，就需要详细地了解Spring
Boot自动创建的原理，很多时候还要跟踪XxxAutoConfiguration，以便设定条件使得某个Bean不会被自动创建。 禁用自动配置：Spring
Boot大量使用自动配置和默认配置，极大地减少了代码，通常只需要加上几个注解，并按照默认规则设定一下必要的配置即可。例如，配置JDBC，默认情况下，只需要配置一个spring.datasource。有时候，我们又必须要禁用某些自动配置。例如，系统有主从两个数据库，而Spring
Boot的自动配置只能配一个，怎么办？ 这个时候，针对DataSource相关的自动配置，就必须关掉。我们需要用exclude指定需要关掉的自动配置 @SpringBootApplication
// 启动自动配置，但排除指定的自动配置:
@EnableAutoConfiguration(exclude = DataSourceAutoConfiguration.class)
public class Application { ...
}`},{header:"RedisAutoConfiguration 类",slug:"redisautoconfiguration-类",content:`@Configuration // 表明这是一个配置类
// 表明类路径下有RedisOperations这个类的时候该类才会被加载到容器中（RedisTemplate extends RedisOperations）
@ConditionalOnClass(RedisOperations.class)
@EnableConfigurationProperties(RedisProperties.class) // 表示让RedisProperties配置类生效
@Import({ LettuceConnectionConfiguration.class, JedisConnectionConfiguration.class }) // 最后又导入了两个redis连接类
public class RedisAutoConfiguration { // // 定义 bean RedisTemplate redisTemplate (仅在该 bean 不存在的情况下才定义) @Bean @ConditionalOnMissingBean(name = "redisTemplate") public RedisTemplate<Object, Object> redisTemplate( RedisConnectionFactory redisConnectionFactory) throws UnknownHostException { RedisTemplate<Object, Object> template = new RedisTemplate<>(); template.setConnectionFactory(redisConnectionFactory); return template; } // 定义 bean StringRedisTemplate stringRedisTemplate (仅在该 bean 不存在的情况下才定义) @Bean @ConditionalOnMissingBean public StringRedisTemplate stringRedisTemplate( RedisConnectionFactory redisConnectionFactory) throws UnknownHostException { StringRedisTemplate template = new StringRedisTemplate(); template.setConnectionFactory(redisConnectionFactory); return template; } }`},{header:"@Autowired和@Resource",slug:"autowired和-resource",content:`@Resource和@Autowired都可以作为注入属性的修饰，在接口仅有单一实现类时，两个注解的修饰效果相同，可以互相替换，不影响使用
@Resource是JDK原生的注解，@Autowired是Spring2.5 引入的注解 @Resource有两个属性name和type。Spring将@Resource注解的name属性解析为bean的名字，而type属性则解析为bean的类型。所以如果使用name属性，则使用byName的自动注入策略，而使用type属性时则使用byType自动注入策略。如果既不指定name也不指定type属性，这时将通过反射机制使用byName自动注入策略。 @Autowired只根据type进行注入，不会去匹配name。如果涉及到type无法辨别注入对象时，那需要依赖@Qualifier或@Primary注解一起来修饰。`},{header:"springBoot cache",slug:"springboot-cache",content:`java项目添加 maven 依赖 spring-boot-starter-cache
在启动类加上 @EnableCaching 注解即可开启使用缓存
在要缓存的方法上面添加 @Cacheable 注解，即可缓存这个方法的返回值
Spring Cache有几个常用注解，分别为 @Cacheable、@CachePut、@CacheEvict、@Caching、 @CacheConfig。除了最后一个 @CacheConfig
外，其余四个都可以用在类上或者方法级别上，如果用在类上，就是对该类的所有 public 方法生效
@Cacheable
@Cacheble注解表示这个方法有了缓存的功能，方法的返回值会被缓存下来，下一次调用该方法前，会去检查是否缓存中已经有值，如果有就直接返回，不调用方法。如果没有，就调用方法，然后把结果缓存起来。这个注解一般用在查询方法上
@CachePut 加了@CachePut注解的方法，会把方法的返回值put到缓存里面缓存起来，供其它地方使用。它通常用在新增方法上
@CacheEvict 使用了 CacheEvict 注解的方法，会清空指定缓存。一般用在更新或者删除的方法上。
@CacheConfig 前面提到的四个注解，都是Spring
Cache常用的注解。但这几个注解通常都是作用在方法上的，而有些配置可能又是一个类通用的，这种情况就可以使用@CacheConfig了，它是一个类级别的注解，可以在类级别上配置cacheNames、keyGenerator、cacheManager、cacheResolver等。
SpringBoot 默认使用基于ConcurrentHashMap的缓存， 如果要使用其它的缓存框架，我们只需要重新定义好CacheManager和CacheResolver这两个Bean就行了。
事实上，Spring会自动检测我们是否引入了相应的缓存框架，如果我们引入了spring-data-redis，Spring就会自动使用spring-data-redis提供的RedisCacheManager，RedisCache`},{header:"@EnableWebMvc 注解",slug:"enablewebmvc-注解",content:`@EnableWebMvc的意义: Adding this annotation to an @Configuration class imports the Spring MVC configuration
from WebMvcConfigurationSupport, 在 WebMvcConfigurationSupport 中注册了许多的 HandlerMappings(映射相应的 request 到相应的 handler
methods)
org.springframework.web.servlet.config.annotation.WebMvcConfigurer: spring webMvc 配置类，如果要自定义 webMvc,需要 override
这个类的方法`},{header:"CommandLineRunner 接口",slug:"commandlinerunner-接口",content:"Spring boot的CommandLineRunner接口主要用于实现在应用初始化后，去执行一段代码块逻辑，这段初始化代码在整个应用生命周期内只会执行一次,我们可以在run()方法里使用任何依赖，因为它们已经初始化好了"},{header:"springBoot 自定义错误处理",slug:"springboot-自定义错误处理",content:`@RestControllerAdvice ：@ControllerAdvice 和 @ResponseBody 的组合
@ControllerAdvice : Specialization of @Component for classes that declare @ExceptionHandler, @InitBinder, or
@ModelAttribute methods to be shared across multiple @Controller classes
ExceptionHandler : Annotation for handling exceptions in specific handler classes and/or handler methods. @RestControllerAdvice
public class BusinessExceptionHandler { @ExceptionHandler(NullPointerException.class) public RestResponse handleNullPointerException(HttpServletRequest request, NullPointerException e) { e.printStackTrace(); return RestResponse.error("NullPointerException"); } }`},{header:"ApplicationContextAware 接口",slug:"applicationcontextaware-接口",content:`Aware 是一个标记接口，没有方法，ApplicationContextAware 接口扩展了该标记接口，定义了 setApplicationContext 回调方法，并传入 ApplicationContext
作为参数，以便获取应用上下文，实现 ApplicationContextAware 的类，spring 会回调 setApplicationContext 方法，暴露出上下文环境 Aware：A marker superinterface indicating that a bean is eligible to be notified by the Spring container of a
particular framework object through a callback-style method. The actual method signature is determined by individual
subinterfaces but should typically consist of just one void-returning method that accepts a single argument. 上下文环境中可以获取 BeanFactory , 用以获取所有由 spring 管理的 Bean @Component
public class SpringUtils implements ApplicationContextAware { private static ApplicationContext applicationContext; // 这个 setApplicationContext 方法会被自主调用 @Override public void setApplicationContext(ApplicationContext applicationContext) throws BeansException { SpringUtils.applicationContext = applicationContext; } public static ApplicationContext getApplicationContext() { return applicationContext; } public static <T> T getBean(Class<T> clazz) { return getApplicationContext().getBean(clazz); }
}`},{header:"springBoot中使用Filter",slug:"springboot中使用filter",content:`添加Filter:我们在Spring中已经学过了集成Filter，本质上就是通过代理，把Spring管理的Bean注册到Servlet容器中，不过步骤比较繁琐，需要配置web.xml。在Spring
Boot中，添加一个Filter更简单了，可以做到零配置.Spring Boot会自动扫描所有的FilterRegistrationBean类型的Bean，然后，将它们返回的Filter自动注册到Servlet容器中，无需任何配置。
@Component
public class AuthFilterRegistrationBean extends FilterRegistrationBean<Filter> { @Autowired UserService userService; @Override public Filter getFilter() { setOrder(10); return new AuthFilter(); } class AuthFilter implements Filter { ... }
}`}]},{path:"/java/java_web_packages.html",title:"java web 常用包",pathLocale:"/",contents:[{header:"",slug:"",content:"验证码原理：前端向后台请求验证码时候会携带一个 UUID,后台生成的验证码信息会和这个 UUID 绑定在一起，最终表单提交到后台之后会一起校验 UUID 和 验证码是否匹配。"},{header:"Reference",slug:"reference",content:`jwt-token
Session Cookies vs. JWT
jsoup: Java HTML Parser
easyPoi: Excel和 Word简易工具类
Apache Commons: 工具库
hutool: 工具库
fastjson
简易验证码 lombok`}]},{path:"/java/log.html",title:"java log",pathLocale:"/",contents:[{header:"java.util.logging",slug:"java-util-logging",content:`Java标准库内置了日志包java.util.logging，我们可以直接用,它自动打印了时间、调用类、调用方法等很多有用的信息.
JDK的Logging定义了7个日志级别，从严重到普通：SEVERE WARNING INFO CONFIG FINE FINER FINEST,默认级别是INFO，因此，INFO级别以下的日志，不会被打印出来.
Logging系统在JVM启动时读取配置文件并完成初始化，一旦开始运行main()方法，就无法修改配置；配置不太方便。Java标准库内置的Logging使用并不是非常广泛`},{header:"Commons Logging(日志接口,负责充当日志API)",slug:"commons-logging-日志接口-负责充当日志api",content:`Commons Logging是一个第三方日志库，它是由 Apache 创建的日志模块，Commons Logging 的特色是，它可以挂接不同的日志系统，并通过配置文件指定挂接的日志系统。默认情况下，Commons Logging
自动搜索并使用 Log4j（Log4j是另一个流行的日志系统），如果没有找到Log4j，再使用JDK Logging。
Commons Logging定义了6个日志级别： FATAL ERROR WARNING INFO DEBUG TRACE 默认级别是INFO`},{header:"Log4j(负责实现日志底层)",slug:"log4j-负责实现日志底层",content:`Commons Logging，可以作为“日志接口”来使用。而真正的“日志实现”可以使用 Log4j,当我们使用Log4j输出一条日志时，Log4j自动通过不同的Appender把同一条日志输出到不同的目的地。 console：输出到屏幕；
file：输出到文件；
socket：通过网络输出到远程计算机；
jdbc：输出到数据库 在输出日志的过程中，通过Filter来过滤哪些log需要被输出，哪些log不需要被输出。例如，仅输出ERROR级别的日志。最后，通过 Layout 来格式化日志信息，例如，自动添加日期、时间、方法名称等信息。
在使用Log4j的时候，我们把一个 log4j2.xml 的文件放到 classpath 下就可以让 Log4j 读取配置文件并按照我们的配置来输出日志。`},{header:"SLF4J 和 Logback",slug:"slf4j-和-logback",content:`SLF4J(日志接口,负责充当日志API),Logback(负责实现日志底层),如下图所示，无论基于何种实现框架首先要引入的就是 slf4j-api.jar 包，作为接口，小型项目可以使用 slf4j-simple.jar,一般我们会使用 logback 作为日志实现(maven如下)。 maven 依赖
<!-- slf4j日志接口 -->
<dependency> <groupId>org.slf4j</groupId> <artifactId>slf4j-api</artifactId> <version>2.0.3</version>
</dependency>
<!-- logback 日志实现， logback-classic 会自动引入 logback-core -->
<dependency> <groupId>ch.qos.logback</groupId> <artifactId>logback-classic</artifactId> <version>1.3.3</version>
</dependency>`},{header:"logback 配置",slug:"logback-配置",content:`在 maven resource目录下配置 logback.xml 文件,更改默认日志输出级别为 DEBUG。
<?xml version="1.0" encoding="UTF-8"?>
<configuration> <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender"> <encoder> <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern> </encoder> </appender> <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender"> <encoder> <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern> <charset>utf-8</charset> </encoder> <file>log/output.log</file> <rollingPolicy class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy"> <fileNamePattern>log/output.log.%i</fileNamePattern> </rollingPolicy> <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy"> <MaxFileSize>1MB</MaxFileSize> </triggeringPolicy> </appender> <root level="DEBUG"> <appender-ref ref="CONSOLE"/> <appender-ref ref="FILE" /> </root>
</configuration>`}]},{path:"/java/myBatis.html",title:"MyBatis",pathLocale:"/",contents:[{header:"",slug:"",content:`Every MyBatis application centers around an instance of SqlSessionFactory. A SqlSessionFactory instance can be acquired
by using the SqlSessionFactoryBuilder. SqlSessionFactoryBuilder can build a SqlSessionFactory instance from an XML
configuration file, or from a custom prepared instance of the Configuration class.
SqlSession: The primary Java interface for working with MyBatis. Through this interface you can execute commands, get
mappers and manage transactions. SqlSessionFactory: Creates an SqlSession out of a connection or a DataSource`},{header:"spring + mybatis + mysql + 连接池",slug:"spring-mybatis-mysql-连接池",content:`<!-- MyBatis SQL mapper framework -->
<dependency> <groupId>org.mybatis</groupId> <artifactId>mybatis</artifactId> <version>\${mybatis.version}</version>
</dependency> <!-- An easy-to-use Spring bridge for MyBatis sql mapping framework -->
<dependency>
<groupId>org.mybatis</groupId>
<artifactId>mybatis-spring</artifactId>
<version>\${mybatis-spring.version}</version>
</dependency> <!-- JDBC connection pool -->
<dependency>
<groupId>com.zaxxer</groupId>
<artifactId>HikariCP</artifactId>
<version>\${hikaricp.version}</version>
</dependency> <!-- mysql 数据库驱动 -->
<dependency>
<groupId>mysql</groupId>
<artifactId>mysql-connector-java</artifactId>
<version>\${mysql.version}</version>
</dependency>`},{header:"注解",slug:"注解",content:""},{header:"from myBatis",slug:"from-mybatis",content:"@Mapper: Marker interface for MyBatis mappers, 添加@Mapper注解之后这个接口在编译时会生成相应的实现类"},{header:"from springBoot",slug:"from-springboot",content:"@MapperScan： 直接在Mapper类上面添加注解@Mapper，这种方式要求每一个mapper类都需要添加此注解，太麻烦。 通过使用@MapperScan可以指定要扫描的Mapper类的包的路径"},{header:"from myBatisPlus",slug:"from-mybatisplus",content:`@TableName: 表名注解，标识实体类对应的表, 在实体类上使用
@TableId： 主键注解，在实体类主键字段上使用
@TableField：字段注解（非主键），如果实体类字段和数据库字段不一致，可以用这个做转换`},{header:"接口和类",slug:"接口和类",content:""},{header:"from myBatisPlus",slug:"from-mybatisplus-1",content:`BaseMapper: Mapper 继承该接口后，无需编写 mapper.xml 文件，即可获得CRUD功能 public interface UserMapper extends BaseMapper<User> IService: 顶级 Service, 它的实现类是 ServiceImpl,通过继承该类可以获得 CRUD 功能，在项目中如下使用 // 接口继承
public interface UserService extends IService<User> // 实现类继承
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService AbstractWrapper:sql条件构造器，QueryWrapper(LambdaQueryWrapper) 和 UpdateWrapper(LambdaUpdateWrapper) 的父类 ,用于生成 sql 的 where
条件 BaseMapper和IService的区别:BaseMapper 针对dao层的方法封装 CRUD
IService<M,T> 针对业务逻辑层的封装 需要指定Dao层类和对应的实体类 是在BaseMapper基础上的加强 IPage 接口: 它的简单实现类是 Page`},{header:"myBatis 主键",slug:"mybatis-主键",content:`@SelectKey 应用场景： 如果向数据库中插入一条数据，同时有希望返回该条记录的主键，该怎么处理了？有两种情况： （1）数据库主键不是自增列，需要预先生成
（2）是自增列，插入之后才能获知 这两种情况都可以通过SelectKey解决，第一个种就是before，第二张是after。
@SelectKey的属性有下面几个： statement属性：填入将会被执行的 SQL 字符串数组。
keyProperty属性：填入将会被更新的参数对象的属性的值。
before属性：填入 true 或 false 以指明 SQL 语句应被在插入语句的之前还是之后执行。
resultType属性：填入 keyProperty 的 Java 类型。
statementType属性：填入Statement、 PreparedStatement 和 CallableStatement 中的STATEMENT、 PREPARED 或 CALLABLE 中任一值填入 。默认值是
PREPARED 如下所示插入主键 id 为 UUID， 其中 select replace(uuid(), '-', '') 中的 uuid() 和 replace() 函数均为 mysql 自带的字符串处理函数
@SelectKey(statement = "select replace(uuid(), '-', '')", keyProperty = "user.id", before = true, resultType = String.class)
@Options(useGeneratedKeys = true, keyProperty = "user.id", keyColumn = "user.id")
@Insert("INSERT INTO users (id, email, password, name, createdAt) VALUES (#{user.id}, #{user.email}, #{user.password}, #{user.name}, #{user.createdAt})")
boolean insert(@Param("user") User user);`},{header:"myBatis 日志",slug:"mybatis-日志",content:`某些查询可能会返回庞大的结果集，此时只想记录其执行的 SQL 语句而不想记录结果该怎么办？为此，Mybatis 中 SQL 语句的日志级别被设为DEBUG（JDK 日志设为 FINE），结果的日志级别为 TRACE（JDK 日志设为
FINER)。所以，只要将日志级别调整为 DEBUG 即可达到目的。
如果项目使用的是 logback 作为日志，则在 logback.xml 文件中调整日志输出级别，达到 mybatis 日志输出级别就可以输出日志了。`},{header:"myBatis 批处理",slug:"mybatis-批处理",content:"基于SqlSession的ExecutorType进行批量操作"},{header:"MyBatis中模糊查询LIKE的三种方式",slug:"mybatis中模糊查询like的三种方式",content:""},{header:"Mybatis一对多查询",slug:"mybatis一对多查询",content:""},{header:"mybatis-plus分页查询三种方法",slug:"mybatis-plus分页查询三种方法",content:""},{header:"mybatis-plus 查询传入参数Map，返回List＜Map＞",slug:"mybatis-plus-查询传入参数map-返回list-map",content:""},{header:"MyBatis中@MapKey使用详解",slug:"mybatis中-mapkey使用详解",content:""},{header:"reference",slug:"reference",content:`myBatis
MyBatis笔记
myBatisPlus`}]},{path:"/java/mybatis-spring.html",title:"MyBatis-Spring",pathLocale:"/",contents:[{header:"MyBatis-Spring",slug:"mybatis-spring",content:`MyBatis-Spring 会帮助你将 MyBatis 代码无缝地整合到 Spring 中。它将允许 MyBatis 参与到 Spring 的事务管理之中，创建映射器 mapper 和 SqlSession 并注入到 bean 中，以及将
Mybatis 的异常转换为 Spring 的 DataAccessException
maven依赖 <dependency> <groupId>org.mybatis</groupId> <artifactId>mybatis-spring</artifactId> <version>2.0.7</version>
</dependency>`},{header:"数据库连接池",slug:"数据库连接池",content:`Java应用程序开发时，常用的连接池有C3P0、DBCP、HikariCP、Druid等。
springboot2.x之后，系统的默认数据源由原来的的org.apache.tomcat.jdbc.pool.DataSource更改为com.zaxxer.hikari.HikariDataSource。
数据库连接池负责分配、管理和释放数据库连接，它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个。
不使用连接池流程，以访问MySQL为例，执行一个SQL命令，如果不使用连接池，需要经过哪些流程 TCP建立连接的三次握手
MySQL认证的三次握手
真正的SQL执行
MySQL的关闭
TCP的四次握手关闭`}]},{path:"/java/shiro.html",title:"shiro",pathLocale:"/",contents:[{header:"Apache Shiro Terminology",slug:"apache-shiro-terminology",content:`Apache Shiro is a powerful and flexible open-source security framework that cleanly handles authentication, **
authorization**, enterprise session management and cryptography.Shiro’s architecture has 3 primary concepts: the
Subject, SecurityManager and Realms Subject: anything that is currently interacting with the software. Subject instances are all bound to (and require) a
SecurityManager. When you interact with a Subject, those interactions translate to subject-specific interactions with
the SecurityManager. SecurityManager: The SecurityManager is the heart of Shiro’s architecture, it is important to realize that when you
interact with a Subject, it is really the SecurityManager behind the scenes that does all the heavy lifting for any
Subject security operation. Realms: Realms act as the ‘bridge’ or ‘connector’ between Shiro and your application’s security data. In this sense a
Realm is essentially a security-specific DAO: it encapsulates connection details for data sources and makes the
associated data available to Shiro as needed. When configuring Shiro, you must specify at least one Realm to use for
authentication and/or authorization. The SecurityManager may be configured with multiple Realms, but at least one is
required. Authentication: Authentication is the process of verifying a Subject’s identity Authorization: Authorization, also known as Access Control, is the process of determining if a user/Subject is allowed
to do something or not Cipher: A cipher is an algorithm for performing encryption or decryption. Credential A Credential is a piece of information(such as a password or a PGP key) that verifies the identity of a
user/Subject. One (or more) credentials are submitted along with Principal(s) during an authentication attempt to
verify that the user/Subject submitting them is actually the associated user. Cryptography: Cryptography is the practice of protecting information from undesired access by hiding it or converting
it into nonsense so no one else can read it. Shiro focuses on two core elements of Cryptography: ciphers that encrypt
data like email using a public or private key, and hashes (aka message digests) that irreversibly encrypt data like
passwords. Hash: A Hash function is a one-way, irreversible conversion of an input source, sometimes called the message, into an
encoded hash value, sometimes called the message digest. It is often used for passwords, digital fingerprints, or data
with an underlying byte array. Principal: A Principal is any identifying attribute of an application user (Subject) (a username, a surname, a given
name, a social security number, a user ID) Session: A Session is a stateful data context associated with a single user/Subject who interacts with a software
system over a period of time.Sessions are terminated when the user/Subject logs out of the application or when it
times out due to inactivity.`},{header:"Shiro api",slug:"shiro-api",content:`Subject currentUser = SecurityUtils.getSubject(); // 获取当前用户
Session session = currentUser.getSession(); // 获取当前会话
currentUser.isAuthenticated() // 当前用户是否已经认证过
UsernamePasswordToken token = new UsernamePasswordToken("lee", "123456");
currentUser.login(token); // 登录
currentUser.getPrincipal(); // print their identifying principal (in this case, a username)
currentUser.hasRole("admin");
currentUser.isPermitted("sys:getUsers");
currentUser.logout(); //removes all identifying information and invalidates their session too`},{header:"Authentication|Authorization Guide with Apache Shiro",slug:"authentication-authorization-guide-with-apache-shiro",content:`step1: Collect the subject’s principals and credentials
step2: Submit the principals and credentials to an authentication system.
step3: Allow access, retry authentication, or block access UsernamePasswordToken token = new UsernamePasswordToken(username, password); // step1
// step2: Authenticate the subject by passing the user name and password token into the login method
Subject currentUser = SecurityUtils.getSubject();
currentUser.login(token);
try { currentUser.login(token); // step3 if (currentUser.hasRole("administrator")) { // show a special button } else { // don’t show the button }
} catch ( AuthenticationException ae ) { //unexpected error
}`},{header:"Realm Authentication",slug:"realm-authentication",content:""},{header:"Handling supported AuthenticationTokens",slug:"handling-supported-authenticationtokens",content:`a Realm supports a submitted AuthenticationToken, the Authenticator will call the
Realm’s getAuthenticationInfo(token) method. This effectively represents an authentication attempt with the Realm’s
backing data source. The method, in order: Inspects the token for the identifying principal (account identifying information) Based on the principal, looks up corresponding account data in the data source Ensures that the token’s supplied credentials matches those stored in the data store If the credentials match, an AuthenticationInfo instance is returned that encapsulates the account data in a format
Shiro understands If the credentials DO NOT match, an AuthenticationException is thrown Implementing Realm interface directly might be time consuming and error prone. Most people choose to subclass the
AuthorizingRealm abstract class instead of starting from scratch. This class implements common authentication and
authorization workflow to save you time and effort.`},{header:"Credentials Matching",slug:"credentials-matching",content:""},{header:"integrate shiro with Spring boot",slug:"integrate-shiro-with-spring-boot",content:`<dependency> <groupId>org.apache.shiro</groupId> <artifactId>shiro-spring-boot-web-starter</artifactId> <version>1.10.1</version>
</dependency> In a web application, all Shiro-accessible web requests must go through a main Shiro Filter.This filter itself is
extremely powerful, allowing for ad-hoc custom filter chains to be executed based on any URL path expression.`}]},{path:"/java/springBoot.html",title:"springBoot",pathLocale:"/",contents:[{header:"FAQ",slug:"faq",content:`使用SpringBoot时关于静态资源的访问问题 # 项目路径
server.servlet.context-path=/test-demo
# 静态资源配置
spring.mvc.static-path-pattern=/static/** # 访问地址 http://server:port/test-demo/static/xxx.jpg 解决决SpringBoot图片上传需重启服务器才能显示的问题 // 前端页面实现头像图片上传并实时更新显示的功能，但是文件上传成功后不能实时显示，必须重启服务器后才能显示出来
// 这是服务器的自我保护机制，为了防止暴露绝对路径
@Configuration
public class ImageUploadConfig implements WebMvcConfigurer { @Override public void addResourceHandlers(ResourceHandlerRegistry registry) { registry.addResourceHandler("/static/images/upload/**").addResourceLocations("file:E:\\\\Allworkspaces\\\\idea-workspace\\\\SpringBoot\\\\store\\\\src\\\\main\\\\resources\\\\static\\\\images\\\\upload\\\\"); }
} mybatis sql 日志打印 mybatis/mybatis-plus 日志打印配置：这两个需要通过配置 mybatis日志输出
,或者配置 mybatis-plus
日志输出，最终都是配置 mybatis
来输出日志，详细的配置可以参考 How Does Mybatis-Plus Print SQL Logs and Parameters To The Log File Under SpringBoot #springBoot mybatis-plus配置
logging.level.com.baomidou.mybatisplus=DEBUG #Project mapper directory
logging.level.com.dragonsoft.demojar.mapper=DEBUG
mybatis-plus.configuration.log-impl=org.apache.ibatis.logging.slf4j.Slf4jImpl Show Hibernate/JPA SQL Statements from Spring Boot Spring Data JDBC,Java为关系数据库定义了一套标准的访问接口：JDBC（Java Database Connectivity）
,JDBC接口是Java标准库自带的,可以直接编译,具体的JDBC驱动是由数据库厂商提供的，例如，MySQL的JDBC驱动由Oracle提供。因此，访问某个具体的数据库，我们只需要引入该厂商提供的JDBC驱动，就可以通过JDBC接口来访问，这样保证了Java程序编写的是一套数据库访问代码，却可以访问各种不同的数据库，因为他们都提供了标准的JDBC驱动.实际上，一个MySQL的JDBC的驱动就是一个jar包，它本身也是纯Java编写的。我们自己编写的代码只需要引用Java标准库提供的java.sql包下面的相关接口，由此再间接地通过MySQL驱动的jar包通过网络访问MySQL服务器，所有复杂的网络通讯都被封装到JDBC驱动中，因此，Java程序本身只需要引入一个MySQL驱动的jar包就可以正常访问MySQL服务器
Spring Data JPA, makes it easy to easily implement JPA-based (Java Persistence API) repositories. JPA就是JavaEE的一个
ORM 标准，它的实现其实和 Hibernate 没啥本质区别，但是用户如果使用JPA，那么引用的就是jakarta.persistence这个“标准”包，而不是org.hibernate
这样的第三方包。因为JPA只是接口，所以，还需要选择一个实现产品，跟JDBC接口和MySQL驱动一个道理。 我们使用JPA时也完全可以选择 Hibernate
作为底层实现，但也可以选择其它的JPA提供方，比如 EclipseLink。Spring内置了JPA的集成，并支持选择 Hibernate 或 EclipseLink 作为实现 #To Standard Output spring.jpa.show-sql=true spring.jpa.properties.hibernate.format_sql=true #Via Loggers logging.level.org.hibernate.SQL=DEBUG logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE #Logging JdbcTemplate Queries logging.level.org.springframework.jdbc.core.JdbcTemplate=DEBUG logging.level.org.springframework.jdbc.core.StatementCreatorUtils=TRACE mybatis mapper xml 字段和表自动提示
spring boot 配置项查看 spring-boot 文档以及配置项`}]},{path:"/js_basic/Js%E5%9F%BA%E7%A1%80.html",title:"js基础",pathLocale:"/",contents:[{header:"Object.create(null)",slug:"object-create-null",content:`A javascript object inherits from Object by default, unless you explicitly create it with null as its prototype,
like: Object.create(null).
{} would instead be equivalent to Object.create(Object.prototype). In Chrome Devtool you can see
that Object.create(null) has no __proto__ property, while {} does.`},{header:"class",slug:"class",content:`类初始化过程 创建一个名为 User 的函数，该函数成为类声明的结果。该函数的代码来自于 constructor 方法（如果我们不编写这种方法，那么它就被假定为空）。
原型方法用于继承：存储类中的方法，例如 User.prototype 中的 sayName。
为每个实例创建的方法，原型链中不存在，使用箭头函数书写，可以防止 this 丢失的问题,例如 sayAge 方法.在这里对于每一个 User 对象都有一个独立的方法，在内部都有一个指向此对象的 this
为每个实例创建 类字段 属性,存在于该实例上，原型链中不存在 class User { constructor(name) { this.name = name; } // 类字段”是一种允许添加任何属性的语法 age = 22 sayName() { alert(this.name); } sayAge() { alert(this.age); } // 计算属性名称 ['say' + 'Hi']() { alert("Hello"); } get name() { return this._name; } set name(value) { if (value.length < 4) { alert("Name is too short."); return; } this._name = value; }
}`},{header:"Nullish coalescing operator (??)",slug:"nullish-coalescing-operator",content:`The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand
side operand is null or undefined, and otherwise returns its left-hand side operand.
const foo = null ?? 'default string'; // expected output: "default string"
const baz = 0 ?? 42; // expected output: 0`},{header:"数字转化，一元运算符 +",slug:"数字转化-一元运算符",content:`一元运算符加号，或者说，加号 + 应用于单个值，对数字没有任何作用。但是如果运算元不是数字，加号 + 则会将其转化为数字。它的效果和 Number(...) 相同，但是更加简短。
// 转化非数字
alert(+true); // 1
alert(+""); // 0
let apples = "2";
let oranges = "3";
alert(+apples + +oranges); // 5`},{header:"赋值 = 运算符",slug:"赋值-运算符",content:`在 JavaScript 中，所有运算符都会返回一个值。这对于 + 和 - 来说是显而易见的，但对于 = 来说也是如此。 语句 x = value 将值 value 写入 x 然后返回 x。
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert(a); // 3
alert(c); // 0`},{header:"逗号运算符",slug:"逗号运算符",content:`逗号运算符能让我们处理多个语句，使用 , 将它们分开。每个语句都运行了，但是只有最后的语句的结果会被返回。 请注意逗号运算符的优先级非常低，比 = 还要低，因此下面的例子中圆括号非常重要。
let a = (1 + 2, 3 + 4);
alert(a); // 7（3 + 4 的结果） // 有时候，人们会使用它把几个行为放在一行上来进行复杂的运算。
for (a = 1, b = 3, c = a * b; a < 10; a++) {
// ...
}`},{header:"值的比较",slug:"值的比较",content:`不同类型间的比较: 当对不同类型的值进行比较时，JavaScript 会首先将其转化为数字（number）再判定大小。
alert('2' > 1); // true，字符串 '2' 会被转化为数字 2
alert('01' == 1); // true，字符串 '01' 会被转化为数字 1
// 对于布尔类型值，true 会被转化为 1、false 转化为 0
alert(true == 1); // true
alert(false == 0); // true
普通的相等性检查 == 存在一个问题，它不能区分出 0 和 false,也同样无法区分空字符串和 false， 这是因为在比较不同类型的值时，处于相等判断符号 == 两侧的值会先被转化为数字。空字符串
和 false
也是如此，转化后它们都为数字 0。 因此实际运用中大多数使用严格相等运算符 === ，它在进行比较时不会做任何的类型转换。
alert(0 == false); // true
alert('' == false); // true`},{header:"对 null 和 undefined 进行比较",slug:"对-null-和-undefined-进行比较",content:`alert(null == undefined); // true (非严格相等模式下两者相等)
alert(null === undefined); // false
当使用数学式或其他比较方法 < > <= >= 时：
null/undefined 会被转化为数字：null 被转化为 0，undefined 被转化为 NaN。`},{header:"奇怪的结果：null vs 0",slug:"奇怪的结果-null-vs-0",content:`相等性检查 == 和普通比较符 > < >= <= 的代码逻辑是相互独立的。进行值的比较时，null 会被转化为数字，因此它被转化为了 0.
另一方面，undefined 和 null 在相等性检查 == 中不会进行任何的类型转换，它们有自己独立的比较规则，所以除了它们之间互等外，不会等于任何其他的值。 alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true`},{header:"特立独行的 undefined",slug:"特立独行的-undefined",content:`(1) 和 (2) 都返回 false 是因为 undefined 在比较中被转换为了 NaN，而 NaN 是一个特殊的数值型值，它与任何值进行比较都会返回 false。
(3) 返回 false 是因为这是一个相等性检查，而 undefined 只与 null 相等，不会与其他值相等
alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)`},{header:"? 的非常规使用",slug:"的非常规使用",content:`// 问号 ? 的作用是根据条件返回一个或另一个值
// 在这里我们不是把结果赋值给变量。而是根据条件执行不同的代码。
(company == 'Netscape') ? alert('Right!') : alert('Wrong.');`},{header:"或运算寻找第一个真值",slug:"或运算寻找第一个真值",content:`或运算符 || 做了如下的事情： 从左到右依次计算操作数。
处理每一个操作数时，都将其转化为布尔值。如果结果是 true，就停止计算，返回这个操作数的初始值。
如果所有的操作数都被计算过（也就是，转换结果都是 false），则返回最后一个操作数。 返回的值是操作数的初始形式，不会做布尔转换。换句话说，一个或运算 || 的链，将返回第一个真值，如果不存在真值，就返回该链的最后一个值。
result = value1 || value2 || value3;
alert(undefined || null || 0); // 0（都是假值，返回最后一个值）
或运算符 || 的另一个用途是所谓的“短路求值”,人们利用这个特性，只在左侧的条件为假时才执行命令。
true || alert("not printed"); // 这个alert不会执行
false || alert("printed"); // 这个alert会执行`},{header:"与运算寻找第一个假值",slug:"与运算寻找第一个假值",content:`与运算 && 做了如下的事: 从左到右依次计算操作数。
在处理每一个操作数时，都将其转化为布尔值。如果结果是 false，就停止计算，并返回这个操作数的初始值。
如果所有的操作数都被计算过（例如都是真值），则返回最后一个操作数。 换句话说，与运算返回第一个假值，如果没有假值就返回最后一个值
result = value1 && value2 && value3;
alert(1 && 2 && null && 3); // null
alert(1 && 2 && 3); // 3，最后一个值
与运算 && 的优先级比或运算 || 要高。 所以代码 a && b || c && d 跟 && 表达式加了括号完全一样：(a && b) || (c && d)。`},{header:"!（非）",slug:"非",content:`两个非运算 !! 有时候用来将某个值转化为布尔类型(它的作用和内建的 Boolean 函数作用是一样的). 第一个非运算将该值转化为布尔类型并取反，第二个非运算再次取反。最后我们就得到了一个任意值到布尔值的转化
非运算符 !
的优先级在所有逻辑运算符里面最高，所以它总是在 && 和 || 之前执行。`},{header:"?? vs ||",slug:"vs",content:`|| 返回第一个 真 值; ?? 返回第一个 已定义的 值。|| 无法区分 false、0、空字符串 和 null/undefined。它们都一样 —— 假值（falsy values）
let height = 0;
// 高度 0 通常是一个有效值，它不应该被替换为默认值
alert(height || 100); // 100
alert(height ?? 100); // 0`},{header:"循环：while 和 for",slug:"循环-while-和-for",content:""},{header:"省略语句段",slug:"省略语句段",content:`for 循环的任何语句段都可以被省略,例如，如果我们在循环开始时不需要做任何事，我们就可以省略 begin 语句段
let i = 0; // 我们已经声明了 i 并对它进行了赋值
for (; i < 3; i++) { // 不再需要 "begin" 语句段 alert(i); // 0, 1, 2
}
我们也可以移除 step 语句段：
let i = 0;
for (; i < 3;) { alert(i++);
}
实际上我们可以删除所有内容，从而创建一个无限循环
for (; ;) { // 无限循环
}`},{header:"break/continue 标签",slug:"break-continue-标签",content:"有时候我们需要一次从多层嵌套的循环中跳出来。\nouter: for (let i = 0; i < 3; i++) { for (let j = 0; j < 3; j++) { let input = prompt(`Value at coords (${i},${j})`, ''); // 如果是空字符串或被取消，则中断并跳出这两个循环。执行 alert('Done!') // 如果不加标签，则只能跳出内层循环 if (!input) break outer; // (*) // 用得到的值做些事…… }\n}\nalert('Done!');"},{header:"前缀 ++ vs 后置 ++",slug:"前缀-vs-后置",content:`// 前缀形式 ++i
let i = 0;
while (++i < 5) alert(i); // 输出从 1 到 4 (因为 ++i 首先递增 i 然后返回新值和5进行比较)
// 后缀形式 i++
let i = 0;
while (i++ < 5) alert(i);// 输出从 1 到 5 (后缀形式 i++ 递增 i 然后返回 旧 值和5进行比较）)`},{header:"jsDoc",slug:"jsdoc",content:`Tag Description @author Developer's name
@constructor Marks a function as a constructor
@deprecated Marks a method as deprecated
@exception Synonym for @throws
@exports Identifies a member that is exported by the module
@param Documents a method parameter; a datatype indicator can be added between curly braces
@private Signifies that a member is private
@returns Documents a return value
@return Synonym for @returns
@see Documents an association to another object
@todo Documents something that is missing/open
@this Specifies the type of the object to which the keyword this refers within a function.
@throws Documents an exception thrown by a method
@version Provides the version number of a library`},{header:"Transpilers vs Polyfills",slug:"transpilers-vs-polyfills",content:`Babel 是最著名的转译器之一 两个有趣的 polyfill 库： core js 支持了很多特性，允许只包含需要的特性。
polyfill.io 提供带有 polyfill 的脚本的服务，具体取决于特性和用户的浏览器。 // 在运行转译器之前
height = height ?? 100;
// 在运行转译器之后
height = (height !== undefined && height !== null) ? height : 100;`},{header:"对象",slug:"对象",content:`我们可以用下面两种语法中的任一种来创建一个空的对象
let user = new Object(); // “构造函数” 的语法
let user = {}; // “字面量” 的语法
// 可以用多字词语来作为属性名，但必须给它们加上引号
let user1 = { name: "John", age: 30, "likes birds": true // 多词属性名必须加引号
};
// 以用 delete 操作符移除属性
delete user1.age
// 列表中的最后一个属性应以逗号结尾，这叫做尾随（trailing）或悬挂（hanging）逗号。这样便于我们添加、删除和移动属性
let user2 = { name: "John", age: 30,
}
当创建一个对象时，我们可以在对象字面量中使用方括号。这叫做 计算属性。 当用其他类型作为属性名时候，属性名会被自动地转换为字符串例如，当数字 0 被用作对象的属性的键时，会被转换为字符串 "0"`},{header:"属性存在性测试，“in” 操作符",slug:"属性存在性测试-in-操作符",content:`语法： "key" in object , 请注意，in 的左边必须是 属性名。通常是一个带引号的字符串。
let user = {name: "John", age: 30};
alert("age" in user); 为了遍历一个对象的所有键（key），可以使用一个特殊形式的循环,“for…in” 循环
for (let key in user) { alert(key); // name, age, isAdmin
}
对象有顺序吗？换句话说，如果我们遍历一个对象，我们获取属性的顺序是和属性添加时的顺序相同吗？ 简短的回答是：“有特别的顺序”：整数属性会被进行排序，其他属性则按照创建的顺序显示`},{header:"Promise",slug:"promise",content:""},{header:"Thenables",slug:"thenables",content:`JavaScript引擎 检查在 (*) 行中由 .then 处理程序（handler）返回的对象：如果它具有名为 then 的可调用方法，那么它将调用该方法并提供 JavaScript
原生的函数 resolve 和 reject 作为参数（类似于
executor），并等待直到其中一个函数被调用。在上面的示例中，resolve(2) 在 1 秒后被调用 (**)。然后，result 会被进一步沿着链向下传递。
这个特性允许我们将自定义的对象与 promise 链集成在一起，而不必继承自 Promise。
class Thenable { constructor(num) { this.num = num; } then(resolve, reject) { alert(resolve); // function() { native code } // 1 秒后使用 this.num*2 进行 resolve setTimeout(() => resolve(this.num * 2), 1000); // (**) }
} new Promise(resolve => resolve(1)) .then(result => { return new Thenable(result); // (*) }) .then(alert); // 1000ms 后显示 2`},{header:"continue 用法",slug:"continue-用法",content:"continue 可以用于跳出 for | for...in | for...of 循环中符合条件的单次循环，进行下一次循环"},{header:"构造器和操作符 new",slug:"构造器和操作符-new",content:`构造函数在技术上是常规函数,不过有两个约定,它们的命名以大写字母开头;它们只能由 new 操作符 来执行。当一个函数被使用 new 操作符执行时: 一个新的空对象被创建并分配给 this。
函数体执行。通常它会修改 this，为其添加新的属性。
返回 this 的值。 构造器的主要目的就是， 实现可重用的对象创建代码，从技术上讲，任何函数（除了箭头函数，它没有自己的 this）都可以用作构造器。即可以通过 new 来运行. 在一个函数内部，我们可以使用 new.target
属性来检查它是否被使用 new 进行调用了.
如下方法有时被用在库中以使语法更加灵活。这样人们在调用函数时，无论是否使用了 new，程序都能工作
// 如果你没有通过 new 运行我,我会给你添加 new
function User(name) { if (!new.target) { return new User(name); } this.name = name;
}
通常，构造器没有 return 语句。 但是，如果这有一个 return 语句,则 如果 return 返回的是一个对象，则返回这个对象，而不是 this。
如果 return 返回的是一个原始类型，则忽略。 顺便说一下，如果没有参数，我们可以省略 new 后的括号
let user = new User; // <-- 没有参数
// 等同于
let user = new User();`},{header:"可选链",slug:"可选链",content:`如果可选链 ?. 前面的值为 undefined 或者 null，它会停止运算并返回 undefined。注意?. 前的变量必须已声明
let user = {}; // user 没有 address 属性
alert(user?.address?.street); // undefined（不报错）
可选链 ?. 不是一个运算符，而是一个特殊的语法结构。它还可以与函数和方括号一起使用。
let userAdmin = { admin() { alert("I am admin"); }
}; let userGuest = {}; userAdmin.admin?.(); // I am admin userGuest.admin?.(); // 啥都没有（没有这样的方法,不会报错） let key = "firstName"; let user1 = { firstName: "John"
}; let user2 = null;
alert(user1?.[key]); // John
alert(user2?.[key]);// undefined
// 我们还可以将 ?. 跟 delete 一起使用
delete user?.name; // 如果 user 存在，则删除 user.name
可选链 ?. 语法有三种形式 obj?.prop —— 如果 obj 存在则返回 obj.prop，否则返回 undefined。
obj?.[prop] —— 如果 obj 存在则返回 obj[prop]，否则返回 undefined。
obj.method?.() —— 如果 obj.method 存在则调用 obj.method()，否则返回 undefined`},{header:"对象包装器",slug:"对象包装器",content:`人们可能想对诸如字符串或数字之类的原始类型执行很多操作。最好使用方法来访问它们,为了使它们起作用，创建了提供额外功能的特殊“对象包装器”，使用后即被销毁。
对象包装器对于每种原始类型都是不同的，它们被称为 String、Number、Boolean、Symbol 和 BigInt
以下是 str.toUpperCase() 中实际发生的情况：
let str = "Hello";
alert(str.toUpperCase()); // HELLO
字符串 str 是一个原始值。因此，在访问其属性时，会创建一个包含字符串字面值的特殊对象，并且具有有用的方法，例如 toUpperCase()。 该方法运行并返回一个新的字符串（由 alert 显示）。
特殊对象被销毁，只留下原始值 str。JavaScript 引擎高度优化了这个过程。它甚至可能跳过创建额外的对象。但是它仍然必须遵守规范，并且表现得好像它创建了一样。
特殊的原始类型 null 和 undefined 是例外。它们没有对应的“对象包装器”，也没有提供任何方法。从某种意义上说，它们是“最原始的”。
我能为字符串添加一个属性吗？
let str = "Hello"; str.test = 5; alert(str.test);
根据你是否开启了严格模式 use strict，会得到如下结果：
非严格模式 :undefined
严格模式:报错
为什么？让我们看看在 (*) 那一行到底发生了什么：
当访问 str 的属性时，一个“对象包装器”被创建了。 在严格模式下，向其写入内容会报错。 否则，将继续执行带有属性的操作，该对象将获得 test 属性，但是此后，“对象包装器”将消失，因此在最后一行，str
并没有该属性的踪迹。`},{header:"js 中数字的写法",slug:"js-中数字的写法",content:`let billion = 1000000000;
// 也可以使用下划线 _ 作为分隔符
// JavaScript 引擎会直接忽略数字之间的 _
let billion = 1_000_000_000;
// 可以通过在数字后面附加字母 "e" 并指定零的个数来缩短数字
let billion = 1e9;
let mcs = 0.000001;
let mcs = 1e-6; 十六进制，二进制和八进制数字
let a = 0xff // 十六进制的 255
let a = 0b11111111; // 二进制形式的 255
let b = 0o377; // 八进制形式的 255
toString(base)
方法 num.toString(base) 返回在给定 base 进制数字系统中 num 的字符串表示形式。base 的范围可以从 2 到 36。默认情况下是 10
当我们需要将一个较长的数字标识符转换成较短的时候，例如做一个短的 URL。可以简单地使用基数为 36 的数字系统表示
123456..toString(36)
使用两个点来调用一个方法
请注意 123456..toString(36) 中的两个点不是打错了。如果我们想直接在一个数字上调用一个方法，比如上面例子中的 toString，那么我们需要在它后面放置两个点..。
如果我们放置一个点：123456.toString(36)，那么就会出现一个 error，因为 JavaScript 语法隐含了第一个点之后的部分为小数部分。如果我们再放一个点，那么 JavaScript 就知道**
小数部分为空**，现在使用该方法。 也可以写成 (123456).toString(36)。`},{header:"不精确的计算",slug:"不精确的计算",content:`一个数字以其二进制的形式存储在内存中，一个 1 和 0 的序列。但是在十进制数字系统中看起来很简单的 0.1，0.2 这样的小数，实际上在二进制形式中是无限循环小数。
0.1 就是 1 除以 10，1/10，即十分之一。在十进制数字系统中，这样的数字表示起来很容易。 使用二进制数字系统无法 精确 存储 0.1 或 0.2，就像没有办法将三分之一存储为十进制小数一样. 不仅仅是
JavaScript ,许多其他编程语言也存在同样的问题。
alert(0.1 + 0.2 == 0.3); // false
alert(0.1 + 0.2); // 0.30000000000000004
alert(9999999999999999); // 显示 10000000000000000
我们能解决这个问题吗？当然，最可靠的方法是借助方法 toFixed(n) 对结果进行舍入,请注意，toFixed 总是返回一个字符串`},{header:"方法借用-method borrowing",slug:"方法借用-method-borrowing",content:`我们从常规数组 [].join 中获取（借用）join 方法，并使用 [].join.call 在 arguments 的上下文中运行它。
function hash() { alert([].join.call(arguments)); // 1,2
} hash(1, 2);
它为什么有效？ 那是因为原生方法 arr.join(glue) 的内部算法非常简单。类似于调用 [1,2,3].join(),这里的 this 指向的是数组 [1,2,3],所以方法借用中只需要指定 this
上下文即可, join 方法工作机制如下 让 glue 成为第一个参数，如果没有参数，则使用逗号 ","。
让 result 为空字符串。
将 this[0] 附加到 result。
附加 glue 和 this[1]。
附加 glue 和 this[2]。
……以此类推，直到 this.length 项目被粘在一起。
返回 result 因此，从技术上讲，它需要 this 并将 this[0]，this[1] ……等 join 在一起。它的编写方式是故意允许任何类数组的 this
的（不是巧合，很多方法都遵循这种做法）。这就是为什么它也可以和 this=arguments
一起使用`},{header:"Function.prototype.apply",slug:"function-prototype-apply",content:`用 apply 将数组各项添加到另一个数组 我们可以使用 push 将元素追加到数组中。由于 push 接受可变数量的参数，所以也可以一次追加多个元素。 但是，如果 push
的参数是数组，它会将该数组作为单个元素添加，而不是将这个数组内的每个元素添加进去，因此我们最终会得到一个数组内的数组。如果不想这样呢？concat 符合我们的需求，但它并不是将元素添加到现有数组，而是创建并返回一个新数组。
然而我们需要将元素追加到现有数组 ，这里apply 正派上用场！
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
apply 接收的是一个数组或者类数组对象，但实际调用函数的时候是将数组或者类数组对象拆成逗号分割的参数传入方法中调用的， Function.prototype.call
则接收的是一组参数，调用的时候也是将其传入方法调用的，js内部对 apply 方法做了优化，同样的情况下，apply 性能比 call 好
apply 用例
间谍装饰器: 储存调用的参数
function spy(func) { function wrapper(...args) { wrapper.calls.push(args); return func.apply(this, args); } wrapper.calls = []; return wrapper;
}
延时装饰器
function delay(fn, delayTime) { return function (...args) { // 这里使用箭头函数来指向外层函数的this setTimeout(() => fn.apply(this, args), delayTime) }
}
防抖装饰器
debounce(f, ms) 装饰器的结果是一个包装器，该包装器将暂停对 f 的调用，直到经过 ms 毫秒的非活动状态（没有函数调用，“冷却期”），然后使用最新的参数调用 f 一次。举个例子，我们有一个函数
f，并将其替换为 f = debounce(f, 1000)。 然后，如果包装函数分别在 0ms、200ms 和 500ms 时被调用了，之后没有其他调用，那么实际的 f 只会在 1500ms
时被调用一次。也就是说：从最后一次调用开始经过 1000ms 的冷却期之后。
function debounce(func, ms) { let timeout; return function () { clearTimeout(timeout); timeout = setTimeout(() => func.apply(this, arguments), ms); };
}
节流装饰器
创建一个“节流”装饰器 throttle(f, ms) —— 返回一个包装器。 当被多次调用时，它会在每 ms 毫秒最多将调用传递给 f 一次。debounce
会在 冷却（cooldown）期后运行函数一次。适用于处理最终结果。 throttle 运行函数的频率不会大于所给定的时间 ms 毫秒。适用于不应该经常进行的定期更新。 节流函数第一次会立即调用，后续调用会间隔给定时间再次调用
function throttle(func, ms) { let isThrottled = false, savedArgs, savedThis; function wrapper() { if (isThrottled) { // (2) savedArgs = arguments; savedThis = this; return; } isThrottled = true; func.apply(this, arguments); // (1) setTimeout(function () { isThrottled = false; // (3) if (savedArgs) { wrapper.apply(savedThis, savedArgs); savedArgs = savedThis = null; } }, ms); } return wrapper;
}
调用 throttle(func, ms) 返回 wrapper。 1.在第一次调用期间，wrapper 只运行 func 并设置冷却状态（isThrottled = true）。
2.在这种状态下，所有调用都记忆在 savedArgs/savedThis 中。请注意，上下文和参数（arguments）同等重要，应该被记下来。我们同时需要他们以重现调用。
3.然后经过 ms 毫秒后，触发 setTimeout。冷却状态被移除（isThrottled = false），如果我们忽略了调用，则将使用最后记忆的参数和上下文执行 wrapper。
4.第 3 步运行的不是 func，而是 wrapper，因为我们不仅需要执行 func，还需要再次进入冷却状态并设置 timeout 以重置它`},{header:"递归和堆栈",slug:"递归和堆栈",content:`最大的嵌套调用次数（包括首次）被称为 递归深度
最大递归深度受限于 JavaScript 引擎。对我们来说，引擎在最大迭代深度为 10000 及以下时是可靠的，有些引擎可能允许更大的最大深度，但是对于大多数引擎来说，100000
可能就超出限制了。有一些自动优化能够帮助减轻这种情况（尾部调用优化），但目前它们还没有被完全支持，只能用于简单场景。
任何递归都可以用循环来重写。通常循环变体更有效。但有时重写很难，尤其是函数根据条件使用不同的子调用，然后合并它们的结果，或者分支比较复杂时。而且有些优化可能没有必要，完全不值得。递归可以使代码更短，更易于理解和维护。
斐波那契数 斐波那契数 序列有这样的公式： Fn = Fn-1 + Fn-2。换句话说，下一个数字是前两个数字的和。 编写一个函数 fib(n) 返回第 n 个斐波那契数,前两个数字都是 1
// 递归实现
function fib1(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2);
} // fib1(77); // 超级慢，不要尝试调用
// 循环实现
function fib2(n) { let a = 1; let b = 1; for (let i = 3; i <= n; i++) { let c = a + b; a = b; b = c; } return b;
} // fib2(77); // 很快
尾调用（tail call）”优化
尾调用的概念非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。 递归非常耗费内存，因为需要同时保存成千上百个调用记录，很容易发生"栈溢出"错误（stack overflow
）。但对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误。`},{header:"Rest 参数 ...",slug:"rest-参数",content:`Rest 参数可以通过使用三个点 ... 并在后面跟着包含剩余参数的数组名称，来将它们包含在函数定义中。这些点的字面意思是“将剩余参数收集到一个数组中”。Rest 参数必须放到参数列表的末尾
Spread 语法看起来和 rest 参数很像，也使用 ...，但是二者的用途完全相反
若 ... 出现在函数参数列表的最后，那么它就是 rest 参数，它会把参数列表中剩余的参数收集到一个数组中。
若 ... 出现在函数调用或类似的表达式中，那它就是 spread 语法，它会把一个数组展开为列表。`},{header:"变量作用域，闭包",slug:"变量作用域-闭包",content:`在 JavaScript 中，每个运行的函数，代码块 {...} 以及整个脚本，都有一个被称为 词法环境（Lexical Environment） 的内部（隐藏）的关联对象。词法环境对象由两部分组成： 环境记录（Environment Record） —— 一个存储所有局部变量作为其属性（包括一些其他信息，例如 this 的值）的对象。
对 外部词法环境 的引用，与外部代码相关联。 在一个函数运行时，在调用刚开始时，会自动创建一个新的词法环境以存储这个调用的局部变量和参数。在这个函数调用期间，我们有两个词法环境：内部一个（用于函数调用）和外部一个（全局） 当代码要访问一个变量时 ——
首先会搜索内部词法环境，然后搜索外部环境，然后搜索更外部的环境，以此类推，直到全局词法环境。
所有的函数在“诞生”时都会记住创建它们的词法环境。从技术上讲，这里没有什么魔法：所有函数都有名为 [[Environment]]
的隐藏属性，该属性保存了对创建该函数的词法环境的引用。
闭包：是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在其外部函数被返回（寿命终结）了之后。在某些编程语言中，这是不可能的，或者应该以特殊的方式编写函数来实现。在 JavaScript
中，所有函数都是天生闭包的（只有一个例外，将在 "new Function" 语法 中讲到）。 也就是说：JavaScript 中的函数会自动通过隐藏的 [[Environment]]
属性记住创建它们的位置，所以它们都可以访问外部变量。
function Counter() { let count = 0; this.up = function () { return ++count; }; this.down = function () { return --count; };
} let counter = new Counter();
console.log(counter.count) // undefined,new调用并不会生成 count 属性
alert(counter.up()); // 1 ，counter.up函数生成时候在词法环境中保存了count
alert(counter.up()); // 2
alert(counter.down()); // 1
按字段排序
let users = [ {name: "John", age: 20, surname: "Johnson"}, {name: "Pete", age: 18, surname: "Peterson"}, {name: "Ann", age: 19, surname: "Hathaway"}
]; function byField(fieldName) { return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
} users.sort(byField('name'));
users.sort(byField('age'));`},{header:'旧时的 "var"',slug:"旧时的-var",content:`用 var 声明的变量，不是函数作用域就是全局作用域。它们在代码块外也是可见的（译注：也就是说，var 声明的变量只有函数作用域和全局作用域，没有块级作用域）。
for (var i = 0; i < 10; i++) { var one = 1; // ...
} alert(i); // 10，"i" 在循环结束后仍可见，它是一个全局变量
alert(one); // 1，"one" 在循环结束后仍可见，它是一个全局变量
var 声明会被提升，但是赋值不会。 声明在函数刚开始执行的时候（“提升”）就被处理了，但是赋值操作始终是在它出现的地方才起作用
在浏览器中，使用 var（而不是 let/const！）声明的全局函数和变量会成为全局对象的属性
IIFE
在之前，JavaScript 中只有 var
这一种声明变量的方式，并且这种方式声明的变量没有块级作用域，程序员们就发明了一种模仿块级作用域的方法。这种方法被称为“立即调用函数表达式”（immediately-invoked function expressions，IIFE）。
请再注意一下：如今我们没有理由来编写这样的代码。
// 创建 IIFE 的方法
(function () { alert("Parentheses around the function");
})(); (function () { alert("Parentheses around the whole thing");
}()); !function () { alert("Bitwise NOT operator starts the expression");
}(); +function () { alert("Unary plus starts the expression");
}();`},{header:"函数对象",slug:"函数对象",content:`一个容易理解的方式是把函数想象成可被调用的“行为对象（action object）”。我们不仅可以调用它们，还能把它们当作对象来处理：增/删属性，按引用传递等。 属性 “name” 函数对象包含一些便于使用的属性。 function sayHi() { alert("Hi");
} alert(sayHi.name); // sayHi 属性 “length” 还有另一个内建属性 “length”，它返回函数入参的个数, 但是注意 rest 参数不参与计数 function f1(a) {
} function many(a, b, ...more) {
} alert(f1.length); // 2
alert(many.length); // 2
这种特别的情况就是所谓的 多态性 —— 根据参数的类型，或者根据在我们的具体情景下的 length 来做不同的处理。这种思想在 JavaScript 的库里有应用。
命名函数表达式
命名函数表达式（NFE，Named Function Expression），指带有名字的函数表达式的术语。它仍然是一个函数表达式。在 function 后面加一个名字 "func"
没有使它成为一个函数声明，因为它仍然是作为赋值表达式中的一部分被创建的。
// 普通的函数表达式
let sayHi = function (who) { alert(\`Hello, \${who}\`);
};
// 添加一个名字
let sayHi = function func(who) { alert(\`Hello, \${who}\`);
};
添加它的原因： 它允许函数在内部引用自己。
它在函数外是不可见的。 let sayHi = function func(who) { if (who) { alert(\`Hello, \${who}\`); } else { func("Guest"); // 使用 func 再次调用函数自身 }
}; func(); // Error, func is not defined（在函数外不可见）`},{header:"new Function 语法",slug:"new-function-语法",content:`let func = new Function ([arg1, arg2, ...argN], functionBody)
// 这三种变体语法形式也是可以的
new Function('a', 'b', 'return a + b'); // 基础语法
new Function('a,b', 'return a + b'); // 逗号分隔
new Function('a , b', 'return a + b'); // 逗号和空格分隔
该函数是通过使用参数 arg1...argN 和给定的 functionBody 创建的,与我们已知的其他方法相比，这种方法最大的不同在于，它实际上是通过运行时通过参数传递过来的字符串创建的,以前的所有声明方法都需要 ——
程序员，在脚本中编写函数的代码。 但是 new Function 允许我们将任意字符串变为函数。例如，我们可以从服务器接收一个新的函数并执行它
let str = \`动态地接收来自服务器的代码\`
let func = new Function(str);
func();
使用 new Function 创建函数的应用场景非常特殊，比如在复杂的 Web 应用程序中，我们需要从服务器获取代码或者动态地从模板编译函数时才会使用
通常，闭包是指使用一个特殊的属性 [[Environment]] 来记录函数自身的创建时的环境的函数。它具体指向了函数创建时的词法环境。 但是如果我们使用 new Function
创建一个函数，那么该函数的 [[Environment]] 并不指向当前的词法环境，而是指向全局环境。 因此，此类函数无法访问外部（outer）变量，只能访问全局变量。
function getFunc() { let value = "test"; let func = new Function('alert(value)'); // let func = function() { alert(value); }; //如果这样写就可以访问 return func;
} getFunc()(); // error: value is not defined`},{header:"调度：setTimeout 和 setInterval",slug:"调度-settimeout-和-setinterval",content:`let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
func|code 想要执行的函数或代码字符串。 一般传入的都是函数。由于某些历史原因，支持传入代码字符串，但是不建议这样做。
浏览器中的 setTimeout 方法有些特殊：它为函数调用设定了 this=window（注意 this 丢失的问题）
嵌套的 setTimeout
周期性调度有两种方式。一种是使用 setInterval，另外一种就是嵌套的 setTimeout 。 嵌套的 setTimeout 能够精确地设置两次执行之间的延时，而 setInterval 却不能。
let timerId = setTimeout(function tick() { alert('tick'); timerId = setTimeout(tick, 2000); // (*)
}, 2000);
嵌套的 setTimeout 要比 setInterval 灵活得多。采用这种方式可以根据当前执行结果来调度下一次调用，因此下一次调用可以与当前这一次不同
let delay = 5000;
let timerId = setTimeout(function request() { // ...发送请求... if (\`request failed due to server overload\`) { // 下一次执行的间隔是当前的 2 倍 delay *= 2; } timerId = setTimeout(request, delay);
}, delay);
使用 setInterval 时，func 函数的实际调用间隔要比代码中设定的时间间隔要短！这也是正常的，因为 func 的执行所花费的时间“消耗”了一部分间隔时间。假如时间间隔是 100ms ,也可能出现这种情况，就是
func 的执行所花费的时间比我们预期的时间更长，并且超出了 100 毫秒。 在这种情况下，JavaScript 引擎会等待 func 执行完成，然后检查调度程序，如果时间到了，则 立即
再次执行它。极端情况下，如果函数每次执行时间都超过 delay 设置的时间，那么每次调用之间将完全没有停顿。
嵌套的 setTimeout 就能确保延时的固定,不会出现上述情况
零延时的 setTimeout
这儿有一种特殊的用法：setTimeout(func, 0)，或者仅仅是 setTimeout(func)。
这样调度可以让 func 尽快执行。但是只有在当前正在执行的脚本执行完成后，调度程序才会调用它。 也就是说，该函数被调度在当前脚本执行完成“之后”立即执行。`},{header:"偏函数（Partial functions）",slug:"偏函数-partial-functions",content:`偏函数 : 我们通过绑定先有函数的一些参数来创建一个新函数。为什么我们通常会创建一个偏函数？
好处是我们可以创建一个具有可读性高的名字（double，triple）的独立函数。我们可以使用它，并且不必每次都提供一个参数，因为参数是被绑定了的。
Function.prototype.bind 不仅可以绑定 this, 还可以绑定 函数参数,bind 的完整语法如下:
let bound = func.bind(context, [arg1], [arg2], ...)
虽然很少这么做，但有时它可以派上用场。
function mul(a, b) { return a * b;
} let double = mul.bind(null, 2);
alert(double(3)); // = mul(2, 3) = 6
对 mul.bind(null, 2) 的调用创建了一个新函数 double，它将调用传递到 mul，将 null 绑定为上下文，并将 2 绑定为第一个参数。并且，参数（arguments）均被“原样”传递。
又一个偏函数的实现（在没有上下文情况下的 partial）
function partial(func, ...argsBound) { return function (...args) { // (*) return func.call(this, ...argsBound, ...args); }
} // 用法：
let user = { firstName: "John", say(time, phrase) { alert(\`[\${time}] \${this.firstName}: \${phrase}!\`); }
}; // 为user添加一个带有绑定时间的 sayNow 偏函数方法
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes()); user.sayNow("Hello");
// 类似于这样的一些内容：
// [10:00] John: Hello!
一个函数不能被重绑定（re-bound）
function f() { alert(this.name);
} f = f.bind({name: "John"}).bind({name: "Ann"}); f(); // John
箭头函数 VS bind
箭头函数 => 和使用 .bind(this) 调用的常规函数之间有细微的差别： .bind(this) 创建了一个该函数的“绑定版本”。
箭头函数 => 没有创建任何绑定。箭头函数只是没有 this。this 的查找与常规变量的搜索方式完全相同：在外部词法环境中查找。`},{header:"属性标志和属性描述符",slug:"属性标志和属性描述符",content:`对象属性（properties），除 value 外，还有三个特殊的特性（attributes），也就是所谓的“标志”： writable — 如果为 true，则值可以被修改，否则它是只可读的。
enumerable — 如果为 true，则会被在循环中列出，否则不会被列出。
configurable — 如果为 true，则此属性可以被删除，这些特性也可以被修改，否则不可以。 当我们用“常用的方式”创建一个属性时，它们都为 true。但我们也可以随时更改它们。Object.getOwnPropertyDescriptor 方法允许查询有关属性的 完整 信息
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName)
为了修改标志，我们可以使用
Object.defineProperty(obj, propertyName, descriptor)
如下例子中，只在严格模式下会出现 Errors 在非严格模式下，在对不可写的属性等进行写入操作时，不会出现错误。但是操作仍然不会成功。在非严格模式下，违反标志的行为（flag-violating action）只会被默默地忽略掉
let user = { name: "John"
}; Object.defineProperty(user, "name", { writable: false
}); user.name = "Pete"; // Error: Cannot assign to read only property 'name'
不可配置标志（configurable:false）有时会预设在内建对象和属性中,比如， 开发人员无法修改 Math.PI的值或覆盖它; 请注意：configurable: false 防止更改和删除
属性标志，但是允许更改对象的值(value属性)。
let user = { name: "John"
}; Object.defineProperty(user, "name", { configurable: false
}); user.name = "Pete"; // 正常工作
delete user.name; // Error
要一次获取所有属性描述符，我们可以使用 Object.getOwnPropertyDescriptors(obj) 方法。 有一个方法 Object.defineProperties(obj, descriptors)
，允许一次定义多个属性。`},{header:"对象属性的 getter 和 setter",slug:"对象属性的-getter-和-setter",content:`访问器属性（accessor properties）。它们本质上是用于获取和设置值的函数，但从外部代码来看就像常规属性。访问器属性由 getter 和 setter 方法表示。在对象字面量中，它们用 get
和 set 表示
let user = { name: "John", surname: "Smith", get fullName() { return \`\${this.name} \${this.surname}\`; }, set fullName(value) { [this.name, this.surname] = value.split(" "); }
};
user.fullName = "Alice Cooper";
alert(user.name); // Alice
alert(user.surname); // Cooper
访问器属性的描述符与数据属性的不同,对于访问器属性，没有 value 和 writable，但是有 get 和 set 函数。所以访问器描述符可能有： get —— 一个没有参数的函数，在读取属性时工作.
set —— 带有一个参数的函数，当属性被设置时调用.
enumerable —— 与数据属性的相同.
configurable —— 与数据属性的相同. let user = { name: "John", surname: "Smith"
}; Object.defineProperty(user, 'fullName', { get() { return \`\${this.name} \${this.surname}\`; }, set(value) { [this.name, this.surname] = value.split(" "); }
});
请注意，一个属性要么是访问器（具有 get/set 方法），要么是数据属性（具有 value），但不能两者都是`},{header:"创建包含N个空对象的数组",slug:"创建包含n个空对象的数组",content:`// 注意：这种创建出来的 students 共享一个对象
const students1 = Array(3).fill({})
// students2 是 [ <3 empty items> ]
// 对于数组中并不存在的单元, map() 也是束手无策
const students2 = Array(3).map(() => ({}));
// 下面这两种写法可以
const students3 = Array(3).fill(undefined).map(() => ({}));
const students4 = Array.apply(null, {length: 3}).map(() => ({}))`}]},{path:"/js_basic/browser.html",title:"browser && devtools",pathLocale:"/",contents:[{header:"Reference",slug:"reference",content:`modern web browser
Chrome devtools
Browser Compositor Thread
Video:Improving Load Performance - Chrome DevTools 101
-The Browser Process Model`}]},{path:"/js_basic/coordinates.html",title:"坐标",pathLocale:"/",contents:[{header:"window",slug:"window",content:`window.scrollY: the number of pixels that the
document is currently scrolled vertically.
window.scrollX: the number of pixels that the
document is currently scrolled horizontally
window.pageYOffset: an alias for window.scrollY
window.pageXOffset : an alias for
window.scrollX // 获取元素相对于文档的坐标
function getCoords(elem) { let box = elem.getBoundingClientRect(); return { top: box.top + window.pageYOffset, left: box.left + window.pageXOffset };
}`},{header:"窗口 vs 文档",slug:"窗口-vs-文档",content:""},{header:"窗口的 width/height",slug:"窗口的-width-height",content:`documentElement.clientHeight/documentElement.clientWidth: 没有滚动条（减去它）的 width/height
window.innerWidth/innerHeight: 包括了滚动条`},{header:"文档的 width/height",slug:"文档的-width-height",content:`理论上讲，由于根文档元素是 document.documentElement，并且它包围了所有内容，因此我们可以通过使用 documentElement.scrollWidth/scrollHeight
来测量文档的完整大小。但是会有浏览器兼容性问题
为了可靠地获得完整的文档高度，我们应该采用以下这些属性的最大值
let scrollHeight = Math.max( document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight
); DOM 元素的当前滚动状态在其 scrollLeft/scrollTop 属性中, 但在较旧的基于 WebKit 的浏览器中则不行,幸运的是,我们可以从 window.pageXOffset/pageYOffset
中获取页面当前滚动信息， 也可以从 window 的 scrollX 和 scrollY 属性中获取滚动信息`},{header:"滚动的实现方式：",slug:"滚动的实现方式",content:`可以通过更改 scrollTop/scrollLeft 来滚动常规元素
window.scrollBy(x,y): 将页面滚动至 相对于当前位置的 (x, y)
window.scrollTo(pageX,pageY): 将页面滚动至 绝对坐标 (pageX, pageY)
elem.scrollIntoView(top=true): 滚动页面以使 elem 可见 禁止滚动：只需要设置 document.body.style.overflow = "hidden", 使用 document.body.style.overflow = '' 恢复滚动, 这个方法的缺点是会使滚动条消失,
页面布局会变动，我们可以在 document.body 中滚动条原来的位置处通过添加 padding，来替代滚动条， 这样这个问题就解决了`},{header:"元素尺寸",slug:"元素尺寸",content:`offsetParent 是最接近的祖先（ancestor），在浏览器渲染期间，它被用于计算坐标,最近的祖先为下列之一： CSS 定位的（position 为 absolute、relative、fixed 或 sticky），
或 <td>，<th>，<table>，
或 <body> 有以下几种情况下,offsetParent 的值为 null： 对于未显示的元素（display:none 或者不在文档中）。
对于 <body> 与 <html>。
对于带有 position:fixed 的元素 offsetLeft/offsetTop: 提供相对于 offsetParent 左上角的 x/y 坐标 offsetWidth/Height: 元素的“外部” width/height。或者，换句话说，它的完整大小（包括边框） 如果一个元素（或其任何祖先）具有 display:none 或不在文档中，则所有几何属性均为零（或 offsetParent 为 null），例如，当我们创建了一个元素，但尚未将其插入文档中，或者它（或它的祖先）具有
display:none 时，offsetParent 为 null，并且 offsetWidth 和 offsetHeight 为 0 // 可以用它来检查一个元素是否被隐藏
// 对于会展示在屏幕上，但大小为零的元素，它们的 isHidden 返回 true
function isHidden(elem) { return !elem.offsetWidth && !elem.offsetHeight;
} clientTop/Left: 边框宽度,但准确地说 —— 这些属性不是边框的 width/height，而是内侧与外侧的相对坐标，当文档从右到左显示（操作系统为阿拉伯语或希伯来语）时，此时滚动条不在右边，而是在左边，此时
clientLeft 则包含了滚动条的宽度。 clientWidth/Height：包括了 “content width” 和 “padding”，但不包括滚动条宽度（scrollbar） scrollWidth/Height: 这些属性就像 clientWidth/clientHeight，但它们还包括滚动出（隐藏）的部分 scrollLeft/scrollTop: 属性 scrollLeft/scrollTop 是元素的隐藏、滚动部分的 width/height`},{header:"css width vs clientWidth",slug:"css-width-vs-clientwidth",content:`clientWidth 值是数值，而 getComputedStyle(elem).width 返回一个以 px 作为后缀的字符串。
getComputedStyle 可能会返回非数值的 width，例如内联（inline）元素的 "auto"。
clientWidth 是元素的内部内容区域加上 padding，而 CSS width（具有标准的 box-sizing）是内部内容区域，不包括 padding。
如果有滚动条，并且浏览器为其保留了空间，那么某些浏览器会从 CSS width 中减去该空间（因为它不再可用于内容），而有些则不会这样做。clientWidth 属性总是相同的：如果为滚动条保留了空间，那么将减去滚动条的大小。`},{header:"计算滚动条宽度",slug:"计算滚动条宽度",content:`function computeScrollBarWidth() { // 创建一个包含滚动条的 div const div = document.createElement('div'); div.style.overflowY = 'scroll'; div.style.width = '50px'; div.style.height = '50px';
// 必须将其放入文档（document）中，否则其大小将为 0 document.body.append(div); let scrollWidth = div.offsetWidth - div.clientWidth; div.remove(); return scrollWidth
}`},{header:"设置/重置样式",slug:"设置-重置样式",content:`方法一：设置为空字符串；如果我们将 style.display 设置为空字符串，那么浏览器通常会应用 CSS 类以及内建样式，就好像根本没有这样的 style.display 属性一样。 document.body.style.display = "none"; // 隐藏
setTimeout(() => document.body.style.display = "", 1000); // 恢复正常 方法二： elem.style.removeProperty('style property') document.body.style.background = 'red'; //将 background 设置为红色
setTimeout(() => document.body.style.removeProperty('background'), 1000);
批量设置属性 :可以通过设置一个特性（attribute）来实现同样的效果：div.setAttribute('style', 'color: red...')
document.body.setAttribute('style', 'color: #ccc!important;opacity:0.8')`},{header:"dom 节点操作",slug:"dom-节点操作",content:`插入 DOM 节点或文本片段 node.append(...nodes or strings) —— 在 node 末尾 插入节点或字符串
node.prepend(...nodes or strings) —— 在 node 开头 插入节点或字符串
node.before(...nodes or strings) —— 在 node 前面 插入节点或字符串
node.after(...nodes or strings) —— 在 node 后面 插入节点或字符串 将内容“作为 HTML 代码插入 elem.insertAdjacentHTML(where, html) "beforebegin" —— 将 html 插入到 elem 之前，
"afterbegin" —— 将 html 插入到 elem 开头，
"beforeend" —— 将 html 插入到 elem 末尾，
"afterend" —— 将 html 插入到 elem 之后。 节点克隆 调用 elem.cloneNode(true) 来创建元素的一个“深”克隆 —— 具有所有特性（attribute）和子元素。
如果我们调用 elem.cloneNode(false)，那克隆就不包括子元素 节点替换 node.replaceWith(...nodes or strings) —— 替换 node`},{header:"createTextNode vs innerHTML vs textContent",slug:"createtextnode-vs-innerhtml-vs-textcontent",content:"createTextNode 和 textContent 会将内容 “作为文本”添加到节点中；而 innerHTML 将内容“作为 HTML 代码插入”， 和 elem.insertAdjacentHTML 类似"},{header:"Attributes and properties",slug:"attributes-and-properties",content:`当浏览器加载页面时，它会“读取”（或者称之为：“解析”）HTML 并从中生成 DOM 对象。对于元素节点，大多数标准的 HTML 特性（attributes）会自动变成 DOM
对象的属性（properties）,但特性—属性映射并不是一一对应的
DOM 节点是常规的 JavaScript 对象。我们可以更改它们
document.body.myData = { name: 'Caesar', title: 'Imperator'
};
在 HTML 中，标签可能拥有特性（attributes）。当浏览器解析 HTML 文本，并根据标签创建 DOM 对象时，浏览器会辨别 标准的 特性并以此创建 DOM 属性，但是非 标准的 特性则不会。 HTML 特性有以下几个特征： 它们的名字是大小写不敏感的（id 与 ID 相同）。
它们的值总是字符串类型的 <body id="test" something="non-standard">
<script> alert(document.body.id); // test // 非标准的特性没有获得对应的属性, 可以通过 elem.getAttribute(name) 获取到 alert(document.body.something); // undefined
<\/script>
</body> elem.hasAttribute(name) —— 检查特性是否存在。
elem.getAttribute(name) —— 获取这个特性值。
elem.setAttribute(name, value) —— 设置这个特性值。
elem.removeAttribute(name) —— 移除这个特性。 属性—特性同步： 当一个标准的特性被改变，对应的属性也会自动更新，反过来也是同样的效果，这里也有些例外，例如 input.value 只能从特性同步到属性，反过来则不行
自定义特性： 所有以 “data-” 开头的特性均被保留供程序员使用。它们可在 dataset 属性中使用。 例如，如果一个 elem 有一个名为 "data-about" 的特性，那么可以通过 elem.dataset.about 取到它 <body data-about="Elephants" data-order-state="full" >
<script> alert(document.body.dataset.about); // Elephants alert(document.body.dataset.orderState); // full
<\/script>`},{header:"getComputedStyle",slug:"getcomputedstyle",content:`getComputedStyle actually returns the resolved value
of the property, usually in px for
geometry.We should always ask for the exact property that we want, like paddingLeft or marginTop or *
borderTopWidth*.
Otherwise the correct result is not guaranteed.For instance, if there are properties paddingLeft/paddingTop, then
what
should we get for getComputedStyle(elem).padding? Nothing, or maybe a “generated” value from known paddings? There’s
no standard rule here.
Don’t take width/height from CSS(getComputedStyle).There are two reasons: First, CSS width/height depend on another property: box-sizing that defines “what is” CSS width and height. A
change
in box-sizing for CSS purposes may break such JavaScript. Second, CSS width/height may be auto, for instance for an inline element: one more reason: a scrollbar, a scrollbar takes the space from the content in some browsers. So the real width
available for the content is less than CSS width. But with getComputedStyle(elem).width the situation is different.
Some browsers (e.g. Chrome) return the real inner width, minus the scrollbar, and some of them (e.g. Firefox) – CSS
width (ignore the scrollbar)`}]},{path:"/js_basic/js_module.html",title:"js模块机制",pathLocale:"/",contents:[{header:"",slug:"",content:"什么是模块 :一个模块（module）就是一个文件。一个脚本就是一个模块。模块可以相互加载，并可以使用特殊的指令 export 和 import 来交换功能，从另一个模块调用一个模块的函数"},{header:"常见模块实现方案",slug:"常见模块实现方案",content:`AMD(Asynchronous module definition) —— 最古老的模块系统之一，最初由 require.js 库实现。
CommonJS —— 为 Node.js 服务器创建的模块系统。
UMD(Universal Module Definition) —— 另外一个模块系统，建议作为通用的模块系统，它与 AMD 和 CommonJS 都兼容。`},{header:"浏览器中模块的书写",slug:"浏览器中模块的书写",content:`由于模块支持特殊的关键字和功能，因此我们必须通过使用 <script type="module"> 特性（attribute）来告诉浏览器，此脚本应该被当作模块（module）来对待。
浏览器会自动获取并解析（evaluate）导入的模块（如果需要，还可以分析该模块的导入），然后运行该脚本。模块只通过 http/https 工作，而非本地 如果你尝试通过 file://
协议在本地打开一个网页，你会发现 import/export 指令不起作用
<!doctype html>
<script type="module"> import {sayHi} from './say.js'; document.body.innerHTML = sayHi('John');
<\/script>
与“常规”脚本相比，模块有什么不同呢？ 模块始终在严格模式下运行
每个模块都有自己的顶级作用域（top-level scope）。换句话说，一个模块中的顶级作用域变量和函数在其他脚本中是不可见的。
模块代码仅在第一次导入时被解析 // 如果这个模块被导入到多个文件中，模块仅在第一次被导入时被解析，并创建 admin 对象，然后将其传入到所有的导入。
// 📁 1.js
import {admin} from './admin.js'; admin.name = "Pete"; // 📁 2.js
import {admin} from './admin.js'; alert(admin.name); // Pete // 1.js 和 2.js 引用的是同一个 admin 对象
// 在 1.js 中对对象做的更改，在 2.js 中也是可见的 在一个模块中，顶级 this 是 undefined。将其与非模块脚本进行比较会发现，非模块脚本的顶级 this 是全局对象 <script> alert(this); // window
<\/script> <script type="module"> alert(this); // undefined
<\/script> 模块脚本 总是 被延迟的，与 defer 特性 对外部脚本和内联脚本（inline script）的影响相同。下载外部模块脚本 <script type="module" src="..."> 不会阻塞 HTML
的处理，它们会与其他资源并行加载。 模块脚本会等到 HTML 文档完全准备就绪（即使它们很小并且比 HTML 加载速度更快），然后才会运行。 在文档中排在前面的脚本先执行。 <script type="module"> // 因为模块是被延迟的（deferred，所以模块脚本会在整个页面加载完成后才运行
alert(typeof button); // object：脚本可以“看见”下面的 button
<\/script> <!--相较于下面这个常规脚本： 常规脚本会立即运行，常规脚本的运行是在在处理页面的其余部分之前进行的-->
<script> alert(typeof button); // button 为 undefined，脚本看不到下面的元素
<\/script> <button id="button">Button</button>`},{header:"The import() expression",slug:"the-import-expression",content:`Although import() looks like a function call, it’s a special syntax that just happens to use parentheses (similar
to super()). So we can’t copy import to a variable or use call/apply with it. It’s not a function.`},{header:"Reference",slug:"reference",content:"深入理解 ES6 模块机制"}]},{path:"/js_basic/passive_event.html",title:"Passive Event",pathLocale:"/",contents:[{header:"scroll 行为 vs scroll 事件",slug:"scroll-行为-vs-scroll-事件",content:`文档视图或者一个元素在滚动时，会触发元素的 scroll 事件，先有滚动行为，然后才会触发 scroll 事件。scroll 事件的 event.cancelable 属性默认是
false,是一种不可被取消的事件，调用 event.preventDefault()没有任何意义，并不能阻止浏览器滚动`},{header:"passive 事件原因",slug:"passive-事件原因",content:`由于 touchstart/touchmove/wheel 事件对象的 cancelable 属性为 true，也就是说它的默认行为可以被监听器通过 preventDefault()
方法阻止，那它的默认行为是什么呢，通常来说就是滚动当前页面（还可能是缩放页面），如果它的默认行为被阻止了，页面就必须静止不动。但浏览器无法预先知道一个监听器会不会调用 preventDefault()
，它能做的只有等监听器执行完后再去执行默认行为，而监听器执行是要耗时的，有些甚至耗时很明显，这样就会导致页面卡顿。视频里也说了，即便监听器是个空函数，也会产生一定的卡顿，毕竟空函数的执行也会耗时。
有 80% 的滚动事件监听器是不会阻止默认行为的，也就是说大部分情况下，浏览器是白等了。所以，passive 监听器诞生了，它表示当前通过 addEventListener 注册的 handler
是一个被动监听器，相当于标记当前 event.cancelable=false ,告诉浏览器 滚动行为 不会被阻止，你可以立即执行滚动行为， 浏览器知道了一个监听器是
passive 的，它就可以在两个线程里同时执行监听器中的 JavaScript 代码和浏览器的默认行为了。
当标记为 passive=true 之后，即使调用 event.preventDefault() 也不会阻止浏览器滚动，只会再控制台输出一条警告信息。`},{header:"passive detect",slug:"passive-detect",content:`通过在 options 对象中定义一个 getter 方法来检测 passive 属性是否被访问到
var supportsPassive = false;
try { var opts = Object.defineProperty({}, "passive", { get: function () { supportsPassive = true; }, }); window.addEventListener("test", null, opts);
} catch (e) {
} // 使用检测结果。如果支持则使用 passive，否则将捕获设置为 false
elem.addEventListener( "touchstart", fn, supportsPassive ? {passive: true} : false
);`},{header:"reference",slug:"reference",content:`[英] 被动事件监听器（Passive Event Listeners）
[译] 被动事件监听器（Passive Event Listeners）`}]},{path:"/js_basic/some_detail.html",title:"minor details",pathLocale:"/",contents:[{header:"console.dir vs console.log",slug:"console-dir-vs-console-log",content:`For JavaScript objects these commands usually do the same.But for DOM elements they are different : console.log(elem) shows the element DOM tree.
console.dir(elem) shows the element as a DOM object, good to explore its properties.`},{header:"node element tagName",slug:"node-element-tagname",content:`The tag name is always uppercase except in XML mode. The browser has two modes of processing documents:
HTML and XML. Usually the HTML-mode is used for webpages. XML-mode is enabled when the browser receives an XML-document
with the header: Content-Type: application/xml+xhtml.
In HTML mode tagName/nodeName is always uppercased: it’s BODY either for <body> or <BoDy>.
In XML mode the case is kept “as is”. Nowadays XML mode is rarely used.`},{header:"The “hidden” property",slug:"the-hidden-property",content:`The “hidden” attribute and the DOM property specifies whether the element is visible or not. Technically, hidden works
the same as style="display:none". But it’s shorter to write.`},{header:"HTML attributes",slug:"html-attributes",content:`In HTML, tags may have attributes. When the browser parses the HTML to create DOM objects for tags, it recognizes
standard attributes and creates DOM properties from them.
So when an element has id or another standard attribute, the corresponding property gets created. But that doesn’t
happen if the attribute is non-standard. <body id="test" something="non-standard">
<script> alert(document.body.id); // test alert(document.body.something); // undefined
<\/script>
</body>
So, if an attribute is non-standard, there won’t be a DOM-property for it.
Standard attributes are described in the specification for the corresponding element class.
HTML attributes have the following features: Their name is case-insensitive (id is same as ID).
Their values are always strings`},{header:"Property-attribute synchronization",slug:"property-attribute-synchronization",content:`When a standard attribute changes, the corresponding property is auto-updated, and (with some exceptions). In the
example below id is modified as an attribute, and we can see the property changed too. And then the same backwards.
But there are exclusions, for instance input.value synchronizes only from attribute → to property, but not
back`},{header:"html dataset",slug:"html-dataset",content:`All attributes starting with “data-” are reserved for programmers’ use. They are available in the dataset
property.Please note that we can not only read, but also modify data-attributes.
For instance, if an elem has an attribute named data-about, it’s available as elem.dataset.about
Multiword attributes like data-order-state become camel-cased: dataset.orderState.`},{header:"Prefixed properties",slug:"prefixed-properties",content:`Browser-prefixed properties like -moz-border-radius, -webkit-border-radius also follow the same rule: a dash means
upper case.
button.style.MozBorderRadius = '5px';
button.style.WebkitBorderRadius = '5px';`},{header:"Resetting the style property",slug:"resetting-the-style-property",content:`Sometimes we want to assign a style property, and later remove it. For instance, to hide an element, we can
set elem.style.display = "none". Then later we may want to remove the style.display as if it were not set. Instead
of delete elem.style.display we should assign an empty string to it: elem.style.display = "". If we set
style.display to an empty string, then the browser applies CSS classes and its built-in styles normally, as if there
were no such style.display property at all.`},{header:"Width/height of the document",slug:"width-height-of-the-document",content:`Theoretically, as the root document element is document.documentElement, and it encloses all the content, we could
measure the document’s full size as document.documentElement.scrollWidth/scrollHeight.
But on that element, for the whole page, these properties do not work as intended. In Chrome/Safari/Opera, if there’s no
scroll, then documentElement.scrollHeight may be even less than documentElement.clientHeight! Weird, right?
To reliably obtain the full document height, we should take the maximum of these properties:
let scrollHeight = Math.max( document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight
);
DOM elements have their current scroll state in their scrollLeft/scrollTop properties.
For document scroll, document.documentElement.scrollLeft/scrollTop works in most browsers, except older WebKit-based
ones, like Safari (bug 5991), where we should use document.body instead of document.documentElement.
Luckily, we don’t have to remember these peculiarities at all, because the scroll is available in the special
properties, window.pageXOffset/pageYOffset,Also available as window properties scrollX and scrollY window.pageXOffset is an alias of window.scrollX.
window.pageYOffset is an alias of window.scrollY.`},{header:"elementFromPoint(x, y)",slug:"elementfrompoint-x-y",content:`The call to document.elementFromPoint(x, y) returns the most nested element at window coordinates (x, y),
For out-of-window coordinates the elementFromPoint returns null`}]},{path:"/js_practice/FrontendFramework.html",title:"Building a frontend framework, from scratch, with components (templating, state, VDOM)",pathLocale:"/",contents:[{header:"create-frontend-framework",slug:"create-frontend-framework",content:"参考 https://mfrachet.github.io/create-frontend-framework/intro.html"}]},{path:"/js_practice/h5_image_upload.html",title:"h5照片上传",pathLocale:"/",contents:[{header:"h5 capture属性",slug:"h5-capture属性",content:`accept 表示打开的系统文件目录，capture 表示的是系统所捕获的默认设备，camera：照相机；camcorder：摄像机；microphone
：录音，其中还有一个属性multiple，支持多选，当支持多选时，multiple优先级高于capture，所以只用写成：
<input type="file" accept="image/*" capture="camera">
<input type="file" accept="video/*" capture="camcorder">
<input type="file" accept="audio/*" capture="microphone">`},{header:"uni.chooseImage实现",slug:"uni-chooseimage实现",content:`!function (global, factory) { typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.ImgSelector = factory());
}(this, function () { let ImgSelector = {} function updateElementStyle(element, styles) { for (const attrName in styles) { element.style[attrName] = styles[attrName] } } const ALL = '*' function isWXEnv() { const ua = window.navigator.userAgent.toLowerCase() return ua.match(/MicroMessenger/i) && ua.match(/MicroMessenger/i)[0] === 'micromessenger'; } /** * 分析智能手机浏览器 版本信息 */ const browser = { versions: function () { const u = navigator.userAgent, app = navigator.appVersion; return { //移动终端浏览器版本信息 trident: u.indexOf('Trident') > -1, //IE内核 presto: u.indexOf('Presto') > -1, //opera内核 webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核 gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核 mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端 ios: !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器 iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器 iPad: u.indexOf('iPad') > -1, //是否iPad webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部 isWeixin: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger',// 是否是微信打开的浏览器 isMQQbrowser: u.toLowerCase().match(/MQQbrowser/i) == 'mqqbrowser' // 是否是微信打开的浏览器 }; }(), // language: (navigator.browserLanguage || navigator.language).toLowerCase() } // 是否是 ios系统 function isIos() { return browser.versions.ios || browser.versions.iPhone || browser.versions.iPad; } // 是否是安卓系统 function isAndroid() { return browser.versions.android } // 是否是移动端 function isMobile() { return browser.versions.mobile; } function isWeixin() { return browser.versions.isWeixin; } function isMQQbrowser() { return browser.versions.isMQQbrowser; } function createInput({count, sourceType, type, extension}) { const inputEl = document.createElement('input') inputEl.type = 'file' updateElementStyle(inputEl, { position: 'absolute', visibility: 'hidden', 'z-index': -999, width: 0, height: 0, top: 0, left: 0 }) inputEl.accept = extension.map(item => { if (type !== ALL) { // 剔除.拼接在type后 return \`\${type}/\${item.replace('.', '')}\` } else { // 在微信环境里，'.jpeg,.png' 会提示没有应用可执行此操作 if (isWXEnv()) { return '.' } // 在后缀前方加上. return item.indexOf('.') === 0 ? item : \`.\${item}\` } }).join(',') if (count > 1) { inputEl.multiple = 'multiple' } // 经过测试，仅能限制只通过相机拍摄，不能限制只允许从相册选择。 if (sourceType.length === 1 && sourceType[0] === 'camera') { inputEl.capture = 'camera' } if (isAndroid() && isWeixin() && !isMQQbrowser()) { console.log("强制添加摄像头调用功能"); inputEl.capture = 'camera'; } return inputEl } function hasOwn(obj, key) { const hasOwnProperty = Object.prototype.hasOwnProperty return hasOwnProperty.call(obj, key) } const files = {} /** * 从url读取File * @param {string} url */ ImgSelector.urlToFile = function (url) { let file = files[url] if (file) { return Promise.resolve(file) } if (/^data:[a-z-]+\\/[a-z-]+;base64,/.test(url)) { return Promise.resolve(ImgSelector.base64ToFile(url)) } return new Promise((resolve, reject) => { let xhr = new XMLHttpRequest() xhr.open('GET', url, true) xhr.responseType = 'blob' xhr.onload = function () { resolve(this.response) } xhr.onerror = reject xhr.send() }) } /** * base64转File * @param {string} base64 * @return {File} */ ImgSelector.base64ToFile = function (base64) { base64 = base64.split(',') var type = base64[0].match(/:(.*?);/)[1] var str = atob(base64[1]) var n = str.length var array = new Uint8Array(n) while (n--) { array[n] = str.charCodeAt(n) } return ImgSelector.blobToFile(array, type) } /** * 简易获取扩展名 * @param {string} type * @return {string} */ function getExtname(type) { const extname = type.split('/')[1] return extname ? \`.\${extname}\` : '' } /** * 简易获取文件名 * @param {*} url */ function getFileName(url) { url = url.split('#')[0].split('?')[0] const array = url.split('/') return array[array.length - 1] } /** * blob转File * @param {Blob} blob * @param {string} type * @return {File} */ ImgSelector.blobToFile = function (blob, type) { if (!(blob instanceof File)) { type = type || blob.type || '' const filename = \`\${Date.now()}\${getExtname(type)}\` try { blob = new File([blob], filename, {type}) } catch (error) { blob = blob instanceof Blob ? blob : new Blob([blob], {type}) blob.name = blob.name || filename } } return blob } /** * 从本地file或者blob对象创建url * @param {Blob|File} file * @return {string} */ ImgSelector.fileToUrl = function (file) { for (const key in files) { if (hasOwn(files, key)) { const oldFile = files[key] if (oldFile === file) { return key } } } let url = (window.URL || window.webkitURL).createObjectURL(file) files[url] = file return url } function getSameOriginUrl(url) { const a = document.createElement('a') a.href = url if (a.origin === location.origin) { return Promise.resolve(url) } return ImgSelector.urlToFile(url).then(ImgSelector.fileToUrl) } function revokeObjectURL(url) { (window.URL || window.webkitURL).revokeObjectURL(url) delete files[url] } let imageInput = null ImgSelector.chooseImage = function ({ count = 1, sizeType = ['original'], sourceType = ['camera', 'album'], // extension=['jpg','png','jpeg'], extension = ['*'], success }) { // TODO handle sizeType 尝试通过 canvas 压缩 if (imageInput) { document.body.removeChild(imageInput) imageInput = null } imageInput = createInput({ count, sourceType, extension, type: 'image' }) document.body.appendChild(imageInput) imageInput.addEventListener('change', function (event) { const tempFiles = [] const fileCount = event.target.files.length for (let i = 0; i < fileCount; i++) { const file = event.target.files[i] let filePath Object.defineProperty(file, 'path', { get() { filePath = filePath || ImgSelector.fileToUrl(file) return filePath } }) if (i < count) tempFiles.push(file) } const res = { errMsg: 'chooseImage:ok', get tempFilePaths() { return tempFiles.map(({path}) => path) }, tempFiles: tempFiles } success(res) // TODO 用户取消选择时，触发 fail，目前尚未找到合适的方法。 }) imageInput.click() } ImgSelector.appendImgSelector = function (imgName, key, optional = false) { return \` <div class="title-with-image"> <div class="choose-image" data-key="\${key}"> <img src="" alt="" srcset="" class="image-item"> <i class="image-item-delete" ></i> <span class="optional-text">\${optional ? '选填项' : '必填项'}</span> </div> <div class="img-item-title">\${imgName}</div> </div> \` } return ImgSelector
})`},{header:"参考链接",slug:"参考链接",content:`uni.chooseImage
HTML Media Capture Examples
www.w3.org
h5-capture
h5拍照调用相机和选择图库同时存在ios、安卓的兼容问题`},{header:"浏览器 BOM api MediaDevices.getUserMedia()",slug:"浏览器-bom-api-mediadevices-getusermedia",content:""},{header:"H5部署后navigator获取不到mediaDevices",slug:"h5部署后navigator获取不到mediadevices",content:`由于浏览器的安全策略导致的，有下面三种情况是可以调起设备的，也就是 navigator.mediaDevices 不为 undefined 地址为 localhost:// 访问时
地址为 https:// 时
为文件访问 file:// 所以本地调试需要搭建 https 环境调试`},{header:"vue 代码",slug:"vue-代码",content:`<template> <div> <video id="videoCamera" :width="videoWidth" :height="videoHeight" autoplay></video> <canvas style="display:none;" id="canvasCamera" :width="videoWidth" :height="videoHeight"></canvas> <button plain @click="setImage()">手动拍照</button> <p class="fail_tips">拍照，请正脸面向摄像头</p> // 给外面盒子设置宽高，可以限制拍照图片的大小位置范围 <div class="result_img"> <img :src="imgSrc" alt class="tx_img" width="100%"/> </div> <p class="res_tips">效果展示</p> </div>
</template> <script>
export default { data() { return { // 视频调用相关数据开始 videoWidth: 245, videoHeight: 326, imgSrc: '', thisCancas: null, thisContext: null, thisVideo: null, openVideo: false, //视频调用相关数据结束 postVideoImg: ''// 图片上传后获取的url链接 } }, mounted() { this.getCompetence() //调用摄像头 }, methods: { postImg() { let formData = new FormData() formData.append('file', this.base64ToFile(this.imgSrc, 'png')) formData.append('flag', 'videoImg')// 额外参数 // 对应的后台上传图片接口 === app/StudentVideoController/uploadFile this.$axios.post('app/StudentVideoController/uploadFile', formData).then(res => { // console.log(res); if (res.data.code == '00') { // 图片文件传至后台 == 获取到该图片的url路径 this.postVideoImg = res.data.FilePath //获得图片的url后，需要做什么 //做的事情...... } }).catch(error => { console.log(error) }) }, // 调用权限（打开摄像头功能） getCompetence() { let _this = this _this.thisCancas = document.getElementById('canvasCamera') _this.thisContext = this.thisCancas.getContext('2d') _this.thisVideo = document.getElementById('videoCamera') _this.thisVideo.style.display = 'block' // 获取媒体属性，旧版本浏览器可能不支持mediaDevices，我们首先设置一个空对象 if (navigator.mediaDevices === undefined) { navigator.mediaDevices = {} } // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象 // 使用getUserMedia，因为它会覆盖现有的属性。 // 这里，如果缺少getUserMedia属性，就添加它。 if (navigator.mediaDevices.getUserMedia === undefined) { navigator.mediaDevices.getUserMedia = function (constraints) { // 首先获取现存的getUserMedia(如果存在) let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia // 有些浏览器不支持，会返回错误信息 保持接口一致 if (!getUserMedia) {//不存在则报错 return Promise.reject( new Error('getUserMedia is not implemented in this browser') ) } // 否则，使用Promise将调用包装到旧的navigator.getUserMedia return new Promise(function (resolve, reject) { getUserMedia.call(navigator, constraints, resolve, reject) }) } } const constraints = { audio: false, video: { width: this.videoWidth, height: this.videoHeight, transform: 'scaleX(-1)', facingMode: 'environment' } } navigator.mediaDevices .getUserMedia(constraints) .then(function (stream) { // 旧的浏览器可能没有srcObject if ('srcObject' in _this.thisVideo) { _this.thisVideo.srcObject = stream } else { // 避免在新的浏览器中使用它，因为它正在被弃用。 _this.thisVideo.src = window.URL.createObjectURL(stream) } _this.thisVideo.onloadedmetadata = function (e) { _this.thisVideo.play() } }) .catch(err => { console.log(err) }) }, setImage() { let _this = this // canvas画图 _this.thisContext.drawImage(_this.thisVideo, 0, 0) // 获取图片base64链接 let image = this.thisCancas.toDataURL('image/png') _this.imgSrc = image//赋值并预览图片 this.postImg() // 绘制完图片调用图片上传接口 }, // 关闭摄像头 stopNavigator() { this.thisVideo.srcObject.getTracks()[0].stop() }, // base64 转为 file base64ToFile(urlData, fileName) { let arr = urlData.split(',') let mime = arr[0].match(/:(.*?);/)[1] let bytes = atob(arr[1]) // 解码base64 let n = bytes.length let ia = new Uint8Array(n) while (n--) { ia[n] = bytes.charCodeAt(n) } return new File([ia], fileName, {type: mime}) } }, destroyed: function () { // 离开当前页面 this.stopNavigator() // 关闭摄像头 }
}
<\/script>
<style>
.result_img { width: 146px; height: 195px; background: #D8D8D8;
}
</style>`},{header:"参考链接",slug:"参考链接-1",content:`getUserMedia (Selfie) Full Screen on Mobile
getUserMedia() - selecting rear camera on mobile
H5部署后navigator获取不到mediaDevices`}]},{path:"/js_practice/jsTemplateEngine.html",title:"JS template engine",pathLocale:"/",contents:[{header:"JS 模板引擎",slug:"js-模板引擎",content:"构造函数字符串，利用js new Function 将字符串转成函数\nconst TemplateEngine = function (tpl, data) { const reg = /<%([^%<>]+)%>/g; const regKeyWord = /\\s*(for|if|switch|case|break|else|else\\s+if|})\\s*{?/g let codeBody = `let arr=[];\\n` let match; let cursor = 0; function addNewFunctionBody(line, js) { js ? (line.match(regKeyWord) ? codeBody += `${line}\\n` : codeBody += `arr.push(${line});\\n`) : codeBody += `arr.push(\"${line.replace('\\n', '')}\");\\n` } while (match = reg.exec(tpl)) { // console.log(\"match::\", match) addNewFunctionBody(match.input.substring(cursor, match.index)) cursor = match.index + match[0].length // console.log(cursor) const matchPart = match[1] addNewFunctionBody(matchPart, true) } addNewFunctionBody(template.substring(cursor)) codeBody += `return arr.join('');` console.log('========================codeBody======================\\n', codeBody) const myFun = new Function(codeBody).bind(data); return myFun().replace(/\\s{4}/g, '');\n} const template = `Hello, my name is <%this.name%>.I am <%this.profile.age%> years old. My skills:<%for(var index in this.skills) {%><%this.skills[index]%><%}%>` const data = { name: 'lee', profile: {age: 55}, skills: [\"js,\", \"html,\", \"css\"]\n} console.log(TemplateEngine(template, data))"}]},{path:"/js_practice/practice_problem.html",title:"前端常见问题",pathLocale:"/",contents:[{header:"前端获取不到后端添加的请求头信息",slug:"前端获取不到后端添加的请求头信息",content:`后端传回的 response 中获取不到 Content-Disposition,在后台代码中添加以下信息
response.addHeader("Content-Disposition", "attachment;filename=" + fileName + ".xlsx");
response.setHeader("Access-Control-Expose-Headers", "Content-Disposition");`},{header:"前端打包至 Nginx 目录文件上传报跨域",slug:"前端打包至-nginx-目录文件上传报跨域",content:`By default, NGINX has a upload limit of 1 MB per file. By editing client_max_body_size, you adjust the file upload
size. Use the http, server, or location block to edit client_max_body_size. Changes to the http block affect all
server blocks (virtual hosts). http { client_max_body_size 10M; }`},{header:"http-server 启动 https 服务",slug:"http-server-启动-https-服务",content:`gitBash 中就带有 openssl 命令行,打开需要执行 http-server 命令的目录，在当前目录中使用 gitBash 执行 以下命令
#生成ssl证书
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
#启动静态服务
http-server -S -C cert.pem -o How to install OpenSSL in windows 10
npm http-server with SSL`},{header:"Vue2.0 使用 https 启动工程设置",slug:"vue2-0-使用-https-启动工程设置",content:`在 vueconfig.js 中 配置 devServer
devServer: { https: true
}`}]},{path:"/library/Miscellaneous.html",title:"Miscellaneous",pathLocale:"/",contents:[{header:"library",slug:"library",content:""},{header:"open",slug:"open",content:`Open stuff like URLs, files, executables. Cross-platform,It uses the
command start on Windows.`},{header:"define-lazy-prop",slug:"define-lazy-prop",content:`Define a lazily evaluated property on an object
Useful when the value of a property is expensive to generate, so you want to delay the computation until the property is
needed. For example, improving startup performance by deferring nonessential operations.`},{header:"ref",slug:"ref",content:`Awesome Node.js
github awesome node.js
You Don't Know Node.js
stream-handbook
NodeSchool
art-of-node
Using JavaScript to trap focus in an element`}]},{path:"/library/Pdf.js.html",title:"Pdf.js",pathLocale:"/",contents:[{header:"",slug:"",content:"PDF（便携式文件格式，Portable Document Format）是由Adobe Systems于1993年基于文件交换所发展出的一种文件格式。"},{header:"Reference",slug:"reference",content:`How PDF.js Works
PDF文件解析与PDF恶代分析中的一些坑
PDF格式入门
pdf standards`}]},{path:"/library/echarts.html",title:"echarts",pathLocale:"/",contents:[{header:"You need to know",slug:"you-need-to-know",content:`canvas 是基于像素进行绘图的，所以使用canvas绘图要么写死宽高，要么监听 canvas 元素的宽高并且重绘。
canvas 元素隐藏的时候 Echarts 并不知道需要多大宽高，或者获取到一个最小宽高，而设置canvas元素显示又不会触发宽高变化的事件，呈现的图表还是隐藏市的大小。
所以最好在 canvas 显示之后再绘制 Echarts 图表，或者在显示canvas的时候调用 Echarts 的resize 方法，或者用 dispatchEvent 触发一个原生的resize事件。
echarts 不显示 title,legend,legendScroll,tooltip等，可能是没引入相应的echarts包
vue-echarts 设置 .echarts{ width:100%;height:100% } 时，echarts高度为0，可以尝试设置为 .echarts{ width:100%; } 试试。
echarts 中 geo 是地理坐标系组件，需要 geoJson 数据在 echarts.registerMap('mapName', geoJson)
bmap 是引入百度地图组件之后，百度地图的地理坐标系组件 import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'
import 'echarts/lib/component/tooltip'`},{header:"vue-echarts example(vue2)",slug:"vue-echarts-example-vue2",content:`package.json version
"echarts": "^4.9.0",
"vue-echarts": "^5.0.0-beta.0",
vue.config.js transpileDependencies: [ 'vue-echarts', 'resize-detector' ] <template> <v-chart autoresize ref="chart1" :options="titlePieData"/>
</template> <script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'
import 'echarts/lib/component/tooltip' export default { components: { 'v-chart': ECharts }, data() { return { titlePieData: { title: { text: 'Pie chart Example', left: 'center' }, tooltip: { trigger: 'item', formatter: '{b}: {d}%' }, // legend过长后滚动 legend: { type: 'scroll', left: 'center', bottom: 0 }, series: [ { name: '职称', type: 'pie', radius: '50%', label: { formatter: '{b}: {d}%' }, data: [ {value: 0, name: 'share1'}, {value: 0, name: 'share2'}, {value: 0, name: 'share3'}, {value: 0, name: 'share4'}, {value: 0, name: 'share5'}, {value: 0, name: 'share6'}, {value: 0, name: 'share7'}, {value: 0, name: 'share8'}, {value: 0, name: 'share9'}, {value: 0, name: 'share10'}, ], emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' } } } ] } } }, mounted() { this.$refs.chart1.showLoading({text: '数据加载中...'}) setTimeout(() => { this.titlePieData.series[0].data = [ {value: 48, name: 'share1'}, {value: 250, name: 'share2'}, {value: 300, name: 'share3'}, {value: 25, name: 'share4'}, {value: 111, name: 'share5'}, {value: 63, name: 'share6'}, {value: 99, name: 'share7'}, {value: 6, name: 'share8'}, {value: 170, name: 'share9'}, {value: 132, name: 'share10'}, ] this.$refs.chart1.hideLoading() }, 2000) }
}
<\/script>
<style>
.echarts { width: 100%
}
</style>`},{header:"reference",slug:"reference",content:`echarts v4 文档
vue-echarts v5(for vue2)`}]},{path:"/library/layui.html",title:"layUi 踩坑",pathLocale:"/",contents:[{header:"layUi radio 必填校验",slug:"layui-radio-必填校验",content:`如下所示,当 twins 字段不给默认值，此时两个 radio 均是未选中状态，提交 form 表单，默认 required 会通过校验，而且 form.field 会忽略 twins 字段，提交的时候不收集该字段 <div class="layui-form-item"> <label class="layui-form-label">是否双(多)胞胎：</label> <div class="layui-input-block" id="twins"> <input type="radio" class="twins" name="twins" value="1" lay-verify="required" lay-filter="twins" title="是"/> <input type="radio" class="twins" name="twins" value="0" lay-verify="required" lay-filter="twins" title="否"/> </div>
</div>
解决方法：将 lay-verify="required" 替换成 自定义 校验 lay-verify = "radioRequired"
function radioRequired(value, item) { let verifyName = $(item).attr('name') , verifyType = $(item).attr('type') , formElem = $(item).parents('.layui-form')//获取当前所在的form元素，如果存在的话 , verifyElem = formElem.find("input[name='" + verifyName + "']")//获取需要校验的元素 , isTrue = verifyElem.is(':checked')//是否命中校验 , focusElem = verifyElem.next().find('i.layui-icon');//焦点元素 if (!isTrue || !value) { //定位焦点 focusElem.css(verifyType == 'radio' ? {"color": "#FF5722"} : {"border-color": "#FF5722"}); //对非输入框设置焦点 focusElem.first().attr("tabIndex", "1").css("outline", "0").blur(function () { focusElem.css(verifyType == 'radio' ? {"color": ""} : {"border-color": ""}); }).focus(); return '必填项不能为空'; }
}`},{header:"layui radio 不能通过 js 触发事件",slug:"layui-radio-不能通过-js-触发事件",content:`layui 对 radio和select 组件做过包装处理，直接选中 input和select 元素通过 click() 触发是不生效的， 对于 radio 应该选中当前 radio相应的input元素
的下一个 class="layui-form-radio" 的 div 元素,在这个 div 上面触发 click(), 此时会触发 form.on(radio(radio-filter),callback)
中的 callback 函数
const radioElement = $(layero).find('input.none-standard-radio[name="addressStandard"]')
radioElement.next('.layui-form-radio').trigger('click')`},{header:"layui-select 自动触发 (select(filter),callback) 中的 callback",slug:"layui-select-自动触发-select-filter-callback-中的-callback",content:`layui 源码中就是监听的是 dd 上的 click 事件，如下所示 liveTypeEle 为当前的 select 元素，需要选中 dl 中的 dd 元素才可以触发事件
function setDefaultValue(layero) { let liveTypeEle = layero ? $(layero).find('select[name="livetype"]') : $('select[name="livetype"]') liveTypeEle.val('1') // 这个要加上 否则有很奇怪的 bug liveTypeEle.next().find('dl dd[lay-value="1"]').trigger('click') liveTypeEle.attr('disabled', true) form.render()
}`},{header:"layer.load不生效",slug:"layer-load不生效",content:"layer.load 在同步 ajax 请求中不生效，异步 Ajax 才生效"}]},{path:"/library/tailwindcss.html",title:"tailwindcss",pathLocale:"/",contents:[{header:"Vue2 配置 tailwindcss",slug:"vue2-配置-tailwindcss",content:""},{header:"tailwind.config.js",slug:"tailwind-config-js",content:`When building for production, you should always use Tailwind’s purge option to tree-shake unused styles and optimize
your final build size
preflight: A set of base styles for Tailwind projects. module.exports = { // https://v2.tailwindcss.com/docs/optimizing-for-production#removing-unused-css purge: [ './src/**/*.html', './src/**/*.vue', './src/**/*.jsx', ], corePlugins: { // 禁用基础样式，否则集成到element-ui中会有干扰 preflight: false, }
}`},{header:"CORE CONCEPTS",slug:"core-concepts",content:`@tailwind base: Base (or global) styles are the styles at the beginning of a stylesheet that set useful defaults for
basic HTML elements like <a> tags, headings, etc. or apply opinionated resets like the popular box-sizing reset.
Tailwind includes a useful set of base styles out of the box that we call Preflight, which is really just
modern-normalize plus a thin layer of additional more opinionated styles. By using the @layer directive, Tailwind will automatically move those styles to the same place as @tailwind base
to avoid unintended specificity issues.
Using the @layer directive will also instruct Tailwind to consider those styles for purging when purging the **
base layer**. /*自定义base样式*/
@layer base { h1 { @apply text-2xl; } h2 { @apply text-xl; }
}
Extracting component classes with @apply：
To avoid unintended specificity issues, we recommend wrapping your custom component styles with the @layer components
directive to tell Tailwind what layer those styles belong to <button class="btn-blue"> Click me
</button> @tailwind base;
@tailwind components;
@tailwind utilities; @layer components { .btn-blue { @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75; }
}
Adding New Utilities:
Although Tailwind provides a pretty comprehensive set of utility classes out of the box, you may run into situations
where you need to add a few of your own.
@tailwind base;
@tailwind components;
@tailwind utilities;
/*自定义css class 类名*/
@layer utilities { .scroll-snap-none { scroll-snap-type: none; } .scroll-snap-x { scroll-snap-type: x; } .scroll-snap-y { scroll-snap-type: y; }
}`},{header:"Functions & Directives",slug:"functions-directives",content:`A reference for the custom functions and directives Tailwind exposes to your CSS. Use the @tailwind directive to insert Tailwind’s base, components, utilities and screens styles into your
CSS.
Use @apply to inline any existing utility classes into your own custom CSS.
Any rules inlined with @apply will have !important removed by default to avoid specificity issues
You can also mix @apply declarations with normal CSS declarations /** * This injects Tailwind's base styles and any base styles registered by * plugins. */
@tailwind base; /** * This injects Tailwind's component classes and any component classes * registered by plugins. */
@tailwind components; /** * This injects Tailwind's utility classes and any utility classes registered * by plugins. */
@tailwind utilities; /** * Use this directive to control where Tailwind injects the responsive * variations of each utility. * * If omitted, Tailwind will append these classes to the very end of * your stylesheet by default. */
@tailwind screens; If you’d like to @apply an existing class and make it !important, simply add !important to the end of the
declaration .btn { @apply font-bold py-2 px-4 rounded !important;
}
if you’re using Sass/SCSS, you’ll need to use Sass’ interpolation feature to get this to work
.btn { @apply font-bold py-2 px-4 rounded #{!important};
} Use the @layer directive to tell Tailwind which “bucket” a set of custom styles belong to. Valid layers are a base
, components, and utilities. @variants:You can generate responsive, hover, focus, active, and other variants of your own utilities by
wrapping their definitions in the @variants directive. theme(): Use the theme() function to access your Tailwind config values using dot notation. .content-area { height: calc(100vh - theme('spacing.12'));
}
Vue中自定义按钮 <templae> <div class="cus-btn">tailwind.css</div>
</templae>
<style lang="scss" scoped> @layer components { .cus-btn { @apply rounded w-40 text-center text-lg p-2 mb-2 text-white cursor-pointer transform duration-200 hover:scale-105; background-color: theme('colors.myOrange'); } }
</style>`},{header:"Resource for learn",slug:"resource-for-learn",content:`TailwindCSS 资源推荐
github:awesome-tailwindcss`}]},{path:"/library/umi-request.html",title:"umi-request",pathLocale:"/",contents:[{header:"umi-request",slug:"umi-request",content:`The network request library, based on fetch encapsulation, combines the features of fetch and axios to provide
developers with a unified api call method, simplifying usage, and providing common functions such as caching, timeout,
character encoding processing, and error handling.`},{header:"插件机制",slug:"插件机制",content:`umi-request 基于插件实现，内部的洋葱模型 onion.js 参考自 koa
的 koa-compose`},{header:"用户自定义中间件",slug:"用户自定义中间件",content:`ctx(Object)：context, content request and response
next(Function)：function to call the next middleware request.use(async (ctx, next) => { console.log('a1'); await next(); console.log('a2');
})
中间件执行顺序从左到右，首先执行自定义中间件，在依次执行 simplePost(对请求body，即data做处理),simpleGet(对请求params做处理，实现 query 简化、 post 简化)，
parseResponseMiddleware(解析json,gbk数据)，最后执行 fetchMiddleware ,最终发送http请求.
这里会有疑惑，为什么不是先发送请求，再 parseResponse, 其实在 parseResponseMiddleware 中直接先掉用了 next(),即先执行了 fetchMiddleware,实际的 parse
response 过程还是在http请求结果返回值后执行的
这里用户定义的中间件默认为 this.middlewares, this.defaultMiddlewares默认为 [],Onion.globalMiddlewares和Onion.coreMiddlewares如下
const globalMiddlewares = [simplePost, simpleGet, parseResponseMiddleware];
const coreMiddlewares = [fetchMiddleware]; function execute(params = null) { const fn = compose([ ...this.middlewares, ...this.defaultMiddlewares, ...Onion.globalMiddlewares, ...Onion.coreMiddlewares, ]); return fn(params);
}`},{header:"compose 函数",slug:"compose-函数",content:`compose 函数返回一个组合了所有插件的“插件”函数，这个函数接受一个http请求的request 对象作为参数，参数被compose从一个个中间件中处理后返回的 promise
闭包函数 dispatch 作为调度函数，每次执行 next(),即会调用 dispatch 函数执行下一个中间件，当下一个中间件函数 return 时，上一个函数才能继续执行
export default function compose(middlewares) { if (!Array.isArray(middlewares)) throw new TypeError('Middlewares must be an array!'); const middlewaresLen = middlewares.length; for (let i = 0; i < middlewaresLen; i++) { if (typeof middlewares[i] !== 'function') { throw new TypeError('Middleware must be componsed of function'); } } return function wrapMiddlewares(params, next) { let index = -1; function dispatch(i) { if (i <= index) { return Promise.reject(new Error('next() should not be called multiple times in one middleware!')); } index = i; const fn = middlewares[i] || next; if (!fn) return Promise.resolve(); try { return Promise.resolve(fn(params, () => dispatch(i + 1))); } catch (err) { return Promise.reject(err); } } return dispatch(0); };
}
调用栈分析`},{header:"reference",slug:"reference",content:`如何更好地理解中间件和洋葱模型
compose函数,js-fp`}]},{path:"/library/vueRouter4.html",title:"VueRouter4",pathLocale:"/",contents:[{header:"createWebHistory",slug:"createwebhistory",content:`初始化vueRouter时候，需要调用 createWebHistory 创建 html5 history 对象,在此过程中调用 useHistoryListeners 监听了 popstate 事件
window.addEventListener('popstate', popStateHandler)
window.addEventListener('beforeunload', beforeUnloadListener)`},{header:"vueRouter路由权重匹配",slug:"vuerouter路由权重匹配",content:""},{header:"path 解析成 token",slug:"path-解析成-token",content:`在 /src/matcher/pathTokenizer.ts 中有个 专门的函数 function tokenizePath(path: string): Array<Token[]> 是专门用于解析 path 的,
以 /users/:id 为例，解析的最终结果如 tokens1 ,它会分段将 url 解析成 Token 类型的数组,其中的 type 代表的是枚举类型 TokenizerState;
/:data(.*)会解析成 tokens2,会保存 regexp 用来匹配 data 的格式;
const tokens1 = [ [{type: 0, value: "users"}], [{type: 1, value: "id", regexp: "", repeatable: false, optional: false}]
]
const tokens2 = [ [{type: 1, value: "data", regexp: ".*", repeatable: false, optional: false}]
] const enum TokenizerState { Static, Param, ParamRegExp, // custom re for a param ParamRegExpEnd, // check if there is any ? + * EscapeNext,
}`},{header:"token 生成权重 并创建完整正则匹配规则",slug:"token-生成权重-并创建完整正则匹配规则",content:""},{header:"权重规则",slug:"权重规则",content:`const enum PathScore { _multiplier = 10, Root = 9 * _multiplier, // just / Segment = 4 * _multiplier, // /a-segment SubSegment = 3 * _multiplier, // /multiple-:things-in-one-:segment Static = 4 * _multiplier, // /static Dynamic = 2 * _multiplier, // /:someId BonusCustomRegExp = 1 * _multiplier, // /:someId(\\\\d+) BonusWildcard = -4 * _multiplier - BonusCustomRegExp, // /:namedWildcard(.*) we remove the bonus added by the custom regexp BonusRepeatable = -2 * _multiplier, // /:w+ or /:w* BonusOptional = -0.8 * _multiplier, // /:w? or /:w* // these two have to be under 0.1 so a strict /:page is still lower than /:a-:b BonusStrict = 0.07 * _multiplier, // when options strict: true is passed, as the regex omits \\/? BonusCaseSensitive = 0.025 * _multiplier, // when options strict: true is passed, as the regex omits \\/?
}`},{header:"默认配置项",slug:"默认配置项",content:`export interface _PathParserOptions { // Makes the RegExp case sensitive. Defaults to false sensitive?: boolean // Should we disallow a trailing slash. Defaults to false strict?: boolean // Should the RegExp match from the beginning by prepending a \`^\` to it. Defaults to true start?: boolean // Should the RegExp match until the end by appending a \`$\` to it. Defaults to true end?: boolean
}
依旧以/users/:id 为例，将上一步生成的 tokens1 进一步解析生成 parser,根据设置的 _PathParserOptions逐步添加匹配规则，得到正则字符串 pattern
，调用正则 new RegExp得到最终正则对象 re
let pattern = '^/users/([^/]+?)$'
const re = new RegExp(pattern, options.sensitive ? '' : 'i')
// 最终解析出来的 parser
const result = { re: /^\\/user\\/([^/]+?)$/i, // url匹配规则 score: [[80], [60.7]], // url权重分值 keys: [{"name": "id", "repeatable": false, "optional": false}], // parse: function(){}, // stringify: function(){},
}`},{header:"insertMatcher",slug:"insertmatcher",content:"insertMatcher 函数中通过路由权重对 matchers 做了排序"},{header:"routerView组件",slug:"routerview组件",content:`当页面路由发生变化的时候，setup 中的计算属性 matchedRouteRef 会重新计算，从而得到与当前页面路由匹配的 ViewComponent,进而触发 render 函数渲染到当前页面上
export const RouterViewImpl = /*#__PURE__*/ defineComponent({ name: 'RouterView', inheritAttrs: false, props: { name: { type: String as PropType<string>, default: 'default', }, route: Object as PropType<RouteLocationNormalizedLoaded>, }, // setup(props, context) {} ，context 结构 setup(props, { attrs, slots, emit, expose }) {} setup(props, {attrs, slots}) { // 这里在vueRouter install 方法中从 vue 实例中注入了 routerViewLocationKey const injectedRoute = inject(routerViewLocationKey)! const routeToDisplay = computed(() => props.route || injectedRoute.value) const depth = inject(viewDepthKey, 0) // 获取当前的匹配路由组件的计算属性 matchedRouteRef (reference) const matchedRouteRef = computed<RouteLocationMatched | undefined>( () => routeToDisplay.value.matched[depth] ) provide(viewDepthKey, depth + 1) provide(matchedRouteKey, matchedRouteRef) provide(routerViewLocationKey, routeToDisplay) // 继续向子级组件注入 routerViewLocationKey const viewRef = ref<ComponentPublicInstance>() // watch at the same time the component instance, the route record we are // rendering, and the name watch( () => [viewRef.value, matchedRouteRef.value, props.name] as const, ([instance, to, name], [oldInstance, from, oldName]) => { // copy reused instances if (to) { // this will update the instance for new instances as well as reused // instances when navigating to a new route to.instances[name] = instance // the component instance is reused for a different route or name so // we copy any saved update or leave guards. With async setup, the // mounting component will mount before the matchedRoute changes, // making instance === oldInstance, so we check if guards have been // added before. This works because we remove guards when // unmounting/deactivating components if (from && from !== to && instance && instance === oldInstance) { if (!to.leaveGuards.size) { to.leaveGuards = from.leaveGuards } if (!to.updateGuards.size) { to.updateGuards = from.updateGuards } } } // trigger beforeRouteEnter next callbacks if ( instance && to && // if there is no instance but to and from are the same this might be // the first visit (!from || !isSameRouteRecord(to, from) || !oldInstance) ) { ;(to.enterCallbacks[name] || []).forEach(callback => callback(instance) ) } }, {flush: 'post'} ) return () => { const route = routeToDisplay.value const matchedRoute = matchedRouteRef.value // 当路由变更时候 计算属性matchedRouteRef也跟着改变，从而获取到真正的页面视图组件 ViewComponent const ViewComponent = matchedRoute && matchedRoute.components[props.name] // we need the value at the time we render because when we unmount, we // navigated to a different location so the value is different const currentName = props.name if (!ViewComponent) { return normalizeSlot(slots.default, {Component: ViewComponent, route}) } // props from route configuration const routePropsOption = matchedRoute!.props[props.name] const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === 'function' ? routePropsOption(route) : routePropsOption : null const onVnodeUnmounted: VNodeProps['onVnodeUnmounted'] = vnode => { // remove the instance reference to prevent leak if (vnode.component!.isUnmounted) { matchedRoute!.instances[currentName] = null } } // h() : Creates virtual DOM nodes (vnodes). ViewComponent即是与当前路由匹配的vue组件，最终router-view渲染成了实际的动态路由组件 const component = h( ViewComponent, assign({}, routeProps, attrs, { onVnodeUnmounted, ref: viewRef, }) ) // 这里返回的是一个 VNode return ( // pass the vnode to the slot as a prop. // h and <component :is="..."> both accept vnodes normalizeSlot(slots.default, {Component: component, route}) || component ) } },
})`},{header:"routerLink组件",slug:"routerlink组件",content:`routerLink 默认渲染成为一个 a 标签，并添加了 click事件，点击触发 link.navigate 方法，会调用 router 对象的 router.replace 或者 router.push,
最终调用的是浏览器history对象的 replaceState 或者 pushState,这会导致浏览器的url改变
// routerLink最终默认渲染的是 a 标签 （/src/RouterLink.ts）
return () => { const children = slots.default && slots.default(link) return props.custom ? children : h('a', { href: link.href, onClick: link.navigate, class: elClass.value, }, children )
} // 调用history对象方法改变url (/src/history/html5.ts)
history[replace ? 'replaceState' : 'pushState'](state, '', url)`},{header:"vueRouter 钩子函数的调用机制",slug:"vuerouter-钩子函数的调用机制",content:""},{header:"导航流程",slug:"导航流程",content:`导航流程
Explanation 1.导航被触发
调用 router.navigate() 2.在失活的组件里调用 beforeRouteLeave 守卫
组件内守卫：可以访问 vm 即 this,router.navigate 中提取当前组件中的 beforeRouteLeave 钩子函数 3.调用全局的 beforeEach 守卫
全局前置守卫：可选的第三个参数 next 4.在重用的组件里调用 beforeRouteUpdate 守卫
组件内守卫:可以访问 vm 即 this,router.navigate 中提取当前组件中的 beforeRouteUpdate 钩子函数 5.在路由配置里调用 beforeEnter
路由独享的守卫, 配置在路由对象上 6.解析异步路由组件 7.在被激活的组件里调用 beforeRouteEnter
组件内守卫：,router.navigate 中提取当前组件中的 beforeRouteEnter 钩子函数 ,不能访问 this，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建，可传入第三参数 next,beforeRouteEnter 是支持给 next 传递回调的唯一守卫 ,回调函数的参数是当前 vue 组件实例 vm 8.调用全局的 beforeResolve 守卫
全局解析守卫 9.导航被确认 10.调用全局的 afterEach 钩子
全局后置钩子 11.触发 DOM 更新 12.调用 beforeRouteEnter 守卫中传给 next的回调函数，创建好的组件实例会作为回调函数的参数传入
在 routerView 组件内触发 next 的回调，并传入 vm 实例`},{header:"pushWithRedirect 方法",slug:"pushwithredirect-方法",content:`路由想要发生变化，就是通过改变路径完成的，路由对象提供了很多改变路径的方法，比如 router.push、router.replace，它们的底层最终都是通过 pushWithRedirect 完成路径的切换。
pushWithRedirect 会对跳转的路由进行 resolve(to) 解析， 因为参数 to 可能有多种情况，可以是一个表示路径的字符串，也可以是一个路径对象，所以要先经过一层 resolve
返回一个新的路径对象。
接下来执行 navigate 方法，它实际上是执行路由切换过程中的一系列导航守卫函数，我们后续会介绍。navigate 成功后，会执行 finalizeNavigation 完成导航, 在这里完成真正浏览器url路径的切换。
并且会更新当前的路径 currentRoute 的值, 它是当前 router 实例上的一个属性. function pushWithRedirect( to: RouteLocationRaw | RouteLocation, redirectedFrom?: RouteLocation
): Promise<NavigationFailure | void | undefined> { const targetLocation: RouteLocation = (pendingLocation = resolve(to)) const from = currentRoute.value const data: HistoryState | undefined = (to as RouteLocationOptions).state const force: boolean | undefined = (to as RouteLocationOptions).force // to could be a string where \`replace\` is a function const replace = (to as RouteLocationOptions).replace === true const shouldRedirect = handleRedirectRecord(targetLocation) if (shouldRedirect) return pushWithRedirect( assign(locationAsObject(shouldRedirect), { state: data, force, replace, }), // keep original redirectedFrom if it exists redirectedFrom || targetLocation ) // if it was a redirect we already called \`pushWithRedirect\` above const toLocation = targetLocation as RouteLocationNormalized toLocation.redirectedFrom = redirectedFrom let failure: NavigationFailure | void | undefined if (!force && isSameRouteLocation(stringifyQuery, from, targetLocation)) { failure = createRouterError<NavigationFailure>( ErrorTypes.NAVIGATION_DUPLICATED, {to: toLocation, from} ) // trigger scroll to allow scrolling to the same anchor handleScroll( from, from, // this is a push, the only way for it to be triggered from a // history.listen is with a redirect, which makes it become a push true, // This cannot be the first navigation because the initial location // cannot be manually navigated to false ) } return (failure ? Promise.resolve(failure) : navigate(toLocation, from)) .catch((error: NavigationFailure | NavigationRedirectError) => isNavigationFailure(error) ? // navigation redirects still mark the router as ready isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT) ? error : markAsReady(error) // also returns the error : // reject any unknown error triggerError(error, toLocation, from) ) .then((failure: NavigationFailure | NavigationRedirectError | void) => { if (failure) { if ( isNavigationFailure(failure, ErrorTypes.NAVIGATION_GUARD_REDIRECT) ) { return pushWithRedirect( // keep options assign(locationAsObject(failure.to), { state: data, force, replace, }), // preserve the original redirectedFrom if any redirectedFrom || toLocation ) } } else { // finalizeNavigation函数中执行 window.history 的　push / replace 方法 // finalizeNavigation 内部调用 markAsReady 函数中监听了 window上的 popstate 事件 failure = finalizeNavigation( toLocation as RouteLocationNormalizedLoaded, from, true, replace, data ) } // 执行 全局导航守卫 AfterEach 钩子函数 triggerAfterEach( toLocation as RouteLocationNormalizedLoaded, from, failure ) return failure })
}`},{header:"router.navigate 方法",slug:"router-navigate-方法",content:`navigate 执行导航守卫的方式是先构造 guards 数组，数组中每个元素都是一个返回 Promise 对象的函数,然后通过 runGuardQueue 去执行这些 guards function navigate( to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded
): Promise<any> { let guards: Lazy<any>[] const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from) // all components here have been resolved once because we are leaving // 路由导航从当前路由切换至下一个路由，提取当前组件中的 beforeRouterLeave 钩子函数 guards = extractComponentsGuards( leavingRecords.reverse(), 'beforeRouteLeave', to, from ) // leavingRecords is already reversed for (const record of leavingRecords) { record.leaveGuards.forEach(guard => { guards.push(guardToPromiseFn(guard, to, from)) }) } const canceledNavigationCheck = checkCanceledNavigationAndReject.bind( null, to, from ) guards.push(canceledNavigationCheck) // run the queue of per route beforeRouteLeave guards return ( runGuardQueue(guards) // ① 调用 beforeRouteLeave 钩子函数 .then(() => { // check global guards beforeEach guards = [] for (const guard of beforeGuards.list()) { // ② beforeEach 钩子函数 guards.push(guardToPromiseFn(guard, to, from)) } guards.push(canceledNavigationCheck) return runGuardQueue(guards) }) .then(() => { // check in components beforeRouteUpdate guards = extractComponentsGuards( updatingRecords, 'beforeRouteUpdate', to, from ) for (const record of updatingRecords) { record.updateGuards.forEach(guard => { guards.push(guardToPromiseFn(guard, to, from)) }) } guards.push(canceledNavigationCheck) // run the queue of per route beforeEnter guards return runGuardQueue(guards) // ③ 调用 beforeRouteUpdate 钩子函数 }) .then(() => { // check the route beforeEnter guards = [] for (const record of to.matched) { // do not trigger beforeEnter on reused views // ④ 路由独享的守卫： route上的beforeEnter钩子函数 if (record.beforeEnter && !from.matched.includes(record)) { if (Array.isArray(record.beforeEnter)) { for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from)) } else { guards.push(guardToPromiseFn(record.beforeEnter, to, from)) } } } guards.push(canceledNavigationCheck) // run the queue of per route beforeEnter guards return runGuardQueue(guards) }) .then(() => { // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component> // clear existing enterCallbacks, these are added by extractComponentsGuards to.matched.forEach(record => (record.enterCallbacks = {})) // check in-component beforeRouteEnter guards = extractComponentsGuards( enteringRecords, 'beforeRouteEnter', to, from ) guards.push(canceledNavigationCheck) // run the queue of per route beforeEnter guards return runGuardQueue(guards) // ⑤ beforeRouteEnter 钩子 }) .then(() => { // check global guards beforeResolve guards = [] for (const guard of beforeResolveGuards.list()) { // ⑥ beforeResolve 路由守卫 guards.push(guardToPromiseFn(guard, to, from)) } guards.push(canceledNavigationCheck) return runGuardQueue(guards) }) // catch any navigation canceled .catch(err => isNavigationFailure(err, ErrorTypes.NAVIGATION_CANCELLED) ? err : Promise.reject(err) ) )
}`},{header:"runGuardQueue方法",slug:"runguardqueue方法",content:`runGuardQueue 通过数组的 reduce 方法，链式执行 guard 函数，每个 guard 函数都会返回一个 Promise 对象
/** * * @param guards * example: guards [ fn1, fn2 ] * promise.then( () => fn1() ).then( ()=> fn2() ) */
function runGuardQueue(guards: Lazy<any>[]): Promise<void> { return guards.reduce( (promise, guard) => promise.then(() => guard()), Promise.resolve() )
}`},{header:"guardToPromiseFn方法",slug:"guardtopromisefn方法",content:`我们添加的导航守卫是一个普通函数，并不是一个返回 Promise 对象的函数，那是怎么做的呢？ 原来在把 guard 添加到 guards 数组前，都会执行 guardToPromiseFn
函数把普通函数 Promise 化 。guardToPromiseFn 函数返回一个新的函数，这个函数内部会执行 guard 函数。
这里我们要注意 next 方法的设计，当我们在导航守卫中执行 next 时，实际上就是执行这里定义的 next 函数。
在执行 next 函数时，如果不传参数，那么则直接 resolve，执行下一个导航守卫；如果参数是 false，则创建一个导航取消的错误 reject 出去；如果参数是一个 Error 实例，则直接执行
reject，并把错误传递出去；如果参数是一个路径对象，则创建一个导航重定向的错误传递出去。 有些时候我们写导航守卫不使用 next 函数，而是直接返回 true 或 false，这种情况则先执行如下代码：
guardCall = Promise.resolve(guardReturn);
把导航守卫的返回值 Promise 化，然后再执行 guardCall.then(next)，把导航守卫的返回值传给 next 函数。 当然，如果你在导航守卫中定义了第三个参数 next
，但是你没有在函数中调用它，这种情况也会报警告。
beforeRouteEnter 导航守卫的 next 可以传入回调，当 record 存在的时候会给 record 上绑定 enterCallbacks 数组， 并将 next 回调函数 push
进去，并最终在 routerView 中通过 watch [viewRef.value, matchedRouteRef.value, props.name] 三个属性的变化来最终调用 next
的回调函数，并传入当前的 instance 实例
export function guardToPromiseFn( guard: NavigationGuard, to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded
): () => Promise<void>
export function guardToPromiseFn( guard: NavigationGuard, to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, record: RouteRecordNormalized, name: string
): () => Promise<void>
export function guardToPromiseFn( guard: NavigationGuard, to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, record?: RouteRecordNormalized, name?: string
): () => Promise<void> { // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place const enterCallbackArray = record && // name is defined if record is because of the function overload // 注意这里，只有当 record 存在的时候才进行后续的赋值操作，给record上绑定 enterCallbacks 回调 (record.enterCallbacks[name!] = record.enterCallbacks[name!] || []) return () => new Promise((resolve, reject) => { const next: NavigationGuardNext = ( valid?: boolean | RouteLocationRaw | NavigationGuardNextCallback | Error ) => { if (valid === false) reject( createRouterError<NavigationFailure>( ErrorTypes.NAVIGATION_ABORTED, { from, to, } ) ) else if (valid instanceof Error) { reject(valid) } else if (isRouteLocation(valid)) { reject( createRouterError<NavigationRedirectError>( ErrorTypes.NAVIGATION_GUARD_REDIRECT, { from: to, to: valid, } ) ) } else { if ( enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are record!.enterCallbacks[name!] === enterCallbackArray && typeof valid === 'function' ) enterCallbackArray.push(valid) resolve() } } // wrapping with Promise.resolve allows it to work with both async and sync guards const guardReturn = guard.call( record && record.instances[name!], to, from, next ) let guardCall = Promise.resolve(guardReturn) if (guard.length < 3) guardCall = guardCall.then(next) guardCall.catch(err => reject(err)) })
}`},{header:"reference",slug:"reference",content:`VueRouter4路由权重
Path Ranking
Path Ranker
VueRouter4 核心源码解读-上
VueRouter4 核心源码解读-下`}]},{path:"/others/basicCSknowledge.html",title:"basic cs",pathLocale:"/",contents:[{header:"cs UI",slug:"cs-ui",content:`UI （user interface）,根据操作系统不同，会有不同的界面的开发方式。安卓、ios、windows 等都有各自的创建 ui 的库，但是更底层的绘图库却是有标准的：跨平台的绘图 api 接口标准 OpenGL 以及 windows 下的 DirectX。
因为各个操作系统绘制 ui 的方式不同，所以跨平台的绘制方案逐渐流行开来，也就是浏览器。基于浏览器服务器的软件架构叫做 B/S 架构，而基于客户端的叫做 C/S 架构。在一段时间内，B/S 架构的应用越来越多，C/S 架构的应用也更多的混合 B/S 的方案来实现。
为了节省成本，大家又摸索出了跨端引擎的方案，也就是说还是通过网页来写渲染和交互的逻辑，但是渲染用的 api 是由安卓、ios 分别实现，这样就实现了跨端的渲染，逻辑部分也是由 JS 来写，一些需要的设备能力 api 分别由安卓、ios 实现然后注入到 JS 引擎里。
和安卓、ios 的跨端方案逐渐流行一样，桌面端也出现了 electron 的方案，通过网页来渲染界面和写逻辑，需要用的 api 注入到 JS 引擎中，而且 electron 是直接把 Node.js 的 api 注入到了 JS 引擎中，在网页里实现一些原生功能的时候可以直接使用 Node.js 的 api，此外还有一些 api 是 elctron 额外注入的，比如剪贴板、电源监视器等。`}]},{path:"/others/docker.html",title:"docker",pathLocale:"/",contents:[{header:"常见问题",slug:"常见问题",content:`一个机器(可以访问外网)导出镜像，另一个机器(不能访问外网)导入镜像-(No command specified)
修改 docker 容器 hosts # 优先级 ： dns缓存 > hosts > dns服务
# 在docker-compose.yml文件中，通过配置参数extra_hosts来实现
# 会自动写入到 容器中/etc/hosts 文件中
extra_hosts: - "hostname1:162.242.195.82" - "hostname2:50.31.209.229" docker 网络 # docker-compose up -d 默认会以当前文件夹名为前缀创建一个 folderName-default 的默认网络，并将当前 service 中的服务加入到这个网络中
# 使用 服务名称:port 就可以实现当前网络中各个容器的互联`},{header:"常用命令",slug:"常用命令",content:`docker 命令
#查看docker网络
docker networks ls
#查看运行容器
docker ps #进入当前容器交互式界面
docker exec -it containerId /bin/bash
docker-compose 命令
docker-compose up
docker-compose up -d
docker-compose down
docker-compose restart
#查看指定服务的最后 1000 行日志
docker-compose logs --tail 1000 service-name`},{header:"使用 busybox 测试网络",slug:"使用-busybox-测试网络",content:`#查看docker网络
docker networks ls
docker run -it --net network-name --name busybox busybox
# docker run -it --net testApp-boot_mynet busybox
# ping your-service-name`},{header:"使用docker内部的桥接网络进行容器之间访问",slug:"使用docker内部的桥接网络进行容器之间访问",content:`docker-compose.yaml 文件
services: redis: image: redis # unnecessary port expose # ports: # - "6379:6379" container_name: redis networks: - mynet nginx: image: nginx:latest volumes: - /F/workspace/testApp/testApp-boot/testApp.conf:/etc/nginx/conf.d/testApp.conf - /F/workspace/testApp/testApp-boot/testApp.com.key:/etc/nginx/cert/testApp.com.key - /F/workspace/testApp/testApp-boot/testApp.com.pem:/etc/nginx/cert/testApp.com.pem - /F/workspace/testApp/testApp-vue/dist:/home/nd-test/html/ ports: - "443:443" container_name: nginx networks: - mynet jdk: image: openjdk:8 # unnecessary port expose # ports: # - "9000:9000" volumes: - /F/workspace/testApp/testApp-boot/target/testApp-xc-2.0.0.jar:/home/nd-test/jar/testApp-xc-2.0.0.jar command: nohup java -jar /home/nd-test/jar/testApp-xc-2.0.0.jar --spring.profiles.active=prod > /home/nd-test/jar/stdout.log 2>&1 & depends_on: - redis container_name: jdk networks: - mynet
networks: mynet:
nginx.conf 配置，docker 中使用自定义网络时候，比如上面的 mynet,会启用内嵌的 dns 服务，进入镜像中即可查看 /etc/resolv.conf, 默认为： 127.0.0.11
server { listen 80; server_name 127.0.0.1; rewrite ^(.*)$ https://$server_name$1 permanent;
} server { listen 443 ssl; server_name 127.0.0.1; ssl_certificate /etc/nginx/cert/testApp.com.pem; ssl_certificate_key /etc/nginx/cert/testApp.com.key; ssl_session_timeout 5m; client_max_body_size 200m; # Docker DNS 使用 Docker DNS 解析 resolver 127.0.0.11; location /testApp/api { client_max_body_size 500M; client_body_buffer_size 500M; proxy_pass http://jdk:9000; # 使用服务名称进行访问 } location /testApp { alias /home/nd-test/html; index index.html index.htm; try_files $uri $uri/ /testApp/index.html; } location ~^/(WEB-INF)/{ deny all; } } 参考 Check connection between nodes if there is no 'ping' command
How to NGINX Reverse Proxy outside of Docker to proxy_pass to docker containers
Docker网络高级知识`}]},{path:"/others/eslint.html",title:"eslint",pathLocale:"/",contents:[{header:"eslint in vue",slug:"eslint-in-vue",content:`eslint-plugin-vue This plugin allows us to check the <template> and <script> of .vue files with ESLint, as well as Vue code in .js
files.
plugins插件 ESLint虽然可以定义很多的
rules，以及通过extends来引入更多的规则，但是说到底只是检查JS语法。如果需要检查Vue中的template或者React中的jsx，就束手无策了。所以引入插件的目的就是为了增强ESLint的检查能力和范围。
在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。 @vue/cli-plugin-eslint eslint plugin for vue-cli, Injected Commands: vue-cli-service lint babel-eslint babel-eslint is now @babel/eslint-parser. babel-eslint allows you to lint ALL valid Babel code with the
fantastic ESLint.You only need to use babel-eslint if you are using types (Flow) or experimental features not supported
in ESLint itself yet. Otherwise try the default parser (you don't have to use it just because you are using Babel).
ESLint allows custom parsers. This is great but some of the syntax nodes that Babel supports aren't supported by ESLint.
When using this plugin, ESLint is monkeypatched and your code is transformed into code that ESLint can understand. eslint-plugin-prettier Runs Prettier as an ESLint rule and reports differences as individual ESLint issues. eslint-config-prettier Turns off all rules that are unnecessary or might conflict with Prettier.`},{header:"webstorm eslint error",slug:"webstorm-eslint-error",content:`ESLint: Please specify path to 'eslint' package tried to install eslint globally and restart your IDE : npm install --g eslint Error while loading rule 'prettier/prettier' try upgrade eslint Why do I keep getting Delete 'cr' [prettier/prettier]? Try setting the "endOfLine":"auto" in your .prettierrc (or .prettierrc.json) file (inside the
object) stackoverflow`},{header:"prettier",slug:"prettier",content:`webstorm plugins market: install prettier
workspace: npm install --save-dev --save-exact prettier or npm install --global prettier
Settings/Preferences dialog (Ctrl+Alt+S), go to Languages & Frameworks | JavaScript | Prettier, select prettier
installation
Reformat code with Prettier: press Ctrl+Alt+Shift+P
Set Prettier as default formatter : go to Languages & Frameworks | JavaScript | Prettier, and select
the On code reformat checkbox.`},{header:"git integration",slug:"git-integration",content:`husky-哈士奇 Modern native Git hooks made easy, npm install husky -D lint-staged Run linters against staged git files and don't let 💩 slip into your code base
npm install -D lint-staged
# package.json "husky": { "hooks": { "pre-commit": "lint-staged" } }, "lint-staged": { "*.{js,jsx}": [ "prettier --write", "eslint --fix", "git add" ], "*.{html,css,less,ejs}": [ "prettier --write", "git add" ] }`},{header:"files related to prettier && eslint",slug:"files-related-to-prettier-eslint",content:`eslintrc.js
module.exports = { env: { browser: true, node: true, es6: true, }, extends: [ 'eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended', ], globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly', }, parserOptions: { ecmaVersion: 2020, sourceType: 'module', }, plugins: ['vue'], rules: { 'vue/multi-word-component-names': ['warn'], },
}
.eslintignore
src/views/pureHtml/**
.prettierignore
.github
public
dist
prettier.config.js
module.exports = { trailingComma: 'es5', tabWidth: 4, semi: false, singleQuote: true, endOfLine: 'auto',
}`},{header:"git 规范 commitizen",slug:"git-规范-commitizen",content:`使用 cz 命令代替 git commit
npm install -g commitizen
commitizen init cz-conventional-changelog --save-dev --save-exact`},{header:"Reference",slug:"reference",content:`eslint和prettier
github-example`}]},{path:"/others/git.html",title:"git常用命令",pathLocale:"/",contents:[{header:"git常用命令",slug:"git常用命令",content:""},{header:"git rebase",slug:"git-rebase",content:"Note: 永远不要去 rebase 本地之外的任何提交"},{header:"用法一:通过 rebase 策略执行 git pull",slug:"用法一-通过-rebase-策略执行-git-pull",content:`git pull 实际上等于 git fetch + git merge,这样会添加一条 merge 的commit记录。 我们可以在第二步直接用 git rebase 替换 git merge 来合并 fetch
取得的变更，作用同样是避免额外的 merge 提交以保持线性的提交历史。也可以 用 git pull --rebase 命令来代替 git fetch + git rebase`},{header:"用法二: 合并多个没有意义的 commit",slug:"用法二-合并多个没有意义的-commit",content:`git rebase -i [start] [end],-i 会唤起交互式界面让用户编辑以完成变基操作，其中[start]与[end]分别对应了需要操作的commit id区间 (左开右闭)， 如果省略了[end]
，则该区间的终点默认是当前分支HEAD所指向的commit 参考链接: git rebase的用法`},{header:"git reset vs git revert (版本回退)",slug:"git-reset-vs-git-revert-版本回退",content:`Note: 已经push到远程仓库的commit不允许reset,
如果commit已经被push到远程仓库上了，也就意味着其他开发人员就可能基于这个commit形成了新的commit，这时你去reset，就会造成其他开发人员的提交历史莫名其妙的丢失
git reset 会回退当前 HEAD 到指定 commit id, 比如现在有 commit1, commit2, commit3 共三条 commit 记录，现在需要回退到 commit1
,回退之后， commit2, commit3的提交信息在默认(--mixed情况下)会被 放到缓冲区
git reset 选项
--mixed 重置索引，但不重置工作树，更改后的文件标记为未提交（add）的状态。默认操作。
--soft 回退后a分支修改的代码被保留并标记为add的状态（git status 是绿色的状态）
--hard 重置索引和工作树，并且a分支修改的所有文件和中间的提交，没提交的代码都被丢弃了。
--merge 和--hard类似，只不过如果在执行reset命令之前你有改动一些文件并且未提交，merge会保留你的这些修改，hard则不会。【注：如果你的这些修改add过或commit过，merge和hard都将删除你的提交】
--keep 和--hard类似，执行reset之前改动文件如果是a分支修改了的，会提示你修改了相同的文件，不能合并。如果不是a分支修改的文件，会移除缓存区。git status还是可以看到保持了这些修改。 git revert 回撤销历史提交中的指定 commit id,但是它的 HEAD 不是往回退，而是重新创建一个 commit 记录，让 HEAD 前进一步，相当于创建一个撤销的commit来对冲历史提交的记录`},{header:"[git cherry-pick] (https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)",slug:"git-cherry-pick-https-www-ruanyifeng-com-blog-2020-04-git-cherry-pick-html",content:""},{header:"git tag",slug:"git-tag",content:`# 删除远程tag
git push origin --delete <tagname>
# 删除本地分支tag
git tag -d <tagname>
# 推送全部tag
git push origin --tags
# 推送单个tag
git push origin <tagname>
# 轻量tag
git tag <tagname>
# 附注tag
git tag -a <tagname> -m "tag submit msg"
# 查看tag
git tag`},{header:"FAQ",slug:"faq",content:""},{header:"Git origin/master",slug:"git-origin-master",content:"远程仓库名字 “origin” 与分支名字 “master” 一样，在 Git 中并没有任何特别的含义一样。 同时 “master” 是当你运行 git init 时默认的起始分支名字，原因仅仅是它的广泛使用，“origin” 是当你运行 git clone 时默认的远程仓库名字"}]},{path:"/others/github.html",title:"如何使用Github",pathLocale:"/",contents:[{header:"你可能会用到的网站",slug:"你可能会用到的网站",content:"lib4dev - Find the best library for any programming language using the lib4dev."}]},{path:"/others/gradle_basic.html",title:"gradle_basic",pathLocale:"/",contents:[{header:"gradle set proxy",slug:"gradle-set-proxy",content:`# gradle.properties 文件
systemProp.http.proxyHost=127.0.0.1
systemProp.http.proxyPort=1081
systemProp.https.proxyHost=127.0.0.1
systemProp.https.proxyPort=1081`}]},{path:"/others/jenkins.html",title:"jenkins问题",pathLocale:"/",contents:[{header:"",slug:"",content:`https://blog.csdn.net/u013670453/article/details/114489201
https://stackoverflow.com/questions/70663523/the-unauthenticated-git-protocol-on-port-9418-is-no-longer-supported
git config --global url."https://github.com/".insteadOf git://github.com/`},{header:"jenkins 中使用 yarn",slug:"jenkins-中使用-yarn",content:`构建-执行 shell 中全局安装 yarn，如果你在服务器上提前安装好了 yarn，可能在 jenkins 构建过程中找不到 yarn 命令，如果先使用 npm 安装 yarn， 再执行 yarn
命令就可以，我也不知道为什么
#!/bin/bash
npm install -g yarn
yarn -v
# Don’t generate a yarn.lock lockfile.
yarn install --pure-lockfile
yarn run build:test`}]},{path:"/others/jest.html",title:"jest",pathLocale:"/",contents:[{header:"notes",slug:"notes",content:`testmatch:The glob patterns Jest uses to detect test files. By default it looks for .js, .jsx, .ts and .tsx files inside
of __tests__ folders, as well as any files with a suffix of .test or .spec (e.g. Component.test.js or
Component.spec.js). It will also find files called test.js or spec.js.`}]},{path:"/others/linuxShell.html",title:"shell命令",pathLocale:"/",contents:[{header:"拼接字符串",slug:"拼接字符串",content:`shell字符串可以用单引号，也可以用双引号，也可以不用引号。双引号的优点：双引号里可以有变量，双引号里可以出现转义字符
your_name="runoob"
# 使用双引号拼接
greeting="hello, "$your_name" !"
greeting_1="hello, \${your_name} !"
echo $greeting $greeting_1`},{header:"shell数组",slug:"shell数组",content:`在 Shell 中，用括号来表示数组，数组元素用空格符号分割开,例如array_name=(value0 value1 value2 value3),Bash Shell 只支持一维数组（不支持多维数组），初始化时不需要定义数组大小
读取数组元素值的一般格式是：\${数组名[下标]}
使用 @ 符号可以获取数组中的所有元素,如 echo \${array_name[@]}
在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为：$n。n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推
原生bash不支持简单的数学运算，但是可以通过其他命令来实现，例如 awk 和 expr，expr 最常用,表达式和运算符之间要有空格，例如 2+2 是不对的，必须写成 2 + 2。完整的表达式要被 backtic包括 #!/bin/bash
val=\`expr 2 + 2\`
echo "两数之和为 : $val" $? return value of the last executed command.`},{header:"shell变量",slug:"shell变量",content:'定义变量时，变量名不加美元符号 your_name="runoob.com", 变量名和等号之间不能有空格\n使用一个定义过的变量，只要在变量名前面加美元符号即可 echo $your_name 或者 echo ${your_name}，变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界'},{header:"shell字符串",slug:"shell字符串",content:`字符串是shell编程中最常用最有用的数据类型，字符串可以用单引号，也可以用双引号，也可以不用引号。
单引号字符串的限制： 单引号里的任何字符都会原样输出，单引号字符串中的 变量 是无效的；
单引号字串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用。 双引号的优点： 双引号里可以有变量
双引号里可以出现转义字符`},{header:"参考链接",slug:"参考链接",content:`shell特殊变量 https://man.linuxde.net/
https://github.com/nodesource/distributions/blob/master/README.md#deb`},{header:"定时任务",slug:"定时任务",content:`crontab
一次性定时任务at`},{header:"ubuntu apt-get命令 阿里云镜像更换",slug:"ubuntu-apt-get命令-阿里云镜像更换",content:""},{header:"jdk安装",slug:"jdk安装",content:""}]},{path:"/others/longmanMddPicEtractor.html",title:"mdx 图片提取",pathLocale:"/",contents:[{header:"",slug:"",content:`安装 mdx 解压工具
#https://blog.csdn.net/qq_21583139/article/details/125881382
#https://pypi.org/project/mdict-utils/
pip3 install --proxy http://localhost:1081 mdict-utils
#Unpack MDX mdd
mdict -x dict.mdx -d ./mdx
mdict -x dict.mdd -d ./mdd
提取文件
package com.company.myutils; import javax.xml.bind.DatatypeConverter;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.regex.Matcher;
import java.util.regex.Pattern; /** * @author: administrator * @date: 2023/2/27 15:13 * 提取 mdd mdx: * https://zhuanlan.zhihu.com/p/512906029 */ public class MddImgExtractor { public static void main(String[] args) throws IOException { String imgReg = "base64=\\"([^\\"]+)\\""; File file = new File("F:\\\\workspace\\\\Demo\\\\LDOCE5_v1.35\\\\mdx\\\\1-35.mdx.txt"); FileReader fileReader = new FileReader(file, StandardCharsets.UTF_8); BufferedReader bufferedReader = new BufferedReader(fileReader); String line = bufferedReader.readLine(); System.out.println(line.length()); int counter = 0; String lineLeft = ""; while (line != null) { Pattern pattern = Pattern.compile(imgReg, Pattern.CASE_INSENSITIVE); Matcher matcher = pattern.matcher(lineLeft + line); while (matcher.find()) { writeFile(matcher.group(1), counter); counter++; } try { lineLeft = line.substring(matcher.end()); } catch (Exception e) { lineLeft = ""; } line = bufferedReader.readLine(); } } public static void writeFile(String base64String, int counter) { String[] strings = base64String.split(","); String extension; switch (strings[0]) { //check image's extension case "data:image/jpeg;base64": extension = "jpeg"; break; case "data:image/png;base64": extension = "png"; break; default://should write cases for more images types extension = "jpg"; break; } //convert base64 string to binary data if (strings.length > 1) { byte[] data = DatatypeConverter.parseBase64Binary(strings[1]); String path = "F:\\\\workspace\\\\Demo\\\\LDOCE5_v1.35\\\\images\\\\" + counter + "." + extension; File file = new File(path); try (OutputStream outputStream = new BufferedOutputStream(new FileOutputStream(file))) { outputStream.write(data); } catch (IOException e) { e.printStackTrace(); } } }
}`}]},{path:"/others/nginx.html",title:"nginx",pathLocale:"/",contents:[{header:"Nginx 报 403",slug:"nginx-报-403",content:`默认情况下 Nginx 的 user 配置为 nginx,将 nginx 改为 root ,重启 nginx 即可
# /etc/nginx/nginx.conf
user nginx;`},{header:"You need to know",slug:"you-need-to-know",content:"windows 下 nginx 更改配置不生效原因（可能运行了多个nginx进程，杀掉后重启nginx）"},{header:"reference",slug:"reference",content:`nginx跨域配置1
nginx跨域配置2
nginx location 规则(优先级)
nginx 负载均衡
nginx core module`}]},{path:"/others/npm.html",title:"NPM-node package manager",pathLocale:"/",contents:[{header:"NPM Scripts operators",slug:"npm-scripts-operators",content:`npm 脚本的原理非常简单。每当执行 npm run，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm
脚本里面。 比较特别的是，npm run 新建的这个 Shell，会将当前目录的 node_modules/.bin 子目录加入 PATH 变量，执行结束后，再将 PATH 变量恢复原样。
由于 npm 脚本的唯一要求就是可以在 Shell 执行，因此它不一定是 Node 脚本，任何可执行文件都可以写在里面。 npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是 0，npm
就认为这个脚本执行失败。
由于 npm 脚本就是 Shell 脚本，因为可以使用 Shell 通配符。* 表示任意文件名，** 表示任意一层子目录。 Use && (double ampersand) for sequential execution.
Use & (single ampersand) for parallel execution.
Use | to pipe the stdout of one command into the stdin of the next. (do-something | something else)
Use > to write the stdout of a command to a file. (do-something > file)
Use < to send the contents of a file to a command's stdin. (command < file)`},{header:".npmrc文件",slug:"npmrc文件",content:`npm gets its config settings from the command line, environment variables, and npmrc files.
Lines in .npmrc files are interpreted as comments when they begin with a ; or # character.
For a list of available configuration options,
see config.
For specific packages like node-sass, you can check the .npmrc parameter
on gitHub repository`},{header:"node-sass安装问题",slug:"node-sass安装问题",content:`在项目根目录新建文件 .npmrc
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
electron_mirror=https://npm.taobao.org/mirrors/electron/
registry=https://registry.npm.taobao.org`},{header:"Reference",slug:"reference",content:`阮一峰 npm_scripts
How to Use npm as a Build Tool
Awesome npm
Awesome npm scripts`}]},{path:"/others/tomcat.html",title:"tomcat",pathLocale:"/",contents:[{header:"",slug:"",content:`tomcat设置多个端口，多个端口对应多个应用
tomcat config 文件`}]},{path:"/others/uniapp.html",title:"uniapp",pathLocale:"/",contents:[{header:"名词",slug:"名词",content:`wap2app: wap2app 是一个将现有M站（也称手机wap站，区别于pc的web站）快速发布成 App 的增强方案，通过 DCloud 的 wap2app
框架，进行简单的配置和必要的编程，即可完成M站的体验强化，达到原生应用的功能体验，进而再发布为原生安装包或流应用。
uniapp: 开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。
5+ APP: HTML5 Plus移动App，简称5+App，是一种基于HTML、JS、CSS编写的运行于手机端的App，这种App可以通过扩展的JS API任意调用手机的原生能力，实现与原生App同样强大的功能和性能。
其实就是个html 5 的手机网页。但用这个框架功能更强大。Native.js的详细教程可以参考：5+ App开发Native.js入门指南`},{header:"uniapp 插件开发",slug:"uniapp-插件开发",content:`uniapp 离线打包 配置app签名 uniapp 离线打包 申请appKey uniapp appkey 配置错误 uniapp plugin 开发 微信开放平台Android平台应用签名怎么填写:
我们可以拿到MD5为：24:D2:CA:F6:3A:1A:13:ED:8D:B6:8E:19:82:E1:F3:F5,
但是微信开放平台输入这个格式则是错误的，我们需要去掉中间的间隔“：”冒号，最终我们输入：24D2CAF63A1A13ED8DB68E1982E1F3F5，这个就是微信开放平台需要的安卓 APP 签名的 MD5，也就是平台所需的应用签名。`},{header:"uniapp 开发注意事项",slug:"uniapp-开发注意事项",content:`uni.getSystemInfoSync: 这个接口必须在 onReady 中调用，不能在 app 的 onLaunch 中调用,否则会导致高度计算不准确 屏幕高度 = 原生NavigationBar高度（含状态栏高度） + 可使用窗口高度 + 原生TabBar高度
windowHeight 不包含 NavigationBar 和 TabBar 的高度
Web端，windowTop 等于 NavigationBar 高度，windowBottom 等于 TabBar 高度
App端，windowTop 等于透明状态 NavigationBar 高度，windowBottom 等于透明状态 TabBar 高度
高度相关信息，要放在 onReady 里获取。太早取不到`}]},{path:"/others/vim.html",title:"vim快捷键",pathLocale:"/",contents:[{header:"",slug:"",content:`yy 复制当前行，p 向下一行粘贴，P向上一行粘贴
dd 删除当前行
查找：/word并回车会在文档中搜索 word 这个单词
跳到文件的第一行用 gg，最后一行用 G。
光标移动 hjkl 对应 上下左右方向键，可以移动光标
w 光标移动到下一个单词的开头
e 光标移动到下一个单词的结尾
home 移动光标到行首
end 移动光标到行末尾
ctrl+f 查看下一页内容，ctrl+b 查看上一页内容
u 相当于Ctrl+z,撤销操作
Esc退出编辑模式，回到一般模式中`},{header:"vim 命令",slug:"vim-命令",content:`:set nu,显示行号
:set nonu,取消显示行号
:n,定位到第n行
:wq 储存后离开，若为 :wq! 则为强制储存后离开
:q 离开 vim
:w 将编辑的数据写入硬盘档案中
:! command 暂时离开 vim 到指令行模式下执行 command 的显示结果！例如:! ls /home即可在 vim 当中察看 /home 底下以 ls 输出的档案信息！`},{header:"bash 快捷键",slug:"bash-快捷键",content:`ctrl-w 删除你键入的最后一个单词
ctrl-u 可以删除行内光标所在位置之前的内容
alt-b 和 alt-f 可以以单词为单位移动光标
ctrl-a 可以将光标移至行首，ctrl-e 可以将光标移至行尾
ctrl-k 可以删除光标至行尾的所有内容，ctrl-l 可以清屏。
键入 man readline 可以查看 Bash 中的默认快捷键。内容有很多，例如 alt-. 循环地移向前一个参数，而 alt-* 可以展开通配符`}]},{path:"/others/windows-cmd.html",title:"windows CMD 常用命令",pathLocale:"/",contents:[{header:"一个简单的.bat脚本",slug:"一个简单的-bat脚本",content:`@echo off
start cmd /k "http-server -c-1 --port 8888"
start http://localhost:8888`},{header:"定时关机",slug:"定时关机",content:"1小时后关机：shutdown -s -t 3600"},{header:"远程连接",slug:"远程连接",content:"mstsc"},{header:"lockScreen",slug:"lockscreen",content:"win + L"},{header:"windows C盘清理",slug:"windows-c盘清理",content:"https://baiyunju.cc/6196"},{header:"参考链接",slug:"参考链接",content:`Windows 批处理 (cmd/bat) 常用命令小结
Windows 命令-微软官网`}]},{path:"/others/wordpress.html",title:"wordpress basic",pathLocale:"/",contents:[{header:"wordpress 主题目录结构",slug:"wordpress-主题目录结构",content:`style.css: wordpress的主要样式，样式首行为注释，约定主题 名称，作者，版本号,wordpress 会读取这些信息 /*
Theme Name: themeName
Author: authorName
version: 0.0.1 */
body { color: orangered;
} index.php: wordpress 主题的主页文件,这个页面循环调用 have_posts(),会获取所有发布的文章。wordpress著名的 famous loop 如下 <? php
while (have_posts()) { the_post(); ?> <h2><a href="<?php the_permalink(); ?>"><?php the_title() ?></a></h2> <?php the_content(); ?> <hr>
<?php } ?> header.php: wordpress 的 header 模板
footer.php: wordpress 的 footer 模板
single.php: wordpress 单个 post 模板页面，这个页面循环调用 famous loop,只会展示单个post
page.php: wordpress 独立页面的模板, 这个页面循环调用 famous loop,只会展示单个独立页面
front-page.php: 当 wordpress 首页设置为独立静态页面时候, 会使用 front-page.php 作为模板
archive.php: WordPress 归档页面，按照 时间、作者、文章分类 等等，归档页面的模板，如果归档页面模板不存在，会使用 index.php 作为 fallback(事实上，index.php也会作为其他页面的
fallback page)
functions.php: 调用wordpress内置钩子，加载自定义函数,如下通过 add_action 添加自定义函数 load_files,来加载 index.css <?php
function load_files() { wp_enqueue_style('my_index_stylesheet', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'load_files'); screenshot.png: 主题安装页面的缩略图`},{header:"代码须知",slug:"代码须知",content:`wordpress 以 get_ 开头的函数，内部都没有echo,我们得到的是 返回值，在页面上需要 echo 输出; 以the_开头的函数得到的是 echo 到页面上的内容，我们只需要调用即可
后台管理主题中菜单项默认不显示，注册之后才可以显示,然后在 需要使用菜单的地方 调用 wp_nav_menu(array('theme_location' => 'headerMenu1')) function registerMenu(){ // 第一个参数 后续在 header.php 中需要使用, 第二个参数是后台管理页面菜单分组的展示 register_nav_menu('headerMenu1', '注册 headerMenu1');
}
add_action('after_setup_theme', 'registerMenu'); wordpress 自定义 query，WordPress 默认情况下会根据 URL 来进行查询，如果是首页，则默认查询最近 10 条post，如果是 独立page页面，则查询当前 page，如果我们想更改默认查询，就需要自定义
query, 使用 new WP_Query,最后要还原默认查询 wp_reset_postdata() <?php $homePagePost = new WP_Query( array('posts_per_page' => 2) ); while ($homePagePost->have_posts()) { $homePagePost->the_post(); ?> <div> post info </div> <?php } wp_reset_postdata(); ?> wordpress 自定义post type,在主题文件夹上一级目录(wp-content)目录下，新建文件夹 mu-plugins
,这个目录里面的php文件WordPress都会执行，与主题无关.添加如下代码，添加一个event类型的文章类型，后台管理页面就会出现 Events的面板
自定义postType后页面找不见情况时候，需要在后台固定链接页面刷新一下 固定链接结构,即重新点击一下 保存更改 按钮
新建 archive-event.php single-event.php 作为归档和文章页面的模板框架，注意文件命名 archive-postType.php single-postType.php <?php
function add_custom_post_type(){ // 新增一个 type 为 event 的 post，wordpress 默认 postType 为 page 和 post register_post_type('event', array( 'show_in_rest' => true, 'public' => true, 'menu_icon' => 'dashicons-calendar', 'has_archive' => true, // 开启归档 'rewrite' => array('slug' => 'events'),// 定义 url 为 /events 'supports' => array('title','editor','excerpt'), 'labels' => array( // 设置后台管理页面显示 'name' => 'Events', 'add_new_item' => 'Add new Events', 'edit_item' => 'Edit event', 'all_items' => 'All Events', 'singular_name' => 'Event', ) ));
}
- 如果需要给文章添加 自定义 字段，可以使用 \`advanced custom fields\`这个插件，添加完自定义字段后，在php文件中通过 the_field(fieldName) 或者 get_field(fieldName) 来使用 add_action('init', 'add_custom_post_type'); wordpress 自定义查询分页会失效，需要稍作调整自定义查询参数
在functions.php中添加钩子函数，可以拦截默认查询，并修改相应的查询参数 function adjust_default_query($query){ // 非后台管理页面 && 自定义event类型的post && 是默认查询（非自定义query） if (!is_admin() and is_post_type_archive('event') and $query->is_main_query()) { $today = date('Ymd'); $query->set('meta_key', 'event_date'); $query->set('orderby', 'meta_value_num'); $query->set('order', 'ASC'); $query->set('meta_query', array( array( 'key' => 'event_date', 'compare' => '>=', 'value' => $today, 'type' => 'numeric', ) )); } }
add_action('pre_get_posts', 'adjust_default_query');`},{header:"常见问题",slug:"常见问题",content:`wordpress更改固定链接,id 形式改成 post_name 形式后页面刷新报 404
nginx 需要进行伪静态配置 location / { try_files $uri $uri/ /index.php?$args;
} # Add trailing slash to */wp-admin requests.
rewrite /wp-admin$ $scheme://$host$uri/ permanent;`}]},{path:"/shell/clash_install.html",title:"clash_install",pathLocale:"/",contents:[{header:"",slug:"",content:`腾讯云不可访问GitHub，安装代理clash, 本地下载clash传到云服务器
使用systemd管理clash服务时候注意配置项 User 和 ExecStart User=root
ExecStart=/root/software/clash #!/usr/bin/env bash CLASH_VERSION=clash-linux-amd64-v1.12.0.gz
# 截取.gz 得到 clash-linux-amd64-v1.12.0
unzipFileName="\${CLASH_VERSION%.gz}" function installClash() { if [[ -d ~/software ]]; then downloadAndGunzip else mkdir -p ~/software downloadAndGunzip fi
} # 下载解压
function downloadAndGunzip() { cd ~/software if ! wget "https://github.com/Dreamacro/clash/releases/download/v1.12.0/$CLASH_VERSION";then echo "download clash fail" exit 1 fi gunzip $unzipFileName mv $unzipFileName clash.bak # 改名 chmod +x clash.bak # 启动clash会失败，因为没有 config.yaml 和 Country.mmdb 文件 # 配置文件在 ~/.config/clash 目录下 # 添加 Clash 配置订阅 到机场官网订阅中心选择复制订阅，然后在浏览器中访问【 订阅地址后面加&flag=clash 】 # 然后右击浏览器页面，选择“另存为”保存页面 然后给保存的文件修改为config.yaml # ./clash # 运行clash
} # Clash 自启动及后台运行 /etc/systemd/system/clash.service
function createClashService() { touch /etc/systemd/system/clash.service chmod 755 /etc/systemd/system/clash.service # https://linuxtect.com/how-to-cat-eof-for-multi-line-string-in-linux-bash/ cat <<EOF >/etc/systemd/system/clash.service
[Unit]
Description=Clash service
After=network.target [Unit]
Description=Clash service
After=network.target [Service]
Type=simple
User=root
ExecStart=/root/software/clash
Restart=on-failure
RestartPreventExitStatus=23 [Install]
WantedBy=multi-user.target
EOF # 重载服务 sudo systemctl daemon-reload # 开机启动 sudo systemctl enable clash # 启动服务 sudo systemctl start clash # 查看服务状态 sudo systemctl status clash
} function setProxy() { # 配置全局代理 以下几种格式都写上 echo 'export http_proxy="http://127.0.0.1:1081/"' >>~/.bashrc echo 'export HTTP_PROXY="http://127.0.0.1:1081/"' >>~/.bashrc echo 'export https_proxy="http://127.0.0.1:1081/"' >>~/.bashrc echo 'export HTTPS_PROXY="http://127.0.0.1:1081/"' >>~/.bashrc echo 'export all_proxy="http://127.0.0.1:1081/"' >>~/.bashrc echo 'export ALL_PROXY="http://127.0.0.1:1081/"' >>~/.bashrc echo 'export no_proxy="127.0.0.1,localhost,mirrors.tencentyun.com"' >>~/.bashrc echo 'export NO_PROXY="127.0.0.1,localhost,mirrors.tencentyun.com' >>~/.bashrc source ~/.bashrc
} installClash
clash提供了 web api 管理端，访问网址 http://clash.razord.top, 输入服务器 ip 地址即可查询 clash 日志`},{header:"Reference",slug:"reference",content:`如何在 Clash for Linux 上配置科学上网代理服务
在 Linux 服务器上安装 Clash，以及开机自动启动
clash web-api 外网访问`}]},{path:"/shell/common_command.html",title:"常用命令",pathLocale:"/",contents:[{header:"",slug:"",content:`apt list --installed | grep program_name
https://codeantenna.com/a/Z12uSSK6R3
apt install mailutils，postfix 选项选择默认配置即可 ， 安装完成之后直接发送邮件，不用配置
echo "中文字体" | mail -s "test for chinese" 173389705@qq.com
邮件标题不能是中文，下面这个邮件发送不成功，会报错（SMTPUTF8 is required, but was not offered by host mx3.qq.com） 查看 mail.log (/var/log/mail.log)
echo "mail utils test" | mail -s "中文不能发送" 173389705@qq.com Nov 25 14:19:26 localhost postfix/smtp[19436]: E02FE20439:
to=173389705@qq.com, relay=mx3.qq.com[43.137.222.247]:25, delay=0.15, delays=0.01/0/0.14/0, dsn=5.6.7,
status=bounced (SMTPUTF8 is required, but was not offered by host mx3.qq.com[43.137.222.247])`},{header:"sysctl",slug:"sysctl",content:`The sysctl command allows you to view and change Linux kernel parameters, like network parameters
To set a parameter permanently, you’ll need to write the settings to /etc/sysctl.conf or another configuration file in
the /etc/sysctl.d directory
sysctl -a
sysctl -a | grep net.ipv4`}]},{path:"/shell/mail.html",title:"mail",pathLocale:"/",contents:[{header:"",slug:"",content:`https://www.cnblogs.com/scuwangjun/p/11191075.html
https://coolrc.me/2020/03/21/202003211618/
https://cloud.tencent.com/developer/article/1725000
https://www.liaoxuefeng.com/article/895886450140288
sendmail 是一个邮件客户端，用来编辑邮件并连接到邮件服务器`}]},{path:"/shell/mysql_install.html",title:"mysql_install",pathLocale:"/",contents:[{header:"ubuntu 安装MySQL",slug:"ubuntu-安装mysql",content:`优先采用 apt 命令进行安装
执行如下命令，查找当前 apt source 中的 mysql 安装包
sudo apt list | grep mysql-server
如果没有就需要添加相应的 mysql source，参考 mysql-apt-repo-quick-guide
#!/usr/bin/env bash
# 安装mysql
function install_mysql() { # 获取 mysql source 配置的可执行文件 .deb 文件，执行之后可以添加 mysql 源 wget https://dev.mysql.com/get/mysql-apt-config_0.8.22-1_all.deb sudo dpkg -i mysql-apt-config_0.8.22-1_all.deb sudo apt update apt install mysql-server
}
# 初始化 mysql
function initMysql() { # mysql 中root用户默认不可以远程登录，只可以用localhost登录 # 方式一 新建同名root用户 mysql -u root -pYourPassword -e "use mysql;select user,host from user;CREATE USER 'root'@'%' IDENTIFIED BY 'YourPassword';GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION; FLUSH PRIVILEGES;" # 方式二 创建新用户，赋予所有权限 mysql -u root -pYourPassword -e "use mysql; CREATE USER 'zonglinlee'@'%' IDENTIFIED BY 'YourPassword';GRANT ALL PRIVILEGES ON *.* TO 'zonglinlee'@'%' WITH GRANT OPTION; FLUSH PRIVILEGES;" }
# install_mysql
# initMysql`},{header:"Reference",slug:"reference",content:`mysql-apt-repo-quick-guide
How to Run SQL Query Using Bash Script and Command-Line`}]},{path:"/shell/samba_install.html",title:"samba(文件共享)",pathLocale:"/",contents:[{header:"远程服务器(ubuntu)",slug:"远程服务器-ubuntu",content:`apt-get install -y samba samba-client
vim /etc/samba/smb.conf # 445端口被屏蔽，需要更改端口
service smbd restart # 查看端口使用情况
ps -e | grep smb
netstat -antp | grep <smb pid>`},{header:"本地 window 10 系统",slug:"本地-window-10-系统",content:`添加端口映射
netsh interface portproxy add v4tov4 listenport=445 listenaddress=127.0.0.1 connectport=yourPort connectaddress=yourServerIp
netsh interface portproxy show all
重启电脑并在cmd中运行 \\\\127.0.0.1`},{header:"Reference",slug:"reference",content:`Samba 应用
samba更改端口后用windows访问
Windows 10 下如何修改 smb 连接的默认端口(445)`}]},{path:"/shell/shell.html",title:"shell basic",pathLocale:"/",contents:[{header:"Rufus",slug:"rufus",content:"轻松创建 USB 启动盘"},{header:"Terminology",slug:"terminology",content:"gcc: 是 GNU compiler collection 的缩写，它是 Linux 下一个编译器集合( 相当于 javac )， 是 c 或 c++程序的编译器"},{header:"远程登录 SSH",slug:"远程登录-ssh",content:"ssh 配置文件 /etc/ssh/sshd.config"},{header:"ssh启用root登录",slug:"ssh启用root登录",content:`修改配置文件之后重启ssh，sudo service ssh restart
# 修改配置文件
PermitRootLogin yes ##允许root登陆
PasswordAuthentication yes ##允许用密码方式登陆`},{header:"Windows上的shell脚本在Linux上执行不了",slug:"windows上的shell脚本在linux上执行不了",content:`problem is with dos line ending. Following will convert it for unix
dos2unix file_name NB: you may need to install dos2unix first with apt install dos2unix
another way to do it is using sed command to search and replace the dos line ending characters to unix format:
$sed -i -e 's/\\r$//' your_script.sh`},{header:"ubuntu 软件包管理",slug:"ubuntu-软件包管理",content:`apt 命令是 Debian Linux 发行版中的 APT 软件包管理工具,使用 apt-get
命令的第一步就是引入必需的软件库,/etc/apt/sources.list 是存放这些地址列表的配置文件`},{header:"apt-vs-dpkg-debian",slug:"apt-vs-dpkg-debian",content:`APT stands for Advanced Packaging Tools used in Debian and its derivatives to manage packages. It is used for
installing, upgrading, configuring, removing packages, and maintaining source repositories. But, Linux has a modular
design philosophy which APT also follows Instead of doing all tasks themselves in a monolithic manner, it employs
several different applications under the hood to do those tasks. For example, it might use curl to download the .deb
source package and all its dependencies and then use dpkg to install it.
dpkg (Debian Package Manager) works under the hood of APT. While APT manages remote repositories and resolves
dependencies for you, it uses dpkg to actually make the changes of installing/removing packages. dpkg on itself cannot
retrieve/download files from remote repositories, nor can it figure out dependencies. Functions
APT
dpkg Can download packages from remote repositories
YES
NO Can resolve dependencies
YES
NO Install local packages
YES(using dpkg)
YES Install remote package
YES (using dpkg)
NO (users need to manually download a package if they wish to use dpkg) List installed packages
YES
YES`},{header:"安装包格式",slug:"安装包格式",content:`.deb 格式: dpkg -i <下载好的安装包>
.bin 格式: 直接在命令行中执行该文件既可
tar.gz 格式: 先要通过命令将压缩包解压，然后才能进行编译，继而进行安装 # 解压 tar -zxvf FileName.tar.gz
# 配置 ./configure # 编译 make
# 安装 make install`},{header:"Syntax",slug:"syntax",content:""},{header:"Array",slug:"array",content:""},{header:"Expansions and substitutions",slug:"expansions-and-substitutions",content:""},{header:"man 命令",slug:"man-命令",content:""},{header:"Man doesn't work on Ubuntu 18.04",slug:"man-doesn-t-work-on-ubuntu-18-04",content:""},{header:"Bash 中的任务管理工具",slug:"bash-中的任务管理工具",content:`Ctrl+Z和Ctrl+C:Ctrl C是强制终止程序的执行并结束进程。而Ctrl
Z则只是中断任务的执行，但该任务并没有结束，它只是在进程中维持挂起的状态，用户可以使用fg/bg操作来继续前台/后台执行该任务
&
fg 将后台作业移动到前台终端运行
bg 将前台终端作业移动到后台运行
kill 发送信号到进程, kill -l列出所有信号名称, vim 1.txt
# 按 Ctrl + Z 挂起任务
vim 2.txt
# 按 Ctrl + Z 挂起任务
jobs -l # 显示当前任务以及 pid
fg %1 # 恢复编辑1.txt
jobs -l kill -9 vim-pid`},{header:"debug Bash",slug:"debug-bash",content:"bash -x scriptName"},{header:"奇怪的bug",slug:"奇怪的bug",content:"telnet命令后无法退出的解决 ctl+] 切换 然后quit退出."},{header:"linux 防火墙",slug:"linux-防火墙",content:`firewall: mA firewall is a set of rules. When a data packet moves into or out of a protected network space, its
contents (in particular, information about its origin, target, and the protocol it plans to use) are tested against
the firewall rules to see if it should be allowed through
iptables: is a tool for managing firewall rules on a Linux machine.
firewalld: is also a tool for managing firewall rules on a Linux machine.`},{header:"ubuntu 不休眠技巧",slug:"ubuntu-不休眠技巧",content:`sudo vim /etc/systemd/logind.conf
#suspend -> ignore
#HandleLidSwitch=suspend
HandleLidSwitch=ignore
sudo systemctl restart systemd-logind.service`},{header:"ubuntu 静态IP（set static ip）",slug:"ubuntu-静态ip-set-static-ip",content:`cd /etc/netplan
vim 00-installer-config-wifi.yaml
wifi config yaml file
network: version: 2 wifis: wlp6s0: access-points: CMCC-xiaochenchen: password: t63bu9tn* addresses: [ 192.168.1.5/24 ] # gateway4: 192.168.1.1 routes: - to: default via: 192.168.1.1 nameservers: addresses: [ 8.8.8.8,8.8.8.4,114.114.114.114 ] dhcp4: no 应用设置：sudo netplan try
gateway4 has been deprecated`},{header:"shell 设置变量默认值",slug:"shell-设置变量默认值",content:`test.sh,为$1 变量设置默认 tomcat 下载地址
#!/usr/bin/env bash
downloadUrl=\${1:-https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.83/bin/apache-tomcat-9.0.83.tar.gz}
echo "downloadUrl is：\${downloadUrl}" 执行 ./test.sh http://example.com,则输出 downloadUrl is：http://example.com`},{header:"echo 叮咚 声音",slug:"echo-叮咚-声音",content:`#\\a alert (bell)
echo -e "\\a Ding dong\\a"`},{header:"特殊字符",slug:"特殊字符",content:`\\: You can use the backslash () as last character on line to continue command on next line
$IFS: The Internal Field Separator (IFS)`},{header:"printf vs echo",slug:"printf-vs-echo",content:""},{header:"export",slug:"export",content:`By default all user defined variables are local. They are not exported to new processes. Use export command to export
variables and functions to child processes.
export backup="/nas10/mysql"
echo "Backup dir $backup"
bash # start a new shell instance, enter: bash
echo "Backup dir $backup"`},{header:"HERE DOCUMENTS VS HERE STRINGS",slug:"here-documents-vs-here-strings",content:`here documents:This type of redirection tells the shell to read input from the current source (HERE) until a line
containg only word (HERE) is seen. HERE word is not subjected to variable name, parameter expansion, arithmetic
expansion, pathname expansion, or command substitution. All of the lines read up to that point are then used as the
standard input for a command. Files are processed in this manner are commonly called here documents. If you do not want
variable name, parameter expansion, arithmetic expansion, pathname expansion, or command substitution quote HERE in a
single quote
command <<HERE
text1
text2
testN
$varName
HERE
Here strings:The $word (a shell variable) is expanded and supplied to the command on its standard input command <<<$word 字符串拆分小技巧
# /etc/passwd pwd=zonglinlee:x:1000:1000:zonglinlee:/home/zonglinlee:/bin/bash
oldIFS="$IFS"
IFS=:
read -r login password uid gid info home shell <<< "$pwd"
printf "Your login name is %s, uid %d, gid %d, home dir set to %s with %s as login shell\\n" $login $uid $gid $home $shell
IFS="$oldIFS"`},{header:"Bash variable existence check",slug:"bash-variable-existence-check",content:`syntax
\${varName?Error varName is not defined}
\${varName:?Error varName is not defined or is empty}
例子
#!/usr/bin/env bash
path=\${1:?Error command line argument not passed}
echo "backup path is $path"
echo "i am done if \\$path is set"`},{header:"shell startup Script Execution Order",slug:"shell-startup-script-execution-order",content:`/etc/profile - It contains Linux system wide environment and startup programs. This file runs first when a user logs
in to the system. This file also act as a system-wide profile file for the bash shell.
/etc/profile.d - /etc/profile calls /etc/profile.d/. It is a directory and all scripts in this directory are called
by /etc/profile using a for loop. This file runs second when a user logs in.
~/.bash_profile or $HOME/.bash_profile - Finally, the file ~/.bash_profile is called in the users home directory (
$HOME). This file runs third when a user logs in. This file calls ~/.bashrc in the users home directory.`},{header:"Changing bash prompt 参考",slug:"changing-bash-prompt-参考",content:'export PS1="\\e[0;31m[\\e[m \\e[0;33m\\u\\e[m@\\e[0;34m\\h\\e[m \\e[0;34m\\w\\e[m \\e[0;31m]\\e[m\\$"'},{header:"< /dev/null",slug:"dev-null",content:""},{header:"< /dev/urandom",slug:"dev-urandom",content:`Create a random password
tr -dc A-Za-z0-9_ < /dev/urandom | head -c12 | xargs`},{header:"ssh隧道",slug:"ssh隧道",content:""},{header:"Reference",slug:"reference",content:`linux command
Linux Bash Shell Scripting Tutorial Wiki
explain-shell
https://dunwu.github.io/linux-tutorial/
kjyw 快捷运维
magic-of-sysuse-scripts
18个Linux Shell脚本经典案例(bilibili)
Ubuntu Post Install Scripts
shell_scripts 运维外挂小工具
The-art-of-command-line
pure-bash-bible
Bash scripting cheatsheet
devops-exercises
devops-resources | bash
devops-exercises | bash
devops-resources | linux
devops-exercises | linux
在 Windows 中使用 Cygwin
bash-source-command`}]},{path:"/shell/sqlite3.html",title:"sqlite3",pathLocale:"/",contents:[{header:"Navicat远程连接sqlite3",slug:"navicat远程连接sqlite3",content:`使用 samba 共享远程文件，Navicat 使用网络映射地址访问 sqlite3 数据库文件
\\\\127.0.0.1\\fs\\test.db`}]},{path:"/shell/wordpress_install.html",title:"wordpress部署",pathLocale:"/",contents:[{header:"安装注意事项",slug:"安装注意事项",content:`安装 php php-fpm php-mysql,安装过程中注意有没有报错信息 Ubuntu 18 上默认安装 php7.2, php 会默认自动安装 apache2
php-fpm,是 PHP 对 Web Server(nginx 或者 Apache2) 提供的 FastCGI 协议的接口程序，额外还提供了相对智能一些任务管理。 Wordpress是 php 动态网站，当客户端请求后缀名为 .php
的文件时，nginx不能直接解析，而是需要交给 php-fpm 解析后返回客户端。
php-mysql, 这个是 php 用来连接mysql的，php安装的时候没有默认安装这个 apt list | grep php
apt install php
apt install php-fpm
apt install php-mysql`},{header:"配置 php-fpm",slug:"配置-php-fpm",content:`# 查看 php-fpm 服务文件
systemctl list-unit-files |grep fpm
# 查看 php-fpm 打开的文件
systemctl status php7.2-fpm # 查看状态 并 获取 pid
lsof -p fpm-pid # 查看 fpm 服务的监听端口
# 查看配置文件有效信息（过滤注释）
grep -v ^\\; /etc/php/7.2/fpm/php-fpm.conf | grep -v ^$
grep -v ^\\; /etc/php/7.2/fpm/pool.d/www.conf | grep -v ^$
在/etc/php/7.2/fpm/pool.d/www.conf路径下，php-fpm 配置默认开启的是socket监听，
listen = /run/php/php7.2-fpm.sock
这里我们前面加分号注释掉 socket 监听，开启 tcp 监听，其他的配置无需更改
;listen = /run/php/php7.2-fpm.sock
listen = 127.0.0.1:9000
修改配置文件之后需要重启 php-fmp 服务，这里有坑，可以查看到 9000 端口在被 php-fpm 监听，但服务状态是 inactive，所以服务启动成功与否不能靠端口监听来判断
# 重启服务
systemctl restart php7.2-fpm
systemctl status php7.2-fpm
# 查看 9000 端口监听情况
lsof -i:9000`},{header:"配置 nginx",slug:"配置-nginx",content:`nginx配置中可以直接将php文件交给 php-fpm 处理，或者nginx也可以代理到 Apache 服务器，由 Apache web server 交给 php-fpm 处理 php后缀的文件，我们这里直接由nginx交给
php-fpm 解析
server { listen 8082; server_name your_server_ip_address; access_log /var/log/nginx/wordpress.access.log main; error_log /var/log/nginx/wordpress.error.log; location / { root /wordpress/; index index.php; } error_page 500 502 503 504 /50x.html; # proxy the PHP scripts to Apache listening on 127.0.0.1:80 # location ~ \\.php$ {
# root /wordpress;
# proxy_pass http://127.0.0.1;
# } # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000 location ~ \\.php$ { root /wordpress; include fastcgi_params; # fastcgi_pass unix:/run/php/php7.2-fpm.sock; fastcgi_pass 127.0.0.1:9000; fastcgi_index index.php; fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name; # fastcgi_param SCRIPT_FILENAME /wordpress$fastcgi_script_name; }
}`},{header:"安装 WordPress",slug:"安装-wordpress",content:`在以上配置都做好之后，可以尝试访问 http://wordpress-blog-server:8082/wp-admin/install.php,如果页面可以正常访问，说明已经可以解析php文件了，如果页面显示 php
相关错误，可以通过以下方法来分析错误
在你的WordPress根目录下新建一个 phpinfo.php
文件，文件内容如下，然后浏览器访问http://wordpress-blog-server:8082/phpinfo.php，这样可以查看php相关配置信息以及所安装的模块信息
<?php
phpinfo(); $link = mysqli_connect('localhost', 'mysql_username', 'mysql_login_password');
if (!$link) {
die('Could not connect: ' . mysqli_error());
}
echo 'Connected successfully';
mysqli_close($link);
?> 由于我安装的是 mysql8.0，默认的密码验证为 caching_sha2_password, 当前 PHP 版本中所带的 mysqlnd 无法支持这种验证 ，而 PHP 默认的是 mysql_native_password
,需要更改用户密码验证方式
use mysql;
select user,host,plugin from user;
ALTER USER 'username'@'host' IDENTIFIED WITH mysql_native_password BY 'your_new_password';
flush privileges;`},{header:"Wordpress相关",slug:"wordpress相关",content:`中文支持
主题安装 ftp 验证问题
使用WordPress站点健康工具
Wordpress站点基本设置1——主题安装及配置`},{header:"reference",slug:"reference",content:`WordPress安装指南
全面了解CGI、FastCGI、PHP-FPM
How to Fix “Your PHP Installation Appears to Be Missing the MySQL Extension Which Is Required by WordPress” Error
wordpress连接不上mysql8的解决方案`}]},{path:"/typescript/ts_practice.html",title:"ts practice",pathLocale:"/",contents:[{header:"",slug:"",content:`what do "extends keyof" and "in keyof" mean? // https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
function invokeHandler<N extends keyof HTMLElementEventMap>(){}
const contentTimeoutRef = useRef<ReturnType<typeof setTimeout>>(); // 初始值为null，类型为函数，函数参数是一个 react Event, 函数返回类型为 void
let onWrapperClick: (e: React.SyntheticEvent) => void = null; // 数组类型，数组元素类型为 React.key 或者一个对象
keys: (React.Key | { key: React.Key; [name: string]: any })[];`}]},{path:"/typescript/typescript.html",title:"Typescript入门",pathLocale:"/",contents:[{header:"Ts须知",slug:"ts须知",content:"typescript doc"},{header:"类型关键字",slug:"类型关键字",content:`extends 用于扩展一个 interface 的类型，从而得到新的类型
keyof 是TS中的索引类型查询操作符。keyof T 会得到由 T 上已知的公共属性名组成的联合类型
在 TS 中用于类型表达时，typeof 可以用于从一个变量上获取它的类型。
in 操作符用于遍历目标类型的公开属性名。类似 for .. in 的机制。 从其用途看，我们很容易想到 in 可用于联合类型或者枚举类型`},{header:".d.ts VS declare",slug:"d-ts-vs-declare",content:`.d.ts 文件是ts用来声明变量，模块，type，interface等等的,在 .d.ts 声明变量或者模块等东西之后，在其他地方可以不用 import 导入这些东西就可以直接用, 但是也不是说创建了 .d.ts
文件，里面声明的东西就能生效了，毕竟归根到底也是 .ts 文件，需要预编译，所以需要在tsconfig.json文件里面的include数组里面添加这个文件
.d.ts 文件中的顶级声明必须以 "declare" 或 "export" 修饰符开头。 通过 declare 声明的类型或者变量或者模块，在include包含的文件范围内，都可以直接引用而不用去 import 或者
import type 相应的变量或者类型`},{header:"TypeScript for Functional Programmers",slug:"typescript-for-functional-programmers",content:""},{header:"important TypeScript types",slug:"important-typescript-types",content:`Type
Explanation T[]
mutable arrays, also written Array<T> [T, T]
tuples, which are fixed-length but mutable // Function syntax
let fst1: (a: any, b: any) => any = (a, b) => a;
// or more precisely:
let fst2: <T, U>(a: T, b: U) => T = (a, b) => a;
// Object literal type syntax
let o: { n: number; xs: object[] } = {n: 1, xs: []};
// [T, T] is a subtype of T[]`},{header:"Unit types",slug:"unit-types",content:`Unit types are subtypes of primitive types that contain exactly one primitive value. For example, the string "foo"
has the type "foo". When needed, the compiler widens — converts to a supertype — the unit type to the primitive type,
such as "foo" to string
declare function pad(s: string, n: number, direction: "left" | "right"): string; pad("hi", 10, "left"); // ok
// 但是下面的写法有问题,这里ts编译器将 s 变量扩展到了 string type, string type 不能赋值给 联合类型 "left" | "right"
// "right": "right"
// s: string because "right" widens to string on assignment to a mutable variable.
// string is not assignable to "left" | "right"
let s = "right";
pad("hi", 10, s); // error: 'string' is not assignable to '"left" | "right"'
// 可以这么改写
let s1: "left" | "right" = "right";
pad("hi", 10, s1); // ok`},{header:"Type Parameters",slug:"type-parameters",content:`Like most C-descended languages, TypeScript requires declaration of type parameters.There is no case requirement,
but type parameters are conventionally single uppercase letters. Type parameters can also be constrained to a type,
which behaves a bit like type class constraints
function liftArray<T>(t: T): Array<T> { return [t];
}`},{header:"readonly and const",slug:"readonly-and-const",content:`In JavaScript, mutability is the default, although it allows variable declarations with const to declare that the
reference is immutable. TypeScript additionally has a readonly modifier for properties. It also ships with a mapped
type Readonly<T> that makes all properties readonly. And it has a specific ReadonlyArray<T> type.
interface X { x: number;
} let rx: Readonly<X> = {x: 1};
rx.x = 12; // error`},{header:"const assertions",slug:"const-assertions",content:`no literal types in that expression should be widened (e.g. no going from "hello" to string)
object literals get readonly properties
array literals become readonly tuples
One thing to note is that const assertions can only be applied immediately on simple literal expressions. // Type '"hello"'
let x = "hello" as const;
// Type 'readonly [10, 20]'
let y = [10, 20] as const;
// Type '{ readonly text: "hello" }'
let z = {text: "hello"} as const;
// 错误写法
let b = (60 * 60 * 1000) as const;`},{header:"everyDay types",slug:"everyday-types",content:""},{header:"Type Annotations on Variables",slug:"type-annotations-on-variables",content:`When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly specify
the type of the variable. In most cases, though, this isn’t needed. Wherever possible, TypeScript tries to
automatically infer the types in your code.
let myName: string = "Alice";
// No type annotation needed -- 'myName' inferred as type 'string'
let yourName = "Bob";`},{header:"Parameter type annotations && Return Type Annotations",slug:"parameter-type-annotations-return-type-annotations",content:`Parameter type annotations go after the parameter name. Return type annotations appear after the parameter list. Much
like variable type annotations, you usually don’t need a return type annotation because TypeScript will infer the
function’s return type based on its return statements.`},{header:"Object Types",slug:"object-types",content:`You can use , or ; to separate the object properties,The type part of each property is also optional. If you don’t
specify a type, it will be assumed to be any. In JavaScript, if you access a property that doesn’t exist, you’ll get
the value undefined rather than a runtime error. Because of this, when you read from an optional property, you’ll have
to check for undefined before using it.
function printName(obj: { first: string; last?: string }) { if (obj.last !== undefined) { console.log(obj.last.toUpperCase()); } // A safe alternative using modern JavaScript syntax: console.log(obj.last?.toUpperCase());
}`},{header:"Type Aliases",slug:"type-aliases",content:`it’s common to want to use the same type more than once and refer to it by a single name. A type alias is exactly that -
a name for any type,The syntax for a type alias is:
type Point = { x: number; y: number;
};
// You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type
type ID = number | string;`},{header:"Interfaces",slug:"interfaces",content:`An interface declaration is another way to name an object type. Type aliases and interfaces are very similar, and in
many cases you can choose between them freely. Almost all features of an interface are available in type, the key
distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable`},{header:"Type Assertions",slug:"type-assertions",content:`Sometimes you will have information about the type of a value that TypeScript can’t know about.TypeScript only allows
type assertions which convert to a more specific or less specific version of a type. Sometimes this rule can be too
conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions,
first to any (or unknown, which we’ll introduce later), then to the desired type.
const a = (expr as any) as T;`},{header:"Literal Inference",slug:"literal-inference",content:`In addition to the general types string and number, we can refer to specific strings and numbers in type positions
Both var and let allow for changing what is held inside the variable, and const does not, it can only represent 1
possible string, it has a literal type representation
let x: "hello" = "hello";
You can use as const to convert the entire object to be type literals. The as const suffix acts like const but for the
type system, ensuring that all properties are assigned the literal type instead of a more general version like string or
number
const req = {url: "https://example.com", method: "GET"} as const; function handleRequest(url: string, method: "GET" | "POST"): void { // function body
};
handleRequest(req.url, req.method);`},{header:"Non-null Assertion Operator (Postfix!)",slug:"non-null-assertion-operator-postfix",content:`TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking.
Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined
function liveDangerously(x?: number | null) { // No error console.log(x!.toFixed());
}`},{header:"Enums",slug:"enums",content:`An enum can be defined using the enum keyword
// Numeric enums
enum Direction { Up = 1, Down, Left, Right,
}
Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from
that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.
enum Direction { Up = "UP", Down = "DOWN", Left = "LEFT", Right = "RIGHT",
}
In a string enum, each member has to be constant-initialized with a string literal, or with another string enum
member`},{header:"Functions",slug:"functions",content:""},{header:"Function Type Expressions",slug:"function-type-expressions",content:`The simplest way to describe a function is with a function type expression. These types are syntactically similar
to arrow functions.
// The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”.
// Note that the parameter name is required.
function greeter(fn: (a: string) => void) { fn("Hello, World");
}
Of course, we can use a type alias to name a function type
type GreetFunction = (a: string) => void; function greeter(fn: GreetFunction) { // ...
}`},{header:"Call Signatures",slug:"call-signatures",content:`In JavaScript, functions can have properties in addition to being callable. However, the function type expression
syntax doesn’t allow for declaring properties. If we want to describe something callable with properties, we can
write a call signature in an object type
type DescribableFunction = { description: string; (someArg: number): boolean;
}; function doSomething(fn: DescribableFunction) { console.log(fn.description + " returned " + fn(6));
}
Note that the syntax is slightly different compared to a function type expression - use : between the parameter list
and the return type rather than =>.`},{header:"Construct Signatures",slug:"construct-signatures",content:`avaScript functions can also be invoked with the new operator. TypeScript refers to these as constructors because they
usually create a new object. You can write a construct signature by adding the new keyword in front of a call signature
type SomeConstructor = { new(s: string): SomeObject;
}; function fn(ctor: SomeConstructor) { return new ctor("hello");
}`},{header:"Generic Functions",slug:"generic-functions",content:`In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a
type parameter in the function signature
function firstElement<Type>(arr: Type[]): Type | undefined { return arr[0];
}`},{header:"Function Overloads",slug:"function-overloads",content:`In TypeScript, we can specify a function that can be called in different ways by writing overload signatures. To do
this, write some number of function signatures (usually two or more), followed by the body of the function
// 这个函数只可以接收一个参数或者两个参数，第三个函数签名是用来实现前两个函数签名的
// 前两个函数叫做 Overload Signatures ，第三个叫做 Implementation Signature
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date { if (d !== undefined && y !== undefined) { return new Date(y, mOrTimestamp, d); } else { return new Date(mOrTimestamp); }
}
In this example, we wrote two overloads: one accepting one argument, and another accepting three arguments. These
first two signatures are called the overload signatures.
Then, we wrote a function implementation with a compatible signature. Functions have an implementation signature, **
but this signature can’t be called directly. Even though we wrote a function with two optional parameters after the
required one, it can’t be called with two parameters!**`},{header:"unknown type && never type",slug:"unknown-type-never-type",content:`The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do
anything with an unknown value. This is useful when describing function types because you can describe functions that
accept any value without having any values in your function body.
The never type represents values which are never observed. In a return type, this means that the function throws an
exception or terminates execution of the program`},{header:"Function type",slug:"function-type",content:`The global type Function describes properties like bind, call, apply, and others present on all function values in
JavaScript. It also has the special property that values of type Function can always be called; these calls return any`},{header:"Parameter Destructuring",slug:"parameter-destructuring",content:`function sum({a, b, c}: { a: number; b: number; c: number }) { console.log(a + b + c);
} // 或者定义一个type
type ABC = { a: number; b: number; c: number };`},{header:"Return type void",slug:"return-type-void",content:`Contextual typing with a return type of void does not force functions to not return something.when implemented, can
return any other value, but it will be ignored.
when a literal function definition has a void return type, that function must not return anything`},{header:"Utility Types",slug:"utility-types",content:`TypeScript provides several utility types to facilitate common type transformations. These utilities are available
globally.`},{header:"ReturnType<Type>",slug:"returntype-type",content:`Constructs a type consisting of the return type of function Type.
// 注意必须传入一个 function type 才可以
declare function f1(): { a: number; b: string }; type T1 = ReturnType<(s: string) => void>;
type T4 = ReturnType<typeof f1>;`},{header:"Parameters<Type>",slug:"parameters-type",content:`Constructs a tuple type from the types used in the parameters of a function type Type. // 传入的是一个 function type ,得到一个元组类型的 type type T1 = Parameters<(s: string) => void>;
type T1 = [s: string]`},{header:"Record<Keys, Type>",slug:"record-keys-type",content:`Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to
map the properties of a type to another type.`},{header:"Object Types",slug:"object-types-1",content:""},{header:"Index Signatures",slug:"index-signatures",content:`Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.In
those cases you can use an index signature to describe the types of possible values, for example:
// This index signature states that when a StringArray is indexed with a number, it will return a string
// An index signature property type must be either ‘string’ or ‘number’.
interface StringByString { [key: string]: string;
} interface StringArray { [index: number]: string;
} const myArray: StringArray = getStringArray();
const secondItem = myArray[1] // name 属性不能返回 string type 的值，因为index signature 规定了必须返回number，你可以在 index signature 中返回联合类型来解决这个问题
interface NumberDictionary { [index: string]: number; length: number; // ok name: string; // not ok : Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}`},{header:"Intersection Types",slug:"intersection-types",content:`An intersection type is defined using the & operator.
// 不冲突 Combined has two properties, a and b, just as if they had been written as one object literal type.
type Combined = { a: number } & { b: string };
// 冲突 // Intersection and union are recursive in case of conflicts, so Conflicting.a: number & string.
type Conflicting = { a: number } & { a: string };
// test变量只能赋值为字符串 'hello'， string 和 'hello' 的交叉类型为 'hello'
type Test = string & 'hello'
let test: Test = 'hey'; // 报错，只能为 hello`},{header:"Type Manipulation",slug:"type-manipulation",content:""},{header:"Generics",slug:"generics",content:""},{header:"Type Operator",slug:"type-operator",content:`the keyof operator takes an object type and produces a string or numeric literal union of its keys typeof operator you can use in a type context to refer to the type of a variable or property Indexed Access Types: We can use an indexed access type to look up a specific property on another type.特例：
using number type to get the type of an array’s elements. We can combine this with typeof to conveniently capture
the element type of an array literal // 这是一种类似数组下标访问的方式，index 本身也是一种 type ,所以也可以使用联合类型
type Person = { age: number; name: string; alive: boolean };
type I1 = Person["age" | "name"];
type I2 = Person[keyof Person];
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];
// 特例 : 通过 number type 获取数组元素的type const MyArray = [ {name: "Alice", age: 15}, {name: "Bob", age: 23}, {name: "Eve", age: 38},
]; type Person = typeof MyArray[number]; Conditional types take a form like (SomeType extends OtherType ? TrueType : FalseType)
Mapped Types : type OptionsFlags<Type> = { [Property in keyof Type]: boolean; // JavaScript中的 in 操作符
};
type FeatureFlags = { darkMode: () => void; newUserProfile: () => void;
}; type FeatureOptions = OptionsFlags<FeatureFlags>;
Mapping Modifiers
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = { -readonly [Property in keyof Type]: Type[Property];
};
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = { [Property in keyof Type]-?: Type[Property];
}; Template Literal Types Template literal types build on string literal types, and have the ability to expand into
many strings via unions. type World = "world";
type Greeting = \`hello \${World}\`;
type Greeting = "hello world" Intrinsic String Manipulation Types To help with string manipulation, TypeScript includes a set of types which can be
used in string manipulation. These types come built-in to the compiler for performance and can’t be found in the .d.ts
files included with TypeScript。 Uppercase<StringType> Lowercase<StringType> Capitalize<StringType>`},{header:"Modules",slug:"modules",content:`In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module.
Conversely, a file without any top-level import or export declarations is treated as a script whose contents are
available in the global scope (and therefore to modules as well).
If you have a file that doesn’t currently have any imports or exports, but you want to be treated as a module, add the
line:
export {};
You can import a file and not include any variables into your current module via import "./file".In this case, the
import does nothing. However, all of the code in maths.ts was evaluated, which could trigger side-effects which affect
other objects
import "./maths.js"; console.log("3.14");
Types can be exported and imported using the same syntax as JavaScript values TypeScript has extended the import
syntax with two concepts for declaring an import of a type: import type. TypeScript 4.5 also allows for individual
imports to be prefixed with type to indicate that the imported reference is a type.
// Inline type imports
import {createCatName, type Cat, type Dog} from "./animal.js";
// can only import types
import type {Cat, Dog} from "./animal.js";
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number }; export interface Dog { breeds: string[]; yearOfBirth: number;
} // @filename: app.ts
import {Cat, Dog} from "./animal.js"; type Animals = Cat | Dog;`},{header:"Classes",slug:"classes",content:""},{header:"Constructors",slug:"constructors",content:`Constructors can’t have type parameters - these belong on the outer class declaration
Constructors can’t have return type annotations - the class instance type is always what’s returned class Point { // Overloads constructor(x: number, y: string); constructor(s: string); constructor(xs: any, y?: any) { // ... }
}`},{header:"Super Calls",slug:"super-calls",content:`Just as in JavaScript, if you have a base class, you’ll need to call super(); in your constructor body before using
any this. members
class Base { k = 4;
} class Derived extends Base { constructor() { console.log(this.k); super(); // 'super' must be called before accessing 'this' in the constructor of a derived class. }
}`},{header:"Getters / Setters",slug:"getters-setters",content:`If get exists but no set, the property is automatically readonly
If the type of the setter parameter is not specified, it is inferred from the return type of the getter
Getters and setters must have the same Member Visibility class C { _length = 0; get length() { return this._length; } set length(value) { this._length = value; }
}`},{header:"Member Visibility",slug:"member-visibility",content:`public : public is already the default visibility modifier, you don’t ever need to write it on a class member
protected : protected members are only visible to subclasses of the class they’re declared in or the current class
private is like protected, but doesn’t allow access to the member even from subclasses
Classes may have static members. These members aren’t associated with a particular instance of the class. class MySafe { private secretKey = 12345;
} const s = new MySafe();
console.log(s.secretKey); // Not allowed during type checking
// OK : 这种写法是可以访问的 these private fields are soft private and don’t strictly enforce privacy
// Unlike TypeScripts’s private, JavaScript’s private fields (#) remain private after compilation console.log(s["secretKey"]);`},{header:"[**js Private class",slug:"js-private-class",content:`features**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
Class fields are public by default, but private class members can be created by using a hash # prefix. The privacy
encapsulation of these class features is enforced by JavaScript itself.`},{header:"static Blocks in Classes",slug:"static-blocks-in-classes",content:`Static blocks allow you to write a sequence of statements with their own scope that can access private fields
within the containing class. This means that we can write initialization code with all the capabilities of writing
statements, no leakage of variables, and full access to our class’s internals.`},{header:"js arrow function",slug:"js-arrow-function",content:`箭头函数没有 this。如果访问 this，则会从外部获取
不能对箭头函数进行 new 操作,不具有 this 自然也就意味着另一个限制：箭头函数不能用作构造器（constructor）。不能用 new 调用它们。
箭头函数也没有 arguments 变量。 箭头函数 => 和使用 .bind(this) 调用的常规函数之间有细微的差别：`},{header:"箭头函数 VS bind",slug:"箭头函数-vs-bind",content:`.bind(this) 创建了一个该函数的“绑定版本”。
箭头函数 => 没有创建任何绑定。箭头函数只是没有 this。this 的查找与常规变量的搜索方式完全相同：在外部词法环境中查找。`},{header:"this parameters",slug:"this-parameters",content:`In a method or function definition, an initial parameter named this has special meaning in TypeScript. These
parameters are erased during compilation。
箭头函数的缺点：will use more memory, because each class instance will have its own copy of each function defined this way。
Instead of using an arrow function, so we can add a this parameter to method definitions to statically enforce that
the method is called correctly
// TypeScript input with 'this' parameter
function fn(this: SomeType, x: number) { /* ... */
} // After compilation : JavaScript output 编译后第一个参数就去掉了
function fn(x) { /* ... */
}
传入this指向
class MyClass { name = "MyClass"; getName(this: MyClass) { return this.name; }
} const c = new MyClass();
c.getName();// OK : this 指向正确 // Error, would crash
const g = c.getName;
// The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.
console.log(g());`},{header:"this Types",slug:"this-types",content:`In classes, a special type called this refers dynamically to the type of the current class.
// sameAs 方法的 other 参数 type 为 this，它代表的是当前实例对象
class Box { content: string = ""; sameAs(other: this) { return other.content === this.content; }
}`},{header:"this based type guards",slug:"this-based-type-guards",content:`You can use this is Type in the return position for methods in classes and interfaces. When mixed with a type
narrowing (e.g. if statements) the type of the target object would be narrowed to the specified Type.`},{header:"Parameter Properties",slug:"parameter-properties",content:`typeScript offers special syntax for turning a constructor parameter into a class property with the same name
and value. These are called parameter properties and are created by prefixing a constructor argument with one of the
visibility modifiers public, private, protected, or readonly. The resulting field gets those modifier(s):
class Params { constructor( public readonly x: number, protected y: number, private z: number ) { // No body necessary }
} const a = new Params(1, 2, 3);
console.log(a.x);`}]},{path:"/vue2/react.html",title:"react",pathLocale:"/",contents:[{header:"react api",slug:"react-api",content:""},{header:"useCallback",slug:"usecallback",content:"React.useCallback(fn, dependencies) : 缓存传入的 fn 函数，并不会调用 fn"},{header:"Adding a Ref to a Class Component",slug:"adding-a-ref-to-a-class-component",content:`using ref to reference a class component instance
// 这里的 ref 引用的是 AutoFocusTextInput 实例
class AutoFocusTextInput extends React.Component { constructor(props) { super(props) this.textInput = React.createRef() } componentDidMount() { this.textInput.current.focusTextInput() } render() { return <CustomTextInput ref={this.textInput} /> }
}
But you may not use the ref attribute on function components because they don’t have instances.
If you want to allow people to take a ref to your function component, you can use forwardRef (possibly in
conjunction with useImperativeHandle), or you can convert the component to a class.
You can, however, use the ref attribute inside a function component as long as you refer to a DOM element or a **
class component**:`},{header:"forwardRef",slug:"forwardref",content:`React.forwardRef((props,ref)=>{return ReactComponent}) : lets your component expose a DOM node to parent component
with a ref.
forwardRef accepts a render function as an argument. React calls this function with props and ref
forwardRef returns a React component,a component returned by forwardRef is also able to receive a ref prop,使用这个返回的
component 时候，传入 ref prop 即可。 ref object const myRef = useRef(null);
<div ref={myRef}> ref callback <div ref={(node) => console.log(node)} />`},{header:"useRef() Hook on a custom component",slug:"useref-hook-on-a-custom-component",content:`On custom components, ref needs to be forwarded.
This is because ref is (usually) a reference to a DOM element. A React Component can renders multiple DOM element, so
you need to be explicit about where the ref should be assigned to.
const salesRef = useRef(null)
return <Sales ref={salesRef} /> // inside Sales.js
// assigns the ref to an actual DOM element, the div
const Sales = (props, ref) => <div ref={ref}></div> export default React.forwardRef(Sales)
When the <div> DOM node is added to the screen, React will call your ref callback with the DOM node as the argument.
When that <div> DOM node is removed, React will call your ref callback with null.`},{header:"useLayoutEffect",slug:"uselayouteffect",content:`is a version of useEffect that fires before the browser repaints the screen.
React guarantees that the code inside useLayoutEffect and any state updates scheduled inside it will be processed
before
the browser repaints the screen. This lets you render the tooltip, measure it, and re-render the tooltip again without
the user noticing the first extra render. In other words, useLayoutEffect blocks the browser from painting`},{header:"React elements vs React nodes",slug:"react-elements-vs-react-nodes",content:`A ReactElement is an object with a type and props
A ReactNode is a ReactElement, a ReactFragment, a string, a number or an array of ReactNodes, or null, or undefined,
or a boolean React.isValidElement checks whether the argument is a React element, not whether it’s a React node.`},{header:"useMemo vs useCallback",slug:"usememo-vs-usecallback",content:"useMemo caches the result of calling your function. useCallback caches the function itself. Unlike useMemo, it does not call the function you provide."},{header:"react lifecycle vs hooks",slug:"react-lifecycle-vs-hooks",content:`React has four built-in methods that gets called, in this order, when mounting a component: constructor()
getDerivedStateFromProps()
render()
componentDidMount() The render() method is required and will always be called, the others are optional and will be called if you define
them.
React has five built-in methods that gets called, in this order, when a component is updated: getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate() The render() method is required and will always be called, the others are optional and will be called if you define
them componentDidMount: React will call it when your component is added (mounted) to the screen
componentDidUpdate: component re-renders due to changed props or state.
componentWillUnmount: component has been removed (unmounted) from the screen. in development when Strict Mode is on, React will call componentDidMount, immediately call componentWillUnmount, and
then call componentDidMount again.`},{header:"hooks lifecycle",slug:"hooks-lifecycle",content:`useEffect(setup, dependencies?) The useEffect hook works similarly to the three lifecycle methods: componentDidMount, componentDidUpdate,
and componentWillUnmount.
when the dependencies array is empty, the setup function only get called once; it works similarly to componentDidMount
;
if the dependencies isn't empty,
everytime when the dependencies changed, the setup function get called, it works similarly to componentDidUpdate;
useEffect will return a fn which will automatically get called when the component unmount, it works similarly
to componentWillUnmount`},{header:"useEffect 和 useLayoutEffect 的区别",slug:"useeffect-和-uselayouteffect-的区别",content:`useEffect 是异步执行，而 useLayoutEffect 是同步执行的
当函数组件刷新（渲染）时，包含 useEffect 的组件整个运行过程如下 触发组件重新渲染（通过改变组件 state 或者组件的父组件重新渲染，导致子节点渲染）。
组件函数执行。
组件渲染后呈现到屏幕上。
useEffect hook 执行。 当函数组件刷新（渲染）时，包含 useLayoutEffect 的组件整个运行过程如下： 触发组件重新渲染（通过改变组件 state 或者组件的父组件重新渲染，导致子组件渲染）。
组件函数执行。
useLayoutEffect hook 执行, React 等待 useLayoutEffect 的函数执行完毕。
组件渲染后呈现到屏幕上。 useEffect 异步执行的优点是，react 渲染组件不必等待 useEffect 函数执行完毕，造成阻塞.百分之 99 的情况，使用 useEffect 就可以了，唯一需要用到 useLayoutEffect
的情况就是，在使用
useEffect 的情况下，我们的屏幕会出现闪烁的情况（组件在很短的时间内渲染了两次）
// 下面的代码，组件就会渲染两次
const OnlyTest = () => { const [value, setValue] = useState(0) const mountedRef = useRef(false) useEffect(() => { // useLayoutEffect(() => { if (!mountedRef.current) { console.log('first mount') mountedRef.current = true } console.log('useEffect_callback_trigger') if (value === 0) { setValue(10 + +Math.random().toFixed(2)) } }, [value]) return ( <div onClick={() => { console.log('onClick_trigger') setValue(0) }} style={{ width: '100px', background: 'green', textAlign: 'center', color: 'white', padding: '4px', cursor: 'pointer', }} > value:{value} </div> )
}`},{header:"check components mounted status",slug:"check-components-mounted-status",content:`import React, { useEffect, useRef } from 'react' export { ExampleComponent } function ExampleComponent() { const mounted = useRef(false) useEffect(() => { // The useEffect() hook is called when the component is mounted and sets the mounted.current value to true mounted.current = true // clean up return () => { mounted.current = false } }, []) return <MyComponent />
}`},{header:"React.useImperativeHandle(ref, createHandle, dependencies?)",slug:"react-useimperativehandle-ref-createhandle-dependencies",content:`useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref
Parameters The ref you received as the second argument from the forwardRef render function.
createHandle: A function that takes no arguments and returns the ref handle you want to expose. That ref handle can
have any type. Usually, you will return an object with the methods you want to expose. // expose custom methods that you want to expose to parent components
// in other words ,parent ref not has full access to dom element
// forwardref is no longer bind to dom element, instead, create a new ref in MyInput component,bind it to actual dom element
import { forwardRef, useRef, useImperativeHandle } from 'react' const MyInput = forwardRef(function MyInput(props, ref) { const inputRef = useRef(null) useImperativeHandle( ref, () => { return { focus() { inputRef.current.focus() }, scrollIntoView() { inputRef.current.scrollIntoView() }, } }, [] ) return <input {...props} ref={inputRef} />
})`},{header:"React.memo(Component, arePropsEqual?)",slug:"react-memo-component-arepropsequal",content:`arePropsEqual: A function that accepts two arguments: the component’s previous props, and its new props. It should
return true if the old and new props are equal: that is, if the component will render the same output and behave in
the same way with the new props as with the old. Otherwise it should return false. Usually, you will not specify this
function. By default, React will compare each prop with Object.is Wrap a component in memo to get a memoized version of that component. This memoized version of your component will
usually not be re-rendered when its parent component is re-rendered as long as its props have not changed`},{header:"ReactDOM.createPortal(children, domNode, key?)",slug:"reactdom-createportal-children-domnode-key",content:`createPortal lets you render some children into a different part of the DOM. createPortal returns a React node that can
be included into JSX or returned from a React component children: Anything that can be rendered with React, such as a piece of JSX (e.g. <div /> or <SomeComponent />), a
Fragment (<>...</>), a string or a number, or an array of these domNode: Some DOM node, such as those returned by document.getElementById(). The node must already exist. Passing a
different DOM node during an update will cause the portal content to be recreated. optional key: A unique string or number to be used as the portal’s key.`},{header:"setState(nextState, callback?)",slug:"setstate-nextstate-callback",content:`nextState: Either an object or a function. If you pass an object as nextState, it will be shallowly merged into this.state.
If you pass a function as nextState, it will be treated as an updater function. It must be pure, should take the
pending state and props as arguments, and should return the object to be shallowly merged into this.state. React will
put your updater function in a queue and re-render your component. During the next render, React will calculate the
next state by applying all of the queued updaters to the previous state.`},{header:"findDOMNode",slug:"finddomnode",content:`Call findDOMNode to find the browser DOM node for a given React class component instance.
import { findDOMNode } from 'react-dom' const domNode = findDOMNode(componentInstance)`},{header:"react util",slug:"react-util",content:`useId: 返回全局的 id,兼容了 React.useId api
render: 兼容了 react 各个版本的 React.createRoot().render() 方法`},{header:"react transition",slug:"react-transition",content:""},{header:"rc-motion (ant-design base component)",slug:"rc-motion-ant-design-base-component",content:`如下当切换 show:true 的时候，CSSMotion 组件会将 .fade .fade-appear .fade-enter .fade-enter-active 等 class 应用于 div 元素;
如下当切换 show:false 的时候，CSSMotion 组件会将 .fade .fade-leave-active 等 class 应用于 div 元素;
js 会在浏览器每帧之间添加和移除这些 class 类，浏览器会根据相应的 css 样式在两个 css 状态之间展示过渡动画，过渡动画的效果以及时间完全由 css 样式和 css transition 属性决定，CSSMotion组件只是在适当的时间进行添加和移除 class 类
<CSSMotion motionName="fade" visible={show} removeOnLeave> {({ style, className: motionClassName }) => { return ( <div style={{ ...style }} className={classNames('card', motionClassName)}> rc-motion </div> ) }}
</CSSMotion>
.card { border: 1px solid green; border-radius: 8px; text-align: center; line-height: 100px; height: 100px; transition: 1s;
} .fade { &.fade-appear, &.fade-enter { opacity: 0; } &.fade-appear.fade-appear-active, &.fade-enter.fade-enter-active { opacity: 1; } &.fade-leave-active { background: green; opacity: 0; }
}`}]},{path:"/vue2/vue_1.html",title:"vue2.0源码(1)",pathLocale:"/",contents:[{header:"ref",slug:"ref",content:"Vue.js 技术揭秘"}]},{path:"/vue2/vue_migration.html",title:"vue_migration",pathLocale:"/",contents:[{header:"",slug:"",content:`setup() 钩子: setup() 自身并不含对组件实例的访问权，即在 setup() 中访问 this 会是 undefined; 在模板中访问从 setup() 返回的 ref
时，它会自动浅层解包，因此你无须再在模板中为它写 .value。当通过 this 访问时也会同样如此解包;setup(props) 函数的第一个参数是组件的 props export default { setup(props, context) { // 将 \`props\` 转为一个其中全是 ref 的对象，然后解构 const {title} = toRefs(props) // \`title\` 是一个追踪着 \`props.title\` 的 ref console.log(title.value) // 或者，将 \`props\` 的单个属性转为一个 ref const title1 = toRef(props, 'title1') console.log(context.attrs)// 透传 Attributes（非响应式的对象，等价于 $attrs） console.log(context.slots)// 插槽（非响应式的对象，等价于 $slots） console.log(context.emit) // 触发事件（函数，等价于 $emit） console.log(context.expose)// 暴露公共属性（函数） // attrs 和 slots 都是有状态的对象，它们总是会随着组件自身的更新而更新。这意味着你应当避免解构它们，并始终通过 attrs.x 或 slots.x 的形式使用其中的属性 // expose 函数用于显式地限制该组件暴露出的属性，当父组件通过模板引用访问该组件的实例时，将仅能访问 expose 函数暴露出的内容 }
} setup 也可以返回一个渲染函数, 返回一个渲染函数将会阻止我们返回其他东西, 我们可以通过调用 expose() 解决这个问题 export default { setup(props, {expose}) { const count = ref(0) const increment = () => ++count.value expose({ increment }) return () => h('div', count.value) }
} reactive(), 返回一个对象的响应式代理, 响应式转换是“深层”的：它会影响到所有嵌套的属性,若要避免深层响应式转换，只想保留对这个对象顶层次访问的响应性，请使用 shallowReactive() 作替代
reactive(), 它只能用于对象类型 (对象、数组和如 Map、Set 这样的集合类型)。它不能持有如 string、number 或 boolean 这样的原始类型
reactive(), 不能替换整个对象 let state = reactive({count: 0})
// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
state = reactive({count: 1}) reactive(), 对解构操作不友好：当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接 // 当访问到某个响应式数组或 Map 这样的原生集合类型中的 ref 元素时，不会执行 ref 的解包
const books = reactive([ref('Vue 3 Guide')])
console.log(books[0].value) // 这里需要 .value // 将一个 ref 赋值给一个 reactive 属性时，该 ref 会被自动解包
const count = ref(1)
const obj = reactive({})
obj.count = count watchEffect(callback(onCleanup)) 立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行; 第一个参数就是要运行的副作用函数。这个副作用函数的参数(onCleanup)
也是一个函数，用来注册清理回调 // 清除副作用， onCleanup 是个钩子函数，保证清理回调会在该副作用下一次执行前被调用
watchEffect(async (onCleanup) => { onCleanup(() => { // do cleanup logic })
}) watch(), 侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。第一个参数是侦听器的源。这个来源可以是以下几种:一个函数，返回一个值; 一个 ref; 一个响应式对象; // 侦听一个 getter 函数
const state = reactive({count: 0})
watch( () => state.count, (count, prevCount) => { /* ... */ }
)
// 侦听一个 ref
const count = ref(0)
watch(count, (count, prevCount) => { /* ... */
}) toRef() // 双向 ref，会与源属性同步
const state = reactive({foo: 1})
const fooRef = toRef(state, 'foo') // 双向 ref，会与源属性同步
const fooRef = ref(state.foo) // ref 不会和 state.foo 保持同步，因为这个 ref() 接收到的是一个纯数值
// 当 toRef 与组件 props 结合使用时，关于禁止对 props 做出更改的限制依然有效
toRef(props, 'foo')
toRef(() => props.foo) toValue() 将值、refs 或 getters 规范化为值, 与 unref() 类似 toRefs(), 将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的, 针对 reactive() 解构操作不友好的
API function useFeatureX() { const state = reactive({ foo: 1, bar: 2 }) // 在返回时都转为 ref， 针对 reactive 解构操作不友好的 Api return toRefs(state)
} // 可以解构而不会失去响应性
const {foo, bar} = useFeatureX() shallowRef(), 只有对 .value 的访问是响应式的 const state = shallowRef({count: 1})
// 不会触发更改
state.value.count = 2
// 会触发更改
state.value = {count: 2} triggerRef(), 强制触发依赖于一个浅层 ref 的副作用`}]},{path:"/vue2/vue_question.html",title:"vue常见问题解答",pathLocale:"/",contents:[{header:"Vue中父子组件生命周期执行顺序",slug:"vue中父子组件生命周期执行顺序",content:`在单一组件中，钩子的执行顺序是
beforeCreate-> created -> mounted->... ->destroyed
当父子组件嵌套时,父组件先创建，然后子组件创建；子组件先挂载，然后父组件挂载,所以在父组件 mounted 中获取 api 的数据，子组件的 mounted 是拿不到的。
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
更新过程
父beforeUpdate->子beforeUpdate->子updated->父updated
销毁过程
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed`},{header:"vue组件生命周期总结",slug:"vue组件生命周期总结",content:`beforeCreate 执行时：data 和 el 均未初始化，值为 undefined
created 执行时：Vue 实例观察的数据对象 data 已经配置好，已经可以得到 data 的值，但 Vue 实例使用的根 DOM 元素 el 还未初始化
beforeMount 执行时：data 和 el 均已经初始化，但此时 el 并没有渲染进数据，el 的值为“虚拟”的元素节点
mounted 执行时：此时 el 已经渲染完成并挂载到实例上
beforeUpdate 和 updated 触发时，el 中的数据都已经渲染完成，但只有 updated 钩子被调用时候，组件 dom 才被更新。
在 created 钩子中可以对 data 数据进行操作，这个时候可以进行数据请求将返回的数据赋给 data
在 mounted 钩子对挂载的 dom 进行操作，此时，DOM 已经被渲染到页面上。
虽然 updated 函数会在数据变化时被触发，但却不能准确的判断是那个属性值被改变，所以在实际情况中用 computed 或 watch 函数来监听属性的变化，并做一些其他的操作。
所有的生命周期钩子自动绑定 this 上下文到实例中，所以不能使用 箭头函数 来定义一个生命周期方法 (例如 created: () => this.fetchTodos()),会导致 this 指向父级。
在使用 vue-router 时有时需要使用来缓存组件状态，这个时候 created 钩子就不会被重复调用了，如果我们的子组件需要在每次加载或切换状态的时候进行某些操作，可以使用 activated 钩子触发。
父子组件的钩子并不会等待请求返回，请求是异步的，VUE 设计也不能因为请求没有响应而不执行后面的钩子。所以，我们必须通过 v-if 来控制子组件钩子的执行时机`},{header:"vue 插槽",slug:"vue-插槽",content:`具名插槽: 书写组件的时候使用 <slot>标签 + name 属性来提供插槽占位。 不带 name 的 <slot> 默认 name="default" <div class="container"> <header> <slot name="header"></slot> </header>
</div> 具名插槽使用： <template> 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称; 任何没有被包裹在带有 v-slot 的 <template> 中的内容都会被视为**
默认插槽**的内容
注意： v-slot 只能添加在 <template> 上
v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被重写为 #header <base-layout> <template v-slot:header> <h1>Here might be a page title</h1> </template>
</base-layout> 绑定在 <slot> 元素上的 attribute 被称为 插槽 prop <!--书写组件时候定义插槽，绑定 插槽prop-->
<span> <slot v-bind:user="user"> {{ user.lastName }} </slot>
</span>
<!--使用组件时候访问 整个插槽 slotProps 属性，这里的 slotProps 名称可以自己随便定义-->
<current-user> <template v-slot:default="slotProps"> {{ slotProps.user.firstName }} </template>
</current-user> 特殊情况简写 ： 独占默认插槽的缩写语法，当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上 <current-user v-slot:default="slotProps"> {{ slotProps.user.firstName }}
</current-user>
<!--或者-->
<current-user v-slot="slotProps"> {{ slotProps.user.firstName }}
</current-user> 废弃的语法书写形式 <!--插槽的使用: 在template上使用slot属性指定插槽名称 -->
<!--使用slot-scope属性指定 slot prop--> <slot-example> <template slot="default" slot-scope="slotProps"> {{ slotProps.msg }} </template>
</slot-example>`},{header:"$slots vs $scopeSlots",slug:"slots-vs-scopeslots",content:`vm.$slots 类型：{ [name: string]: ?Array<VNode> } Vue.component('blog-post', { render: function (createElement) { var header = this.$slots.header var body = this.$slots.default var footer = this.$slots.footer return createElement('div', [ createElement('header', header), createElement('main', body), createElement('footer', footer) ]) }
}) vm.$scopedSlots 类型：{ [name: string]: props => Array<VNode> | undefined }, 他是一个函数，调用后会返回 Array<VNode>
,所有的 $slots 现在都会作为函数暴露在 $scopedSlots 中。如果你在使用渲染函数，不论当前插槽是否带有作用域，我们都推荐始终通过 $scopedSlots 访问它们。 vm.$scopedSlots的 ts 类型为 type ScopedSlot = (props: any) => ScopedSlotChildren
如果要渲染 <div><slot :text="message"></slot></div> 这样的模板，render 函数可以这样写
render: function (createElement) { return createElement('div', [ this.$scopedSlots.default({ text: this.message }) ])
}
如下所示 default 函数传入的 props 最终会渲染到 v-slot:default="props" 即作为 slotProp 传入
// 如果要渲染 \`<div><child v-slot="props"><span>{{ props.text }}</span></child></div>\` 这样的模板，\`render\` 函数可以这样写
render: function (createElement) { return createElement('div', [ createElement('child', { // 在数据对象中传递 \`scopedSlots\` // 格式为 { name: props => VNode | Array<VNode> } scopedSlots: { default: function (props) { return createElement('span', props.text) } } }) ])
}`}]},{path:"/vue2/vue_transition_animation.html",title:"vue_transition_animation",pathLocale:"/",contents:[{header:"Transition",slug:"transition",content:`1.v-enter-to，v-leave一般不写，不写的原因是：按照一般的过渡效果（动画），进入的最后状态就是元素本身的样式，离开的最初状态也是元素本身的样式，所以是没有必要写的。
2.v-enter, v-leave-to中的css一般相同，一个是进入时过渡（动画）的初始样式，一个是离开过渡（动画）结束时的样式。
3.v-enter-active ，v-leave-active 中的css一般相同，一般都是用于定义过渡（动画）的过程时间，延迟和曲线函数。当然离开的过渡（动画）的过程时间，延迟和曲线函数和进入的可以是不同的。 Q:组件根节点如何进行过渡 ?
记得要在根节点 transition 上标记 appear 属性，appear 设置节点在初始渲染的过渡 <transition name="slide" appear> <div>我是根组件节点</div>
</transition>
.slide-enter { transform: translateY(300px); opacity: 0.1;
} .slide-enter-active { transition: all 0.3s ease-in-out;
}`},{header:"Reference",slug:"reference",content:`vue 动画和过渡
https://juejin.cn/post/6967234534504923172
https://blog.csdn.net/weixin_43974265/article/details/113543096`}]},{path:"/webpack/webpack_question.html",title:"webpack QA",pathLocale:"/",contents:[{header:"",slug:"",content:`webpack中的css引入文件需要用~@的形式 https://webpack.js.org/loaders/sass-loader/#resolving-import-at-rules Using ~ is deprecated and can be removed from your code (we recommend it), but we still support it for historical
reasons. Why can you remove it? The loader will first try to resolve @import as a relative path. If it cannot be
resolved, then the loader will try to resolve @import inside node_modules.
It's important to prepend it with only ~, because ~/ resolves to the home directory.`}]},{path:"/wechat/mini_program.html",title:"微信小程序开发",pathLocale:"/",contents:[{header:"微信 vs web",slug:"微信-vs-web",content:`微信中事件对象没有 event.preventDefault 和 event.stopPropagation,正常冒泡事件绑定 bind:tap="handler"
,如果要阻止事件冒泡需要 catch:tap="handler"
微信小程序本地图片在开发工具显示手机预览不显示:background-image
只能用网络url或者base64 . 本地图片要用image标签才行
小程序图片闪烁是因为图片没有高度，加载时从最高高度变到(加载完完成，展示图片时)最适合高度。 /*解决方案：全局设置图片自适应*/
image { height: auto
} 微信小程序中安全区域计算和适配
微信节点高度计算不准确:需要加延迟之后才可以计算准确，wx.nextTick 中也不行，不知道为啥 Page({ onReady() { setTimeout(() => { this.computeHeight() }, 500) }
}) 增强滑动效果: scroll-view 嵌套在 swiper 中 <swiper indicator-dots="{{false}}" style="height:{{listHeight}}px" autoplay="{{false}}" interval="{{interval}}" vertical="{{true}}" duration="{{1000}}"> <swiper-item> <scroll-view class="list-wrapper" scroll-y="true" style="height: {{listHeight}}px" show-scrollbar="{{false}}" lower-threshold="{{50}}" enhanced="{{true}}" bindscrolltolower="scrollToLower"> </scroll-view> </swiper-item>
</swiper> 滑动效果(movable-area 嵌套 movable-view) <movable-area class="ma" style="height:{{maHeight}}px;margin-top:{{-mvDistance}}px" catch:touchmove="noop"> <movable-view class="mv" direction="vertical" y="{{mvDistance+(winHeight * 0.5)}}" style="height:{{cardHeight}}px" inertia out-of-bounds friction="{{10}}"> <view class="content">lots of content</view> </movable-view>
</movable-area>
movable-area 嵌套 movable-view 需要给宽度 .ma { width: 100%;
} .mv { width: 100%;
}
const app = getApp()
Page({ data: { cardHeight: 0, winHeight: app.globalData.sysInfo.windowHeight, // 屏幕尺寸 maHeight: 0, mvDistance: 0 }, onReady() { setTimeout(() => { this.computeHeight() }, 500) }, computeHeight() { const that = this const query = wx.createSelectorQuery() query.select('.content').boundingClientRect() query.selectViewport().boundingClientRect() query.exec(function (res) { const {safeArea: {bottom}, screenHeight} = app.globalData.sysInfo const safeBottom = screenHeight - bottom const [cards, viewPort] = res const mvDistance = res[0].bottom - viewPort.height // 隐藏的内容最大移动距离 const winHeight = that.data.winHeight that.setData({ cardHeight: res[0].height, // 内容滑块高度 // 滑轨高度 = 内容滑块高度 + 内容滑块底部完全移动到屏幕底部所需要移动的距离 + 屏幕高度*系数(自定义系数（0-1），决定了滑块可以向下滑动多少距离) maHeight: res[0].height + mvDistance + winHeight * 0.7, mvDistance // margin-top 距离 }) }) }
});`},{header:"环境搭建",slug:"环境搭建",content:"webstorm 插件：WeChat mini program support"}]},{path:"/wechat/wechat_sdk.html",title:"微信sdk本地测试环境搭建",pathLocale:"/",contents:[{header:"申请微信测试账号",slug:"申请微信测试账号",content:`修改本地 host 文件：windows 路径 C:\\Windows\\System32\\drivers\\etc,将本地 host 改为任意域名，比如tumbleweed.top
登录微信公众平台, 进入 开发-开发者工具-公众平台测试账号 申请测试账号
在 JS接口安全域名修改 中配置自定义的本地域名 tumbleweed.top
关注测试号二维码 （如果多人开发，都要关注这个测试账号）`},{header:"安装手机代理软件 (废弃不用：直接使用内网穿透)",slug:"安装手机代理软件-废弃不用-直接使用内网穿透",content:"由于我们的域名是自定义的假域名，并不存在，所以需要将手机的网络代理到电脑上，由电脑端向微信服务器发送请求"},{header:"安装 charles 并测试 (废弃不用：直接使用内网穿透)",slug:"安装-charles-并测试-废弃不用-直接使用内网穿透",content:`charles 是一款收费软件，下载安装之后，在 proxy-setting 中查看 http 代理端口，默认是 8888,将手机和电脑接入统一局域网中，打开手机 WiFi 连接，配置手动代理，输入电脑的 IP 地址和代理端口 8888
在电脑上启动本地调试服务，注意要运行在 80 端口下面，微信 sdk 只支持(http 80 或者 https 443),比如运行在 http://tumbleweed.top,如果使用的是 vue 开发，需要在vue.config.js中配置以下字段 devServer: { disableHostCheck: true, port:80, host:'tumbleweed.top' }
在手机上访问 http://tumbleweed.top,如果能访问成功，则表明代理软件已经配置成功（注意 charles 会弹出确认代理连接操作弹框）`},{header:"服务端代码",slug:"服务端代码",content:`const request = require('request')
const axios = require('axios')
const sha1 = require('js-sha1') // 引入sha1加密算法，需要使用sha1算法生成签名
const Koa = require('koa')
var cors = require('koa2-cors')
const serve = require("koa-static"); const {appId, appSecret} = require('./wechatSetting') const app = new Koa() const Router = require('@koa/router')
const router = new Router() const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
app.use(serve("./static"));
app.use(cors())
app.use(router.routes()).use(router.allowedMethods())
// 测试接口
router.get('/wechat/hello', async (ctx) => { ctx.body = 'Hello World'
})
// 微信 SDK 初始化
router.post('/wechat/sdkInit', async (ctx, next) => { ctx.body = ctx.request.body const url = ctx.body.url // 初始化jsdk的页面url，如果是单页应用记得截掉url的#部分 let access_token = '' let ticket = '' console.log(url) try { let step1Res = await axios.get( \`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=\${appId}&secret=\${appSecret}\` ) if (step1Res.status === 200) { access_token = step1Res.data.access_token } let step2Res = await axios.get( \`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=\${access_token}&type=jsapi\` ) if (step2Res.status === 200) { ticket = step2Res.data.ticket } const createNonceStr = () => Math.random().toString(36).substr(2, 15) const createTimeStamp = () => parseInt(new Date().getTime() / 1000) + '' const calcSignature = (ticket, nonceStr, ts, url) => { let str = \`jsapi_ticket=\${ticket}&noncestr=\${nonceStr}&timestamp=\${ts}&url=\${url}\` return sha1(str) //使用sha1加密算法 } const nonceStr = createNonceStr() // 随机字符串 const timestamp = createTimeStamp() // 时间戳 const signature = calcSignature(ticket, nonceStr, timestamp, url) // 通过sha1算法得到签名 ctx.response.status = 200 const res = { result: { nonceStr: nonceStr, timestamp: timestamp, signature: signature, appId, code: 0, }, code: 0, message: '签名获取成功', } ctx.response.body = res } catch (e) { console.log(e) }
}) // 微信授权登录接口测试
router.get('/wechat/sendCode', async (ctx) => { const query = ctx.request.query const code = query.code try { const {data} = await getAccessCodeFromCode(code) const {access_token, openid} = data const {data: userInfo} = await getUserInfoFromWechat(access_token, openid) ctx.response.status = 200 const res = { result: userInfo, code: 0, message: '用户信息获取成功', } ctx.response.body = res } catch (error) { console.error(error) }
})
// 小程序获取openid
router.post('/wechat/getOpenid', async (ctx) => { console.log("post /wechat/getOpenid") const query = ctx.request.query const code = query.code try { const {data} = await getAccessCodeFromCodeByMiniProgram(code) console.log(111111, data) const {session_key, openid} = data ctx.response.status = 200 const res = { result: {session_key,openid}, code: 0, message: 'openid 获取成功', } ctx.response.body = res console.log("response:", res) } catch (error) { console.error(error) }
})
// 微信公众平台调用接口
function getAccessCodeFromCode(CODE) { const url = \`https://api.weixin.qq.com/sns/oauth2/access_token?appid=\${appId}&secret=\${appSecret}&code=\${CODE}&grant_type=authorization_code\` return axios.get(url)
}
// 小程序登录调用接口 获取openid
function getAccessCodeFromCodeByMiniProgram(CODE) { const url = \`https://api.weixin.qq.com/sns/jscode2session?appid=\${appId}&secret=\${appSecret}&js_code=\${CODE}&grant_type=authorization_code\` return axios.get(url)
}
function validateToken(ACCESS_TOKEN, OPENID) { const url = \`https://api.weixin.qq.com/sns/auth?access_token=\${ACCESS_TOKEN}&openid=\${OPENID}\` return axios.get(url)
} function refreshToken(REFRESH_TOKEN) { const url = \`https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=\${appId}&grant_type=refresh_token&refresh_token=\${REFRESH_TOKEN}\` return axios.get(url)
} function getUserInfoFromWechat(ACCESS_TOKEN, OPENID) { const url = \`https://api.weixin.qq.com/sns/userinfo?access_token=\${ACCESS_TOKEN}&openid=\${OPENID}&lang=zh_CN\` return axios.get(url)
} app.listen(5000, () => { console.log("app is running in port 5000")
})`},{header:"前端代码",slug:"前端代码",content:`TIP
所有需要使用 JS-SDK 的页面必须先注入配置信息，否则将无法调用.（同一个 url 仅需调用一次，对于变化 url 的 SPA 的 web app 可在每次 url 变化时进行调用),url（当前网页的 URL，不包含#及其后面部分）
以微信扫一扫功能为例，每个需要调用扫一扫的页面需要先初始化 SDK，调用后台生成签名接口时需要传入前页面的 url <template> <div @click="menuClick">扫一扫</div>
</template>
<script>
import WX from "weixin-js-sdk"
import {getWXconfig} from "@/src/api/wx.js" export default { data() { return {}; }, methods: { async initWx() { let url = window.location.href.split("#")[0] let res = await getWXconfig({url}) // 获取 appId timestamp nonceStr signature this.configWX(res) }, menuClick() { this.initWx() }, startScanCode() { WX.scanQRCode({ needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果， scanType: ['qrCode'], // 可以指定扫二维码还是一维码，默认二者都有 success: async function (res) { // 扫一扫返回的结果 console.log(res) } }) }, configWX(data) { let that = this WX.config({ debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。 appId: data.appId, // 必填，公众号的唯一标识 timestamp: data.timestamp, // 必填，生成签名的时间戳 nonceStr: data.nonceStr, // 必填，生成签名的随机串 signature: data.signature, // 必填，签名 jsApiList: [ // 必填，需要使用的JS接口列表 'checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'translateVoice', 'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'onVoicePlayEnd', 'pauseVoice', 'stopVoice', 'uploadVoice', 'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getNetworkType', 'openLocation', 'getLocation', 'hideOptionMenu', 'showOptionMenu', 'closeWindow', 'scanQRCode', 'chooseWXPay', 'openProductSpecificView', 'addCard', 'chooseCard', 'openCard' ] }); /**wx.error可以返回微信config配置是否成功*/ WX.error(function (res) { console.log("WX----error", arguments) }); WX.ready(function () { // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。 console.log("WX----ready", arguments) that.startScanCode() }); }, }
};
<\/script>`},{header:"线上部署配置",slug:"线上部署配置",content:""},{header:"JS 接口安全域名",slug:"js-接口安全域名",content:"设置需要调用 js-sdk 的 H5 页面"},{header:"微信 IP 白名单设置",slug:"微信-ip-白名单设置",content:`通过开发者 ID 及密码调用获取 access_token 接口时，需要设置访问来源 IP 为白名单（初始化 js-sdk 的时候需要后台服务器与微信服务器进行交互，获取 access_token,需要添加后台服务器 ip 至微信公众号白名单中）
目的：为了提高公众平台开发者接口调用的安全性，避免一旦开发者 ID 和密码泄露后给帐号造成损失。对调用“获取 access_token”接口增加 IP 白名单校验：只有将 IP 地址设置为公众号的 IP 白名单，才能成功调用该接口`},{header:"参考链接",slug:"参考链接",content:`微信 SDK 官方文档
微信 SDK 官方 demo
ngrok 内网穿透工具下载 # Start a tunnel,将内网 3000 端口映射到外网
ngrok http 3000
# 如果需要提供网页服务 需要设置 token
ngrok config add-authtoken <token> 微信测试账号登录地址
10 分钟带你完成微信网页授权&获取用户信息&搭建内网映射测试 # 前后端分离需要配置 nginx 将前后端都代理到 3000 端口
server { listen 3000; server_name localhost; location /wechat { proxy_pass http://localhost:5000; # 后端接口 } location / { proxy_pass http://localhost:4000; # 前端页面 }
}`}]},{path:"/database/mysql/mysql.html",title:"mysql",pathLocale:"/",contents:[{header:"知识点",slug:"知识点",content:`mysql 中 + 的作用：只有一个作用，就是用作运算符 两个操作数都为数值型，则进行加法运算
一方为字符型，则试图将字符型转换成数值型，如果转换成功，则进行加法运算；如果转换失败，则将字符型转换成数值 0 ，继续进行加法运算
只要其中一方为 null， 则结果肯定为 null`},{header:"mysql 索引失效",slug:"mysql-索引失效",content:""},{header:"mysql 内置函数",slug:"mysql-内置函数",content:`CAST: Cast a value as a certain type CAST(123456 as CHAR)
CONVERT: Cast a value as a certain type CONVERT(123456, CHAR)
JSON_CONTAINS(target, candidate[, path]): Whether JSON document contains specific object at path
HEX():	Hexadecimal representation of decimal or string value
AES_ENCRYPT(str,key_str):	Encrypt using AES
AES_DECRYPT(crypt_str,key_str): Decrypt using AES
GROUP_CONCAT():	Return a concatenated string -- 以下 GROUP_CONCAT 查询会得到： A;B;C
USE testdb;
CREATE TABLE t ( v CHAR
);
INSERT INTO t(v) VALUES('A'),('B'),('C'),('B');
SELECT GROUP_CONCAT(DISTINCT v ORDER BY v ASC SEPARATOR ';')
FROM t;
SET @j = '{"a": 1, "b": 2, "c": {"d": 4}}';
SET @j2 = '1';
SELECT JSON_CONTAINS(@j, @j2, '$.a');`},{header:"Reference",slug:"reference",content:`wiki/Category:Shelf:SQL
wiki-sql-exercise`}]},{path:"/others/computerNetwork/basic.html",title:"计算机网络",pathLocale:"/",contents:[{header:"",slug:"",content:`集线器(hub)
交换机：可以记录各个端口所连接设备的 Mac 地址，两个端口之间的设备通信通过交换机进行转发，由于交换机会记录设备的 Mac
地址，可以精准的发送到所要通信的设备，不需要进行广播。另外交换机是全双工通信，就是我们现在用的网线，内部有八根线，正常使用中至少有四根线在工作。不会产生冲突。交换机所处的是数据链路层。交换机可以进行桥接，组成小规模网络互联，交换机可以维系的
Mac
地址和端口映射表在几千到一万之间，当超过这个映射上限时候，新加入的设备由于没有映射mac地址，交换机需要进行广播通信数据进行寻址，这样新设备会添加到映射表中，但旧的映射端口就会被顶替掉。所以当网络规模扩大时候，就会用路由器代替交换机连接两个局域网络。
路由器(Router)：路由器有时候又叫网关，路由工作在OSI模型的第三层——即网络层。 lan口：local area network，用户端网线口，连接各个终端 wan口：wide area network，光猫端光纤口，与运营商端连接 wlan：wireless local area network，无线局域网 路由器内部软件组成部分有： 防火墙软件
路由软件(网关)
两层交换机软件：若两个设备属于同一网段，则经过交换机软件直接通信，不需要经过路由软件(网关)
其他软件 IP地址： ip 地址是一个抽象地址，不能直接用于通信，Mac 地址是真实地址，网络中设备的唯一标识符，网络内部设备互相通信会根据 ip 地址去查询 相应设备的 Mac 地址，所使用的的协议是 ARP (Address resolve
protocol),比如设备A (192.168.1.25)和设备B (192.168.1.32)之间进行通信，设备A根据 ARP 协议在网络中去广播设备B的ip地址，设备B收到广播后返回自身的Mac地址，然后在 Mac
层即数据链路层进行数据传输，数据传输过程中每经过一个网络设备转发，数据中的Mac地址的源和目的地址会根据经过的转发设备不断切换， 但数据中的 ip源地址和ip目的地址一直保持不变，，最终抵达所要通信的设备。但有个例外就是 在 NAT
协议下
ip地址在传输中会发生变化。Ip地址由网络号和主机号组成，子网掩码就是告诉你那些是IP地址的网络号，那些是主机号的，子网掩码转换成二进制后数字1部位代表的就是ip地址的网络号，0代表的就是主机号，如果两个设备的IP地址网络号相同，则说明这两个设备在同一网段。windows
cmd 中输入 ipconfig 可以查看ip地址 回环地址：本地环回环地址时以127开头的地址127.0.0.1 —>
127.255.255.254，是由http协议规定，用于本地主机的进程间的通信之用。若主机发送一个目的地址为环回地址的IP数据报，则本主机中的协议软件就处理该数据报中数据，而不会将数据报发送到任何网络。目的地址为环回地址的IP数据报永远不会出现在任何网络上，因为网络号为127的地址根本不是网络地址。不可以被公网访问 0.0.0.0:
0.0.0.0，最特殊的一个ip地址，代表的是本机所有ip地址，不管你有多少个网口，多少个ip，如果监听本机的0.0.0.0上的端口，就等于监听机器上的所有ip端口。换句话说，就是只要数据报目的地址是你机器上的一个ip地址，那么就能被接受。这个ip相当于java中的this，代表当前设备的IP localhost: localhost时一个域名，如www.baidu.com.其具体的地址时可以配置的，一般情况下默认指向的地址为127.0.0.1。不可以被公网访问 网络中每一台设备都有自己维护的路由表，比如 pc,路由器等等，假如当前我的电脑 ip 是 192.168.0.24，我电脑的路由表会记录默认网关(一般是路由器)的ip地址是
192.168.0.1，路由器其实也是一个Linux系统，内部也维护着一张路由表，路由器内部路由表生成算法很复杂
私网ip地址段 A类地址： 10.0.0.0～10.255.255.255（大型网络）
B类地址： 172.16.0.0 ～172.31.255.255 （中型网络）
C类地址： 192.168.0.0～192.168.255.255（小型网络） 网关：若目标ip在同一网段，则可以直接通信，不需要经过网关，否则就需要网关进行转发。
# 查看与某个ip通信需要经过那些路由器和网关 windows 命令
# Tracert 命令时都只看到只有一跳的返回结果的原因：问题出在路由器本身不对tracert数据包进行解析
tracert -d ip地址
# domain 转 ip地址 windows 命令
nslookup url地址
# 重新获取ip地址
ipconfig /renew
网络适配器：又称网卡
家庭网络结构： 入户光纤 -> 光猫 -> 路由器wan口 -> 路由器lan口 -> 终端 猫/光猫：现在猫已经很少了，都是光猫，猫不支持光纤，光猫支持光纤。它的作用是将光纤中的光信号转换成网线中的电信号进行传输.
最早家庭用户没有路由器，每次上网都需要输入宽带账号密码进行拨号（PPPoE方式），很麻烦，而且只能支持一台设备联网，没有WiFi；有路由器后，路由器可以进行拨号，可以发射WiFi，支持多终端。家庭宽带带宽单位是 Mb(bit)
,所以要除以 8 才是我们平常说的带宽 宽带拨号：PPPoE方式与运营商建立一条点对点链路通道。一般由路由器完成拨号工作，也有可能由光猫完成拨号（不建议）。
NAT:network address translation，网络地址转换，局域网内设备访问互联网需要公网ip，否则不能上网，但是公网ip地址有限，当局域网内设备发送数据包至运营商路由器时，这个路由器有 NAT
功能，并配有公网ip地址,它就会将我们的数据包的源ip地址进行转换，转成路由器所在的公网ip，收数据包的时候又会替换回来，家里的路由器也有NAT功能，但是没有公网ip，NAT之后依旧无法上英特网。
DHCP:Dynamic host configuration protocol,当我们将网络中设备的ip地址设置为动态获取时候，DHCP服务器就会根据DHCP协议给客户机分配ip地址，使得客户机可以根据这个ip上网。
家庭WiFi信号差，如何解决？ 方案一：两个路由器，主路由器 lan 口接副路由器 wan 口，进入副路由器后台，设置上网方式为动态ip（或者 DHCP）,然后放到信号差的区域。缺点就是：不支持漫游，无法从一个WiFi自动切换到另外一个WiFi，需要手动切换
方案二：mesh组网，缺点是价格昂贵，优点就是支持漫游`},{header:"VMware 网络模式",slug:"vmware-网络模式",content:"VMware虚拟机安装完成后，网络控制面板会出现两个虚拟网络适配器，分别代表nat模式和host-only模式。桥接模式下使用的物理主机的真实网卡。"},{header:"Bridged (桥接模式)",slug:"bridged-桥接模式",content:"桥接模式就是将主机网卡与虚拟机虚拟的网卡利用虚拟网桥进行通信。在桥接的作用下，类似于把物理主机虚拟为一个交换机，所有桥接设置的虚拟机连接到这个交换机的一个接口上，物理主机也同样插在这个交换机当中，所以所有桥接下的网卡与网卡都是交换模式的，相互可以访问而不干扰。在桥接模式下，虚拟机ip地址需要与主机在同一个网段，如果需要联网，则网关与DNS需要与主机网卡一致。ip地址资源比较充足的情况下使用桥接模式"},{header:"NAT（网络地址转换模式）",slug:"nat-网络地址转换模式",content:`用于ip地址比较稀缺的时候使用该模式。使用NAT模式，就是让虚拟系统借助NAT的功能，通过宿主机所在的网络来访问公网。在这种模式下宿主机成为双网卡主机，同时参与现有的宿主局域网和新建的虚拟局域网，但由于加设了一个虚拟的NAT服务器，使得虚拟局域网内的虚拟机在对外访问时，使用的则是宿主机的IP地址，这样从外部网络来看，只能看到宿主机，完全看不到新建的虚拟局域网。
默认情况下VMware和虚拟机的配置都不需要修改，所以NAT模式是最简单的。
在NAT模式中，主机网卡直接与虚拟NAT设备相连，然后虚拟NAT设备与虚拟DHCP服务器一起连接在虚拟交换机VMnet8上，这样就实现了虚拟机联网。NAT模式，利用虚拟的NAT设备以及虚拟DHCP服务器来使虚拟机连接外网，而VMware
Network Adapter VMnet8虚拟网卡是用来与虚拟机通信的`},{header:"Host-Only（仅主机模式）",slug:"host-only-仅主机模式",content:`在某些特殊的网络调试环境中，要求将真实环境和虚拟环境隔离开，这时你就可采用host-only模式，在这种模式下宿主机上的所有虚拟机是可以相互通信的，但虚拟机和真实的网络是被隔离开的。
Host-Only模式其实就是NAT模式去除了虚拟NAT设备，然后使用VMware Network Adapter
VMnet1虚拟网卡连接VMnet1虚拟交换机来与虚拟机通信的，Host-Only模式将虚拟机与外网隔开，使得虚拟机成为一个独立的系统，只与主机相互通讯。但其实可以通过XP或win7的网络共享功能使虚拟机与外网连接 server {
listen 443 ssl;
server_name api.weixin.qq.com;
ssl_certificate /etc/nginx/cert/ndkjcx.com.pem;
ssl_certificate_key /etc/nginx/cert/ndkjcx.com.key;
ssl_session_timeout 5m; client_max_body_size 200m; location / { proxy_pass http://10.60.114.2:5000; } }
extra_hosts: "api.weixin.qq.com:10.60.114.2"`}]},{path:"/code/aliyun/oss-playground/",title:"启动服务",pathLocale:"/",contents:[{header:"启动服务",slug:"启动服务",content:`npm install
node ./app.js`}]},{path:"/code/components/TinyMceEditor/",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:`此组件为 Vue3 富文本组件,使用的是 tinymce v6 oxide-icon-pack-template是一个自定义 富文本工具栏按钮的附属项目
,参考自定义 icon,使用 SVGO 对svg图片进行了压缩
需要引入以下依赖 "@tinymce/tinymce-vue": "^5.1.1", "@types/tinymce": "^4.6.9", 组件使用的时候需要将 tinymce 文件夹下的内容公共目录下，因为 TinyMceEditor.vue 组件中需要传入 tinymce 的入口
富文本中引入了导入word文档的插件，word中的图片会自动传入到后台`}]},{path:"/code/js_practice/mvvm_test/",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:`JavaScript: Building a frontend framework, from scratch, with components (templating, state, VDOM)
snabbdom node version v14.15.5
yarn install && yarn start`}]},{path:"/code/aliyun/oss-playground/html_sourceCode/",title:"ali-oss-test",pathLocale:"/",contents:[{header:"ali-oss-test",slug:"ali-oss-test",content:""},{header:"Project setup",slug:"project-setup",content:"npm install"},{header:"Compiles and hot-reloads for development",slug:"compiles-and-hot-reloads-for-development",content:"npm run serve"},{header:"Compiles and minifies for production",slug:"compiles-and-minifies-for-production",content:"npm run build"},{header:"Lints and fixes files",slug:"lints-and-fixes-files",content:"npm run lint"},{header:"Customize configuration",slug:"customize-configuration",content:"See Configuration Reference."}]},{path:"/code/aliyun/oss-playground/policy/",title:"阿里云 RAM policy 简介",pathLocale:"/",contents:[{header:"阿里云 RAM policy 简介",slug:"阿里云-ram-policy-简介",content:`登录主账号之后进入OSS管理控制台，创建子账号，即RAM账号(子账号可以单独登录阿里云控制台)
对子账号进行bucket级别的授权，选中bucket后可以进行授权
对子账号进行 AliyunSTSAssumeRoleAccess授权，子账号可以通过sdk调用返回一个临时账户STS，此sts账号扮演一个RAM角色(ram角色在后台定义)
可以建立
STS临时账号的权限控制
STS账号继承了RAM角色的所有权限
STS账号继承了STS server中policy的权限，即此文件夹中txt文件的配置
STS账号的最终权限是以上两个的交集
两个权限配置格式都必须正确，如果有误，就会报错。 RAM策略编辑器中，每条规则需要设置其Effect、Actions、Resources和Conditions：
Effect
指定这条规则是允许访问（Allow）还是禁止访问（Deny）。
Actions
指定访问资源的动作，可以选择多项。一般来说用户使用提供的通配动作就足够了：
oss:表示允许所有动作。
oss:Get表示允许所有的读动作。
oss:Put*表示允许所有的写动作。
更多信息请参见RAM Policy Editor README。 Resources
指定授权访问的OSS的资源，可以指定多个，每个是以下形式： 表示某个bucket：my-bucket （此时对bucket下的文件没有权限）
表示某个bucket下面所有文件：my-bucket/* （此时对bucket本身没有权限，例如ListObjects）
表示某个bucket下某个目录：my-bucket/dir （此时对dir/下面的文件没有权限）
表示某个bucket下某个目录下面所有文件：my-bucket/dir/* （此时对dir没有权限，例如ListObjects）
填写完整的资源路径：acs:oss:*🔢my-bucket/dir，其中1234为用户的User ID（在控制台查看）
EnablePath
当用户需要对某个目录授权时，往往还需要保证对上一层目录也有List权限，例如用户对my-bucket/users/dir/*赋予读写权限，为了在控制台（或其他工具）能够查看这个目录，用户还需要以下权限：
ListObjects my-bucket
ListObjects my-bucket/users
ListObjects my-bucket/users/dir
勾选EnablePath选项时，上面这些权限会自动添加。
Conditions 指定授权访问时应该满足的条件，可以指定多个`},{header:"参考链接",slug:"参考链接",content:`(基于RAM Policy配置示例)[https://help.aliyun.com/document_detail/100680.html?spm=a2c4g.11186623.2.22.30393b49HJqw92#section-an0-sb1-5sh]
(RAM policy 编辑器)[http://gosspublic.alicdn.com/ram-policy-editor/index.html?spm=a2c4g.11186623.2.7.5b613eb10WlQDS]
(STS临时授权访问OSS)[https://help.aliyun.com/document_detail/100624.html?spm=a2c4g.11186623.6.698.4cb965feK77yvS]
(RAM策略编辑器)[https://help.aliyun.com/document_detail/32203.html?spm=a2c4g.11186623.4.5.4f0365fesi5QpA]`}]},{path:"/code/components/TinyMceEditor/oxide-icon-pack-template/",title:"Oxide Icon Pack Template",pathLocale:"/",contents:[{header:"Oxide Icon Pack Template",slug:"oxide-icon-pack-template",content:"This is a template project for creating an Icon Pack for TinyMCE 5. For instructions on how to use this project, visit the documentation for Create an Icon Pack."},{header:"Quick guide",slug:"quick-guide",content:`Open a terminal and navigate to the project folder, then Install dependencies using npm install.
Place your icons in src/svg
Run gulp to build the icon pack`}]},{path:"/code/components/TinyMceEditor/tinymce/langs/",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:`This is where language files should be placed.
Please DO NOT translate these directly, use this service instead: https://crowdin.com/project/tinymce`}]},{path:"/code/components/vue/vue3/Container/",title:"",pathLocale:"/",contents:[{header:"容器组件",slug:"容器组件",content:`按指定设计稿尺寸布局，以下为 3840*2160 (16:9) 设计尺寸，每个组件都需要指定高度和宽度，当窗口组件 resize 时候，组件会自动缩放以适应屏幕尺寸 <container :options="{width: 3840, height: 2160}">
<div class="header"> <top-header/>
</div>
<div class="separator-wrapper"> <separator/>
</div>
<div class="center"> <div class="left"> <div class="left1"> </div> <div class="left2"> </div> <div class="left3"> </div> <div class="left4"> </div> <div class="left5"> </div> <div class="left6"> </div> </div> <div class="right"> <div class="right-top1"> </div> <div class="right-top2"> </div> <div class="right-bottom"> <div class="right-left"> <div class="right-left1"> </div> <div class="right-left2"> </div> <div class="right-left3"> </div> <div class="right-left4"> </div> </div> <div class="right-right"> <div class="right-right1"> </div> <div class="right-right2"> </div> </div> </div> </div>
</div>
</container>
<script>
import Container from '../../components/Container' export default { components: { Container, }
}
<\/script>
<style lang="less" scoped>
.container { width: 100%; height: 100%; background: rgb(29, 29, 29); color: #fff; font-size: 48px; #screen-container { display: flex; flex-direction: column; .header { height: 167px; margin-top: 10px; } .separator-wrapper { height: 10px; } .center { flex: 1; display: flex; .left { flex: 0 0 860px; display: flex; flex-direction: column; width: 860px; height: 100%; margin: 0 10px; box-sizing: border-box; background: rgb(60, 61, 64); .left1, .left2, .left3, .left4, .left5, .left6 { padding-bottom: 20px; } .left1 { height: 300px; } .left2 { height: 320px; } .left3 { height: 280px; } .left4 { height: 230px; } .left5 { height: 360px; } .left6 { height: 360px; } } .right { flex: 1; display: flex; flex-direction: column; height: 100%; margin: 0 10px; max-width: 2960px; overflow: hidden; .right-top1 { height: 206px; margin-bottom: 20px; } .right-top2 { height: 48px; margin-bottom: 20px; } .right-bottom { flex: 1; display: flex; .right-left { display: flex; flex-direction: column; width: 1917px; .right-left1 { height: 999px; } .right-left2 { height: 80px; padding-top: 20px; box-sizing: border-box; } .right-left3 { height: 350px; margin-top: 10px; } .right-left4 { height: 220px; margin-top: 10px; } } .right-right { flex: 1; display: flex; flex-direction: column; margin-left: 10px; .right-right1 { width: 100%; height: 999px; padding-right: 10px; box-sizing: border-box; } .right-right2 { width: 100%; height: 650px; margin-top: 20px; } } } } } }
}
</style>`}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]}],q="update-vuepress-plugin-full-text-search2-search-index";var C=y(H),U=k(()=>{const e=new Map;for(const t of C.value)e.set(t.path,t);return e});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[q]=e=>{C.value=e});function J(e){const t=y([]);let s=null;return E(e,()=>{s&&clearTimeout(s),s=setTimeout(a,100)}),t;function a(){const c=e.value.toLowerCase().trim();if(!c){t.value=[];return}const r=new Map,n=new Set;for(const o of C.value)for(const i of W(o,c)){n.add(i.parentPageTitle);let l=r.get(i.parentPageTitle);l||(l=[],r.set(i.parentPageTitle,l)),l.push(i)}const d=[...n].sort((o,i)=>{const l=r.get(o);return r.get(i).length-l.length});t.value=[...r].flatMap(([,o])=>o).sort((o,i)=>o.parentPagePriority-i.parentPagePriority||d.indexOf(o.parentPageTitle)-d.indexOf(i.parentPageTitle)||o.priority-i.priority)}}function*W(e,t){const s=S(e.title,t);if(s){yield{path:e.path,parentPageTitle:x(e),title:e.title,display:s,page:e,content:null,parentPagePriority:1,priority:1};return}for(const a of e.contents){const c=S(a.header,t);if(c){yield{path:e.path+(a.slug?`#${a.slug}`:""),parentPageTitle:x(e),title:e.title,display:c,page:e,content:null,parentPagePriority:10,priority:2};continue}const r=S(a.content,t);r&&(yield{path:e.path+(a.slug?`#${a.slug}`:""),parentPageTitle:x(e),title:e.title,display:[{type:"header",str:`${a.header}
`},...r],page:e,content:null,parentPagePriority:10,priority:10})}}function x(e){const t=e.path.split("/");let s="/";return t[1]&&(s=`/${t[1]}/`),(U.value.get(s)||e).title}function S(e,t){const s=[];let a=0;const c=e.toLowerCase().replace(/\s/gu," ");let r=0,n=c.indexOf(t,r);if(n<0)return null;for(;n>=0;){const o=n+t.length;if(d(e.slice(r,n),"normal"),d(e.slice(n,o),"highlight"),r=o,n=c.indexOf(t,r),a>100)break}return d(e.slice(r),"normal"),s.filter(o=>o.str);function d(o,i){let l=o;i==="normal"&&l.length>100&&a===0&&(l=`… ${l.slice(-10)}`);let m=!1;if(a+l.length>100){if(s.some(g=>g.type==="ellipsis"))return;l=l.slice(0,Math.max(100-a,1)),m=!0}s.push({type:i,str:l}),a+=l.length,m&&(s.push({type:"ellipsis",str:" …"}),a+=2)}}const $={"/":{placeholder:"Search"},"/zh/":{placeholder:"搜索"}},z=j({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>$}},setup(e){const{locales:t}=M(e),s=y(""),a=y(!1),c=y(-1),r=J(s),n=k(()=>s.value&&a.value&&r.value.length),d=D(),o=F(),i=k(()=>t.value[o.value]??{});function l(){if(!n.value)return;let p=c.value-1;p<0&&(p=r.value.length-1),g(p)}function m(){if(!n.value)return;let p=c.value+1;p>=r.value.length&&(p=0),g(p)}function g(p){c.value=p}function I(){c.value=-1}function L(p){if(!n.value)return;const T=r.value[p];T&&d.push(T.path)}return{query:s,focused:a,focusIndex:c,suggestions:r,activeSuggestion:n,onUp:l,onDown:m,focus:g,unfocus:I,go:L,locale:i}}});const V={class:"search-box",role:"search"},G=["placeholder"],Q=["onMousedown","onMouseenter"],X=["href"],K={key:0,class:"parent-page-title"},Y={class:"suggestion-row"},Z={class:"page-title"},ee={class:"suggestion-content"};function te(e,t,s,a,c,r){return u(),h("div",V,[B(f("input",{ref:"input","onUpdate:modelValue":t[0]||(t[0]=n=>e.query=n),"aria-label":"Search",class:b({focused:e.focused}),placeholder:e.locale.placeholder??"Search",autocomplete:"off",spellcheck:"false",onFocus:t[1]||(t[1]=()=>e.focused=!0),onBlur:t[2]||(t[2]=()=>e.focused=!1),onKeyup:[t[3]||(t[3]=v(n=>e.go(e.focusIndex),["enter"])),t[4]||(t[4]=v((...n)=>e.onUp&&e.onUp(...n),["up"])),t[5]||(t[5]=v((...n)=>e.onDown&&e.onDown(...n),["down"]))]},null,42,G),[[N,e.query]]),e.activeSuggestion?(u(),h("ul",{key:0,class:"suggestions",onMouseleave:t[7]||(t[7]=(...n)=>e.unfocus&&e.unfocus(...n))},[(u(!0),h(R,null,P(e.suggestions,(n,d)=>(u(),h("li",{key:d,class:b(["suggestion",{focused:d===e.focusIndex}]),onMousedown:o=>e.go(d),onMouseenter:o=>e.focus(d)},[f("a",{href:n.path,onClick:t[6]||(t[6]=O(()=>{},["prevent"]))},[n.parentPageTitle&&(!e.suggestions[d-1]||e.suggestions[d-1].parentPageTitle!==n.parentPageTitle)?(u(),h("div",K,w(n.parentPageTitle),1)):A("v-if",!0),f("div",Y,[f("div",Z,w(n.title||n.path),1),f("div",ee,[(u(!0),h(R,null,P(n.display,(o,i)=>(u(),h("span",{key:i,class:b(o.type)},w(o.str),3))),128))])])],8,X)],42,Q))),128))],32)):A("v-if",!0)])}const oe=_(z,[["render",te],["__scopeId","data-v-4d908e78"],["__file","/home/runner/work/vuepress_blog/vuepress_blog/node_modules/vuepress-plugin-full-text-search2/lib/client/SearchBox.vue"]]);export{oe as default};
