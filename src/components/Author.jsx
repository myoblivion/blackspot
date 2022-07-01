import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";
import { deletePost } from "./actions/postActions";
import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";

function Author({ ggrguides }) {
  const { ggrguideId } = useParams();
  const navigate = useNavigate();
  const ggrguide =
    ggrguides && ggrguides.find(({ id }) => `${id}` === ggrguideId);
  <img src={backgroundimg} alt="" id="patch-ggrguides-img" />;
  return (
    <React.Fragment>
      {ggrguide ? (
        <div className="ggrguides-contents">
          <img src={backgroundimg} alt="" id="patch-ggrguides-img" />;
          <Link to="edit" id="edit-ggrguides" style={{ padding: 20 }}>
            Edit
          </Link>
          <button
            onClick={() => deletePost(ggrguideId, navigate)}
            style={{
              background: "#f3f3f3",
              color: "inherit",
              border: "none",
              padding: "1%",
              font: "inherit",
              cursor: "pointer",
              outline: "inherit",
            }}
            id="delete-ggrguides"
          >
            Delete
          </button>
          <h1>{ggrguide.name}</h1>
          <span>{ggrguide.description}</span>
          <Interweave content={ggrguide.body} />
        </div>
      ) : (
        <strong>Loading...</strong>
      )}
    </React.Fragment>
  );
}

export default Author;
