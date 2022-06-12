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

https://xudany.github.io/eslint/2021/09/24/Error-while-loading-rule-'prettierprettier'/

## Reference

https://juejin.cn/post/6990929456382607374
