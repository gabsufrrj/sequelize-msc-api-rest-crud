const blogPostService = require('../services/blogpost.service');

const create = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const { title, content, categoryIds } = req.body;
    const newPost = await blogPostService.create(token, title, content, categoryIds);    
    return res.status(201).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }  
};

const findAll = async (_req, res) => {
  try {
    const result = await blogPostService.findAll();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }  
};

module.exports = {
  create,
  findAll,
};