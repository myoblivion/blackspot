import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../images/icons/logo.png";

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
                ? { borderBottom: "2px solid yellow" }
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
                  ? { borderBottom: "2px solid yellow" }
                  : { borderBottom: "2px solid transparent" }
              }
            >
              Home
            </Link>
          </li>

          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">About</a>
            <ul className="tab">
              <li>
                <Link
                  to="/about"
                  style={
                    currentRoute === "about"
                      ? { borderBottom: "2px solid yellow" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/direction"
                  style={
                    currentRoute === "direction"
                      ? { borderBottom: "2px solid yellow" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  Directions
                </Link>
              </li>
              <li>
                <Link
                  to="/scion"
                  style={
                    currentRoute === "scion"
                      ? { borderBottom: "2px solid yellow" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  Scion Fist
                </Link>
              </li>
              <li>
                <Link
                  to="/job"
                  style={
                    currentRoute === "job"
                      ? { borderBottom: "2px solid yellow" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  Job Postings
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  style={
                    currentRoute === "news"
                      ? { borderBottom: "2px solid yellow" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  News & Announcements
                </Link>
              </li>
            </ul>
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
