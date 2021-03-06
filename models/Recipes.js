const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {}

Recipes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_name: {
        type: DataTypes.STRING,
    },
    recipe_description: {
        type: DataTypes.STRING,
    },
    recipe_steps: {
      type: DataTypes.STRING,
    }, 
    prep_time: {
      type: DataTypes.INTEGER,
    },
    cook_time: {
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipes',
  }
);

module.exports = Recipes;