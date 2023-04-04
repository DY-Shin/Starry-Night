/* eslint-disable no-undef */
import React from 'react';
import * as InfoPageStyle from './InfoPage_Style';
import HumidityComponent from '../../Components/Info/HumidityComponent';

type propsType = {
  clickLocation: naver.maps.Coord | null;
};

function InfoPage(props: propsType) {
  const { clickLocation } = props;
  /*
  지도 클릭하지 않았을시 즉, MapArea.tsx에서 clickLocation 가 null일 때 화면 아무것도 안보여주고, 지도를 클릭해서 마커가 생겼고 clickLocation값이 null이 아니면
  비동기 통신으로 데이터 불러서 표시하기
  */
  return (
    <InfoPageStyle.InfoWrapper>
      {clickLocation ? (
        <>
          <InfoPageStyle.InfoHeader>&nbsp;&nbsp;&nbsp;습도</InfoPageStyle.InfoHeader>
          <InfoPageStyle.InfoHeaderLine />
          <HumidityComponent />
        </>
      ) : null}
    </InfoPageStyle.InfoWrapper>
  );
}

export default InfoPage;
