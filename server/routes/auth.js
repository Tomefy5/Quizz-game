const express = require("express");
const router = express.Router();
const registerAndLoginController = require('../controllers/registerAndLoginController');

// Route for registering
router.post('/register', registerAndLoginController.register);

// Route for login
router.post('/login', registerAndLoginController.login);

module.exports = router;