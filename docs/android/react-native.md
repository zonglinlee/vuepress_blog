---
title: react-native
---

## reactNative

- [React Native Generate APK — Debug and Release APK](https://medium.com/geekculture/react-native-generate-apk-debug-and-release-apk-4e9981a2ea51)
- [React Native-Error: EPERM: operation not permitted, lstat](https://stackoverflow.com/questions/63508278/react-native-constant-errors-like-error-eperm-operation-not-permitted-lsta)

```shell
# 或者尝试在  gitbash  下运行，powershell 可能权限不足 （或者需要以管理员身份运行）
cd android
./gradlew clean
cd ..
npx react-native run-android
```

- reactive 构建太慢，以及多个 jdk 选择

```shell
# 在 android 目录下找到 gradle.properties, 配置 java home
org.gradle.java.home=C:\\Program Files\\Java\\jdk-11
# 在 android 目录下找到 gradle.properties, 配置 gradle 代理 （clash 全局代理不生效，需要单独配置）
systemProp.http.proxyHost=127.0.0.1
systemProp.http.proxyPort=1081
systemProp.https.proxyHost=127.0.0.1
systemProp.https.proxyPort=1081
```

## Reference

- [reactNative 第三方组件](https://reactnative.directory/)
