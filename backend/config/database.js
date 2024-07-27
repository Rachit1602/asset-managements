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
    })
}