import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import {
  FaUserCircle,
  FaSearch,
  FaRegArrowAltCircleUp,
  FaWindowClose,
} from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import backgroundimg from "../images/gogoracingbackground/ggrpatchnotesbanner.png";
const html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

</html>
`;
const contentBlock = htmlToDraft(html);

const contentState = ContentState.createFromBlockArray(
  contentBlock.contentBlocks
);
const defaultEditorState = EditorState.createWithContent(contentState);

const Edit = ({ props, ref }) => {
  const [editorState, setEditorState] = React.useState(defaultEditorState);

  const onEditorStateChange = (editorState) => setEditorState(editorState);
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
  const [description, setDescription] = useState(editorState);

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
    <div className="edit wrapper">
      <div className="edit-wrapper">
        <div className="edit-right">
          {/*  */}
          <div className="edit-web" id="GGR">
            <div className="edit-edit-contents">
              <div className="edit-admcontents1">
                <div className="edit-header">
                  <Link
                    to="/admin"
                    {...props}
                    ref={ref}
                    onClick={() => window.scrollTo(0, 0)}
                    id="becku"
                  >
                    <IoIosArrowDropleftCircle />
                  </Link>
                  <div className="edit-top">
                    <div className="edit-left">
                      <Link
                        to="/edit"
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
                  </div>
                  <img src={backgroundimg} alt="" />
                </div>
                <div className="edit-contents">
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
                          editorState={editorState}
                          editorClassName="editorClassName"
                          onEditorStateChange={onEditorStateChange}
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
                <div>
                    {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                </div>
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

