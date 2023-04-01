/* eslint-disable no-undef */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as BoardPostAPI from '../../../Action/Modules/NaverMap/BoardPost';
import BoardPost from '../../Components/NaverMap/SideBar/Baord/BoardPost';
import * as BoardStyle from './BoardPage_Style';

type propsType = {
  map: naver.maps.Map | null;
  refreshState: boolean;
  refreshHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

function BoardPage(props: propsType) {
  const { map, refreshState, refreshHandler } = props;
  const [resultData, setResultData] = useState<null | BoardPostAPI.resultType>(null);
  const [markerObject, setMarkerObject] = useState<null | naver.maps.Marker[]>(null);
  const TopHeaderElement = useRef<null | HTMLDivElement>(null);

  const moveTop = () => {
    TopHeaderElement?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  async function updateData(): Promise<BoardPostAPI.resultType | null> {
    if (!map) return null;
    const result = await BoardPostAPI.GetPostData(map, 1);
    setResultData(result);
    refreshHandler(false);
    moveTop();
    return result;
  }

  async function updateMarker(data: Promise<BoardPostAPI.resultType | null>): Promise<naver.maps.Marker[] | null> {
    // if (!resultData) {
    //   return null;
    // }
    if (!map) return null;
    if (markerObject) {
      BoardPostAPI.clearMarker(markerObject);
    }
    const convertData = await data;
    console.log('마커 업데이트 convertData ', convertData);
    if (!convertData) return null;
    const returnData = await BoardPostAPI.MakeMarker(map, convertData);
    setMarkerObject(returnData);
    return returnData;
  }

  function refrehPost(): naver.maps.Marker[] | null {
    let result: naver.maps.Marker[] | null = null;
    updateMarker(updateData()).then((value) => {
      result = value;
    });
    return result;
  }

  useEffect(() => {
    let returnData: naver.maps.Marker[] | null;
    if (refreshState) {
      returnData = refrehPost();
      // updateMarker(updateData());
    }
    return () => {
      if (returnData) {
        BoardPostAPI.clearMarker(returnData);
      }
    };
  }, [refreshState]);

  return (
    <BoardStyle.BoardPageWrapper>
      <BoardStyle.BoardTopHeader ref={TopHeaderElement}>Star Post</BoardStyle.BoardTopHeader>
      <BoardStyle.BoardTopHeaderLine />
      {resultData?.content?.map((value, idx) => (
        <BoardPost data={value} setDataHandler={setResultData} key={value.id} idx={idx} />
      ))}
    </BoardStyle.BoardPageWrapper>
  );
}

export default BoardPage;
