import React, { useState, useEffect, useRef, LinkProps } from "react";

// Aos Animate on Scroll
import Aos from "aos";
import "aos/dist/aos.css";

import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaCaretDown } from "react-icons/fa";

const NavbarComponent = ({ props, ref, currentRoute, events }) => {
  // Aos Init
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let [myCheckbox, setMyCheckbox] = useState(false);

  let menuRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (handleClick) => {
      if (!menuRef.current.contains(handleClick.target)) {
        setMyCheckbox(false);
      }
    });
  });
  const [click, seClick] = useState(false);
  return (
    <header className="navbar active">
      <div className="logo">
        <Link to="/">
          <img
            src={icono}
            alt="Black Spot Studio"
            className="main-logo"
            data-aos="fade-right"
          />
        </Link>
      </div>

      <input
        className="menu-btn"
        type="checkbox"
        id="menu-btn"
        value={myCheckbox}
        checked={myCheckbox}
        onChange={(_e) => setMyCheckbox((prev) => !prev)}
      />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu" ref={menuRef}>
        <li
          className={click ? "nav-menu active" : "nav-menu"}
          onClick={() => setMyCheckbox((prev) => !prev)}
          ref={menuRef}
        >
          <Link
            to="/"
            className="nav-item a"
            {...props}
            ref={ref}
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </Link>
        </li>
        <li>
          <p>
            Games <FaCaretDown />
          </p>
          <ul className="tabs" id="menuz">
            <li
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={() => setMyCheckbox((prev) => !prev)}
              ref={menuRef}
            >
              <Link
                to="/scion"
                className="nav-item a"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                Scion Fist
              </Link>
            </li>
            <li
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={() => setMyCheckbox((prev) => !prev)}
              ref={menuRef}
            >
              <Link
                to="/gogoracing"
                className="nav-item a"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                GoGo Racing
              </Link>
            </li>
            <li
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={() => setMyCheckbox((prev) => !prev)}
              ref={menuRef}
            >
              <Link
                to="/gogoworld"
                className="nav-item a"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                GoGo World
              </Link>
            </li>
            <li
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={() => setMyCheckbox((prev) => !prev)}
              ref={menuRef}
            >
              <Link
                to="/gogochain"
                className="nav-item a"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                GoGo Chain
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <p>
            About <FaCaretDown />
          </p>
          <ul className="tab" id="menuz">
            <li
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={() => setMyCheckbox((prev) => !prev)}
              ref={menuRef}
            >
              <Link
                to="/about"
                className="nav-item a"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                About Us
              </Link>
            </li>
            <li
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={() => setMyCheckbox((prev) => !prev)}
              ref={menuRef}
            >
              <Link
                to="/direction"
                className="nav-item a"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                Directions
              </Link>
            </li>
            <li
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={() => setMyCheckbox((prev) => !prev)}
              ref={menuRef}
            >
              <Link
                to="/job"
                className="nav-item a"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                Careers
              </Link>
            </li>
            <li
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={() => setMyCheckbox((prev) => !prev)}
              ref={menuRef}
            >
              <Link
                to="/news"
                className="nav-item a"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                News & Announcements
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={click ? "nav-menu active" : "nav-menu"}
          onClick={() => setMyCheckbox((prev) => !prev)}
          ref={menuRef}
        >
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
