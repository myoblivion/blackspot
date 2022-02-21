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
import GoGoWorldComponent from "./gogoworld";
import GoGoChainComponent from "./gogochain";
import GoGoRacingComponent from "./gogoracing";
import LoadingComponent from "./loading";
import PrivacyComponent from "./privacy"
import SomethingComponent from "./something";
// styles
import "./scss/index.scss";



const Appcomponent = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2600);
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
          <Route path="/gogoworld">
            <GoGoWorldComponent />
          </Route>
          <Route path="/gogochain">
            <GoGoChainComponent />
          </Route>
          <Route path="/gogoracing">
            <GoGoRacingComponent />
          </Route>
          <Route path="/privacy">
            <PrivacyComponent />
          </Route>
          <Route path="/something">
            <SomethingComponent />
          </Route>
        </div>
      )}
    </>
  );
};

export default Appcomponent;
