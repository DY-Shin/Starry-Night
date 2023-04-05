import React, { useState, useEffect } from 'react';
import { BiUpArrow } from 'react-icons/bi';
import * as InfoStyle from './ConstellationInfoComponent_Style';
import constellationAPI from '../api';

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

type propsType = {
  selectId: number;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ConstellationInfoComponent(props: propsType) {
  const { selectId, setIsModalOpen } = props;
  const [starDetail, setStarDetail] = useState<StarDetail | null>(null);

  const getDetailConstellation = async (ConstellationsId: number) => {
    try {
      const response = await constellationAPI.get(`constellations/${ConstellationsId}`, { withCredentials: true });
      console.log(response.data.data);
      setStarDetail(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetailConstellation(selectId);
  }, []);

  const convertDescription = (prevStr: string): string => {
    const sliceStr = prevStr.split('.');
    let resultStr = sliceStr[0];
    for (let i = 1; i < sliceStr.length - 1; i += 1) {
      resultStr += `.\n\n${sliceStr[i]}`;
    }
    resultStr += `.${sliceStr[sliceStr.length - 1]}`;
    return resultStr;
  };

  return (
    <InfoStyle.BlackBG>
      {starDetail ? (
        <InfoStyle.CardWrapper className="card">
          <InfoStyle.ImageBox className="imgBox">
            <InfoStyle.ImageItem link={starDetail.originImage} />
            <InfoStyle.ImageItem link={starDetail.linedImage} />
          </InfoStyle.ImageBox>
          <InfoStyle.DetailWrapper className="detail">
            <InfoStyle.ContentWrapper className="content">
              <InfoStyle.ConstellationName>{starDetail.name}</InfoStyle.ConstellationName>
              <InfoStyle.ConstellationExplanWrapper>
                <InfoStyle.ConstellationExplanText>
                  {convertDescription(starDetail.description)}
                </InfoStyle.ConstellationExplanText>
              </InfoStyle.ConstellationExplanWrapper>
              <InfoStyle.CloseBtn onClick={() => setIsModalOpen(false)}>닫기</InfoStyle.CloseBtn>
            </InfoStyle.ContentWrapper>
          </InfoStyle.DetailWrapper>
          <BiUpArrow color="white" size={40} className="icon" />
        </InfoStyle.CardWrapper>
      ) : null}
    </InfoStyle.BlackBG>
  );
}

export default ConstellationInfoComponent;
