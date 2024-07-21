const { DataTypes } = require("sequelize");

module.exports = (connection)=>{
    return connection.define("user", {
   
   
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      category :{
        type: DataTypes.STRING,
        allowNull: false
  
      },
    });
  
    
    };





