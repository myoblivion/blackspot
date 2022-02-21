import React, { useState, useEffect } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

import image from "../images/banner1.png";
const GoGoWorldComponent = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo World";
  }, []);
  return (
    <div className="gogoworld wrapper">
      <section className="wrapper">
        <h1>Coming Soon</h1>
        <img src={image} alt="Gogo Chain" />
      </section>
      <div className="bootons">
            <HashLink smooth to="/gogoworld#" id="up">
            <FaRegArrowAltCircleUp />

            </HashLink>
        </div>
    </div>
  );
};

export default GoGoWorldComponent;
