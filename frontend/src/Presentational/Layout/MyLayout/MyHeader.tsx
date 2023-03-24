import React from 'react';
import { Container, HeaderNav, HeaderItem, HeaderText } from './MyHeadStyle';

function Header() {
  return (
    <Container>
      <HeaderNav>
        <HeaderItem>
          <HeaderText>내 도감</HeaderText>
        </HeaderItem>
        <HeaderItem>
          <HeaderText>내가 쓴 글</HeaderText>
        </HeaderItem>
        <HeaderItem>
          <HeaderText>내 수집품</HeaderText>
        </HeaderItem>
      </HeaderNav>
    </Container>
  );
}

export default Header;
