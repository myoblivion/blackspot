import React from "react";
import { Route, useLocation } from "react-router-dom";

// Components
import NavbarComponent from "../components/navbar";
import HomeComponent from "../components/home";
import MainComponent from "./main";
import BusinessComponent from "./business";
import WithComponent from "./with";
import GlobalComponent from "./global";
// styles
import "./scss/index.scss";

const Appcomponent = () => {
    const location = useLocation().pathname;
    const newClass = location.split("/")[1];
    return (
        <div className={"main " + newClass}>
        <NavbarComponent currentRoute={newClass}/>
    <Route exact path="/">
        <HomeComponent />
    </Route>
    <Route path="/main">
    <MainComponent />
    </Route>
    <Route path="/business">
    <BusinessComponent />
    </Route>
    <Route path="/with">
    <WithComponent />
    </Route>
    <Route path="/global">
    <GlobalComponent />
    </Route>
        </div>
        );
};

export default Appcomponent;