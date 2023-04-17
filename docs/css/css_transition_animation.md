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

- If the animation loops, **the delay does not apply each time it loops.** The delay only applies to when the animation
  is applied to the element.

- You can give this property a negative value such as -1s. This would cause the animation to start as if a second has
  **already elapsed**.

### animation-fill-mode

By default, an animation will play and then the element **returns to its normal state**.Using animation-fill-mode we can
have the animation “stick” at either the end or beginning state.

Using the value `forwards` tells the animation to finish and stay on the last keyframe. The value `backwards` returns to
the first keyframe when the animation finishes.

### animation-play-state

If you ever need to pause or resume an animation, this property lets you do so. It takes the values of `running` or
`paused`, with the default being `running`. One idea might be to set this value on an animation **using JavaScript**.

### animation-timing-function

This takes the same values the timing function property in transitions, but behaves a little differently. While a timing
function, such as ease-out **applies to the entire transition**, the timing function of an animation a**pplies between
each keyframe.**

```css
/*animation-timing-function : ease-out;*/
@keyframes foo {
    0% {
        /* Animation starts fast and ease-out makes it slow down before 50% */
    }
    50% {
        /* Again, starts fast and slows toward 100% */
    }
    100% {
        /* fin */
    }
}

/*so we usually define animation-timing-function on a per-keyframe basis*/
@keyframes my-animation {
    0% {
        /*...*/
        animation-timing-function: linear;
    }
    50% {
        /*...*/
        animation-timing-function: ease-out;
    }
}
```

### Things to look out for

- keywords `from` and `to` is simple an alternate way of writing `0%` and `100%`
- You may have noticed that sometimes more than one percentage value is used on the same line. This is a way to **have
  the animation pause for a while**, or hold a particular state.

```css
/*This example will have the element start with an opacity of 0, 
and stay invisible until 20% through the animation*/
@keyframes name {
    0%, 20% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
```

- Lastly, you can **omit the 0% keyframe** and the browser will take the element’s style as implied. For example, to
  have something fade away, we don’t necessarily have to give it a starting opacity of 1 (assuming the element is
  already visible)

```css
@keyframes name {
    100% {
        opacity: 0;
    }
}
```

- If a keyframe rule doesn't specify the start or end states of the animation (that is, `0%/from` and `100%/to`),
  browsers
  will use the element's existing styles for the start/end states. This can be used to animate an element from its
  initial state and back.

## Multiple animations

## FQ

- [CSS transition not working](https://weekendprojects.dev/posts/css-transition-not-working/)
    - The transition can only be applied to animatable properties.
    - Check that the animating property is not set to auto. Transitions can not animate CSS properties that are **not
      explicitly set** and **auto**

