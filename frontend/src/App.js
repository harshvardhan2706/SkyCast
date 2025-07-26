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
  const [forecast, setForecast] = useState([]);

  const fetchForecast = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("Forecast API error");
      const data = await res.json();
      // Filter one forecast per day (around 12:00 PM)
      const daily = data.list.filter(f => f.dt_txt.includes("12:00:00"));
      setForecast(daily);
    } catch (err) {
      console.error("Forecast error:", err.message);
    }
  };

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
      await fetchForecast(query);
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

      {forecast.length > 0 && (
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
      )}
    </div>
  );
}

export default App;