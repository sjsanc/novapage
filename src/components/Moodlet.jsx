import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faMehBlank,
  faFrown,
} from "@fortawesome/free-solid-svg-icons";

export default function Moodlet({ selectMood, setMoodPrompt, moodEl }) {
  return (
    <div className="status-row__mood" ref={moodEl}>
      <div className="moodlets">
        <FontAwesomeIcon
          id="P"
          icon={faSmile}
          size="2x"
          className="mood-icon mood-smile"
          onClick={() => {
            selectMood(setMoodPrompt, 0);
          }}
        />
        <FontAwesomeIcon
          id="M"
          icon={faMehBlank}
          size="2x"
          className="mood-icon mood-meh"
          onClick={() => {
            selectMood(setMoodPrompt, 1);
          }}
        />
        <FontAwesomeIcon
          id="N"
          icon={faFrown}
          size="2x"
          className="mood-icon mood-frown"
          onClick={() => {
            selectMood(setMoodPrompt, 2);
          }}
        />
      </div>
    </div>
  );
}
