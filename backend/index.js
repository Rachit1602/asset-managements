// taking instance 
const express = require('express');
const app = express();
const PORT = process.config.PORT || 4000 ;
const userRoutes = require("./routes/user");

require('dotenv').config();
require('./config/database').connect();

app.use(cors());


app.use(express.json());
const user=require("./routes/user");
app.get('/',()=>{
    console.log("hii");
})
app.use('/user',user);
app.get('/api',(req,res)=>{
    res.json({"users":[1,2,3]});
})
// LISTENING OF APP ()
app.listen(PORT ,() => {
    console.log(`App is listening at ${PORT}`);
})

