import styled from 'styled-components';
import Slider from 'react-slick';
import bg from '../assets/mainpage/space.jpg';
// import bg from '../../public/assets/mainpage/space.jpg';

// main page
export const Mainpage = styled.div``;
export const Container = styled.div`
  width: 100%;
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
`;

// Explain 슬라이드
export const MainExplain = styled.div`
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
  font-size: 48px;
  @media all and (max-width: 1200px) {
    font-size: 48px;
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
  font-size: 24px;
  @media all and (max-width: 1200px) {
    font-size: 24px;
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
  width: 600px;
  height: 500px;
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
  height: 350px;
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
  font-size: 48px;
  @media all and (max-width: 1200px) {
    font-size: 48px;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
    font-size: 36px;
  }
`;

export const LPText2 = styled.span`
  font-size: 24px;
  @media all and (max-width: 1200px) {
    font-size: 24px;
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
    width: 60vw;
  }
  @media all and (max-width: 500px) {
    width: 60vw;
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
