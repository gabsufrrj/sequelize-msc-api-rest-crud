const express = require('express');
const loginController = require('../controllers/login.controller');
const loginMiddleware = require('../middlewares/loginMiddleware');

const router = express.Router();

router.post('/', loginMiddleware, loginController.createLogin);

module.exports = router;
