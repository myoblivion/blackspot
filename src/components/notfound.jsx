import React, { useEffect } from "react";
import notFoundPic from "../images/Yellow - 404.png";
const NotFoundComponent = ({}) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | 404 Not Found";
  }, []);
  return (
    <div className="notfound wrapper">
      <section className="notfound-wrapper">
        <img src={notFoundPic} alt="" />
      </section>
    </div>
  );
};

export default NotFoundComponent;
