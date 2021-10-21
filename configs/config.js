require('dotenv').config();
 
var config = {};
 
// General config
config.node_env = process.env.NODE_ENV;
 
// WEB config
config.web = {};
config.web.port = process.env.PORT || process.env.LOCAL_DB_PORT;
 
// DB config
config.db = {};
config.db.host = process.env.DATABASE_HOST;
config.db.username = process.env.DATABASE_USER;
config.db.password = process.env.DATABASE_PASSWORD;
config.db.database = process.env.DATABASE;
config.db.port = process.env.DATABASE_PORT;
config.db.dialect = process.env.DATABASE_DIALECT;
 
module.exports = config;