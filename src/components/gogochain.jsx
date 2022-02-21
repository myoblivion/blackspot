import React, { useState, useEffect } from "react";
import image from "../images/banner4.png";
import { HashLink } from "react-router-hash-link";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const GoGoChainComponent = ({ currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Chain";
  }, []);
  return (
    <div className="gogochain wrapper">
      <section className="wrapper">
        <h1>Coming Soon</h1>
        <img src={image} alt="" />
      </section>
      <div className="bootons">
        <HashLink smooth to="/gogochain#" id="up">
        <FaRegArrowAltCircleUp />

        </HashLink>
      </div>
    </div>
  );
};

export default GoGoChainComponent;
