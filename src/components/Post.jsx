import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";
import { deletePost } from "./actions/postActions";
import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";

function Post({ posts }) {
  const setPost = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts && posts.find(({ id }) => `${id}` === postId);
  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);
  return (
    <React.Fragment>
      {post ? (
        <div className="post wrapper">
          <div className="post-header">
            <h1>{post.title}</h1>
          </div>
          <div className="posts-contents">
            <img src={backgroundimg} alt="" id="patch-posts-img" />
            <Link to="edit" id="edit-posts" style={{ padding: 20 }}>
              Edit
            </Link>
            <button
              onClick={() => deletePost(postId, navigate)}
              style={{
                background: "#f3f3f3",
                color: "inherit",
                border: "none",
                padding: "1%",
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",
              }}
              id="delete-posts"
            >
              Delete
            </button>
            <Interweave content={post.body} />
          </div>
        </div>
      ) : (
        <strong>Not Found</strong>
      )}
    </React.Fragment>
  );
}

export default Post;
