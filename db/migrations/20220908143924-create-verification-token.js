'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('verification_tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      expires: {
        type: Sequelize.DATE,
      },
      identifier: {
        type: Sequelize.STRING,
      },
      token: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('verification_tokens');
  },
};
