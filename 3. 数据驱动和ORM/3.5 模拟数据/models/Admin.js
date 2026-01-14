const {DataTypes} = require("sequelize");
const sequelize = require("./db");

/*
define<M extends Model, TAttributes = Attributes<M>>(
  modelName: string,
  attributes: ModelAttributes<M, TAttributes>,
  options?: ModelOptions<M>
): ModelCtor<M>
* */
// 创建一个模型对象
const Admin = sequelize.define("Admin", {
  // id 不需要写，会自动生成
  loginId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  loginPwd: {
    type: DataTypes.STRING,
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

Admin.sync({ alter: true });

module.exports = Admin