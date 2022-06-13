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
import terms from "../images/ggrguide/stuff31.png";
import confirm from "../images/ggrguide/stuff32.png";
import priv from "../images/ggrguide/stuff33.png";
import confirm2 from "../images/ggrguide/stuff34.png";
import all from "../images/ggrguide/stuff35.png";
import download from "../images/ggrguide/stuff36.png";
import download2 from "../images/ggrguide/stuff37.png";
import tutorial from "../images/ggrguide/stuff38.png";
import completetut from "../images/ggrguide/stuff39.png";
import fblogin from "../images/ggrguide/stuff40.png";
import fbinput from "../images/ggrguide/stuff41.png";
import fbcontinue from "../images/ggrguide/stuff42.png";
import link from "../images/ggrguide/stuff43.png";
import link2 from "../images/ggrguide/stuff44.png";
import link3 from "../images/ggrguide/stuff45.png";
import victory from "../images/ggrguide/stuff47.png";
import gacha from "../images/ggrguide/stuff48.png";
import gacha2 from "../images/ggrguide/stuff49.png";
import shop from "../images/ggrguide/stuff51.png";
import shop2 from "../images/ggrguide/stuff50.png";
import quest from "../images/ggrguide/stuff52.png";
import friends from "../images/ggrguide/stuff53.png";
import chat from "../images/ggrguide/stuff54.png";
import game1 from "../images/ggrguide/stuff55.png";
import game2 from "../images/ggrguide/stuff56.png";
import game3 from "../images/ggrguide/stuff57.png";
import game4 from "../images/ggrguide/stuff58.png";
import game5 from "../images/ggrguide/stuff59.png";
import game6 from "../images/ggrguide/stuff60.png";
import game7 from "../images/ggrguide/stuff61.png";
import tickets from "../images/ggrguide/stuff62.png";
import game8 from "../images/ggrguide/stuff63.png";
import game9 from "../images/ggrguide/stuff64.png";
import game10 from "../images/ggrguide/stuff65.png";
import game11 from "../images/ggrguide/stuff66.png";
import game12 from "../images/ggrguide/stuff67.png";
import game13 from "../images/ggrguide/stuff68.png";
import game14 from "../images/ggrguide/stuff69.png";
import game15 from "../images/ggrguide/stuff70.png";

import rewardBox from "../images/ggrguide/stuff46.png";

const GoGoRacingGuide = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Guide";
  }, []);
  return (
    <div className="gogoracing-guide wrapper">
      <div className="ggr-guide-contents">
        <div
          className="ggr-gdecontents"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div className="ggr-header">
            <div className="ggr-top">
              <div className="ggr-left">
                <Link
                  to="/ggr-guide-list"
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
                <img src={rewardBox} alt="" />
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
                <h3 id="victory">Victory</h3>
                <img src={victory} alt="" />
                <ul>
                  <li>
                    ▶ Victory Box reward can be obtained by winning 10 times.
                  </li>
                </ul>
                <hr />
                <h3 id="gacha">Gacha</h3>
                <img src={gacha} alt="" />
                <ul>
                  <li>▶ You can obtain rewards by using Golden Ticket.</li>
                </ul>
                <img src={gacha2} alt="" />
                <ul>
                  <li>▶ You can use 1 to 10 tickets at a time.</li>
                </ul>
                <hr />
                <h3>Tickets</h3>
                <img src={tickets} alt="" />
                <ul>
                  <li>
                    ▶ Grand Prix ticket can be used as an entry ticket to Grand
                    Prix mode.
                  </li>
                  <li>
                    ▶ Gacha Ticket can be used in order to get awesome rewards.
                  </li>
                </ul>
                <hr />
                <h3 id="shop">Shop</h3>
                <img src={shop} alt="" />
                <ul>
                  <li>
                    ▶ You can purchase Shop Items by using Diamonds, Tokens or
                    real money.
                  </li>
                </ul>
                <img src={shop2} alt="" />
                <ul>
                  <li>
                    ▶ Recommended or Hot items are also highlighted for you to
                    check.
                  </li>
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
                  <hr />
                </div>
                <h3 id="quest">Quest</h3>
                <img src={quest} alt="" />
                <ul>
                  <li>
                    ▶ You can obtain rewards such as Diamonds and Tokens after
                    completing a certain quest.
                  </li>
                </ul>
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
                <h3 className="swap">Swap</h3>
                <img src={soonbox} alt="" />
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
                <p>
                  ▶ Current Languages available are English, Korean, Chinese
                  (Simplified), Chinese (Traditional) and Japanese.
                </p>
                <p> ▶ Non-highlighted languages will be updated soon.</p>
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

                <h3>Achievements</h3>
                <img src={achieve} alt="" />
                <ul>
                  <li>Shows achievements of the player to the game.</li>
                </ul>
                <hr />
                <h3>Friends</h3>
                <img src={friends} alt="" />
                <ul>
                  <li>Shows achievements of the player to the game.</li>
                </ul>
                <hr />
                <h3>Chat</h3>
                <img src={chat} alt="" />
                <ul>
                  <li>
                    ▶ You can use the lobby chat in order to communicate with
                    other players.
                  </li>
                </ul>
                <hr />
                <h3 id="game-mode">Start</h3>
                <img src={gamemode} alt="" />
                <ul>
                  <li>
                    ▶ When the player clicks Start, the player will be directed
                    to mode selection screen.
                  </li>
                </ul>
                <hr />
                <h3>Gameplay Guide</h3>
                <h4>Time Attack</h4>
                <p>Objective: </p>
                <p>▶ To set the fastest recorded time per map.</p>
                <p>Mechanics:</p>
                <ul>
                  <li>
                    ▶ Player will race through the entire map setting best lap
                    and time record.
                  </li>
                  <li>▶ No other players can join the race.</li>
                  <li>▶ No items/skills can be used by the player.</li>
                </ul>
                <img src={game1} alt="" />
                <ul>
                  <li>▶ 1. Position/Display Name</li>
                  <li>▶ 2. Car Reset</li>
                  <li>▶ 3. Left and Right Buttons</li>
                  <li>▶ 4. Countdown</li>
                  <li>▶ 5. Character</li>
                  <li>▶ 6. Speedometer</li>
                  <li>▶ 7. Timer</li>
                  <li>▶ 8. Settings</li>
                  <li>▶ 9. Nitro</li>
                  <li>▶ 10. Accelerate</li>
                </ul>
                <hr />
                <h4>Starting boost</h4>
                <img src={game2} alt="" />
                <p>
                  ▶ By pressing the Accelerate button on the right time, your
                  character will gain a starting boost to take lead.
                </p>
                <hr />
                <h4>Drifting</h4>
                <p>
                  ▶ By pressing the drift button and gaining momentum, the drift
                  meter will fill up in order to gain Nitro.
                </p>
                <hr />
                <h4>Drift Boost</h4>
                <p>
                  ▶ After drifting for a long period of time without crashing,
                  you’ll gain a short boost by pressing the Acceleration button.
                </p>
                <img src={game3} alt="" />
                <hr />
                <h4>Drift Boost (Nitro)</h4>
                <p>
                  ▶ After successfully filling the drift meter, your character
                  will gain a Nitro for a quick boost of speed.
                </p>
                <img src={game4} alt="" />
                <img src={game5} alt="" />
                <hr />
                <h4>Boost Pads</h4>
                <p>
                  ▶ By driving over a boost pad, your character will gain a
                  sudden boost like nitro. <br /> ▶ Boost Pads differs in color
                  which gives boost for a longer period of time. Below are the
                  color of boost pads from shortest amount of time to highest:
                </p>
                <img src={game6} alt="" />
                <hr />
                <h4>Nitro Grades</h4>
                <p>
                  ▶ Just like the boost pads, the duration of Nitro depends on
                  the color. The grade of nitro will increase for as long as you
                  are not using your nitro and continue to drift.
                </p>
                <img src={game8} alt="" />
                <hr />
                <h4>Result</h4>
                <p>▶ The result shows your time per lap and it’s overall.</p>
                <p>
                  ▶ You’ll notice that you’ve broken a record if you have (-)
                  minus amount of time.
                </p>
                <img src={game7} alt="" />
                <hr />
                <div className="speed-league">
                  <h4>Speed League</h4>
                  <p>Objective</p>
                  <ul>
                    <li>
                      ▶ To be on placed in Podium in order to increase Ranking.
                    </li>
                  </ul>
                  <p>Mechanics</p>
                  <ul>
                    <li>
                      ▶ Player will race through the entire map and placing in
                      Podium.{" "}
                    </li>
                    <li>▶ 5 other players can join the game</li>
                    <li>▶ No items/skills can be used by the player.</li>
                    <li>▶ Map is selected randomly.</li>
                  </ul>
                  <h4>Lobby</h4>
                  <p>
                    ▶ After finding a match, you will be directed to the race
                    lobby.
                  </p>
                  <img src={game9} alt="" />
                  <ul>
                    <li>▶ Race Timer</li>
                    <li>▶ Racers</li>
                    <li>▶ Map description and difficulty level</li>
                    <li>▶ Ready button</li>
                  </ul>
                  <p>
                    Note: Speed League has the same game mechanics as Time
                    Attack which was already stated above.
                  </p>
                  <hr />
                  <h4>DNF (Did not Finish) Timer</h4>
                  <img src={game10} alt="" />
                  <ul>
                    <li>
                      ▶ DNF is enabled once a racer already finished the racer.
                    </li>
                    <li>
                      ▶ All players who are unable to reach the finish line
                      after the counter ends, players will be labeled as DNF.
                    </li>
                  </ul>
                  <hr />
                  <h4>Result</h4>
                  <img src={game11} alt="" />
                  <ul>
                    <li>▶ Podium Finishers</li>
                    <li>▶ Race result per order</li>
                  </ul>
                  <hr />
                  <h4>Item League</h4>
                  <p>Objective:</p>
                  <ul>
                    <li>
                      ▶ To be on placed in Podium in order to increase Ranking.
                    </li>
                    <li>
                      ▶ To let a team member be the first placer in order to win
                      and placed in podium
                    </li>
                  </ul>
                  <p>Mechanics:</p>
                  <ul>
                    <li>
                      ▶ Player will race through the entire map and placing in
                      Podium.
                    </li>
                    <li>▶ 5 other players can join the game</li>
                    <li>▶ Items/skills can be used by the player.</li>
                    <li>▶ Map is selected randomly.</li>
                  </ul>
                  <h4>Lobby</h4>
                  <p>
                    Same like Speed League, players will be redirected to the
                    lobby
                  </p>
                  <img src={game12} alt="" />
                  <p>
                    Note: Item League has the same game mechanics as Time Attack
                    which was already stated above. Item only differs on Speed
                    League since players can use items and skills.
                  </p>
                  <hr />
                  <h4>Passive/Active Skills</h4>
                  <ul>
                    <li>
                      ▶ Passive and active skill depends on the character that
                      you are using.
                    </li>
                    <li>
                      ▶ Before the race starts, your active skills already
                      available to use while the passive is already activated.
                    </li>
                  </ul>
                  <img src={game13} alt="" />
                  <hr />
                  <h4>Items</h4>
                  <p>
                    items can be obtained by driving through a random box, a
                    random item will be given and can be used for advantage.
                  </p>
                  <img src={game14} alt="" />
                  <ul>
                    <li>
                      ▶ Same as the Speed League, podium finishers are
                      highlighted.
                    </li>
                    <li>
                      ▶ Team members of who finished first will be included in
                      the podium.
                    </li>
                    <li>▶ Characters are sorted per order.</li>
                  </ul>
                  <img src={game15} alt="" />
                  <hr />
                </div>
                <div className="coming-soon">
                  <h2>Will be updated soon:</h2>
                  <ul>
                    <li>▶ Swap</li>
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
