import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaWindowClose } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import PostsLinks from "./postLinks";
import Post from "./Post";

const GogoRacingUpdateList = ({ props, ref, currentRoute, posts }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Gogo Racing Update List";
  }, []);
  return (
    <div className="gogoracing-list wrapper">
      <div className="gogo-racing-list-wrapper">
        <div className="gr-list-wrap">
          <div
            className="ggrupdatelist-contents"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
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
            <div className="ggrlists-contents">
              <Routes>
                <Route path="/*" element={<PostsLinks posts={posts} />} />
                <Route path="/:postId/*" element={<Post posts={posts} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GogoRacingUpdateList;
