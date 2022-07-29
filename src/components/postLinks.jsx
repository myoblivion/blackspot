import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function PostsLinks({ posts }) {
  useEffect(() => {
    viewPost();
  }, []);

  const [ispost, setpost] = useState([]);
  const viewPost = async (res) => {
    try {
      await axios.get(`http://127.0.0.1:8081/posts`).then((res) => {
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
            <li key={index}>
              <Link to={`${item.id}`} className="btn btn__theme">
                <div className="li-left"></div>
                <div className="li-right">
                  <h3>{item.title}</h3>
                </div>
              </Link>
              <Link to={`/editPost/${item.id}`} className="btn btn__theme">
                {" "}
                Edit{" "}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default PostsLinks;
