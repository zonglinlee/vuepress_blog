---
title: Typescript入门
---

## Ts须知

[typescript doc](https://www.typescriptlang.org/docs/)

### [类型关键字](https://juejin.cn/post/6844904131975446536)

- `extends` 用于扩展一个 `interface` 的类型，从而得到新的类型
- `keyof` 是TS中的索引类型查询操作符。`keyof T` 会得到由 `T` 上已知的公共属性名组成的联合类型
- 在 TS 中用于类型表达时，`typeof` 可以用于从一个变量上获取它的类型。
- `in` 操作符用于遍历目标类型的公开属性名。类似 `for .. in` 的机制。 从其用途看，我们很容易想到 `in` 可用于联合类型或者枚举类型

### [.d.ts VS declare](https://blog.csdn.net/qq_34551390/article/details/118800743)

- `.d.ts` 文件是ts用来声明`变量，模块，type，interface`等等的,在 `.d.ts` 声明变量或者模块等东西之后，在其他地方可以不用 import 导入这些东西就可以直接用, 但是也不是说创建了 `.d.ts`
  文件，里面声明的东西就能生效了，毕竟归根到底也是 .ts 文件，需要预编译，所以需要在tsconfig.json文件里面的include数组里面添加这个文件
- `.d.ts` 文件中的顶级声明必须以 `"declare" 或 "export"` 修饰符开头。 通过 `declare` 声明的类型或者变量或者模块，在include包含的文件范围内，都可以直接引用而不用去 import 或者
  import type 相应的变量或者类型

## TypeScript for Functional Programmers

### important TypeScript types

|  **Type**   | **Explanation**  |
|  ----  | ----  |
| `T[]`  | mutable arrays, also written `Array<T>` |
| `[T, T]`  | tuples, which are fixed-length but mutable |

```ts
// Function syntax
let fst1: (a: any, b: any) => any = (a, b) => a;
// or more precisely:
let fst2: <T, U>(a: T, b: U) => T = (a, b) => a;
// Object literal type syntax
let o: { n: number; xs: object[] } = {n: 1, xs: []};
// [T, T] is a subtype of T[]
```

### Unit types

Unit types are **subtypes** of primitive types that contain exactly one primitive value. For example, the string "foo"
has the type "foo". When needed, the compiler widens — converts to a supertype — the unit type to the primitive type,
such as "foo" to string

```ts
declare function pad(s: string, n: number, direction: "left" | "right"): string;

pad("hi", 10, "left"); // ok
// 但是下面的写法有问题,这里ts编译器将 s 变量扩展到了 string type, string type  不能赋值给 联合类型 "left" | "right"
// "right": "right"
// s: string because "right" widens to string on assignment to a mutable variable.
// string is not assignable to "left" | "right"
let s = "right";
pad("hi", 10, s);  // error: 'string' is not assignable to '"left" | "right"'
// 可以这么改写
let s1: "left" | "right" = "right";
pad("hi", 10, s1); // ok
```

### Type Parameters

Like most C-descended languages, TypeScript **requires declaration of type parameters**.There is no case requirement,
but type parameters are conventionally single uppercase letters. Type parameters can also be constrained to a type,
which behaves a bit like type class constraints

```ts
function liftArray<T>(t: T): Array<T> {
    return [t];
}
```

### readonly and const

In JavaScript, mutability is the default, although it allows variable declarations with `const` to declare that the
reference is immutable. TypeScript additionally has a `readonly` modifier for properties. It also ships with a mapped
type `Readonly<T>` that makes all properties readonly. And it has a specific `ReadonlyArray<T>` type.

```ts
interface X {
    x: number;
}

let rx: Readonly<X> = {x: 1};
rx.x = 12; // error
```

### [const assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)

- no literal types in that expression should be **widened** (e.g. no going from "hello" to string)
- object literals get `readonly` properties
- array literals become `readonly tuples`
- One thing to note is that const assertions can only be applied immediately on simple literal expressions.

```ts
// Type '"hello"'
let x = "hello" as const;
// Type 'readonly [10, 20]'
let y = [10, 20] as const;
// Type '{ readonly text: "hello" }'
let z = {text: "hello"} as const;
// 错误写法
let b = (60 * 60 * 1000) as const;
```

## everyDay types

### Type Annotations on Variables

When you declare a variable using const, var, or let, you can **optionally** add a type annotation to explicitly specify
the type of the variable. In most cases, though, **this isn’t needed**. Wherever possible, TypeScript tries to
automatically infer the types in your code.

```ts
let myName: string = "Alice";
// No type annotation needed -- 'myName' inferred as type 'string'
let yourName = "Bob";
```

### Parameter type annotations && Return Type Annotations

Parameter type annotations go after the parameter name. Return type annotations appear after the parameter list. Much
like variable type annotations, you **usually don’t need** a return type annotation because TypeScript will infer the
function’s return type based on its return statements.

### Object Types

You can use `, `or `;` to separate the object properties,The type part of each property is also optional. If you don’t
specify a type, it will be assumed to be `any`. In JavaScript, if you access a property that doesn’t exist, you’ll get
the value `undefined` rather than a runtime error. Because of this, when you read from an optional property, you’ll have
to check for undefined before using it.

```ts
function printName(obj: { first: string; last?: string }) {
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}
```

### Type Aliases

it’s common to want to use the same type more than once and refer to it by a single name. A type alias is exactly that -
a name for any type,The syntax for a type alias is:

```ts
type Point = {
    x: number;
    y: number;
};
// You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type
type ID = number | string;
```

### Interfaces

An interface declaration is another way to name an object type. Type aliases and interfaces are very similar, and in
many cases you can choose between them freely. Almost all features of an interface are available in type, the key
distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable

### Type Assertions

Sometimes you will have information about the type of a value that TypeScript can’t know about.TypeScript only allows
type assertions which convert to a more specific or less specific version of a type. Sometimes this rule can be too
conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions,
first to `any` (or `unknown`, which we’ll introduce later), then to the desired type.

```ts
const a = (expr as any) as T;
```

### Literal Inference

In addition to the general types string and number, we can refer to specific strings and numbers in type positions
Both `var` and `let` allow for changing what is held inside the variable, and `const` does not, it can only represent 1
possible string, it has a literal type representation

```ts
let x: "hello" = "hello";
```

You can use as const to convert the entire object to be type literals. The as const suffix acts like `const` but for the
type system, ensuring that all properties are assigned the literal type instead of a more general version like string or
number

```ts
const req = {url: "https://example.com", method: "GET"} as const;

function handleRequest(url: string, method: "GET" | "POST"): void {
    // function body
};
handleRequest(req.url, req.method);
```

### Non-null Assertion Operator (Postfix!)

TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking.
Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined

```ts
function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}
```

### Enums

An enum can be defined using the `enum` keyword

```ts
// Numeric enums
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
```

Above, we have a `numeric enum` where Up is initialized with 1. All of the following members are auto-incremented from
that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.

```ts
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

In a string enum, each member has to be **constant-initialized with a string literal**, or with another string enum
member

## Functions

### Function Type Expressions

The simplest way to describe a function is with a `function type expression`. These types are syntactically similar
to **arrow functions**.

```ts
// The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”.
// Note that the parameter name is required.
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}
```

Of course, we can use a type alias to name a function type

```ts
type GreetFunction = (a: string) => void;

function greeter(fn: GreetFunction) {
    // ...
}
```

### Call Signatures

In JavaScript, functions can have properties in addition to being callable. However, the function type expression
syntax **doesn’t allow for declaring properties**. If we want to describe something callable with properties, we can
write a call signature in an object type

```ts
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}
```

Note that the syntax is slightly different compared to a function type expression - use `:` between the parameter list
and the return type rather than `=>`.

### Construct Signatures

avaScript functions can also be invoked with the new operator. TypeScript refers to these as constructors because they
usually create a new object. You can write a construct signature by adding the new keyword in front of a call signature

```ts
type SomeConstructor = {
    new(s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}
```

### Generic Functions

In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a
type parameter in the function signature

```ts
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}
```

### Function Overloads

In TypeScript, we can specify a function that can be called in different ways by writing overload signatures. To do
this, write some number of function signatures (usually two or more), followed by the body of the function

```ts
// 这个函数只可以接收一个参数或者两个参数，第三个函数签名是用来实现前两个函数签名的
// 前两个函数叫做 Overload Signatures ，第三个叫做 Implementation Signature
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
```

In this example, we wrote two overloads: one accepting one argument, and another accepting three arguments. **These
first two signatures are called the overload signatures.**

Then, **we wrote a function implementation with a compatible signature.** Functions have an implementation signature, **
but this signature can’t be called directly. Even though we wrote a function with two optional parameters after the
required one, it can’t be called with two parameters!**

### `unknown` type && `never` type

The` unknown type` represents any value. This is similar to the any type, but is safer because it’s not legal to do
anything with an unknown value. This is useful when describing function types because you can describe functions that
accept any value without having any values in your function body.

The never type represents values which are never observed. In a return type, **this means that the function throws an
exception or terminates execution of the program**

### `Function` type

The global type Function describes properties like `bind, call, apply`, and others present on all function values in
JavaScript. It also has the special property that values of type Function can always be called; these calls return any

### Parameter Destructuring

```ts
function sum({a, b, c}: { a: number; b: number; c: number }) {
    console.log(a + b + c);
}

// 或者定义一个type
type ABC = { a: number; b: number; c: number };
```

### Return type void

- Contextual typing with a return type of void does not force functions to not return something.when implemented, can
  return any other value, but it will be ignored.
- when a literal function definition has a void return type, that function must not return anything

## [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.htm)

TypeScript provides several utility types to facilitate common type transformations. These utilities are available
globally.

### `ReturnType<Type>`

Constructs a type consisting of the return type of `function Type`.

```ts
// 注意必须传入一个 function type 才可以
declare function f1(): { a: number; b: string };

type T1 = ReturnType<(s: string) => void>;
type T4 = ReturnType<typeof f1>;

```

### `Parameters<Type>`

Constructs` a tuple type` from the types `used in the parameters of a function type Type`.

```ts

// 传入的是一个 function type ,得到一个元组类型的 type 
type T1 = Parameters<(s: string) => void>;
type T1 = [s: string]

```

### `Record<Keys, Type>`

Constructs an` object type` whose property keys are Keys and whose property values are Type. This utility can be used to
map the properties of a type to another type.

## Object Types

### [Index Signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)

Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.In
those cases you can use an index signature to describe the types of possible values, for example:

```ts
// This index signature states that when a StringArray is indexed with a number, it will return a string
// An index signature property type must be either ‘string’ or ‘number’.
interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1]

// name 属性不能返回 string type 的值，因为index signature 规定了必须返回number，你可以在 index signature 中返回联合类型来解决这个问题
interface NumberDictionary {
    [index: string]: number;

    length: number; // ok
    name: string; // not ok : Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}
```

### Intersection Types

An intersection type is defined using the & operator.

```ts
// 不冲突 Combined has two properties, a and b, just as if they had been written as one object literal type.
type Combined = { a: number } & { b: string };
// 冲突  
// Intersection and union are recursive in case of conflicts, so Conflicting.a: number & string.
type Conflicting = { a: number } & { a: string };
// test变量只能赋值为字符串 'hello'， string 和 'hello' 的交叉类型为 'hello'
type Test = string & 'hello'
let test: Test = 'hey'; // 报错，只能为 hello
```

## Type Manipulation

### Generics

### Type Operator

- the `keyof operator` takes an `object type` and produces `a string or numeric literal union of its keys`

- `typeof operator` you can use in a type context to refer to the type of a variable or property
- Indexed Access Types: We can use an indexed access type to look up a specific property on another type.特例：
  using `number` type to get the type of an array’s elements. We can combine this with typeof to conveniently capture
  the element type of an array literal

```ts
// 这是一种类似数组下标访问的方式，index 本身也是一种 type ,所以也可以使用联合类型
type Person = { age: number; name: string; alive: boolean };
type I1 = Person["age" | "name"];
type I2 = Person[keyof Person];
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];
// 特例 : 通过 number type 获取数组元素的type  
const MyArray = [
    {name: "Alice", age: 15},
    {name: "Bob", age: 23},
    {name: "Eve", age: 38},
];

type Person = typeof MyArray[number];
```

- Conditional types take a form like `(SomeType extends OtherType ? TrueType : FalseType)`
- Mapped Types :

```ts
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean; // JavaScript中的 in 操作符
};
type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
```

Mapping Modifiers

```ts
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};
```

- Template Literal Types Template literal types build on `string literal types`, and have the ability to expand into
  many strings via unions.

```ts
type World = "world";
type Greeting = `hello ${World}`;
type Greeting = "hello world"
```

- Intrinsic String Manipulation Types To help with string manipulation, TypeScript includes a set of types which can be
  used in string manipulation. These types come built-in to the compiler for performance and can’t be found in the .d.ts
  files included with TypeScript。 `Uppercase<StringType>` `Lowercase<StringType>` `Capitalize<StringType>`

## [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)

In TypeScript, just as in ECMAScript 2015, **any file containing a top-level import or export is considered a module.**
Conversely, **a file without any top-level import or export declarations is treated as a script** whose contents are
available in the global scope (and therefore to modules as well).

If you have a file that doesn’t currently have any imports or exports, but you want to be treated as a module, add the
line:

```ts
export {};
```

You can import a file and not include any variables into your current module via import "./file".In this case, the
import does nothing. However, all of the code in maths.ts was evaluated, which could trigger side-effects which affect
other objects

```ts
import "./maths.js";

console.log("3.14");
```

`Types` can be exported and imported using the same syntax as JavaScript values TypeScript has extended the import
syntax with two concepts for declaring an import of a type: `import type`. TypeScript 4.5 also allows for individual
imports to be prefixed with type to indicate that the imported reference is a type.

```ts
// Inline type imports
import {createCatName, type Cat, type Dog} from "./animal.js";
// can only import types
import type {Cat, Dog} from "./animal.js";
```

```ts
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };

export interface Dog {
    breeds: string[];
    yearOfBirth: number;
}

// @filename: app.ts
import {Cat, Dog} from "./animal.js";

type Animals = Cat | Dog;
```

## [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

### Constructors

- Constructors can’t have type parameters - these belong on the outer class declaration
- Constructors can’t have return type annotations - the class instance type is always what’s returned

```ts
class Point {
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
        // ...
    }
}
```

#### Super Calls

Just as in JavaScript, if you have a `base class`, you’ll need to call `super()`; in your constructor body before using
any `this.` members

```ts
class Base {
    k = 4;
}

class Derived extends Base {
    constructor() {
        console.log(this.k);
        super(); // 'super' must be called before accessing 'this' in the constructor of a derived class.
    }
}
```

### Getters / Setters

- If get exists but no set, the property is automatically readonly
- If the type of the setter parameter is not specified, it is inferred from the return type of the getter
- Getters and setters must have the same Member Visibility

```ts
class C {
    _length = 0;
    get length() {
        return this._length;
    }

    set length(value) {
        this._length = value;
    }
}
```

### Member Visibility

- `public` : public is already the default visibility modifier, you don’t ever need to write it on a class member
- `protected` : protected members are only visible to subclasses of the class they’re declared in or the current class
- `private` is like `protected`, but doesn’t allow access to the member even from subclasses
- Classes may have `static` members. These members aren’t associated with a particular instance of the class.

```ts
class MySafe {
    private secretKey = 12345;
}

const s = new MySafe();
console.log(s.secretKey); // Not allowed during type checking
// OK : 这种写法是可以访问的 these private fields are soft private and don’t strictly enforce privacy
// Unlike TypeScripts’s private, JavaScript’s private fields (#) remain private after compilation 
console.log(s["secretKey"]);
```

### [**js Private class

features**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

Class fields are public by default, but private class members can be created by using a hash # prefix. The privacy
encapsulation of these class features is enforced by JavaScript itself.

### static Blocks in Classes

`Static blocks` allow you to write a sequence of statements with their own scope that **can access private fields**
within the containing class. This means that we can write `initialization code` with all the capabilities of writing
statements, no leakage of variables, and full access to our class’s internals.

### js arrow function

- 箭头函数没有 this。如果访问 this，则会从外部获取
- 不能对箭头函数进行 `new` 操作,不具有 this 自然也就意味着另一个限制：箭头函数不能用作构造器（constructor）。不能用 new 调用它们。
- 箭头函数也没有 arguments 变量。

箭头函数 => 和使用 .bind(this) 调用的常规函数之间有细微的差别：

#### 箭头函数 VS bind

- `.bind(this)` 创建了一个该函数的“绑定版本”。
- 箭头函数 => 没有创建任何绑定。箭头函数只是没有 this。this 的查找与常规变量的搜索方式完全相同：在外部词法环境中查找。

### `this` parameters

In a method or function definition, an initial parameter named `this` has special meaning **in TypeScript**. These
parameters are **erased** during compilation。

箭头函数的缺点：will use more memory, because each class instance will have its own copy of each function defined this way。
Instead of using an arrow function, so we can add a `this` parameter to method definitions to statically enforce that
the method is called correctly

```ts
// TypeScript input with 'this' parameter
function fn(this: SomeType, x: number) {
    /* ... */
}

// After compilation : JavaScript output 编译后第一个参数就去掉了
function fn(x) {
    /* ... */
}
```

传入this指向

```ts
class MyClass {
    name = "MyClass";

    getName(this: MyClass) {
        return this.name;
    }
}

const c = new MyClass();
c.getName();// OK : this 指向正确

// Error, would crash
const g = c.getName;
// The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.
console.log(g());

```

### [this Types](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types)

In classes, `a special type` called `this` refers dynamically to **the type of the current class**.

```ts
// sameAs 方法的 other 参数 type 为 this，它代表的是当前实例对象
class Box {
    content: string = "";

    sameAs(other: this) {
        return other.content === this.content;
    }
}
```

#### [this based type guards](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-based-type-guards)

You can use `this is Type` **in the return position for methods in classes and interfaces**. When mixed with a type
narrowing (e.g. if statements) the type of the target object would be narrowed to the specified Type.

### Parameter Properties

typeScript offers **special syntax** for **turning a constructor parameter into a class property** with the same name
and value. These are called `parameter properties` and are created by prefixing a constructor argument with one of the
visibility modifiers `public, private, protected, or readonly`. The resulting field gets those modifier(s):

```ts
class Params {
    constructor(
        public readonly x: number,
        protected y: number,
        private z: number
    ) {
        // No body necessary
    }
}

const a = new Params(1, 2, 3);
console.log(a.x);
```