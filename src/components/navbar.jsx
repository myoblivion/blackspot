import React, { useState, useRef, useEffect } from "react";

import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaCaretDown } from "react-icons/fa";

const NavbarComponent = ({ currentRoute, events }) => {
  let [myCheckbox, setMyCheckbox] = useState(false);

  let menuRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (handleClick) => {
      if (!menuRef.current.contains(handleClick.target)) {
        setMyCheckbox(false);
      }
    });
  });

  return (
    <header className="navbar active">
      <div className="logo">
        <Link to="/">
          <img src={icono} alt="Black Spot Studio" className="main-logo" />
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
      <ul ref={menuRef} className="menu">
        <li>
          <Link to="/" className="nav-item a">
            Home
          </Link>
        </li>
        <li>
          <p>
            Games <FaCaretDown />
          </p>
          <ul className="tabs" id="menuz">
            <li>
              <Link to="/scion" className="nav-item a">
                Scion Fist
              </Link>
            </li>
            <li>
              <Link to="/gogoworld" className="nav-item a">
                GoGo World
              </Link>
            </li>
            <li>
              <Link to="/gogochain" className="nav-item a">
                GoGo Chain
              </Link>
            </li>
            <li>
              <Link to="/gogoracing" className="nav-item a">
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
              <Link to="/about" className="nav-item a">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/direction" className="nav-item a">
                Directions
              </Link>
            </li>
            <li>
              <Link to="/job" className="nav-item a">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/news" className="nav-item a">
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
