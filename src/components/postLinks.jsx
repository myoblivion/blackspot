import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockAPI } from "./mockApi/mockApi";
function PostsLinks({ posts }) {
  const [setPosts] = useState();

  useEffect(() => {
    const request = {
      method: "get",
    };
    mockAPI(request).then((response) => {
      console.log(response);
      setPosts(response.data.posts);
      setAuthors(response.data.authors);
    });
  }, []);
  return (
    <>
      <Link id="new-post" to="new">
        New Post
      </Link>
      <ul>
        {posts &&
          posts.map(({ title, id, description }) => {
            return (
              <Link to={`${id}`}>
                <li key={id}>
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
    </>
  );
}

export default PostsLinks;
