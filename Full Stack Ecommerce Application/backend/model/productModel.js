//import mongoose
const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
//import schema from mongoose
const {Schema} = require("mongoose");
//create schema
const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    }
})

const Products = mongoose.model("Product",productSchema);
//export schema
module.exports = Products;