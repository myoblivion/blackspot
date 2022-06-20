import React, { useState, useEffect, useRef, LinkProps } from "react";

import { HashLink } from "react-router-hash-link";
import { useHistory, useParams } from "react-router-dom";
import Draggable from "react-draggable"; // The default// ES6
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
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

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
  const announcements = [
    {
      title: "Gogo Racing Play To Win Raffle Event",
    },
  ];
  const posts = [
    {
      id: 1,
      name: "Announcements",
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
      span: "New to Gogo Racing? Here is everything you need to know about the game!",
      image: "./images/gogoracingbackground/catto.png",
    },
    {
      id: 4,
      name: "Game Guide",
      span: "New to Gogo Racing? Here is everything you need to know about the game!",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 5,
      name: "Account Linking",

      span: "Here's a guide about how you can link your account.",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 6,
      name: "Purchase & Linking Guide",

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
      span: "04.04.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 8,
      name: "1.0.3 Patch Note",
      span: "04.04.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 9,
      name: "1.0.2 Patch Note",

      span: "03.25.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
    {
      id: 10,
      name: "1.0.1 Patch Note",

      span: "03.23.2022",
      image: "../images/gogoracingbackground/catto.png",
    },
  ];
  var filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }
    return posts.filter((post) => {
      var postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };
  const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
      history.push(`?s=${searchQuery}`);
      e.preventDefault();
    };
    return (
      <form
        action="/"
        method="get"
        id="formus"
        onSubmit={onSubmit}
        autoComplete="off"
      >
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
    );
  };
  const PostResults = ({}) => {
    const [showResults, setShowResults] = React.useState(true);
    const Hide = () => setShowResults(false);
    const [showResultss, setShowResultss] = React.useState(true);
    const Hides = () => setShowResultss(false);
    const [showResultsss, setShowResultsss] = React.useState(true);
    const Hidess = () => setShowResultsss(false);
    const [showResultssss, setShowResultssss] = React.useState(true);
    const Hidesss = () => setShowResultssss(false);
    const [showResultsssss, setShowResultsssss] = React.useState(true);
    const Hidessss = () => setShowResultsssss(false);
    const [showResultssssss, setShowResultssssss] = React.useState(true);
    const Hidesssss = () => setShowResultssssss(false);
    const [showResultsssssss, setShowResultsssssss] = React.useState(true);
    const Hidessssss = () => setShowResultsssssss(false);
    const [showResultssssssss, setShowResultssssssss] = React.useState(true);
    const Hidesssssss = () => setShowResultssssssss(false);
    const [showResultsssssssss, setShowResultsssssssss] = React.useState(true);
    const Hidessssssss = () => setShowResultsssssssss(false);
    return (
      <ul>
        
        {showResults ? (
          <li>
            <div className="li-left">
              {" "}
              <h3>Announcements</h3>
              <span>See important in-game notice and announcements</span>
            </div>
            <div className="li-right">
              <button>Edit</button>
              <button onClick={Hide}>Delete</button>
            </div>
          </li>
        ) : null}
        {showResultss ? (
          <li>
            <div className="li-left">
              {" "}
              <h3>Newsletter</h3>
              <span>Hear what's new in Gogo Racing here!</span>
            </div>
            <div className="li-right">
              <button>Edit</button>
              <button onClick={Hides}>Delete</button>
            </div>
          </li>
        ) : null}
        {showResultsss ? (
          <li>
            <div className="li-left">
              {" "}
              <h3>Game Guide</h3>
              <span>
                New to Gogo Racing? Here is everything you need to know about
                the game!
              </span>
            </div>
            <div className="li-right">
              <button>Edit</button>
              <button onClick={Hidess}>Delete</button>
            </div>
          </li>
        ) : null}
        {showResultssss ? (
          <li>
            <div className="li-left">
              {" "}
              <h3>Account Linking</h3>
              <span>Here's a guide about how you can link your account</span>
            </div>
            <div className="li-right">
              <button>Edit</button>
              <button onClick={Hidesss}>Delete</button>
            </div>
          </li>
        ) : null}
        {showResultsssss ? (
          <li>
            <div className="li-left">
              <h3>Purchase & Linking Guide</h3>
              <span>
                This will guide you on how to purchase items in Gogo Racing
                using different types of payment method.
              </span>
            </div>
            <div className="li-right">
              <button>Edit</button>
              <button onClick={Hidessss}>Delete</button>
            </div>
          </li>
        ) : null}
        {showResultssssss ? (
          <li>
            <div className="li-left">
              {" "}
              <h3>Updates</h3>
              <span>Keep updated with Gogo Racing!</span>
            </div>
            <div className="li-right">
              <button>Edit</button>
              <button onClick={Hidesssss}>Delete</button>
            </div>
          </li>
        ) : null}
        {showResultsssssss ? (
          <li>
            <div className="li-left">
              <h3>1.0.4 Patch Note</h3>
              <span>6.13.2022</span>
            </div>
            <div className="li-right">
              <button>Edit</button>
              <button onClick={Hidessssss}>Delete</button>
            </div>
          </li>
        ) : null}

        {showResultsssssss ? (
          <li>
            <div className="li-left">
              <h3>1.0.3 Patch Note</h3>
              <span>0.04.2022</span>
            </div>
            <div className="li-right">
              <button>Edit</button>
              <button onClick={Hidesssssss}>Delete</button>
            </div>
          </li>
        ) : null}
        {showResultssssssss ? (
          <li>
            <div className="li-left">
              <h3>1.0.2 Patch Note</h3>
              <span>03.25.2022</span>
            </div>
            <div className="li-right">
              <button>Edit</button>
              <button onClick={Hidesssssss}>Delete</button>
            </div>
          </li>
        ) : null}
        {showResultsssssssss ? (
          <li>
            <div className="li-left">
              <h3>1.0.1 Patch NOte</h3>
              <span>03.23.2022</span>
            </div>
            <div className="li-right">
              <button>Edit</button>
              <button onClick={Hidessssssss}>Delete</button>
            </div>
          </li>
        ) : null}
      </ul>
    );
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(posts, searchQuery);
  const history = useHistory();
  const routeChange = () => {
    let path = `/edit`;
    history.push(path);
  };
  return (
    <div className="admin wrapper">
      <div className="admin-wrapper">
        <div className="admin-left">
          <div className="sub-components">
            <button id="logout" onClick={handleLogout}>
              Log Out
            </button>
            <h1>Welcome, Admin</h1>
            <div className="admin-right">
              <div className="somethings-in">
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
                <button id="added" onClick={routeChange}>
                  Add New
                </button>
                <div className="displayed-contents">
                  <PostResults />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admins;
