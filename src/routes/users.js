const express = require('express');
const usersController = require('../controllers/users');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/register', usersController.register);

router.post('/login', usersController.login);

router.post('/logout', auth, usersController.logout);

router.post('/reverify', usersController.reverifyEmail);

router.get('/verify/:verificationToken', usersController.verifyEmail);

router.get('/current', auth, usersController.getCurrent);

module.exports = router;
