'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Deck}) {
      this.belongsTo(Deck, { foreignKey: 'deck_id'})
    }
  }
  ToDo.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    checked: DataTypes.BOOLEAN,
    deck_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ToDo',
  });
  return ToDo;
};