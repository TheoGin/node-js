
const {createPool} = require("mysql2/promise");
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "companydb",
  multipleStatements: true, // Allow multiple mysql statements per query. Be careful with this, it exposes you to SQL injection attacks. (Default: false)
});

async function test(idOrName) {
  // const sql = `select * from companydb.company where id = ${id}`;
  // 如果有模糊查询，可以用 concat
  const sql = `select * from companydb.employee where \`name\` like concat('%', ?, '%')`;

  console.log(sql);
  // const [result] = await pool.query(sql, [idOrName]);
  const [result] = await pool.execute(sql, [idOrName]);
  console.log(result);

  pool.end();
}
// 用 pool.execute，有多条语句，会报错
// test(`5; select * from companydb.company;`); // SQL injection
// Error: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'select * from companydb.company' at line 3
// test(`5`); // 一条语句才能正常查询出结果
test(`袁`); // 一条语句才能正常查询出结果

/*
[
  {
    id: 6,
    name: '袁紫',
    location: '天府一街',
    ismale: 0,
    joinDate: 2000-06-03T16:00:00.000Z,
    salary: '6208.43',
    deptId: 2,
    birthday: 1992-05-02T16:00:00.000Z
  },
  ……
]
*/
