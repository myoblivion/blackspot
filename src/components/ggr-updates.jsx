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
const GogoRacingUpdates = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Guide";
  }, []);
  return (
    <div className="gogoracing-updates wrapper">
      <div className="ggr-updates-contents">
        <div className="ggr-udecontents">
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
          <div className="ggr-update-contents">
            <h1>Gogo Racing Patch Notes</h1>
            <h2>1.0.1 Patch Note</h2>
            <ul>
              <li>
                Revision was made on Product category, so expired products can't
                be install anymore.
              </li>
              <li>
                After purchasing fixed-term items, the expiration display has
                been modified to be displayed when the expiration date expires.{" "}
              </li>
              <li>
                [Game Mode] It has been modified so that the sound is output
                when the back button is touched.
              </li>
              <li>
                [Garage] The vehicle name display length has been modified.
              </li>
              <li>
                Revised to remove expired characters and vehicles when updating
                inventory.
              </li>
              <li>
                Fixed the alignment of the character above the in-game and the
                name display that were misplaced.
              </li>
              <li>Added Tapjoy Shop Event icon and function.</li>
              <li>
                Fixed an issue where store alignment did not work properly.
              </li>
              <li>
                Modified the profile to expose character vehicle stats and skill
                information.
              </li>
              <li>
                [Garage] We modified the items that is currently installing so
                that they are aligned at the front.
              </li>
              <li>
                [Garage] If Players have more than one same paint, we have
                improved it to indicate the quantity on one item.
              </li>
              <li>
                [Option] We adjusted the size of the web view window considering
                the sizes of the device.
              </li>
              <li>
                [Option] Fix related to web view back Button issue
                <ul>
                  <li>Add store data</li>
                  <li>Disable the Login Guest button</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="bootons">
          <HashLink smooth to="/ggr-updates#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingUpdates;
