// import Products from "../model/productModel";
const Products = require("../model/productModel");

module.exports.home = (req,res) =>{
    console.log(res.send("Home Page"));
}

//adding products 
module.exports.createProduct = async (req,res) =>{
    try{
        const {name,discription,rating,price,image} = req.body;
        console.log("req",req.body);

        if(!name || !discription || !rating || !image || !price){
            return res.status(201).json({
                messsage:"Please Fill All Required Fields!!",
                data:{}
            });
        }
        
        const createProduct = await Products.create({
            name,
            discription,
            price,
            rating,
            image
        });
        // console.log(res.send(data));
        return res.status(201).json({
            message: "Record Created Successfully",
            products:[createProduct],
        })
    }catch(err){
        if(err.code===11000){
            return res.status(400).json({
                message: "Please Provide Unique Student ID",
                products: {}
            });
        }
        // console.log(err);
        return res.status(500).json({
            message: "Something went wrong while Creating record",
            products: {}
        });
    }
}

module.exports.sortProducts= async(req,res) =>{
    try{
        const data = await Products.find().sort({price:1})
        
        return res.status(200).json({
            message: "Fetched all records",
            products: data
        })
    }catch(err){
        return res.status(500).json({
            message: "Something went wrong fetching all records",
            products: {}
        })
    }
}

//get all products
module.exports.products = async (req,res) =>{
    try{
        const data = await Products.find({})
        
        return res.status(200).json({
            message: "Fetched all records",
            products: data
        })
    }catch(err){
        return res.status(500).json({
            message: "Something went wrong fetching all records",
            products: {}
        })
    }
}

//delete product by ID
module.exports.deleteProduct = async (req,res) =>{
    try{
        const {id} = req.params;
        const deletedProduct = await Products.findByIdAndDelete(id);
        if(!deletedProduct){
            return res.status(404).json({
                message: "No record found with given ID",
                products:{}
            })
        }
        return res.status(200).json({
            message: "Record deleted Successfully",
            products :deletedProduct
        })
    }catch(err){
        return res.status(500).json({
            message: "Something went wrong while Deleting record",
            products: {}
        });
    }
}

//update product quantity by ID
module.exports.updateProduct = async (req,res) =>{
    try{
        const {id} = req.params;
        const {discription,rating,name,price,image} = req.body;
        // if(!){
        //     return res.status(400).json({
        //         message: "Please send all the required fields",
        //         data: {}
        //     })
        // }
        const updateProduct = await Products.findByIdAndUpdate(
            id,
            {
                name,
                discription,
                price,
                rating,
                image
            },{
                new : true
            }
        )
        if(!updateProduct){
            return res.status(404).json({
                message: "No record found with the given ID",
                products: {}
            })        
        }
        return res.status(200).json({
            message: "Record updated successfully",
            products: updateProduct
        })
    }catch{
        return res.status(500).json({
            message: "Something went wrong while updating record",
            products: {}
        })
    }
}