const jwt = require('jsonwebtoken');
const { BlogPost, PostCategory } = require('../database/models');
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
  console.log(addPostCategory);
  await Promise.all(addPostCategory.map((e) => PostCategory.create(e)));
  return result; 
};

module.exports = { 
  create,
};