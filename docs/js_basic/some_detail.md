---
title: minor details
---

## `console.dir` vs `console.log`

For JavaScript objects these commands usually do the same.But for **DOM elements** they are different :

- `console.log(elem)` shows the element DOM tree.
- `console.dir(elem)` shows the element as a DOM object, good to explore its properties.

## node element tagName

The **tag name** is always uppercase except in **XML mode**. The browser has **two modes** of processing documents:
HTML and XML. Usually the HTML-mode is used for webpages. XML-mode is enabled when the browser receives an XML-document
with the header: `Content-Type: application/xml+xhtml`.

In HTML mode `tagName/nodeName` is always **uppercased**: it’s BODY either for `<body>` or `<BoDy>`.

In XML mode the case is kept “as is”. Nowadays XML mode is **rarely** used.

## The “hidden” property

The “hidden” attribute and the DOM property specifies whether the element is visible or not. Technically, hidden works
the same as `style="display:none"`. But it’s shorter to write.

## [HTML attributes](https://javascript.info/dom-attributes-and-properties#html-attributes)

In HTML, tags may have attributes. When the browser parses the HTML to create DOM objects for tags, it recognizes
**standard attributes** and creates DOM properties from them.

So when an element has `id` or another standard attribute, the corresponding property gets created. But that doesn’t
happen if the attribute is non-standard.

```html

<body id="test" something="non-standard">
<script>
    alert(document.body.id); // test
    alert(document.body.something); // undefined
</script>
</body>
```

So, if an attribute is non-standard, there **won’t be a DOM-property** for it.

Standard attributes are described in the specification for the corresponding element class.

HTML attributes have the following features:

- Their name is **case-insensitive** (id is same as ID).
- Their values are always **strings**

## Property-attribute synchronization

When a standard attribute changes, the corresponding property is **auto-updated**, and (with some exceptions). In the
example below id is modified as an attribute, and we can see the property changed too. And then the same backwards.

But there are **exclusions**, for instance `input.value` synchronizes only from **attribute → to property**, but not
back

## html dataset

All attributes starting with `“data-”` are reserved for programmers’ use. They are available in the `dataset`
property.Please note that we can not only read, but also modify data-attributes.

For instance, if an elem has an attribute named `data-about`, it’s available as `elem.dataset.about`

Multiword attributes like `data-order-state` become camel-cased: `dataset.orderState`.

## Prefixed properties

Browser-prefixed properties like `-moz-border-radius`, `-webkit-border-radius` also follow the same rule: **a dash means
upper case**.

```js
button.style.MozBorderRadius = '5px';
button.style.WebkitBorderRadius = '5px';
```

## Resetting the style property

Sometimes we want to assign a style property, and later remove it. For instance, to hide an element, we can
set `elem.style.display = "none"`. Then later we may want to remove the `style.display` as if it were not set. Instead
of delete `elem.style.display` we should assign an empty string to it: `elem.style.display = ""`. If we set
`style.display` to an empty string, then the browser applies CSS classes and its built-in styles normally, as if there
were no such `style.display` property at all.

## Width/height of the document

Theoretically, as the root document element is `document.documentElement`, and it encloses all the content, we could
measure the document’s full size as `document.documentElement.scrollWidth/scrollHeight`.

But on that element, for the whole page, these properties do not work as intended. In Chrome/Safari/Opera, if there’s no
scroll, then `documentElement.scrollHeight` may be even **less than** `documentElement.clientHeight`! Weird, right?

To reliably obtain the full document height, we should take the maximum of these properties:

```js
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
```

DOM elements have their current scroll state in their `scrollLeft/scrollTop` properties.

For `document` scroll, `document.documentElement.scrollLeft/scrollTop` works in most browsers, except older WebKit-based
ones, like Safari (bug 5991), where we should use `document.body` instead of `document.documentElement`.

Luckily, we don’t have to remember these peculiarities at all, because the scroll is available in the special
properties, `window.pageXOffset/pageYOffset`,Also available as window properties `scrollX` and `scrollY`

- `window.pageXOffset` is an alias of `window.scrollX`.
- `window.pageYOffset` is an alias of `window.scrollY`.


## `elementFromPoint(x, y)`
The call to `document.elementFromPoint(x, y)` returns the most nested element at **window coordinates (x, y)**,
For out-of-window coordinates the `elementFromPoint` returns `null`



