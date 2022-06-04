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

### [构建 demo 文件](https://juejin.cn/post/6943866186438443016)

在 `deploy:build` 脚本中使用 `cross-env NODE_ENV=production webpack --config build/webpack.demo.js`命令构建了 `element-UI` 文档中的
demo， 这里使用了elementUI自研的 `md-loader`, 这个loader会先将 Markdown
文档使用 [`markdown-it`](https://github.com/markdown-it/markdown-it)  将 `markdown` 解析为
`html`
,然后再使用 [vue-template-compiler](https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler#readme)将html文件转换为
Vue组件交给 `vue-loader` 去处理

```shell
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      },
```

调试 `md-loader`,将打包命令单独拉出来，如下

将断点设置好，在 `webstorm` 中 debug `build:md` 脚本进行调试

```shell
"build:md": "cross-env NODE_ENV=production webpack --config build/webpack.demo.js",
```

Element 自定义了 Markdown-container 解析，并覆写了 `markdown-it` 的默认的 `fence` 渲染策略

- [markdown-it-container](https://github.com/markdown-it/markdown-it-container)

Plugin for creating **block-level custom containers** for `markdown-it` markdown parser.

## [MakeFile 文件](https://juejin.cn/post/6844903775912591368)

`Makefile` 是一个适用于 `C/C++` 的工具，较早作为工程化工具出现在 `UNIX` 系统中， 通过 `make` 命令来执行一系列的编译和连接操作。在拥有 `make` 环境的目录下， 如果存在一个 `Makefile`
文件。 那么输入 `make` 命令将会执行 `Makefile` 文件中的某个目标命令。

[Windows下载 make 的 GUN 工具](http://gnuwin32.sourceforge.net/packages/make.htm)

## reference

[ElementUI的构建流程](https://segmentfault.com/a/1190000016419049)
