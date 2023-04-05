/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';
import * as BoardPostAPI from '../../../Action/Modules/NaverMap/BoardPost';
import BoardPost from '../../Components/NaverMap/SideBar/Baord/BoardPost';
import * as BoardStyle from './BoardPage_Style';
import PagenationComponent from '../../Components/NaverMap/SideBar/PagenationComponent';

type propsType = {
  map: naver.maps.Map | null;
  refreshState: boolean;
  refreshHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

function BoardPage(props: propsType) {
  const { map, refreshState, refreshHandler } = props;
  const [resultData, setResultData] = useState<null | BoardPostAPI.resultType>(null);
  const [markerObject, setMarkerObject] = useState<null | naver.maps.Marker[]>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const TopHeaderElement = useRef<null | HTMLDivElement>(null);

  const moveTop = () => {
    TopHeaderElement?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  async function updateData(): Promise<BoardPostAPI.resultType | null> {
    if (!map) return null;
    const result = await BoardPostAPI.GetPostData(map, currentPage);
    setResultData(result);
    refreshHandler(false);
    moveTop();
    return result;
  }

  // async function updateMarker(data: Promise<BoardPostAPI.resultType | null>): Promise<naver.maps.Marker[] | null> {
  //   if (!map) return null;
  //   if (markerObject) {
  //     BoardPostAPI.clearMarker(markerObject);
  //   }
  //   const convertData = await data;
  //   if (!convertData) return null;
  //   const returnData = await BoardPostAPI.MakeMarker(map, convertData);
  //   setMarkerObject(returnData);
  //   return returnData;
  // }
  async function updateMarker(data: Promise<BoardPostAPI.resultType | null>) {
    if (map) {
      if (markerObject) {
        BoardPostAPI.clearMarker(markerObject);
      }
      const convertData = await data;
      if (convertData) {
        const returnData = await BoardPostAPI.MakeMarker(map, convertData);
        setMarkerObject(returnData);
      }
    }
  }

  // function refrehPost(): naver.maps.Marker[] | null {
  //   let result: naver.maps.Marker[] | null = null;
  //   updateMarker(updateData()).then((value) => {
  //     result = value;
  //   });
  //   return result;
  // }
  const refrehPost = () => {
    updateMarker(updateData());
  };

  // useEffect(() => {
  //   let returnData: naver.maps.Marker[] | null;
  //   if (refreshState) {
  //     returnData = refrehPost();
  //     // updateMarker(updateData());
  //   }
  //   return () => {
  //     if (markerObject) {
  //       BoardPostAPI.clearMarker(markerObject);
  //     }
  //   };
  // }, [refreshState, currentPage]);
  useEffect(() => {
    if (refreshState) {
      refrehPost();
    }
    return () => {
      if (markerObject) {
        BoardPostAPI.clearMarker(markerObject);
      }
    };
  }, [refreshState, currentPage]);

  return (
    <BoardStyle.BoardPageWrapper>
      <BoardStyle.BoardTopHeader ref={TopHeaderElement}>Star Post</BoardStyle.BoardTopHeader>
      {/* <BoardStyle.BoardTopHeaderLine /> */}
      <BoardStyle.BoardPostWrapper>
        {resultData?.content?.map((value, idx) => (
          <BoardPost data={value} setDataHandler={setResultData} key={value.id} idx={idx} markerObject={markerObject} />
        ))}
      </BoardStyle.BoardPostWrapper>
      <PagenationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={resultData?.totalPages}
        map={map}
        text="글쓰기"
        updateHandler={refrehPost}
        type="post"
      />
    </BoardStyle.BoardPageWrapper>
  );
}

export default BoardPage;
