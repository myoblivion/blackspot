import { Link } from "react-router-dom";
import React from "react";
const AuthorsLinks = ({ authors }) => {
  const renderAuthors =
    authors &&
    authors.map(({ name, id }) => {
      return (
        <li key={id}>
          <h3>
            <Link to={`${id}`}>{name} </Link>
          </h3>
        </li>
      );
    });

  return <div>{renderAuthors}</div>;
};

export default AuthorsLinks;
