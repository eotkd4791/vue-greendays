module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    name: {
      type:DataTypes.STRING(20),
      allowNull: false,
    },
    phoneNum: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    promotionCode: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    birthYear: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
  }, {
    timestamps: true,
  });
};