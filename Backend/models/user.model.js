const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String, requrequired:true},
    email:{type:String, requrequired:true, unique:true},
    password:{type:String, requrequired:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel