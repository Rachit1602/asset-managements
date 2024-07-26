const express =require("express");
const { default: mongoose } = require("mongoose");
const signupSchema = mongoose.Schema({

    name: {
        type:Object,
        require:true
    }
    ,

    email: {
        type:String,
        require:true
    }
,
    password: {
        type:String,
        require:true
    }
,
    role: {
        type:String,
        require:true
    }

}
)
 
const collection = mongoose.model("User",signupSchema);
module.exports = collection