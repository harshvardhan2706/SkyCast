package com.harshweather.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.harshweather.service.WeatherService;
import com.harshweather.model.WeatherResponse;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") //allows requests from any origin
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping("/weather")
    public WeatherResponse getWeather(@RequestParam String city) {
        return weatherService.getWeatherData(city);
    }
}
