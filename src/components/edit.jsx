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

  const [description, setDescription] = useState(editorState);

  function sure() {
    alert("are you sure?");
  }
const data = `lorem ipsum h2 <h2>Test</h2>`
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
                  <form className="update__forms">
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label className="font-weight-bold">
                          {" "}
                          <h3 className="myaccount-content"> Title </h3>
                        </label>
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          id="title-input"
                          required
                        />
                      </div>
                      <div className="form-group col-md-12 editor">
                        <label className="font-weight-bold"> Description</label>
                        <input type="text" id="description-input" />
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
                          value={draftToHtml(
                            convertToRaw(description.getCurrentContent())
                          )}
                        />
                      </div>
                      <div className="form-group col-sm-12 text-right">
                        <button
                          type="submit"
                          className="btn btn__theme"
                          onClick={sure}
                        >
                          Submit
                        </button>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: data}} />
                    </div>
                  </form>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
