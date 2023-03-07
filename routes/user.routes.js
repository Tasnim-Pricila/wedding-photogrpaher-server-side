const express = require('express');
const userController = require('../controller/user.controller');
const userRoute = express.Router();

userRoute.post('/users/register', userController.register)
userRoute.post('/users/login', userController.login)
userRoute.get('/users/:email', userController.getUser)
userRoute.get('/user/:id', userController.getUserById)

module.exports = userRoute;