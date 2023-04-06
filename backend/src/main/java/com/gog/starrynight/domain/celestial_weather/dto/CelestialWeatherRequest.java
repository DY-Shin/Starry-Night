package com.gog.starrynight.domain.celestial_weather.dto;

import lombok.Data;

@Data
public class CelestialWeatherRequest {
    private double lat;
    private double lng;
}
