const express = require('express');
const validateJWT = require('../auth/validateJWT');
const blogPostController = require('../controllers/blogpost.controller');
const blogPostsMiddleware = require('../middlewares/blogPostsMiddleware');

const router = express.Router();

router.post('/', validateJWT, blogPostsMiddleware, blogPostController.create);

module.exports = router;