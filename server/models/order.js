const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const ShoppingCart = require('./shoppingCart');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    deliveryDate: DataTypes.DATE,
    creditCardNumber: DataTypes.STRING,
    userId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'userId'
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

module.exports = Order;