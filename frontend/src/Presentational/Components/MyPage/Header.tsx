import React from 'react';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
import * as HeaderStyle from './Header_Style';

function Header() {
  // const handleButtonClick = () => {

  // };
  return (
    <HeaderStyle.MainNav>
      <HeaderStyle.WrapNav>
        {/* 로고 */}
        <HeaderStyle.NavLogo>LOGO</HeaderStyle.NavLogo>
        {/* 유저 정보 */}
        <HeaderStyle.NavLogin to="http://j8d206.p.ssafy.io:8090/oauth2/authorization/kakao">LOGIN</HeaderStyle.NavLogin>
      </HeaderStyle.WrapNav>
    </HeaderStyle.MainNav>
  );
}

export default Header;
