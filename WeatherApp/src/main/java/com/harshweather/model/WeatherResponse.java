package com.harshweather.model;

import java.util.List;

public class WeatherResponse {
    private String city;
    private double temperature;
    private String description;
    private String icon;
    private int humidity;
    private double wind;
    private List<ForecastEntry> forecast;
    
    //Getter & Setters
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public double getTemperature() { return temperature; }
    public void setTemperature(double temperature) { this.temperature = temperature; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public int getHumidity() { return humidity; }
    public void setHumidity(int humidity) { this.humidity = humidity; }

    public double getWind() { return wind; }
    public void setWind(double wind) { this.wind = wind; }

    public List<ForecastEntry> getForecast() { return forecast; }
    public void setForecast(List<ForecastEntry> forecast) { this.forecast = forecast; }
}
