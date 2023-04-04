import React from 'react';
// import { BiCalendarStar } from 'react-icons/bi';
import { BsFillClipboardHeartFill, BsStarFill, BsFillClipboardDataFill } from 'react-icons/bs';
import SideBarBtn from '../../../Components/NaverMap/SideBar/Menu/SideBarBtn';
import * as SideBarMenuStyle from './SideBarMenuArea_Style';

type SideBarMenuProps = {
  // eslint-disable-next-line no-unused-vars
  changeCurrentSelectedBoard: (str: string) => void;
  currentSelectedBoard: string;
};

function SideBarMenu(props: SideBarMenuProps) {
  const { changeCurrentSelectedBoard, currentSelectedBoard } = props;
  return (
    <SideBarMenuStyle.MenuWrapper>
      <SideBarMenuStyle.BtnWrapper
        className="infoBtn"
        onClick={() => {
          changeCurrentSelectedBoard('info');
        }}
        currentSelectedBoard={currentSelectedBoard}
      >
        <BsFillClipboardDataFill size={20} className="icon" />
        <SideBarBtn btnText="관측 정보" />
      </SideBarMenuStyle.BtnWrapper>
      <SideBarMenuStyle.BtnWrapper
        className="boardBtn"
        onClick={() => {
          changeCurrentSelectedBoard('board');
        }}
        currentSelectedBoard={currentSelectedBoard}
      >
        <BsFillClipboardHeartFill size={20} className="icon" />
        <SideBarBtn btnText="주변 위치 글" />
      </SideBarMenuStyle.BtnWrapper>
      <SideBarMenuStyle.BtnWrapper
        className="favoriteBtn"
        onClick={() => {
          changeCurrentSelectedBoard('favorite');
        }}
        currentSelectedBoard={currentSelectedBoard}
      >
        <BsStarFill size={20} className="icon" />
        <SideBarBtn btnText="위치 즐겨 찾기" />
      </SideBarMenuStyle.BtnWrapper>
    </SideBarMenuStyle.MenuWrapper>
  );
}

export default SideBarMenu;
