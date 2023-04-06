import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import * as ProfileStyle from './SideBarProFileArea_Style';
import ProfileImage from '../../../Components/NaverMap/SideBar/Profile/ProfileImage';
import { UserStore } from '../../../../store';

function SideBarProfileArea() {
  /*
   * name : Zustand Store에 저장된 로그인 한 유저 이름
   */
  const { name } = UserStore();

  return (
    <ProfileStyle.ProfileWrapper>
      <ProfileStyle.TopWrapper>
        <ProfileStyle.TopHomeLink to="/">
          <AiOutlineHome size={25} className="icon" />
        </ProfileStyle.TopHomeLink>
      </ProfileStyle.TopWrapper>
      <ProfileStyle.MiddleWrapper>
        <ProfileImage />
      </ProfileStyle.MiddleWrapper>
      <ProfileStyle.BottomWrapper>
        {name !== 'null' ? (
          <ProfileStyle.BottomNameText>{name}님 환영합니다.</ProfileStyle.BottomNameText>
        ) : (
          <ProfileStyle.BottomNameText>로그인이 필요합니다.</ProfileStyle.BottomNameText>
        )}
      </ProfileStyle.BottomWrapper>
    </ProfileStyle.ProfileWrapper>
  );
}

export default SideBarProfileArea;
