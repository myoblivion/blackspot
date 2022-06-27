import React, { useState, useEffect, useRef, LinkProps } from "react";
import image from "../images/goracing.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import somedog from "../images/somedog.png";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import catto from "../images/gogoracingbackground/catto.png";
import { render } from "react-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const GogoRacingSearch = ({ props, ref, onSearch }) => {
  useEffect(() => {
    document.title = "Black Spot Studio | GoGo Racing Search";
  }, []);
  const posts = [
    {
      id: 1,
      name: "Announcements",
      to: "/ggr-announcement-list",
      span: "See important in-game notice and announcements",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 2,
      name: "Newsletter",
      span: "Hear what's new in Gogo Racing here!",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 3,
      name: "Game Guide",
      to: "/ggr-guide-list",
      span: "New to Gogo Racing? Here is everything you need to know about the game!",
      image: "./images/gogoracingbackground/catto.png",
    },
    {
      id: 4,
      name: "Game Guide",
      to: "/gogoracing-guide",
      span: "New to Gogo Racing? Here is everything you need to know about the game!",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 5,
      name: "Account Linking",
      to: "/ggr-account-linking",
      span: "Here's a guide about how you can link your account.",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 6,
      name: "Purchase & Linking Guide",
      to: "/ggr-purchase-guide",
      span: "This will guide you on how to purchase items in GoGo Racing using different types of payment method.",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 7,
      name: "Updates",
      to: "/ggr-update-list",
      span: "Keep updated with Gogo Racing!",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 8,
      name: "1.0.4 Patch Note",
      to: "/ggr-patch4",
      span: "06.13.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 8,
      name: "1.0.3 Patch Note",
      to: "/ggr-patch3",
      span: "04.04.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 9,
      name: "1.0.2 Patch Note",
      to: "/ggr-patch2",
      span: "03.25.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 10,
      name: "1.0.1 Patch Note",
      to: "/ggr-updates",
      span: "03.23.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
  ];
  //   class Post extends React.Component {
  //     render() {
  //       return (
  //         <li>
  //           <div className="li-left">
  //             <img src={catto} alt="" />
  //           </div>
  //           <div className="li-right">
  //             <h3>{this.props.name}</h3>
  //             <span>{this.props.span}</span>
  //           </div>
  //         </li>
  //       );
  //     }
  //   }
  var filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }
    return posts.filter((post) => {
      var postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(posts, searchQuery);

  const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useNavigate();
    const onSubmit = (e) => {
      history.push(`?s=${searchQuery}`);
      e.preventDefault();
    };
    return (
      <div className="ggr-right">
        <form action="/" method="get" onSubmit={onSubmit} autoComplete="off">
          <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
          </label>
          <input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search "
            autoFocus="autoFocus"
            name="s"
          />
          <button type="submit">Search</button>
          <label htmlFor="submit" id="submitted">
            <FaSearch />
          </label>
        </form>
      </div>
    );
  };

  // Title

  return (
    <div className="gogoracingsearch wrapper">
      <div className="gogo-racing-search-wrapper">
        <div className="search-contents">
          <div
            className="ggrsearch-contents"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
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
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
            </div>
            <div className="ggrsearch-contents">
              <ul>
                {filteredPosts.map((post, s) => (
                  <Link to={post.to} key={s}>
                    <li>
                      <div className="li-left">
                        <img src={catto} alt="" />
                      </div>
                      <div className="li-right">
                        <h3>{post.name}</h3>
                        <span>{post.span}</span>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingSearch;
