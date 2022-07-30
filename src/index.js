import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./components/App";
import { createBrowserHistory } from "history";
const hist = createBrowserHistory();
import axios from "axios";
axios.defaults.baseURL = "https://192.168.2.105:8081/";
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
