package com.gog.starrynight.domain.celestial_weather.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.celestial_weather.dto.CelestialWeatherInfo;
import com.gog.starrynight.domain.celestial_weather.dto.CelestialWeatherRequest;
import com.gog.starrynight.domain.celestial_weather.dto.HeatMap;
import com.gog.starrynight.domain.celestial_weather.dto.HeatMapRequest;
import com.gog.starrynight.domain.celestial_weather.service.CelestialWeatherService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Tag(name = "천체기상도")
public class CelestialWeatherController {

    private final CelestialWeatherService celestialWeatherService;

    @Operation(summary = "천체기상도 히트맵 조회")
    @GetMapping("/heatmaps")
    public ResponseEntity<ApiResponse> getHeatMap(HeatMapRequest dto) {
        List<HeatMap> heatMaps = celestialWeatherService.getHeatMap(dto);
        ApiResponse result = new ApiResponse(true, "천체기상도 히트맵 조회 성공", heatMaps);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Operation(summary = "천체기상도 조회")
    @GetMapping("/celestial-weather")
    public ResponseEntity<ApiResponse<CelestialWeatherInfo>> getCelestialWeather(CelestialWeatherRequest dto) throws JsonProcessingException {
        CelestialWeatherInfo celestialWeatherInfo = celestialWeatherService.getCelestialWeather(dto);
        ApiResponse<CelestialWeatherInfo> result = new ApiResponse(true, "천체기상도 조회 성공", celestialWeatherInfo);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}