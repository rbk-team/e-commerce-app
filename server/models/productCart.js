const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product');
const ShoppingCart = require('./shoppingCart');

const ProductCart = sequelize.define('ProductCart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10, 2),
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    },
    shoppingCartId: {
        type: DataTypes.INTEGER,
        references: {
            model: ShoppingCart,
            key: 'id'
        }
    }
});

module.exports = ProductCart;
