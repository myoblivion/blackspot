// const fs = require("fs");
// const https = require("https");
// const jsonServer = require("json-server");
// const path = require("path");
// const server = jsonServer.create();
// const router = jsonServer.router(path.join(__dirname, "../db.json"));
// server.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader("Access-Control-Allow-Origin", "*");

//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   // Request headers you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", true);

//   // Pass to next layer of middleware
//   next();
// });
// const middlewares = jsonServer.defaults({
//   static: "node_modules/json-server/dist",
// });
// const defaultMiddleware = jsonServer.defaults();
// var options = {
//   key: fs.readFileSync("./cert/CA/localhost/localhost.decrypted.key"),
//   cert: fs.readFileSync("./cert/CA/localhost/localhost.crt"),
// };
// server.db = router.db;
// server.use(defaultMiddleware);

// server.use(middlewares);
// server.use(router);
// server.use(jsonServer.bodyParser);
// https.createServer(options, server).listen(443, function () {
//   console.log("json-server started on port " + 443);
// });

const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const key = fs.readFileSync("./cert/CA/localhost/localhost.decrypted.key");
const cert = fs.readFileSync("./cert/CA/localhost/localhost.crt");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8081;
const https = require("https");
const server = https.createServer({ key, cert }, app);
// Databse Connection
const db_connection = require("./database").promise();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.post("/posts/new", async (req, res) => {
  try {
    const [rows] = await db_connection.execute(
      "INSERT INTO `posts` (`title`,`description`) VALUES(?, ?)",
      [req.body.title, req.body.description]
    );
    if (rows.affectedRows === 1) {
      return res.json({ success: true });
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/posts", async (req, res) => {
  try {
    const [rows] = await db_connection.execute("SELECT * FROM posts ");
    return res.json({ success: true, listall: rows });
  } catch (err) {
    console.log(err);
  }
});

app.post("/getPostId", async (req, res) => {
  try {
    const [rows] = await db_connection.execute(
      "SELECT * FROM  posts where id = ? ",
      [req.body.ids]
    );
    if (rows.length > 0) {
      return res.json({ success: true, listId: rows });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/editPosts", async (req, res) => {
  try {
    const [update] = await db_connection.execute(
      "UPDATE `posts` SET `title`=?, `description`=? WHERE id = ?",
      [req.body.title, req.body.description, req.body.ids]
    );
    if (update.affectedRows === 1) {
      return res.json({ success: true });
    }
  } catch (err) {
    console.log(err);
  }
});

server.listen(port, () => {
  console.log(`Server is listening on https://192.168.2.105:${port}`);
});
