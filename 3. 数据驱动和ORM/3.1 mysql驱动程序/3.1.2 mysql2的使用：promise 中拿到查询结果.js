const {createConnection} = require("mysql2/promise");


(async function () {
  // function createConnection( config: ConnectionOptions ): Promise<Connection>;
  const connection =await createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "companydb",
  });

  // query<T extends QueryResult>(sql: string): Promise<[T, FieldPacket[]]>;
  const  [result, ddlField] =await connection.query(`select *
                    from companydb.company`);
  console.log(result);
  console.log(ddlField);

  connection.end();
})();
/*
[
……
  {
    id: 5,
    name: 'test',
    location: 'sz',
    buildDate: 2026-01-09T16:00:00.000Z
  }
]

[
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `location` VARCHAR(255),
  `buildDate` DATE(10) NOT NULL
]
*/
