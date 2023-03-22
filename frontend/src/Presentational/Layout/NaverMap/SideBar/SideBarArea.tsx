import React, { useState } from 'react';
import SideBarMenuArea from './SideBarMenuArea';
import * as SidBarStyle from './SideBarArea_Style';
import SideBarProfileArea from './SideBarProfileArea';
import InfoPage from '../../../Page/NaverMap/InfoPage';
import FavoritePage from '../../../Page/NaverMap/FavoritePage';
import BoardPage from '../../../Page/NaverMap/BoardPage';

function SidBarArea() {
  const [foldState, setFoldState] = useState(true);
  const [currentContents, setCurrentContents] = useState('info');

  const changeFoldState = () => {
    setFoldState(!foldState);
  };

  const changeCurrentContents = (str: string) => {
    setCurrentContents(str);
  };

  return (
    <>
      <SidBarStyle.FoldBtn onClick={changeFoldState} className={foldState ? 'close' : 'open'}>
        <SidBarStyle.FoldText> {foldState ? '<' : '>'} </SidBarStyle.FoldText>
      </SidBarStyle.FoldBtn>
      <SidBarStyle.SidBarBody className={foldState ? 'close' : 'open'}>
        <SideBarProfileArea />
        <SideBarMenuArea changeContents={changeCurrentContents} />
        <SidBarStyle.SidBarLine />
        <SidBarStyle.SidBarContentsArea className="contentsArea">
          {currentContents === 'info' ? <InfoPage /> : null}
          {currentContents === 'favorite' ? <FavoritePage /> : null}
          {currentContents === 'board' ? <BoardPage /> : null}
        </SidBarStyle.SidBarContentsArea>
      </SidBarStyle.SidBarBody>
    </>
  );
}

export default SidBarArea;
