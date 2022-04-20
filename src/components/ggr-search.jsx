import React, { useState, useEffect, useRef, LinkProps } from "react";

import image from "../images/goracing.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import somedog from "../images/somedog.png";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import catto from "../images/gogoracingbackground/catto.png";
import { render } from "react-dom";

const GogoRacingSearch = ({ onSearch, placeholder }) => {
  const onInput = (e) => onSearch(e.target.value);
  <form
    role="search"
    action=""
    method="get"
    onSubmit={(e) => e.preventDefault()}
  >
    <label htmlFor="header-search">
      <span className="visually-hidden">Search blog posts</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search blog posts"
      name="s"
    />
    <button type="submit">Search</button>
  </form>;
};
export default GogoRacingSearch;
