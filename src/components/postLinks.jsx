import React from "react";
import { Link } from "react-router-dom";

function PostsLinks({ posts }) {
  return (
    <div className="postLinks">
      <div className="list-postsz">
        <Link id="new-post" to="new">
          New Post
        </Link>
        <ul>
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
        </ul>
      </div>
    </div>
  );
}

export default PostsLinks;
