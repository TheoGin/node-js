const {addStudent, updateStudent, deleteStudent} = require("./service/studentService");

/*addStudent({
  name: "test",
  mobile: "10086",
  imageUrl: 'testUrl',
  birthday: '2026-1-15',
  sex: true
}).then(r => {
  console.log(r);
});*/

/*updateStudent(1, {
  name: "test2",
  mobile: "1008611",
}).then(r => {
  console.log(r);
});*/

deleteStudent(1).then(r => {
  console.log(r);
});
