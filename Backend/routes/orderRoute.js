const express = require('express')
const { allOrders, updateStatus, placeOrder, placeOrderScript, placeOrderPay, userOrders } = require('../controllers/orderController')
const adminAuth = require('../middleware/adminAuth')
const authUser = require('../middleware/auth')

const orderRoute = express.Router()

orderRoute.post('/list',adminAuth,allOrders)
orderRoute.post('/status',adminAuth,updateStatus)

orderRoute.post('/place',authUser,placeOrder)
orderRoute.post('/script',authUser,placeOrderScript)
orderRoute.post('/pay',authUser,placeOrderPay)

orderRoute.post('/userorder',authUser,userOrders)

module.exports = orderRoute