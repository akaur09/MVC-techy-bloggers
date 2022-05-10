require('dotenv').config();
const {Sequlize} = require('sequelize');
const app = require('./app');
const initDb = require('./utils/db_connect');
const checkDbConnection = require('./utils/checkDbConnection');

checkDbConnection();

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`app running on ${port}`);
});