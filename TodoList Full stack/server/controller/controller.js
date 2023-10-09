const Todos = require("../model/model");
const { param } = require("../route/route");

module.exports.home = (req,res) =>{
    console.log(res.send("Home Page"));
}

module.exports.add = async (req,res) => {
    const {task} = req.body;
    console.log(task);
    await Todos.create({task}).then((result)=>res.json(result)).catch((err)=>res.json(err))
}

module.exports.get = async (req,res) =>{
    await Todos.find().then((result)=>res.json(result)).catch((err)=>res.json(err));
}

module.exports.delete = async (req,res) =>{
    const {id} = req.params;
    await Todos.findOneAndDelete({_id:id}).then((result)=>res.json(result)).catch((err)=>res.json(err));
}

module.exports.update = async (req,res) =>{
    const {id} = req.params;
    await Todos.findByIdAndUpdate({_id:id},{done: true}).then((result)=>res.json(result)).catch((err)=>res.json(err));
}
