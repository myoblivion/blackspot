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
            <h1>REGISTER & WIN NOW</h1>

            <p>
              It’s your time to win while you play! Get a chance to win ACER
              NITRO 5, IPAD MINI 6th GEN and CASH. It’s simple just follow the
              following steps:
            </p>
            <ul>
              <li>
                <h3>STEP 1 -- Follow our community</h3>
                <br /> 1. Like & Follow our Page
                <br />
                ➡️{" "}
                <a href="https://www.facebook.com/GogoRacingPhilippines/">
                  https://www.facebook.com/GogoRacingPhilippines/
                </a>
                <br /> 2. Like, comment, tag 5 friends, and share this post
                <br />
                ➡️{" "}
                <a href="https://www.facebook.com/GogoRacingPhilippines/photos/131756562778581">
                  {" "}
                  https://www.facebook.com/GogoRacingPhilippines/photos/131756562778581
                </a>
              </li>
              <li>
                <h3>STEP 2 -- Download the game & Register</h3>
                <br />{" "}
                <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph">
                  Download the game
                </a>
                <br /> Register on our website <br />
                <a href="https://bit.ly/38A9Qph">https://bit.ly/38A9Qph</a>
              </li>
              <li>
                <h3>STEP 3 -- Follow the Game Requirements</h3>
                <br /> 1. Play the Game and complete the 60 days log in rewards
                (make sure to play everyday and get the rewards)
                <br /> 2. Level up your account ( must reach the level 10-
                above) 3. Rank UP! (must reach platinum rank) aa
              </li>
              <li>
                <h3>STEP 4 -- Wait for the raffle result</h3>
              </li>
              <li>
                It’s easy, right? Registration will start on May 1, 2022.
                Register and play for a chance to win these cool prizes! Let’s
                go GoGo Racers! 🥳🥳🥳
              </li>
            </ul>
            <p>
              It’s easy right? Registration will start on May 1, 2022. Register
              and play for a chance to win these cool prizes! Let’s go GoGo
              Racers! 🥳🥳🥳
            </p>
            <ul className="no-emoji">
              <li>
                📲 You may download the game here:{" "}
                <a href="https://bit.ly/3JCuqTP">https://bit.ly/3JCuqTP </a>{" "}
              </li>
              <li>
                🌐 To know more about our games visit:{" "}
                <a href="https://linktr.ee/BSSPH">https://linktr.ee/BSSPH</a>
              </li>
            </ul>
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
