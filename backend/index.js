// taking instance 
const express = require('express');
const app = express();
const PORT = process.config.PORT || 4000 ;
const userRoutes = require("./routes/user");
const assetRoutes = require("./routes/assetRoutes");
const cors=require("cors");


require('dotenv').config();
require('./config/database').connect();

app.use(cors());


app.use(express.json());

const user=require("./routes/user");

app.get('/',()=>{
    console.log("hii");
})

app.use('/user',user);

// Use asset routes
app.use('/assets', assetRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

// LISTENING OF APP ()
app.listen(PORT ,() => {
    console.log(`App is listening at ${PORT}`);
})
