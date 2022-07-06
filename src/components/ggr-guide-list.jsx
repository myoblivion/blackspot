import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import GameGuideLinks from "./gameguidelinks";
import GameGuidePost from "./gameguidepost";
const GogoracingGuidelist = ({ props, ref, gameguide }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Guide List";
  }, []);
  return (
    <div className="ggr-guidelist wrapper">
      <div className="ggr-glist-contents">
        <div
          className="ggr-glistgontents"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
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
                <Link
                  to="/ggrsearch"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <FaSearch />
                </Link>
              </div>
            </div>
          </div>
          <div className="ggr-guidelist">
            <Routes>
              <Route
                path="/*"
                element={<GameGuideLinks gameguide={gameguide} />}
              />
              <Route
                path="/:gameguideID/*"
                element={<GameGuidePost gameguide={gameguide} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GogoracingGuidelist;
