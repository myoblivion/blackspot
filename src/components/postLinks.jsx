import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function PostsLinks({ posts }) {
  return (
    <div className="postLinks">
      <Link id="new-post" to="new">
        New Post
      </Link>
      <div className="list-postsz">
        {posts &&
          posts.map(({ title, id }) => {
            return (
              <li key={id}>
                <h2>
                  <Link to={`${id}`}>{title}</Link>
                </h2>
              </li>
            );
          })}
      </div>
    </div>
  );
}

export default PostsLinks;
