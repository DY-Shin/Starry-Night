import React from 'react';
import * as UserModalStyle from './UserModal_Style';
import { UserStore, OpenDropStore } from '../../../store';

function UserModal() {
  const { name, profileImageUrl, setUser } = UserStore();

  // LogOut
  const LogOutUser = () => {
    setUser('null', 'null');
  };

  return (
    <UserModalStyle.ModalBox>
      <UserModalStyle.UserName>{name} 님</UserModalStyle.UserName>
      <UserModalStyle.UserMenuLine />
      <UserModalStyle.UserMenu1>
        <UserModalStyle.UserImg1 src={profileImageUrl} />
        회원정보
      </UserModalStyle.UserMenu1>

      <UserModalStyle.UserMenu2 onClick={LogOutUser}>
        <UserModalStyle.UserImg2 />
        로그아웃
      </UserModalStyle.UserMenu2>
    </UserModalStyle.ModalBox>
  );
}

export default UserModal;
