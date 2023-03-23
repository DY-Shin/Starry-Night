import styled from 'styled-components';
import Slider from 'react-slick';
// import { Link } from 'react-router-dom';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from 'react-icons/si';
import bg from '../assets/mainpage/space.jpg';
// import bg from '../../public/assets/mainpage/space.jpg';

// header
export const MainNav = styled.div`
  height: 50px;
  /* margin: 0 auto; */
  /* padding: 0 2px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
`;
export const WrapNav = styled.nav`
  width: 100%;
  max-width: 1000px;
  /* width: 85%; */
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  color: white;
  margin: 0 auto;
  /* background-color: #ffffff; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  @media all and (max-width: 1200px) {
    /* width: 600px; */
  }
  @media all and (max-width: 768px) {
    /* width: 600px; */
  }
  @media all and (max-width: 500px) {
    /* width: 600px; */
  }
`;

export const NavLogo = styled.div`
  /* flex-grow: 1; */
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;
export const NavLogin = styled.div`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;
// main page
export const Mainpage = styled.div`
  overflow-x: hidden; // 가로 스크롤 숨기기
  /* overflow-y: auto; */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(187, 23, 23, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 13, 13, 0.3);
    border-radius: 6px;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  max-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
`;

// top 슬라이드
export const MainTop = styled.div`
  color: white;
  padding-left: 4.5em;
  padding-right: 4.5em;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;

export const TopTitle = styled.div`
  font-size: 144px;
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 850px) {
    font-size: 84px;
  }
  @media all and (max-width: 500px) {
    font-size: 72px;
  }
`;

export const TopMap = styled.div`
  margin-top: 20px;
  border: 1px solid white;
  padding: 20px;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;

// Explain 슬라이드
export const MainExplain = styled.div`
  background-color: red;
  min-height: 100vh;
  padding-left: 8em;
  padding-right: 8em;
  color: white;
  display: flex;
  @media all and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
  }
  @media all and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding-left: 2em;
    padding-right: 2em;
  }
  @media all and (max-width: 500px) {
    justify-content: center;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export const EPLeftBox = styled.div`
  /* padding: 10px; */
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3rem;
  @media all and (max-width: 1200px) {
    display: none;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;
export const EPLeftBox2 = styled.div`
  /* padding: 10px; */
  flex-basis: 50%;
  display: none;
  flex-direction: column;
  justify-content: center;
  @media all and (max-width: 1200px) {
    display: flex;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;

export const EPText1 = styled.p`
  font-weight: bold;
  font-size: 44px;
  @media all and (max-width: 1200px) {
    font-size: 44px;
    /* color: red; */
    margin-left: 0;
  }
  @media all and (max-width: 768px) {
    /* font-size: 3vw; */
    /* color: blue; */
  }
  @media all and (max-width: 500px) {
    /* color: yellow; */
    font-size: 36px;
  }
`;
export const EPText2 = styled.span`
  font-weight: bold;
  font-size: 22px;
  @media all and (max-width: 1200px) {
    font-size: 22px;
    /* color: red; */
    margin-left: 0;
  }
  @media all and (max-width: 768px) {
    /* font-size: 3vw; */
    /* color: blue; */
  }
  @media all and (max-width: 500px) {
    /* color: yellow; */
    font-size: 18px;
  }
`;

export const EPRightBox = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;

export const EPImgBox1 = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 400px;
  background-color: rgba(50, 130, 184, 0.3); //#3282B8;
  border: 2px solid #0f4c75;
  border-radius: 10px;
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 768px) {
    width: 450px;
    height: 400px;
  }
  @media all and (max-width: 500px) {
    width: 250px;
    height: 200px;
  }
`;

interface ImgProps {
  src: string;
}

// 광공해 슬라이드
export const MainLightPollution = styled.div`
  color: white;
  padding-left: 4.5em;
  padding-right: 4.5em;
  min-height: 100vh;
  display: flex;
  @media all and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;

export const LPLeftBox = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
`;

export const LPRightBox = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LPImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  /* width: 100%; */
  height: 100%;
  /* object-fit: cover; */
`;

export const LPImgBox1 = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  height: 300px;
  background-color: rgba(50, 130, 184, 0.3); //#3282B8;
  border: 2px solid #0f4c75;
  border-radius: 10px;
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 768px) {
    height: 250px;
  }
  @media all and (max-width: 500px) {
    height: 150px;
  }
`;

export const LPText1 = styled.p`
  font-size: 44px;
  @media all and (max-width: 1200px) {
    font-size: 44px;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
    font-size: 36px;
  }
`;

export const LPText2 = styled.span`
  font-size: 22px;
  @media all and (max-width: 1200px) {
    font-size: 22px;
  }
  @media all and (max-width: 768px) {
    font-size: 24px;
  }
  @media all and (max-width: 500px) {
    font-size: 18px;
  }
`;

// star 슬라이드
export const MainStar = styled.div`
  color: white;
  padding-left: 4.5em;
  padding-right: 4.5em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapSlide = styled.div`
  width: 60vw;
  margin-top: 1rem;
  @media all and (max-width: 1200px) {
    width: 60vw;
  }
  @media all and (max-width: 768px) {
    width: 70vw;
  }
  @media all and (max-width: 500px) {
    width: 70vw;
  }
`;

export const WrapImg = styled(Slider)`
  margin: 0 5px;
`;

export const STimg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 100%;
  border-top: 2px solid #0f4c75;
  border-bottom: 2px solid #0f4c75;
`;

export const STimg2 = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 100%;
  border-top: 2px solid yellow;
  border-bottom: 2px solid yellow;
`;

// 스크롤 맨 위로 올리는 버튼
export const ScrollTop = styled(BsArrowUpCircleFill)`
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 1;
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

// footer
export const MainFooter = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  color: white;
  background-color: black;
`;
export const FooterTeamName1 = styled.div`
  margin-top: 12px;
  font-size: 36px;
  color: white;
`;
export const FooterTeamName2 = styled.div`
  margin-top: 12px;
  color: white;
`;

export const WrapIcon = styled.div`
  margin-top: 12px;
  display: flex;
  width: 240px;
  justify-content: space-between;
`;
export const FooterFacebook = styled(SiFacebook)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const FooterInstagram = styled(SiInstagram)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const FooterTwitter = styled(SiTwitter)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const FooterYoutubr = styled(SiYoutube)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const Copyright = styled.span`
  font-size: 10px;
  position: absolute;
  bottom: 5px;
`;
