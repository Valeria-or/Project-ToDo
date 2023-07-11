'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OneList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OneList.init({
    title: DataTypes.STRING,
    list_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OneList',
  });
  return OneList;
};