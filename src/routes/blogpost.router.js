const express = require('express');
const validateJWT = require('../auth/validateJWT');
const blogPostController = require('../controllers/blogpost.controller');
const blogPostsMiddleware = require('../middlewares/blogPostsMiddleware');

const router = express.Router();

router.post('/', validateJWT, blogPostsMiddleware, blogPostController.create);

router.get('/', validateJWT, blogPostController.findAll);

router.get('/:id', validateJWT, blogPostController.findByPk);

module.exports = router;