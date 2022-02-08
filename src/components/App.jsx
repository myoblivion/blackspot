import React, { useState, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";

// Components
import NavbarComponent from "../components/navbar";
import HomeComponent from "../components/home";
import AboutComponent from "./about";
import DirectionComponent from "./direction";
import JobComponent from "./job";
import NewsComponent from "./news";
import ScionComponent from "./scion";
import LoadingComponent from "./loading";
// styles
import "./scss/index.scss";

const PageNotFound = () => (
  <div>404! PAGE NOT FOUND! - <a href="/"></a></div>
)

const Appcomponent = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const location = useLocation().pathname;
  const newClass = location.split("/")[1];
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className={"main " + newClass}>
          <NavbarComponent currentRoute={newClass} />
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/about">
            <AboutComponent />
          </Route>
          <Route path="/direction">
            <DirectionComponent />
          </Route>
          <Route path="/job">
            <JobComponent />
          </Route>
          <Route path="/news">
            <NewsComponent />
          </Route>
          <Route path="/scion">
            <ScionComponent />
          </Route>
          <Route component={PageNotFound}/>
        </div>
      )}
    </>
  );
};

export default Appcomponent;
