---
title: react
---

## react api

### useCallback

`React.useCallback(fn, dependencies)` : 缓存传入的 **fn** 函数，并不会调用 **fn**

### forwardRef

`React.forwardRef((props,ref)=>{return ReactComponent})` : lets your component expose a DOM node to parent component
with a `ref`.
`forwardRef` accepts a render function as an argument. React calls this function with props and `ref`
`forwardRef` returns a React component,a component returned by forwardRef is also able to receive a ref prop,使用这个返回的
component 时候，传入 ref prop 即可。

- ref object

```tsx
const myRef = useRef(null);
<div ref={myRef}>
```

- ref callback

````tsx
<div ref={(node) => console.log(node)}/>
````

#### [useRef() Hook on a custom component](https://stackoverflow.com/questions/61192450/useref-hook-on-a-custom-component)

On custom components, ref needs to be **forwarded**.
This is because `ref` is (usually) a reference to a DOM element. A React Component can renders multiple DOM element, so
you need to be explicit about where the ref should be assigned to.

```tsx
const salesRef = useRef(null)
return (<Sales ref={salesRef}/>)

// inside Sales.js
// assigns the ref to an actual DOM element, the div
const Sales = (props, ref) => (
    <div ref={ref}></div>
)

export default React.forwardRef(Sales);

```

When the `<div>` DOM node is added to the screen, React will call your `ref` callback with the DOM node as the argument.
When that `<div>` DOM node is removed, React will call your ref callback with `null`.

### [useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)

is a version of `useEffect` that fires before the browser repaints the screen.

React guarantees that the code inside `useLayoutEffect` and any state updates scheduled inside it will be processed
before
the browser repaints the screen. This lets you render the tooltip, measure it, and re-render the tooltip again without
the user noticing the first extra render. In other words, useLayoutEffect **blocks** the browser from painting

### [React elements vs React nodes](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement)

- A ReactElement is an object with a type and props
- A ReactNode is a ReactElement, a ReactFragment, a string, a number or an array of ReactNodes, or null, or undefined,
  or a boolean

`React.isValidElement` checks whether the argument is a `React element`, not whether it’s a `React node`.

### [useMemo vs useCallback](https://react.dev/reference/react/useCallback#how-is-usecallback-related-to-usememo)

- `useMemo` caches the result of calling your function.

- `useCallback` caches the function itself. Unlike `useMemo`, it does not call the function you provide.

### [react lifecycle vs hooks](https://retool.com/blog/the-react-lifecycle-methods-and-hooks-explained/)

React has four built-in methods that gets called, in this order, when mounting a component:

- `constructor()`
- `getDerivedStateFromProps()`
- `render()`
- `componentDidMount()`

The render() method is required and will always be called, the others are optional and will be called if you define
them.

React has five built-in methods that gets called, in this order, when a component is updated:

- `getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`

The `render()` method is required and will always be called, the others are optional and will be called if you define
them

- `componentDidMount`: React will call it when your component is added (mounted) to the screen
- `componentDidUpdate`: component re-renders due to changed props or state.
- `componentWillUnmount`: component has been removed (unmounted) from the screen.

![react 生命周期](../images/front-end/react_lifecycle.jpg)

in development when **Strict Mode** is on, React will call componentDidMount, immediately call componentWillUnmount, and
then call componentDidMount again.

#### hooks lifecycle

- `useEffect(setup, dependencies?)`

The `useEffect` hook works similarly to the three lifecycle methods: `componentDidMount`, `componentDidUpdate`,
and `componentWillUnmount`.

when the dependencies array is empty, the setup function only get called once; it works similarly to `componentDidMount`
;

if the dependencies isn't empty,
everytime when the dependencies changed, the setup function get called, it works similarly to `componentDidUpdate`;

useEffect will return a **fn** which will automatically get called when the component unmount, it works similarly
to `componentWillUnmount`

#### [check components mounted status](https://jasonwatmore.com/post/2021/08/27/react-how-to-check-if-a-component-is-mounted-or-unmounted)

```tsx
import React, {useEffect, useRef} from 'react';

export {ExampleComponent};

function ExampleComponent() {
    const mounted = useRef(false);

    useEffect(() => {
        // The useEffect() hook is called when the component is mounted and sets the mounted.current value to true
        mounted.current = true;
        // clean up
        return () => {
            mounted.current = false;
        };
    }, []);

    return (<MyComponent/>);
}
```

## react util

- useId: 返回全局的 id,兼容了 `React.useId` api

