import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";

import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";
import axios from "axios";

function NewsPost({}) {
  const { newsID } = useParams();
  const [newspage, setpost] = useState([]);
  useEffect(() => {
    viewPost();
  }, []);
  const newspages = newspage && newspage.find(({ id }) => `${id}` === newsID);

  const viewPost = async () => {
    try {
      await axios.get(`http://localhost:3001/newsList`).then((res) => {
        if (res.data.success === true) {
          setpost(res.data.listall);
        }
      });
    } catch (error) {
      throw error;
    }
  };
  return (
    <React.Fragment>
      {newspages ? (
        <div className="post wrapper">
          <div className="post-header">
            <h3>{newspages.title}</h3>
          </div>
          <div className="posts-contents">
            <Interweave content={newspages.body} />
          </div>
        </div>
      ) : (
        <strong>Not Found</strong>
      )}
    </React.Fragment>
  );
}

export default NewsPost;
