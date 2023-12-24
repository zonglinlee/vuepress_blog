---
title: jetpackCompose
---


https://cloud.tencent.com/developer/article/1763740

AndroidX是谷歌在 2018 I/O 大会上推出的用于替换android.support.library的
Android扩展库，按照官方文档说明，android.support.library在Android
28版本之后就不再更新，未来的版本更新都在AndroidX中进行。不仅如此，AAC（Android Architecture
Components架构缩写）中的组件也被 合并到AndroidX中，所以在使用JetPack组件时经常会看到AndroidX相关的包。

androidx 命名空间包含 Android Jetpack 库。与支持库一样，androidx 命名空间中的库与 Android
平台分开提供，并向后兼容各个 Android 版本。


gradle proxy
```yaml
# gradle.properties 文件
systemProp.http.proxyHost=127.0.0.1
systemProp.http.proxyPort=1081
systemProp.https.proxyHost=127.0.0.1
systemProp.https.proxyPort=1081
```

## 名词解释

- 重新生成整个屏幕所面临的一个难题是，在时间、计算能力和电池用量方面可能成本高昂。为了减少在这方面耗费的资源，Compose
  会智能地选择在任何给定时间需要重新绘制界面的哪些部分
- @Composable 注释。所有可组合函数都必须带有此注释；此注释可告知 Compose 编译器：此函数旨在将数据转换为界面
- To display a scrollable column we use a `LazyColumn`. `LazyColumn` renders only the visible items
  on screen, allowing performance gains when rendering a big list.`LazyColumn` and `LazyRow` are
  equivalent to `RecyclerView` in Android Views.
- The spring-based animation:spring spec does not take any time-related parameters. Instead it
  relies on physical properties (damping and stiffness) to make animations more natural.

## kotlin

- 变量

```kotlin
//Read-only local variables are defined using the keyword val. They can be assigned a value only once.
val a: Int = 1  // immediate assignment
val b = 2   // `Int` type is inferred
val c: Int  // Type required when no initializer is provided
c = 3       // deferred assignment
//Variables that can be reassigned use the var keyword.
var x = 5 // `Int` type is inferred
```

- 模板字符串： String templates

```kotlin
val s2 = "${s1.replace("is", "was")}, but now is $a"
```

- for 循环

```kotlin
val items = listOf("apple", "banana", "kiwifruit")
for (item in items) {
    println(item)
}
for (index in items.indices) {
    println("item at $index is ${items[index]}")
}
for (i in 1..3) {
    println(i)
}
for (i in 6 downTo 0 step 2) {
    println(i)
}
```

- when expression(类似switch case 语句)

```kotlin
fun describe(obj: Any): String =
    when (obj) {
        1 -> "One"
        "Hello" -> "Greeting"
        is Long -> "Long"
        !is String -> "Not a string"
        else -> "Unknown"
    }
```

- Ranges

```kotlin
//Check if a number is out of range
if (-1 !in 0..list.lastIndex) {
    println("-1 is out of range")
}
```

- lambda expressions

```kotlin
val fruits = listOf("banana", "avocado", "apple", "kiwifruit")
fruits
    .filter { it.startsWith("a") }
    .sortedBy { it }
    .map { it.uppercase() }
    .forEach { println(it) }
```

- Nullable values and null checks :A reference must be explicitly marked as nullable when null value
  is possible. Nullable type names
  have ? at the end.

```kotlin
//Return null if str does not hold an integer
fun parseInt(str: String): Int? {}
```

- Type checks and automatic casts : `is operator `

```kotlin

```

- 类： Inheritance between classes is declared by a `colon (:)`. Classes are `**final**` by default;
  to
  make a class inheritable, mark it as `open`

```kotlin
open class Shape

class Rectangle(val height: Double, val length: Double) : Shape() {
    val perimeter = (height + length) * 2
}
```

- functions: Kotlin functions are **first-class**, which means they can be stored in variables and
  data
  structures, and can be passed as arguments to and returned from other higher-order
  functions.Functions with block body must always specify return types explicitly, unless it's
  intended for them to return `Unit`, in which case specifying the return type is optional.

```kotlin
fun sum(a: Int, b: Int): Int {
    return a + b
}

//A function body can be an expression. Its return type is inferred.
fun sum(a: Int, b: Int) = a + b

//A function that returns no meaningful value(Unit),Unit return type can be omitted 
fun printSum(a: Int, b: Int): Unit {
    println("sum of $a and $b is ${a + b}")
}
fun printSum(a: Int, b: Int) {
    println("sum of $a and $b is ${a + b}")
}

//if can also be used as an expression
fun maxOf(a: Int, b: Int) = if (a > b) a else b

//Single-expression functions
fun theAnswer() = 42
fun theAnswer(): Int {
    return 42
}
```

- `Lambda expressions and anonymous functions` are **function literals**. Function literals are
  functions
  that are not declared but are passed immediately as an expression.A lambda expression is always
  surrounded by curly braces.If the inferred return type of the lambda is not `Unit`, the **last (or
  possibly single) expression** inside the lambda body is treated as the **return value**.
- Passing trailing lambdas:According to Kotlin convention, if the last parameter of a function is a
  function, then a lambda expression passed as the corresponding argument can be placed outside the
  parentheses:
- it: implicit name of a single parameter(If the compiler can parse the signature without any
  parameters, the parameter does not need to be declared and -> can be omitted,The parameter will be
  implicitly declared under the name `it`)

```kotlin
// Lambda expression syntax
val sum: (Int, Int) -> Int = { x: Int, y: Int -> x + y }
// notice: there is no parentheses for arguments
val sum: (Int, Int) -> Int = { x: Int, y: Int -> x + y }
val sum = { x: Int, y: Int -> x + y }
// Passing trailing lambdas
val product = items.fold(1) { acc, e -> acc * e }
// this literal is of type '(it: Int) -> Boolean'
ints.filter { it > 0 }
```

- [Scope functions](https://kotlinlang.org/docs/scope-functions.html): execute a block of code
  within the context of an object,When you call such a
  function on an object with a lambda expression provided, it forms a temporary scope. In this
  scope, you can access the object without its name.There are five of them: `let`, `run`, `with`
  , `apply`, and `also`.

    - Executing a lambda on non-nullable objects: `let`

    - Introducing an expression as a variable in local scope: `let`

    - Object configuration: `apply`

    - Object configuration and computing the result: `run`

    - Running statements where an expression is required: non-extension `run`

    - Additional effects: `also`

    - Grouping function calls on an object: `with`


- Object expressions:Object expressions create objects of anonymous classes, that is, classes that
  aren't explicitly declared with the class declaration. Such classes are useful for one-time use.

```kotlin
val helloWorld = object {
    val hello = "Hello"
    val world = "World"

    // object expressions extend Any, so `override` is required on `toString()`
    override fun toString() = "$hello $world"
}

print(helloWorld)
```

- [常用函数][https://kotlinlang.org/docs/idioms.html]

```kotlin
// console.log | System.out.println
println()
// Read-only list
val list = listOf("a", "b", "c")
// Read-only map
val map = mapOf("a" to 1, "b" to 2, "c" to 3)
map["c"] = 4
//Traverse a map or a list of pairs
for ((k, v) in map) {
    println("$k -> $v")
}
//Lazy property
val p: String by lazy { // the value is computed only on first access
    // compute the string
}

//Extension functions
fun String.spaceToCamelCase() {}
"Convert this to camelcase".spaceToCamelCase()
//Create a singleton
object Resource {
    val name = "Name"
}
//If-not-null shorthand
val files = File("Test").listFiles()
println(files?.size) // size is printed if files is not null
println(files?.size ?: "empty") // if files is null, this prints "empty"
```

## coroutine

- Suspending functions:Suspending functions can be used inside coroutines just like regular
  functions, but their
  additional feature is that they can, in turn, use other suspending functions (like delay in this
  example) to suspend execution of a coroutine

- `runBlocking` and `coroutineScope` builders may look similar because they both wait for their body
  and
  all its children to complete. The main difference is that the runBlocking method blocks the
  current
  thread for waiting, while coroutineScope just suspends, releasing the underlying thread for other
  usages. Because of that difference, `runBlocking` is a **regular function** and `coroutineScope`
  is
  a
  **suspending function**.