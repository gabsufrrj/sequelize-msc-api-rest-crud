const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../database/models/user');

const secret = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'erro' });
  try {    
    const { data } = jwt.verify(token, secret);
    const user = await User.findOne({ where: { email: data.email } });
    req.user = user;
    next();
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = validateToken;