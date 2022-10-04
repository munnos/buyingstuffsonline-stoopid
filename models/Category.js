// import important parts of the sequelize library

const { Model, DataTypes } = require("sequelize");

// import the database connection from config.js

const sequelize = require("../config/connection.js");

// Initialize Category model (table) by extending Sequelize's Model class. Model essentially translates to table. 

class Category extends Model {}

Category.init(
  {
    // defining columns for category model(table)
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

// Exporting category model(table)

module.exports = Category;
