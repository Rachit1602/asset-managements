const express = require("express");
const router = express.Router();

const userControl=require("../controller/userControl");
router.post("/signup",userControl.signup)
module.exports = router;
