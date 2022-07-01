import React, { useState, useEffect, useRef, LinkProps } from "react";
import image from "../images/banner4.png";
import image2 from "../images/gogochain-mobile.png";
import { HashLink } from "react-router-hash-link";
import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import backgroundimg from "../images/announcement.png";

import Tutorial from "../images/Untitled-1.png";

const GogoRacingRaffleAnnouncement = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Play to Win Raffle Event";
  }, []);
  return (
    <div className="ggr-event wrapper">
      <div className="ggr-event-contents">
        <div
          className="ggr-evecontents"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div className="ggr-header">
            <div className="ggr-top">
              <div className="ggr-left">
                <Link
                  to="/ggr-announcement-list"
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
            <img src={backgroundimg} alt="" />
          </div>
          <div className="ggr-eventucontents">
            <h1>Raffle Ended</h1>
            <img src={Tutorial} alt="" />
            <p>
              See winners here!!{" "}
              <a href="https://bit.ly/3ugnqWS">https://bit.ly/3ugnqWS</a>
            </p>
          </div>
        </div>
        <div className="bootons">
          <HashLink smooth to="/gogo-racing-raffle-announcement#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingRaffleAnnouncement;
