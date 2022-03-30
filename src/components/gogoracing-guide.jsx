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
import speedleague from "../images/ggrguide/stuff27.png";
import speeddescript from "../images/ggrguide/stuff28.png";
import linkacc from "../images/ggrguide/stuff29.png";
import prefferd from "../images/ggrguide/stuff30.png";
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
                <input type="checkbox" name="searched" id="close" />
                <label htmlFor="search" id="close">
                  <FaWindowClose />
                </label>
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
                <h2 id="acct">Game Requirement: </h2>
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
                    Minimum: <br />
                    Based on Samsung Galaxy S7
                  </h3>
                  <ul>
                    Android
                    <li>▶ Requires at least 1GB RAM</li>
                    <li>▶ AOS 8.0 or higher / Galaxy Note 3 or higher</li>
                  </ul>
                </div>
                <div className="moderate">
                  <h3>
                    Moderate: <br />
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
                <div className="recommended">
                  <h3>
                    Recommended: <br />
                    Based on Samsung Galaxy S10.
                  </h3>
                  <ul>
                    Android
                    <li>▶ RAM: 8GB</li>
                    <li>▶ OS version: 6.0 (Marshmallow)</li>
                    <li>▶ Memory: 32GB</li>
                    <li>▶ Chipset: ARM Cortex-A53</li>
                  </ul>
                </div>
              </div>
              <div className="ui-guide">
                <h2 id="uiguide">UI GUIDE</h2>
                <img src={uiguide} alt="UI Game Guide" />
                <h3 id="basic">Basic/Current game interface</h3>
                <hr />
                <img src={pfguide} alt="" className="profile-guide" />
                <h3>Profile/Avatar</h3>
                <ul>
                  <li>▶ Character Avatar</li>
                  <li>▶ Display Name</li>
                  <li>▶ Character Level & Current Experience Points</li>
                </ul>
                <hr />
                <h3 id="profile-contents">Profile Contents</h3>
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
                <h3 id="daily-login-reward">Daily Login Reward Calendar</h3>
                <img src={dailyreward} alt="" />
                <ul>
                  <li>▶ Players were given with rewards on a daily basis. </li>
                  <li>▶ Rewards may differ everyday. </li>
                  <li>▶ Players must login in order to receive the rewards.</li>
                </ul>
                <hr />
                <h3 id="reward-box">Reward Box</h3>
                <img src={dailybox} alt="" />
                <hr />
                <h3 id="coupon">Coupon & Rewards</h3>
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
                <h3 id="nft">NFT</h3>
                <img src={nft} alt="" />
                <ul>
                  <li>▶ Currently locked.</li>
                  <li>▶ Mechanics will be given and updated soon.</li>
                </ul>
                <hr />
                <div className="garages">
                  <h3 id="garage">Garage</h3>
                  <img src={garage} alt="" />
                  <ul>
                    <li>
                      <span></span> Equipped car basic stats.
                    </li>
                    <li>
                      <span></span> Chips Box
                    </li>
                    <li>
                      <span></span> Bunny Button
                    </li>
                    <li>
                      <span></span> Car Tab
                    </li>
                    <li>
                      <span></span> Tab items
                    </li>
                    <li>
                      <span></span> Character Tab
                    </li>
                    <li>
                      <span></span> Tire Tab
                    </li>
                    <li>
                      <span></span> Spoiler Tab
                    </li>
                    <li>
                      <span></span> Character Class
                    </li>
                    <li>
                      <span></span> Active/Passive Skills
                    </li>
                    <li>
                      <span></span> Equip Button
                    </li>
                    <li id="stuff">
                      <span> </span> Chips – are items that can be equipped to
                      your car to gain additional stats.
                      <img src={chips} alt="" />
                      <ul>
                        <li>Engine Chip</li>
                        <li>Nitro Chip</li>
                        <li>Muffler Chip</li>
                        <li>AI Chip</li>
                        <li>Close Button</li>
                        <li>
                          Synthesis – you can combine 3 same grade/category
                          chips in order to receive a higher grade (by chance)
                          or with higher stats.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <img src={synthesis} alt="" />
                </div>
                <hr />
                <h3 id="mining">Mining</h3>
                <img src={mining} alt="" />
                <p>▶ Mechanics will be updated soon.</p>
                <hr />
                <h3 id="rankings">Rankings</h3>
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

                <h3 id="equipped-car">Equipped Car and Character</h3>
                <img src={equip} alt="" />
                <hr />

                <div className="currency" id="currency">
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
                <h3 id="package">Package</h3>
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
                <h3 id="language-settings">Language Settings</h3>
                <img src={language} alt="" />
                <p>Current Languages available are English and Korean.</p>
                <hr />
                <h3 id="game-settings">Game Settings</h3>
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
                <h3 id="leaderboard">Leaderboard</h3>
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
                <h3 id="game-mode">Start</h3>
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
                  <li>
                    ▶ Time Record{" "}
                    <ul>
                      <li>Best Record (Public record)</li>
                      <li>My Record (Personal record)</li>
                    </ul>
                  </li>
                  <li>
                    ▶ Track Info
                    <ul>
                      <li>Shows the track description</li>
                    </ul>
                  </li>
                  <li>▶ Available tracks</li>
                  <li>
                    ▶ Start button
                    <ul>
                      <li>Will find a match and be directed to the race</li>
                    </ul>
                  </li>
                  <li>▶ Track difficulty level</li>
                  <li>
                    ▶ Speed League
                    <ul>
                      <li>
                        Objective: To be placed in Podium in order to increase
                        ranking.{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
                <img src={speedleague} alt="" />
                <ul>
                  <li>
                    ▶ Speed League Description
                    <img src={speeddescript} alt="" />
                    <ul>
                      <li>
                        Shows a description on how speed league will be played.
                      </li>
                    </ul>
                  </li>
                  <li>
                    ▶ Ranking
                    <ul>
                      <li>Shows your current ranking</li>
                      <li>Shows the total games played and games won.</li>
                    </ul>
                  </li>
                  <li>
                    ▶ Track Info
                    <ul>
                      <li>Shows track description and difficulty level</li>
                    </ul>
                  </li>
                  <li>
                    ▶ Available Tracks
                    <ul>
                      <li>
                        Available tracks will be updated as the rank increases.
                      </li>
                    </ul>
                  </li>
                  <li>
                    ▶ Start button
                    <ul>
                      <li>Will find a match and directed to the race.</li>
                    </ul>
                  </li>
                </ul>
                <div className="account-linking">
                  <h2>Account Linking</h2>
                  <ul>
                    <li>
                      👉 Step 1: Select Google Login
                      <img src={linkacc} alt="" />
                    </li>
                    <li>
                      👉 Step 2: Select your preferred Google account.
                      <img src={prefferd} alt="" />
                    </li>
                  </ul>
                </div>
                <div className="coming-soon">
                  <h2>Will be updated soon:</h2>
                  <ul>
                    <li>▶ Friends</li>
                    <li>▶ Swap</li>
                    <li>▶ Quest</li>
                    <li>▶ Shop</li>
                    <li>▶ Gacha</li>
                    <li>▶ Victory</li>
                    <li>▶ Free Box</li>
                    <li>▶ Clan</li>
                  </ul>
                </div>
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
                <li id="hover">
                  {" "}
                  <label htmlFor="drop-down" id="dropss">
                    UI Guide ▼
                  </label>
                  <input type="checkbox" name="drop-down" id="drop-down" />
                  <ul id="hidden">
                    <li>
                      <HashLink smooth to="/gogoracing-guide#basic">
                        Basic Game Interface
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#profile-contents">
                        Profile Contents
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        smooth
                        to="/gogoracing-guide#daily-login-reward"
                      >
                        Daily Login Reward Calendar
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#reward-box">
                        Reward Box
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#coupon">
                        Coupon & Rewards
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#nft">
                        NFT
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#garage">
                        Garage
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#mining">
                        Mining
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#rankings">
                        Rankings
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#equipped-car">
                        Equipped Car & Character
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#currency">
                        Game Coins/Currency
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#package">
                        Package
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#language-settings">
                        Language Settings
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#game-settings">
                        Game Settings
                      </HashLink>
                    </li>{" "}
                    <li>
                      <HashLink smooth to="/gogoracing-guide#leaderboard">
                        Leaderboard
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/gogoracing-guide#game-mode">
                        Game Mode
                      </HashLink>
                    </li>
                  </ul>
                </li>
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
