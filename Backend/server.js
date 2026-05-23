require('dotenv').config()
const app =require('./src/app')
const connectDB = require('./config/db')
connectDB()

app.listen(3001,()=>{
    console.log("port 3001 start")
})
 