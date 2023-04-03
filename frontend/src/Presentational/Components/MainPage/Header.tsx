/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import * as HeaderStyle from './Header_Style';
import { UserStore, FlagStore } from '../../../store';
import api from '../api';
import UserModal from './UserModal';
import useDetectClose from '../../../Action/Hooks/Mainpage/LoginModalHook';
import Login from '../../Common/Components/MainPage/Login';

function Header() {
  const { name, profileImageUrl, setUser } = UserStore();
  const { flag, setFlag } = FlagStore();

  const MySwal = withReactContent(Swal);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  // 카카오 로그인 정보 가져오기
  const getUser = async () => {
    await api.get(`/my-profile`, { withCredentials: true }).then((res) => {
      setUser(res.data.data.name, res.data.data.profileImageUrl);
    });
  };

  const getToken = () => {
    setFlag(true);
    window.location.href = `${process.env.REACT_APP_API_SERVER_URL}/oauth2/authorization/kakao`;
  };

  useEffect(() => {
    if (flag) {
      getUser();
    }
  }, []);

  // 로그인 모달
  const LoginModal = () => {
    MySwal.fire({
      confirmButtonText: '취소',
      html: (
        <div>
          <Login getToken={getToken} />
        </div>
      ),
    });
  };

  return (
    <HeaderStyle.MainNav>
      <HeaderStyle.WrapNav>
        {/* 로고 */}
        <HeaderStyle.NavLogo to="/">
          <HeaderStyle.LogoImg src="assets/logo/logo6.png" />
        </HeaderStyle.NavLogo>
        {/* 유저 정보 */}
        {name === 'null' ? (
          <HeaderStyle.NavLogin onClick={LoginModal}>LOGIN</HeaderStyle.NavLogin>
        ) : (
          <HeaderStyle.NavLogOut ref={dropDownRef}>
            <HeaderStyle.ProfileImg
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              src={profileImageUrl}
            />
            {isOpen ? <UserModal /> : null}
          </HeaderStyle.NavLogOut>
        )}
      </HeaderStyle.WrapNav>
    </HeaderStyle.MainNav>
  );
}

export default Header;
