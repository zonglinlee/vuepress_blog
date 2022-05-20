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
