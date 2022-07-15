const userService = require('../services/user.service');
const createToken = require('../helpers/createToken');

const findAll = async (_req, res) => {
  try {
    const users = await userService.findAll();
    return res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const findOne = async (req, res) => {
  try {
    const { email } = req.body; 
    const user = await userService.findByPk({ where: { email } });
    return res.status(200).json(user);  
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const findByPk = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService.create(displayName, email, password, image);
    const token = createToken(newUser);
    return res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ error: err });
  }  
};

module.exports = {
  findAll,
  create,
  findOne,
  findByPk,
};