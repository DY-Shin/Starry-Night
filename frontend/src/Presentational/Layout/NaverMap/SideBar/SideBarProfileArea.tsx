import React from 'react';
import * as ProfileStyle from './SideBarProFileArea_Style';
import ProfileImage from '../../../Components/NaverMap/SideBar/Profile/ProfileImage';

function SideBarProfileArea() {
  return (
    <ProfileStyle.ProfileWrapper>
      <ProfileStyle.TopWrapper />
      <ProfileStyle.MiddleWrapper>
        <ProfileImage />
      </ProfileStyle.MiddleWrapper>
      <ProfileStyle.BottomWrapper>
        <ProfileStyle.BottomNameText>김지훈님 환영합니다.</ProfileStyle.BottomNameText>
      </ProfileStyle.BottomWrapper>
    </ProfileStyle.ProfileWrapper>
  );
}

export default SideBarProfileArea;
