module.exports = (sequelize, DataTypes) => (
  sequelize.define('user', {
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    promotionCode: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    birthYear: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
  }, {
    timestamps: true,
    paranoid: true,
  })
);