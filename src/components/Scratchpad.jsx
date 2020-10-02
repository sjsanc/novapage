import React, { useState, useEffect, useCallback } from "react";
import { text } from "@fortawesome/fontawesome-svg-core";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// (Almost) all scratchpad logic is kept to this component. It will maintain it's own state, and all keypress listeners will be defined here. This is in contrast to the previous modus operandi, where complex logic is imported as a service, and state is maintained solely in App.js.

export default function Scratchpad() {
  const [padState, setPadSate] = useState("SCRATCHPAD"); // current visible pad
  const [scratchEditor, setScratchEditor] = useState(""); // current quill editor state

  const useForceUpdate = () => {
    // https://medium.com/@dev.cprice/wild-react-useforceupdate-e4459f2c1272
    const [, forceUpdate] = useState();

    return useCallback(() => {
      forceUpdate((s) => !s);
    }, []);
  };

  const downloadStorage = () => {
    // download from localStorage and dump state
    const contents = localStorage.getItem("scratchEditorContents");
    // console.log(contents);
    setScratchEditor(contents);
  };

  const saveToStorage = () => {
    // save current state to local storage
    localStorage.setItem("scratchEditorContents", scratchEditor);
  };

  const switchPad = (pad) => {
    // console.log(pad);
    setPadSate(pad);
  };

  useEffect(() => {
    // set content on component mount
    downloadStorage();
  }, []);

  useEffect(() => {
    // upload editor state to localStorage on change
    saveToStorage();
  }, [scratchEditor]);

  const modules = {
    toolbar: [
      [
        "bold",
        "italic",
        "underline",
        "strike",
        { list: "ordered" },
        { list: "bullet" },
      ],
    ],
  };

  const formats = ["bold", "italic", "underline", "strike", "list", "bullet"];

  return (
    <div className="scratchpad">
      <div className="scratchpad__toprow">
        {["SCRATCHPAD", "NOTEPAD"].map((btn) => (
          <button
            onClick={() => {
              switchPad(btn);
            }}
            className="scratchpad__button"
          >
            {btn}
          </button>
        ))}
      </div>
      {padState == "SCRATCHPAD" ? (
        <div className="scratchpad__body">
          <ReactQuill
            className="scratchpad__editor"
            theme="snow"
            value={scratchEditor}
            onChange={setScratchEditor}
            modules={modules}
            formats={formats}
          />
        </div>
      ) : null}
    </div>
  );
}
