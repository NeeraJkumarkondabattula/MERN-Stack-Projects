const mongoose = require("mongoose");

const {Schema} = require("mongoose");

const todoSchema =  new Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})

const Todos = mongoose.model("Todos",todoSchema);

module.exports = Todos;