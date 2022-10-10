import React, { useState, useRef } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import embed from "embed-video";
// import htmlToDraft from "html-to-draftjs";
import { convertFromHTML } from "draft-convert";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { addPost, editPost } from "../actions/postActions";
import { validPost } from "./validator";
import axios from "axios";
// Grabe inaantok na talaga ako Aaaa gusto ko pa matulog
function WysiwygDataNews({ posts }) {
  let navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    title: "",
    description: "",
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  let editorState = EditorState.createEmpty();
  const [body, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };

  const [isError, setError] = useState(null);
  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      axios
        .post(`http://localhost:3001/addNews`, {
          title: userInfo.title,
          description: userInfo.description,
          body: userInfo.body.value,
        })
        .then((res) => {
          if (res.data.success === true) {
            navigate(`${"../"}`);
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
  const editorRef = useRef();

  return (
    <div className="textEditor">
      <div className="text-editor-wrapper">
        <form onSubmit={addDetails} autoComplete="off">
          <div className="editorsk">
            <header className="posteditor-header">
              <strong>News Editor</strong>
            </header>
            <div className="inputs">
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                name="title"
                id="title"
                value={userInfo.title}
                onChange={onChangeValue}
                className="title"
                placeholder="Title"
                required
              />
              <label htmlFor="description">Description *</label>
              <input
                type="text"
                name="description"
                id="description"
                value={userInfo.description}
                onChange={onChangeValue}
                className="title"
                placeholder="Title"
                required
              />
            </div>
            <h2>Content</h2>
            <Editor
              spellCheck
              editorState={body}
              ref={editorRef}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              onEditorStateChange={onEditorStateChange}
              toolbar={{
                link: {
                  linkCallback: (params) => ({ ...params }),
                },
                embedded: {
                  embedCallback: (link) => {
                    const detectedSrc = /<iframe.*? src="(.*?)"/.exec(
                      embed(link)
                    );
                    return (detectedSrc && detectedSrc[1]) || link;
                  },
                },
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
                fontFamily: {
                  options: [
                    "Arial",
                    "Georgia",
                    "Impact",
                    "Tahoma",
                    "Times New Roman",
                    "Verdana",
                    "Oswald",
                    "'Lobster', cursive",
                    "'Indie Flower', cursive",
                    "'Rubik Moonrocks', cursive",
                    "'Permanent Marker', cursive",
                  ],
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                },
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
            />
            <textarea
              style={{ display: "none" }}
              disabled
              ref={(val) => (userInfo.body = val)}
              value={draftToHtml(convertToRaw(body.getCurrentContent()))}
            />
          </div>

          <button type="submit" className="btn btn__theme">
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default WysiwygDataNews;
