import React from 'react';
// import * as MainStyle from '../../../style/MainStyle';
import * as FooterStyle from './Footer_Style';

function Footer() {
  return (
    <FooterStyle.MainFooter>
      <FooterStyle.FooterTeamName1>Guardians of the galaxy</FooterStyle.FooterTeamName1>
      <FooterStyle.FooterTeamName2>이희수 신동윤 임수민 김지훈 이정윤 이진성</FooterStyle.FooterTeamName2>
      <FooterStyle.WrapIcon>
        <FooterStyle.FooterFacebook />
        <FooterStyle.FooterInstagram />
        <FooterStyle.FooterTwitter />
        <FooterStyle.FooterYoutubr />
      </FooterStyle.WrapIcon>
      {/* <SiInstagram /> */}
      <FooterStyle.Copyright>2023 SSAFY D206 Starry night, All rights resevered.</FooterStyle.Copyright>
    </FooterStyle.MainFooter>
  );
}

export default Footer;
