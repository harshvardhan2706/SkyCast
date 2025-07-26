package com.harshweather.model;

import java.util.List;

public class OpenWeatherCurrent {
    private Main main;
    private List<Weather> weather;

    public Main getMain() {return main;}
    public void setMain(Main main){this.main = main;}

    public List<Weather> getWeather() { return weather; }
    public void setWeather(List<Weather> weather) { this.weather = weather; }

    public static class Main{
        private double temp;
        public double getTemp(){return temp;}
        public void setTemp(double temp){this.temp = temp;}
    }

    public  static class Weather{
        private String description;
        private String icon;
        public String getDescription(){return description;}
        public void setDescription(String description){this.description = description;}

        public String getIcon(){return icon;}
        public void setIcon(String icon){this.icon=icon;}
    }
}
