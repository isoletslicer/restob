const { Item, User, Ingredient, Category, ItemIngredient } = require('../models')

class IngredientFoodController {
  static async showAllIngredientFood(req, res, next) {
    try {
      const listIngredientFoods = await Ingredient.findAll()
      res.status(200).json(listIngredientFoods);
    } catch (error) {
      next(error)
    }
  }

  static async addIngredientMethod(req, res, next) {
    try {
      const { name } = req.body

      const isIngredientAlready = await Ingredient.findOne({ where: { name } })
      //console.log(isIngredientAlready)
      if (isIngredientAlready) {
        throw { name: 'Ingredient_Already' }
      }
      const createdIngredient = await Ingredient.create({ name })
      res.status(201).json({ message: `Sukses menambahkan ingredient baru ${createdIngredient.name}` })

    } catch (error) {
      //console.log(error)
      next(error)
    }
  }
}

module.exports = IngredientFoodController;



