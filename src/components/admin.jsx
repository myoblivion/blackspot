import React from "react";
import { Link } from "react-router-dom";

const AdminComponent = ({ props, ref }) => {
  return (
    <div id="admin wrapper">
      <div className="admins">
        <div className="admin-contents">
          <h1>Welcome Admin</h1>
          <div className="admin-container">
            <h2>Gogo Racing</h2>
            <ol>
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
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;
