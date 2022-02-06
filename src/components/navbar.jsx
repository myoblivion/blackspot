import React, { useState, useEffect } from "react";
import icono from "../images/icons/logo.png";
import closeIcon from "../images/icons/close.png";
import openIcon from "../images/icons/more.png";
import { Link } from "react-router-dom";

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
       <div className="logo">
          <Link
            to="/"
            style={
              currentRoute === "home"
                ? { borderBottom: "2px solid yellow" }
                : { borderBottom: "2px solid transparent" }
            }
          >
            <img src={icono} alt="Black Spot Studio" />
          </Link>
        </div>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><a href="#">Home</a></li>
    <li>
      <a href="#">Games</a>
    </li>
    <li>
    <span> <a href="#"> About</a> </span>
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
    <li><a href="#">Contact</a></li>
  </ul>
</header>
  );
};

export default NavbarComponent;
