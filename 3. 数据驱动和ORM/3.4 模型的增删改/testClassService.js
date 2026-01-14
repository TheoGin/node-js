const {addClass, updateClass, deleteClass} = require("./service/classService");

/*addClass({
  name: "test",
  openDate: '2026-1-15',
  sex: true
}).then(r => {
  console.log(r);
});*/

/*updateClass(1, {
  name: "test2",
}).then(r => {
  console.log(r);
});*/

deleteClass(1).then(r => {
  console.log(r);
});
