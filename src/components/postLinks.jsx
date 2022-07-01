import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function PostsLinks({ posts }) {
  return (
    <div className="postLinks">
      <Link id="new-post" to="new" className="new-post">
        New Post
      </Link>
      <select id="cars" name="cars">
        <option value="announcements">Announcements</option>
        <option value="updates">Updates</option>
        <option value="Game Guide">Game Guide</option>
        <option value="News">News</option>
      </select>
      <ul>
        {posts &&
          posts.map(({ title, id, description }) => {
            return (
              <Link to={`${id}`} key={id}>
                <li>
                  <div className="li-left"></div>
                  <div className="li-right">
                    <h3>{title}</h3>
                    <span>{description}</span>
                  </div>
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}

export default PostsLinks;
