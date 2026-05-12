const express = require('express')
const productController = require('../Controller/productController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const productRoute= express.Router()


// productRoute.post('/api/addProduct',jwtMiddleware,productController.addProduct)
productRoute.post('/api/addProduct',productController.addProduct)



module.exports=productRoute