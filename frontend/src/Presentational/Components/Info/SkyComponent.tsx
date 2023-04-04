import React from 'react';
import { BsSun, BsCloudRain, BsCloudSun, BsClouds } from 'react-icons/bs';
import * as SkyStyle from './SkyComponent_Style';

function SkyComponent(props: { sky: string }) {
  const { sky } = props;

  let weather;

  if (sky === '맑음') {
    weather = <BsSun className="icon" />;
  } else if (sky === '구름많음') {
    weather = <BsCloudSun className="icon" />;
  } else if (sky === '흐림') {
    weather = <BsClouds className="icon" />;
  } else {
    weather = <BsCloudRain className="icon" />;
  }

  return (
    <SkyStyle.SkyWrapper>
      {weather}
      <SkyStyle.SkyText>{sky}</SkyStyle.SkyText>
    </SkyStyle.SkyWrapper>
  );
}

export default SkyComponent;
