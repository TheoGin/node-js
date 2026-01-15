-- 1. =
select *
from employee
where ismale = 1;

-- 2. in
select *
from employee
where deptid in (1, 2, 5);

-- 3. is
select *
from employee
where location is null;

-- 4. is not
select *
from employee
where location is not null;


-- 5. > < >= <=
select *
from employee
where joindate >= '2016-1-1';

-- 6. between
select *
from employee
where salary between 10000 and 15000;

-- 7. like
--  7.1 一个百分号标识任意个字符
--  7.2 一个下划线表示一个字符
select *
from employee
where name like '%徐_';

-- 8. and
select *
from employee
where name like '%徐_' and salary >= 10000;

-- 9. or
select *
from employee
where salary > 19900 or joindate >= '2016-6-1';