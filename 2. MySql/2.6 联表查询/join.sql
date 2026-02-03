-- 1. 笛卡尔积
select *
from company,
     user;

-- 2. 左连接，左外连接，left join（以 department 为基准）
select *
from department as d
         left join employee e
                   on d.id = e.deptid;

-- 3. 右连接，右外连接，right join（以 department 右表为基准）
select *
from employee e
         right join department d
                    on d.id = e.deptid;

-- 4. 内连接，inner join【较常用】
select *
from employee e
         inner join companydb.department d on e.deptid = d.id
         inner join companydb.company c on d.companyid = c.id;