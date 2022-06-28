import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsLinks from "../components/postLinks";
import Post from "../components/Post";
import WysiwygDataPersistence from "./wysiwygDataPersistence/wysiwygdatapersistence";
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
                    <Route path="/*" element={<PostsLinks posts={posts} />} />
                    <Route path="/:postId/*" element={<Post posts={posts} />} />
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
