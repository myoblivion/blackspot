import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";

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
                <form>
                  <input type="checkbox" name="searched" id="search" required />
                  <input type="checkbox" name="searched" id="close" />
                  <select name="select" id="selection">
                    <option value="title">Title</option>
                    <option value="contents">Contents</option>
                    <option value="tags">Tags</option>
                  </select>
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
          </div>
          <div className="ggr-guidelist">
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
                  <span>This will guide you on how to purchase items in GoGo Racing using different types of payment method.</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GogoracingGuidelist;
