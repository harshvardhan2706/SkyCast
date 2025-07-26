package com.harshweather.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.harshweather.model.WeatherResponse;

@Service
public class WeatherService {
    private final String apiKey = "0ad3ba4ac3a12542c36f0a9bcb62ffaa";

    public WeatherResponse getWeatherData(String city){
        RestTemplate restTemplate = new RestTemplate();

        //current weather API
        String currentUrl = UriComponentsBuilder.fromHttpUrl("https://api.openweathermap.org/data/2.5/weather")
                .queryParam("q", city)
                .queryParam("appid", apiKey)
                .queryParam("units", "metric")
                .toUriString();

        //5 Days Forecast API
        String forecastUrl = UriComponentsBuilder.fromHttpUrl("https://api.openweathermap.org/data/2.5/forecast")
                .queryParam("q", city)
                .queryParam("appid", apiKey)
                .queryParam("units", "metric")
                .toUriString();

        //we'll define these POJOs(JSON-to-Java objects) later
        com.harshweather.model.OpenWeatherCurrent current = restTemplate.getForObject(currentUrl, com.harshweather.model.OpenWeatherCurrent.class);
        com.harshweather.model.OpenWeatherForecast forecast = restTemplate.getForObject(forecastUrl, com.harshweather.model.OpenWeatherForecast.class);

        //Now we combine both responses into a single WeatherResponse object
        WeatherResponse weatherResponse = new WeatherResponse();
        weatherResponse.setCity(city);
        weatherResponse.setTemperature(current.getMain().getTemp());
        weatherResponse.setDescription(current.getWeather().get(0).getDescription());
        weatherResponse.setIcon(current.getWeather().get(0).getIcon());
        weatherResponse.setForecast(forecast.getList());

        return weatherResponse;

    }
}
