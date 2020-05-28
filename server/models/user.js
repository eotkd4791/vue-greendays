module.exports = (sequelize, DataTypes) => (
  sequelize.define('user', {
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING(10),
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
    address: {
      type: DataTypes.STRING(140),
      allowNull: false,
    },
    promotionCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: true,
    paranoid: true,
  })
);