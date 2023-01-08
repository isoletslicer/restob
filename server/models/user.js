'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt-password');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item, {
        foreignKey: "authorId",
      });
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "Username must be unique",
      },
      allowNull: false,
      validate: {
        notNull: { msg: "Username is required" },
        notEmpty: { msg: "Username is required" },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "Email must be unique",
      },
      allowNull: false,
      validate: {
        notNull: { msg: "Email is required" },
        notEmpty: { msg: "Email is required" },
        isEmail: { msg: "Email should be email format (@)" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Password is required" },
        notEmpty: { msg: "Password is required" },
        len: {
          args: [5],
          msg: "Password must be at least 5 characters",
        },
      },
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user, option) => {
    user.password = hashPassword(user.password)
  })
  return User;
};