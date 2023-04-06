package com.gog.starrynight.domain.celestial_weather.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class HeatMap {
    private double lat;
    private double lng;
    private double weight;
}
