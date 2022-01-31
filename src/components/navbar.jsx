import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Font awesome
import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../images/logorandom.png";

const NavbarComponent = ({ currentRoute }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header className={navbar ? "navbar active" : "navbar"}>
      <nav className="container">
        <div className="logo">
          <Link
            to="/"
            style={
              currentRoute === "home"
                ? { borderBottom: "2px solid white" }
                : { borderBottom: "2px solid transparent" }
            }
          >
            <img src={logo} alt="Black Spot Studio" />
          </Link>
        </div>
        <ul className="clearfix">
          <li>
            <Link
              to="/"
              style={
                currentRoute === "home"
                  ? { borderBottom: "2px solid white" }
                  : { borderBottom: "2px solid transparent" }
              }
            >
              Home
            </Link>
          </li>
          <li>
            <a href="#">About</a>
            <ul className="tab">
              <li>
                <Link
                  to="/main"
                  style={
                    currentRoute === "main"
                      ? { borderBottom: "2px solid white" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  Main Spot
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  style={
                    currentRoute === "business"
                      ? { borderBottom: "2px solid white" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  Business Spot
                </Link>
              </li>
              <li>
                <Link
                  to="/with"
                  style={
                    currentRoute === "with"
                      ? { borderBottom: "2px solid white" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  With Spot
                </Link>
              </li>
              <li>
                <Link
                  to="/global"
                  style={
                    currentRoute === "global"
                      ? { borderBottom: "2px solid white" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  Global Spot
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Brand</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarComponent;
