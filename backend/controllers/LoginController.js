const express = require('express');
const mongoose = require('mongoose');
const LoginModel = require('../models/LoginModel');

exports.Register = async(req,res)=>{
    try{
        const {uname, pass, email, role, mobile_no} = req.body;
        const newUser = LoginModel({uname, pass, email, role, mobile_no});
        await newUser.save();
        console.log('The user is saved successfully', newUser);
    }catch(err){
        console.log('The user cannot save',err);
    }
}