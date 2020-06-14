'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'users',
        'color_id',
        { 
          type: Sequelize.INTEGER,
          references: {model: 'colors', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('users','color_id');
  }
};
