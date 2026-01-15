const Mock = require("mockjs");
const Student = require("../models/Student");

const data = Mock.mock({
  "data|500-700": [{
    name: "@cname",
    birthday: "@date",
    "sex|1-2": true,
    mobile: /1\d{10}/,
    // "classId|1-15": 1,
    "ClassId|1-15": 1,
  }],
}).data;
console.log(data);
Student.bulkCreate(data);
