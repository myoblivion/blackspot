import React, { useState, useEffect, useRef, LinkProps } from "react";

import image from "../images/banner4.png";
import image2 from "../images/gogochain-mobile.png";
import { HashLink } from "react-router-hash-link";
import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import backgroundimg from "../images/gogoracingbackground/coolbackgroundboiiii.png";
import uiguide from "../images/ggrguide/stuff1.png";
import pfguide from "../images/ggrguide/stuff2.png";
import pfcontents from "../images/ggrguide/stuff3.png";
import dailyreward from "../images/ggrguide/stuff4.png";
import dailybox from "../images/ggrguide/stuff5.png";
import soonbox from "../images/ggrguide/stuff6.png";
import coupon from "../images/ggrguide/stuff7.png";
import reward from "../images/ggrguide/stuff8.png";
import nft from "../images/ggrguide/stuff9.png";
import garage from "../images/ggrguide/stuff10.png";
import chips from "../images/ggrguide/stuff11.png";
import synthesis from "../images/ggrguide/stuff12.png";
import mining from "../images/ggrguide/stuff13.png";

const GoGoRacingGuide = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Guide";
  }, []);
  return (
    <div className="gogoracing-guide wrapper">
      <div className="ggr-guide-contents">
        <div className="ggr-gdecontents">
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
                <button>
                  <FaSearch />
                </button>
              </div>
            </div>
            <img src={backgroundimg} alt="" />
          </div>
          <div className="ggr-guides">
            <div className="ggr-section-1">
              <div className="game-introduction">
                <h1>Game Intro</h1>
                <p>
                  A racing game where you compete with other users using your
                  purchased and unique cars. Ready your car, finish the line and
                  win a coin and be incentivized.
                </p>
              </div>
              <div className="required">
                <h2>Account Needed: </h2>
                <ul>
                  <li>▶ Personal Gmail account</li>
                  <li>▶ Google Play Store</li>
                  <li>▶ Stable Internet Connection (Wi-fi preferred)</li>
                </ul>
              </div>
              <div className="system-requirements">
                <div className="minimum">
                  <h2>System Requirements</h2>
                  <h3>
                    Minimun: <br />
                    Based on Samsung Galaxy S7
                  </h3>
                  <ul>
                    Android
                    <li>▶ RAM: 4GB</li>
                    <li>▶ OS version: 6.0 (Marshmallow)</li>
                    <li>▶ Memory: 32GB</li>
                    <li>▶ Chipset: ARM Cortex-A53</li>
                  </ul>
                </div>
                <div className="recommended">
                  <h3>
                    Recommended: <br />
                    Based on Samsung Galaxy S10.
                  </h3>
                  <ul>
                    Android
                    <li>▶ RAM: 4GB</li>
                    <li>▶ OS version: 6.0 (Marshmallow)</li>
                    <li>▶ Memory: 32GB</li>
                    <li>▶ Chipset: ARM Cortex-A53</li>
                  </ul>
                </div>
              </div>
              <div className="ui-guide">
                <h2>UI GUIDE</h2>
                <img src={uiguide} alt="UI Game Guide" />
                <h3>Basic/Current game interface</h3>
                <hr />
                <img src={pfguide} alt="" className="profile-guide" />
                <h3>Profile/Avatar</h3>
                <ul>
                  <li>▶ Character Avatar</li>
                  <li>▶ Display Name</li>
                  <li>▶ Character Level & Current Experience Points</li>
                </ul>
                <hr />
                <h3>Profile Contents</h3>
                <img src={pfcontents} alt="" />
                <ul>
                  <li>▶ Bunny Button – Character will ride the car.</li>
                  <li>▶ Speed League Tab</li>
                  <li>▶ Item League Tab</li>
                  <li>
                    ▶ Speed/Item League Info
                    <ul>
                      <li>Display Name</li>
                      <li>League Rank Rating</li>
                      <li>Score</li>
                      <li>Ranking</li>
                    </ul>
                  </li>
                  <li>
                    ▶ Win/Game Percentage
                    <ul>
                      <li>Win Rate %</li>
                      <li>Games Played</li>
                      <li>Games Won</li>
                    </ul>
                  </li>
                </ul>
                <hr />
                <h3>Daily Login Reward Calendar</h3>
                <img src={dailyreward} alt="" />
                <ul>
                  <li>▶ Players were given with rewards on a daily basis. </li>
                  <li>▶ Rewards may differ everyday. </li>
                  <li>▶ Players must login in order to receive the rewards.</li>
                </ul>
                <hr />
                <h3>Reward Box</h3>
                <img src={dailybox} alt="" />
                <hr />
                <h3>Free Box</h3>
                <img src={soonbox} alt="" />
                <h4>Will Be Updated Soon</h4>
                <hr />
                <h3>Coupon & Rewards</h3>
                <img src={coupon} alt="" />
                <img src={reward} alt="" />
                <ul>
                  <li>
                    ▶ Codes were given to the players depending on the event
                  </li>
                  <li>
                    ▶ Players must input the codes to the input box and should
                    confirm.
                  </li>
                  <li>
                    ▶ Rewards given are depending on the code that the players
                    used.
                  </li>
                </ul>
                <hr />
                <h3>NFT</h3>
                <img src={nft} alt="" />
                <ul>
                  <li>▶ Currently locked.</li>
                  <li>▶ Mechanics will be given and updated soon.</li>
                </ul>
                <hr />
                <h3>Victory</h3>
                <img src={nft} alt="" />
                <hr />
                <h3>Gacha</h3>
                <img src={nft} alt="" />
                <hr />
                <h3>Garage</h3>
                <img src={garage} alt="" />
                <ul>
                  <li>▶ Equipped car basic stats.</li>
                  <li>▶ Chips Box</li>
                  <li>▶ Bunny Button</li>
                  <li>▶ Car Tab</li>
                  <li>▶ Tab items</li>
                  <li>▶ Character Tab</li>
                  <li>▶ Tire Tab</li>
                  <li>▶ Spoiler Tab</li>
                  <li>▶ Character Class</li>
                  <li>▶ Active/Passive Skills</li>
                  <li>▶ Equip Button</li>
                  <li id="stuff">
                    ▶ Chips – are items that can be equipped to your car to gain
                    additional stats.
                    <img src={chips} alt="" />
                    <ul>
                      <li>Engine Chip</li>
                      <li>Nitro Chip</li>
                      <li>Muffler Chip</li>
                      <li>AI Chip</li>
                      <li>Close Button</li>
                      <li>
                        Synthesis – you can combine 3 same grade/category chips
                        in order to receive a higher grade (by chance) or with
                        higher stats.
                      </li>
                    </ul>
                  </li>
                </ul>
                <img src={synthesis} alt="" />
                <hr />
                <h3>Mining</h3>
                <img src={mining} alt="" />
                <p>▶ Mechanics will be updated soon.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bootons">
          <HashLink smooth to="/gogoracing-guide#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GoGoRacingGuide;
