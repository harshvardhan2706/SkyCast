
import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import Navbar from './components/Navbar.jsx';
import CurrentWeatherCard from './components/CurrentWeatherCard.jsx';
import ForecastChart from './components/ForecastChart.jsx';
import NewsFeed from './components/NewsFeed.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import "./styles/style.css";
import "./styles/background.css";
import './App.css';

const API_KEY = "0ad3ba4ac3a12542c36f0a9bcb62ffaa"; // 🔁 OPENWEATHER API

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState([]);


  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setWeather(null);
    setForecast([]);
    try {
      const response = await fetch(`https://skycast-backend-qnxm.onrender.com/api/weather?city=${encodeURIComponent(query)}`);
      const data = await response.json();
      setWeather({
        city: data.city,
        temperature: data.temperature,
        description: data.description,
        icon: data.icon,
        humidity: data.humidity,
        wind: data.wind
      });
      console.log("Weather data:", {
        city: data.city,
        temperature: data.temperature,
        description: data.description,
        icon: data.icon,
        humidity: data.humidity,
        wind: data.wind
      });
      // Filter one forecast per day (around 12:00 PM)
      const daily = (data.forecast || []).filter(f => f.dt_txt && f.dt_txt.includes("12:00:00"));
      setForecast(daily);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <div className="background-overlay"></div>

      <div className="search-container">
        <h1 className="title">SkyCast ☁️</h1>
        <input
          type="text"
          placeholder="Enter city name"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading && <p className="loading-text">Loading...</p>}

      <CurrentWeatherCard weather={weather} />

      {forecast.length > 0 ? (
        <div className="row mt-4 justify-content-center">
          {forecast.map((day, index) => (
            <div className="col-6 col-sm-4 col-md-2 mb-3" key={index}>
              <div className="card text-center shadow-sm p-2 rounded">
                <h6>{new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}</h6>
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                  style={{ width: "50px" }}
                />
                <p className="mb-0">{Math.round(day.main.temp)}°C</p>
                <small>{day.weather[0].main}</small>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="row mt-4 justify-content-center">
          <p className="text-center text-muted">No forecast available.</p>
        </div>
      )}
    </div>
  );
}

export default App;