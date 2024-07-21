const conf = require("../config/config.json");
const{Sequelize} = require("sequelize")


const conn = new Sequelize(conf.database, conf.username, conf.password, {
  Host: "localhost",
  dialect: "mysql",
});

const db ={}
db.sequelize = Sequelize
db.conn = conn

db.User = require("./mysql/Users.js")(conn)
db.Card = require("./mysql/Card.js")(conn)


db.conn.sync({alter:true})
  conn.authenticate()

  .then(() => {
    console.log(" db connected .");
  })
  .catch((error) => {
    console.error("not yet");
  });

module.exports = db;