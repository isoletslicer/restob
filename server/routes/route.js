const routes = require('express').Router();
// const authentification = require('../middlewares/authentification');
const usersRoute = require('./user-route');
const foodItemsRoute = require('./food-item-route');
const categoryFoodsRoute = require('./category-food-route');
const ingredientFoodsRoute = require('./ingredient-food-route');


routes.get("/", (req, res) => {
  res.status(200).json({ message: `Hello Masuk ke server` });
});


routes.use('/users', usersRoute);
routes.use('/items', foodItemsRoute);
routes.use('/categories', categoryFoodsRoute);
routes.use('/ingredients', ingredientFoodsRoute);


// routes.use(authentification)

module.exports = routes;