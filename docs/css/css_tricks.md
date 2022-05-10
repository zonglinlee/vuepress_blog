---
title: css tricks
---

# Reference

[Remove Whitespace Between Inline-Block Elements](https://davidwalsh.name/remove-whitespace-inline-block)

### svg 改变颜色

父元素设置 `red` 无效，因为 `<path>` 标签的最后默认设置了 `blue`，此时该 `svg` 图片是 蓝色的

```html

<div style="color: red">
    <svg width="1em" height="1em" viewBox="0 0 1024 1024">
        <path d="M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8..." fill="blue"/>
    </svg>
</div>
```

- `svg` 标签中加入 `fill="currentColor"`
- `path` 标签中去掉 `fill="blue`

```html

<div style="color: red">
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8..."/>
    </svg>
</div>
```
