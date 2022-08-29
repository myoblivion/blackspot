import React, { useState, useEffect, useRef, LinkProps } from "react";
import image from "../images/goracing.png";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import NewsPageLinks from "./newspagelinks";
import NewsPost from "./newspost";
import dudes from "../images/gogoracingbackground/Announcement.png";

const GGRnews = ({ props, ref, newspage }) => {
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing News";
  }, []);

  // Title

  return (
    <div className="gogoracingnewsletter wrapper">
      <div className="gogo-racing-newsletter-wrapper">
        <div className="ggr-blah">
          {" "}
          <img
            src={dudes}
            alt=""
            id="characters"
            data-aos="zoom-in"
            data-aos-duration="500"
          />
          <h1> Gogo Racing News</h1>
          <div className="gr-nletter">
            <div
              className="ggrnewsletterwrap-contents"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <div className="ggr-top">
                <div className="ggr-left">
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
              <div className="ggrnwsz-contents">
                {/* <Routes>
                  <Route
                    path="/*"
                    element={<NewsPageLinks newspage={newspage} />}
                  />
                  <Route
                    path="/:newsID/*"
                    element={<NewsPost newspage={newspage} />}
                  />
                </Routes> */}
                <ol>
                  <li>No News for the moment</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GGRnews;
