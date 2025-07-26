import logo from './logo.svg';
import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import WeatherCard from './components/WeatherCard.jsx';
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

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setWeather(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error(err);
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

      {weather && weather.main && (
        <div className="weather-card">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
          <h3>{Math.round(weather.main.temp)}°C</h3>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;