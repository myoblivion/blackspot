import React, { useState, useEffect, useRef, LinkProps } from "react";

import image from "../images/goracing.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import somedog from "../images/somedog.png";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import catto from "../images/gogoracingbackground/catto.png";

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter(songs.name.includes(query));
};

const GoGoRacingNewsComponent = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing News";
  }, []);

  const links = [
    {
      name: "Game Guide",
      to: "/ggr-guide-list",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      name: "Game Guide",
      to: "/gogoracing-guide",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      name: "Account Linking",
      to: "/ggr-account-linking",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      name: "Purchase & Linking Guide",
      to: "/ggr-purchase-guide",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      name: "Updates",
      to: "/ggr-update-list",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      name: "1.0.3 Patch Note",
      to: "/ggr-patch3",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      name: "1.0.2 Patch Note",
      to: "/ggr-patch2",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      name: "1.0.1 Patch Note",
      to: "/ggr-updatess",
      image: "../images/gogoracingbackground/catto.png",
    },
  ];
  const { items } = links;

  const filteredItems = getFilteredItems(query, items);

  const [query, searchKey] = useState("");

  console.log("searchKey");

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
              <form autoComplete="off">
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
                  onChange={(e) => searchKey(e.target.value)}
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
              </form>
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

              <li>
                <div className="li-left">
                  <img src={catto} alt="" />
                </div>

                <div className="li-right">
                  <h3>Newsletter</h3>
                  <span>Hear what's new in Gogo Racing Here!</span>
                </div>
              </li>
              {links.map((link) => (
                <Link
                  to={link.to}
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li className="hidden">{link.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoGoRacingNewsComponent;
