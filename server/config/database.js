// server/config/database.js
const { Sequelize } = require('sequelize');
//require('dotenv').config();

const sequelize = new Sequelize('shoppingonline', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
