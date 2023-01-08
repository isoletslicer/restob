const routes = require('express').Router()
const CategoryFoodController = require('../controllers/category-food-controller')
const authentification = require('../middlewares/authentification')


routes.get('/', CategoryFoodController.showAllCategoryFood)
routes.get('/:id', CategoryFoodController.showCategoryFoodById)

routes.use(authentification)
routes.post('/', CategoryFoodController.addCategoryMethod)
routes.put('/:id', CategoryFoodController.editCategoryMethod)
routes.delete('/:id', CategoryFoodController.deleteCategoryMethod)

module.exports = routes