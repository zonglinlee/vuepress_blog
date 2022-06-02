---
title: NPM-node package manager
---

## [NPM Scripts operators](https://srinivasankk.com/npm-scripts-with-and-operators/)

`npm` 脚本的原理非常简单。每当执行 `npm run`，就会自动新建一个 `Shell`，在这个 `Shell` 里面执行指定的脚本命令。因此，只要是 `Shell`（一般是 `Bash`）可以运行的命令，就可以写在 `npm`
脚本里面。 比较特别的是，`npm run` 新建的这个 `Shell`，会将当前目录的 `node_modules/.bin` 子目录加入 `PATH` 变量，执行结束后，再将 `PATH` 变量恢复原样。

由于 `npm` 脚本的唯一要求就是可以在 `Shell` 执行，因此它不一定是 `Node` 脚本，任何可执行文件都可以写在里面。 `npm` 脚本的退出码，也遵守 `Shell` 脚本规则。如果退出码不是 `0`，`npm`
就认为这个脚本执行失败。

由于 `npm` 脚本就是 `Shell` 脚本，因为可以使用 `Shell 通配符`。`*` 表示任意文件名，`**` 表示任意一层子目录。

- Use `&&` (double ampersand) for **sequential** execution.
- Use `&` (single ampersand) for **parallel** execution.
- Use `|` to pipe the stdout of one command into the stdin of the next. (do-something | something else)
- Use `>` to write the stdout of a command to a file. (do-something > file)
- Use `<` to send the contents of a file to a command's stdin. (command < file)

## [`.npmrc`文件](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc)

- npm gets its config settings from the command line, environment variables, and `npmrc` files.
- Lines in `.npmrc` files are interpreted as comments when they begin with a `;` or `#` character.
- For a list of available configuration options,
  see [config](https://github.com/sass/node-sass#binary-configuration-parameters).
- For specific packages like `node-sass`, you can check the `.npmrc parameter`
  on [gitHub repository](https://github.com/sass/node-sass#binary-configuration-parameters)

## [node-sass安装问题](https://github.com/lmk123/blog/issues/28)

在项目根目录新建文件 `.npmrc`

```shell
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
electron_mirror=https://npm.taobao.org/mirrors/electron/
registry=https://registry.npm.taobao.org
```

## Reference

- [阮一峰 npm_scripts](https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
- [How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
- [Awesome npm](https://github.com/sindresorhus/awesome-npm)
- [Awesome npm scripts](https://github.com/RyanZim/awesome-npm-scripts)
