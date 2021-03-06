import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function PostsLinks({ posts }) {
  return (
    <div className="announcement-links">
      <div className="aLinks">
        <Link id="new-post" to="new" className="new-post">
          New Post
        </Link>
        <h1>Updates</h1>
        <ol>
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
        </ol>
      </div>
    </div>
  );
}

export default PostsLinks;
