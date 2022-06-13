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

const GogoRacingPatch4 = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Update";
  }, []);
  return (
    <div className="ggr-patch4 wrapper">
      <div className="ggr-patc4-contents">
        <div
          className="ggr-pde4contents"
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
          <div className="ggr-patchcontents4">
            <h1>Gogo Racing Patch Notes</h1>
            <h2>1.0.4 Patch Note</h2>
            <h4>Hello GoGo Racers!</h4>
            <p>
              📢📢📢 We have an update today, June 14, 2022! As we want to give
              you an amazing and exciting game, here are detailed patch notes:
            </p>
            <ul>
              <li>
                {" "}
                Unveiled a new character, a strict and arrogant chick named Bbi
              </li>
              <li>
                Added new cars, one is small and cute car called Minimi and a
                special car called Speedstar.
              </li>
              <li>
                Added six (6) new tracks:
                <ul>
                  <li>GoGo Stadium</li>
                  <li>New Town</li>
                  <li>Lost Temple</li>
                  <li>Western Town</li>
                  <li>Clock Tower</li>
                  <li>Space City</li>
                </ul>
              </li>
              <li> GoGo Racing has a total of 14 tracks as of the moment.</li>
              <li>
                Modified the packages on the shop. Items for each packages are
                already visible with images.
              </li>
              <li>Added a lobby chat</li>
              <li>Added a gacha system on the game. </li>
              <li>
                Added a Victory box on the lobby which can be obtained by
                getting 10 trophies.
              </li>
              <li>
                Added a Free box on the lobby that can be received every four
                (4) hours.
              </li>
              <li>Improved the performance and animations of the game.</li>
              <li>Improved the UI of the game.</li>
              <li>Fixed the bugs on the game.</li>
            </ul>
          </div>
        </div>
        <div className="bootons">
          <HashLink smooth to="/ggr-patch4#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingPatch4;
