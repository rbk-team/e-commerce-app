// server/config/database.js
const { Sequelize } = require('sequelize');
//require('dotenv').config();

const sequelize = new Sequelize('shoppingonline', 'root', 'Med.bann@1224', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;