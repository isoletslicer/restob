'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.User, {
        foreignKey: "authorId",
      });
      Item.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
      Item.belongsToMany(models.Ingredient, {
        through: models.ItemIngredient,
        foreignKey: "ItemId",
      });

    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Name is required" },
        notEmpty: { msg: "Name is required" },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Description is required" },
        notEmpty: { msg: "Description is required" },
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Price is required" },
        notEmpty: { msg: "Price is required" },
        min: {
          args: 10000,
          msg: "Minimum price is Rp. 10000",
        },
      },
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Image URL is required" },
        notEmpty: { msg: "Image URL is required" },
      },
    },
    authorId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};