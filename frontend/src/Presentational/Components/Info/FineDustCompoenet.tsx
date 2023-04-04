import React from 'react';
import { BsSun, BsCloudRain, BsCloudSun, BsClouds } from 'react-icons/bs';
import { FiSmile } from 'react-icons/fi';
import { RiEmotionNormalLine } from 'react-icons/ri';
import { MdMoodBad, MdOutlineSentimentVeryDissatisfied } from 'react-icons/md';
import * as FineDustStyle from './FineDustComponent_Style';

function FineDustComponent(props: { fineDust: string }) {
  const { fineDust } = props;

  let fineDustIcon;

  if (fineDust === '좋음') {
    fineDustIcon = <FiSmile className="icon" color="#4daefd" />;
  } else if (fineDust === '보통') {
    fineDustIcon = <RiEmotionNormalLine className="icon" color="#3fdb2a" />;
  } else if (fineDust === '나쁨') {
    fineDustIcon = <MdMoodBad className="icon" color="#d89924" />;
  } else {
    fineDustIcon = <MdOutlineSentimentVeryDissatisfied className="icon" color="#fa1616" />;
  }

  return (
    <FineDustStyle.FineDustWrapper>
      {fineDustIcon}
      <FineDustStyle.FineDustText>{fineDust}</FineDustStyle.FineDustText>
    </FineDustStyle.FineDustWrapper>
  );
}

export default FineDustComponent;
