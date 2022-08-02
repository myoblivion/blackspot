const jsonServer = require("json-server");
const data = require("../db.json");
const routes = require("../db.json");

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(router);

server.listen(8000, () => {
  console.log("JSON Server is running, see http://localhost:8000");
});

// const fs = require("fs");
// const express = require("express");
// const app = express();
// const path = require("path");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const port = process.env.PORT || 8081;
// const pool = require("./database");
// app.use(express.static(__dirname + pool));
// // Databse Connection
// const db_connection = require("./database").promise();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.post("/posts/new", async (req, res) => {
//   try {
//     const [rows] = await db_connection.execute(
//       "INSERT INTO `posts` (`title`,`description`) VALUES(?, ?)",
//       [req.body.title, req.body.description]
//     );
//     if (rows.affectedRows === 1) {
//       return res.json({ success: true });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.get("/posts", (req, res) => {
//   pool.getConnection(async () => {
//     try {
//       const [rows] = await db_connection.execute("SELECT * FROM posts ");
//       return res.json({ success: true, listall: rows });
//     } catch (err) {
//       console.log(err);
//     }
//   });
// });

// app.post("/getPostId", (req, res) => {
//   pool.getConnection(async () => {
//     try {
//       const [rows] = await db_connection.execute(
//         "SELECT * FROM  posts where id = ? ",
//         [req.body.ids]
//       );
//       if (rows.length > 0) {
//         return res.json({ success: true, listId: rows });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   });
// });

// app.post("/editPosts", async (req, res) => {
//   pool.getConnection(async () => {
//     try {
//       const [update] = await db_connection.execute(
//         "UPDATE `posts` SET `title`=?, `description`=? WHERE id = ?",
//         [req.body.title, req.body.description, req.body.ids]
//       );
//       if (update.affectedRows === 1) {
//         return res.json({ success: true });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   });
// });

// app.listen(port, () =>
//   console.log(`Server is listening on http://localhost:${port}`)
// );
