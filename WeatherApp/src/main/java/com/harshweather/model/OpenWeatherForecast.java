package com.harshweather.model;

import java.util.List;

public class OpenWeatherForecast {
    private List<ForecastEntry> list;

    public List<ForecastEntry> getList() { return list; }
    public void setList(List<ForecastEntry> list) { this.list = list; }
}
