
import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
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
import GogoRacingSearch from "./ggrsearch";
import EarnToWinRaffle from "./play-to-win-raffle";
import Admins from "./admin";
import LogInComponent from "./login";
import GogoRacingAnnouncementList from "./ggr-announcement-list";
import GogoRacingRaffleAnnouncement from "./ggr-annoncement";
// styles
import "./scss/index.scss";
const firebaseConfig = {
  apiKey: "AIzaSyDe_ISIJrMFlNbsFpN1io--gnlANZRY_JI",
  authDomain: "black-spot-studio-ph.firebaseapp.com",
  projectId: "black-spot-studio-ph",
  storageBucket: "black-spot-studio-ph.appspot.com",
  messagingSenderId: "366890563540",
  appId: "1:366890563540:web:00b2063a519c11420d0841",
  measurementId: "G-1Z34EP137Q",
};
const fire = firebase.initializeApp(firebaseConfig);
const Appcomponent = () => {
  const [loading, setLoading] = useState(false);
  const firebase = require("firebase/compat/app");
  require("firebase/compat/auth");
  require("firebase/compat/firestore");

  const location = useLocation().pathname;
  const newClass = location.split("/")[1];

  const app = initializeApp(firebaseConfig);

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("false");
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2600);
  }, []);
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
          <Route path="/ggrsearch">
            <GogoRacingSearch />
          </Route>
          <Route path="/play-to-win-raffle">
            <EarnToWinRaffle />
          </Route>
          <Route path="/ggr-announcement-list">
            <GogoRacingAnnouncementList />
          </Route>
          <Route path="/gogo-racing-raffle-announcement">
            <GogoRacingRaffleAnnouncement />
          </Route>
          {user ? (
            <Admins handleLogout={handleLogout} />
          ) : (
            <Route path="/login">
              <LogInComponent
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
              />
            </Route>
          )}
        </div>
      )}
    </>
  );
};

export default Appcomponent;
