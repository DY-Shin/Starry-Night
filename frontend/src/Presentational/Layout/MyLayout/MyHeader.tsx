import React from 'react';
import { Container, HeaderNav, HeaderItem } from './MyHeadStyle';

function Header() {
  return (
    <Container>
      <HeaderNav>
        <HeaderItem>도감</HeaderItem>
        <HeaderItem>내가 쓴 글</HeaderItem>
        <HeaderItem>업적</HeaderItem>
      </HeaderNav>
    </Container>
  );
}

export default Header;
