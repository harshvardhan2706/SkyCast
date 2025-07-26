package com.harshweather.model;

import java.util.List;

public class WeatherResponse {
    private String city;
    private double temperature;
    private String description;
    private String icon;
    private List<ForecastEntry> forecast;
    
    //Getter & Setters
    // Getters & Setters
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public double getTemperature() { return temperature; }
    public void setTemperature(double temperature) { this.temperature = temperature; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public List<ForecastEntry> getForecast() { return forecast; }
    public void setForecast(List<ForecastEntry> forecast) { this.forecast = forecast; }
}
