const Pool = require("pg").Pool;
const config = require("dotenv").config()

const pool = new Pool({
    user: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: "5432",
    database: process.env.DB_DEFAULT_DATABASE,
});

module.exports = pool;
