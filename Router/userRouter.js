const express = require('express')
const userController = require('../Controller/userController')
const { registerUser } = require('../Controller/userController')

const userRoute= express.Router()


userRoute.post('/api/register',userController.registerUser)
userRoute.post('/api/login',userController.loginUser)
// Google Login
userRoute.post('/api/googleLogin',userController.googleloginUser)



module.exports=userRoute