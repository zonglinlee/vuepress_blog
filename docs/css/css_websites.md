---
title: css websites
--- 

- [csstriggers.com](https://csstriggers.com)

During a CSS animation, this process repeats every frame. However, CSS properties that never affect geometry or
position, such as color, may skip the Layout step. If a color changes, the browser doesn’t calculate any new geometry,
it goes to Paint → Composite. And there are few properties that directly go to Composite.

```text
Layout: re-compute the geometry and position of each element, then

Paint: re-compute how everything should look like at their places, including background, colors,

Composite: render the final results into pixels on screen, apply CSS transforms if they exist.
```

