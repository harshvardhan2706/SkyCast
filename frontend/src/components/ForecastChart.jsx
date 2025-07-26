import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "./../styles/style.css";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ForecastChart = ({ forecastData }) => {
  if (!forecastData || forecastData.length === 0) return null;

  const labels = forecastData.map(day => day.date);
  const minTemps = forecastData.map(day => day.min);
  const maxTemps = forecastData.map(day => day.max);

  const data = {
    labels,
    datasets: [
      {
        label: "Min Temp (°C)",
        data: minTemps,
        fill: false,
        borderColor: "#00bcd4",
        backgroundColor: "#00bcd4",
        tension: 0.4,
      },
      {
        label: "Max Temp (°C)",
        data: maxTemps,
        fill: false,
        borderColor: "#ff9800",
        backgroundColor: "#ff9800",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#fff" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <div className="container mt-4 mb-4 chart-container glass-card">
      <h4 className="text-white text-center mb-3">5-Day Forecast</h4>
      <Line data={data} options={options} />
    </div>
  );
};

export default ForecastChart;
