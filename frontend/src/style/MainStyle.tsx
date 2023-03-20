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
`;

export const TopTitle = styled.div`
  font-size: 16vh;
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

export const EPImgBox1 = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20em;
  height: 30em;
  background-color: rgba(50, 130, 184, 0.3); //#3282B8;
  border: 2px solid #0f4c75;
  border-radius: 10px;
`;

export const EPBox1 = styled.div`
  padding: 10px;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
`;

export const WrapSlide = styled.div`
  transform: rotate(-3deg);
`;

export const WrapImg = styled(Slider)`
  /* height: 100%;
  width: 100%; */
  justify-content: center;
  align-items: center;
  /* transform: rotate(10deg); */
  /* position: relative; */
  /* background-color: red; */
`;

interface ImgProps {
  src: string;
}

export const ImgBox = styled.img.attrs((props) => ({
  src: props.src,
}))`
  padding: 10px;
  /* width: 20vh;
  height: 20vh; */
  /* object-fit: cover; */
`;

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
  align-items: center;
`;

export const LPImgBox = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  /* width: 100%; */
  height: 100%;
  object-fit: cover;
`;

export const LPBox1 = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  width: auto;
  height: 300px;
  background-color: rgba(50, 130, 184, 0.3); //#3282B8;
  border: 2px solid #0f4c75;
  border-radius: 10px;
`;

export const LPText1 = styled.div`
  flex-basis: 50%;
`;

// star 슬라이드
export const MainStar = styled.div`
  border: 3px solid pink;
  color: white;
  padding-left: 4.5em;
  padding-right: 4.5em;
  min-height: 100vh;
`;
