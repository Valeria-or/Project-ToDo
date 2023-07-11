'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Days', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      1: {
        type: Sequelize.BOOLEAN
      },
      2: {
        type: Sequelize.BOOLEAN
      },
      3: {
        type: Sequelize.BOOLEAN
      },
      4: {
        type: Sequelize.BOOLEAN
      },
      5: {
        type: Sequelize.BOOLEAN
      },
      6: {
        type: Sequelize.BOOLEAN
      },
      7: {
        type: Sequelize.BOOLEAN
      },
      8: {
        type: Sequelize.BOOLEAN
      },
      9: {
        type: Sequelize.BOOLEAN
      },
      10: {
        type: Sequelize.BOOLEAN
      },
      11: {
        type: Sequelize.BOOLEAN
      },
      12: {
        type: Sequelize.BOOLEAN
      },
      13: {
        type: Sequelize.BOOLEAN
      },
      14: {
        type: Sequelize.BOOLEAN
      },
      15: {
        type: Sequelize.BOOLEAN
      },
      16: {
        type: Sequelize.BOOLEAN
      },
      17: {
        type: Sequelize.BOOLEAN
      },
      18: {
        type: Sequelize.BOOLEAN
      },
      19: {
        type: Sequelize.BOOLEAN
      },
      20: {
        type: Sequelize.BOOLEAN
      },
      21: {
        type: Sequelize.BOOLEAN
      },
      22: {
        type: Sequelize.BOOLEAN
      },
      23: {
        type: Sequelize.BOOLEAN
      },
      24: {
        type: Sequelize.BOOLEAN
      },
      25: {
        type: Sequelize.BOOLEAN
      },
      26: {
        type: Sequelize.BOOLEAN
      },
      27: {
        type: Sequelize.BOOLEAN
      },
      28: {
        type: Sequelize.BOOLEAN
      },
      29: {
        type: Sequelize.BOOLEAN
      },
      30: {
        type: Sequelize.BOOLEAN
      },
      tracker_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Days');
  }
};