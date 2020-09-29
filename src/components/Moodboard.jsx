import React from "react";

const days = Array.apply(null, Array(52 * 7)).map(function (x, i) {
  return i;
});

export default function Moodboard() {
  return (
    <div className="moodboard" id="moodboard">
      <div></div>
      {days.map((day) => (
        <div className="moodboard__day"></div>
      ))}
    </div>
  );
}
