import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PostsLinks from "./postLinks";
import Post from "./Post";
import WysiwygDataPersistence from "./PostEditor/wysiwygdatapersistence";
const PostPage = ({ posts }) => {
  return (
    <div className="admin wrapper">
      <h1>Welcome, Admin</h1>
      <Routes>
        <Route path="/*" element={<PostsLinks posts={posts} />} />
        <Route path="/:postId/*" element={<Post posts={posts} />} />
        <Route
          path="/new/"
          element={<WysiwygDataPersistence posts={posts} />}
        />
        <Route
          path="/:postId/edit/"
          element={<WysiwygDataPersistence posts={posts} />}
        />
      </Routes>
    </div>
  );
};

export default PostPage;
