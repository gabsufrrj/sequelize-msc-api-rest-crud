const userService = require('../services/user.service');

const userMiddleware = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }
  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res.status(400).json(
      { message: '"password" length must be at least 6 characters long' },
    );
  }
  
  next();
};

const emailMiddleware = async (req, res, next) => {
  const { email } = req.body;

  const allUsers = await userService.findAll();

  if (allUsers.some((e) => e.email === email)) {
    return res.status(409).json(
      { message: 'User already registered' },
    );
  }
  next();
};

module.exports = { userMiddleware, emailMiddleware };