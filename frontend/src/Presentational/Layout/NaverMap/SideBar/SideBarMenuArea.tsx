import React from 'react';
// import { BiCalendarStar } from 'react-icons/bi';
import { BsFillClipboardHeartFill, BsStarFill, BsFillClipboardDataFill } from 'react-icons/bs';
import SideBarBtn from '../../../Components/NaverMap/SideBar/Menu/SideBarBtn';
import * as SideBarMenuStyle from './SideBarMenuArea_Style';

type SideBarMenuProps = {
  // eslint-disable-next-line no-unused-vars
  changeCurrentSelectedBoard: (str: string) => void;
};

function SideBarMenu(props: SideBarMenuProps) {
  const { changeCurrentSelectedBoard } = props;
  return (
    <SideBarMenuStyle.MenuWrapper>
      <SideBarMenuStyle.BtnWrapper
        onClick={() => {
          changeCurrentSelectedBoard('info');
        }}
      >
        <BsFillClipboardDataFill size={20} className="icon" />
        <SideBarBtn btnText="관측 정보" />
      </SideBarMenuStyle.BtnWrapper>
      <SideBarMenuStyle.BtnWrapper
        onClick={() => {
          changeCurrentSelectedBoard('board');
        }}
      >
        <BsFillClipboardHeartFill size={20} className="icon" />
        <SideBarBtn btnText="주변 위치 글" />
      </SideBarMenuStyle.BtnWrapper>
      <SideBarMenuStyle.BtnWrapper
        onClick={() => {
          changeCurrentSelectedBoard('favorite');
        }}
      >
        <BsStarFill size={20} className="icon" />
        <SideBarBtn btnText="위치 즐겨 찾기" />
      </SideBarMenuStyle.BtnWrapper>
    </SideBarMenuStyle.MenuWrapper>
  );
}

export default SideBarMenu;
