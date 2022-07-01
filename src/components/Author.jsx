import { useParams } from "react-router-dom";
import React from "react";
function Author({ authors }) {
  const { authorId } = useParams();
  const currentAuthor =
    authors && authors.find(({ id }) => `${id}` === authorId);
  return (
    <div>
      {currentAuthor && (
        <h1>
          {currentAuthor.name}, Author Id: {authorId}
        </h1>
      )}
    </div>
  );
}

export default Author;
