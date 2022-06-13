const Sequlize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  // Database name
  'library_db',
  // User
  'root',
  // Password
  'password',
  {
    // Database location
    host: 'localhost',
    dialect: 'mysql',
    port: 3001
  }
);
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: 'localhost',
      password: 'Ak_9856!',
      dialect: 'mysql',
      port: 3001
    });
}
  
module.exports = sequelize;