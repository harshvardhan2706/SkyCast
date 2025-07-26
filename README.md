
# SkyCast

SkyCast is a full-stack weather dashboard that displays real-time weather and 5-day forecasts for any city, powered by OpenWeatherMap and Spring Boot backend.

## Features
- Search weather and forecast for any city
- Responsive, modern UI (React)
- Backend API (Spring Boot) fetches and combines current and forecast data
- CORS enabled for local development

## Project Structure

- `frontend/` — React app (UI)
- `WeatherApp/` — Spring Boot backend (API)

## Getting Started

### 1. Backend (Spring Boot)

1. Go to `WeatherApp/`
2. Build and run:
   - Windows: `mvn spring-boot:run`
   - Backend runs on `http://localhost:8080`
3. API endpoint: `GET /api/weather?city=CityName`

### 2. Frontend (React)

1. Go to `frontend/`
2. Install dependencies: `npm install`
3. Start app: `npm start`
   - Frontend runs on `http://localhost:3000`

## Usage

1. Enter a city name and click "Search"
2. View current weather and 5-day forecast

## API Key

OpenWeatherMap API key is set in both frontend and backend. You can change it in:
- `frontend/src/App.js`
- `WeatherApp/src/main/java/com/harshweather/service/WeatherService.java`

## Troubleshooting

- If you see CORS errors, make sure backend is running and endpoint is `/api/weather`.
- If forecast cards repeat, only one card per day is shown (filtered by 12:00 PM in frontend).

## License

MIT
