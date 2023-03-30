/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import * as BoardPostAPI from '../../../Action/Modules/NaverMap/BoardPost';

type propsType = {
  // eslint-disable-next-line no-undef
  map: naver.maps.Map | null;
  refreshState: boolean;
  refreshHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

function BoardPage(props: propsType) {
  const { map, refreshState, refreshHandler } = props;
  const [resultData, setResultData] = useState<null | BoardPostAPI.resultType>(null);
  // eslint-disable-next-line no-undef
  const [markerObject, setMarkerObject] = useState<null | naver.maps.Marker[]>(null);

  async function updateData(): Promise<void> {
    if (!map) return;
    const result = await BoardPostAPI.GetPostData(map, 1);
    setResultData(result);
    refreshHandler(false);
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
    console.log('refreshState : ', refreshState);
    if (map && refreshState) {
      updateData();
    }
  }, [refreshState]);

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

  return <div>board페이지</div>;
}

export default BoardPage;
