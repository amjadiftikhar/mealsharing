const mysql = require("mysql");

require("dotenv").config();
const { MYSQL_URL } = process.env;

// var pool = mysql.createConnection(MYSQL_URL);
const pool = mysql.createPool(MYSQL_URL);

module.exports = pool;




