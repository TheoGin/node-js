const {createConnection} = require("mysql2");

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "companydb",
});

/*
query<T extends QueryResult>(
  sql: string,
  callback?:
    | ((err: QueryError | null, result: T, fields: FieldPacket[]) => any)
    | undefined
): Query;
* */
/*connection.query(`select *
                  from company`, (err, result) => {
  // err错误
  // result查询结果
  console.log(result);
});*/
/*
[
……
{
  id: 4,
  name: 'test',
  location: 'sz',
  buildDate: 2026-01-09T16:00:00.000Z
}
]
*/

/*connection.query(`insert into companydb.company(name, location, buildDate) values('test', 'sz', curdate())`, (err, result) => {
  // err错误
  // result查询结果
  console.log(result);
});*/
/*
ResultSetHeader {
affectedRows: 1,
……
}
* */

/*connection.query(`update companydb.company set name = 'test11' where id = 4`, (err, result) => {
  // err错误
  // result查询结果
  console.log(result);
});*/
/*
ResultSetHeader {
affectedRows: 1,
……
}
* */

connection.query(`delete from companydb.company where id = 4`, (err, result) => {
  // err错误
  // result查询结果
  console.log(result);
});
/*
ResultSetHeader {
affectedRows: 1,
……
}
* */