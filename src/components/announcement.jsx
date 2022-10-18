import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";

import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";
import axios from "axios";

function announcement({}) {
  const { announcementID } = useParams();
  const [announcements, setAnnouncement] = useState([]);
  useEffect(() => {
    viewPost();
  }, []);
  const announce =
    announcements && announcements.find(({ id }) => `${id}` === announcementID);

  const viewPost = async () => {
    try {
      await axios.get(`http://localhost:3001/announcementList`).then((res) => {
        if (res.data.success === true) {
          setAnnouncement(res.data.listall);
        }
      });
    } catch (error) {
      throw error;
    }
  };
  return (
    <React.Fragment>
      {announce ? (
        <div className="announcement wrapper">
          <div className="announcement-header">
            <h3>{announce.title}</h3>
          </div>
          <div className="announcements-contents">
            <Interweave content={announce.abody} />
          </div>
        </div>
      ) : (
        <strong>Not Found</strong>
      )}
    </React.Fragment>
  );
}

export default announcement;
