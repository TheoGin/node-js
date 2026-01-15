const Class = require("../models/Class");

exports.addClass = async function (classObj) {
  const classInstance = await Class.create(classObj);
  return classInstance.toJSON();
};

exports.updateClass = async function (classId, classObj) {
  return await Class.update(classObj, {
    where: {
      id: classId,
    }
  });
};

exports.deleteClass = async function (classId) {
  return await Class.destroy({
    where: {
      id: classId,
    }
  });
};

