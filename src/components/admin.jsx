import React from "react";
import { Link } from "react-router-dom";

const AdminComponent = ({ props, ref }) => {
  return (
    <div id="admin wrapper">
      <div className="admin-contents">
        <div className="admin-container">
          <h1>Gogo Racing</h1>
          <ul>
            <Link
              to="/announcements"
              {...props}
              ref={ref}
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Announcements</li>
            </Link>
            <Link
              to="/posts"
              {...props}
              ref={ref}
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Updates</li>
            </Link>
            <Link
              to="/gameguide"
              {...props}
              ref={ref}
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Game Guide</li>
            </Link>
            <Link
              to="/newspage"
              {...props}
              ref={ref}
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>News</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;
