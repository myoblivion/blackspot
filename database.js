const util = require("util");
const mysql = require("mysql2");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "codeat21",
});
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
console.log("Announcements");
console.log("Gogo Racing Play to Win Raffle Event");
console.log("|");
console.log("Updates");
console.log("🔊 1.0.3 Patch Note");
console.log("🔊 1.0.2 Patch Note");
console.log("🔊 1.0.1 Patch Note");
console.log("|");
console.log("Game Guide");
console.log("❓ Game Guide");
console.log("🔗 Account Linking");
console.log("💳 Purchase & Linking Guide");
console.log("|");
console.log("News Letter");
// Promisify for Node.js async/await.
pool.query = util.promisify(pool.query);

module.exports = pool;
