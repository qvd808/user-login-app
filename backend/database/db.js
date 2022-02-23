const config = require("dotenv").config()
const Pool = require("pg").Pool;

const pool = new Pool({
    user: config.parsed.DB_NAME,
    password: config.parsed.DB_PASSWORD,
    host: config.parsed.DB_HOST,
    port: "5432",
    database: config.parsed.DB_DEFAULT_DATABASE,
});

module.exports = pool;
