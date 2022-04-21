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
import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";

const GogoRacingPatch = ({ props, ref, currentRoute }) => {
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
          <div className="ggr-patchcontents">
            <h1>Gogo Racing Patch Notes</h1>
            <h2>1.0.2 Patch Note</h2>
            <h3>Hello GoGo Racers!</h3>
            <p>
              📢 📢📢 We have an update today, March 25, 2022! As we want to
              give you an amazing game, here are detailed patch notes:
            </p>
            <ul>
              <li>
                Fixed the type display on the paint and package in the purchase
                pop-up window.
              </li>
              <li>
                Correct the alignment in Iteam League that applies to the same
                team when using EMP.
              </li>
              <li>
                Activate the "Change Installation" button in the matching room.
              </li>
              <li>
                Modified the alignment of track difficulty level of each league
                that was displayed differently.
              </li>
              <li>
                Modified the text "cencel" ➡️ "cancel" in the system pop-up
                window
              </li>
              <li>Altered the basic animation of the practice character.</li>
              <li>Changed UI effects of results on the Time Attack Mode.</li>
              <li>Upcoming new car and character added in the shop.</li>
              <li>
                Correct the appearance of repeated acquisition when acquiring
                item boxes during Item League play
              </li>
              <li>
                Ingame distance calculation UI, modify function to operate until
                end of game
              </li>
              <li>
                Fixed the appearance that AI when the network is unstable.
              </li>
              <li>
                Changed the display: Pop-up window will be removed when all
                attendance compensation is obtained
              </li>

              <li>
                Established Account Linking on Google or Facebook Account.{" "}
              </li>
              <li>
                Fixed the animation on the ranking profile.
                <ul>
                  <li>
                    📱 : You may download the game here:{" "}
                    <a href="https://bit.ly/3JCuqTP">https://bit.ly/3JCuqTP</a>
                  </li>
                  <li>
                    🌐: To know more about our games visit:
                    <a href="https://linktr.ee/BSSPH">
                      https://linktr.ee/BSSPH
                    </a>
                  </li>
                </ul>
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

export default GogoRacingPatch;
