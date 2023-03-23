import React from 'react';
// import { BiCalendarStar } from 'react-icons/bi';
import { BsFillClipboardHeartFill, BsStarFill, BsFillClipboardDataFill } from 'react-icons/bs';
import SideBarBtn from '../../../Components/NaverMap/SideBar/Menu/SideBarBtn';
import * as SideBarMenuStyle from './SideBarMenuArea_Style';

type SideBarMenuProps = {
  // eslint-disable-next-line no-unused-vars
  changeContents: (str: string) => void;
};

function SideBarMenu(props: SideBarMenuProps) {
  const { changeContents } = props;
  return (
    <SideBarMenuStyle.MenuWrapper>
      <SideBarMenuStyle.BtnWrapper
        onClick={() => {
          changeContents('info');
        }}
      >
        <BsFillClipboardDataFill size={20} className="icon" />
        <SideBarBtn btnText="관측 정보" />
      </SideBarMenuStyle.BtnWrapper>
      <SideBarMenuStyle.BtnWrapper
        onClick={() => {
          changeContents('board');
        }}
      >
        <BsFillClipboardHeartFill size={20} className="icon" />
        <SideBarBtn btnText="주변 위치 글" />
      </SideBarMenuStyle.BtnWrapper>
      <SideBarMenuStyle.BtnWrapper
        onClick={() => {
          changeContents('favorite');
        }}
      >
        <BsStarFill size={20} className="icon" />
        <SideBarBtn btnText="위치 즐겨 찾기" />
      </SideBarMenuStyle.BtnWrapper>
    </SideBarMenuStyle.MenuWrapper>
  );
}

export default SideBarMenu;
