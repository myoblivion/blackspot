const jsonServer = require("json-server");

const data = require("../src/db.json");
const routes = require("../src/db.json");

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(router);

server.listen(8000, () => {
  console.log("JSON Server is running, see http://localhost:8000");
});
