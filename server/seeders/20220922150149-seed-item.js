'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let itemRaw = require('../data_dummy/item.json').map((item) => {
      return {
        ...item,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })


    await queryInterface.bulkInsert('Items', itemRaw)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Items')
  }
};
