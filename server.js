const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");
const App = express();
App.use(express.static(path.join(__dirname, "App")));
App.get("/ping", (req, res) => {
  return res.send("pong");
});

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json);
App.get("/", (req, res) => {
  res.sendFile(__dirname + "../public/index.html");
});
App.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

App.listen(5000, () => {
  console.log("Port is running 5000");
});
