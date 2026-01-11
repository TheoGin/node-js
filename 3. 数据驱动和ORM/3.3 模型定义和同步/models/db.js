const {Sequelize} = require("sequelize");

// constructor(database: string, username: string, password?: string, options?: Options);
const sequelize = new Sequelize("myschooldb", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

// 使用 .authenticate() 函数测试连接是否正常
// sequelize.authenticate(); // Executing (default): SELECT 1+1 AS result 连接成功
// 没有使用会自动断开连接

module.exports = sequelize;