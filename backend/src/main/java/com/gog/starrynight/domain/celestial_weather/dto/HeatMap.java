package com.gog.starrynight.domain.celestial_weather.dto;

import lombok.Data;

@Data
public class HeatMap {
    private double lat;
    private double lng;
    private double weight;

    public HeatMap(double lat, double lng, double weight) {
        this.lat = lat;
        this.lng = lng;
        this.weight = weight;
    }

}
