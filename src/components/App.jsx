import React, { useState, useEffect } from "react";
import {

  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { createBrowserHistory } from "history";

// Components
import NavbarComponent from "../components/navbar";
import HomeComponent from "../components/home";
import AboutComponent from "../components/about";
import DirectionComponent from "./direction";
import JobComponent from "./job";
import NewsComponent from "./news";
import ScionComponent from "./scion";
import GoGoWorldComponent from "./gogoworld";
import GoGoChainComponent from "./gogochain";
import GoGoRacingComponent from "./gogoracing";
import LoadingComponent from "./loading";
import PrivacyComponent from "./privacy";
import ScionNewsComponent from "./scionnews";
import GogoWorldNewsComponent from "./gogoworldnews";
import GogoChainNewsComponent from "./gogochainnews";
import GogoRacingNewsComponent from "./gogoracingnews";
import NotFoundComponent from "./notfound";
import { Redirect } from "react-router-dom";
// styles
import "./scss/index.scss";

const hist = createBrowserHistory();
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
          <Switch>
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
              <Route path="/scionnews">
                <ScionNewsComponent />
              </Route>
              <Route path="/gogoworldnews">
                <GogoWorldNewsComponent />
              </Route>
              <Route path="/gogochainnews">
                <GogoChainNewsComponent />
              </Route>
              <Route path="/gogoracingnews">
                <GogoRacingNewsComponent />
              </Route>
            </div>
          </Switch>
      )}
    </>
  );
};

export default Appcomponent;
