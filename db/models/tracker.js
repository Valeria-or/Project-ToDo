'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tracker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Day}) {
      this.belongsTo(User, { foreignKey: 'user_id'})
      this.hasMany(Day, { foreignKey: 'tracker_id'})
    }
  }
  Tracker.init({
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tracker',
  });
  return Tracker;
};