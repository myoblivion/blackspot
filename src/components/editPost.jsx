import React, { useState, useEffect } from "react";
import axios from "axios";
import EditorPost from "./PostEditor/editorPost";
import { useParams } from "react-router-dom";

const EditPost = (props) => {
  const { postID } = useParams();
  useEffect(() => {
    viewPostId(postID);
  }, []);

  const [ispostId, setpostId] = useState([]);
  const viewPostId = async (ids) => {
    try {
      await axios
        .post(`https://192.168.2.105:8081/getPostId`, {
          ids: postID,
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
          <EditorPost postList={ispostId} editPostID={postID} />
        </>
      ) : null}
    </>
  );
};
export default EditPost;
