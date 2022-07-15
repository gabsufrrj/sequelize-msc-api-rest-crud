const { User } = require('../database/models');

const findAll = async () => {
  const result = await User.findAll({
    attributes: { exclude: 'password' },
  });
  return result;
};

const findOne = async (email) => {
  const result = await User.findOne(email);
  return result;
};

const create = async (displayName, email, password, image) => {
  const result = await User.create({ displayName, email, password, image });
  return result;
};

module.exports = {
  findAll,
  create,
  findOne,
};