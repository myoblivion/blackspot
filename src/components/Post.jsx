import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from "interweave";

import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";
import axios from "axios";

function Post({}) {
  const { postId } = useParams();
  const [posts, setpost] = useState([]);
  useEffect(() => {
    viewPost();
  }, []);
  const post = posts && posts.find(({ id }) => `${id}` === postId);

  const viewPost = async () => {
    try {
      await axios.get(`http://localhost:3001/updateList`).then((res) => {
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
      {post ? (
        <div className="post wrapper">
          <div className="post-header">
            <h3>{post.title}</h3>
          </div>
          <div className="posts-contents">
            <Interweave content={post.body} />
          </div>
        </div>
      ) : (
        <strong>Not Found</strong>
      )}
    </React.Fragment>
  );
}

export default Post;
