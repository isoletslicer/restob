const routes = require('express').Router()
const IngredientFoodController = require('../controllers/ingredient-food-controller')
const authentification = require('../middlewares/authentification')

routes.get('/', IngredientFoodController.showAllIngredientFood)

routes.use(authentification)
routes.post('/', IngredientFoodController.addIngredientMethod)

module.exports = routes