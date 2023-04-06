import React from 'react';
import { BsFillClipboardHeartFill, BsStarFill, BsFillClipboardDataFill } from 'react-icons/bs';
import SideBarBtn from '../../../Components/NaverMap/SideBar/Menu/SideBarBtn';
import * as SideBarMenuStyle from './SideBarMenuArea_Style';

/**
 * 상위 컴포넌트에서 전달 받은 props 타입
 */
type PropsType = {
  changeCurrentSelectedBoard: (str: string) => void;
  currentSelectedBoard: string;
};

function SideBarMenu(props: PropsType) {
  /*
   * changeCurrentSelectedBoard : 현재 선택한 메뉴 상태 변경 함수
   * currentSelectedBoard : 현재 선택된 메뉴 상태 state
   */
  const { changeCurrentSelectedBoard, currentSelectedBoard } = props;

  return (
    <SideBarMenuStyle.MenuWrapper className="menuWrapper">
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
