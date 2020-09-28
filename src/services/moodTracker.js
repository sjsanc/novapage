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
  console.log("hi");
};
