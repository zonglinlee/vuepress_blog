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
Both `var` and `let` allow for changing what is held inside the variable, and `const` does not, it can only represent 1 possible string, it
has a literal type representation
```ts
let x: "hello" = "hello";
```

You can use as const to convert the entire object to be type literals.
The as const suffix acts like `const` but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number
```ts
const req = {url: "https://example.com", method: "GET"} as const;

function handleRequest(url: string, method: "GET" | "POST"): void {
    // function body
};
handleRequest(req.url, req.method);
```

### Non-null Assertion Operator (Postfix!)
TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined
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
Above, we have a `numeric enum` where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.
```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```
In a string enum, each member has to be **constant-initialized with a string literal**, or with another string enum member
## Functions
### Function Type Expressions
The simplest way to describe a function is with a `function type expression`. These types are syntactically similar to **arrow functions**.
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
In JavaScript, functions can have properties in addition to being callable. However, the function type expression syntax **doesn’t allow for declaring properties**. If we want to describe something callable with properties, we can write a call signature in an object type
```ts
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
```
Note that the syntax is slightly different compared to a function type expression - use `:` between the parameter list and the return type rather than `=>`.
### Construct Signatures
avaScript functions can also be invoked with the new operator. TypeScript refers to these as constructors because they usually create a new object. You can write a construct signature by adding the new keyword in front of a call signature
```ts
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```
### Generic Functions
In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature
```ts
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
```
constraint of types
## Type Manipulation
### Generics