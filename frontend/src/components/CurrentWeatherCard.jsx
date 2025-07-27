import React from "react";
import "./CurrentWeatherCard.css";

const CurrentWeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-glass-card">
      <div className="weather-icon">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
          alt={weather.description}
        />
      </div>
      <h2 className="weather-city">{weather.city}</h2>
      <div className="weather-temp">{weather.temperature !== undefined ? Math.round(weather.temperature) : '--'}°C</div>
      <div className="weather-condition">{weather.description || '--'}</div>
      <div className="weather-details">
        <span>Humidity: {weather.humidity !== undefined ? weather.humidity + '%' : '--'}</span>
        <span>Wind: {weather.wind !== undefined ? weather.wind + ' km/h' : '--'}</span>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
