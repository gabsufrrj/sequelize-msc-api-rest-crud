const { Category } = require('../database/models');

const create = async (name) => {
  const result = await Category.create({ name });
  return result;
};

module.exports = { create };