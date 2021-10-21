/* Databse connection
******************************************************************/
'use strict';
const { Sequelize } = require('sequelize');
const config = require('../configs/config');
const db = {};
 
const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.dialect,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      timestamps: false
    }
  }
);
 
/* init models
******************************************************************/
db.sequelize = sequelize
 
db.Translations = require('./translation')(sequelize)
 
module.exports = db;