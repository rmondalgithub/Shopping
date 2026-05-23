const orderModel = require("../models/order.model");
const userModel = require("../models/user.model");

const placeOrder = async (req, res) => {

    try {

        const { userId, items, amount, address,paymentMethod} = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod,
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true, message:"Order placed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

const placeOrderScript = async (req, res) => {

}

const placeOrderPay = async (req, res) => {

}

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

const userOrders = async (req, res) => {

    try {

        const {userId} = req.body;
        const orders = await orderModel.find({userId})
        res.json({success:true ,orders})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

const updateStatus = async (req, res) => {

    try {
        const {status,orderId} = req.body
         await orderModel.findByIdAndUpdate(orderId,{status})
         res.json({success:true, message:"Status Update"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}
module.exports = { placeOrder, placeOrderPay, placeOrderScript, allOrders, userOrders, updateStatus }