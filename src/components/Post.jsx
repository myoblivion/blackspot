import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";
import { deletePost } from "../components/actions/postActions";

function Post({ posts }) {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts && posts.find(({ id }) => `${id}` === postId);

  return (
    <div className="list-posts">
      {post ? (
        <div className="list-posts-container">
          <Link to="edit" style={{ padding: 20 }}>
            Edit
          </Link>
          <button
            onClick={() => deletePost(postId, navigate)}
            style={{
              background: "none",
              color: "inherit",
              border: "none",
              padding: "0",
              font: "inherit",
              cursor: "pointer",
              outline: "inherit",
            }}
          >
            Delete
          </button>

          <h1>{post.title}</h1>
          <Interweave content={post.body} />
        </div>
      ) : (
        <strong>Loading post...</strong>
      )}
    </div>
  );
}
export default Post;
