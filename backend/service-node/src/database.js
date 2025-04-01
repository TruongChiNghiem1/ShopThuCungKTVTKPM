const mariadb = require("mariadb");
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shopthucanthucung',
    connectionLimit: 10,
})
module.exports = pool;