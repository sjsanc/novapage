import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import { getLocation, getWeather } from "./services/weather";
import { updateTime, currentTime, minsToMidnight } from "./services/time";
import { queryNewDay, selectMood, showMoodBoard } from "./services/moodTracker";
import { handleGearClick } from "./services/controlPanel";

import Stats from "./components/Stats";
import BookmarkTiles from "./components/BookmarkTiles";
import BookmarkModal from "./components/BookmarkModal";
import Scratchpad from "./components/Scratchpad";
import TabRow from "./components/TabRow";
import Moodlet from "./components/Moodlet";
import ControlPanel from "./components/ControlPanel";
import Moodboard from "./components/Moodboard";

import CONFIG from "./config/config.json";

function App() {
  const [currentTab, setCurrentTab] = useState("home");
  const [location, setLocation] = useState(0);
  const [weather, setWeather] = useState({});
  const [moodPrompt, setMoodPrompt] = useState();
  const [time, setTime] = useState("00:00");
  const [bookmarkList, setBookmarkList] = useState([]);

  const modalEl = useRef(null);
  const moodEl = useRef(null);

  const KEY = "ed4c15476d9b8e4491c4642193c287ad";

  const changeTab = (e) => {
    setCurrentTab(e.target.id);
  };

  // App initiation
  // Get location && check moodPrompt
  useEffect(() => {
    getLocation(setLocation);

    if (!localStorage.getItem("moodboard")) {
      localStorage.setItem("moodboard", "");
    }
    if (!localStorage.getItem("recordDates")) {
      localStorage.setItem("recordDates", "");
    }

    if (queryNewDay()) {
      setMoodPrompt(true); // new check
    } else {
      setMoodPrompt(false); // check complete
    }
  }, []);

  // Get weather when location returns
  useEffect(() => {
    if (location !== 0) {
      console.log(location.latitude);
      getWeather(location.latitude, location.longitude, KEY, setWeather);
    }
  }, [location]);

  // Set & update time
  useEffect(() => {
    setInterval(() => {
      updateTime(currentTime(), setTime);
    }, 1000);
  }, []);

  // BOOKMARKLIST
  const toggleModal = () => {
    modalEl.current.classList.toggle("bookmark-grid__modal--show-modal");
  };

  const submitBookmarkList = (list) => {
    console.log("set");
    setBookmarkList(list);
    toggleModal();
  };

  // Debug
  const log = () => {
    // console.log(weather);
    // console.log(location);
    // console.log(bookmarkList);
    console.log(moodPrompt);
    console.log(localStorage.removeItem("minsToMidnight"));
    // localStorage.removeItem("moodInterval");
    // setMoodCheck(false);
    // // console.log("Removing moodInterval");
    console.log(localStorage.getItem("moodboard"));
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        <BookmarkModal
          bookmarkList={bookmarkList}
          modalEl={modalEl}
          toggleModal={toggleModal}
          submitBookmarkList={submitBookmarkList}
        />

        <div className="tab-row">
          <div className="tabrow__icon" id="home" onClick={changeTab}></div>
          <div className="tabrow__icon" id="games" onClick={changeTab}></div>
          <div className="tabrow__icon" id="tree" onClick={log}></div>
        </div>

        <div className="dashboard">
          {currentTab === "home" && (
            <>
              <div className="status-row">
                <div className="status-row__header">
                  <h1>Welcome,</h1>
                  <h1>{CONFIG.name}</h1>
                </div>
                <Moodlet
                  selectMood={selectMood}
                  moodEl={moodEl}
                  setMoodPrompt={setMoodPrompt}
                  moodPrompt={moodPrompt}
                />
                <Stats
                  time={time}
                  weatherCode={weather.icon}
                  weather={weather.weather}
                  temp={weather.temp}
                />
                {/* <div
                  className="status-row__mood__showBoard"
                  onClick={showMoodBoard}
                >
                  <FontAwesomeIcon icon={faThLarge} />
                </div> */}
                <ControlPanel
                  handleGearClick={handleGearClick}
                  showMoodBoard={showMoodBoard}
                />
              </div>
              <Moodboard moods={localStorage.getItem("moodboard")} />
              <div className="module-wrapper">
                <div className="bookmark-grid__wrapper">
                  <BookmarkTiles
                    bookmarks={bookmarkList}
                    toggleModal={toggleModal}
                  />
                </div>
                <Scratchpad />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
