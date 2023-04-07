package com.gog.starrynight.domain.celestial_weather.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gog.starrynight.domain.celestial_weather.dto.CelestialWeatherInfo;
import com.gog.starrynight.domain.celestial_weather.dto.CelestialWeatherRequest;
import com.gog.starrynight.domain.celestial_weather.dto.HeatMap;
import com.gog.starrynight.domain.celestial_weather.dto.HeatMapRequest;
import com.gog.starrynight.domain.celestial_weather.entity.Weather;
import com.gog.starrynight.domain.constellation.dto.ConstellationSimpleInfo;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import com.gog.starrynight.domain.constellation.repository.ConstellationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.cache.CacheProperties;
import org.springframework.data.geo.*;
import org.springframework.data.redis.connection.RedisGeoCommands;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.domain.geo.GeoReference;
import org.springframework.data.redis.domain.geo.GeoShape;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CelestialWeatherService {

    private final RedisTemplate<String, String> redisTemplate;
    private final ConstellationRepository constellationRepository;

//    기준 좌표로 부터 반경 내의 천체기상도 데이터를 조회한다.
    public List<HeatMap> getHeatMap(HeatMapRequest req) {
        int scale = 5;
        switch (req.getZoom()) {
            case 15: scale = 0; break;
            case 14: scale = 1; break;
            case 13: case 12: scale = 2; break;
            case 11: scale = 3; break;
            case 10: scale = 4; break;
            case 8: case 9: scale = 5; break;
        }
        String key = "heat_map_scale_" + scale;

//        GeoSpatial 정보를 조회할 때 좌표값도 가져오게 하는 설정
        RedisGeoCommands.GeoSearchCommandArgs args = RedisGeoCommands.GeoSearchCommandArgs.newGeoSearchArgs()
                .includeCoordinates();

        double distance = getDistance(req.getBaseLat(), req.getBaseLng(), req.getNELat(), req.getNELng()) + 1;
//        redis GEOSEARCH 수행
        GeoResults<RedisGeoCommands.GeoLocation<String>> geoResults = redisTemplate.opsForGeo().search(
                key,
                GeoReference.fromCoordinate(req.getBaseLng(), req.getBaseLat()),
                GeoShape.byRadius(new Distance(distance)),
                args
        );

        List<HeatMap> heatMaps = new ArrayList<>();
        int size = 0;
        for (GeoResult<RedisGeoCommands.GeoLocation<String>> geoResult : geoResults) {
            double lat = geoResult.getContent().getPoint().getY();
            double lng = geoResult.getContent().getPoint().getX();
            double weight = Double.parseDouble(geoResult.getContent().getName().split(":")[0]);
            HeatMap hm = new HeatMap(lat, lng, weight);
            // 유니크 Value 제거 후 관측값만 추출
            size++;
            heatMaps.add(hm);
        }

        System.out.println("HeatMap SIZE : "+ size);

        return heatMaps;
    }

    public CelestialWeatherInfo getCelestialWeather(CelestialWeatherRequest req) throws JsonProcessingException {
        RedisGeoCommands.GeoRadiusCommandArgs args = RedisGeoCommands.GeoRadiusCommandArgs.newGeoRadiusArgs()
                .includeCoordinates()
                .sortAscending()
                .limit(1);

        GeoResults<RedisGeoCommands.GeoLocation<String>> geoResults = redisTemplate.opsForGeo().radius(
                "magnitude",
                new Circle(req.getLng(), req.getLat(), 300),
                args
        );
        // 현재 지점에서 관측 가능한 최소 별 등급
        double mag = Double.parseDouble(geoResults.getContent().get(0).getContent().getName().split(":")[0]);
        // 현재 지점에의 날씨 구역 좌표 획득
        String weatherKey = getXYKey(req.getLat(), req.getLng());
        String weatherResult = (String) redisTemplate.opsForHash().get("weather", weatherKey);
        // 해당 지점 날씨 읽기
        ObjectMapper objectMapper = new ObjectMapper();
        Weather weather = objectMapper.readValue(weatherResult, Weather.class);

        // 별자리 정보 획득
        List<Constellation> constellations = constellationRepository.findByMagLessThan(mag);
        List<ConstellationSimpleInfo> constellationSimpleInfos = constellations.stream()
                .map(ConstellationSimpleInfo::new)
                .collect(Collectors.toList());
        CelestialWeatherInfo celestialWeatherInfo = new CelestialWeatherInfo(mag, weather, constellationSimpleInfos);
        System.out.println(celestialWeatherInfo);
        return celestialWeatherInfo;
    }

    private double getDistance(double lat1, double lon1, double lat2, double lon2) {
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);

        double a = Math.sin(dLat/2)* Math.sin(dLat/2)+ Math.cos(Math.toRadians(lat1))* Math.cos(Math.toRadians(lat2))* Math.sin(dLon/2)* Math.sin(dLon/2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return 6371 * c * 1000;
    }

    private String getXYKey(double lat, double lng) {
        double RE = 6371.00877; // 지구 반경(km)
        double GRID = 5.0; // 격자 간격(km)
        double SLAT1 = 30.0; // 투영 위도1(degree)
        double SLAT2 = 60.0; // 투영 위도2(degree)
        double OLON = 126.0; // 기준점 경도(degree)
        double OLAT = 38.0; // 기준점 위도(degree)
        double XO = 43; // 기준점 X좌표(GRID)
        double YO = 136; // 기1준점 Y좌표(GRID)
        //
        // LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
        //
        double DEGRAD = Math.PI / 180.0;

        double re = RE / GRID;
        double slat1 = SLAT1 * DEGRAD;
        double slat2 = SLAT2 * DEGRAD;
        double olon = OLON * DEGRAD;
        double olat = OLAT * DEGRAD;

        double sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
        sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
        double sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
        sf = Math.pow(sf, sn) * Math.cos(slat1) / sn;
        double ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
        ro = re * sf / Math.pow(ro, sn);
        double ra = Math.tan(Math.PI * 0.25 + (lat) * DEGRAD * 0.5);
        ra = re * sf / Math.pow(ra, sn);
        double theta = lng * DEGRAD - olon;
        if (theta > Math.PI) theta -= 2.0 * Math.PI;
        if (theta < -Math.PI) theta += 2.0 * Math.PI;
        theta *= sn;

        int x = (int) Math.floor(ra * Math.sin(theta) + XO + 0.5);
        int y = (int) Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
        return x + ":" + y;
    }
}
