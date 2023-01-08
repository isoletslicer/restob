const routes = require('express').Router()
const UserController = require('../controllers/user-controller')



routes.post('/register', UserController.registerMethod)
routes.post('/login', UserController.loginMethod)

module.exports = routes