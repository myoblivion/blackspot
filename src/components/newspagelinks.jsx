import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function NewsPageLinks({ newspage }) {
  return (
    <div className="announcement-links">
      <div className="aLinks">
        <Link id="new-post" to="new" className="new-post">
          New Post
        </Link>
        <h1 id="game-guideh1">News</h1>

        <ol>
          {newspage &&
            newspage.map(({ title, id, ndescription }) => {
              return (
                <Link to={`${id}`} key={id}>
                  <li>
                    <div className="li-left"></div>
                    <div className="li-right">
                      <h3>{title}</h3>
                      <span>{ndescription}</span>
                    </div>
                  </li>
                </Link>
              );
            })}
        </ol>
      </div>
    </div>
  );
}

export default NewsPageLinks;
