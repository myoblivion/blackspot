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

const Edit = ({ record, handleLogout, props, ref }) => {
  const announcements = [
    {
      title: "Gogo Racing Play To Win Raffle Event",
    },
  ];
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
    axios
      .get("https://blackspotstudio.ph/#/ggr-patch2")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

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
  const uploadCallback = (file) => {
    return new Promise((resolve, reject) => {
      if (file) {
        let reader = new FileReader();
        reader.onload = (e) => {
          resolve({ data: { link: e.target.result } });
        };
        reader.readAsDataURL(file);
      }
    });
  };
  return (
    <div className="admin wrapper">
      <div className="admin-wrapper">
        <div className="admin-left">
          <div className="sub-components">
            <button id="logout" onClick={handleLogout}>
              Log Out
            </button>
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
                <div className="ggr-Edit-contents">
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
                          toolbar={{
                            options: [
                              "inline",
                              "blockType",
                              "fontSize",
                              "fontFamily",
                              "list",
                              "textAlign",
                              "colorPicker",
                              "link",
                              "embedded",
                              "emoji",
                              "image",
                              "remove",
                              "history",
                            ],
                            link: {
                              defaultTargetOption: "_blank",
                              popupClassName: "mail-editor-link",
                            },
                            image: {
                              uploadEnabled: true,
                              uploadCallback: uploadCallback,
                              previewImage: true,
                              inputAccept:
                                "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                              alt: { present: false, mandatory: false },
                              defaultSize: {
                                height: "auto",
                                width: "auto",
                              },
                            },
                          }}
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

export default Edit;
