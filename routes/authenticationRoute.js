const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');


router.get('/login',authController.loginUser);
router.get('/users',authController.getallUsers);
router.post('/register',authController.registerUser);


module.exports = router;