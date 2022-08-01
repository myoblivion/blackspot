const util = require("util");
const mysql = require("mysql2");
const connection = mysql.createPool({
  connectionLimit: 10,
  host: "192.168.2.105",
  user: "root",
  password: "dropdead345",
  database: "codeat21",
});
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "192.168.2.105",
  user: "root",
  password: "dropdead345",
  database: "codeat21",
});

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }

  if (connection) connection.release();

  return;
});
connection.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }

  if (connection) connection.release();

  return;
});
// Promisify for Node.js async/await.
pool.query = util.promisify(pool.query);
module.exports = pool;
