---
title: mysql
---

## 知识点
- mysql 中 `+` 的作用：只有一个作用，就是用作运算符
    - 两个操作数都为数值型，则进行加法运算
    - 一方为字符型，则试图将字符型转换成数值型，如果转换成功，则进行加法运算；如果转换失败，则将字符型转换成数值 0 ，继续进行加法运算
    - 只要其中一方为 null， 则结果肯定为 null

## [mysql 索引失效](https://segmentfault.com/a/1190000021464570)


## Reference

- [wiki-sql-exercise](https://github.com/XD-DENG/SQL-exercise)
