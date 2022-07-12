const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../src/db.json"));
const middlewares = jsonServer.defaults();
const express = require("express");
const cors = require("cors");
var app = express(),
  http = require("http");

http.createServer(app).listen(3000);

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const allowedOrigins = [
  "http://localhost:8000",
  "http://blackspotstudio.ph",
  "http://192.168.2.154:8000",
  "http://192.168.2.154/getAll",
  "*",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === 8) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
app.use(cors(corsOptions));
const bodyParser = require("body-parser");
const { response } = require("express");
const { info } = require("console");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/", function (req, res, next) {
  res.send("I guess it's working");
});
app.get("/public", function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.send(response.data);
});
server.use(middlewares);
server.use(router);
server.listen(8000, () => {
  console.log("JSON Server is running");
});
