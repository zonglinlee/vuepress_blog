SELECT DISTINCT p.permission_name
FROM tb_user u
         JOIN tb_role r ON JSON_CONTAINS(u.role, CAST(r.id AS CHAR))
         JOIN tb_permission p ON JSON_CONTAINS(r.permissions, CAST(p.id AS CHAR))
WHERE u.id = 4
  AND u.status = 1;

# inner join 和 join　是一样的
EXPLAIN
SELECT DISTINCT p.permission_name
FROM tb_user u
         INNER JOIN tb_role r ON JSON_CONTAINS(u.role, CONVERT(r.id, CHAR))
         INNER JOIN tb_permission p ON JSON_CONTAINS(r.permissions, CAST(p.id AS CHAR))
WHERE u.id = 4
  AND u.`status` = 1;


EXPLAIN
SELECT DISTINCT p.permission_name
FROM tb_user u
         INNER JOIN tb_role r ON JSON_CONTAINS(u.role, CONVERT(r.id, CHAR))
         INNER JOIN tb_permission p ON JSON_CONTAINS(r.permissions, CAST(p.id AS CHAR))
WHERE u.id = 4
  AND u.`status` = 1;

# 这个查询性能不好 Using temporary; Using filesort　　
EXPLAIN
SELECT u.id,
       u.`name`,
       u.sex,
       u.email,
       d.dept_name,
       u.hiredate,
       u.root,
       u.status,
       GROUP_CONCAT(r.role_name) role_name
FROM tb_user u
         INNER JOIN tb_dept d ON u.dept_id = d.id
         INNER JOIN tb_role r ON JSON_CONTAINS(u.role, CAST(r.id AS CHAR))
WHERE u.`status` = 1
GROUP BY u.id;


# GROUP_CONCAT 是一个聚合函数， 会将晒出来的行聚合成一行一列
EXPLAIN
SELECT DISTINCT u.id,
                u.name,
                u.sex,
                u.tel,
                u.email,
                d.dept_name AS dept,
                u.hiredate,
                u.root,
                u.status,
                (
                    SELECT GROUP_CONCAT(role_name separator ',')
                    FROM tb_role
                    WHERE JSON_CONTAINS(u.role, CONVERT(id, CHAR))
                )           AS roles
FROM tb_user u
         JOIN tb_role r ON JSON_CONTAINS(u.role, CONVERT(r.id, CHAR))
         LEFT JOIN tb_dept d ON u.dept_id = d.id
WHERE u.`status` = 1;
