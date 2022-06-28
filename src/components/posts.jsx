import React, { useState, useEffect, useRef, LinkProps } from "react";

import { useNavigate, useParams, Route, Routes } from "react-router-dom";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import PostsLinks from "./postLinks";
import WysiwygDataPersistence from "./wysiwygDataPersistence/wysiwygdatapersistence";
import Post from "./Post";

const Admins = ({ posts }) => {
  return (
    <div className="admin wrapper">
      <div className="admin-wrapper">
        <div className="admin-left">
          <div className="sub-components">
            <div className="admin-right">
              <div className="somethings-in">
                <h1>Welcome, Admin</h1>
                <div className="displayed-contents">
                  {/* Dito */}
                  <Routes>
                    <Route path="/" element={<PostsLinks posts={posts} />} />
                    <Route path="/:postId/" element={<Post posts={posts} />} />
                    <Route
                      path="new"
                      element={<WysiwygDataPersistence posts={posts} />}
                    />
                    <Route
                      path="/:postId/edit"
                      element={<WysiwygDataPersistence posts={posts} />}
                    />
                  </Routes>
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
