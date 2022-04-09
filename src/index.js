import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App";
import { createBrowserHistory } from "history";
const hist = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);
