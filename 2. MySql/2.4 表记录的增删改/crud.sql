# 1. 增 CREATE
-- 1.1 插入一行
insert into student(stuno, name, birthday, phone, class_id)
values('1010', '小傅', '2026-01-02', '10086', 2);

-- 1.2 插入多行
insert into student(stuno, name, birthday, phone, class_id)
values('1013', '小1', '2026-01-01', '10011', 2),
      ('1011', '大傅', '2026-01-03', '1008611', 1);

insert into user_info(name, age, sex) values('Tim', 18, default);

# 2. 查 Retrieve
select * from student;

# 3. 改 UPDATE
update student set name = '小钱' where id = 14;

# 4. 删 DELETE
delete from student where id = 15;