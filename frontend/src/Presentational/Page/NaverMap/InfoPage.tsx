/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from 'react';
import * as InfoPageStyle from './InfoPage_Style';
import HumidityComponent from '../../Components/Info/HumidityComponent';
import * as InfoAPI from '../../../Action/Modules/NaverMap/Info';
import SkyComponent from '../../Components/Info/SkyComponent';
import TemperatureComponent from '../../Components/Info/TemperatureCompoenet';
import FineDustComponent from '../../Components/Info/FineDustCompoenet';
import ConstellationListComponent from '../../Components/Info/ConstellationListComponent';

/**
 * 상위 컴포넌트에서 전달받은 props 타입 설정
 */
type PropsType = {
  clickLocation: naver.maps.Coord | null;
};

function InfoPage(props: PropsType) {
  /*
   * clickLocation : 상위에서 전달받은 좌표 객체(지도에서 클릭한 지점 위/경도 좌표)
   */
  const { clickLocation } = props;

  /*
   * 비동기 통신으로 받은 데이터를 저장하는 State
   */
  const [infoData, setInfoData] = useState<null | InfoAPI.infoDataType>(null);

  /*
   * moveRef : 참조할 HTMLDivElement, 데이터가 바뀔 때 moveRef 엘리먼트로 스크롤을 이동 시키기 위한 참조 객체
   */
  const moveRef = useRef<null | HTMLDivElement>(null);

  /**
   * HTMLDivElement를 참조하고 있는 객체로 스크롤을 이동시키는 함수
   */
  const moveTop = () => {
    moveRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  /**
   * 비동기 통신을 통해 받은 결과값을 infoData State에 갱신하는 함수
   */
  async function updateData() {
    if (clickLocation) {
      const result = await InfoAPI.GetInfoData(clickLocation.y, clickLocation.x);
      setInfoData(result);
    }
  }

  /*
   * clickLocation값 변경 감지될 때 마다 실행
   */
  useEffect(() => {
    if (clickLocation) {
      updateData();
    } else {
      setInfoData(null);
    }
  }, [clickLocation]);

  /*
   * infoData값 변경 감지될 때 마다 실행
   */
  useEffect(() => {
    moveTop();
  }, [infoData]);

  return (
    <InfoPageStyle.InfoWrapper>
      {infoData ? (
        <React.Fragment key={clickLocation?.x.toString()}>
          <InfoPageStyle.InfoHeader ref={moveRef}>습도</InfoPageStyle.InfoHeader>
          <HumidityComponent humidity={infoData?.humidity} />

          <InfoPageStyle.InfoHeader>날씨</InfoPageStyle.InfoHeader>
          <SkyComponent sky={infoData?.sky} />

          <InfoPageStyle.InfoHeader>온도</InfoPageStyle.InfoHeader>
          <TemperatureComponent temperature={infoData?.temperature} />

          <InfoPageStyle.InfoHeader className="fineDust">미세 먼지</InfoPageStyle.InfoHeader>
          <FineDustComponent fineDust={infoData?.fineDust} />

          <InfoPageStyle.InfoHeader>관측 가능 별자리 목록</InfoPageStyle.InfoHeader>
          <ConstellationListComponent constellations={infoData?.constellations} />
        </React.Fragment>
      ) : null}
    </InfoPageStyle.InfoWrapper>
  );
}

export default InfoPage;
