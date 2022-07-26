const fs = require("fs");
const https = require("https");
const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../db.json"));
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
server.use(function (req, res, next) {
  setTimeout(next, 0);
});

server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser);
https.createServer(options, server).listen(443, function () {
  console.log("json-server started on port " + 443);
});
