import React, { useState, useEffect } from 'react';
import { BiUpArrow } from 'react-icons/bi';
import * as InfoStyle from './ConstellationInfoComponent_Style';
import constellationAPI from '../api';

// 비동기 통신을 통해 받은 리턴 값 타입 인터페이스
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

type PropsType = {
  selectId: number;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ConstellationInfoComponent(props: PropsType) {
  const { selectId, setIsModalOpen } = props;

  /*
   * 비동기 통신을 통해 받은 결과값 저장할 상태 State
   */
  const [starDetail, setStarDetail] = useState<StarDetail | null>(null);

  /**
   * 별자리 ID에 해당하는 상세 정보 데이터를 받는 함수
   * @param ConstellationsId 별자리 ID (number)
   */
  const getDetailConstellation = async (ConstellationsId: number) => {
    try {
      const response = await constellationAPI.get(`constellations/${ConstellationsId}`, { withCredentials: true });
      // console.log(response.data.data);
      setStarDetail(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  /*
   * 최초 1회만 실행
   */
  useEffect(() => {
    getDetailConstellation(selectId);
  }, []);

  /**
   * 비동기 통신으로 받은 문자열 사이에 탭을 넣어서 리턴해주는 함수
   * @param prevStr 비동기 통신으로 받은 문자열
   * @returns . 기준으로 자른 문자열 사이에 탭을 추가하여 새로 만든 문자열
   */
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
