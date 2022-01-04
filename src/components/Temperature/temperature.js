import React from "react";

import "./temperature.scss";

function Temperature({ weather }) {
  return (
    <div className="weather-box">
      <div className="temperature">{Math.round(weather.main.temp)}°C</div>
      <div className="weather-state">{weather.weather[0].main}</div>
    </div>
  );
}

export default Temperature;
