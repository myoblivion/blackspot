const fs = require("fs");
const https = require("https");
const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../db.json"));
server.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
const middlewares = jsonServer.defaults({
  static: "node_modules/json-server/dist",
});
const defaultMiddleware = jsonServer.defaults();
var options = {
  key: fs.readFileSync("./cert/CA/localhost/localhost.decrypted.key"),
  cert: fs.readFileSync("./cert/CA/localhost/localhost.crt"),
};
server.db = router.db;
server.use(defaultMiddleware);

server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser);
https.createServer(options, server).listen(443, function () {
  console.log("json-server started on port " + 443);
});
