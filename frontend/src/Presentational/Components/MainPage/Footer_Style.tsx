import styled from 'styled-components';
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from 'react-icons/si';
import { Link } from 'react-router-dom';

// footer
export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  background-image: url('assets/mainpage/space.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const MainFooter = styled.div`
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  min-height: 100vh;
  padding-left: 8em;
  padding-right: 8em;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  color: white;
  display: flex;
  backdrop-filter: blur(0.4px);
  @media all and (max-width: 768px) {
    padding-left: 2em;
    padding-right: 2em;
  }
  @media all and (max-width: 500px) {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export const WrapFooter = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;

export const FooterTeamName1 = styled.div`
  margin-top: 20px;
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

export const eLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const Copyright = styled.span`
  margin: 10px 0px;
  font-size: 10px;
`;

// 윤동주 별헤는밤
export const WrapDognju = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 5rem;
`;

// 시
export const Poem = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.25vw;
  padding-left: 8em;
  cursor: default;
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 768px) {
    padding-left: 0px;
    flex-basis: 100%;
    font-size: 2.25vw;
  }
  @media all and (max-width: 500px) {
  }
`;

// 시 오른쪽에 느낌있는 사진
export const PhotoPoem = styled.div`
  display: flex;
  flex-basis: 50%;
  align-items: center;
  justify-content: center;
  padding-right: 8em;

  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 768px) {
    display: none;
    padding-right: 0px;
  }
  @media all and (max-width: 500px) {
  }
`;

interface ImgProps {
  src: string;
}

export const FooterImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  height: 25vw;
  border-style: solid;
  border-radius: 10px;
  border-color: whitesmoke;
  box-shadow: 0 0 7px 0px rgba(52, 152, 219, 0.8) inset, 0 0 70px 2px rgba(52, 152, 219);
`;
