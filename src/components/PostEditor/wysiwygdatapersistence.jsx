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
// Grabe inaantok na talaga ako Aaaa gusto ko pa matulog
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
  const editorRef = useRef();
  const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  return (
    <div className="textEditor">
      <div className="text-editor-wrapper">
        <div className="editorsk">
          <header className="posteditor-header">
            <strong>Post Editor</strong>
          </header>
          <input
            type="text"
            placeholder="Title"
            value={title}
            className="title"
            onChange={handleTitle}
          />
          <input
            type="text"
            placeholder="description"
            className="description"
            value={description}
            onChange={handledescription}
          />
          <Editor
            spellCheck
            editorState={editorState}
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
        </div>
        <div className="outputs" dangerouslySetInnerHTML={{ __html: body }} />
        {buttons}
      </div>
    </div>
  );
}

export default WysiwygDataPersistence;
