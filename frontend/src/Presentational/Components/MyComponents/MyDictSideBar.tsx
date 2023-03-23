import React from 'react';
import { Container, FooterNav, FooterItem } from './MyDictSideBarStyle';

function Footer() {
  return (
    <Container>
      <FooterNav>
        <FooterItem>Mappage</FooterItem>
        <FooterItem>Mainpage</FooterItem>
        <FooterItem>Mypage</FooterItem>
      </FooterNav>
    </Container>
  );
}

export default Footer;
