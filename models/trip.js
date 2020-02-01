module.exports = function (sequelize, DataTypes) {
  const Trip = sequelize.define("Trip", {
    tripname: {
      type: DataTypes.STRING, //DataTypes.INTEGER
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    totalbudget: {
      type: DataTypes.INTEGER, //DataTypes.INTEGER
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    departing: {
      type: DataTypes.STRING, //DataTypes.DATEONLY
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    returning: {
      type: DataTypes.STRING, //DataTypes.DATEONLY
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    user_id: {
      type: DataTypes.STRING, //DataTypes.DATEONLY
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    }
  });
  Trip.associate = function (models) {
    // We're saying that a Post should belong to an Author
    Trip.hasMany(models.BudgetBreakdown, {
      onDelete: 'cascade',
      hooks: true

    });
    Trip.hasMany(models.Expense, {
      onDelete: "cascade",
      hooks: true
    });
  }
  return Trip;
};


