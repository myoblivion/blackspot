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
import backgroundimg from "../images/gogoracingbackground/ingamesquad.png";
import dudes from "../images/gogoracingbackground/Announcement.png";

const GogoSquadEvent = ({ props, ref, currentRoute }) => {
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Squad Event";
  }, []);
  return (
    <div className="gogoracing-updates wrapper">
      <div className="ggr-updates-contents">
        <div
          className="ggr-udecontents1"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <img
            src={dudes}
            alt=""
            id="characters"
            data-aos="zoom-in"
            data-aos-duration="500"
          />
          <h1>Gogo Racing Game Guide</h1>
          <div className="ggr-header">
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
            <img src={backgroundimg} alt="" />
          </div>
          <div className="ggr-update-contents">
            <h1>ARE YOU READY, GOGO RACERS?</h1>
            <h2>REQUIREMENTS</h2>
            <ul>
              <li>
                PARTICIPANTS [LEADER AND MEMBERS] MUST HAVE A GGR ACCOUNT TO
                PARTICIPATE
              </li>
              <li>PARTICIPANTS MUST LIKE AND FOLLOW THE PAGE</li>
              <li>
                PARTICIPANTS MUST FOLLOW THE COMMENT AND TAGGING FORMAT [REF TO
                STEPS 3 & 4]
              </li>
              <li>
                MAKE SURE THAT THE EVENT POST IS IN "PUBLIC" UPON OR WHEN
                SHARING
              </li>
              <li>
                FAILURE TO COMPLY WITH THE REQUIREMENTS WILL BE DISQUALIFIED
              </li>
            </ul>
            <h2>REWARDS</h2>
            <h3>1st Place</h3>
            <ul>
              <li>CASH PRIZE 250 PHP each (A total of 1,500 PHP)</li>
              <li>150 Dias each</li>
              <li>10x Gacha Tickets each</li>
              <li>GoGoStar (14 Days) each</li>
              <li>Pengsuni [30 Days] each</li>
            </ul>
            <h3>2nd Place</h3>
            <ul>
              <li>CASH PRIZE 200 EACH (A total of 1,200 PHP)</li>
              <li>5x Gacha tickets each</li>
              <li>100 Dias each</li>
              <li>1x Spoiler – Lollipop each</li>
              <li>1x Paint – Khaki each</li>
            </ul>
            <h3>3rd Place</h3>
            <ul>
              <li>1x Paint – Khaki each</li>
              <li>5x Gacha Tickets</li>
              <li>60 Dias each</li>
              <li>1x Spoiler – Lollipop each</li>
              <li>1x Paint – Yellow each</li>
            </ul>
            <h2>Consolation </h2>
            <ul>
              <li>3 RANDOM LUCKY SQUAD / TEAM (each squad members)</li>
              <li>5,000 Gogo Tokens each </li>
            </ul>

            <h2> 📲: You may download the game here:</h2>
            <ul>
              <li>
                + Android:
                <a href="https://bit.ly/3JCuqTP">https://bit.ly/3JCuqTP</a>
              </li>
              <li>
                + IOS:
                <a href="https://apple.co/3Ocm0Ee">https://apple.co/3Ocm0Ee</a>
              </li>
              <li>
                🌐To know more about our games visit:{" "}
                <a href="https://linktr.ee/BSSPH">https://linktr.ee/BSSPH</a>{" "}
              </li>
            </ul>
            <h2>
              To know more about the event click{" "}
              <a href="https://fb.watch/fg9pwLNcQ6/" target="_blank">
                here!
              </a>
            </h2>
          </div>
          <div className="bottom-eyes"></div>
        </div>
        <div className="bootons">
          <HashLink smooth to="/gogosquadevent#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GogoSquadEvent;
