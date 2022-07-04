import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NewsPageLinks from "./newspagelinks";
import NewsPost from "./newspost";
import WysiwygDataNews from "./PostEditor/wysiwygnews";
const NewsPageComponent = ({ newspage }) => {
  return (
    <div className="admin wrapper">
      <h1>Welcome, Admin</h1>
      <div className="admin-contents">
        <Routes>
          <Route path="/*" element={<NewsPageLinks newspage={newspage} />} />
          <Route path="/:newsID/*" element={<NewsPost newspage={newspage} />} />
          <Route
            path="/new/"
            element={<WysiwygDataNews newspage={newspage} />}
          />
          <Route
            path="/:newsID/edit/"
            element={<WysiwygDataNews newspage={newspage} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default NewsPageComponent;
