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

const GogoRacingPatchs = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Update";
  }, []);
  return (
    <div className="ggr-patch3 wrapper">
      <div className="ggr-patc3-contents">
        <div
          className="ggr-pde3contents"
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
                <form>
                  <input type="checkbox" name="searched" id="search" />
                  <input type="checkbox" name="searched" id="close" />
                  <select name="select" id="selection">
                    <option value="title">Title</option>
                    <option value="contents">Contents</option>
                    <option value="tags">Tags</option>
                  </select>
                  <input type="submit" name="submited" id="submit" />
                  <label htmlFor="submit" id="submitted">
                    <FaSearch />
                  </label>
                  <label htmlFor="search" id="searchs">
                    <FaSearch />
                  </label>

                  <label htmlFor="search" id="close">
                    <FaWindowClose />
                  </label>
                  <input
                    type="text"
                    id="text-search"
                    placeholder="Enter the word to search for.."
                    required
                  />
                </form>
              </div>
            </div>
            <img src={backgroundimg} alt="" />
          </div>
          <div className="ggr-patchcontents3">
            <h1>Gogo Racing Patch Notes</h1>
            <h2>1.0.3 Patch Note</h2>
            <h3>Fix version informations: </h3>
            <ul>
              <li>Fixed incorrect game information version.</li>
              <li>
                Modified game reward icon to appear differently when you lose
                the game.
              </li>
              <li>Fixed vehicle change pop-up error in the matching room.</li>
              <li>Added exception if the expired characters are installed.</li>
              <li>
                Revised exception handling if the expired vehicle is installed.
              </li>
              <li>
                Fixed sound setting: to prevent sound from coming out when the
                effect was turned off.
              </li>
              <li>Fixed / Adjusted reward icon size. </li>
              <li>
                Applied correction on the item acquisition effect when using
                magnetic field items.
              </li>
              <li>
                Applied correction on turtle attack whereas the attack effect
                does not disappear when the shield is used.
              </li>
              <li>Fixed Attendance Reward Pop-up.</li>
              <li>
                Languages:
                <ul>
                  <li>
                    Added 7 new text translations: Japanese, Indonesian,
                    Vietnamese, Thai, Spanish, French, and Italian.
                  </li>
                  <li>Unavailable language is locked for processing.</li>
                  <li>
                    Fixed issue where language is set automatically when the
                    user moved to the lobby
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="bootons">
          <HashLink smooth to="/ggr-patch3#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingPatchs;
