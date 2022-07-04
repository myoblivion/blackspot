import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";
import { deleteNews } from "./actions/newsAction";

function NewsPost({ newspage }) {
  const { newsID } = useParams();
  const navigate = useNavigate();
  const newspages = newspage && newspage.find(({ id }) => `${id}` === newsID);
  return (
    <React.Fragment>
      {newspages ? (
        <div className="newspage-contents">
          <Link to="edit" id="edit-newspage" style={{ padding: 20 }}>
            Edit
          </Link>
          <button
            onClick={() => deleteNews(newsID, navigate)}
            style={{
              background: "#f3f3f3",
              color: "inherit",
              border: "none",
              padding: "1%",
              font: "inherit",
              cursor: "pointer",
              outline: "inherit",
            }}
            id="delete-newspage"
          >
            Delete
          </button>
          <Interweave content={newspages.body} />
        </div>
      ) : (
        <strong>Loading newspages...</strong>
      )}
    </React.Fragment>
  );
}

export default NewsPost;
