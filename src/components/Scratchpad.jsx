import React, { useState, useEffect } from "react";
import { text } from "@fortawesome/fontawesome-svg-core";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// (Almost) all scratchpad logic is kept to this component. It will maintain it's own state, and all keypress listeners will be defined here. This is in contrast to the previous modus operandi, where complex logic is imported as a service, and state is maintained solely in App.js.

export default function Scratchpad() {
  const [padState, setPadSate] = useState("S"); // current visible pad
  const [editor, setEditor] = useState(""); // current quill editor state
  const [notes, setNotes] = useState([
    {
      title: "Test Note",
      body: "",
    },
  ]);

  // const [noteContent, setNoteContent] = useState([]);

  const downloadStorage = () => {
    // download from localStorage and dump state
  };

  const saveToStorage = () => {
    // save current state to local storage
  };

  const updateContent = () => {
    // update state with current text input
  };

  const switchPad = (pad) => {
    // console.log(pad);
    setPadSate(pad);
  };

  const log = () => {
    console.log(padState);
  };

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
            value={editor}
            onChange={setEditor}
            modules={modules}
            formats={formats}
          />
        </div>
      ) : (
        <div className="scratchpad__body notepad">
          <div className="notepad__sidebar">
            {notes.map((note) => (
              <div className="notepad__tab">{note.title}</div>
            ))}
          </div>
          <ReactQuill
            className="scratchpad__editor"
            theme="snow"
            value={editor}
            onChange={setEditor}
            modules={modules}
            formats={formats}
          />
        </div>
      )}
      <button onClick={log}>LOG</button>
    </div>
  );
}
