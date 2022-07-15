const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
const router = express.Router();
const App = express();
const http = require("http");
App.use(express.json());
App.use(express.static(path.join(__dirname, "App")));
App.get("/ping", (req, res) => {
  return res.send("pong");
});

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
router.get("/", function (req, res, next) {
  res.send("I guess it's working");
});
const bodyParser = require("body-parser");
const { response } = require("express");
const { info } = require("console");

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

module.export = router;
App.get("/", (req, res) => {
  res.sendFile(path.join(__dirname));
});
const allowedOrigins = [
  "http://localhost:8080",
  "http://blackspotstudio.ph",
  "http://192.168.2.154:8080",
  "http://192.168.2.154/getAll",
  "http://3.37.118.67/api/event/join?event_index=1&uuid=72&refer_user_id=your_site_user_id",
  "*",
];
App.use(
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
App.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/404.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

App.use(cors(corsOptions));
const authentication = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "response.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
    baseUrl: "http://localhost:4000",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      enctype: "mutipart/form-data",
    },
  });
  const client = await auth.getClient();
  const sheets = google.sheets({
    version: "v4",
    auth: client,
  });
  return { sheets };
};
App.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "http://192.168.2.154:8080",
    "http://localhost:4000/"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
    "mutipart/form-data"
  );
  next();
});
const id = "1cOnjWzCBFvyzgwNZCaqt4VYKnarpCXrKtz0WiblQ8ug";
App.get("/public", function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.send(response.data);
});
App.get("/", async (req, res) => {
  try {
    const { sheets } = await authentication();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: id,
      range: "sheesh",
    });
    res.send(response.data);
  } catch (e) {
    console.log(e);
    res.status(90000).send();
  }
});
const options = {
  refer_user_id: "",
  uuid: "",
  setEmail: "",
  event_index: "1",
};
axios("http://localhost:4000/", {
  method: "POST",
  type: "jsonp",
  credentials: "include",
  headers: {
    "Content-type": "	application/json",
    Accept: "application/json",
    enctype: "mutipart/form-data",
  },
  body: JSON.stringify({
    options,
  }),
});
App.post("/", async (req, res) => {
  try {
    const { refer_user_id, uuid, setEmail, event_index } = req.body;
    const { sheets } = await authentication();
    const writeReq = sheets.spreadsheets.values.append({
      spreadsheetId: id,
      range: "sheesh",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[refer_user_id, uuid, setEmail, event_index]],
      },
    });
    if ((writeReq.status = 200)) {
      return res.json({ msg: req.body });
    }
    return res.json({
      msg: "something went wrong while updating the spreadsheet",
    });
  } catch (e) {
    console.log("NOOOOOO ERROR", e);
    res.status(9000).send();
  }
});

let refer_user_id = "";
let uuid = "";
App.get(() => {
  if ((uuid, refer_user_id)) {
    axios
      .get(
        `http://3.37.118.67/api/event/join?event_index=1&uuid=${uuid}&refer_user_id=${refer_user_id}`
      )
      .then((res) => {
        console.log(res);
        const writeReq = sheets.spreadsheets.values.append({
          spreadsheetId: id,
          range: "sheesh",
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[refer_user_id, uuid, setEmail, event_index]],
          },
        });
        console.log(writeReq);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(uuid, refer_user_id);
  }
});
App.get("/allPost", async (req, res) => {
  try {
    const [rows] = await db_connection.execute("SELECT * FROM posts ");
    return res.json({ success: true, listall: rows });
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 4000;
App.get("/", function (req, res) {
  res.send("Express Server Is Running!!!!!!");
});

App.listen(PORT, () => console.log(`Server running ${PORT}`));
