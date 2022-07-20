const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

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

const findByPk = async (id) => {
  const result = await User.findByPk(id, {
    attributes: { exclude: 'password' },
  }); 
  return result;
};

const create = async (displayName, email, password, image) => {
  const result = await User.create({ displayName, email, password, image });
  return result;
};

const destroy = async (token) => {
  const { data } = jwt.verify(token, secret);
  const foundUser = await findByPk(data.id);
  console.log(foundUser);
  const { id } = foundUser;
  const result = await User.destroy({ where: { id } });
  return result;
};

module.exports = {
  findAll,
  create,
  findOne,
  findByPk,
  destroy,
};