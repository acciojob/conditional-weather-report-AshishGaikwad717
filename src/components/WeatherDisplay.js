import React from "react";

const WeatherDisplay = ({ weather }) => {
  const temperatureColor = weather.temperature > 20 ? "red" : "blue";

  return (
    <div className="weather-container">
      <h2>Current Weather</h2>
      <p style={{ color: temperatureColor, fontSize: "24px" }}>
        Temperature: {weather.temperature}°C
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;