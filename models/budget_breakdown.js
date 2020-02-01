module.exports = function(sequelize, DataTypes) {
    const BudgetBreakdown = sequelize.define("BudgetBreakdown", {
      description: {
        type: DataTypes.STRING,     //DataTypes.INTEGER
        allowNull: true,
        validate: {
          len: [0, 100]
        }
      },
      amountDesired: {
        type: DataTypes.INTEGER,     //DataTypes.INTEGER
        allowNull: false,
        validate: {
          len: [1, 100]
        }
      },
      savings: {
        type: DataTypes.INTEGER,     //DataTypes.INTEGER
        allowNull: true,
        validate: {
          len: [0, 100]
        }
      },
      
    });
    BudgetBreakdown.associate = function(models) {
        
        BudgetBreakdown.belongsTo(models.BudgetCategory, {
            foreignKey: {
                allowNull: false
              }
      });
      BudgetBreakdown.belongsTo(models.Trip, {
        foreignKey: {
            allowNull: false
          }
  });
    }
    return BudgetBreakdown;
  }