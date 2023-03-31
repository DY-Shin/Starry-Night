package com.gog.starrynight.domain.celestial_weather.entity;

import lombok.Data;

@Data
public class Weather {
    private int x;
    private int y;
    private int no;
    private int weatherBaseTime;
    private String sky;
    private int humidity;
    private String temperature;
    private String fineDust;
    private String ultraFineDust;
}
