import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
import { convertFromHTML } from "draft-convert";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { addPost, editPost } from "../actions/postActions";
import { validPost } from "./validator";

function WysiwygDataPersistence({ posts }) {
  const routeParams = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescritipn] = useState("");

  const [editorState, setEditorState] = useState(() => {
    if (location.pathname === "/posts/new") {
      return EditorState.createEmpty();
    } else if (routeParams.postId) {
      const currentPost =
        posts && posts.find(({ id }) => `${id}` === routeParams.postId);
      setTitle(currentPost.title);
      return EditorState.createWithContent(convertFromHTML(currentPost.body));
    }
  });

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  function publish() {
    const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    if (validPost(title, description, body)) {
      console.log(body);
      const postData = { title, description, body };
      addPost("posts", postData, navigate);
    } else {
      console.log("Posts need to include a title and a body");
    }
  }

  function update() {
    const body = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    ).trim();
    const id = routeParams.postId;
    console.log(title);
    console.log(body);
    if (validPost(title, body)) {
      const postData = { title, description, body };
      editPost(id, postData, navigate);
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
  if (location.pathname === "/posts/new") {
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

  return (
    <div className="textEditor">
      <header className="posteditor-header">
        <strong>Post Editor</strong>
      </header>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitle}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={handledescription}
      />
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
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
            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
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
  );
}

export default WysiwygDataPersistence;
