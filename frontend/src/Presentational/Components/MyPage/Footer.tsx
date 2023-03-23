import React from 'react';

// import { SiInstagram } from 'react-icons/si';
import * as MainStyle from '../../../style/MainStyle';

function Footer() {
  return (
    <MainStyle.MainFooter>
      <MainStyle.FooterTeamName1>Guardians of the galaxy</MainStyle.FooterTeamName1>
      <MainStyle.FooterTeamName2>이희수 신동윤 임수민 김지훈 이정윤 이진성</MainStyle.FooterTeamName2>
      {/* <div>Contact us</div>
      <div>asdf@naver.com</div> */}
      <MainStyle.WrapIcon>
        <MainStyle.FooterFacebook />
        <MainStyle.FooterInstagram />
        <MainStyle.FooterTwitter />
        <MainStyle.FooterYoutubr />
      </MainStyle.WrapIcon>
      {/* <SiInstagram /> */}
      <MainStyle.Copyright>2023 SSAFY D206 Starry night, All rights resevered.</MainStyle.Copyright>
    </MainStyle.MainFooter>
  );
}

export default Footer;
