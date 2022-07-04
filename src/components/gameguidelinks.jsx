import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function GameGuideLinks({ gameguide }) {
  return (
    <div className="postLinks">
      <Link id="new-post" to="new" className="new-post">
        New Post
      </Link>
      <ol>
        {gameguide &&
          gameguide.map(({ title, id, adescription }) => {
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

export default GameGuideLinks;
