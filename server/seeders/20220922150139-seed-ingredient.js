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
    let ingredientRaw = require('../data_dummy/ingredient.json').map((item) => {
      return {
        ...item,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })


    await queryInterface.bulkInsert('Ingredients', ingredientRaw)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Ingredients')
  }
};
