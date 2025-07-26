import React from "react";
import "./../styles/style.css";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const {
    city,
    temperature,
    condition,
    iconUrl,
    windSpeed,
    humidity,
  } = weatherData;

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="weather-card glass-card text-white p-4">
        <h2 className="mb-3">{city}</h2>
        <div className="d-flex align-items-center">
          <img
            src={iconUrl}
            alt="Weather Icon"
            className="weather-icon me-3"
          />
          <div>
            <h1 className="display-4">{temperature}°C</h1>
            <h5>{condition}</h5>
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-1">💨 Wind: {windSpeed} km/h</p>
          <p>💧 Humidity: {humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
