
// dependencies 
var Sequelize = require ("sequelize");

// creates mysql connection using sequelize
const sequelize = new Sequelize('burgers_db', 'root', 'mysql99', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  
});

// exports the connection 
module.exports = sequelize;