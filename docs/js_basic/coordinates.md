---
title: 坐标
---

- [window.scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY): the number of pixels that the
  document is currently scrolled vertically.
- [window.scrollX](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX): the number of pixels that the
  document is currently scrolled horizontally
- [window.pageYOffset](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset): an alias for window.scrollY
- [window.pageXOffset ](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageXOffset): an alias for
  window.scrollX




A hidden (display:none) or out of the document element has no size.

### [getComputedStyle](https://javascript.info/styles-and-classes)

**getComputedStyle** actually returns the resolved value
of the property, usually in **px** for
geometry.We should always ask for the exact property that we want, like **paddingLeft** or **marginTop** or *
*borderTopWidth**.
Otherwise the correct result is not guaranteed.For instance, if there are properties **paddingLeft/paddingTop**, then
what
should we get for `getComputedStyle(elem).padding`? Nothing, or maybe a “generated” value from known paddings? There’s
**no standard rule** here.

Don’t take **width/height** from CSS(**getComputedStyle**).There are two reasons:

- First, CSS **width/height** depend on another property: **box-sizing** that defines “what is” CSS width and height. A
  change
  in box-sizing for CSS purposes may break such JavaScript.

- Second, CSS **width/height** may be **auto**, for instance for an inline element:
- one more reason: a scrollbar, a scrollbar takes the space from the content in some browsers. So the real width
  available for the content is less than CSS width. But with `getComputedStyle(elem).width` the situation is different.
  Some browsers (e.g. Chrome) return the real inner width, minus the scrollbar, and some of them (e.g. Firefox) – CSS
  width (ignore the scrollbar)