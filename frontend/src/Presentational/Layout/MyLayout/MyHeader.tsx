import React, { useRef, useState } from 'react';
// import { Link, useMatch } from 'react-router-dom';
import * as MyHeaderStyle from './MyHeadStyle';
// import { MyButton, MyDia } from '../../Components/MyComponents/MyStyle';
import { UserStore } from '../../../store';
import useDetectClose from '../../../Action/Hooks/Mainpage/LoginModalHook';
import UserModal from '../../Components/MainPage/UserModal';
import logo from '../../../Assets/logo/logo6.png';

function Header() {
  const { profileImageUrl } = UserStore();
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  // const [menu, setMenu] = useState(0);

  // const myProfileMatch = useMatch('/mypage');
  // const myDictMatch = useMatch('/mypage/dict/*');
  // const myPostMatch = useMatch('/mypage/posts');
  // const myRewardMatch = useMatch('/mypage/reward');

  return (
    <MyHeaderStyle.MainNav>
      <MyHeaderStyle.WrapNav>
        <MyHeaderStyle.MyNavContainer>
          <MyHeaderStyle.NavLogo to="/">
            <MyHeaderStyle.LogoImg src={logo} />
          </MyHeaderStyle.NavLogo>
          <MyHeaderStyle.MenuSet>
            <MyHeaderStyle.Menu>
              <MyHeaderStyle.MenuLink to="/mypage/dict/all" className={({ isActive }) => (isActive ? 'active' : '')}>
                나의 도감
              </MyHeaderStyle.MenuLink>
            </MyHeaderStyle.Menu>
            <MyHeaderStyle.Menu>
              <MyHeaderStyle.MenuLink to="/mypage/posts">내가 쓴 글</MyHeaderStyle.MenuLink>
            </MyHeaderStyle.Menu>
            <MyHeaderStyle.Menu>
              <MyHeaderStyle.MenuLink to="/mypage/reward">나의 업적</MyHeaderStyle.MenuLink>
            </MyHeaderStyle.Menu>
          </MyHeaderStyle.MenuSet>
        </MyHeaderStyle.MyNavContainer>

        <MyHeaderStyle.NavLogOut ref={dropDownRef}>
          <MyHeaderStyle.MenuLink to="/map">🌏지도</MyHeaderStyle.MenuLink>
          <MyHeaderStyle.ProfileImg
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            src={profileImageUrl}
          />
          {isOpen ? <UserModal /> : null}
        </MyHeaderStyle.NavLogOut>
      </MyHeaderStyle.WrapNav>
    </MyHeaderStyle.MainNav>
  );
}

export default Header;
