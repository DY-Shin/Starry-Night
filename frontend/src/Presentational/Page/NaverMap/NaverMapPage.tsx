import React from 'react';
import useLoadScript from '../../../Action/Hooks/useLoadScript';
import * as MapStyle from './NaverMapPage_Style';

function NaverMapPage() {
  //   const API_KEY = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID';
  const API_KEY = 'https:';
  const [scriptLoadingState] = useLoadScript(API_KEY);
  console.log(scriptLoadingState);

  //   if (scriptLoadingError) return <MapStyle.HeadOne>에러발생!</MapStyle.HeadOne>;
  if (scriptLoadingState === 'e') return <MapStyle.HeadOne>에러</MapStyle.HeadOne>;

  return (
    <MapStyle.NaverMapContainer>
      <MapStyle.HeadOne>네이버 지도</MapStyle.HeadOne>
    </MapStyle.NaverMapContainer>
  );
}

export default NaverMapPage;
