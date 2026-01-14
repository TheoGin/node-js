const Student = require("../models/Student");

exports.addStudent = async function (studentObj) {
  const studentInstance = await Student.create(studentObj);
  return studentInstance.toJSON();
};

exports.updateStudent = async function (studentId, studentObj) {
  return await Student.update(studentObj, {
    where: {
      id: studentId,
    }
  });
};

exports.deleteStudent = async function (studentId) {
  return await Student.destroy({
    where: {
      id: studentId,
    }
  });
};

