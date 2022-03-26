import React, { useState, useEffect, useRef, LinkProps } from "react";

import image from "../images/banner4.png";
import image2 from "../images/gogochain-mobile.png";
import { HashLink } from "react-router-hash-link";
import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import backgroundimg from "../images/gogoracingbackground/coolbackgroundboiiii.png";
const GoGoRacingGuide = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Guide";
  }, []);
  return (
    <div className="gogoracing-guide wrapper">
      <div className="ggr-guide-contents">
        <div className="ggr-gdecontents">
          <div className="ggr-header">
            <div className="ggr-top">
              <div className="ggr-left">
                <Link
                  to="/gogoracingnews"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <IoIosArrowDropleftCircle />
                </Link>
                <h2>
                  <FaUserCircle /> User
                </h2>
              </div>
              <div className="ggr-right">
                <button>
                  <FaSearch />
                </button>
              </div>
            </div>
            <img src={backgroundimg} alt="" />
          </div>
          <div className="ggr-guides">
            <div className="ggr-section-1">
              <div className="game-introduction">
                <h1>Game Intro</h1>
                <p>
                  A racing game where you compete with other users using your
                  purchased and unique cars. Ready your car, finish the line and
                  win a coin and be incentivized.
                </p>
              </div>
              <div className="required">
                <h2>Account Needed: </h2>
                <ul>
                  <li>▶ Personal Gmail account</li>
                  <li>▶ Google Play Store</li>
                  <li>▶ Stable Internet Connection (Wi-fi preferred)</li>
                </ul>
              </div>
              <div className="system-requirements">
                <div className="minimum">
                  <h2>System Requirements</h2>
                  <h3>
                    Minimun: <br />
                    Based on Samsung Galaxy S7
                  </h3>
                  <ul>
                    Android
                    <li>▶ RAM: 4GB</li>
                    <li>▶ OS version: 6.0 (Marshmallow)</li>
                    <li>▶ Memory: 32GB</li>
                    <li>▶ Chipset: ARM Cortex-A53</li>
                  </ul>
                </div>
                <div className="recommended">
                  <h3>
                    Recommended: <br />
                    Based on Samsung Galaxy S10.
                  </h3>
                  <ul>
                    Android
                    <li>▶ RAM: 4GB</li>
                    <li>▶ OS version: 6.0 (Marshmallow)</li>
                    <li>▶ Memory: 32GB</li>
                    <li>▶ Chipset: ARM Cortex-A53</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoGoRacingGuide;
