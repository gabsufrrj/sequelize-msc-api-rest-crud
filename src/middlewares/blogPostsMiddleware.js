const jwt = require('jsonwebtoken');
const categoriesService = require('../services/category.service');
const blogPostService = require('../services/blogpost.service');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const blogPostMiddleware = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const allCategories = await categoriesService.findAll();

  const validation = allCategories.some((category) => categoryIds.includes(category.id));

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }    
  if (!validation) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
 
  next();
};

const updateMiddleware = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const { data } = jwt.verify(token, secret);    
  const loggedUser = await blogPostService.findByPk(id);

  if (loggedUser.userId !== data.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const deleteMiddleware = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const { data } = jwt.verify(token, secret);    
  const loggedUser = await blogPostService.findByPk(id);  

  if (!loggedUser) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  if (loggedUser.userId !== data.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }   

  next();
};

module.exports = {
  blogPostMiddleware,
  updateMiddleware,
  deleteMiddleware,
};