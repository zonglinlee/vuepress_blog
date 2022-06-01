---
title: jenkins问题
---

https://blog.csdn.net/u013670453/article/details/114489201

https://stackoverflow.com/questions/70663523/the-unauthenticated-git-protocol-on-port-9418-is-no-longer-supported

git config --global url."https://github.com/".insteadOf git://github.com/

## jenkins 中使用 yarn

**构建-执行 shell** 中全局安装 `yarn`，如果你在服务器上提前安装好了 `yarn`，可能在 jenkins 构建过程中找不到 `yarn` 命令，如果先使用 `npm` 安装 `yarn`， 再执行 `yarn`
命令就可以，我也不知道为什么

```shell
#!/bin/bash
npm install -g yarn
yarn -v
# Don’t generate a yarn.lock lockfile.
yarn install --pure-lockfile
yarn run build:test
```
