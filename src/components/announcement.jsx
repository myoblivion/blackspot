import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";
import { deleteAnnouncement } from "./actions/announcementAction";
import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";

function Announcement({ announcements }) {
  const { announcementID } = useParams();
  const navigate = useNavigate();
  const announce =
    announcements && announcements.find(({ id }) => `${id}` === announcementID);
  return (
    <React.Fragment>
      {announce ? (
        <div className="announcements-contents">
          <Link to="edit" id="edit-announcements" style={{ padding: 20 }}>
            Edit
          </Link>
          <button
            onClick={() => deleteAnnouncement(announcementID, navigate)}
            style={{
              background: "#f3f3f3",
              color: "inherit",
              border: "none",
              padding: "1%",
              font: "inherit",
              cursor: "pointer",
              outline: "inherit",
            }}
            id="delete-announcements"
          >
            Delete
          </button>
          <h1>{announce.title}</h1>
          <span>{announce.adescription}</span>
          <Interweave content={announce.body} />
        </div>
      ) : (
        <strong>Loading...</strong>
      )}
    </React.Fragment>
  );
}

export default Announcement;
