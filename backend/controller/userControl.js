const express = require("express");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const User = require("../models/userModel");
require('dotenv').config();
console.log(User);
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,

    },
});

const sendEmail = async (mailOptions) => {
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        console.log(req.body);

        const mailOptions = {
            from: "yadavarpit2711@gmail.com",
            to: "rachit279narang@gmail.com",
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

module.exports = { signup };
