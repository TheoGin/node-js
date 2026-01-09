/*
 Navicat Premium Dump SQL

 Source Server         : localhost-mysql
 Source Server Type    : MySQL
 Source Server Version : 80044 (8.0.44)
 Source Host           : localhost:3306
 Source Schema         : db_test

 Target Server Type    : MySQL
 Target Server Version : 80044 (8.0.44)
 File Encoding         : 65001

 Date: 09/01/2026 22:34:17
*/

set names utf8mb4;
set FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for buy_product_car
-- ----------------------------
drop table if exists `buy_product_car`;
create table `buy_product_car`
(
    `id`          int  not null auto_increment,
    `create_date` date null default null,
    `car_id`      int  not null,
    `product_id`  int  not null,
    primary key (`id`) using btree
) engine = InnoDB
  auto_increment = 4
  character set = utf8mb4
  collate = utf8mb4_0900_ai_ci
  row_format = dynamic;

-- ----------------------------
-- Records of buy_product_car
-- ----------------------------
insert into `buy_product_car`
values (1, '2026-01-08', 1, 2);
insert into `buy_product_car`
values (2, '2026-01-02', 1, 1);
insert into `buy_product_car`
values (3, '2026-01-14', 2, 1);

-- ----------------------------
-- Table structure for car
-- ----------------------------
drop table if exists `car`;
create table `car`
(
    `id`   int                                                           not null auto_increment,
    `name` varchar(255) character set utf8mb4 collate utf8mb4_0900_ai_ci not null,
    primary key (`id`) using btree
) engine = InnoDB
  auto_increment = 3
  character set = utf8mb4
  collate = utf8mb4_0900_ai_ci
  row_format = dynamic;

-- ----------------------------
-- Records of car
-- ----------------------------
insert into `car`
values (1, '购物车1');
insert into `car`
values (2, '购物车2');

-- ----------------------------
-- Table structure for class
-- ----------------------------
drop table if exists `class`;
create table `class`
(
    `id`        int                                                          not null auto_increment,
    `classname` varchar(25) character set utf8mb4 collate utf8mb4_0900_ai_ci not null,
    primary key (`id`) using btree
) engine = InnoDB
  auto_increment = 3
  character set = utf8mb4
  collate = utf8mb4_0900_ai_ci
  row_format = dynamic;

-- ----------------------------
-- Records of class
-- ----------------------------
insert into `class`
values (1, '班级1');
insert into `class`
values (2, '班级2');

-- ----------------------------
-- Table structure for product
-- ----------------------------
drop table if exists `product`;
create table `product`
(
    `id`   int                                                           not null auto_increment,
    `name` varchar(255) character set utf8mb4 collate utf8mb4_0900_ai_ci not null,
    primary key (`id`) using btree,
    unique index `product_pk` (`id` asc) using btree
) engine = InnoDB
  auto_increment = 3
  character set = utf8mb4
  collate = utf8mb4_0900_ai_ci
  row_format = dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
insert into `product`
values (1, 'Mac');
insert into `product`
values (2, '苹果手机');

-- ----------------------------
-- Table structure for student
-- ----------------------------
drop table if exists `student`;
create table `student`
(
    `id`       int                                                           not null auto_increment,
    `stuno`    varchar(255) character set utf8mb4 collate utf8mb4_0900_ai_ci not null,
    `name`     varchar(255) character set utf8mb4 collate utf8mb4_0900_ai_ci not null,
    `birthday` date                                                          not null,
    `phone`    varchar(11) character set utf8mb4 collate utf8mb4_0900_ai_ci  not null,
    `class_id` int                                                           not null,
    primary key (`id`) using btree,
    index `fk_student_class` (`class_id` asc) using btree,
    constraint `fk_student_class` foreign key (`class_id`) references `class` (`id`) on delete restrict on update restrict
) engine = InnoDB
  auto_increment = 16
  character set = utf8mb4
  collate = utf8mb4_0900_ai_ci
  row_format = dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
insert into `student`
values (1, '1', '张三', '2026-01-15', '111', 1);
insert into `student`
values (11, '2', '李四', '2026-01-01', '222', 2);
insert into `student`
values (12, '3', '王五', '2026-01-08', '223', 1);
insert into `student`
values (13, '1010', '小傅', '2026-01-02', '10086', 2);
insert into `student`
values (14, '1013', '小钱', '2026-01-01', '10011', 2);

-- ----------------------------
-- Table structure for user
-- ----------------------------
drop table if exists `user`;
create table `user`
(
    `id`       int                                                           not null auto_increment,
    `loginId`  varchar(255) character set utf8mb4 collate utf8mb4_0900_ai_ci not null,
    `loginPwd` varchar(255) character set utf8mb4 collate utf8mb4_0900_ai_ci not null,
    primary key (`id`) using btree,
    constraint `user_ibfk_1` foreign key (`id`) references `user_info` (`id`) on delete restrict on update restrict
) engine = InnoDB
  auto_increment = 4
  character set = utf8mb4
  collate = utf8mb4_0900_ai_ci
  row_format = dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
insert into `user`
values (1, 'theo', '123');
insert into `user`
values (2, 'jack', '123456');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
drop table if exists `user_info`;
create table `user_info`
(
    `id`   int                                                           not null auto_increment,
    `name` varchar(255) character set utf8mb4 collate utf8mb4_0900_ai_ci not null,
    `age`  int                                                           not null,
    `sex`  bit(1)                                                        not null default b'1',
    primary key (`id`) using btree
) engine = InnoDB
  auto_increment = 3
  character set = utf8mb4
  collate = utf8mb4_0900_ai_ci
  row_format = dynamic;

-- ----------------------------
-- Records of user_info
-- ----------------------------
insert into `user_info`
values (1, 'Tim', 18, b'1');
insert into `user_info`
values (2, 'Jack', 19, b'1');

set FOREIGN_KEY_CHECKS = 1;
