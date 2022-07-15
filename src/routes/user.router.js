const express = require('express');
const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/userMiddleware');

const router = express.Router();

router.get('/', userController.findAll);

router.post('/', userMiddleware, userController.create);

module.exports = router;
