import React from 'react';
// import useLoadScript from '../../../Action/Hooks/useLoadScript';
import * as MapStyle from './NaverMapPage_Style';

import MapArea from '../../Layout/NaverMap/MapArea';

function NaverMapPage() {
  // const API_KEY = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID';
  // const API_KEY = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`;
  // const [scriptLoadingState] = useLoadScript(API_KEY);

  // if (scriptLoadingState === 'l') return <MapStyle.HeadOne>로딩페이지 띄우기</MapStyle.HeadOne>;
  // if (scriptLoadingState === 'e') return <MapStyle.HeadOne>에러페이지 띄우기</MapStyle.HeadOne>;

  return (
    <MapStyle.NaverMapContainer>
      <MapArea />
    </MapStyle.NaverMapContainer>
  );
}

export default NaverMapPage;
