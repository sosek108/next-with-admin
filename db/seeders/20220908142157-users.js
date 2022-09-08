'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Jon Snow',
          email: 'j.snow@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
          emailVerified: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
