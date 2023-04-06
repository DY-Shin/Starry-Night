import React, { useEffect, useState } from 'react';
// import useLoadScript from '../../../Action/Hooks/useLoadScript';
import * as MapStyle from './NaverMapPage_Style';

import MapArea from '../../Layout/NaverMap/MapArea';
import useLoadScript from '../../../Action/Hooks/useLoadScript';
import LoadingPage from '../LoadingPage';

function NaverMapPage() {
  const API_KEY = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}&submodules=visualization`;
  const [scriptLoadingState] = useLoadScript(API_KEY);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (scriptLoadingState !== 'l' && scriptLoadingState !== 'e') {
      setTimeout(() => {
        setShowMap(true);
      }, 1500);
    }
  }, [scriptLoadingState]);

  return <MapStyle.NaverMapContainer>{showMap ? <MapArea /> : <LoadingPage />}</MapStyle.NaverMapContainer>;
}

export default NaverMapPage;
