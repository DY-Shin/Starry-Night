package com.gog.starrynight.domain.celestial_weather.service;

import com.gog.starrynight.domain.celestial_weather.dto.HeatMap;
import com.gog.starrynight.domain.celestial_weather.dto.HeatMapRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.geo.*;
import org.springframework.data.redis.connection.RedisGeoCommands;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.domain.geo.GeoReference;
import org.springframework.data.redis.domain.geo.GeoShape;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CelestialWeatherService {

    private final RedisTemplate<String, String> redisTemplate;

//    기준 좌표로 부터 반경 내의 천체기상도 데이터를 조회한다.
    public List<HeatMap> getHeatMap(HeatMapRequest heatMapRequestTest) {
        int scale = 5;
        switch (heatMapRequestTest.getZoom()) {
            case 15: scale = 0; break;
            case 14: case 13: scale = 1; break;
            case 12: scale = 2; break;
            case 11: scale = 3; break;
            case 10: scale = 4; break;
            case 8: case 9: scale = 5; break;
        }
        String key = "heat_map_scale_" + scale;

//        GeoSpatial 정보를 조회할 때 좌표값도 가져오게 하는 설정
        RedisGeoCommands.GeoSearchCommandArgs args = RedisGeoCommands.GeoSearchCommandArgs.newGeoSearchArgs()
                .includeCoordinates();

        double distance = getDistance(heatMapRequestTest.getBaseLat(), heatMapRequestTest.getBaseLng(), heatMapRequestTest.getNELat(), heatMapRequestTest.getNELng()) + 1;
//        redis GEOSEARCH 수행
        GeoResults<RedisGeoCommands.GeoLocation<String>> geoResults = redisTemplate.opsForGeo().search(
                key,
                GeoReference.fromCoordinate(heatMapRequestTest.getBaseLng(), heatMapRequestTest.getBaseLat()),
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
        // 히트맵 보정용 값
        HeatMap minValue = new HeatMap(36.730402, 129.839530, 2.5);
        HeatMap maxValue = new HeatMap(36.742953, 129.835720, 6.0);
        heatMaps.add(minValue);
        heatMaps.add(maxValue);

        System.out.println("HeatMap SIZE : "+ size);

        return heatMaps;
    }

    public static double getDistance(double lat1, double lon1, double lat2, double lon2) {
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);

        double a = Math.sin(dLat/2)* Math.sin(dLat/2)+ Math.cos(Math.toRadians(lat1))* Math.cos(Math.toRadians(lat2))* Math.sin(dLon/2)* Math.sin(dLon/2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return 6371 * c * 1000;
    }
}
