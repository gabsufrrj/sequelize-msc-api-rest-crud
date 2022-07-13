const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return User;
};

module.exports = User;