import React, { useState, useEffect } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import f1 from "../images/collection1.png";
import f2 from "../images/collection2.jpg";
import f3 from "../images/collection3.png";
import f4 from "../images/collection4.png";
import f5 from "../images/collection5.png";
import f6 from "../images/collection6.png";
import f7 from "../images/collection7.png";
import image from "../images/banner1.png";
import image2 from "../images/gogoworlds.jpg";
const GoGoWorldComponent = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo World";
  }, []);
  return (
    <div className="gogoworld wrapper">
      <section className="gogoworld-wrapper">
        <h1>Coming Soon</h1>
        <img src={image} alt="Gogo World" id="first-image"/>
        <img src={image2} alt="Gogo World Mobile image" id="second-image"/>
      </section>

      <section className="gogoworld-features">
        <div className="gogoworld-collection">
          <ul>
            <li>
              <img src={f1} alt="" />
            </li>
            <li>
              <img src={f2} alt="" />
            </li>
            <li>
              <img src={f3} alt="" />
            </li>
            <li>
              <img src={f4} alt="" />
            </li>
            <li>
              <img src={f5} alt="" />
            </li>
            <li>
              <img src={f6} alt="" />
            </li>
            <li>
              <img src={f7} alt="" />
            </li>
          </ul>
        </div>
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
