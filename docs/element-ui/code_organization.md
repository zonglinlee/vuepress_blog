---
title: packageJson文件
---

## prerequisite

## [Cross-platform Utilities](https://github.com/RyanZim/awesome-npm-scripts#cross-platform-utilities)

Utilities to perform common command-line tasks without worrying about cross-platform compatibility.

- [rimraf](https://github.com/isaacs/rimraf) - Delete files or directories; like `rm -rf`.
- del-cli - Safer file and folder deletion.
- mkdirp - Create a directory, creating parent directories if needed; like `mkdir -p`.
- cpr - cp -r for Node.js.
- cpy-cli - File/directory copying/renaming.
- copyfiles - Copy a list of files into a directory.
- sync-files - rsync-like directory syncing with watch mode.
- echo-cli - Cross-platform echo with JS escape sequence support.
- clear-cli - Clear the terminal.
- [cross-env](https://github.com/kentcdodds/cross-env) - Set environment variables for scripts, unix-style.
- cross-os - Run platform-specific npm scripts.
- ntee - Utility that reads from standard input and writes to standard output and files; like Unix tee.
- catw - Print a file to stdout, with optional watch mode; sorta like Unix cat.

## npm scripts

```shell
"scripts": {
    "dist": "npm run clean && npm run build:file && npm run lint && webpack --config build/webpack.conf.js && webpack --config build/webpack.common.js && webpack --config build/webpack.component.js && npm run build:utils && npm run build:umd && npm run build:theme",
    "bootstrap": "yarn || npm i",
    "build:file": "node build/bin/iconInit.js & node build/bin/build-entry.js & node build/bin/i18n.js & node build/bin/version.js",
    "build:theme": "node build/bin/gen-cssfile && gulp build --gulpfile packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk",
    "build:utils": "cross-env BABEL_ENV=utils babel src --out-dir lib --ignore src/index.js",
    "build:umd": "node build/bin/build-locale.js",
    "clean": "rimraf lib && rimraf packages/*/lib && rimraf test/**/coverage",
    "deploy:build": "npm run build:file && cross-env NODE_ENV=production webpack --config build/webpack.demo.js && echo element.eleme.io>>examples/element-ui/CNAME",
    "deploy:extension": "cross-env NODE_ENV=production webpack --config build/webpack.extension.js",
    "dev:extension": "rimraf examples/extension/dist && cross-env NODE_ENV=development webpack --watch --config build/webpack.extension.js",
    "dev": "npm run bootstrap && npm run build:file && cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js & node build/bin/template.js",
    "dev:play": "npm run build:file && cross-env NODE_ENV=development PLAY_ENV=true webpack-dev-server --config build/webpack.demo.js",
    "i18n": "node build/bin/i18n.js",
    "lint": "eslint src/**/* test/**/* packages/**/* build/**/* --quiet",
    "pub": "npm run bootstrap && sh build/git-release.sh && sh build/release.sh && node build/bin/gen-indices.js",
}
```

### build:file

使用了 `postcss` 对 `packages/theme-chalk/src/icon.scss` 进行了解析，提取了所有的 `icon class`

```js
// icon.scss 其实是一个css文件，所以可以使用 postcss.parse
var fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'), 'utf8');
var nodes = postcss.parse(fontFile).nodes;
```

解析根目录下的`components.json`文件, 使用 **模板字符串** 的方式生成 `src/index.js`

- [json-templater](https://github.com/lightsofapollo/json-templater)

  JSON template(r) is an opinionated simple way to do **mustache style template replacements** on your js and json
  objects (
  and of course strings too)!
- [uppercamelcase](https://github.com/SamVerschueren/uppercamelcase)

  Convert a dash/dot/underscore/space separated string to UpperCamelCase: foo-bar → FooBar

```js
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');
var endOfLine = require('os').EOL;
```
