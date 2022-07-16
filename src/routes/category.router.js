const express = require('express');
const validateJWT = require('../auth/validateJWT');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.post('/', validateJWT, categoryController.create);

router.get('/', validateJWT, categoryController.findAll);

module.exports = router;
