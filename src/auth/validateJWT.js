const jwt = require('jsonwebtoken');
require('dotenv').config();

// const userService = require('../services/user.service');
// const { User } = require('../database/models/user');

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {    
    jwt.verify(token, secret);
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });  
  }
  next();
};

module.exports = validateJWT;