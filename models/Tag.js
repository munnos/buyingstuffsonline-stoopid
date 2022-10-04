// import important parts of the sequelize library
const { Model, DataTypes } = require('sequelize');
// import the database connection from config.js
const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // defining columns for Tag model(table)
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    tag_name: {
      type:DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
