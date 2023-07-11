'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Day.init({
    title: DataTypes.STRING,
    1: DataTypes.BOOLEAN,
    2: DataTypes.BOOLEAN,
    3: DataTypes.BOOLEAN,
    4: DataTypes.BOOLEAN,
    5: DataTypes.BOOLEAN,
    6: DataTypes.BOOLEAN,
    7: DataTypes.BOOLEAN,
    8: DataTypes.BOOLEAN,
    9: DataTypes.BOOLEAN,
    10: DataTypes.BOOLEAN,
    11: DataTypes.BOOLEAN,
    12: DataTypes.BOOLEAN,
    13: DataTypes.BOOLEAN,
    14: DataTypes.BOOLEAN,
    15: DataTypes.BOOLEAN,
    16: DataTypes.BOOLEAN,
    17: DataTypes.BOOLEAN,
    18: DataTypes.BOOLEAN,
    19: DataTypes.BOOLEAN,
    20: DataTypes.BOOLEAN,
    21: DataTypes.BOOLEAN,
    22: DataTypes.BOOLEAN,
    23: DataTypes.BOOLEAN,
    24: DataTypes.BOOLEAN,
    25: DataTypes.BOOLEAN,
    26: DataTypes.BOOLEAN,
    27: DataTypes.BOOLEAN,
    28: DataTypes.BOOLEAN,
    29: DataTypes.BOOLEAN,
    30: DataTypes.BOOLEAN,
    tracker_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Day',
  });
  return Day;
};