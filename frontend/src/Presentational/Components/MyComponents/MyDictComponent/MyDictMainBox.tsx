import React from 'react';
import { Container, FooterNav, FooterItem } from './MyDictMainBoxStyle';

function Footer() {
  return (
    <Container>
      <FooterNav>
        <FooterItem>북쪽</FooterItem>
        <FooterItem>봄철</FooterItem>
        <FooterItem>여름철</FooterItem>
        <FooterItem>가을철</FooterItem>
        <FooterItem>겨울철</FooterItem>
        <FooterItem>행성</FooterItem>
      </FooterNav>
    </Container>
  );
}

export default Footer;
