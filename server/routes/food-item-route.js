const routes = require('express').Router()
const FoodItemController = require('../controllers/food-item-controller')
const authentification = require('../middlewares/authentification')


routes.get('/', FoodItemController.showAllFoodItems)
routes.get('/:id', FoodItemController.showFoodItemById)
routes.use(authentification)
routes.post('/', FoodItemController.addItemMethod)
routes.put('/:id', FoodItemController.editItemMethod)
routes.delete('/:id', FoodItemController.deleteItemMethod)

module.exports = routes