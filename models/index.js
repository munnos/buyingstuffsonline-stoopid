// Notes on establishing relationships in sequelize:
// 1. Specify reference in table with other field you want
// 2. Then need to create a relationship. Use hasOne and belongsTo

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Saying that the Product table has one association with another table - 
// Need both set up if need to query both Category and Product table - when populating table - so just better to have both
// Just able to access Category. and Product. i.e. call for objects on both tables
// Category.hasOne(Product, {
//   foreignKey: 'category_id',
//   onDelete: 'CASCADE',
// });

Product.belongsTo(Category,  {
  foreignKey: 'category_id'
});


// Categories have many Products
// Can have more than one - category can have many products

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, { through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag,
foreignKey: 'tag_id',
});


// Exporting models

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
