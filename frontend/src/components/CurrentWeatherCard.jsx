import React from "react";
import "./CurrentWeatherCard.css";

const CurrentWeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-glass-card">
      <div className="weather-icon">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
          alt={weather.condition}
        />
      </div>
      <h2 className="weather-city">{weather.city}</h2>
      <div className="weather-temp">{Math.round(weather.temperature)}°C</div>
      <div className="weather-condition">{weather.condition}</div>
      <div className="weather-details">
        <span>Humidity: {weather.humidity}%</span>
        <span>Wind: {weather.wind} km/h</span>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
