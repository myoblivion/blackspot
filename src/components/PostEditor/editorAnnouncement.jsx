import React, { useState } from "react";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useNavigate } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

function EditorPost(props) {
  let navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    title: props.postList[0].title,
    description: props.postList[0].description,
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  let editorState = EditorState.createWithContent(
    ContentState.createFromBlockArray(convertFromHTML(props.postList[0].body))
  );
  const [body, setbody] = useState(editorState);

  const onEditorStateChange = (editorState) => {
    setbody(editorState);
  };

  const PoemAddbooks = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      axios
        .post(`http://localhost:3001/editAnnouncementss`, {
          title: userInfo.title,
          description: userInfo.description,
          body: userInfo.body.value,
          ids: props.editPostID,
        })
        .then((res) => {
          // then print response status
          if (res.data.success === true) {
            navigate(`/posts`);
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
    <div className="edit-post-app">
      <div className="edit-pcontainer">
        <div className="edit-row">
          <form onSubmit={PoemAddbooks} className="update__forms">
            <h3 className="myaccount-content"> Edit </h3>
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
                <input
                  type="text"
                  name="description"
                  value={userInfo.description}
                  onChange={onChangeValue}
                  className="form-control"
                  placeholder="description"
                  required
                />
                <Editor
                  editorState={body}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
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
              <div className="form-group col-sm-12 text-right">
                <button type="submit" className="btn btn__theme">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditorPost;
