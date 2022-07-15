const categoryService = require('../services/category.service');

const create = async (req, res) => {
  const { name } = req.body;
  
  if (!name) return res.status(400).json({ message: '"name" is required' });

  try {
    const createdCategory = await categoryService.create(name);
    res.status(201).json(createdCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { create };