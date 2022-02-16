import React, { useState, useEffect } from "react";
import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaCaretDown } from "react-icons/fa";
const NavbarComponent = ({ currentRoute }) => {
  return (
    <header className="navbar active">
      <div className="logo">
        <Link
          to="/"
          style={
            currentRoute === "home"
              ? { borderBottom: "2px solid yellow" }
              : { borderBottom: "2px solid transparent" }
          }
        >
          <img src={icono} alt="Black Spot Studio" className="main-logo"/>
        </Link>
      </div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link
            to="/" id="homes"
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
          <HashLink smooth to="/#game">
            {" "}
            Games <FaCaretDown />
          </HashLink>
          <ul className="tabs" id="menuz">
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
                to="/gogoworld"
                style={
                  currentRoute === "gogoworld"
                    ? { borderBottom: "2px solid yellow" }
                    : { borderBottom: "2px solid transparent" }
                }
              >
                GoGo World
              </Link>
            </li>
            <li>
              <Link
                to="/gogochain"
                style={
                  currentRoute === "gogochain"
                    ? { borderBottom: "2px solid yellow" }
                    : { borderBottom: "2px solid transparent" }
                }
              >
                GoGo Chain
              </Link>
            </li>
            <li>
              <Link
                to="/gogoracing"
                style={
                  currentRoute === "gogoracing"
                    ? { borderBottom: "2px solid yellow" }
                    : { borderBottom: "2px solid transparent" }
                }
              >
                GoGo Racing
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <p>
            About <FaCaretDown />
          </p>
          <ul className="tab" id="menuz">
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
                Careers
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
          <HashLink smooth to="/#contact">
            {" "}
            Contact{" "}
          </HashLink>
        </li>
      </ul>
    </header>
  );
};

export default NavbarComponent;
