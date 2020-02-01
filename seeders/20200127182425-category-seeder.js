'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('BudgetCategories', [{
        categoryType: 'Airfare',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryType: 'Transportation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryType: 'Lodging',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryType: 'Food and Drink',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryType: 'Activities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryType: 'Emergency',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryType: 'Miscellaneous',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
