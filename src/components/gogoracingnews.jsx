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
  return items.filter(songs.name.includes(query))
};

const GoGoRacingNewsComponent = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing News";
  }, []);

  const libraries = [
    { name: "Backbone.js", url: "https://documentcloud.github.io/backbone/" },
    { name: "AngularJS", url: "https://angularjs.org/" },
    { name: "jQuery", url: "https://jquery.com/" },
    { name: "Prototype", url: "http://www.prototypejs.org/" },
    { name: "React", url: "https://facebook.github.io/react/" },
    { name: "Ember", url: "http://emberjs.com/" },
    { name: "Knockout.js", url: "https://knockoutjs.com/" },
    { name: "Dojo", url: "http://dojotoolkit.org/" },
    { name: "Mootools", url: "http://mootools.net/" },
    { name: "Underscore", url: "https://documentcloud.github.io/underscore/" },
    { name: "Lodash", url: "http://lodash.com/" },
    { name: "Moment", url: "https://momentjs.com/" },
    { name: "Express", url: "http://expressjs.com/" },
    { name: "Koa", url: "http://koajs.com/" },
  ];
  const { items } = libraries;

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
                <input
                  type="checkbox"
                  name="searched"
                  id="search"
                  defaultChecked
                />
                <input
                  type="checkbox"
                  name="searched"
                  id="close"
                  defaultChecked
                />
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
                    <h3>GameGuide</h3>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoGoRacingNewsComponent;
