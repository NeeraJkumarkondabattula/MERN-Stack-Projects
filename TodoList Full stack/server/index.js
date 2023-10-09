const express = require("express");

const cors = require("cors");

const port = 8000;

const app = express();

const db = require("./config/mongoose");

const router = require("./route/route")

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use("/",router)

app.listen(port,(err)=>{
    if(err){
        console.log("Error while Creating Server!");
    }
    console.log("Server Created Successfully to Port : ",port);
})