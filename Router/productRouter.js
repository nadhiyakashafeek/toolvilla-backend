const express = require('express')
const productController = require('../Controller/productController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const productRoute= express.Router()
const multerMiddleware = require('../middlewares/multerMiddleware')


// productRoute.post('/api/addProduct',jwtMiddleware,productController.addProduct)
productRoute.post('/api/addProduct',jwtMiddleware,multerMiddleware.array('images',3),productController.addProduct)



module.exports=productRoute