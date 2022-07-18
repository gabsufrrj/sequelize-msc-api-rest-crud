const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory",
   {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
   },
  {
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categories',
      through: 'PostCategory',
      foreingKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'posts',
      through: 'PostCategory',
      foreingKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostCategory;
};

module.exports = PostCategory;