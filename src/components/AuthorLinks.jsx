import { Link } from "react-router-dom";
import React from "react";
const AuthorsLinks = ({ ggrguides }) => {
  const renderAuthors =
    ggrguides &&
    ggrguides.map(({ name, id, description }) => {
      return (
        <li key={id}>
          <h3>
            <Link to={`${id}`}>
              {name}
              <span>{description}</span>
            </Link>
          </h3>
        </li>
      );
    });

  return <div>{renderAuthors}</div>;
};

export default AuthorsLinks;
