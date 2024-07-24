const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const ShoppingCart = sequelize.define('ShoppingCart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'userId'
        }
    }
});

module.exports = ShoppingCart;