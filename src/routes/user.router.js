const express = require('express');
const validateJWT = require('../auth/validateJWT');
const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/userMiddleware');

const router = express.Router();

router.get('/', validateJWT, userController.findAll);

router.post('/', userMiddleware.userMiddleware, 
userMiddleware.emailMiddleware, userController.create);

module.exports = router;
