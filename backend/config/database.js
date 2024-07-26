const mongoose = require('mongoose');  // mongoose instance 
require('dotenv').config(); 


exports.connect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> {console.log("DB Connected Succesfully")}) // agr connect hua toh yeh 
    .catch((err)=>{  // or agr nhi  hua to yeh 
        console.log(err);
        console.log("Error found ");
        process.exit(1);
    });


}
const logInSchema=new mongoose.Schema({
    name:{
        type:Object,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    password:{
        type: String, 
        required: true
    },
})
const collection1=new mongoose.model("login",logInSchema);
exports.item=collection1