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


// Promisify for Node.js async/await.

module.exports = pool;
