const categoriesService = require('../services/category.service');

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
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  next();
};

module.exports = {
  blogPostMiddleware,
  updateMiddleware,
};