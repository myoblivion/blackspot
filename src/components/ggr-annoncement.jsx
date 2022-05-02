import React, { useState, useEffect, useRef, LinkProps } from "react";
import image from "../images/banner4.png";
import image2 from "../images/gogochain-mobile.png";
import { HashLink } from "react-router-hash-link";
import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaSearch,
  FaRegArrowAltCircleUp,
  FaWindowClose,
} from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import backgroundimg from "../images/announcement.png";

const GogoRacingRaffleAnnouncement = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Update";
  }, []);
  return (
    <div className="ggr-patch2 wrapper">
      <div className="ggr-patch-contents">
        <div
          className="ggr-pdecontents"
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
          <div className="ggr-patchcontents">
            <h1>REGISTER & WIN NOW</h1>

            <p>
              It’s your time to win while you play! Get a chance to win ACER
              NITRO 5, IPAD MINI 6th GEN and CASH. It’s simple just follow the
              following steps:
            </p>
            <ul>
              <li>
                <a href="https://www.facebook.com/GogoRacingPhilippines/">
                  Like & Follow our Page
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/GogoRacingPhilippines/photos/131756562778581">
                  Like, comment and share this post
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph">
                  Download the game
                </a>
              </li>
              <li>Register on our website https://bit.ly/38A9Qph</li>
              <li>
                Play the Game and complete the 60 days log in rewards (make sure
                to play everyday and get the rewards)
              </li>
            </ul>
            <p>
              It’s easy right? Registration will start on May 1, 2022. Register
              and play for a chance to win these cool prizes! Let’s go GoGo
              Racers! 🥳🥳🥳
            </p>
          </div>
        </div>
        <div className="bootons">
          <HashLink smooth to="/ggr-patch2#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingRaffleAnnouncement;
