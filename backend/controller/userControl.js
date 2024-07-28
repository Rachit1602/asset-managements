const express = require("express");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const User = require("../models/userModel");
const jwt= require("jsonwebtoken");
require('dotenv').config();
console.log(User);

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,

    },
});

// sending mail logic 
const sendEmail = async (mailOptions) => {
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// signup logic 
const signup = async (req, res) => {
    try {
        const { firstname,middlename,lastname, email, password, role } = req.body;
        console.log(req.body);

        const mailOptions = {
            from: "yadavarpit2711@gmail.com",
            to: email,
            subject: 'Hello ✔',
            text: 'Hello world?',
            html: '<b>Hello world?</b>',
        };

        await sendEmail(mailOptions);

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const name={
            firstname,
            middlename,
            lastname,
        }

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });

        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: { name: user.name, email: user.email, role: user.role },
        });

    } catch (error) {
        console.error('Signup error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

const login = async(req, res)=>{
    const {email, password} = req.body;
    console.log(req.body);
    let checkMail= await User.findOne({email});
    if(!checkMail){
        return res.status(400).json({
            success: false,
            message: 'User Doesnot exists',
        });
    }
    const payload={
        email: checkMail.email,
        id:checkMail.id,
        role: checkMail.role
    }
    if(await bcrypt.compare(password, checkMail.password)){
        const tkn=jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:'1h'
        });
        checkMail=checkMail.toObject();
        checkMail.tkn= tkn;
        checkMail.password=undefined;
        return res.status(200).json({
            success: true,
            message: `user logged in successfully`
        })
    }else{
        return res.status(401).json({
            success: false,
            message: `password didn't match`
        })
    }

}


module.exports = { signup,login };
