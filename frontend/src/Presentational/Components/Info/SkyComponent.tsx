import React from 'react';
import { BsSun, BsCloudRain, BsCloudSun, BsClouds } from 'react-icons/bs';
import * as SkyStyle from './SkyComponent_Style';

function SkyComponent(props: { sky: string }) {
  const { sky } = props;

  let weather;

  if (sky === '맑음') {
    weather = <BsSun className="icon" color="#ffbe32" />;
  } else if (sky === '구름많음') {
    weather = <BsCloudSun className="icon" color="#adacac" />;
  } else if (sky === '흐림') {
    weather = <BsClouds className="icon" color="#7e7a7a" />;
  } else {
    weather = <BsCloudRain className="icon" color="#7e7a7a" />;
  }

  return (
    <SkyStyle.SkyWrapper>
      {weather}
      <SkyStyle.SkyText>{sky}</SkyStyle.SkyText>
    </SkyStyle.SkyWrapper>
  );
}

export default SkyComponent;
