// import important parts of the sequelize library
const { Model, DataTypes } = require("sequelize");
// import the database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // defining columns for Product model(table)
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      isDecimal: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      isNumeric: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id"
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
