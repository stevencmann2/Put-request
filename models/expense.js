module.exports = function (sequelize, DataTypes) {
    const Expense = sequelize.define("Expense", {

        amount: {
            type: DataTypes.INTEGER, // the type of category will be predefined using front end JS
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING, // the type of category will be predefined using front end JS
            allowNull: false,
            validate: {
                len: [1, 200]
            }
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
            
          }

    });
    Expense.associate = function (models) {
        // We're saying that a Post should belong to an Author
        Expense.belongsTo(models.BudgetCategory, {
         
        });
        Expense.belongsTo(models.Trip, {
         
        });
    }
    return Expense;
};