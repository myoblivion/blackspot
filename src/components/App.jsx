import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

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
import TermsAndConditions from "./terms-of-use";
import GoGoRacingGuide from "./gogoracing-guide";
import GogoracingGuidelist from "./ggr-guide-list";
import GogoRacingAccountLinking from "./ggr-account-linking";
import GogoRacingUpdateList from "./ggr-update-list";
import GogoRacingUpdates from "./ggr-updates";
import GogoRacingPatch from "./ggr-patch2";
import GogoRacingPatchs from "./ggr-patch3";
import GogoRacingPurchaseGuide from "./ggr-purchase-guide";
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
          <Route exact path={"/"}>
            <HomeComponent />
          </Route>
          <Route path={"/about"}>
            <AboutComponent />
          </Route>
          <Route path={"/direction"}>
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
          <Route path="/terms-of-use">
            <TermsAndConditions />
          </Route>
          <Route path="/gogoracing-guide">
            <GoGoRacingGuide />
          </Route>
          <Route path="/ggr-update-list">
            <GogoRacingUpdateList />
          </Route>
          <Route path="/ggr-updates">
            <GogoRacingUpdates />
          </Route>
          <Route path="/ggr-patch2">
            <GogoRacingPatch />
          </Route>
          <Route path="/ggr-guide-list">
            <GogoracingGuidelist />
          </Route>
          <Route path="/ggr-account-linking">
            <GogoRacingAccountLinking />
          </Route>
          <Route path="/ggr-patch3">
            <GogoRacingPatchs />
          </Route>
          <Route path="/ggr-purchase-guide">
            <GogoRacingPurchaseGuide />
          </Route>
        </div>
      )}
    </>
  );
};

export default Appcomponent;
