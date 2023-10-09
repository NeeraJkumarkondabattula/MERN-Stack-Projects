const mongoose = require("mongoose");

const mongo = "mongodb+srv://neerajkumarkondabattula:12345@cluster0.uoc1u1i.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongo).then(()=>console.log("DB Connected Successfully")).catch((err)=>console.log("Error while Connecting to DB!"))