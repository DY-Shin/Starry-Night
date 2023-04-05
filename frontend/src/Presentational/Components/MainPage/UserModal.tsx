import React from 'react';
import * as UserModalStyle from './UserModal_Style';
import { UserStore, FlagStore } from '../../../store';
import api from '../api';

function UserModal() {
  const { name, profileImageUrl, setUser } = UserStore();
  const { flag, setFlag } = FlagStore();

  // LogOut
  const LogOutUser = async () => {
    await api.post(`/logout`, {}, { withCredentials: true }).then((res) => {
      setUser('null', 'null');
      setFlag(false);
    });
  };

  return (
    <UserModalStyle.ModalBox>
      <UserModalStyle.UserName>{name} 님</UserModalStyle.UserName>
      <UserModalStyle.UserMenuLine />
      <UserModalStyle.UserMenu1 to="/mypage">
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
