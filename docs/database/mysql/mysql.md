_---
title: mysql
---

## 知识点

- mysql 中 `+` 的作用：只有一个作用，就是用作运算符
    - 两个操作数都为数值型，则进行加法运算
    - 一方为字符型，则试图将字符型转换成数值型，如果转换成功，则进行加法运算；如果转换失败，则将字符型转换成数值 0 ，继续进行加法运算
    - 只要其中一方为 null， 则结果肯定为 null
- MySQL doesn’t have a built-in Boolean type. Instead, it uses the **number zero as FALSE** and non-zero values as TRUE.
- To check if a value is between a date range, you should explicitly `cast` the value to the **DATE** type.
```sql
SELECT * FROM ordersWHERE requireddate BETWEEN CAST('2003-01-01' AS DATE) AND CAST('2003-01-31' AS DATE);
```
## [mysql 索引失效](https://segmentfault.com/a/1190000021464570)
## [mysql 重置自增id](https://blog.51cto.com/u_16213366/7941068)
```shell
select MAX(id) from tableName;
ALTER TABLE tableName AUTO_INCREMENT = max_id_value + 1;
```

## [mysql 内置函数](https://dev.mysql.com/doc/refman/5.7/en/built-in-function-reference.html)

- `CAST`: Cast a value as a certain type   `CAST(123456 as CHAR)`
- `CONVERT`: Cast a value as a certain type `CONVERT(123456, CHAR)`
- `JSON_CONTAINS(target, candidate[, path])`: Whether JSON document contains specific object at path
- `HEX()`:	Hexadecimal representation of decimal or string value
- `AES_ENCRYPT(str,key_str)`:	Encrypt using AES
- `AES_DECRYPT(crypt_str,key_str)`: Decrypt using AES
- `GROUP_CONCAT()`:	Return a concatenated string, `GROUP_CONCAT(t2.name ORDER BY t2.project_step SEPARATOR  '@@@')`
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

- 在 MySQL 中，`WITH` 关键字用于定义 `CTE`（Common Table Expressions，公共表表达式）。CTE 是一个临时的结果集，可以在一个查询中多次引用，通常用于简化复杂查询。CTE 是一个临时的、命名的结果集，只在当前查询中有效。CTE 可以提高查询的可读性，但在性能上可能不如临时表或子查询。
CTE 可以是普通的（非递归）或递归的。 递归 CTE 特别适合处理层次结构数据（如树形结构）
```sql
WITH cte_name AS (
    -- 子查询
    SELECT ...
)
SELECT ...
FROM cte_name; 
```

- 在 MySQL 中，`USING` 关键字通常用于 JOIN 操作中，用来简化连接条件。它主要用于在两个表之间基于相同列名进行连接时，替代 ON 子句.当两个表连接的列名相同时，可以使用 `USING` 来指定连接条件。 `USING` 会自动匹配两个表中列名相同的列，并将其作为连接条件

## case when 结构

you can use the `CASE` expression anywhere that allows a valid expression e.g., `SELECT`, `WHERE` and `ORDER BY` clauses.The `CASE` expression has **two** forms: `simple CASE` and `searched CASE`.



Simple CASE expression:The `CASE` compares the value with values in the `WHEN` clauses for equality, you cannot use it with `NULL` because `NULL = NULL` returns false.

```sql
CASE value
WHEN value1 THEN result1
WHEN value2 THEN result2
…
[ELSE else_result]
END

```
Searched CASE expression:the `CASE` evaluates expressions specified in the `WHEN` clauses. If an expression evaluates to `true`. CASE returns the corresponding result in the `THEN` clause. Otherwise, it returns the result specified in the `ELSE` clause.

```sql
CASE
   WHEN expression1 THEN result1
   WHEN expression2 THEN result2
   …
   [ELSE else_result]
END
```

## Reference

- [wiki/Category:Shelf:SQL](https://en.wikibooks.org/wiki/Category:Shelf:SQL)
- [wiki-sql-exercise](https://github.com/XD-DENG/SQL-exercise)
- [mysql_tutorial](https://www.mysqltutorial.org/)_
