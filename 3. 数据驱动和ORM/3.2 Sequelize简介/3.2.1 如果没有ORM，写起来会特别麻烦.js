// 根据 姓名、年龄、性别 查询员工
function getEmployeeByNameAndAgeAndSex(name, age, sex) {
  // const sql = `select * from employee where name = ? and age = ? and sex = ?`;
  // 可能没有传 name, age, sex，所以不能直接拼接
  let sql = `select * from companydb.employee where 1 = 1 `; // 1 = 1 防止 直接连接 and 报错
  const params = [];

  if (name !== undefined) {
    sql += `and name = ?`;
    params.push(name);
  }

  if (age !== undefined) {
    sql += `and age = ?`;
    params.push(age);
  }

  if (sex !== undefined) {
    sql += `and sex = ?`;
    params.push(sex);
  }
  pool.excute(sql, params);
}