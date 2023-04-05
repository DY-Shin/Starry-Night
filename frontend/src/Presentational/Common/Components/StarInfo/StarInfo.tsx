/* eslint-disable react/jsx-pascal-case */
import React, { PropsWithChildren, useState, useEffect } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import Slider, { Settings } from 'react-slick';
import * as InfoStyle from './StarInfoStyle';
import api from '../../../Components/api';

interface ModalDefaultType {
  onClickToggleModal: () => void;
  id: number;
}

interface StarDetail {
  id: number;
  name: string;
  description: string;
  latin: string;
  mag: number;
  ra: string;
  declination: number;
  manual: string;
  originImage: string;
  linedImage: string;
  illustImage: string;
  firstViewedDate: string;
  viewCount: number;
}

function StarInfo({ onClickToggleModal, children, id }: PropsWithChildren<ModalDefaultType>) {
  const [starDetail, setStarDetail] = useState<StarDetail | null>(null);

  // 상세 별자리 조회
  const getDetailConstellation = async (ConstellationsId: number) => {
    try {
      const response = await api.get(`constellations/${ConstellationsId}`, { withCredentials: true });
      console.log(response.data.data);
      setStarDetail(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetailConstellation(id);
  }, []);

  return (
    <InfoStyle.StarInfoContainer>
      <InfoStyle.StarInfoBox
        onClick={(e: React.MouseEvent) => {
          // 모달 눌러도 같이 닫혀서 막아버림 => 버블링 문제카더라
          e.stopPropagation();
        }}
      >
        <InfoStyle.StarInfoTitle>{children}</InfoStyle.StarInfoTitle>
        <InfoStyle.StarInfoPhoto>
          <ReactCompareSlider
            handle={<ReactCompareSliderHandle style={{ color: '#3282B8' }} linesStyle={{ opacity: 0.5 }} />}
            itemOne={<ReactCompareSliderImage src={starDetail?.originImage} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={starDetail?.linedImage} alt="Image two" />}
            position={50}
            onlyHandleDraggable
            style={{
              height: '100%',
            }}
          />
        </InfoStyle.StarInfoPhoto>
        <InfoStyle.StarInfoDescription>
          <InfoStyle.filter>세부 정보</InfoStyle.filter> <hr />
          {starDetail?.description}
        </InfoStyle.StarInfoDescription>
        <InfoStyle.StarInfoManual>
          <InfoStyle.filter>찾는 방법</InfoStyle.filter> <hr />
          {starDetail?.manual}
        </InfoStyle.StarInfoManual>
        <InfoStyle.StarInfoEtc>
          관측횟수 : {starDetail?.viewCount}
          <br /> 최초관측 :
          {starDetail?.firstViewedDate === null ? <span> x</span> : <span> {starDetail?.firstViewedDate}</span>}
        </InfoStyle.StarInfoEtc>
      </InfoStyle.StarInfoBox>
      <InfoStyle.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          console.log(123);
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </InfoStyle.StarInfoContainer>
  );
}

export default StarInfo;
