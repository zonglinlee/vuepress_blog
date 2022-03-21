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
