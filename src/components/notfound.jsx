import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFoundComponent = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | 404 Not Found";
  }, []);
  return (
    <div className="notfound wrapper">
      <section className="notfound-wrapper">
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
      </section>
    </div>
  );
};

export default NotFoundComponent;
