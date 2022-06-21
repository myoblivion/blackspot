const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "database",
  connectionLimit: 10,
});

pool.query("select * from admin", (err, result, useFieldState) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
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

module.exports = pool;
