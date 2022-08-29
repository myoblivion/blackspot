import React, { useState, useEffect, useRef, LinkProps } from "react";

import image from "../images/goracing.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import somedog from "../images/somedog.png";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import catto from "../images/gogoracingbackground/catto.png";
import { render } from "react-dom";
import dudes from "../images/gogoracingbackground/Announcement.png";

const GoGoRacingNewsComponent = ({ props, ref, onSearch }) => {
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing News";
  }, []);

  // Title

  return (
    <div className="gogoracingnews wrapper">
      <div className="gogo-racing-news-wrapper">
        <div className="gr-anews-wrap">
          <div className="character-wrapper">
            <img
              src={dudes}
              alt=""
              id="characters"
              data-aos="zoom-in"
              data-aos-duration="500"
            />
            <h1>Gogo Racing News</h1>
          </div>
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
            <div className="ggrnws-contents">
              <ol>
                <Link
                  to="/ggr-announcement-list"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>
                    <div className="li-left">
                      <img src={catto} alt="" />
                    </div>
                    <div className="li-right">
                      <h3>Announcements</h3>
                      <span>
                        See important in-game notice and announcements!
                      </span>
                    </div>
                  </li>
                </Link>
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
                  to="/ggr-guide-list"
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
                <Link
                  to="/ggr-news"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>
                    <div className="li-left">
                      <img src={catto} alt="" />
                    </div>
                    <div className="li-right">
                      <h3>Newsletter</h3>
                      <span>Hear what's new in Gogo Racing Here!</span>
                    </div>
                  </li>
                </Link>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoGoRacingNewsComponent;
