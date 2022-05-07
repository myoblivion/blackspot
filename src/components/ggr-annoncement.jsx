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
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import backgroundimg from "../images/announcement.png";
import Formsz from "../images/icons/form.png";
import { Form } from "react-admin";
import ReactPlayer from "react-player";
import Images1 from "../images/event/1233.png";
import Images2 from "../images/event/IGN.PNG.png";
import Images3 from "../images/event/n.png";

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
                <h3>Download the game & Register</h3>
              </li>
              <li>
                {" "}
                <a href="https://play.google.com/store/apps/details?id=com.blackspotstudio.gogoracing.ph&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                  <img
                    alt="Get it on Google Play"
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  />
                </a>
              </li>
              <li>
                <h3>Follow This Video</h3>
              </li>
              <li>
              <ReactPlayer
                  className="react-player fixed-bottom"
                  url="videos/Likecommenttags.mp4"
                  width="100%"
                  height="100%"
                  playing={true}
                  muted={true}
                  loop={true}
                  controls={false}
                />  
              </li>
              <li>
                {" "}
                <a href="https://www.facebook.com/GogoRacingPhilippines">
                  Link to our Facebook page <FaExternalLinkAlt />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/GogoRacingPhilippines/posts/131756579445246">
                  Like, comment, and share this post
                </a>
              </li>

              <li>
                <a href="https://bit.ly/38A9Qph">
                  {" "}
                  Register on our website <FaExternalLinkAlt />
                </a>
              </li>
              <li id="formzs">
                <img src={Formsz} alt="" />
              </li>
              <li>
                <h3> Follow the Game Requirements</h3>
              </li>
              <li>
                👉 Play the Game and complete the 60 days log in rewards <br />{" "}
                (make sure to play everyday and get the rewards)
              </li>
              <img src={Images3} alt="" />
              <li>👉 Level up your account ( must reach the level 10)</li>
              <li>
                <img src={Images2} alt="" />
              </li>
              <li>👉 Rank UP! (must reach platinum rank)</li>
              <li>
                <img src={Images1} alt="" />
              </li>
              <li>
                <h3>Wait for the raffle result</h3>
              </li>
              <li>
                It’s easy, right? Registration will start on May 1, 2022.
                Register and play for a chance to win these cool prizes! Let’s
                go GoGo Racers! 🥳🥳🥳
              </li>
            </ul>
            <ul className="no-emoji">
              <li>
                🌐 To know more about our games visit:{" "}
                <a href="https://linktr.ee/BSSPH">👉 https://linktr.ee/BSSPH</a>
              </li>
            </ul>
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
