import React, { useState, useRef } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
import { convertFromHTML } from "draft-convert";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { validPost } from "./validator";
import { addNews, editNews } from "../actions/newsAction";
import embed from "embed-video";
function WysiwygDataNews({ newspage }) {
  const routeParams = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [ndescription, setDescritipn] = useState("");

  const [editorState, setEditorState] = useState(() => {
    if (location.pathname === "/newspage/new") {
      return EditorState.createEmpty();
    } else if (routeParams.newsID) {
      const currentPost =
        newspage && newspage.find(({ id }) => `${id}` === routeParams.newsID);
      setTitle(currentPost.title);
      return EditorState.createWithContent(convertFromHTML(currentPost.body));
    }
  });

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  function publish() {
    const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    if (validPost(title, ndescription, body)) {
      console.log(body);
      const newsData = { title, ndescription, body };
      addNews("newspage", newsData, navigate);
    } else {
      console.log("Posts need to include a title and a body");
    }
  }
  const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  function update() {
    const body = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    ).trim();
    const id = routeParams.newsID;
    console.log(title);
    console.log(body);
    if (validPost(title, body)) {
      const newsData = { title, ndescription, body };
      editNews(id, newsData, navigate);
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
  if (location.pathname === "/newspage/new") {
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
            className="title"
            value={title}
            onChange={handleTitle}
          />
          <input
            type="text"
            className="description"
            placeholder="ndescription"
            value={ndescription}
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

export default WysiwygDataNews;
