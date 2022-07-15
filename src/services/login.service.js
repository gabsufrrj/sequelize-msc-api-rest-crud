const { User } = require('../database/models');

const findLogin = async (email, password) => {
  const result = await User.findOne(email, password);
  return result;
};

module.exports = {
  findLogin, 
};