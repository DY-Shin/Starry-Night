import React, { useEffect, useRef, useState } from 'react';
import useGeolocation from '../../../Action/Hooks/NaverMap/useGeolocation';
import MapOption from '../../Components/NaverMap/MapOption';
import NaverMap from '../../Components/NaverMap/NaverMap';
import * as MapAreaStyle from './MapArea_Style';
import SidBarArea from './SideBar/SideBarArea';

function MapArea() {
  const { naver } = window;
  const mapElement = useRef(null);
  const [elementIsLoading, setElementIsLoading] = useState(false);
  const [centerLocation, setCenterLocation] = useState(
    new naver.maps.LatLng(useGeolocation().coordinates.lat, useGeolocation().coordinates.lng),
  );
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  // eslint-disable-next-line no-undef
  const mapData = useRef<null | naver.maps.Map>(null);
  const initMap = () => {
    if (!mapElement.current || !naver) return;
    if (!naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = centerLocation;
    const map = new naver.maps.Map(mapElement.current, {
      center: location,
      zoom: 15,
      minZoom: 8,
      maxZoom: 15,
      tileSpare: 5,
      logoControl: true,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_RIGHT,
      },
      mapDataControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.RIGHT_CENTER,
        style: naver.maps.ZoomControlStyle.LARGE,
        legendDisabled: true,
      },
      scaleControlOptions: {
        position: naver.maps.Position.BOTTOM_RIGHT,
      },
    });
    mapData.current = map;
    naver.maps.Event.addListener(map, 'dragend zoom_changed', () => {
      setCenterLocation(new naver.maps.LatLng(map.getCenter().x, map.getCenter().y));
    });
  };

  useEffect(() => {
    initMap();
    if (mapData.current) setElementIsLoading(true);
  }, []);

  useEffect(() => {
    if (isBoardOpen) {
      // if (!mapData.current) return;
      // mapData.controls[naver.maps.Position.BOTTOM_CENTER].push();
    }
  }, [isBoardOpen]);

  return (
    <MapAreaStyle.MapContainer>
      <SidBarArea setIsBoardOpen={setIsBoardOpen} />
      <NaverMap ref={mapElement} />
      {elementIsLoading ? <MapOption map={mapData.current} centerLocation={centerLocation} /> : null}
    </MapAreaStyle.MapContainer>
  );
}

export default MapArea;
