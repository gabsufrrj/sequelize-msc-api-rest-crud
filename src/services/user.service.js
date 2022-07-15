const { User } = require('../database/models');

const findAll = async () => {
  const result = await User.findAll();
  return result;
};

const create = async (displayName, email, password, image) => {
  const result = await User.create({ displayName, email, password, image });
  return result;
};

module.exports = {
  findAll,
  create,
};