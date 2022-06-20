---
title: eslint
---

## eslint in vue

- [eslint-plugin-vue](https://eslint.vuejs.org/)

This plugin allows us to check the `<template>` and `<script>` of .vue files with ESLint, as well as Vue code in **.js**
files.

plugins插件 ESLint虽然可以定义很多的
rules，以及通过extends来引入更多的规则，但是说到底只是检查JS语法。如果需要检查Vue中的template或者React中的jsx，就束手无策了。所以引入插件的目的就是为了增强ESLint的检查能力和范围。
在配置文件里配置插件时，可以使用 `plugins` 关键字来存放插件名字的列表。插件名称可以省略 `eslint-plugin-` 前缀。

- [@vue/cli-plugin-eslint](https://www.npmjs.com/package/@vue/cli-plugin-eslint)

eslint plugin for vue-cli, Injected Commands: `vue-cli-service lint`

- [babel-eslint](https://www.npmjs.com/package/babel-eslint)

**babel-eslint** is now **@babel/eslint-parser**. babel-eslint allows you to lint ALL valid Babel code with the
fantastic ESLint.You only need to use babel-eslint if you are using types (Flow) or experimental features not supported
in ESLint itself yet. Otherwise try the default parser (you don't have to use it just because you are using Babel).

ESLint allows custom parsers. This is great but some of the syntax nodes that Babel supports aren't supported by ESLint.
When using this plugin, ESLint is monkeypatched and your code is transformed into code that ESLint can understand.

- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

Turns off all rules that are unnecessary or might conflict with Prettier.

## webstorm eslint error

> ESLint: Please specify path to 'eslint' package

tried to install eslint globally and restart your IDE : `npm install --g eslint`

> Error while loading rule 'prettier/prettier'

try upgrade eslint

> Why do I keep getting Delete 'cr' `[prettier/prettier]`?

Try setting the `"endOfLine":"auto"` in your `.prettierrc` (or `.prettierrc.json`) file (inside the
object) [stackoverflow](https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-delete-cr-prettier-prettier)

## [prettier](https://www.jetbrains.com/help/webstorm/prettier.html)

- webstorm plugins market: install prettier
- workspace: `npm install --save-dev --save-exact prettier` or `npm install --global prettier`
- Settings/Preferences dialog (Ctrl+Alt+S), go to Languages & Frameworks | JavaScript | Prettier, select `prettier`
  installation
- Reformat code with Prettier:  press `Ctrl+Alt+Shift+P`
- Set Prettier as default formatter : go to Languages & Frameworks | JavaScript | Prettier, and select
  the `On code reformat` checkbox.

## git integration

- [husky-哈士奇](https://github.com/typicode/husky)

Modern native Git hooks made easy, `npm install husky -D`

- [lint-staged](https://github.com/okonet/lint-staged)

Run linters against **staged git files** and don't let 💩 slip into your code base

`npm install -D lint-staged`

```shell
# package.json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx}": [
      "prettier --write",
      "eslint --fix",
      "git add"
    ],
    "*.{html,css,less,ejs}": [
      "prettier --write",
      "git add"
    ]
  }
```

## files related to prettier && eslint

eslintrc.js

```js
module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:prettier/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        'vue/multi-word-component-names': ['warn'],
    },
}
```

.eslintignore

```text
src/views/pureHtml/**
```

.prettierignore

```text
.github
public
dist
```

prettier.config.js

```js
module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    endOfLine: 'auto',
}

```

### [git 规范 commitizen](https://github.com/commitizen/cz-cli)
使用 `cz` 命令代替 `git commi`t 
```shell
npm install -g commitizen
commitizen init cz-conventional-changelog --save-dev --save-exact
```

## Reference

[eslint和prettier](https://juejin.cn/post/6990929456382607374)
[github-example](https://github.com/zonglinlee/vue2-practice)
