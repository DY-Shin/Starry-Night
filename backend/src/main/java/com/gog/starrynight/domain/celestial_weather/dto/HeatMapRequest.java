package com.gog.starrynight.domain.celestial_weather.dto;

import lombok.Data;

@Data
public class HeatMapRequest {
    private double baseLat;
    private double baseLng;
    private double NELat;
    private double NELng;
    private int zoom;
}
