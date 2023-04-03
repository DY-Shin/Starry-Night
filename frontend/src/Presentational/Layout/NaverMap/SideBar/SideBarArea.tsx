import React, { useState } from 'react';
import SideBarMenuArea from './SideBarMenuArea';
import * as SidBarStyle from './SideBarArea_Style';
import SideBarProfileArea from './SideBarProfileArea';
import InfoPage from '../../../Page/NaverMap/InfoPage';
import FavoritePage from '../../../Page/NaverMap/FavoritePage';
import BoardPage from '../../../Page/NaverMap/BoardPage';

type propsType = {
  setIsBoardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInfoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // eslint-disable-next-line no-undef
  map: naver.maps.Map | null;
  refreshState: boolean;
  refreshHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

function SidBarArea(props: propsType) {
  const { setIsBoardOpen, map, refreshState, refreshHandler, setIsInfoOpen } = props;
  const [foldState, setFoldState] = useState(true);
  const [currentSelectedBoard, setCurrentSelectedBoard] = useState('info');

  const changeFoldState = () => {
    setFoldState(!foldState);
  };

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
        <SideBarMenuArea changeCurrentSelectedBoard={changeCurrentSelectedBoard} />
        <SidBarStyle.SidBarLine />
        <SidBarStyle.SidBarContentsArea className="contentsArea">
          {currentSelectedBoard === 'info' ? <InfoPage /> : null}
          {currentSelectedBoard === 'favorite' ? <FavoritePage /> : null}
          {currentSelectedBoard === 'board' ? (
            <BoardPage map={map} refreshState={refreshState} refreshHandler={refreshHandler} />
          ) : null}
        </SidBarStyle.SidBarContentsArea>
      </SidBarStyle.SidBarBody>
    </>
  );
}

export default SidBarArea;
