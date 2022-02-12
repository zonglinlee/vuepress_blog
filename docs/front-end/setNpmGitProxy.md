---
title: 代理设置
---

## V2rayN代理软件设置
[ssr节点](https://www.duyaoss.com/) <br>
v2rayN下载地址：<a href='https://github.com/v2ray/v2ray-core'>https://github.com/v2ray/v2ray-core</a> 


![v2rayN端口设置](../images/front-end/v2rayN.png)

## webstorm 配置
### 软件破解
#### webstorm 2021.3 版本激活教程
  注意不是2021.3.1版本：<a href='https://www.bilibili.com/read/cv14405690'>https://www.bilibili.com/read/cv14405690</a>
#### [jetbrains 2021.3.x、2021.2.x、2021.1.x等 版本激活教程](https://www.yuque.com/u12033157/dqgh2a/hc2eba)
  注意：webstorm 2021.3.1版本之后需要登陆账号才可以试用，而且绑定账号，试用期结束后无法再次试用

#### webstorm代理设置
ieda中插件市场下载太慢，v2rayN全局代理不生效，需要给idea配置代理，打开idea Settings- System Settings - http proxy

![webstorm代理设置](../images/front-end/webstormProxy.png)

#### webstorm 常用插件
- theme： settings-plugin - (one Dark theme)
- [Emmet everywhere插件](https://docs.emmet.io/abbreviations/syntax/)
- Database Navigator （数据库连接插件）
- .env files support
- statistic (统计项目代码)
#### webstorm常见问题
- `tailwindcss` 不能智能提示
```text
需要升级到 webstorm 2021.3.1以后才可以智能提示
```
- webstorm `ctrl + tab` 键不显示 npm工具栏
```text
在 `package.json` 上点击右键，然后选择 `show npm scripts` 选项即可，
会发现左下角侧边栏上出现了一个 npm 的按钮
```
- webstorm 光标变粗解决方案
```text
应该是不小心按了键盘上的 insert 键，再按下切换回来就可以
```

## npm代理配置
### 使用nrm管理registry地址
```shell
npm install -g nrm
nrm add npm http://registry.npmjs.org
nrm add taobao https://registry.npm.taobao.org
# 切换npm registry地址
nrm use taobao
nrm use npm
# 移除代理
npm config delete proxy
npm config delete https-proxy
# 配置代理
npm config set proxy=http://127.0.0.1:1081
# 查看代理
npm config get proxy
```

## git 代理配置
```shell
# 设置全局代理
git config --global http.proxy http://127.0.0.1:1081
git config --global https.proxy https://127.0.0.1:1081
# 使用socks5代理的
git config --global http.proxy socks5://127.0.0.1:1081
git config --global https.proxy socks5://127.0.0.1:1081

# 只对github.com使用代理，其他仓库不走代理
git config --global http.https://github.com.proxy socks5://127.0.0.1:1081
git config --global https.https://github.com.proxy socks5://127.0.0.1:1081
# 取消github代理
git config --global --unset http.https://github.com.proxy
git config --global --unset https.https://github.com.proxy

# 取消全局代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```
## npm和git自动设置代理脚本
需要安装 `shelljs` 依赖
@[code js](../_code/front-end/setNpmGitProxy.js)