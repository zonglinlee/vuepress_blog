---
title: tailwindcss
---

### [Vue2 配置 tailwindcss](https://www.sanity.io/guides/tailwind-css-with-vue-js)

### tailwind.config.js

- When building for production, you should always use Tailwind’s `purge` option to tree-shake unused styles and optimize
  your final build size
- preflight: A set of base styles for Tailwind projects.

```js
module.exports = {
    // https://v2.tailwindcss.com/docs/optimizing-for-production#removing-unused-css
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
    corePlugins: {
        // 禁用基础样式，否则集成到element-ui中会有干扰
        preflight: false,
    }
}
```

### CORE CONCEPTS

`@tailwind base`: `Base` (or global) styles are the styles at the beginning of a stylesheet that set useful defaults for
basic HTML elements like `<a>` tags, headings, etc. or apply opinionated resets like the popular `box-sizing` reset.
Tailwind includes a useful set of base styles out of the box that we call **Preflight**, which is really just
modern-normalize plus a thin layer of additional more opinionated styles.

- By using the `@layer` directive, Tailwind will automatically move those styles to the same place as `@tailwind base`
  to avoid unintended specificity issues.
- Using the `@layer` directive will also instruct Tailwind to consider those styles for **purging** when purging the **
  base layer**.

```css
/*自定义base样式*/
@layer base {
    h1 {
        @apply text-2xl;
    }

    h2 {
        @apply text-xl;
    }
}
```

Extracting component classes with @apply：

To avoid unintended specificity issues, we recommend wrapping your custom component styles with the `@layer components`
directive to tell Tailwind what layer those styles belong to

```html

<button class="btn-blue">
    Click me
</button>
```

```css

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .btn-blue {
        @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
    }
}
```

Adding New Utilities:

Although Tailwind provides a pretty comprehensive set of utility classes out of the box, you may run into situations
where you need to add a few of your own.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
/*自定义css class 类名*/
@layer utilities {
    .scroll-snap-none {
        scroll-snap-type: none;
    }

    .scroll-snap-x {
        scroll-snap-type: x;
    }

    .scroll-snap-y {
        scroll-snap-type: y;
    }
}
```

### [Functions & Directives](https://v2.tailwindcss.com/docs/functions-and-directives)

A reference for the custom functions and directives Tailwind exposes to your CSS.

- Use the `@tailwind` directive to insert Tailwind’s `base`, `components`, `utilities` and `screens` styles into your
  CSS.
- Use `@apply` to inline any existing utility classes into your own custom CSS.
- Any rules inlined with `@apply` will have `!important` removed by default to avoid specificity issues
- You can also mix `@apply` declarations with normal CSS declarations

```css
/**
 * This injects Tailwind's base styles and any base styles registered by
 * plugins.
 */
@tailwind base;

/**
 * This injects Tailwind's component classes and any component classes
 * registered by plugins.
 */
@tailwind components;

/**
 * This injects Tailwind's utility classes and any utility classes registered
 * by plugins.
 */
@tailwind utilities;

/**
 * Use this directive to control where Tailwind injects the responsive
 * variations of each utility.
 *
 * If omitted, Tailwind will append these classes to the very end of
 * your stylesheet by default.
 */
@tailwind screens;
```

- If you’d like to `@apply` an existing class and make it `!important`, simply add `!important` to the end of the
  declaration

```css
.btn {
    @apply font-bold py-2 px-4 rounded !important;
}
```

if you’re using **Sass/SCSS**, you’ll need to use Sass’ **interpolation** feature to get this to work

```scss
.btn {
  @apply font-bold py-2 px-4 rounded #{!important};
}
```

- Use the `@layer` directive to tell Tailwind which “bucket” a set of custom styles belong to. Valid layers are a `base`
  , `components`, and `utilities`.
- @variants:You can generate `responsive`, `hover`, `focus`, `active`, and other variants of your own utilities by
  wrapping their definitions in the `@variants` directive.

- `theme()`: Use the `theme()` function to access your Tailwind config values using dot notation.

```css
.content-area {
    height: calc(100vh - theme('spacing.12'));
}
```

Vue中自定义按钮

```html

<templae>
    <div class="cus-btn">tailwind.css</div>
</templae>
<style lang="scss" scoped>
    @layer components {
        .cus-btn {
            @apply rounded  w-40  text-center text-lg p-2 mb-2 text-white cursor-pointer transform duration-200 hover:scale-105;
            background-color: theme('colors.myOrange');
        }
    }
</style>
```
