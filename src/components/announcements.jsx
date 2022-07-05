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
        <Routes>
          <Route
            path="/*"
            element={<AnnouncementsLinks announcements={announcements} />}
          />
          <Route
            path="/:announcementID/*"
            element={<Announcement announcements={announcements} />}
          />
          <Route
            path="/new/"
            element={<WysiwygDataAnnouncement announcements={announcements} />}
          />
          <Route
            path="/:announcementID/edit/"
            element={<WysiwygDataAnnouncement announcements={announcements} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default AnnouncementPage;
