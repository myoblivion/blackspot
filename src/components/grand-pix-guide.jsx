import React from "react";
import { Link, hash } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import {
  FaUserCircle,
  FaSearch,
  FaWindowClose,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import backgroundimg from "../images/gogoracingbackground/coolbackgroundboiiii.png";
import { HashLink } from "react-router-hash-link";

const GrandPixGuide = ({ props, ref }) => {
  return (
    <div className="grandpix wrapper">
      <div className="ggr-purchase-contents">
        <div className="ggr-pcrecontents">
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
          <div className="ggr-purchases"></div>
        </div>
        <div className="bootons">
          <HashLink smooth to="/ggr-purchase-guide#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};
export default GrandPixGuide;
