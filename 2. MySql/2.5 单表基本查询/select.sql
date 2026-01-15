use companydb;

SELECT id, loginid, loginpwd, 'abc' as '额外的一列' from `user`;

select  ismale as '性别'
    from employee;

select *, 'abc' extra from employee;

select `name`,
       -- case 和 end 成对出现
       case ismale
           when 1 then '男'
           else '女'
           end
       as '性别', -- as 可以省略
       location
from employee;

select `name`,
       case ismale
           when 1 then '男'
           else '女'
           end
       as sex,
    case
        when salary >= 10000 then '高'
        when salary >= 5000 then '中'
        else '低'
        end
        `level`,
       location
from employee;