// server/models/index.js
const sequelize = require('../config/database');
const User = require('./user');
const Product = require('./product');
const Category = require('./category');
const ShoppingCart = require('./shoppingCart');
const ProductCart = require('./productCart');
const Order = require('./order');

User.hasMany(ShoppingCart, { foreignKey: 'userId' });
ShoppingCart.belongsTo(User, { foreignKey: 'userId' });

Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

ShoppingCart.hasMany(ProductCart, { foreignKey: 'shoppingCartId' });
ProductCart.belongsTo(ShoppingCart, { foreignKey: 'shoppingCartId' });

Product.hasMany(ProductCart, { foreignKey: 'productId' });
ProductCart.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

ShoppingCart.hasMany(Order, { foreignKey: 'shoppingCartId' });
Order.belongsTo(ShoppingCart, { foreignKey: 'shoppingCartId' });

sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
});

module.exports = {
    User,
    Product,
    Category,
    ShoppingCart,
    ProductCart,
    Order
};
