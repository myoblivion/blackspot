import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import dudes from "../images/gogoracingbackground/Announcement.png";

const GogoracingGuidelist = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Guide List";
  }, []);
  return (
    <div className="ggr-guidelist wrapper">
      <div className="ggr-glist-contents">
        <div
          className="ggr-glistgontents"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <img
            src={dudes}
            alt=""
            id="characters"
            data-aos="zoom-in"
            data-aos-duration="500"
          />
          <div
            className="ggr-alistgontents"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
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
            </div>
            <div className="ggr-guidelists">
              <ul>
                <Link
                  to="/gogoracing-guide"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>
                    <h3>❓ Game Guide</h3>
                    <span>
                      New to Gogo Racing? Here is everything you need to know
                      about the game!
                    </span>
                  </li>
                </Link>
                <Link
                  to="/ggr-account-linking"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>
                    <h3>🔗 Account Linking</h3>
                    <span>
                      Here's a guide about how you can link your account.
                    </span>
                  </li>
                </Link>
                <Link
                  to="/ggr-purchase-guide"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li>
                    <h3>💳 Purchase & Linking Guide</h3>
                    <span>
                      This will guide you on how to purchase items in GoGo
                      Racing using different types of payment method.
                    </span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GogoracingGuidelist;
