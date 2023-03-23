import React from 'react';
import { Container, HeaderNav, HeaderItem, HeaderLog, LogButton } from './HeadStyle';

function Header() {
  return (
    <Container>
      <HeaderNav>
        <HeaderItem>Mappage</HeaderItem>
        <HeaderItem>Mainpage</HeaderItem>
        <HeaderItem>Mypage</HeaderItem>
      </HeaderNav>
      <HeaderLog>
        <LogButton>Login</LogButton>
      </HeaderLog>
    </Container>
  );
}

export default Header;
