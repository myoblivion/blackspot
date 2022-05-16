import React, { useState, useEffect, useRef, LinkProps } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
} from "react-admin";
import { HashLink } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import {
  FaTrash,
  FaImages,
  FaUserCircle,
  FaSearch,
  FaRegArrowAltCircleUp,
  FaWindowClose,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";

import {
  FiFileText,
  FiMove,
  FiRotateCw,
  FiRotateCcw,
  FiZoomOut,
  FiZoomIn,
} from "react-icons/fi";
import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";

const Admins = ({ record, handleLogout, props, ref }) => {
  const Labels = [
    {
      id: "submen1",
      name: "Announcements",
      htmlFor: "sub1",
    },
    {
      id: "submen2",
      name: "Updates",
      htmlFor: "sub2",
    },
    {
      id: "submen3",
      name: "Game Guide",
      htmlFor: "sub3",
    },
    {
      id: "submen4",
      name: "Newsletter",
      htmlFor: "sub4",
    },
  ];
  const subLabels = [
    {
      id: "raffle",
      name: "Raffle giveaway",
      htmlFor: "pup"
    },
  ]
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
  const filteredPosts = filterPosts(Labels, searchQuery);

  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Admin";
  }, []);

  const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
      history.push(`?s=${searchQuery}`);
      e.preventDefault();
    };
    return (
      <form action="/" method="get" onSubmit={onSubmit} autoComplete="off">
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search "
          autoFocus="autoFocus"
          name="s"
        />
      </form>
    );
  };
  return (
    <div className="admin wrapper">
      <div className="admin-wrapper">
        <div className="admin-left">
          <div className="sub-components">
            <button id="logout" onClick={handleLogout}>
              Log Out
            </button>
            <div className="game-components">
              <input type="radio" name="choose" id="choose1" />
              <input type="radio" name="choose" id="choose2" />
              <input type="radio" name="choose" id="choose3" />
              <input type="radio" name="choose" id="choose4" />
              <label htmlFor="choose1" id="lel">
                Gogo Racing
              </label>
              <label htmlFor="choose2" id="lele">
                Scion Fist
              </label>
              <label htmlFor="choose3" id="lelele">
                Gogo World
              </label>
              <label htmlFor="choose4" id="lelelele">
                Gogo Chain
              </label>
            </div>
            <div className="sub-contents">
              <input type="radio" name="sub" id="sub1" />
              <input type="radio" name="sub" id="sub2" />
              <input type="radio" name="sub" id="sub3" />
              <input type="radio" name="sub" id="sub4" />
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              {filteredPosts.map((post, s) => (
                <label htmlFor={post.htmlFor} key={s} id={post.id}>
                  {post.name}
                </label>
              ))}
            </div>
            <div className="buttonzs">
              <button>Delete</button>
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className="admin-right">
          <div className="main-tools">
            <label htmlFor="image" className="tools">
              <FaImages />
            </label>
            <input type="file" name="image" id="image" />
            <button className="tools">
              <FiFileText />
            </button>
            <button className="tools">
              <FiMove />
            </button>
            <button className="tools">
              <FiRotateCcw />
            </button>
            <button className="tools">
              <FiRotateCw />
            </button>
            <button className="tools">
              <FiZoomIn />
            </button>
            <button className="tools">
              <FiZoomOut />
            </button>
          </div>
          <div className="content-web" id="GGR">
            <div className="ggr-updates-contents">
              <div
                className="ggr-udecontents1"
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div className="ggr-header">
                  <div className="ggr-top">
                    <div className="ggr-left">
                      <Link
                        to="/ggr-update-list"
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
                <div className="ggr-update-contents">
                  <h1>Gogo Racing Edit</h1>
                  <h2>Description</h2>
                  <ul>
                    <li>Empty</li>
                  </ul>
                </div>
                <div className="bottom-eyes"></div>
              </div>
              <div className="bootons">
                <HashLink smooth to="/ggr-updates#" id="up">
                  <FaRegArrowAltCircleUp />
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admins;
