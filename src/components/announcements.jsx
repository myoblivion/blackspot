import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AnnouncementsLinks from "./announcementlinks";
import Announcement from "./announcement";
import WysiwygDataAnnouncement from "./PostEditor/wysiwygdataannouncement";
const AnnouncementPage = ({ announcements }) => {
  return (
    <div className="admin wrapper">
      <h1>Welcome, Admin</h1>
      <div className="admin-contents">
        <ul>
          <Link
            to="/ggr-patch4"
            {...props}
            ref={ref}
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>
              <div className="li-left"></div>
              <div className="li-right">
                <h3>🔊 1.0.4 Patch Note</h3>
                <span>06.13.2022</span>
              </div>
            </li>
          </Link>
          <Link
            to="/ggr-patch3"
            {...props}
            ref={ref}
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>
              <div className="li-left"></div>
              <div className="li-right">
                <h3>🔊 1.0.3 Patch Note</h3>
                <span>04.04.2022</span>
              </div>
            </li>
          </Link>
          <Link
            to="/ggr-patch2"
            {...props}
            ref={ref}
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>
              <div className="li-left"></div>
              <div className="li-right">
                <h3>🔊 1.0.2 Patch Note</h3>
                <span>03.25.2022</span>
              </div>
            </li>
          </Link>
          <Link
            to="/ggr-updates"
            {...props}
            ref={ref}
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>
              <div className="li-left"></div>
              <div className="li-right">
                <h3>🔊 1.0.1 Patch Note</h3>
                <span>03.23.2022</span>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AnnouncementPage;
