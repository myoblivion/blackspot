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
import rankings from "../images/ggrguide/stuff14.png";
import rankingmechanic from "../images/ggrguide/stuff15.png";
import ratingtable from "../images/ggrguide/stuff16.png";
import scorerating from "../images/ggrguide/stuff17.png";
import gogocoin from "../images/ggrguide/gogotoken.png";
import diamond from "../images/ggrguide/icon_dia.png";
import equip from "../images/ggrguide/stuff18.png";
import packages from "../images/ggrguide/stuff19.png";
import package2 from "../images/ggrguide/stuff20.png";
import language from "../images/ggrguide/stuff21.png";
import settings from "../images/ggrguide/stuff22.png";
import leaderbord from "../images/ggrguide/stuff23.png";
import achieve from "../images/ggrguide/icon_achiv.png";
import gamemode from "../images/ggrguide/stuff25.png";
import timeattack from "../images/ggrguide/stuff26.png";
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
                <label htmlFor="search" id="searchs">
                  <FaSearch />
                </label>
                <input type="checkbox" name="searched" id="search" />
                <input
                  type="text"
                  id="text-search"
                  placeholder="Enter the word to search for.."
                />
              </div>
            </div>
            <img src={backgroundimg} alt="" />
          </div>
          <div className="ggr-guides">
            <div className="ggr-section-1">
              <div className="game-introduction">
                <h1 id="introo">Game Intro</h1>
                <p>
                  A racing game where you compete with other users using your
                  purchased and unique cars. Ready your car, finish the line and
                  win a coin and be incentivized.
                </p>
              </div>
              <div className="required">
                <h2 id="acct">Account Needed: </h2>
                <ul>
                  <li>▶ Personal Gmail account</li>
                  <li>▶ Google Play Store</li>
                  <li>▶ Stable Internet Connection (Wi-fi preferred)</li>
                </ul>
              </div>
              <div className="system-requirements">
                <div className="minimum">
                  <h2 id="requirementss">System Requirements</h2>
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
                <h2 id="uiguide">UI GUIDE</h2>
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
                <hr />
                <h3>Rankings</h3>
                <img src={rankings} alt="" />
                <ul>
                  <li>
                    ▶ Ranking Mechanics button
                    <img src={rankingmechanic} alt="" />
                  </li>
                  <li>
                    ▶ Rating Table
                    <img src={ratingtable} alt="" />
                  </li>
                  <li>
                    ▶ Score Rating
                    <img src={scorerating} alt="" />
                  </li>
                  <li>
                    ▶ Track List - Tracks are highlighted per Score rating.
                  </li>
                  <li>▶ Speed League Ranking Button</li>
                  <li>▶ Item League Ranking Button</li>
                  <li>▶ Ranked character table</li>
                  <li>▶ Character ranking</li>
                </ul>
                <hr />

                <h3>Equipped Car and Character</h3>
                <img src={equip} alt="" />
                <hr />

                <div className="currency">
                  <div className="gogocoins">
                    <h3>Gogo Coins</h3>
                    <img src={gogocoin} alt="" id="gogocoin" />
                    <ul>
                      <li>▶ Shows current amount of GoGo Coins.</li>
                      <li>▶ Will be directed to when pressed.</li>
                    </ul>
                  </div>
                  <div className="diamons">
                    <h3>Diamonds</h3>
                    <img src={diamond} alt="" id="diamond" />
                    <ul>
                      <li>▶ Shows current amount of Diamonds.</li>
                      <li>▶ Will be directed to when pressed.</li>
                    </ul>
                  </div>
                </div>
                <hr />
                <h3>Package</h3>
                <img src={packages} alt="" />
                <ul>
                  <li>▶ Package Tab</li>
                  <li>▶ Offered Packages</li>
                  <li>
                    ▶ Highlighted Package Section <br />- Shows information
                    regarding the items included.
                  </li>
                  <li>
                    ▶ Buy Button
                    <img src={package2} alt="" />
                  </li>
                  <li>▶ Confirm when purchasing the package.</li>
                </ul>
                <hr />
                <h3>Language Settings</h3>
                <img src={language} alt="" />
                <p>Current Languages available are English and Korean.</p>
                <hr />
                <h3>Game Settings</h3>
                <img src={settings} alt="" />
                <ul>
                  <li>
                    ▶ Social Media <br />
                    <ul>
                      <li>Will be directed to the social media of the game</li>
                    </ul>
                  </li>
                  <li>
                    ▶ Notice <br />
                    <ul>
                      <li>
                        A notice to the players regarding the future updates.
                      </li>
                    </ul>
                  </li>
                  <li>
                    ▶ Service Center <br />
                    <ul>
                      <li>
                        Will be directed to Customer Support for inquiries.
                      </li>
                    </ul>
                  </li>
                  <li>
                    ▶ Version
                    <ul>
                      <li>Current game version</li>
                    </ul>
                  </li>
                  <li>
                    ▶ Account no.
                    <ul>
                      <li>Unique number assigned to the account.</li>
                    </ul>
                  </li>
                  <li>
                    ▶ Copy Button
                    <ul>
                      <li>Button to easily copy the account no.</li>
                    </ul>
                  </li>
                  <li>
                    ▶ Game setting Selectors
                    <ul>
                      <li>Language</li>
                      <li>Graphics</li>
                      <li>Resolution</li>
                      <li>Background Music</li>
                      <li>Sound Effects</li>
                    </ul>
                  </li>
                </ul>
                <hr />
                <h3>Leaderboard</h3>
                <img src={leaderbord} alt="" />
                <ul>
                  <li>Shows public High score of the game.</li>
                </ul>
                <hr />
                <div className="achievements">
                  <h3>Achievements</h3>
                  <img src={achieve} alt="" />
                  <ul>
                    <li>Shows achievements of the player to the game.</li>
                  </ul>
                </div>
                <hr />
                <h3>Start</h3>
                <img src={gamemode} alt="" />
                <ul>
                  <li>
                    ▶ When the player clicks Start, the player will be directed
                    to mode selection screen.
                  </li>
                  <li>
                    ▶ Time Attack
                    <p>Objective: To set the fastest recorded time per map</p>
                    <img src={timeattack} alt="" />
                  </li>
                  <li>▶ </li>
                  <li>▶ </li>
                </ul>
              </div>
            </div>
            <div className="ggr-section-2">
              <h2>Labels</h2>
              <ul>
                <li>
                  <HashLink smooth to="/gogoracing-guide#introo">
                    Game Intro
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink smooth to="/gogoracing-guide#acct">
                    Account Needed
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink smooth to="/gogoracing-guide#requirementss">
                    System Requirements
                  </HashLink>
                </li>
                <li>
                  {" "}
                  <HashLink smooth to="/gogoracing-guide#uiguide">
                    UI Guide
                  </HashLink>
                </li>
                <li></li>
              </ul>
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
