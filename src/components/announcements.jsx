import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";
import { deletePost } from "./actions/postActions";
import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";

function Author({ authors }) {
  const { authorsId } = useParams();
  const navigate = useNavigate();
  const author = authors && authors.find(({ id }) => `${id}` === authorsId);
  <img src={backgroundimg} alt="" id="patch-authors-img" />;
  return (
    <React.Fragment>
      {author ? (
        <div className="authors-contents">
          <img src={backgroundimg} alt="" id="patch-authors-img" />;
          <Link to="edit" id="edit-authors" style={{ padding: 20 }}>
            Edit
          </Link>
          <button
            onClick={() => deletePost(authorsId, navigate)}
            style={{
              background: "#f3f3f3",
              color: "inherit",
              border: "none",
              padding: "1%",
              font: "inherit",
              cursor: "pointer",
              outline: "inherit",
            }}
            id="delete-authors"
          >
            Delete
          </button>
          <h1>{author.name}</h1>
          <span>{author.description}</span>
          <Interweave content={author.body} />
        </div>
      ) : (
        <strong>Loading...</strong>
      )}
    </React.Fragment>
  );
}

export default Author;
