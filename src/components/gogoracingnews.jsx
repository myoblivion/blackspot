import React, { useState, useEffect, useRef, LinkProps } from "react";

import image from "../images/goracing.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import somedog from "../images/somedog.png";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import catto from "../images/gogoracingbackground/catto.png";
import { render } from "react-dom";
import ggrsearch from "./search/ggr-search";



const GoGoRacingNewsComponent = ({ props, ref, currentRoute }) => {


  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing News";
  }, []);

  const themes = [
    {
      background: "#f2a3f2",
    },
  ];


  return (
    <div className="gogoracingnews wrapper">
      <div className="gogo-racing-news-wrapper">
        <div
          className="ggrnews-contents"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div className="ggr-top">
            <div className="ggr-left">
              <h2>
                <FaUserCircle /> User
              </h2>
            </div>
            <div className="ggr-right">
                <label htmlFor="text-search"></label>
                <input type="checkbox" name="searched" id="search" />
                <input type="checkbox" name="searched" id="close" />
                {/* <select name="select" id="selection">
                  <option value="title">Title</option>
                  <option value="contents">Contents</option>
                  <option value="tags">Tags</option>
                </select> */}

                <input
                  type="text"
                  id="text-search"
                  onChange={ggrsearch}
                  placeholder="Enter the word to search for.."
                  required
                />
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
            </div>
          </div>
          <div className="ggrnws-contents">
            <ul>
              <li>
                <div className="li-left">
                  <img src={catto} alt="" />
                </div>
                <div className="li-right">
                  <h3>Announcements</h3>
                  <span>See important in-game notice and announcements!</span>
                </div>
              </li>
              <Link
                to="/ggr-update-list"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li>
                  <div className="li-left">
                    <img src={catto} alt="" />
                  </div>
                  <div className="li-right">
                    <h3>Updates</h3>
                    <span>Keep updated with Gogo Racing!</span>
                  </div>
                </li>
              </Link>
              <Link
                // to="/ggr-guide-list"
                to="search/ggr-search"
                {...props}
                ref={ref}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li>
                  <div className="li-left">
                    <img src={catto} alt="" />
                  </div>
                  <div className="li-right">
                    <h3>Game Guide</h3>
                    <span>
                      New to Gogo Racing? Here is everything you need to know
                      about the game!
                    </span>
                  </div>
                </li>
              </Link>

              <li>
                <div className="li-left">
                  <img src={catto} alt="" />
                </div>

                <div className="li-right">
                  <h3>Newsletter</h3>
                  <span>Hear what's new in Gogo Racing Here!</span>
                </div>
              </li>
              {/* {this.state.displayedLinks.map(function (link) {
                return (
                  <linkList
                    key={link.id}
                    name={link.name}
                    span={link.span}
                    image={link.image}
                  />
                );
              })} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoGoRacingNewsComponent;
