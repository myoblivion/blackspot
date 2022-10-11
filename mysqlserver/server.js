const fs = require("fs");
const key = fs.readFileSync("../ssl/certificate.pem");
const cert = fs.readFileSync("../ssl/privatekey.key");
const express = require("express");
const app = express();
const db_connection = require("./mysql").promise();
const cors = require("cors");
const bodyParser = require("body-parser");

// Cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Port is running. Welcome my Lord! ");
});
// View all
// Announcements
app.get("/announcementList", async (req, res) => {
  try {
    const [rows] = await db_connection.execute("SELECT * FROM announcements ");
    return res.json({ success: true, listall: rows });
  } catch (err) {
    console.log(err);
  }
});
// News
app.get("/newsList", async (req, res) => {
  try {
    const [rows] = await db_connection.execute("SELECT * FROM news ");
    return res.json({ success: true, listall: rows });
  } catch (err) {
    console.log(err);
  }
});
// Game Guide
app.get("/guideList", async (req, res) => {
  try {
    const [rows] = await db_connection.execute("SELECT * FROM gameguide ");
    return res.json({ success: true, listall: rows });
  } catch (err) {
    console.log(err);
  }
});
// Updates
app.get("/updateList", async (req, res) => {
  try {
    const [rows] = await db_connection.execute("SELECT * FROM updates ");
    return res.json({ success: true, listall: rows });
  } catch (err) {
    console.log(err);
  }
});
// Add announcements
app.post("/addAnnouncements", async (req, res) => {
  try {
    const [rows] = await db_connection.execute(
      "INSERT INTO `announcements` (`title`,`description`, `abody`) VALUES(?, ?, ?)",
      [req.body.title, req.body.description, req.body.abody]
    );
    if (rows.affectedRows === 1) {
      return res.json({ success: true });
    }
  } catch (err) {
    console.log(err);
  }
});
// Add Game Guide
app.post("/addGameGuide", async (req, res) => {
  try {
    const [rows] = await db_connection.execute(
      "INSERT INTO `gameguide` (`title`,`description`, `body`) VALUES(?, ?, ?)",
      [req.body.title, req.body.description, req.body.body]
    );
    if (rows.affectedRows === 1) {
      return res.json({ success: true });
    }
  } catch (err) {
    console.log(err);
  }
});

// Add post
app.post("/addUpdates", async (req, res) => {
  try {
    const [rows] = await db_connection.execute(
      "INSERT INTO `updates` (`title`,`description`,`body`) VALUES(?, ?, ?)",
      [req.body.title, req.body.description, req.body.body]
    );
    if (rows.affectedRows === 1) {
      return res.json({ success: true });
    }
  } catch (err) {
    console.log(err);
  }
});
// Add News
app.post("/addNews", async (req, res) => {
  try {
    const [rows] = await db_connection.execute(
      "INSERT INTO `news` (`title`,`description`, `body`) VALUES(?, ?, ?)",
      [req.body.title, req.body.description, req.body.body]
    );
    if (rows.affectedRows === 1) {
      return res.json({ success: true });
    }
  } catch (err) {
    console.log(err);
  }
});
// Delete Function
app.delete("/deleteannouncementList/:id", (req, res) => {
  let { ID } = req.params.id;
  let sql = `DELETE FROM announcements WHERE ID = ${req.params.id}`;
  console.log("This post has been deleted: ", req.params.id);

  db_connection.query(sql, 1, ID, (error, results, fields) => {
    if (error) return console.error(error.message);

    console.log("Deleted Row(s):", results.affectedRows);
  });
});
app.delete("/deleteNewsList/:id", (req, res) => {
  let { ID } = req.params.id;
  let sql = `DELETE FROM news WHERE ID = ${req.params.id}`;
  console.log("This post has been deleted: ", req.params.id);

  db_connection.query(sql, 1, ID, (error, results, fields) => {
    if (error) return console.error(error.message);

    console.log("Deleted Row(s):", results.affectedRows);
  });
});
app.delete("/deleteGuide/:id", (req, res) => {
  let { ID } = req.params.id;
  let sql = `DELETE FROM gameguide WHERE ID = ${req.params.id}`;
  console.log("This post has been deleted: ", req.params.id);

  db_connection.query(sql, 1, ID, (error, results, fields) => {
    if (error) return console.error(error.message);

    console.log("Deleted Row(s):", results.affectedRows);
  });
});

app.delete("/deleteUpdates/:id", (req, res) => {
  let { ID } = req.params.id;
  let sql = `DELETE FROM updates WHERE ID = ${req.params.id}`;
  console.log("This post has been deleted: ", req.params.id);

  db_connection.query(sql, 1, ID, (error, results, fields) => {
    if (error) return console.error(error.message);

    console.log("Deleted Row(s):", results.affectedRows);
  });
});

// Edit Function
// Announcement
app.post("/getAnnouncementId", async (req, res) => {
  try {
    const [rows] = await db_connection.execute(
      "SELECT * FROM  announcements where id = ? ",
      [req.body.ids]
    );
    if (rows.length > 0) {
      return res.json({ success: true, listId: rows });
    }
  } catch (err) {
    console.log(err);
  }
});
// Updates
app.post("/editAnnouncements", async (req, res) => {
  try {
    const [update] = await db_connection.execute(
      "UPDATE `announcements` SET `title`=?, `description`=?, `abody`=? WHERE id = ?",
      [req.body.title, req.body.description, req.body.abody, req.body.ids]
    );
    if (update.affectedRows === 1) {
      return res.json({ success: true });
    }
  } catch (err) {
    console.log(err);
  }
});
// Updates
app.post("/editUpdates", async (req, res) => {
  try {
    const [update] = await db_connection.execute(
      "UPDATE `updates` SET `title`=?, `description`=?, `body`=? WHERE id = ?",
      [req.body.title, req.body.description, req.body.body, req.body.ids]
    );
    if (update.affectedRows === 1) {
      return res.json({ success: true });
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/getPostId", async (req, res) => {
  try {
    const [rows] = await db_connection.execute(
      "SELECT * FROM  updates where id = ? ",
      [req.body.ids]
    );
    if (rows.length > 0) {
      return res.json({ success: true, listId: rows });
    }
  } catch (err) {
    console.log(err);
  }
});

// const https = require("https");
// const server = https.createServer({ key, cert }, app);
app.listen(80, () => {
  console.log("Port is running RUN BOI RUNNNNN");
});
