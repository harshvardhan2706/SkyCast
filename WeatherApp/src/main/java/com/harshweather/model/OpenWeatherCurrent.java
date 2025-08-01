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
        private int humidity;
        private double speed;

        public double getTemp(){return temp;}
        public void setTemp(double temp){this.temp = temp;}

        public int getHumidity() { return humidity; }
        public void setHumidity(int humidity) { this.humidity = humidity; }

        public double getSpeed() { return speed; }
        public void setSpeed(double speed) { this.speed = speed; }
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
