import React, { useState, useRef } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
import { convertFromHTML } from "draft-convert";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { addAnnounce, editAnnouncement } from "../actions/announcementAction";
import { validPost } from "./validator";

function WysiwygDataAnnouncement({ announcements }) {
  const routeParams = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [adescription, setDescritipn] = useState("");

  const [editorState, setEditorState] = useState(() => {
    if (location.pathname === "/announcements/new") {
      return EditorState.createEmpty();
    } else if (routeParams.announcementID) {
      const currentPost =
        announcements &&
        announcements.find(({ id }) => `${id}` === routeParams.announcementID);
      setTitle(currentPost.title);
      return EditorState.createWithContent(convertFromHTML(currentPost.body));
    }
  });

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  function publish() {
    const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    if (validPost(title, adescription, body)) {
      console.log(body);
      const AnnouncementData = { title, adescription, body };
      addAnnounce("announcements", AnnouncementData, navigate);
    } else {
      console.log("Posts need to include a title and a body");
    }
  }
  function update() {
    const body = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    ).trim();
    const id = routeParams.announcementID;
    console.log(title);
    console.log(body);
    if (validPost(title, body)) {
      const AnnouncementData = { title, adescription, body };
      editAnnouncement(id, AnnouncementData, navigate);
    } else {
      console.log("Posts need to include a title and a body");
    }
  }

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handledescription = (event) => {
    setDescritipn(event.target.value);
  };

  let buttons;
  if (location.pathname === "/announcements/new") {
    buttons = <button onClick={publish}>Publish</button>;
  } else {
    buttons = <button onClick={update}>Update</button>;
  }
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
  const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const editorRef = useRef();

  return (
    <div className="textEditor">
      <div className="text-editor-wrapper">
        <div className="editorsk">
          <header className="posteditor-header">
            <strong>Announcement Editor</strong>
          </header>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitle}
            className="inputsz"
          />
          <input
            type="text"
            placeholder="adescription"
            value={adescription}
            className="inputsz"
            onChange={handledescription}
          />
          <Editor
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={onEditorStateChange}
            ref={editorRef}
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
          />
          {buttons}
        </div>
        <div className="outputs" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
}

export default WysiwygDataAnnouncement;
