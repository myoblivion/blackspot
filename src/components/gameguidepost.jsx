import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";
import { deleteGuide } from "./actions/guideActions";
function GameGuidePost({ gameguide }) {
  const { gameguideID } = useParams();
  const navigate = useNavigate();
  const gameguidez =
    gameguide && gameguide.find(({ id }) => `${id}` === gameguideID);
  return (
    <React.Fragment>
      {gameguidez ? (
        <div className="gameguide-contents">
          <div className="post-header">
            <h1>{gameguidez.title}</h1>
          </div>
          <div className="game-guide-contents">
            <Link to="edit" id="edit-gameguide" style={{ padding: 20 }}>
              Edit
            </Link>
            <button
              onClick={() => deleteGuide(gameguideID, navigate)}
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
            <Interweave content={gameguidez.body} />
          </div>
        </div>
      ) : (
        <strong>Loading gameguidez...</strong>
      )}
    </React.Fragment>
  );
}

export default GameGuidePost;
