// The moodlet records a daily mood update, labelled 0, 1 and 2
// Moods get saved to localStorage

import { minsToMidnight } from "./time";

export const selectMood = (setMoodPrompt, id) => {
  localStorage.setItem("minsToMidnight", minsToMidnight());

  // append mood code to moodboard + date
  let moodboard = localStorage.getItem("moodboard");
  let recordDates = localStorage.getItem("recordDates");
  let date = new Date();
  moodboard += id;
  recordDates +=
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + ";";
  localStorage.setItem("moodboard", moodboard);
  localStorage.setItem("recordDates", recordDates);
  setMoodPrompt(false); // i.e. check completed
};

export const queryNewDay = () => {
  // if time has passed 00:00, return true;
  if (minsToMidnight() > localStorage.getItem("minsToMidnight")) return true;
};

export const showMoodBoard = () => {
  document.getElementById("moodboard").classList.toggle("moodboard--visible");
  const days = document.getElementsByClassName("moodboard__day");
  for (let day of days) {
    day.classList.toggle("moodboard__day--visible");
  }
};

export const paintMoodboard = (moods) => {
  let data = [];
  for (let i = 0; i < moods.length; i++) {
    data.push([moods[i]]);
  }
  return data;
};

// TOOLTIPS
// onMouseOver
export const handleMoodboardHoverEnter = (e) => {
  if (e.target.id) {
    let toolTip = document.createElement("div");
    toolTip.classList.add("moodboard__day__tooltip");
    toolTip.id = "moodboardDayTooltip";
    toolTip.innerText = e.target.id;
    e.target.append(toolTip);
  }
};

// onMouseExit
export const handleMoodboardHoverExit = (e) => {
  if (e.target.id) {
    let tooltip = document.getElementById("moodboardDayTooltip");
    if (tooltip.parentNode) {
      tooltip.parentNode.removeChild(tooltip);
    }
  }
};
