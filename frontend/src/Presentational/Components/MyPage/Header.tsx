import React from 'react';
import Swal from 'sweetalert2';
import * as MainStyle from '../../../style/MainStyle';

function Header() {
  const handleButtonClick = () => {
    Swal.fire({
      title: '테스트',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'true',
      },
    });
  };
  return (
    <MainStyle.MainNav>
      <MainStyle.WrapNav>
        {/* 로고 */}
        <MainStyle.NavLogo>LOGO</MainStyle.NavLogo>
        {/* 유저 정보 */}
        <MainStyle.NavLogin onClick={handleButtonClick}>LOGIN</MainStyle.NavLogin>
      </MainStyle.WrapNav>
    </MainStyle.MainNav>
  );
}

export default Header;
