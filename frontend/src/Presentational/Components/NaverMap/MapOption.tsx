/* eslint-disable no-undef */
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { GoSettings, GoTelescope } from 'react-icons/go';
import { BsPinMapFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import * as OptionStyle from './MapOption_Style';
import * as HeatMapAPI from '../../../Action/Modules/NaverMap/HeatMap';
import * as PhotoSpotAPI from '../../../Action/Modules/NaverMap/PhotoSpot';

type propsType = {
  map: naver.maps.Map | null;
  centerLocation: naver.maps.LatLng;
};

function MapOption(props: propsType) {
  const { map, centerLocation } = props;
  const [heatMapState, setHeatMapState] = useState(false);
  const [photoSpotState, setPhotoSpotState] = useState(false);
  const [heatMapObject, setHeatMapObject] = useState<naver.maps.visualization.HeatMap | null>(null);
  const [photoSpotObject, setPhotoSpotObject] = useState<naver.maps.visualization.DotMap | null>(null);
  const [loadingHeatMapState, setLoadingHeatMapState] = useState(false);
  const [loadingPhotoSpotState, setLoadingPhotoSoptState] = useState(false);

  const changeActive = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.currentTarget.classList.contains('dropdownWrapper')) {
      e.currentTarget.classList.toggle('active');
    } else {
      e.currentTarget.classList.toggle('active');
    }
  };

  const changeHeatMap = () => {
    setHeatMapState(!heatMapState);
  };

  const changePhotoSpot = () => {
    setPhotoSpotState(!photoSpotState);
  };

  async function updateHeatMapObject(): Promise<void> {
    await HeatMapAPI.TurnOffHeatMap(heatMapObject);
    const newHeatMapObject = await HeatMapAPI.TurnOnHeatMap(map);
    setHeatMapObject(newHeatMapObject);
    setLoadingHeatMapState(false);
  }

  async function updatePhotoSpotObject(): Promise<void> {
    if (map) {
      const pointA = new naver.maps.LatLng(map.getBounds().getMax().y, map.getBounds().getMax().x);
      const pointB = new naver.maps.LatLng(map.getBounds().getMin().y, map.getBounds().getMin().x);

      await PhotoSpotAPI.TurnOffPhotoSpot(photoSpotObject);
      const newPhotoSpotObject = await PhotoSpotAPI.TurnOnPhotoSpot(map, pointA, pointB);
      setPhotoSpotObject(newPhotoSpotObject);
      setLoadingPhotoSoptState(false);
    }
  }

  useEffect(() => {
    if (heatMapState) {
      if (!loadingHeatMapState) {
        setLoadingHeatMapState(true);
        updateHeatMapObject();
      }
    } else {
      HeatMapAPI.TurnOffHeatMap(heatMapObject);
      setHeatMapObject(null);
    }
    if (photoSpotState) {
      if (!loadingPhotoSpotState) {
        setPhotoSpotState(true);
        updatePhotoSpotObject();
      }
    } else {
      PhotoSpotAPI.TurnOffPhotoSpot(photoSpotObject);
      setPhotoSpotObject(null);
    }
  }, [heatMapState, photoSpotState, centerLocation]);

  return (
    <OptionStyle.DropDownWrapper onClick={changeActive} className="dropdownWrapper active">
      <OptionStyle.IconWrapper className="tempDiv">
        <GoSettings size={20} className="icon" />
      </OptionStyle.IconWrapper>
      <OptionStyle.OptionDetailWrapper>
        <OptionStyle.OptionDetaileDiv
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            if (loadingHeatMapState) {
              const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
              });

              Toast.fire({
                icon: 'warning',
                title: '지도 로딩이 끝난후 시도해 주세요!',
              });
            } else {
              changeActive(e);
              changeHeatMap();
            }
          }}
          className="detailDiv"
        >
          <OptionStyle.OptionDetailRound>
            <GoTelescope size={20} className="detailIcon" />
          </OptionStyle.OptionDetailRound>
          <OptionStyle.OptionDetailText>천체 관측</OptionStyle.OptionDetailText>
        </OptionStyle.OptionDetaileDiv>
        <OptionStyle.OptionDetaileDiv
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            if (loadingPhotoSpotState) {
              const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
              });

              Toast.fire({
                icon: 'warning',
                title: '지도 로딩이 끝난후 시도해 주세요!',
                timer: 1000,
              });
            } else {
              changeActive(e);
              changePhotoSpot();
            }
          }}
          className="detailDiv"
        >
          <OptionStyle.OptionDetailRound>
            <BsPinMapFill size={20} className="detailIcon" />
          </OptionStyle.OptionDetailRound>
          <OptionStyle.OptionDetailText>포토 스팟</OptionStyle.OptionDetailText>
        </OptionStyle.OptionDetaileDiv>
      </OptionStyle.OptionDetailWrapper>
    </OptionStyle.DropDownWrapper>
  );
}

export default MapOption;
