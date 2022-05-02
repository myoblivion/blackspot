import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";

const GogoRacingAnnouncementList = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Announcements";
  }, []);
  return (
    <div className="ggr-announcements wrapper">
      <div className="ggr-announcement-contents">
        <div
          className="ggr-alistgontents"
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
          <div className="ggr-announces">
            <ul>
              <Link
                to="/gogo-racing-raffle-announcement"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li>
                  <h3>🎉 Gogo Racing Play to Win Raffle Event </h3>
                  <span>
                    It’s your time to win while you play! Get a chance to win
                    ACER NITRO 5, IPAD MINI 6th GEN and CASH.
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingAnnouncementList;
