const {DataTypes} = require("sequelize");
const sequelize = require("./db");

const Student = require("./Student");

// 创建一个模型对象  `sequelize.define` 会返回模型
const Class = sequelize.define("Class", {
  // id 不需要写，会自动生成
  openDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  createdAt: false,
  updatedAt: false,
  // paranoid   妄想的（删除）
  paranoid: true, // 从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
});

// 关系
Class.hasMany(Student);
// Student.belongsTo(Class)

// module.export = Class;
module.exports = Class;