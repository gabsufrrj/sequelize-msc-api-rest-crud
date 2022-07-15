const loginService = require('../services/login.service');
const createToken = require('../helpers/createToken');

const createLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await loginService.findLogin({ where: { email, password } });
    if (!foundUser) return res.status(400).json({ message: 'Invalid fields' });
    const token = createToken(foundUser);
    return res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  createLogin,
};