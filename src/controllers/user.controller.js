const userService = require('../services/user.service');

const findAll = async (_req, res) => {
  try {
    const users = await userService.findAll();
    return res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService.create(displayName, email, password, image);
    return res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err });
  }  
};

module.exports = {
  findAll,
  create,
};