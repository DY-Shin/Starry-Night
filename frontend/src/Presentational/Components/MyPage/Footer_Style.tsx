import styled from 'styled-components';
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from 'react-icons/si';
import bg from '../../../assets/mainpage/space.jpg';

// footer
export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const MainFooter = styled.div`
  /* position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  color: white;
  background-color: black; */
  min-height: 100vh;
  padding-left: 8em;
  padding-right: 8em;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  color: white;
  display: flex;
  @media all and (max-width: 1200px) {
    padding-top: 30px;
  }
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
export const Copyright = styled.span`
  margin: 10px 0px;
  font-size: 10px;
`;

// 윤동주 별헤는밤
export const WrapDognju = styled.div`
  width: 100%;
  display: flex;
  /* flex-grow: 1 1; */
  flex-basis: 50 50;
  margin-top: 7.5%;
`;

export const Poem = styled.div`
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.25vw;
  padding-left: 8em;
`;

// 시 오른쪽에 느낌있는 사진
export const PhotoPoem = styled.div`
  display: flex;
  flex-basis: 50%;
  align-items: center;
  justify-content: center;
  padding-right: 8em;
`;

interface ImgProps {
  src: string;
}

export const FooterImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  height: 25vw;
  /* width: 40cw */
`;
