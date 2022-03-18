import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const NotFoundComponent = ({}) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | 404 Not Found";
  }, []);
  return (
    <Router>
      <Switch>
        <div className="notfound wrapper">
          <section className="notfound-wrapper"></section>
        </div>
      </Switch>
    </Router>
  );
};

export default NotFoundComponent;
