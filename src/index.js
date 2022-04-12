import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
import { createBrowserHistory } from "history";
const hist = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <HashRouter history={hist}>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
