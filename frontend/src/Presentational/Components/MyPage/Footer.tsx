import React from 'react';
// import * as MainStyle from '../../../style/MainStyle';
import * as FooterStyle from './Footer_Style';
// import * as MainStyle from '../../../style/MainStyle';
import goindol from '../../../assets/footer/goindol.jpg';

function Footer() {
  return (
    <FooterStyle.Container>
      <FooterStyle.MainFooter>
        <FooterStyle.WrapDognju>
          <FooterStyle.Poem>
            <p>그러나 겨울이 지나고 </p>
            <p>나의 별에도 봄이 오면 </p>
            <p>무덤 위에 파란 잔디가 피어나듯이</p>
            <p>내 이름자 묻힌 언덕 위에도</p>
            <p>자랑처럼 풀이 무성할 거외다.</p>
          </FooterStyle.Poem>
          <FooterStyle.PhotoPoem>
            <FooterStyle.FooterImg src={goindol} />
          </FooterStyle.PhotoPoem>
        </FooterStyle.WrapDognju>
        <FooterStyle.WrapFooter>
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
        </FooterStyle.WrapFooter>
      </FooterStyle.MainFooter>
    </FooterStyle.Container>
  );
}

export default Footer;
