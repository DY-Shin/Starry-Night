import React from 'react';
import * as LoadingStyle from './LoadingPage_Style';
import Back from '../Common/Components/MainPage/Back';
import starrynightImage from '../../Assets/NaverMap/starrynight.png';

function LoadingPage() {
  return (
    <LoadingStyle.LoadingPageWrapper>
      <Back />
      {/* <LoadingStyle.LoadingText>Loading...</LoadingStyle.LoadingText> */}
      {/* <LoadingStyle.LoadingLogo link={starrynightImage} /> */}
      <LoadingStyle.LoadingLoader link={starrynightImage} />
    </LoadingStyle.LoadingPageWrapper>
  );
}

export default LoadingPage;
