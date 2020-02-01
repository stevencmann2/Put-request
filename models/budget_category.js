module.exports = function (sequelize, DataTypes) {
    const BudgetCategory = sequelize.define("BudgetCategory", {

        categoryType: {
            type: DataTypes.STRING, // the type of category will be predefined using front end JS
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },

    });

    BudgetCategory.associate = function (models) {
        // We're saying that a Post should belong to an Author
        BudgetCategory.hasMany(models.BudgetBreakdown, {
         
        });
    }
    return BudgetCategory;
};

