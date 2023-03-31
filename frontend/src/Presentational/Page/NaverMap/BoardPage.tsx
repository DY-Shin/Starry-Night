/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';
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

  async function updateData(): Promise<void> {
    if (!map) return;
    const result = await BoardPostAPI.GetPostData(map, 1);
    setResultData(result);
    refreshHandler(false);
    moveTop();
  }

  async function updateMarker(): Promise<naver.maps.Marker[] | null> {
    if (!resultData) {
      return null;
    }
    if (!map) return null;
    if (markerObject) {
      BoardPostAPI.clearMarker(markerObject);
    }
    const returnData = await BoardPostAPI.MakeMarker(map, resultData);
    setMarkerObject(returnData);
    return returnData;
  }

  useEffect(() => {
    if (map && refreshState) {
      updateData();
    }
  }, [refreshState]);

  useEffect(() => {
    if (map) {
      updateData();
    }
  }, []);

  useEffect(() => {
    let returnData: naver.maps.Marker[] | null;
    updateMarker().then((value) => {
      returnData = value;
    });
    return () => {
      if (returnData) {
        BoardPostAPI.clearMarker(returnData);
      }
    };
  }, [resultData]);

  return (
    <BoardStyle.BoardPageWrapper>
      <BoardStyle.BoardTopHeader ref={TopHeaderElement}>
        Star Post
        <BoardStyle.BoardTopHeaderLine />
      </BoardStyle.BoardTopHeader>
      {resultData?.content?.map((value) => (
        <BoardPost data={value} key={value.id} />
      ))}
    </BoardStyle.BoardPageWrapper>
  );
}

export default BoardPage;
