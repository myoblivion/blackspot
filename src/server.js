const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "public")));

import React, { Component } from "react";
const handleSubmit = (e) => {
  history.push("/");
  e.preventDefault();
  const data = {
    Name: name,
    Number: number,
    Email: email,
  };
  axios.post("http://54.179.151.77/api/event/join", users).then((response) => {
    console.log(response);
    setName("");
    setNumber("");
    setEmail("");
  });
  useEffect(() => {
    getData();
  }, [users]);
};

class App extends Component {
  componentDidMount() {
    fetch("http://54.179.151.77/api/event/join")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ registered: data });
      })
      .catch(console.log);
  }
}
console.log(App);
const PORT = 800 || process.env.PORT;
const admin = (e) => {
  history.push("/admin");
};

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
