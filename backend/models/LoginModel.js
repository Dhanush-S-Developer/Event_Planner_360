// models/LoginModel.js
const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    uname: { type: String, required: true },
    pass: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    mobile_no: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

module.exports = LoginModel;
