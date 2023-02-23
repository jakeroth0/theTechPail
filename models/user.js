const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    //   }
}

User.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
     isEmail: true,
      },
    },
    user_created: {
        type: DataTypes.DATE,
    },
   password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [10],
      },
    },
  },
  {
    // links db connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  },
)
    // Add hook here
    module.exports = User;

