-- 1、【登录】查询user表，得到账号为admin，密码为123123的用户
select *
from user
where loginid = 'admin'
  and loginpwd = '123123';

-- 2、【分页】查询员工表，按照员工的入职时间降序排序，并且使用分页查询：查询第 3 页，每页 5 条数据
select *
from employee
order by joindate desc
limit 10, 5;
-- 【公式】 limit (page - 1) * pageSize, pageSize

-- 3、【巧用 order by 】查询工资最高的女员工
select * from employee
where ismale = 0
order by salary desc
limit 0, 1;
-- 从 0 开始，拿一条