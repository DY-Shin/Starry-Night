/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import * as InfoPageStyle from './InfoPage_Style';
import HumidityComponent from '../../Components/Info/HumidityComponent';
import * as InfoAPI from '../../../Action/Modules/NaverMap/Info';
import SkyComponent from '../../Components/Info/SkyComponent';
import TemperatureComponent from '../../Components/Info/TemperatureCompoenet';

type propsType = {
  clickLocation: naver.maps.Coord | null;
};

function InfoPage(props: propsType) {
  const { clickLocation } = props;
  const [infoData, setInfoData] = useState<null | InfoAPI.infoDataType>(null);

  async function updateData() {
    if (clickLocation) {
      const result = await InfoAPI.GetInfoData(clickLocation.y, clickLocation.x);
      setInfoData(result);
    }
  }

  useEffect(() => {
    if (clickLocation) {
      updateData();
    } else {
      setInfoData(null);
    }
  }, [clickLocation]);
  /*
  지도 클릭하지 않았을시 즉, MapArea.tsx에서 clickLocation 가 null일 때 화면 아무것도 안보여주고, 지도를 클릭해서 마커가 생겼고 clickLocation값이 null이 아니면
  비동기 통신으로 데이터 불러서 표시하기
  */
  return (
    <InfoPageStyle.InfoWrapper>
      {infoData ? (
        <React.Fragment key={clickLocation?.x.toString()}>
          <InfoPageStyle.InfoHeader>&nbsp;&nbsp;&nbsp;습도</InfoPageStyle.InfoHeader>
          <InfoPageStyle.InfoHeaderLine />
          <HumidityComponent humidity={infoData?.humidity} />
          <InfoPageStyle.InfoHeader>&nbsp;&nbsp;&nbsp;날씨</InfoPageStyle.InfoHeader>
          <InfoPageStyle.InfoHeaderLine />
          <SkyComponent sky={infoData?.sky} />
          <InfoPageStyle.InfoHeader>&nbsp;&nbsp;&nbsp;온도</InfoPageStyle.InfoHeader>
          <InfoPageStyle.InfoHeaderLine />
          <TemperatureComponent temperature={infoData?.temperature} />
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
          <p>t</p>
        </React.Fragment>
      ) : null}
    </InfoPageStyle.InfoWrapper>
  );
}

export default InfoPage;
