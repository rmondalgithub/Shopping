const express =require('express')
const userRouter = require('../routes/userRoute')
const productRouter = require('../routes/productRoute')
const connectCloudinay = require('../config/cloudinary')
const cors = require('cors')
const cartRouter = require('../routes/cartRoute')
const orderRoute = require('../routes/orderRoute')
const app =express()
app.use(express.json());
app.use(cors())
connectCloudinay()

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRoute)


module.exports = app