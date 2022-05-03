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
import Formsz from "../images/icons/form.png";
import { Form } from "react-admin";

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
              </li>
              <li>👉 Like & Follow our Page</li>
              <li className="dobol">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGogoRacingPhilippines&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="500"
                  height="535"
                  scrolling="no"
                  frameBorder="0"
                  style={{ border: "none", outline: "none" }}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </li>
              <li>👉 Like, comment, tag 5 friends, and share this post</li>
              <li id="toobig">
                {" "}
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FGogoRacingPhilippines%2Fposts%2F131756579445246&show_text=true&width=500"
                  width="500"
                  height="535"
                  scrolling="no"
                  frameBorder="0"
                  style={{ border: "none", outline: "none" }}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </li>

              <li>
                <h3>STEP 2 -- Download the game & Register</h3>
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
                👉 Register on our website{" "}
                <a href="https://bit.ly/38A9Qph">https://bit.ly/38A9Qph</a>
              </li>
              <li id="formzs">
                <img src={Formsz} alt="" />
              </li>
              <li>
                <h3>STEP 3 -- Follow the Game Requirements</h3>
              </li>
              <li>
                👉 Play the Game and complete the 60 days log in rewards <br />{" "}
                (make sure to play everyday and get the rewards)
              </li>
              <li>👉 Level up your account ( must reach the level 10)</li>
              <li>👉 Rank UP! (must reach platinum rank)</li>
              <li>
                <h3>STEP 4 -- Wait for the raffle result</h3>
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
