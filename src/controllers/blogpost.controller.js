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

const findByPk = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await blogPostService.findByPk(id);
    if (!result) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }  
};

const update = async (req, res) => {
  try {
    const { id } = req.params;    
    const { title, content } = req.body;
    const result = await blogPostService.update(id, title, content);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;    
    await blogPostService.destroy(id);
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const searchQuery = async (req, res) => {
  try {
    const { q } = req.query;
    if (q === '') {
      const result = await blogPostService.findAll();
      return res.status(200).json(result);
    }
    const result = await blogPostService.searchQuery(q);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

module.exports = {
  create,
  findAll,
  findByPk,
  update,
  destroy,
  searchQuery,
};