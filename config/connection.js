const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)  //if deployed to Heroku, use JawsDB
  : new Sequelize (process.env.DB_USER, process.env.DB_PASSWORD, {
      host:'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
});

module.exports = sequelize;