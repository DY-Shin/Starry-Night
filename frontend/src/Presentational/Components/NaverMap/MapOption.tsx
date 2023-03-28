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

  const changeActive = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log(e.currentTarget.classList.contains('dropdownWrapper'));
    if (e.currentTarget.classList.contains('dropdownWrapper')) {
      e.currentTarget.classList.toggle('active');
    } else {
      e.currentTarget.classList.toggle('active');
    }
  };

  const changeHeatMap = () => {
    setHeatMapState(!heatMapState);
  };

  useEffect(() => {
    if (heatMapState) {
      if (heatMapObject) {
        HeatMapAPI.TurnOffHeatMap(heatMapObject);
      }
      setHeatMapObject(HeatMapAPI.TurnOnHeatMap(map));
    } else {
      HeatMapAPI.TurnOffHeatMap(heatMapObject);
      setHeatMapObject(null);
    }
  }, [heatMapState, centerLocation]);

  return (
    <OptionStyle.DropDownWrapper onClick={changeActive} className="dropdownWrapper">
      {/* <OptionStyle.DropDownHeader>옵션</OptionStyle.DropDownHeader> */}
      <OptionStyle.IconWrapper className="tempDiv">
        <GoSettings size={20} className="icon" />
      </OptionStyle.IconWrapper>
      {/* <hr style={{ margin: '0' }} /> */}
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
