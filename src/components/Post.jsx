import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";
import { deletePost } from "../components/actions/postActions";

function Post({ posts, profiles }) {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts && posts.find(({ id }) => `${id}` === postId);

  const { profileID } = useParams();
  const navigates = useNavigate();
  const profile = profiles && profiles.find(({ id }) => `${id}` === profileID);
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
      {profile ? (
        <div>
          <Link to="edit" style={{ padding: 20 }}>
            Edit
          </Link>
          <button
            onClick={() => deletePost(profileID, navigates)}
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

          <h1>{profile.title}</h1>
          <Interweave content={profile.body} />
        </div>
      ) : (
        <div className="soeeee"></div>
      )}
    </div>
  );
}
export default Post;
