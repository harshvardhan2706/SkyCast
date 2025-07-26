package com.harshweather.model;

public class ForecastEntry {
    private Main main;
    private String dt_txt; // date/time
    private java.util.List<OpenWeatherCurrent.Weather> weather;

    public Main getMain() { return main; }
    public void setMain(Main main) { this.main = main; }

    public String getDt_txt() { return dt_txt; }
    public void setDt_txt(String dt_txt) { this.dt_txt = dt_txt; }

    public java.util.List<OpenWeatherCurrent.Weather> getWeather() { return weather; }
    public void setWeather(java.util.List<OpenWeatherCurrent.Weather> weather) {
        this.weather = weather;
    }

    public static class Main {
        private double temp;
        public double getTemp() { return temp; }
        public void setTemp(double temp) { this.temp = temp; }
    }
}
