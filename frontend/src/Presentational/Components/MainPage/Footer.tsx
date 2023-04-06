/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import * as FooterStyle from './Footer_Style';
import * as MainStyle from '../../Page/Main_Style';

function Footer() {
  return (
    <MainStyle.Container>
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
            <FooterStyle.FooterImg src="assets/footer/goindol.jpg" />
          </FooterStyle.PhotoPoem>
        </FooterStyle.WrapDognju>
        <FooterStyle.WrapFooter>
          <FooterStyle.FooterTeamName1>Guardians of the galaxy</FooterStyle.FooterTeamName1>
          <FooterStyle.FooterTeamName2>이희수 신동윤 임수민 김지훈 이정윤 이진성</FooterStyle.FooterTeamName2>
          <FooterStyle.WrapIcon>
            <FooterStyle.eLink to="https://edu.ssafy.com/edu/main/index.do">
              <FooterStyle.FooterFacebook />
            </FooterStyle.eLink>
            <FooterStyle.eLink to="https://edu.ssafy.com/edu/main/index.do">
              <FooterStyle.FooterInstagram />
            </FooterStyle.eLink>
            <FooterStyle.eLink to="https://edu.ssafy.com/edu/main/index.do">
              <FooterStyle.FooterTwitter />
            </FooterStyle.eLink>
            <FooterStyle.eLink to="https://edu.ssafy.com/edu/main/index.do">
              <FooterStyle.FooterYoutubr />
            </FooterStyle.eLink>
          </FooterStyle.WrapIcon>
          <FooterStyle.Copyright>2023 SSAFY D206 Starry night, All rights resevered.</FooterStyle.Copyright>
        </FooterStyle.WrapFooter>
      </FooterStyle.MainFooter>
    </MainStyle.Container>
  );
}

export default Footer;
