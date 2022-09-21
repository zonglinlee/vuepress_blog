---
title: ts practice
---
- [what do "extends keyof" and "in keyof" mean?](https://stackoverflow.com/questions/57337598/in-typescript-what-do-extends-keyof-and-in-keyof-mean)
```ts
// https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
function invokeHandler<N extends keyof HTMLElementEventMap>(){}
```
