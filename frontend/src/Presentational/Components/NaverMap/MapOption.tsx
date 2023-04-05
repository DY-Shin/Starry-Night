import React, { MouseEvent, useEffect, useState } from 'react';
import { GoSettings, GoTelescope } from 'react-icons/go';
import { BsPinMapFill } from 'react-icons/bs';
import * as OptionStyle from './MapOption_Style';
import * as HeatMapAPI from '../../../Action/Modules/NaverMap/HeatMap';

type propsType = {
  // eslint-disable-next-line no-undef
  map: naver.maps.Map | null;
  // eslint-disable-next-line no-undef
  centerLocation: naver.maps.LatLng;
};

function MapOption(props: propsType) {
  const { map, centerLocation } = props;
  const [heatMapState, setHeatMapState] = useState(false);
  // eslint-disable-next-line no-undef
  const [heatMapObject, setHeatMapObject] = useState<naver.maps.visualization.HeatMap | null>(null);
  const [loadingHeatMapState, setLoadingHeatMapState] = useState(false);

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

  async function updateHeatMapObject(): Promise<void> {
    await HeatMapAPI.TurnOffHeatMap(heatMapObject);
    const newHeatMapObject = await HeatMapAPI.TurnOnHeatMap(map);
    setHeatMapObject(newHeatMapObject);
    setLoadingHeatMapState(false);
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
  }, [heatMapState, centerLocation]);

  return (
    <OptionStyle.DropDownWrapper onClick={changeActive} className="dropdownWrapper active">
      <OptionStyle.IconWrapper className="tempDiv">
        <GoSettings size={20} className="icon" />
      </OptionStyle.IconWrapper>
      <OptionStyle.OptionDetailWrapper>
        <OptionStyle.OptionDetaileDiv
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            changeActive(e);
            changeHeatMap();
          }}
          className="detailDiv"
        >
          <OptionStyle.OptionDetailRound>
            <GoTelescope size={20} className="detailIcon" />
          </OptionStyle.OptionDetailRound>
          <OptionStyle.OptionDetailText>천체 관측</OptionStyle.OptionDetailText>
        </OptionStyle.OptionDetaileDiv>
        <OptionStyle.OptionDetaileDiv onClick={changeActive} className="detailDiv">
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
