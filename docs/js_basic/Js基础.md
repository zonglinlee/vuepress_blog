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
