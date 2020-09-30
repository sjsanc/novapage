import React, { useState } from "react";

import { paintMoodboard } from "../services/moodTracker";
import { listParser } from "../services/listParser";
import {
  handleMoodboardHoverEnter,
  handleMoodboardHoverExit,
} from "../services/moodTracker";

export default function Moodboard() {
  // Create array of length n with linear integers
  // let days = Array.apply(null, Array(52 * 7)).map(function (x, i) {
  //   return i;
  // });

  // Create array of n filled with x
  let days = new Array(52 * 7).fill(4);

  // get moodboard as array
  let data = paintMoodboard(localStorage.getItem("moodboard"));
  let dates = listParser(localStorage.getItem("recordDates"));

  for (let i = 0; i < data.length; i++) {
    // convert non-empty digits to selected mood
    days[i] = [Number(data[i]), dates[i]];
  }

  console.log(dates);
  return (
    <div className="moodboard" id="moodboard">
      {days.map((day) => (
        <div
          id={day[1]}
          className={`moodboard__day moodboard__day__color${day[0]}`}
          onMouseEnter={(e) => handleMoodboardHoverEnter(e)}
          onMouseLeave={(e) => handleMoodboardHoverExit(e)}
        ></div>
      ))}
    </div>
  );
}
