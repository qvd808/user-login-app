const Pool = require("pg").Pool;

const pool = new Pool({
    user: "",
    password: "",
    host: "",
    port: "",
    database: "",
});

module.exports = pool;
