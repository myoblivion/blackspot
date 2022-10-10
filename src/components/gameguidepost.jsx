import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";

import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";
import axios from "axios";

function GameGuidePost({}) {
  const { gameguideID } = useParams();
  const [gameguide, setAnnouncement] = useState([]);
  useEffect(() => {
    viewPost();
  }, []);
  const gameguidez =
    gameguide && gameguide.find(({ id }) => `${id}` === gameguideID);

  const viewPost = async () => {
    try {
      await axios.get(`http://localhost:3001/guideList`).then((res) => {
        if (res.data.success === true) {
          setAnnouncement(res.data.listall);
        }
      });
    } catch (error) {
      throw error;
    }
  };
  return (
    <React.Fragment>
      {gameguidez ? (
        <div className="post wrapper">
          <div className="post-header">
            <h3>{gameguidez.title}</h3>
          </div>
          <div className="posts-contents">
            <Interweave content={gameguidez.body} />
          </div>
        </div>
      ) : (
        <strong>Not Found</strong>
      )}
    </React.Fragment>
  );
}

export default GameGuidePost;
