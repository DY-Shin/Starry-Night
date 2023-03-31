package com.gog.starrynight.domain.celestial_weather.dto;

import com.gog.starrynight.domain.celestial_weather.entity.Weather;
import com.gog.starrynight.domain.constellation.dto.ConstellationSimpleInfo;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CelestialWeatherInfo {
    private double magnitudeLimit;
    private String sky;
    private int humidity;
    private String temperature;
    private String fineDust;
    private String ultraFineDust;
    private List<ConstellationSimpleInfo> constellations;

    public CelestialWeatherInfo(double magnitudeLimit, Weather weather, List<ConstellationSimpleInfo> constellations) {
        this.magnitudeLimit = magnitudeLimit;
        this.sky = weather.getSky();
        this.humidity = weather.getHumidity();
        this.temperature = weather.getTemperature();
        this.fineDust = weather.getFineDust();
        this.ultraFineDust = weather.getUltraFineDust();
        this.constellations = constellations;
    }
}
