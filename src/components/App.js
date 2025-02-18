import React, { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Simulated weather data
    const newWeather = { temperature: 25, conditions: "Sunny" };
    setWeather(newWeather);
  }, []);

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
