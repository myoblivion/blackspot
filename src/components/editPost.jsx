import React, { useState, useEffect } from "react";
import axios from "axios";
import EditorPost from "./PostEditor/editorPost";
import { useParams } from "react-router-dom";

const Edit = (props) => {
  useEffect(() => {}, []);
  let postID = useParams();
  const [ispostId, setpostId] = useState([]);
  console.log(postID);
  const viewPostId = async (ids) => {
    try {
      await axios
        .post(`http://127.0.0.1/postId`, {
          ids,
          postID,
        })
        .then((res) => {
          if (res.data.success === true) {
            setpostId(res.data.listId);
          }
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      {ispostId.length > 0 ? (
        <>
          <EditorPost
            postList={ispostId}
            postID={postID}
            data={res.data.listID}
          />
        </>
      ) : null}
    </>
  );
};
export default Edit;
