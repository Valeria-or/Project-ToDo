'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Deck, Tracker, List}) {
      this.hasMany(Deck, { foreignKey: 'user_id'})
      this.hasMany(Tracker, { foreignKey: 'user_id'})
      this.hasMany(List, { foreignKey: 'user_id'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};