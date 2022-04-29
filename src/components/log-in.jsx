import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const LogInComponent = ({ props, ref, currentRoute }) => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("false");
  const handleLogin = () => {
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
    fire.auth().signout();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        setUser(user);
      } else {
        setUser("")
      }
    })
  }
  useEffect(() => {
    
  }, [])
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Log in";
  }, []);
  return <div className="ggr-guidelist wrapper"></div>;
};

export default LogInComponent;
