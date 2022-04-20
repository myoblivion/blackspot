import React, { useState, useEffect, useRef, LinkProps } from "react";

import image from "../images/goracing.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import somedog from "../images/somedog.png";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import catto from "../images/gogoracingbackground/catto.png";
import { render } from "react-dom";
import GogoRacingSearch from "./ggr-search";

const GoGoRacingNewsComponent = ({ props, ref, onSearch }) => {
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing News";
  }, []);

  const onInput = (e) => onSearch(e.target.value);

  const posts = [
    {
      id: 1,
      name: "Game Guide",
      to: "/ggr-guide-list",
      span: "New to Gogo Racing? Here is everything you need to know about the game!",
      image: "./images/gogoracingbackground/catto.png",
    },
    {
      id: 2,
      name: "Game Guide",
      to: "/gogoracing-guide",
      span: "New to Gogo Racing? Here is everything you need to know about the game!",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 3,
      name: "Account Linking",
      to: "/ggr-account-linking",
      span: "Here's a guide about how you can link your account.",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 4,
      name: "Purchase & Linking Guide",
      to: "/ggr-purchase-guide",
      span: "This will guide you on how to purchase items in GoGo Racing using different types of payment method.",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 5,
      name: "Updates",
      to: "/ggr-update-list",
      span: "Keep updated with Gogo Racing!",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      name: "1.0.3 Patch Note",
      to: "/ggr-patch3",
      span: "04.04.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 6,
      name: "1.0.2 Patch Note",
      to: "/ggr-patch2",
      span: "03.25.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 7,
      name: "1.0.1 Patch Note",
      to: "/ggr-updates",
      span: "03.23.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
  ];
  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }

    return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      const postSpan = post.span.toLowerCase();
      return postName.includes(query);
      return postSpan.includes(query);
    });
  };
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(posts, searchQuery);

  const SearchBar = ({ searchQuery, setSearchQuery }) => (
    
    <form action="/" method="get">
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="text-search"
        placeholder="Search blog posts"
        name="s"
        required
      />
      <input type="submit" name="submit" id="submit" />
      <label htmlFor="submit" id="submitted">
        <FaSearch />
      </label>
    </form>
  );
  // Title

  class Post extends React.Component {
    render() {
      return (
        <li>
          <div className="li-left">
            <img src={catto} alt="" />
          </div>
          <div className="li-right">
            <h3>{this.props.name}</h3>
            <span>{this.props.span}</span>
          </div>
        </li>
      );
    }
  }
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
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
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

              {filteredPosts.map((post, i) => (
                <Post
                  key={i}
                  name={post.name}
                  span={post.span}
                  image={post.image}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoGoRacingNewsComponent;
