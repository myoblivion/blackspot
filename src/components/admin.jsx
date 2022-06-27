import React, { useState, useEffect, useRef, LinkProps } from "react";
import Interweave from "interweave";
import { deletePost } from "./actions/postActions";
import { HashLink } from "react-router-hash-link";
import { useNavigate, useParams, Route, Routes } from "react-router-dom";
import {
  FaTrash,
  FaImages,
  FaUserCircle,
  FaSearch,
  FaRegArrowAltCircleUp,
  FaWindowClose,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import { mockAPI } from "./mockApi/mockApi";
import PostsLinks from "./postLinks";
import WysiwygDataPersistence from "./wysiwygDataPersistence/wysiwygdatapersistence";
import Post from "./Post";

const Admins = ({ record, props, ref }) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/edit`;
    navigate.push(path);
  };
  const [authors, setAuthors] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    const request = {
      method: "get",
    };
    mockAPI(request).then((response) => {
      console.log(response);
      setPosts(response.data.posts);
      setAuthors(response.data.authors);
    });
  }, []);

  return (
    <div className="admin wrapper">
      <div className="admin-wrapper">
        <div className="admin-left">
          <div className="sub-components">
            <h1>Welcome, Admin</h1>
            <div className="admin-right">
              <div className="somethings-in">
                <div className="displayed-contents">
                  {/* Dito */}
                  <Routes>
                    <Route path="/*" element={<PostsLinks posts={posts} />} />
                    <Route path="/:postId/*" element={<Post posts={posts} />} />
                    <Route
                      path="new"
                      element={<WysiwygDataPersistence posts={posts} />}
                    />
                    <Route
                      path="/:postId/edit"
                      element={<WysiwygDataPersistence posts={posts} />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admins;
