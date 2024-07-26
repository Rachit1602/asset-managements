// taking instance 
const express = require('express');
const app = express();
const PORT = process.config.PORT || 4000 ;
const userRoutes = require("./routes/user");
const collection=require("./config/database")
app.use("/api/v1", userRoutes);

require('dotenv').config();
require('./config/database').connect();





app.use(express.json());

// LISTENING OF APP ()
app.listen(PORT ,() => {
    console.log(`App is listening at ${PORT}`);
})

