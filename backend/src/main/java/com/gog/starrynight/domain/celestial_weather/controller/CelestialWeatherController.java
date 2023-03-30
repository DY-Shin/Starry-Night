package com.gog.starrynight.domain.celestial_weather.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.celestial_weather.dto.HeatMap;
import com.gog.starrynight.domain.celestial_weather.dto.HeatMapRequest;
import com.gog.starrynight.domain.celestial_weather.service.CelestialWeatherService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CelestialWeatherController {

    private final CelestialWeatherService celestialWeatherService;

    @GetMapping("/heatmaps")
    public ResponseEntity<ApiResponse> getHeatMap(HeatMapRequest dto) {
        List<HeatMap> heatMaps = celestialWeatherService.getHeatMap(dto);
        ApiResponse result = new ApiResponse(true, "천체기상도 조회 성공", heatMaps);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}