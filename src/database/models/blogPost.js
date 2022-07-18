const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreingKey: true,      
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
    { foreingKey: 'userId', as: 'users'})
  };

  return BlogPost;
};

module.exports = BlogPost;