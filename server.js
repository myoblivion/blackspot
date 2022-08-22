const express = require("express");
const app = express();
const mysql = require("mysql");

const db = (mysql.createPool = {
  host: "localhost",
  user: "root",
  password: "BlackspotstudioPH",
  database: "bssdatabase",
});
app.get("/", (req, res) => {
  res.send("Port is running. Welcome my Lord! ");
});
app.listen(3001, () => {
  console.log("Port is running RUN BOI RUNNNNN");
});
