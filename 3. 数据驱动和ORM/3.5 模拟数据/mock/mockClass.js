const Mock = require("mockjs");
const Class = require("../models/Class");

const data = Mock.mock({
  "data|1-100": [{
    'id|+1':1,
    name: "第 @id 期",
    openDate: "@date",
  }],
}).data;
// console.log(data);
Class.bulkCreate(data)
