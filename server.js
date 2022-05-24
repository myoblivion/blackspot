const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
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

app.get("/", async (req, res) => {
  try {
    const { sheets } = await authentication();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: id,
      range: "sheesh",
    });
    res.send(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

app.post("/", async (req, res) => {
  try {
    const { newName, newNumber, newEmail } = req.body;
    const { sheets } = await authentication();
    const writeReq = await sheets.spreadsheets.values.append({
      spreadsheetId: id,
      range: "sheesh",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[newName, newNumber, newEmail]],
      },
    });
    if ((writeReq.status = 200)) {
      return res.json({ msg: "newName: Hi!" });
    }
    return res.json({
      msg: "something went wrong while updating the spreadsheet",
    });
  } catch (e) {
    console.log("ERROR BROTHER", e);
    res.status(500).send();
  }
});

const PORT = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.send("Express Server Is Running!!!!!!");
});

app.listen(PORT, () => console.log("Server running YES!"));
