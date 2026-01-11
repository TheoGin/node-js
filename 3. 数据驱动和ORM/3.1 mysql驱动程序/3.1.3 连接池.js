// function createPool(config: PoolOptions): Pool;
/*interface PoolOptions extends ConnectionOptions {
{
  // Determines the pool's action when no connections are available and the limit has been reached. If true, the pool will queue the connection request and call it when one becomes available. If false, the pool will immediately call back with an error.(Default: true)
  waitForConnections ? : boolean;

  // The maximum number of connections to create at once. (Default: 10)
  connectionLimit ? : number;

  // The idle connections timeout, in milliseconds. (Default: 60000)
  idleTimeout ? : number;

  // The maximum number of connection requests the pool will queue before returning an error from getConnection. If set to 0, there is no limit to the number of queued connection requests. (Default: 0)
  queueLimit ? : number;
}*/

const {createPool} = require("mysql2/promise");
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "companydb",
  multipleStatements: true, // Allow multiple mysql statements per query. Be careful with this, it exposes you to SQL injection attacks. (Default: false)
});

async function test(id) {
  const sql = `select * from companydb.company where id = ${id}`;

  console.log(sql);
  const [result] = await pool.execute(sql, [id]);
  console.log(result);

  pool.end();
}

test(`5; select * from companydb.company;`); // SQL injection
/*
[
  [
    {
      id: 5,
      name: 'test',
      location: 'sz',
      buildDate: 2026-01-09T16:00:00.000Z
    }
  ],
  [
  ……
    {
      id: 5,
      name: 'test',
      location: 'sz',
      buildDate: 2026-01-09T16:00:00.000Z
    }
  ]
]
*/
