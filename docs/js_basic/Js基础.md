---
title: js基础
---

## [`Object.create(null)`](https://stackoverflow.com/questions/15518328/is-creating-js-object-with-object-createnull-the-same-as)

A javascript object inherits from `Object` by default, unless you explicitly create it with `null` as its `prototype`,
like: `Object.create(null)`.
`{}` would instead be equivalent to `Object.create(Object.prototype)`. In Chrome Devtool you can see
that `Object.create(null)` has no `__proto__` property, while `{}` does.

## [class](https://zh.javascript.info/class)

类初始化过程

- 创建一个名为 `User` 的函数，该函数成为类声明的结果。该函数的代码来自于 `constructor` 方法（如果我们不编写这种方法，那么它就被假定为空）。
- 原型方法用于继承：存储类中的方法，例如 `User.prototype` 中的 `sayName`。
- 为每个实例创建的方法，原型链中不存在，使用箭头函数书写，可以防止 `this` 丢失的问题,例如 `sayAge` 方法.在这里对于每一个 `User` 对象都有一个独立的方法，在内部都有一个指向此对象的 `this`
- 为每个实例创建 `类字段` 属性,存在于该实例上，原型链中不存在

```js
class User {
    constructor(name) {
        this.name = name;
    }

    // 类字段”是一种允许添加任何属性的语法
    age = 22

    sayName() {
        alert(this.name);
    }

    sayAge() {
        alert(this.age);
    }

    // 计算属性名称
    ['say' + 'Hi']() {
        alert("Hello");
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }
}

```

## Nullish coalescing operator (??)

The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand
side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

```js
const foo = null ?? 'default string'; // expected output: "default string"
const baz = 0 ?? 42; // expected output: 0
```

## 数字转化，一元运算符 `+`

一元运算符加号，或者说，加号 + 应用于单个值，对数字没有任何作用。但是如果运算元不是数字，加号 + 则会将其转化为数字。它的效果和 `Number(...)` 相同，但是更加简短。

```js
// 转化非数字
alert(+true); // 1
alert(+"");   // 0
let apples = "2";
let oranges = "3";
alert(+apples + +oranges); // 5
```

## [赋值 `=` 运算符](https://zh.javascript.info/operators#fu-zhi-fan-hui-yi-ge-zhi)

在 JavaScript 中，所有运算符都会返回一个值。这对于 `+` 和 `-` 来说是显而易见的，但对于 `=` 来说也是如此。 语句 `x = value` 将值 `value` 写入 `x` 然后返回 `x`。

```js
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert(a); // 3
alert(c); // 0
```

## [逗号运算符](https://zh.javascript.info/operators#dou-hao-yun-suan-fu)

逗号运算符能让我们处理多个语句，使用 , 将它们分开。每个语句都运行了，但是只有最后的语句的结果会被返回。 请注意逗号运算符的优先级非常低，比 `=` 还要低，因此下面的例子中圆括号非常重要。

```js
let a = (1 + 2, 3 + 4);
alert(a); // 7（3 + 4 的结果）

// 有时候，人们会使用它把几个行为放在一行上来进行复杂的运算。
for (a = 1, b = 3, c = a * b; a < 10; a++) {
// ...
}
```

## [值的比较](https://zh.javascript.info/comparison)

不同类型间的比较: 当对不同类型的值进行比较时，JavaScript 会首先将其转化为数字（`number`）再判定大小。

```js
alert('2' > 1); // true，字符串 '2' 会被转化为数字 2
alert('01' == 1); // true，字符串 '01' 会被转化为数字 1
// 对于布尔类型值，true 会被转化为 1、false 转化为 0
alert(true == 1); // true
alert(false == 0); // true
```

普通的相等性检查 `==` 存在一个问题，它不能区分出 `0` 和 `false`,也同样无法区分`空字符串`和 `false`， 这是因为在比较不同类型的值时，处于相等判断符号 `==` 两侧的值会先被转化为数字。`空字符串`
和 `false`
也是如此，转化后它们都为数字 `0`。 因此实际运用中大多数使用严格相等运算符 `===` ，它在进行比较时不会做任何的类型转换。

```js
alert(0 == false); // true
alert('' == false); // true
```

### 对 `null` 和 `undefined` 进行比较

```js
alert(null == undefined); // true (非严格相等模式下两者相等)
alert(null === undefined); // false
```

当使用数学式或其他比较方法 < > <= >= 时：
`null`/`undefined` 会被转化为数字：`null` 被转化为 `0`，`undefined` 被转化为 `NaN`。

### 奇怪的结果：`null` vs `0`

- 相等性检查 `==` 和普通比较符 `> < >= <=` 的代码逻辑是相互独立的。进行值的比较时，`null` 会被转化为数字，因此它被转化为了 0.
- 另一方面，`undefined` 和 `null` 在相等性检查 `==` 中不会进行任何的类型转换，它们有自己独立的比较规则，所以除了它们之间互等外，不会等于任何其他的值。

```js

alert(null > 0);  // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true
```

### 特立独行的 `undefined`

(1) 和 (2) 都返回 false 是因为 undefined 在比较中被转换为了 NaN，而 NaN 是一个特殊的数值型值，它与任何值进行比较都会返回 false。
(3) 返回 false 是因为这是一个相等性检查，而 `undefined` 只与 `null` 相等，不会与其他值相等

```js
alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)
```

## `?` 的非常规使用

```js
// 问号 ? 的作用是根据条件返回一个或另一个值
// 在这里我们不是把结果赋值给变量。而是根据条件执行不同的代码。
(company == 'Netscape') ? alert('Right!') : alert('Wrong.');
```

## 或运算寻找第一个真值

或运算符 || 做了如下的事情：

- 从左到右依次计算操作数。
- 处理每一个操作数时，都将其转化为布尔值。如果结果是 `true`，就停止计算，返回这个操作数的初始值。
- 如果所有的操作数都被计算过（也就是，转换结果都是 `false`），**则返回最后一个操作数**。

返回的值是操作数的初始形式，不会做布尔转换。换句话说，一个或运算 `||` 的链，将返回第一个真值，如果不存在真值，就返回该链的最后一个值。

```js
result = value1 || value2 || value3;
alert(undefined || null || 0); // 0（都是假值，返回最后一个值）
```

或运算符 `||` 的另一个用途是所谓的“短路求值”,人们利用这个特性，只在**左侧的条件为假**时才执行命令。

```js
true || alert("not printed"); // 这个alert不会执行
false || alert("printed"); // 这个alert会执行
```

## 与运算寻找第一个假值

与运算 && 做了如下的事:

- 从左到右依次计算操作数。
- 在处理每一个操作数时，都将其转化为布尔值。如果结果是 `false`，就停止计算，并返回这个操作数的初始值。
- 如果所有的操作数都被计算过（例如都是真值），则返回最后一个操作数。

换句话说，与运算返回第一个假值，如果没有假值就**返回最后一个值**

```js
result = value1 && value2 && value3;
alert(1 && 2 && null && 3); // null
alert(1 && 2 && 3); // 3，最后一个值
```

与运算 `&&` 的优先级比或运算 `||` 要高。 所以代码 `a && b || c && d` 跟 `&&` 表达式加了括号完全一样：`(a && b) || (c && d)`。

## !（非）

两个非运算 `!!` 有时候用来将某个值转化为布尔类型(它的作用和内建的 `Boolean` 函数作用是一样的). 第一个非运算将该值**转化为布尔类型并取反**，第二个非运算**再次取反**。最后我们就得到了一个任意值到布尔值的转化
非运算符 `!`
的优先级在所有逻辑运算符里面最高，所以它总是在 `&& 和 ||` 之前执行。

## `??` vs `||`

`||` 返回第一个 `真` 值; `??` 返回第一个 `已定义的` 值。`||` 无法区分 `false`、`0`、`空字符串`  和 `null/undefined`。它们都一样 —— 假值（`falsy values`）

```js
let height = 0;
// 高度 0 通常是一个有效值，它不应该被替换为默认值
alert(height || 100); // 100
alert(height ?? 100); // 0 
```

## 循环：while 和 for

### 省略语句段

for 循环的任何语句段都可以被省略,例如，如果我们在循环开始时不需要做任何事，我们就可以省略 `begin` 语句段

```js
let i = 0; // 我们已经声明了 i 并对它进行了赋值
for (; i < 3; i++) { // 不再需要 "begin" 语句段
    alert(i); // 0, 1, 2
}
```

我们也可以移除 `step` 语句段：

```js
let i = 0;
for (; i < 3;) {
    alert(i++);
}
```

实际上我们可以删除所有内容，从而创建一个无限循环

```js
for (; ;) {
    // 无限循环
}
```

### break/continue 标签

有时候我们需要一次从多层嵌套的循环中跳出来。

```js
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // 如果是空字符串或被取消，则中断并跳出这两个循环。执行 alert('Done!')
        // 如果不加标签，则只能跳出内层循环
        if (!input) break outer; // (*)

        // 用得到的值做些事……
    }
}
alert('Done!');
```

### 前缀 `++` vs 后置 `++`

```js
// 前缀形式 ++i
let i = 0;
while (++i < 5) alert(i); // 输出从 1 到 4 (因为 ++i 首先递增 i 然后返回新值和5进行比较)
// 后缀形式 i++
let i = 0;
while (i++ < 5) alert(i);// 输出从 1 到 5 (后缀形式 i++ 递增 i 然后返回 旧 值和5进行比较）)
```

## [`jsDoc`](https://en.wikipedia.org/wiki/JSDoc)

Tag Description

- `@author`    Developer's name
- `@constructor`    Marks a function as a constructor
- `@deprecated`    Marks a method as deprecated
- `@exception`    Synonym for `@throws`
- `@exports`    Identifies a member that is exported by the module
- `@param`    Documents a method parameter; a datatype indicator can be added between curly braces
- `@private`    Signifies that a member is private
- `@returns`    Documents a return value
- `@return`    Synonym for `@returns`
- `@see`    Documents an association to another object
- `@todo`    Documents something that is missing/open
- `@this`    Specifies the type of the object to which the keyword this refers within a function.
- `@throws`    Documents an exception thrown by a method
- `@version`    Provides the version number of a library

## `Transpilers` vs `Polyfills`

Babel 是最著名的转译器之一 两个有趣的 polyfill 库：

- [core js](https://github.com/zloirock/core-js) 支持了很多特性，允许只包含需要的特性。
- [polyfill.io](https://polyfill.io/v3/) 提供带有 polyfill 的脚本的服务，具体取决于特性和用户的浏览器。

```js
// 在运行转译器之前
height = height ?? 100;
// 在运行转译器之后
height = (height !== undefined && height !== null) ? height : 100;
```

## 对象

我们可以用下面两种语法中的任一种来创建一个空的对象

```js
let user = new Object(); // “构造函数” 的语法
let user = {};  // “字面量” 的语法
// 可以用多字词语来作为属性名，但必须给它们加上引号
let user1 = {
    name: "John",
    age: 30,
    "likes birds": true  // 多词属性名必须加引号
};
// 以用 delete 操作符移除属性
delete user1.age
// 列表中的最后一个属性应以逗号结尾，这叫做尾随（trailing）或悬挂（hanging）逗号。这样便于我们添加、删除和移动属性
let user2 = {
    name: "John",
    age: 30,
}
```

当创建一个对象时，我们可以在对象字面量中使用方括号。这叫做 `计算属性`。 当用其他类型作为属性名时候，属性名会被自动地转换为字符串例如，当`数字 0` 被用作对象的属性的键时，会被转换为`字符串 "0"`

### 属性存在性测试，`“in”` 操作符

语法： `"key" in object` , 请注意，in 的左边必须是 `属性名`。通常是**一个带引号的字符串**。

```js
let user = {name: "John", age: 30};
alert("age" in user); 
```

为了遍历一个对象的所有键（key），可以使用一个特殊形式的循环,`“for…in”` 循环

```js
for (let key in user) {
    alert(key);  // name, age, isAdmin
}
```

对象有顺序吗？换句话说，如果我们遍历一个对象，我们获取属性的顺序是和属性添加时的顺序相同吗？ 简短的回答是：`“有特别的顺序”`：`整数属性`会被进行排序，`其他属性`则按照创建的顺序显示

## Promise

### Thenables

**JavaScript引擎** 检查在 `(*)` 行中由 `.then` 处理程序（`handler`）返回的对象：如果它具有名为 `then` 的可调用方法，那么它将调用该方法并提供 JavaScript
原生的函数 `resolve` 和 `reject` 作为参数（类似于
`executor`），并等待直到其中一个函数被调用。在上面的示例中，`resolve(2)` 在 1 秒后被调用 `(**)`。然后，`result` 会被进一步沿着链向下传递。

这个特性允许我们将自定义的对象与 `promise` 链集成在一起，而不必继承自 `Promise`。

```js
class Thenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        alert(resolve); // function() { native code }
        // 1 秒后使用 this.num*2 进行 resolve
        setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result); // (*)
    })
    .then(alert); // 1000ms 后显示 2
```

## continue 用法

`continue` 可以用于跳出 `for`  | `for...in` | `for...of` 循环中符合条件的单次循环，进行下一次循环

## 构造器和操作符 `new`

构造函数在技术上是**常规函数**,不过有两个约定,它们的命名以大写字母开头;它们只能由 `new 操作符` 来执行。当一个函数被使用 new 操作符执行时:

- 一个**新的空对象**被创建并分配给 `this`。
- 函数体执行。通常它会修改 `this`，为其添加新的属性。
- 返回 `this` 的值。

构造器的主要目的就是， **实现可重用的对象创建代码**，从技术上讲，**任何函数**（除了箭头函数，它没有自己的 this）都可以用作构造器。即可以通过 `new` 来运行. 在一个函数内部，我们可以使用 `new.target`
属性来检查它是否被使用 `new` 进行调用了.

如下方法有时被用在库中以使语法更加灵活。这样人们在调用函数时，**无论是否使用了** `new`，程序都能工作

```js
// 如果你没有通过 new 运行我,我会给你添加 new
function User(name) {
    if (!new.target) {
        return new User(name);
    }
    this.name = name;
}
```

通常，构造器没有 `return` 语句。 但是，如果这有一个 `return` 语句,则

- 如果 `return` 返回的是一个对象，则返回这个对象，而不是 `this`。
- 如果 `return` 返回的是一个原始类型，则忽略。

顺便说一下，如果没有参数，我们**可以省略 `new` 后的括号**

```js
let user = new User; // <-- 没有参数
// 等同于
let user = new User();
```

## 可选链

如果可选链 `?.` 前面的值为 `undefined` 或者 `null`，它会停止运算并返回 `undefined`。注意`?.` 前的变量必须已声明

```js
let user = {}; // user 没有 address 属性
alert(user?.address?.street); // undefined（不报错）
```

可选链 `?.` 不是一个运算符，而是一个特殊的语法结构。它还**可以与函数和方括号一起使用**。

```js
let userAdmin = {
    admin() {
        alert("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // 啥都没有（没有这样的方法,不会报错）

let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;
alert(user1?.[key]); // John
alert(user2?.[key]);// undefined
// 我们还可以将 ?. 跟 delete 一起使用
delete user?.name; // 如果 user 存在，则删除 user.name
```

可选链 `?.` 语法有三种形式

- `obj?.prop` —— 如果 `obj` 存在则返回 `obj.prop`，否则返回 `undefined`。
- `obj?.[prop]` —— 如果 `obj` 存在则返回 `obj[prop]`，否则返回 `undefined`。
- `obj.method?.()` —— 如果 `obj.method` 存在则调用 `obj.method()`，否则返回 `undefined`

## 对象包装器

人们可能想对诸如字符串或数字之类的原始类型执行很多操作。最好使用方法来访问它们,为了使它们起作用，创建了提供额外功能的特殊“**对象包装器**”，使用后即被销毁。

对象包装器对于每种原始类型都是不同的，它们被称为 `String`、`Number`、`Boolean`、`Symbol` 和 `BigInt`
以下是 `str.toUpperCase()` 中实际发生的情况：

```js
let str = "Hello";
alert(str.toUpperCase()); // HELLO
```

字符串 `str` 是一个原始值。因此，在访问其属性时，会创建一个**包含字符串字面值的特殊对象**，并且具有有用的方法，例如 `toUpperCase()`。 该方法运行并返回一个新的字符串（由 `alert` 显示）。
特殊对象被销毁，只留下原始值 `str`。JavaScript 引擎高度优化了这个过程。它甚至可能跳过创建额外的对象。但是它仍然必须遵守规范，并且表现得好像它创建了一样。

特殊的原始类型 `null` 和 `undefined` 是例外。它们没有对应的“对象包装器”，也没有提供任何方法。从某种意义上说，它们是“最原始的”。

我能为字符串添加一个属性吗？

```js
let str = "Hello";

str.test = 5;

alert(str.test);
```

根据你是否开启了严格模式 `use strict`，会得到如下结果：

非严格模式 :undefined

严格模式:报错

为什么？让我们看看在 (*) 那一行到底发生了什么：

当访问 `str` 的属性时，一个“对象包装器”被创建了。 在严格模式下，向其写入内容会报错。 否则，将继续执行带有属性的操作，该对象将获得 `test` 属性，但是此后，“对象包装器”将消失，因此在最后一行，`str`
并没有该属性的踪迹。

## js 中数字的写法

```js
let billion = 1000000000;
// 也可以使用下划线 _ 作为分隔符
// JavaScript 引擎会直接忽略数字之间的 _
let billion = 1_000_000_000;
// 可以通过在数字后面附加字母 "e" 并指定零的个数来缩短数字
let billion = 1e9;
let mcs = 0.000001;
let mcs = 1e-6; 
```

十六进制，二进制和八进制数字

```js
let a = 0xff // 十六进制的 255
let a = 0b11111111; // 二进制形式的 255
let b = 0o377; // 八进制形式的 255
```

`toString(base)`

方法 `num.toString(base)` 返回在给定 `base` 进制数字系统中 `num` 的字符串表示形式。`base` 的范围可以从 `2` 到 `36`。默认情况下是 `10`
当我们需要将一个较长的数字标识符转换成较短的时候，例如做一个短的 `URL`。可以简单地使用基数为 `36` 的数字系统表示

`123456..toString(36)`

使用**两个点**来调用一个方法

请注意 `123456..toString(36)` 中的**两个点**不是打错了。如果我们想直接在一个数字上调用一个方法，比如上面例子中的 `toString`，那么我们需要在它后面放置两个点`..`。
如果我们放置一个点：`123456.toString(36)`，那么就会出现一个 `error`，因为 JavaScript 语法**隐含了第一个点之后的部分为小数部分**。如果我们再放一个点，那么 JavaScript 就知道**
小数部分为空**，现在使用该方法。 也可以写成 `(123456).toString(36)`。

### 不精确的计算

一个数字以其二进制的形式存储在内存中，一个 1 和 0 的序列。但是在十进制数字系统中看起来很简单的 `0.1，0.2` 这样的小数，实际上在二进制形式中是**无限循环小数**。
`0.1` 就是 `1` 除以 `10`，`1/10`，即十分之一。在十进制数字系统中，这样的数字表示起来很容易。 使用二进制数字系统无法 精确 存储 `0.1 或 0.2`，就像没有办法将三分之一存储为十进制小数一样. 不仅仅是
JavaScript ,许多其他编程语言也存在同样的问题。

```js
alert(0.1 + 0.2 == 0.3); // false
alert(0.1 + 0.2); // 0.30000000000000004
alert(9999999999999999); // 显示 10000000000000000
```

我们能解决这个问题吗？当然，最可靠的方法是借助方法 `toFixed(n)` 对结果进行舍入,请注意，`toFixed` 总是返回一个字符串

## [方法借用-method borrowing](https://zh.javascript.info/call-apply-decorators#method-borrowing)

我们从常规数组 `[].join` 中获取（借用）`join` 方法，并使用 `[].join.call` 在 `arguments` 的上下文中运行它。

```js
function hash() {
    alert([].join.call(arguments)); // 1,2
}

hash(1, 2);
```

它为什么有效？ 那是因为原生方法 `arr.join(glue)` 的内部算法非常简单。类似于调用 `[1,2,3].join()`,这里的 `this` 指向的是数组 `[1,2,3]`,所以方法借用中只需要指定 `this`
上下文即可, `join` 方法工作机制如下

- 让 `glue` 成为第一个参数，如果没有参数，则使用逗号 ","。
- 让 `result` 为空字符串。
- 将 `this[0]` 附加到 `result`。
- 附加 `glue` 和 `this[1]`。
- 附加 `glue` 和 `this[2]`。
- ……以此类推，直到 `this.length` 项目被粘在一起。
- 返回 `result`

因此，从技术上讲，**它需要** `this` 并将 `this[0]，this[1]` ……等 `join` 在一起。它的编写方式是故意允许任何类数组的 `this`
的（不是巧合，很多方法都遵循这种做法）。这就是为什么它也可以和 `this=arguments`
一起使用

## Function.prototype.apply

用 `apply` 将数组各项添加到另一个数组 我们可以使用 `push` 将元素追加到数组中。由于 `push` 接受**可变数量**的参数，所以也可以一次追加多个元素。 但是，如果 `push`
的参数是数组，它会将该数组作为单个元素添加，而不是将这个数组内的每个元素添加进去，因此我们最终会得到一个数组内的数组。如果不想这样呢？`concat` 符合我们的需求，但它并不是将元素添加到现有数组，而是创建并返回一个新数组。
然而我们需要将元素追加到现有数组 ，这里`apply` 正派上用场！

```js
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

`apply` 接收的是一个数组或者类数组对象，但实际调用函数的时候是将数组或者类数组对象拆成逗号分割的参数传入方法中调用的， `Function.prototype.call`
则接收的是一组参数，调用的时候也是将其传入方法调用的，js内部对 `apply` 方法做了优化，同样的情况下，`apply` 性能比 `call` 好

`apply` 用例

**间谍装饰器**: 储存调用的参数

```js
function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}
```

**延时装饰器**

```js
function delay(fn, delayTime) {
    return function (...args) {
        // 这里使用箭头函数来指向外层函数的this
        setTimeout(() => fn.apply(this, args), delayTime)
    }
}
```

**防抖装饰器**

`debounce(f, ms)` 装饰器的结果是一个包装器，该包装器将暂停对 `f` 的调用，直到经过 `ms` 毫秒的非活动状态（没有函数调用，“冷却期”），然后使用最新的参数调用 `f` 一次。举个例子，我们有一个函数
`f`，并将其替换为 `f = debounce(f, 1000)`。 然后，如果包装函数分别在 `0ms、200ms 和 500ms` 时被调用了，之后没有其他调用，那么实际的 `f` 只会在 `1500ms`
时被调用一次。也就是说：从最后一次调用开始经过 `1000ms` 的冷却期之后。

```js
function debounce(func, ms) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
}
```

**节流装饰器**

创建一个“节流”装饰器 `throttle(f, ms)` —— 返回一个包装器。 当被多次调用时，它会在每 `ms` 毫秒最多将调用传递给 `f` 一次。`debounce`
会在 冷却（`cooldown`）期后运行函数一次。适用于处理最终结果。 `throttle` 运行函数的频率不会大于所给定的时间 `ms` 毫秒。适用于不应该经常进行的定期更新。 节流函数第一次会立即调用，后续调用会间隔给定时间再次调用

```js
function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        isThrottled = true;

        func.apply(this, arguments); // (1)

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
```

调用 `throttle(func, ms)` 返回 `wrapper`。

- 1.在第一次调用期间，`wrapper` 只运行 `func` 并设置冷却状态（`isThrottled = true`）。
- 2.在这种状态下，所有调用都记忆在 `savedArgs/savedThis` 中。请注意，上下文和参数（`arguments`）同等重要，应该被记下来。我们同时需要他们以重现调用。
- 3.然后经过 `ms` 毫秒后，触发 `setTimeout`。冷却状态被移除（`isThrottled = false`），如果我们忽略了调用，则将使用最后记忆的参数和上下文执行 `wrapper`。
- 4.第 3 步运行的不是 `func`，而是 `wrapper`，因为我们不仅需要执行 `func`，还需要再次进入冷却状态并设置 `timeout` 以重置它

## 递归和堆栈

最大的嵌套调用次数（包括首次）被称为 **递归深度**

最大递归深度受限于 `JavaScript` 引擎。对我们来说，引擎在最大迭代深度为 `10000` 及以下时是**可靠的**，有些引擎可能允许更大的最大深度，但是对于大多数引擎来说，100000
可能就超出限制了。有一些自动优化能够帮助减轻这种情况（`尾部调用优化`），但目前它们还没有被完全支持，只能用于简单场景。

任何递归都可以用循环来重写。通常循环变体更有效。但有时重写很难，尤其是函数根据条件使用不同的子调用，然后合并它们的结果，或者分支比较复杂时。而且有些优化可能没有必要，完全不值得。递归可以使代码更短，更易于理解和维护。

斐波那契数 斐波那契数 序列有这样的公式： `Fn = Fn-1 + Fn-2`。换句话说，下一个数字是前两个数字的和。 编写一个函数 `fib(n)` 返回第 `n` 个斐波那契数,前两个数字都是 1

```js
// 递归实现
function fib1(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// fib1(77); // 超级慢，不要尝试调用
// 循环实现
function fib2(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// fib2(77); // 很快
```

[尾调用（`tail call`）”优化](https://www.ruanyifeng.com/blog/2015/04/tail-call.html)

尾调用的概念非常简单，一句话就能说清楚，就是指**某个函数的最后一步是调用另一个函数**。 递归非常耗费内存，因为需要同时保存成千上百个调用记录，很容易发生"栈溢出"错误（`stack overflow`
）。但对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误。

## Rest 参数 `...`

`Rest` 参数可以通过使用三个点 `...` 并在后面跟着包含剩余参数的数组名称，来将它们包含在函数定义中。这些点的字面意思是“**将剩余参数收集到一个数组中**”。`Rest` 参数必须放到参数列表的末尾

`Spread` 语法看起来和 `rest` 参数很像，也使用 `...`，但是二者的用途完全相反

若 `...` 出现在函数参数列表的最后，那么它就是 `rest 参数`，它会把参数列表中剩余的参数收集到一个数组中。

若 `...` 出现在函数调用或类似的表达式中，那它就是 `spread 语法`，它会把一个数组展开为列表。

## [变量作用域，闭包](https://zh.javascript.info/closure#step-1-bian-liang)

在 `JavaScript` 中，每个运行的函数，代码块 `{...}` 以及**整个脚本**，都有一个被称为 **词法环境**（Lexical Environment） 的内部（隐藏）的关联对象。词法环境对象由两部分组成：

- 环境记录（Environment Record） —— 一个存储所有局部变量作为其属性（包括一些其他信息，例如 this 的值）的对象。
- 对 外部词法环境 的引用，与外部代码相关联。

在一个函数运行时，在调用刚开始时，会自动创建一个新的词法环境以存储这个调用的局部变量和参数。在这个函数调用期间，我们有两个词法环境：内部一个（用于函数调用）和外部一个（全局） 当代码要访问一个变量时 ——
首先会搜索内部词法环境，然后搜索外部环境，然后搜索更外部的环境，以此类推，直到全局词法环境。

所有的函数在“诞生”时都会记住创建它们的词法环境。从技术上讲，这里没有什么魔法：所有函数都有名为 `[[Environment]]`
的隐藏属性，该属性保存了对创建该函数的词法环境的引用。

闭包：是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在其外部函数被返回（寿命终结）了之后。在某些编程语言中，这是不可能的，或者应该以特殊的方式编写函数来实现。在 JavaScript
中，所有函数都是天生闭包的（只有一个例外，将在 "`new Function`" 语法 中讲到）。 也就是说：JavaScript 中的函数会自动通过隐藏的 `[[Environment]]`
属性记住创建它们的位置，所以它们都可以访问外部变量。

```js
function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter = new Counter();
console.log(counter.count) // undefined,new调用并不会生成 count 属性
alert(counter.up()); // 1 ，counter.up函数生成时候在词法环境中保存了count
alert(counter.up()); // 2
alert(counter.down()); // 1
```

**按字段排序**

```js
let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"}
];

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('name'));
users.sort(byField('age'));
```

## 旧时的 "`var`"

用 `var` 声明的变量，不是函数作用域就是全局作用域。它们在代码块外也是可见的（译注：也就是说，`var` 声明的变量只有函数作用域和全局作用域，没有块级作用域）。

```js
for (var i = 0; i < 10; i++) {
    var one = 1;
    // ...
}

alert(i);   // 10，"i" 在循环结束后仍可见，它是一个全局变量
alert(one); // 1，"one" 在循环结束后仍可见，它是一个全局变量
```

`var` 声明会被提升，但是赋值不会。 声明在函数刚开始执行的时候（“提升”）就被处理了，但是赋值操作始终是在它出现的地方才起作用

在浏览器中，使用 `var`（而不是 `let/const`！）声明的全局函数和变量会**成为全局对象的属性**

`IIFE`

在之前，JavaScript 中只有 `var`
这一种声明变量的方式，并且这种方式声明的变量没有块级作用域，程序员们就发明了一种模仿块级作用域的方法。这种方法被称为“立即调用函数表达式”（`immediately-invoked function expressions，IIFE`）。
请再注意一下：如今我们没有理由来编写这样的代码。

```js
// 创建 IIFE 的方法
(function () {
    alert("Parentheses around the function");
})();

(function () {
    alert("Parentheses around the whole thing");
}());

!function () {
    alert("Bitwise NOT operator starts the expression");
}();

+function () {
    alert("Unary plus starts the expression");
}();
```

## 函数对象

一个容易理解的方式是把函数想象成可被调用的“行为对象（`action object`）”。我们不仅可以调用它们，还能把它们当作对象来处理：增/删属性，按引用传递等。

- 属性 “name” 函数对象包含一些便于使用的属性。

```js
function sayHi() {
    alert("Hi");
}

alert(sayHi.name); // sayHi
```

- 属性 “`length`” 还有另一个内建属性 “`length`”，它返回函数入参的个数, 但是注意 `rest` 参数不参与计数

```js
function f1(a) {
}

function many(a, b, ...more) {
}

alert(f1.length); // 2
alert(many.length); // 2
```

这种特别的情况就是所谓的 **多态性** —— 根据参数的类型，或者根据在我们的具体情景下的 `length` 来做不同的处理。这种思想在 JavaScript 的库里有应用。

**命名函数表达式**
命名函数表达式（NFE，`Named Function Expression`），指**带有名字的函数表达式**的术语。它仍然是一个函数表达式。在 `function` 后面加一个名字 "`func`"
没有使它成为一个函数声明，因为它仍然是作为赋值表达式中的一部分被创建的。

```js
// 普通的函数表达式
let sayHi = function (who) {
    alert(`Hello, ${who}`);
};
// 添加一个名字
let sayHi = function func(who) {
    alert(`Hello, ${who}`);
};
```

添加它的原因：

- 它允许函数在内部引用自己。
- 它在函数外是不可见的。

```js
let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // 使用 func 再次调用函数自身
    }
};

func(); // Error, func is not defined（在函数外不可见）
```

## `new Function` 语法

`let func = new Function ([arg1, arg2, ...argN], functionBody)`

```js
// 这三种变体语法形式也是可以的
new Function('a', 'b', 'return a + b'); // 基础语法
new Function('a,b', 'return a + b'); // 逗号分隔
new Function('a , b', 'return a + b'); // 逗号和空格分隔
```

该函数是通过使用参数 `arg1...argN` 和给定的 `functionBody` 创建的,与我们已知的其他方法相比，这种方法最大的不同在于，它实际上是通过运行时通过**参数传递过来的字符串**创建的,以前的所有声明方法都需要 ——
程序员，在脚本中编写函数的代码。 但是 `new Function` 允许我们将任意字符串变为函数。例如，我们**可以从服务器接收一个新的函数并执行它**

```js
let str = `动态地接收来自服务器的代码`
let func = new Function(str);
func();
```

使用 `new Function` 创建函数的应用场景非常特殊，比如在复杂的 Web 应用程序中，我们需要从服务器获取代码或者动态地从**模板编译函数**时才会使用

通常，闭包是指使用一个特殊的属性 `[[Environment]]` 来记录函数自身的创建时的环境的函数。它具体指向了函数创建时的词法环境。 但是如果我们使用 new Function
创建一个函数，那么该函数的 `[[Environment]]` 并不指向当前的词法环境，而是指向**全局环境**。 因此，此类函数无法访问外部（`outer`）变量，只能访问全局变量。

```js
function getFunc() {
    let value = "test";

    let func = new Function('alert(value)');
    // let func = function() { alert(value); }; //如果这样写就可以访问

    return func;
}

getFunc()(); // error: value is not defined
```

## 调度：setTimeout 和 setInterval

`let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)`

`let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)`

`func|code` 想要执行的函数或代码字符串。 一般传入的都是函数。由于某些历史原因，支持传入代码字符串，但是不建议这样做。

浏览器中的 `setTimeout` 方法有些特殊：它为函数调用设定了 `this=window`（注意 `this` 丢失的问题）

嵌套的 `setTimeout`

周期性调度有两种方式。一种是使用 `setInterval`，另外一种就是嵌套的 `setTimeout` 。 嵌套的 `setTimeout` 能够精确地设置两次执行之间的延时，而 `setInterval` 却不能。

```js
let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
}, 2000);
```

嵌套的 `setTimeout` 要比 `setInterval` 灵活得多。采用这种方式可以根据当前执行结果来调度下一次调用，因此下一次调用可以与当前这一次不同

```js
let delay = 5000;
let timerId = setTimeout(function request() {
    // ...发送请求...
    if (`request failed due to server overload`) {
        // 下一次执行的间隔是当前的 2 倍
        delay *= 2;
    }
    timerId = setTimeout(request, delay);
}, delay);
```

使用 `setInterval` 时，`func` 函数的实际调用间隔要比代码中设定的时间间隔要短！**这也是正常的**，因为 `func` 的执行所花费的时间“消耗”了一部分间隔时间。假如时间间隔是 100ms ,也可能出现这种情况，就是
`func` 的执行所花费的时间比我们预期的时间更长，并且超出了 100 毫秒。 在这种情况下，JavaScript 引擎会等待 `func` 执行完成，然后检查调度程序，如果时间到了，则 **立即**
再次执行它。极端情况下，如果函数每次执行时间都超过 `delay` 设置的时间，那么每次调用之间将完全没有停顿。

嵌套的 `setTimeout` 就能确保延时的固定,不会出现上述情况

零延时的 `setTimeout`

这儿有一种特殊的用法：`setTimeout(func, 0)`，或者仅仅是 `setTimeout(func)`。

这样调度可以让 `func` 尽快执行。但是只有在当前正在执行的脚本执行完成后，调度程序才会调用它。 也就是说，该函数被调度在当前脚本执行完成“之后”立即执行。

## 偏函数（Partial functions）

偏函数 : 我们通过绑定先有函数的一些参数来创建一个新函数。为什么我们通常会创建一个偏函数？

好处是我们可以创建一个具有可读性高的名字（`double，triple`）的独立函数。我们可以使用它，并且不必每次都提供一个参数，因为参数是被绑定了的。

`Function.prototype.bind` 不仅可以绑定 this, 还可以绑定 函数参数,`bind` 的完整语法如下:

`let bound = func.bind(context, [arg1], [arg2], ...)`

虽然很少这么做，但有时它可以派上用场。

```js
function mul(a, b) {
    return a * b;
}

let double = mul.bind(null, 2);
alert(double(3)); // = mul(2, 3) = 6
```

对 `mul.bind(null, 2)` 的调用创建了一个新函数 `double`，它将调用传递到 `mul`，将 `null` 绑定为上下文，并将 `2` 绑定为第一个参数。并且，参数（`arguments`）均被“原样”传递。

又一个偏函数的实现（**在没有上下文情况下的 partial**）

```js
function partial(func, ...argsBound) {
    return function (...args) { // (*)
        return func.call(this, ...argsBound, ...args);
    }
}

// 用法：
let user = {
    firstName: "John",
    say(time, phrase) {
        alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};

// 为user添加一个带有绑定时间的 sayNow 偏函数方法
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello");
// 类似于这样的一些内容：
// [10:00] John: Hello!
```

一个函数不能被重绑定（`re-bound`）

```js
function f() {
    alert(this.name);
}

f = f.bind({name: "John"}).bind({name: "Ann"});

f(); // John
```

**箭头函数 VS `bind`**

箭头函数 `=>` 和使用 `.bind(this)` 调用的常规函数之间有细微的差别：

- `.bind(this)` 创建了一个该函数的“绑定版本”。
- 箭头函数 `=>` 没有创建任何绑定。箭头函数只是没有 `this`。`this` 的查找与常规变量的搜索方式完全相同：在外部词法环境中查找。

## 属性标志和属性描述符

对象属性（`properties`），除 `value` 外，还有三个特殊的特性（`attributes`），也就是所谓的“标志”：

- `writable` — 如果为 `true`，则值可以被修改，否则它是只可读的。
- `enumerable` — 如果为 `true`，则会被在循环中列出，否则不会被列出。
- `configurable` — 如果为 `true`，则此属性可以被删除，这些特性也可以被修改，否则不可以。

当我们用“常用的方式”创建一个属性时，它们都为 `true`。但我们也可以随时更改它们。`Object.getOwnPropertyDescriptor` 方法允许查询有关属性的 完整 信息

`let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName)`

为了修改标志，我们可以使用

`Object.defineProperty(obj, propertyName, descriptor)`

如下例子中，只在严格模式下会出现 `Errors` 在非严格模式下，在对不可写的属性等进行写入操作时，不会出现错误。但是操作仍然不会成功。在非严格模式下，违反标志的行为（`flag-violating action`）只会被默默地忽略掉

```js
let user = {
    name: "John"
};

Object.defineProperty(user, "name", {
    writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'
```

不可配置标志（`configurable:false`）有时会预设在内建对象和属性中,比如， 开发人员无法修改 `Math.PI`的值或覆盖它; 请注意：`configurable: false` 防止**更改和删除**
属性标志，但是允许更改对象的值(`value`属性)。

```js
let user = {
    name: "John"
};

Object.defineProperty(user, "name", {
    configurable: false
});

user.name = "Pete"; // 正常工作
delete user.name; // Error
```


要一次获取所有属性描述符，我们可以使用` Object.getOwnPropertyDescriptors(obj)` 方法。
有一个方法 `Object.defineProperties(obj, descriptors)`，允许一次定义多个属性。
