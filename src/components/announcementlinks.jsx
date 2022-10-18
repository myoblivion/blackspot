import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function AnnouncementLinks({ posts }) {
  useEffect(() => {
    viewPost();
  }, []);
  const [ispost, setpost] = useState([]);
  const viewPost = async (res) => {
    try {
      await axios.get(`http://localhost:3001/announcementList`).then((res) => {
        if (res.data.success === true) {
          setpost(res.data.listall);
        }
      });
    } catch (error) {
      throw error;
    }
  };
  const deleteReview = (id) => {
    axios.delete(`http://localhost:3001/deleteannouncementList/${id}`);
  };
  return (
    <div className="announcement-links">
      <div className="aLinks">
        <Link id="new-post" to="new" className="new-post">
          New Post
        </Link>
        <h1>Announcements</h1>
        <ol>
          {ispost.map((item, index) => (
            <li key={index}>
              <Link to={`${item.id}`} className="btn btn__theme">
                <h3>{item.title}</h3>
                <span>{item.description}</span>
              </Link>
              <button
                className="button"
                onClick={() => {
                  {
                    deleteReview(item.id);
                  }
                }}
              >
                Delete
              </button>
              <Link to={`/editAnnouncement/${item.id}`} className="edits">
                Edit
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default AnnouncementLinks;
