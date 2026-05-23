const express = require('express')
const userController = require('../controllers/userController')
const userRouter = express.Router();


userRouter.post('/login',userController.loginUser)
userRouter.post('/register',userController.registerUser)
userRouter.post('/admin',userController.adminUser)

module.exports = userRouter