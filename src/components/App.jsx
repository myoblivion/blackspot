import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
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
        <Router history={hist}>
          <Switch>
            <div className={"main " + newClass}>
              <NavbarComponent currentRoute={newClass} />
              <Route exact path="/">
                <HomeComponent />
              </Route>
              <Route exact path="/about">
                <AboutComponent />
              </Route>
              <Route exact path="/direction">
                <DirectionComponent />
              </Route>
              <Route exact path="/job">
                <JobComponent />
              </Route>
              <Route exact path="/news">
                <NewsComponent />
              </Route>
              <Route exact path="/scion">
                <ScionComponent />
              </Route>
              <Route exact path="/gogoworld">
                <GoGoWorldComponent />
              </Route>
              <Route exact path="/gogochain">
                <GoGoChainComponent />
              </Route>
              <Route exact path="/gogoracing">
                <GoGoRacingComponent />
              </Route>
              <Route exact path="/privacy">
                <PrivacyComponent />
              </Route>
              <Route exact path="/scionnews">
                <ScionNewsComponent />
              </Route>
              <Route exact path="/gogoworldnews">
                <GogoWorldNewsComponent />
              </Route>
              <Route exact path="/gogochainnews">
                <GogoChainNewsComponent />
              </Route>
              <Route exact path="/gogoracingnews">
                <GogoRacingNewsComponent />
              </Route>
             <Route exact path="*">
               <NotFoundComponent />
             </Route>
            </div>
          </Switch>
        </Router>
      )}
    </>
  );
};

export default Appcomponent;
