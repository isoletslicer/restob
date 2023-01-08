'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemIngredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemIngredient.belongsTo(models.Ingredient);
      ItemIngredient.belongsTo(models.Item);
    }
  }
  ItemIngredient.init({
    IngredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Ingredient ID is required" },
        notEmpty: { msg: "Ingredient ID is required" },
      },
    },
    ItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Item ID is required" },
        notEmpty: { msg: "Item ID is required" },
      },
    },
  }, {
    sequelize,
    modelName: 'ItemIngredient',
  });
  return ItemIngredient;
};