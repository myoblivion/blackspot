import React, { useState, useEffect } from "react";
import axios from "axios";
import EditorPost from "./PostEditor/editorPost";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = (props) => {
  const postID = useParams();
  const [ispostId, setpostId] = useState([]);
  console.log(postID);

  return (
    <>
      {ispostId.length > 0 ? (
        <>
          <EditorPost
            postList={ispostId}
            {...props}
            postID={props.map.postID}
          />
        </>
      ) : null}
    </>
  );
};
export default EditPost;
