import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faThLarge } from "@fortawesome/free-solid-svg-icons";

export default function ControlPanel({ handleGearClick, showMoodBoard }) {
  return (
    <div className="status-row__control">
      <div className="status-row__control__gearbox">
        <FontAwesomeIcon
          icon={faCog}
          onClick={handleGearClick}
          className="status-row__control__gear"
          id="statusRowControlGear"
        />
      </div>
      <div className="status-row__control__tray">
        <FontAwesomeIcon
          id="showMoodBoardButton"
          icon={faThLarge}
          className="status-row__control__icon"
          onClick={showMoodBoard}
        />
      </div>
      <div
        className="status-row__control__cover"
        id="statusRowControlCover"
      ></div>
    </div>
  );
}
