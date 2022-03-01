--- 
title: css transition vs animation
---

## css transition

Transitions are when the browser animates from one state to another (A to B). They’re usually triggered by an action
such `hovering over an element`, or `adding or removing a class using JavaScript`.

Transitions take place in the browser when an element changes from one state to another. The browser draws the frames
between each state automatically to create movement.

### transition

Notice the transition property to the first button reference in the CSS state. This tells the browser to apply a
transition to any change of state such as on hover as well as when changing back from the hover state.

If we applied the transition property to the hover state only, it would only transition to the hover state but not back.

```css
button {
    background: white;
    transition: background 0.5s linear;
}

button:hover {
    background: green;
    /*transition: background 0.5s linear;*/
}
```

## css Animations

Animations are more involved, and let you create sequences of animations with as many keyframes as you need along the
way. They trigger automatically, and can loop.

### animation-delay

- If the animation loops, **the delay does not apply each time it loops.** The delay only applies to when the animation is
  applied to the element.

- You can give this property a negative value such as -1s. This would cause the animation to start as if a second has
  **already elapsed**.

## Reference

[cssanimation.rocks](https://cssanimation.rocks/css-animation-101/#welcome)
