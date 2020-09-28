// https://sabe.io/tutorials/how-to-create-modal-popup-box

import React, { useRef, useState } from "react";
import { listParser } from "../services/listParser";

export default function BookmarkModal({
  bookmarkList,
  modalEl,
  toggleModal,
  submitBookmarkList,
}) {
  const textareaEl = useRef();
  const [input, setInput] = useState(bookmarkList);
  return (
    <div className="bookmark-grid__modal" ref={modalEl}>
      <div className="bookmark-grid__modal__content">
        <span className="bookmark-grid__modal__close" onClick={toggleModal}>
          &times;
        </span>
        <h3>Input list of bookmarks</h3>
        <textarea
          placeholder="Seperate links with a semicolon;"
          ref={textareaEl}
          value={input}
          onChange={(e) => {
            // update input state with each keystroke
            setInput(e.target.value);
            console.log(input);
          }}
        ></textarea>
        <button
          className="bookmark-grid__modal__submit"
          onClick={() => {
            // submit input state to primary bookmarkList state
            submitBookmarkList(listParser(input));
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
