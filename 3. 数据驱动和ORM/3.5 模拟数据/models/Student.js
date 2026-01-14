const {DataTypes} = require("sequelize");
const sequelize = require("./db");

// 创建一个模型对象  `sequelize.define` 会返回模型
const Student = sequelize.define("Student", {
  // id 不需要写，会自动生成
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  sex: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING(11),
    allowNull: false,
  },
}, {
  createdAt: false,
  updatedAt: false,
  // paranoid   妄想的（删除）
  paranoid: true, // 从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
});

/*const Class = require('./Class');
// 关系
Student.belongsTo(Class)*/

module.exports = Student;