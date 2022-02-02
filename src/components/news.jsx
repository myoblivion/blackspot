import React, {useEffect } from "react";

const NewsComponent = () => {
      // Title
      useEffect(() => {
        document.title = "Black Spot Studio | News & Announcement"
      }, [])
  return (
    <div className="news wrapper">
    <h1>News</h1>
    </div>
  );
};

export default NewsComponent;
