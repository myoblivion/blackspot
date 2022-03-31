import React, { useState, useEffect, useRef, LinkProps } from "react";
import image from "../images/banner4.png";
import image2 from "../images/gogochain-mobile.png";
import { HashLink } from "react-router-hash-link";
import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";

import { AiFillInstagram } from "react-icons/ai";

const GogoRacingUpdateList = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Update List";
  }, []);
  return (
    <div className="gogoracing-list wrapper">
      <div className="gogo-racing-list-wrapper">
        <div className="ggrupdatelist-contents">
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
            <form>
                  <input type="checkbox" name="searched" id="search"/>
                  <input type="checkbox" name="searched" id="close" />
                  <input type="submit" name="submit" id="submit" />
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
          <div className="ggrlists-contents">
            <ul>
              <Link
                to="/ggr-updates"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li>
                  <div className="li-left"></div>
                  <div className="li-right">
                    <h3>🔊 1.0.1 Patch Note</h3>
                    <span>03.23.2022</span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingUpdateList;
