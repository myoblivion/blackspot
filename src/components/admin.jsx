import React, { useState, useEffect, useRef, LinkProps } from "react";

import { HashLink } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import Draggable from "react-draggable"; // The default// ES6
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

import {
  FiFileText,
  FiMove,
  FiRotateCw,
  FiRotateCcw,
  FiZoomOut,
  FiZoomIn,
} from "react-icons/fi";
import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";

const Admins = ({ record, handleLogout, props, ref }) => {
  const Labels = [
    {
      id: "submen1",
      name: "Announcements",
      htmlFor: "sub1",
    },
    {
      id: "submen2",
      name: "Updates",
      htmlFor: "sub2",
    },
    {
      id: "submen3",
      name: "Game Guide",
      htmlFor: "sub3",
    },
    {
      id: "submen4",
      name: "Newsletter",
      htmlFor: "sub4",
    },
  ];
  const subLabels = [
    {
      id: "raffle",
      name: "Raffle giveaway",
      htmlFor: "pup",
    },
  ];
  var filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }
    return posts.filter((post) => {
      var postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(Labels, searchQuery);

  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Admin";
  }, []);

  const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
      history.push(`?s=${searchQuery}`);
      e.preventDefault();
    };

    return (
      <form action="/" method="get" onSubmit={onSubmit} autoComplete="off">
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search "
          name="s"
        />
      </form>
    );
  };
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (events, a) => {
    setInputList(
      inputList.concat(
        <ul key={a}>
          <li contentEditable></li>
        </ul>
      )
    );
  };
  function TextEditor() {
    /** @type {React.RefObject<Trix>} */
    const textEditor = React.useRef(null);
    /** @type {React.RefObject<Tribute>} */
    const tribute = React.useRef(null);
    const onChange = (event) => {
      console.log(event.target.value);
    };
  }
  const handleEditorReady = (editor) => {
    // this is a reference back to the editor if you want to
    // do editing programatically
    // editor.insertString("editor is ready");
  };
  const handleChange = (html, text) => {
    console.log({ html, text });
  };

  // Foararaarara
  let history = useHistory();
  const [userInfo, setuserInfo] = useState({
    title: "",
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };
  const [isError, setError] = useState(null);

  useEffect(() => {
    viewPost();
  }, []);

  const [ispost, setpost] = useState([]);
  const viewPost = async () => {
    try {
      await axios.get(`http://localhost:4000`).then((res) => {
        if (res.data.success === true) {
          setpost(res.data.listall);
        }
      });
    } catch (error) {
      throw error;
    }
  };
  console.log(viewPost);
  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      axios
        .post(`http://localhost:4000`, {
          title: userInfo.title,
          description: userInfo.description.value,
        })
        .then((res) => {
          if (res.data.success === true) {
            history.push("/");
          }
        });
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="admin wrapper">
      <div className="admin-wrapper">
        <div className="admin-left">
          <div className="sub-components">
            <button id="logout" onClick={handleLogout}>
              Log Out
            </button>
            <div className="game-components">
              <input type="radio" name="choose" id="choose1" />
              <input type="radio" name="choose" id="choose2" />
              <input type="radio" name="choose" id="choose3" />
              <input type="radio" name="choose" id="choose4" />
              <label htmlFor="choose1" id="lel">
                Gogo Racing
              </label>
              <label htmlFor="choose2" id="lele">
                Scion Fist
              </label>
              <label htmlFor="choose3" id="lelele">
                Gogo World
              </label>
              <label htmlFor="choose4" id="lelelele">
                Gogo Chain
              </label>
            </div>
            <div className="sub-contents">
              <input type="radio" name="sub" id="sub1" />
              <input type="radio" name="sub" id="sub2" />
              <input type="radio" name="sub" id="sub3" />
              <input type="radio" name="sub" id="sub4" />
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              {filteredPosts.map((post, s) => (
                <label htmlFor={post.htmlFor} key={s} id={post.id}>
                  {post.name}
                </label>
              ))}
            </div>
            <div className="buttonzs">
              <button>Delete</button>
              <button>Add New</button>
              <button>Save</button>
            </div>
          </div>
        </div>
        <div className="admin-right">
          {/*  */}
          <div className="content-web" id="GGR">
            <div className="ggr-admin-contents">
              <div className="ggr-admcontents1">
                <div className="ggr-header">
                  <div className="ggr-top">
                    <div className="ggr-left">
                      <Link
                        to="/admin"
                        {...props}
                        ref={ref}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <IoIosArrowDropleftCircle />
                      </Link>
                      <h1>
                        <FaUserCircle /> User
                      </h1>
                    </div>
                    <div className="ggr-right">
                      <Link
                        to="/admin"
                        {...props}
                        ref={ref}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <FaSearch />
                      </Link>
                    </div>
                  </div>
                  <img src={backgroundimg} alt="" />
                </div>
                <div className="ggr-admins-contents">
                  {" "}
                  <form onSubmit={addDetails} className="update__forms">
                    <h3 className="myaccount-content"> Add </h3>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label className="font-weight-bold">
                          {" "}
                          Title <span className="required"> * </span>{" "}
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={userInfo.title}
                          onChange={onChangeValue}
                          className="form-control"
                          placeholder="Title"
                          required
                        />
                      </div>
                      <div className="form-group col-md-12 editor">
                        <label className="font-weight-bold">
                          {" "}
                          Description <span className="required"> * </span>{" "}
                        </label>
                        <Editor
                          editorState={description}
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          onEditorStateChange={onEditorStateChange}
                        />
                        <textarea
                          style={{ display: "none" }}
                          disabled
                          ref={(val) => (userInfo.description = val)}
                          value={draftToHtml(
                            convertToRaw(description.getCurrentContent())
                          )}
                        />
                      </div>
                      <div className="form-group col-sm-12 text-right">
                        <button type="submit" className="btn btn__theme">
                          {" "}
                          Submit{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="bottom-eyes"></div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Admins;
