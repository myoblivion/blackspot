import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function PostsLinks({ posts }) {
  useEffect(() => {
    viewPost();
  }, []);

  const [ispost, setpost] = useState([]);
  const viewPost = async () => {
    try {
      await axios.get(`http://localhost:8081/posts`).then((res) => {
        if (res.data.success === true) {
          setpost(res.data.listall);
        }
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="announcement-links">
      <div className="aLinks">
        <Link id="new-post" to="new" className="new-post">
          New Post
        </Link>
        <h1>Updates</h1>
        <ol>
          {ispost.map((item, index) => (
            <div className="post__list" key={index}>
              <h2>{item.title}</h2>

              <div
                className="post__description"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <Link to={`/Edit/${item.id}`} className="btn btn__theme">
                {" "}
                Edit{" "}
              </Link>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default PostsLinks;
