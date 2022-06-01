---
title: packageJson文件
---

## prerequisite

### [rimraf](https://github.com/isaacs/rimraf)

The UNIX command` rm -rf` for node.

### [cross-env](https://github.com/kentcdodds/cross-env)

`cross-env` makes it so you can have a single command without worrying about setting or using the **environment
variable** properly for the platform.

```shell
"scripts": {
  "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
}
```
