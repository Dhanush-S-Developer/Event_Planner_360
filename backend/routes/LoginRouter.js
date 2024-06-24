const express = require('express');
const controller = require('../controllers/LoginController');

const router = express.Router();

router.post('/register',controller.Register);

module.exports = router;
