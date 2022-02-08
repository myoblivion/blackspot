import React, { useState, useEffect } from "react";
import icono from "../images/icons/logo.png";
import closeIcon from "../images/icons/close.png";
import openIcon from "../images/icons/more.png";
import { Link } from "react-router-dom";
import {
  FaCaretDown
} from "react-icons/fa";
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
          <img src={icono} alt="Black Spot Studio" />
        </Link>
      </div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Games</a>
        </li>
        <li>
          <span>
            {" "}
            <a href="#"> About <FaCaretDown /> </a>{" "}
          </span>
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
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default NavbarComponent;
