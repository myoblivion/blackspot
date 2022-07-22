const https = require("https");
const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs");
const key = fs.readFileSync("../cert/CA/localhost/localhost.decrypted.key");
const cert = fs.readFileSync("../cert/CA/localhost/localhost.crt");
const server = jsonServer.create(({ key, cert }, app));
const router = jsonServer.router(path.join(__dirname, "../db.json"));
const middlewares = jsonServer.defaults();
const express = require("express");
const cors = require("cors");
var app = express(),
  http = require("http");

app.get("/", (req, res, next) => {
  res.status(200).send("Hello world!");
});

http.createServer(app).listen(3000);

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const allowedOrigins = [
  "http://localhost:8000",
  "http://blackspotstudio.ph",
  "http://192.168.2.154:443",
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

const port = process.env.PORT || 80;
server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});
