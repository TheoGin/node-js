-- 1. 笛卡尔积
select * from company, user;

-- 2. 左连接，左外连接，left join
select * from employee e
left join department d on  e.deptid = d.id;

-- 3. 右连接，右外连接，right join
-- 4. 内连接，inner join【较常用】