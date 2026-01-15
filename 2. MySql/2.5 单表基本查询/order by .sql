-- 1、先按薪水降序，再按部门id升序（可能后者无效）
select *
from employee
order by salary desc, deptid asc;

-- 2、order by：可以用select中的别名
select name,
       case ismale
           when 1 then '男'
           else '女'
           end sex
from employee
order by sex desc;