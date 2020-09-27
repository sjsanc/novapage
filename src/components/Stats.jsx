import React from "react";

export default function Stats({ weatherCode, time, weather, temp }) {
  const icon = `http://openweathermap.org/img/wn/${weatherCode}@2x.png`;

  return (
    <div className="status-row__data">
      {weather ? (
        <>
          <img src={icon} className="weather-icon"></img>
          <h3>{weather + " " + temp}</h3>
          <h2>{time}</h2>
        </>
      ) : (
        <p className="status-row__data--loading">Getting weather...</p>
      )}
    </div>
  );
}
