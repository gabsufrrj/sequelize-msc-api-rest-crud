const express = require('express');
const validateJWT = require('../auth/validateJWT');
const blogPostController = require('../controllers/blogpost.controller');
const blogPostsMiddleware = require('../middlewares/blogPostsMiddleware');

const router = express.Router();

router.post('/', validateJWT, blogPostsMiddleware.blogPostMiddleware, blogPostController.create);

router.get('/search', validateJWT, blogPostController.searchQuery);

router.get('/', validateJWT, blogPostController.findAll);

router.get('/:id', validateJWT, blogPostController.findByPk);

router.put('/:id', validateJWT, blogPostsMiddleware.updateMiddleware, blogPostController.update);

router.delete('/:id', 
validateJWT,
blogPostsMiddleware.deleteMiddleware, 
blogPostController.destroy);

module.exports = router;