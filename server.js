const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
const { ResizableBox } = require("react-resizable");
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
var server = App.listen(3000);

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

module.export = router;
App.get("/", (req, res) => {
  res.sendFile(path.join(__dirname));
});
const allowedOrigins = [
  "http://localhost:8080",
  "http://blackspotstudio.ph",
  "http://3.37.118.67/api/event/join/",
  "*",
];
App.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === 3) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
App.use(cors(corsOptions));
console.log(allowedOrigins);
const authentication = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "response.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const client = await auth.getClient();
  const sheets = google.sheets({
    version: "v4",
    auth: client,
  });
  return { sheets };
};

const id = "1llRobkQRlqW61AI8nZ6Dl_HXxGobzfJVLnjq_kF67Q4";

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

// Axios

const posts = [
  {
    refer_user_id: "",
    uuid: "",
    event_index: "",
  },
];
posts.forEach((post) => {
  axios
    .post("http://3.37.118.67/api/event/join", post, {
      headers: {
        PUBLISHER_PRIVATE_KEY: "4a06076c-a4e8-5029-8365-00004978d622",
        KEY: "AIzaSyApqrQ8aXiKeZbRkAxnhSY1eE-CROieVIU",
      },
    })

    // Print response
    .then((response) => {
      const { refer_user_id, uuid, event_index } = response.data;
      console.log(response.data);
    })

    // Print error message if occur
    .catch((error) => console.log(error));
});

const PORT = process.env.PORT || 4000;
App.get("/", function (req, res) {
  res.send("Express Server Is Running!!!!!!");
});

App.listen(PORT, () => console.log("Server running YES!"));
