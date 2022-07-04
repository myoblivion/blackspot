import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function AnnouncementsLinks({ announcements }) {
  return (
    <div className="aLinks">
      <Link id="new-post" to="new" className="new-post">
        New Post
      </Link>
      <ol>
        {announcements &&
          announcements.map(({ title, id, adescription }) => {
            return (
              <Link to={`${id}`} key={id}>
                <li>
                  <div className="li-left"></div>
                  <div className="li-right">
                    <h3>{title}</h3>
                    <span>{adescription}</span>
                  </div>
                </li>
              </Link>
            );
          })}
      </ol>
    </div>
  );
}

export default AnnouncementsLinks;
