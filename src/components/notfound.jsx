import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import notfoundimg from "../images/Yellow - 404.png";

const NotFound = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | 404 Not Found";
  }, []);
  return (
    <div className="notfound wrapper">
      <div className="notfound-wrapper">
        <h2>
          GO{" "}
          <Link
            to="/"
            className="nav-item a"
            {...props}
            ref={ref}
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
