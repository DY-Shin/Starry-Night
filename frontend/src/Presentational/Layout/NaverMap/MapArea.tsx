import React, { useEffect } from 'react';
// import NaverMap from '../../Components/NaverMap/NaverMap';
import * as MapAreaStyle from './MapArea_Style';

function MapArea() {
  // const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    // if (!mapElement.current || !naver) return;
    if (!naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5656, 126.9769);
    const map = new naver.maps.Map('map', {
      center: location,
      zoom: 17,
      tileSpare: 5,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    });
    map.zoomBy(1);
  }, []);

  return (
    <MapAreaStyle.MapContainer>
      {/* <NaverMap ref={mapElement} /> */}
      <div id="map" style={{ height: '100%' }} />
    </MapAreaStyle.MapContainer>
  );
}

export default MapArea;
