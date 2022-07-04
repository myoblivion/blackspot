import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GameGuideLinks from "./gameguidelinks";
import GameGuidePost from "./gameguidepost";
import WysiwygDataGuide from "./PostEditor/wysiwygdatagameguide";
const GameGuidePage = ({ gameguide }) => {
  return (
    <div className="admin wrapper">
      <h1>Welcome, Admin</h1>
      <div className="admin-contents">
        <Routes>
          <Route path="/*" element={<GameGuideLinks gameguide={gameguide} />} />
          <Route
            path="/:gameguideID/*"
            element={<GameGuidePost gameguide={gameguide} />}
          />
          <Route
            path="/new/"
            element={<WysiwygDataGuide gameguide={gameguide} />}
          />
          <Route
            path="/:gameguideID/edit/"
            element={<WysiwygDataGuide gameguide={gameguide} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default GameGuidePage;
