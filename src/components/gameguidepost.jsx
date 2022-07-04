import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";
import { deletePost } from "./actions/postActions";
import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";

function GameGuidePost({ gameguide }) {
  const { gameguideId } = useParams();
  const navigate = useNavigate();
  const gameguides =
    gameguide && gameguide.find(({ id }) => `${id}` === gameguideId);
  <img src={backgroundimg} alt="" id="patch-gameguide-img" />;
  return (
    <React.Fragment>
      {gameguides ? (
        <div className="gameguide-contents">
          <img src={backgroundimg} alt="" id="patch-gameguide-img" />;
          <Link to="edit" id="edit-gameguide" style={{ padding: 20 }}>
            Edit
          </Link>
          <button
            onClick={() => deletePost(gameguideId, navigate)}
            style={{
              background: "#f3f3f3",
              color: "inherit",
              border: "none",
              padding: "1%",
              font: "inherit",
              cursor: "pointer",
              outline: "inherit",
            }}
            id="delete-gameguide"
          >
            Delete
          </button>
          <h1>{gameguides.title}</h1>
          <span>{gameguides.description}</span>
          <Interweave content={gameguides.body} />
        </div>
      ) : (
        <strong>Loading gameguides...</strong>
      )}
    </React.Fragment>
  );
}

export default GameGuidePost;
