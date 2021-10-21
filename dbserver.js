// const Pool = require("pg").Pool;
// require("dotenv").config();
// console.log(process);
// const isProduction = process.env.NODE_ENV === "production";
// const connectionString = `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE}`;
// const pool = new Pool({
//     connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//     ssl: {
//         rejectUnauthorized: false,
//     },
// });
// console.log(pool);
// module.exports = pool;

const express = require('express')
const routes = require('./routes/index')
const config = require('./configs/config')
const app = express()

// parse requests of content-type – application/json
app.use(express.json())

// load routes
app.use('/api', routes)

app.listen(config.web.port, () => {
console.log(`server is running at port ${config.web.port}`)
})