---
title: kotlin_basic
---

## kotlin
- [Kotlin File vs Class](https://stackoverflow.com/questions/42769873/kotlin-file-vs-class-whats-the-difference): idea
  中新建 kotlin Class 不能直接运行 ?? kotlin file可以
  `class Point {init{}}` <br/><br/>curly braces can be omitted <br/> <br/>init block<br/> <br/>Kotlin does not have a new keyword <br/>[class](https://kotlinlang.org/docs/classes.html)

|            |              casts              |                spread operator                |   ternary operator    |       
|:----------:|:-------------------------------:|:---------------------------------------------:|:---------------------:|
| typescript |              `as`               |                   ...array                    |      `x ? y : z`      |                                   
|    java    |               ()                |                       无                       |     `x ? y : z `      |                               
|   kotlin   |          `as` 或 `as?`           |                    *array                     | `if (a > b) a else b` |         
|            |       **default import**        |             **String templates**              |    **switch case**    |                                               
| typescript |                                 |          \`` his name is ${name}`\`           |    switch ... case    |                                  
|    java    |                无                |                                               |    switch ... case    |                                
|   kotlin   | kotlin.* kotlin.collections.* 等 | `"${s1.replace("is", "was")}, but now is $a"` |        `when`         |                               

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


- **Object expressions**:Object expressions create objects of anonymous classes, that is, classes that
  aren't explicitly declared with the class declaration. Such classes are useful for one-time use.
- **Data classes** in Kotlin are classes whose main purpose is to hold data. Data classes come automatically with
  additional
  member functions that allow you to print an instance to readable output, compare instances, copy instances, and more.
  Data classes are marked with `data` ,The compiler automatically derives the following members from all properties
  declared in the primary constructor:`.equals()`,`.hashCode()`,`.toString()`,`.componentN()`,`.copy()`
- **Data objects**:Just like data classes, you can mark an object declaration with the `data` modifier. This instructs
  the
  compiler to generate a number of functions for your object: `toString()`,`equals()/hashCode()` pair
- **Companion objects**: An object declaration inside a class can be marked with the `companion` keyword
```kotlin
val helloWorld = object {
    val hello = "Hello"
    val world = "World"

    // object expressions extend Any, so `override` is required on `toString()`
    override fun toString() = "$hello $world"
}

print(helloWorld)
```

- **Object expressions** create objects of anonymous classes, that is, classes that aren't explicitly declared with the
  class declaration. Such classes are useful for one-time use. You can define them from scratch, inherit from existing
  classes, or implement interfaces. Instances of anonymous classes are also called anonymous objects because they are
  defined by an expression, not a name.

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
  example) to suspend execution of a coroutine. Suspending functions treat the thread fairly and don't block it for "**
  waiting**". However, this doesn't yet bring any **concurrency** into the picture.

- `runBlocking` and `coroutineScope` builders may look similar because they both wait for their body
  and
  all its children to complete. The main difference is that the runBlocking method blocks the
  current
  thread for waiting, while coroutineScope just suspends, releasing the underlying thread for other
  usages. Because of that difference, `runBlocking` is a **regular function** and `coroutineScope`
  is
  a
  **suspending function**.


- [async vs launch](https://www.geeksforgeeks.org/launch-vs-async-in-kotlin-coroutines/)
  ![kotlin_async_launch](F:\workspace\Demo\vuepress_blog\docs\images\android\kotlin_async_launch.png)
