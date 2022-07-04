import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import PostsLinks from "./postLinks";
import Post from "./Post";

const GogoRacingUpdateList = ({ props, ref, currentRoute, posts }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Update List";
  }, []);
  return (
    <div className="gogoracing-list wrapper">
      <div className="gogo-racing-list-wrapper">
        <div
          className="ggrupdatelist-contents"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div className="ggr-top">
            <div className="ggr-left">
              <Link
                to="/ggr-update-list"
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
          <div className="ggrlists-contents">
            <ol>
              <Link
                to="/ggr-patch4"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li>
                  <div className="li-left"></div>
                  <div className="li-right">
                    <h3>🔊 1.0.4 Patch Note</h3>
                    <span>06.13.2022</span>
                  </div>
                </li>
              </Link>
              <Link
                to="/ggr-patch3"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li>
                  <div className="li-left"></div>
                  <div className="li-right">
                    <h3>🔊 1.0.3 Patch Note</h3>
                    <span>04.04.2022</span>
                  </div>
                </li>
              </Link>
              <Link
                to="/ggr-patch2"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li>
                  <div className="li-left"></div>
                  <div className="li-right">
                    <h3>🔊 1.0.2 Patch Note</h3>
                    <span>03.25.2022</span>
                  </div>
                </li>
              </Link>
              <Link
                to="/ggr-updates"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li>
                  <div className="li-left"></div>
                  <div className="li-right">
                    <h3>🔊 1.0.1 Patch Note</h3>
                    <span>03.23.2022</span>
                  </div>
                </li>
              </Link>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingUpdateList;
