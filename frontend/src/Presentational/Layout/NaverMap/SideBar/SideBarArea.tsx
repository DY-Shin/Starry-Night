/* eslint-disable no-undef */
import React, { useState } from 'react';
import * as SidBarStyle from './SideBarArea_Style';
import SideBarMenuArea from './SideBarMenuArea';
import SideBarProfileArea from './SideBarProfileArea';
import InfoPage from '../../../Page/NaverMap/InfoPage';
import FavoritePage from '../../../Page/NaverMap/FavoritePage';
import BoardPage from '../../../Page/NaverMap/BoardPage';

/**
 * 전달 받은 props 타입 설정
 */
type propsType = {
  setIsBoardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInfoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  map: naver.maps.Map | null;
  refreshState: boolean;
  refreshHandler: React.Dispatch<React.SetStateAction<boolean>>;
  clickLocation: null | naver.maps.Coord;
};

function SidBarArea(props: propsType) {
  /*
   * setIsBoardOpen : 상위에서 전달받은 상태 변경 함수(주변 위치 글 메뉴 선택 여부 상태 변경)
   * setIsInfoOpen : 상위에서 전달받은 상태 변경 함수(관측 정보 메뉴 선택 여부 상태 변경)
   * map : 상위에서 전달받은 Naver map 객체
   * refreshState : 상위에서 전달받은 새로고침 상태
   * refreshHanlder : 상위에서 전달받은 상태 변경 함수(새로고침 상태 변경)
   * clickLocation : 상위에서 전달받은 좌표 객체(지도에서 클릭한 지점 위/경도 좌표)
   */
  const { setIsBoardOpen, setIsInfoOpen, map, refreshState, refreshHandler, clickLocation } = props;

  /*
   * 사이드바 접힘/펼침 상태 State
   */
  const [foldState, setFoldState] = useState(true);

  /*
   * 현재 선택된 메뉴 상태 State
   */
  const [currentSelectedBoard, setCurrentSelectedBoard] = useState('info');

  /**
   * 사이드바 펼침/접힘 상태 변경 함수
   */
  const changeFoldState = () => {
    setFoldState(!foldState);
  };

  /**
   * 현재 선택한 메뉴 상태 변경 함수
   * @param str 현재 선택한 메뉴 상태 값애 넣을 문자열 (종류: board, info, etc..)
   */
  const changeCurrentSelectedBoard = (str: string) => {
    setCurrentSelectedBoard(str);
    if (str === 'board') {
      setIsBoardOpen(true);
      setIsInfoOpen(false);
    } else if (str === 'info') {
      setIsBoardOpen(false);
      setIsInfoOpen(true);
    } else {
      setIsBoardOpen(false);
      setIsInfoOpen(false);
    }
  };

  return (
    <>
      <SidBarStyle.FoldBtn onClick={changeFoldState} className={foldState ? 'close' : 'open'}>
        <SidBarStyle.FoldText> {foldState ? '<' : '>'} </SidBarStyle.FoldText>
      </SidBarStyle.FoldBtn>
      <SidBarStyle.SidBarBody className={foldState ? 'close' : 'open'}>
        <SideBarProfileArea />
        <SideBarMenuArea
          changeCurrentSelectedBoard={changeCurrentSelectedBoard}
          currentSelectedBoard={currentSelectedBoard}
        />
        <SidBarStyle.SidBarContentsArea className="contentsArea">
          {currentSelectedBoard === 'info' ? <InfoPage clickLocation={clickLocation} /> : null}
          {currentSelectedBoard === 'favorite' ? <FavoritePage map={map} /> : null}
          {currentSelectedBoard === 'board' ? (
            <BoardPage map={map} refreshState={refreshState} refreshHandler={refreshHandler} />
          ) : null}
        </SidBarStyle.SidBarContentsArea>
      </SidBarStyle.SidBarBody>
    </>
  );
}

export default SidBarArea;
