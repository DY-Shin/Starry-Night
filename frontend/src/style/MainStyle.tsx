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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media all and (max-width: 1024px) {
    background-color: pink;
    color: red;
  }
  @media all and (max-width: 768px) {
    background-color: blue;
    color: red;
  }
  @media all and (max-width: 500px) {
    background-color: yellow;
    color: red;
  }
`;

export const TopTitle = styled.div`
  font-size: 144px;
  @media all and (max-width: 1024px) {
    font-size: 144px;
    background-color: pink;
    color: red;
  }
  @media all and (max-width: 768px) {
    font-size: 84px;
    background-color: blue;
    color: red;
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
  padding-left: 4.5em;
  padding-right: 4.5em;
  color: white;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  border: 3px solid pink;
`;

export const EPLeftBox = styled.div`
  /* padding: 10px; */
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
`;

export const EPRightBox = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 18px;
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
`;

export const LPText1 = styled.div`
  /* flex-basis: 50%; */
`;

// star 슬라이드
export const MainStar = styled.div`
  border: 3px solid pink;
  color: white;
  padding-left: 4.5em;
  padding-right: 4.5em;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapSlideImg = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 3px solid white; */
  width: 1024px;
  height: 650px;
`;

export const WrapImg = styled(Slider)`
  padding: 5px;
  /* margin-right: 100px; */
  /* border: 3px solid blue; */
  /* object-fit: cover; */
`;

export const SelectedStar = styled.div`
  border: 3px solid blue;
  flex-grow: 1;
  /* height: 100px; */
  padding: 20px;

  background-color: rgba(50, 130, 184, 0.3); //#3282B8;
  border: 2px solid #0f4c75;
  border-radius: 10px;
`;

export const STImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  /* border: 3px solid red; */
  /* padding: 10px; */
  /* height: 100%; */
  /* width: 20vh;
  height: 20vh; */
  /* object-fit: cover; */
  /* padding: 10px; */
  height: 12rem;
  /* padding: 10px; */
  /* width: 100rem; */
  /* width: auto; */
  background-color: rgba(50, 130, 184, 0.3); //#3282B8;
  border: 2px solid #0f4c75;
  border-radius: 10px;
`;
