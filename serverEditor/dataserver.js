// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("/Users/Admin/Desktop/blackspot/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});