const { Op } = require('sequelize');  
const jwt = require('jsonwebtoken');
const { BlogPost, PostCategory, User, Category } = require('../database/models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const create = async (token, title, content, categoryIds) => {
  const { data } = jwt.verify(token, secret);
  const object = {
    title,
    content,
    userId: data.id,
  };
  const result = await BlogPost.create(object);
  const addPostCategory = categoryIds.map((id) => ({ categoryId: id, postId: result.id }));
  await Promise.all(addPostCategory.map((e) => PostCategory.create(e)));
  return result;
};

const findAll = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      {
        model: Category,
        as: 'categories',
        through: {
          attributes: [],
        },
      },
    ],
  });
  return result;
};

const findByPk = async (id) => {
  const result = await BlogPost.findByPk(id, {
    include: [
      { model: User, 
        as: 'user', 
        attributes: { exclude: ['password'] } },
      {
        model: Category,
        as: 'categories',
        through: {
          attributes: [],
        },
      },
  ],
  });
  return result;
};

const update = async (id, title, content) => {  
  await BlogPost.update( 
    { title, content },
    { where: { id } }, 
  );
  const result = await findByPk(id);  
  return result;
};

const destroy = async (id) => {
  const result = await BlogPost.destroy({ where: { id } });
  return result;
};

// retirado de https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

const searchQuery = async (q) => {
  const result = await BlogPost.findAll({ where: {
      [Op.or]: [
        { title: q },
        { content: q },
      ],
    },      
    include: [
      { model: User, 
        as: 'user', 
        attributes: { exclude: ['password'] } },
      {
        model: Category,
        as: 'categories',
        through: {
          attributes: [],
        } }] });
  return result;
};

module.exports = {
  create,
  findAll,
  findByPk,
  update,
  destroy,
  searchQuery,
};