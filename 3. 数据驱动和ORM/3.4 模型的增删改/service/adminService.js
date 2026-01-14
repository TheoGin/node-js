// 管理员初始化
// 判断数据库中是否有管理员，如果没有，自动添加一个默认管理员
const Admin = require("../models/Admin");

exports.addAdmin = async function (adminObj) {
  // 应该判断adminObj的各种属性是否合理，以及账号是否已存在
  const adminInstance = await Admin.create(adminObj);
  return adminInstance.toJSON();
};

exports.deleteAdmin = async function (adminId) {
  // 方式1
  /*const adminInstance =await Admin.findByPk(adminId);
  if (adminInstance) {
   // public destroy(options?: InstanceDestroyOptions): Promise<void>;
   await adminInstance.destroy();
  }*/

  // 方式2
  /*
  public static destroy<M extends Model>(
    this: ModelStatic<M>,
    options?: DestroyOptions<Attributes<M>>
  ): Promise<number>;
  * */
  // const affectRow = await Admin.destroy({
  await Admin.destroy({
    where: {
      id: adminId,
    },
  }); // 返回值是影响的行数
  return affectRow;
};

exports.updateAdmin = async function (adminId, adminObj) {
  // 方式 1
  // 1. 得到实例
  /*const adminInstance = await Admin.findByPk(adminId);
  adminInstance.name = "超级管理员";
  adminInstance.loginId = "superAdmin";
  adminInstance.loginPwd = "123456";
 return await adminInstance.save();*/

  // 2. 保存
  /*
  public static update<M extends Model>(
    this: ModelStatic<M>,
    values: {
        [key in keyof Attributes<M>]?: Attributes<M>[key] | Fn | Col | Literal;
    },
    options: UpdateOptions<Attributes<M>>
  ): Promise<[affectedCount: number]>;
  * */
 return await Admin.update(adminObj, {
    where: {
      id: adminId,
    },
  }); // [ 1 ] 返回的是一个数组，里面放在影响的行数
};