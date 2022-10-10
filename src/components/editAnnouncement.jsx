import React, { useState, useEffect } from "react";
import axios from "axios";
import EditorAnnouncement from "./PostEditor/editorAnnouncement";
import { useParams } from "react-router-dom";

const EditAnnouncement = (props) => {
  const { announcementID } = useParams();
  useEffect(() => {
    viewPostId(announcementID);
  }, []);

  const [isannouncementID, setpostId] = useState([]);
  const viewPostId = async (ids) => {
    try {
      await axios
        .post(`http://localhost:3001/getAnnouncementId`, {
          ids: announcementID,
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
      {isannouncementID.length > 0 ? (
        <>
          <EditorAnnouncement
            postList={isannouncementID}
            editPostID={announcementID}
          />
        </>
      ) : null}
    </>
  );
};
export default EditAnnouncement;
