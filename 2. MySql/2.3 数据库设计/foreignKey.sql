-- 删除错误的外键约束
ALTER TABLE student DROP FOREIGN KEY fk_student_class;

-- 添加正确的外键约束
ALTER TABLE student ADD CONSTRAINT fk_student_class
    FOREIGN KEY (class_id) REFERENCES class (id);

INSERT INTO db_test.student (stuno, name, birthday, phone, class_id)

VALUES ('2', '李四', '2026-01-01', '222', 2);

use db_test;
