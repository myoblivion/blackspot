import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import WysiwygDataAnnouncement from "./PostEditor/wysiwygdataannouncement";
import NewsPageLinks from "./newspagelinks";
import GameGuidePost from "./gameguidepost";
import WysiwygDataGuide from "./PostEditor/wysiwygdatagameguide";
const NewsPageComponent = ({ newspage }) => {
  return (
    <div className="admin wrapper">
      <h1>Welcome, Admin</h1>
      <div className="admin-contents">
        <Routes>
          <Route path="/*" element={<NewsPageLinks newspage={newspage} />} />
          <Route
            path="/:announcementID/*"
            element={<GameGuidePost newspage={newspage} />}
          />
          <Route
            path="/new/"
            element={<WysiwygDataGuide newspage={newspage} />}
          />
          <Route
            path="/:announcementID/edit/"
            element={<WysiwygDataGuide newspage={newspage} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default NewsPageComponent;
