const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

const createToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    password: user.password,
  };

  const token = jwt.sign({ data: payload }, secret, jwtConfig);

  return token;
};

module.exports = createToken;