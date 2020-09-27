import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faSmile,
  faMehBlank,
  faFrown,
  faCheckDouble,
  faCheck,
  faBorderStyle,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

import { getLocation, getWeather } from "./services/weather";
import { updateTime, currentTime } from "./services/time";

import Stats from "./components/Stats";
import BookmarkTiles from "./components/BookmarkTiles";

const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const book = [
  "/b/",
  "/gif/",
  "/g/",
  "/b/",
  "/gif/",
  "/g/",
  "/b/",
  "/gif/",
  "/g/",
  "/b/",
  "/gif/",
  "/g/",
];

function App() {
  const [currentTab, setCurrentTab] = useState("home");
  const [location, setLocation] = useState(0);
  const [weather, setWeather] = useState({});
  const [name, setName] = useState("Steven");
  const [moodCheck, setMoodCheck] = useState(false);
  const [time, setTime] = useState("00:00");

  const moodEl = useRef(null);

  const KEY = "ed4c15476d9b8e4491c4642193c287ad";

  const changeTab = (e) => {
    setCurrentTab(e.target.id);
  };

  // Get location
  useEffect(() => {
    getLocation(setLocation);
  }, []);

  // Get weather when location returns
  useEffect(() => {
    if (location !== 0) {
      console.log(location.latitude);
      getWeather(location.latitude, location.longitude, KEY, setWeather);
    }
  }, [location]);

  // Debug
  const log = () => {
    console.log(location);
    console.log(weather);
  };

  // Set & update time
  useEffect(() => {
    setInterval(() => {
      updateTime(currentTime(), setTime);
    }, 1000);
  }, []);

  const handleMoodSelect = () => {
    setMoodCheck(true);
  };

  const modalEl = useRef(null);

  const toggleModal = () => {
    modalEl.current.classList.toggle("show-modal");
    console.log("hi");
  };

  return (
    <div className="App">
      <div className="modal" ref={modalEl}>
        <div className="modal-content">
          <span className="close" onClick={toggleModal}>
            &times;
          </span>
          <h1>Hello</h1>
        </div>
      </div>

      <div className="main-wrapper">
        <button onClick={toggleModal}>Click me</button>
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
                  <h1>{name}</h1>
                </div>
                {!moodCheck && (
                  <div className="status-row__mood" ref={moodEl}>
                    <p>How is your mood?</p>
                    <div className="moodlets">
                      <FontAwesomeIcon
                        icon={faSmile}
                        size="2x"
                        className="mood-icon mood-smile"
                        onClick={handleMoodSelect}
                      />
                      <FontAwesomeIcon
                        icon={faMehBlank}
                        size="2x"
                        className="mood-icon mood-meh"
                        onClick={handleMoodSelect}
                      />
                      <FontAwesomeIcon
                        icon={faFrown}
                        size="2x"
                        className="mood-icon mood-frown"
                        onClick={handleMoodSelect}
                      />
                    </div>
                  </div>
                )}
                <Stats
                  time={time}
                  weatherCode={weather.icon}
                  weather={weather.weather}
                  temp={weather.temp}
                />
              </div>
              <BookmarkTiles bookmarks={grid} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
