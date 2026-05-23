const express = require('express')
const productController = require('../controllers/productController')
const uplode = require('../middleware/multer');
const adminAuth = require('../middleware/adminAuth');



const productRouter = express.Router()

productRouter.post('/add',adminAuth, uplode.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }]),
    productController.addProducts);
productRouter.get('/list', productController.listProducts);
productRouter.post('/remove',adminAuth ,productController.removeProducts);
productRouter.post('/single',adminAuth, productController.singleProducts)

module.exports = productRouter