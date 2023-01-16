---
title: mysql
---

## 知识点

- mysql 中 `+` 的作用：只有一个作用，就是用作运算符
    - 两个操作数都为数值型，则进行加法运算
    - 一方为字符型，则试图将字符型转换成数值型，如果转换成功，则进行加法运算；如果转换失败，则将字符型转换成数值 0 ，继续进行加法运算
    - 只要其中一方为 null， 则结果肯定为 null

## [mysql 索引失效](https://segmentfault.com/a/1190000021464570)

## [mysql 内置函数](https://dev.mysql.com/doc/refman/5.7/en/built-in-function-reference.html)

- `CAST`: Cast a value as a certain type   `CAST(123456 as CHAR)`
- `CONVERT`: Cast a value as a certain type `CONVERT(123456, CHAR)`
- `JSON_CONTAINS(target, candidate[, path])`: Whether JSON document contains specific object at path
- `HEX()`:	Hexadecimal representation of decimal or string value
- `AES_ENCRYPT(str,key_str)`:	Encrypt using AES
- `AES_DECRYPT(crypt_str,key_str)`: Decrypt using AES
- `GROUP_CONCAT()`:	Return a concatenated string
```sql
-- 以下 GROUP_CONCAT 查询会得到： A;B;C
USE testdb;
CREATE TABLE t (
    v CHAR
);
INSERT INTO t(v) VALUES('A'),('B'),('C'),('B');
SELECT 
    GROUP_CONCAT(DISTINCT v ORDER BY v ASC SEPARATOR ';')
FROM
    t;
```
```sql
SET @j = '{"a": 1, "b": 2, "c": {"d": 4}}';
SET @j2 = '1';
SELECT JSON_CONTAINS(@j, @j2, '$.a');
```

## Reference

- [wiki-sql-exercise](https://github.com/XD-DENG/SQL-exercise)
