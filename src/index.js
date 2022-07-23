import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { createBrowserHistory } from "history";
const hist = createBrowserHistory();
import axios from "axios";
axios.defaults.baseURL = "http://192.168.2.105:8000/";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
