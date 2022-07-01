import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";
import { deletePost } from "./actions/postActions";
import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";

function Post({ posts }) {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts && posts.find(({ id }) => `${id}` === postId);

  return (
    <React.Fragment>
      {post ? (
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
          <h1>{post.title}</h1>
          <Interweave content={post.body} />
        </div>
      ) : (
        <strong>Loading post...</strong>
      )}
    </React.Fragment>
  );
}

export default Post;
