const {addAdmin, deleteAdminm, updateAdmin} = require("./service/adminService");
/* addAdmin({
  name: '管理员',
  loginId: 'admin',
  loginPwd: '123'
}).then(r => {
  console.log(r);
}) */

// deleteAdmin(3)

updateAdmin(4, {
  name: "test",
  loginPwd: "123456",
}).then(r => {
  console.log(r);
});