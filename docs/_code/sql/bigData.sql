create database if not exists bigData;
create table if not exists dept
(
    id       int unsigned primary key AUTO_INCREMENT,
    deptNo   mediumint unsigned not null default 0,
    deptName VARCHAR(20)        NOT NULL default '',
    loc      varchar(13)        not null default ''
) ENGINE = INNODB
  default charset = UTF8MB4;

create table if not exists employee
(
    id         int unsigned primary key AUTO_INCREMENT,
    employNo   mediumint unsigned not null default 0 comment '员工编号',
    employName VARCHAR(20)        NOT NULL default '' comment '员工姓名',
    job        VARCHAR(9)         NOT NULL default '' comment '工作',
    mgr        mediumint unsigned not null default 0 comment '上级编号',
    hireDate   date               NOT NULL comment '入职时间',
    salary     decimal(7, 2)      NOT NULL comment '薪水',
    comm       decimal(7, 2)      NOT NULL comment '红利',
    deptNo     mediumint unsigned not null default 0 comment '部门编号'
) ENGINE = INNODB
  default charset = UTF8MB4;

show variables like 'log_bin_trust_function_creators';
set global log_bin_trust_function_creators = 1;

# 自定义一个随机字符串函数
delimiter $$
create function random_string(n int) returns varchar(255)
begin
    declare chars_str varchar(100) default 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    declare return_str varchar(255) default '';
    declare i int default 0;
    while i < n
        do
            set return_str = concat(return_str, substring(chars_str, FLOOR(1 + rand() * 52), 1));
            set i = i + 1;
        end while;
    return return_str;
end $$

# 随机数字符串
delimiter $$
create function random_num() returns int(5)
begin
    declare i int default 0;
    set i = floor(100 + rand() * 10);
    return i;
end $$;

# 创建视图  view;
delimiter $$
create procedure insert_employee(in start int(10), in max_num int(10))
begin
    declare i int default 0;
    set autocommit = 0;
    repeat
        set i = i + 1;
        insert into employee (employNo, employName, job, mgr, hireDate, salary, comm, deptNo)
        values ((start + i),
                random_string(6),
                'SALESMAN', 0001,
                CURDATE(), 2000,
                400, random_num());
    until i = max_num
        end repeat;
    commit;
end $$

# 创建视图 view2;
delimiter $$
create procedure insert_dept(in start int(10), in max_num int(10))
begin
    declare i int default 0;
    set autocommit = 0;
    repeat
        set i = i + 1;
        insert into dept(deptNo, deptName, loc) values ((start + i), random_string(10), random_string(8));
    until i = max_num
        end repeat;
    commit;
end $$


# 调用存储过程
call insert_dept(100, 10);

call insert_employee(10000, 500000);
call insert_employee(500001, 500000);
call insert_employee(1000000, 1000000);
call insert_employee(2000000, 1000000);
call insert_employee(3000000, 1000000);
call insert_employee(4000000, 1000000);
call insert_employee(5000000, 1000000);
call insert_employee(6000000, 1000000);
call insert_employee(7000000, 1000000);
call insert_employee(8000000, 1000000);
call insert_employee(9000000, 1000000);
call insert_employee(10000000, 1000000);
call insert_employee(11000000, 1000000);


select count(*)
from employee;

select *
from employee
where employName like 'MM%';

select COUNT(*)
from employee
where employName like 'MM%';

explain
select *
from employee
where employName like 'MM%';

create index index_eName on employee (employName);
drop index index_eName on employee;
SHOW INDEXES FROM employee;


drop function if exists random_string;
drop procedure if exists insert_employee;

# sql 诊断： show profiles 进行sql分析
# 远程连接执行不起作用 ? 在服务器上登入 mysql-cli 中可以生效，为什么 ?
show variables like 'profiling';
set profiling = on;
show profiles;
show profile cpu, block io for query 2;

# 慢查询日志 ，默认情况下 mysql数据库没有开启慢查询日志 需要我们手动设置这个参数
# 如果不是调优需要 一般不建议启动该参数，开启慢查询日志 或多或少会带来一定的性能影响
# 慢查询日志支持将日志记录写入文件
# 默认情况下 一个sql是否是慢查询由  long_query_time 这个参数控制，默认情况是 10s
show variables like '%slow_query_log%';
set global slow_query_log = 1;
show variables like 'long_query_time%';
set global long_query_time = 3; # 需要重新连接才可以看到变化
select sleep(4); # 测试 慢查询语句
show global status like '%Slow_queries%';

# mysqldumpslow 工具可以用来分析慢 SqL 日志文件
# mysqldumpslow  -s r  -t 10 /var/lib/mysql/VM-8-13-ubuntu-slow.log

# 全局查询日志 (永远不要在生产环境开启这个功能)
# 开启之后，你所编写的 sql 语句，将会记录到 mysql 库里的 general_log 表， 可以用下面的命令进行查看
set global general_log = 1;
set global log_output = 'TABLE';
select *
from mysql.general_log;
