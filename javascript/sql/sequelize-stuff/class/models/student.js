'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    student.hasMany(user);
  };
  return student;
};