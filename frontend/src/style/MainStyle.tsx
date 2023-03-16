import styled from 'styled-components';
import bg from '../assets/mainpage/space.jpg';

// main page
export const Mainpage = styled.div`
  /* width: 100%;
  min-height: 100vh; */
`;
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
`;
// top 슬라이드
export const MainTop = styled.div`
  color: white;
  padding-left: 4.5em;
  padding-right: 4.5em;
  /* width: 100%; */
  min-height: 100vh;
  /* background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat; */
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid yellow;
`;
export const EPImgBox1 = styled.div`
  /* flex-basis: 50%; */
  padding: 10px;
  display: flex;
  align-items: center;
  /* width: auto; */
  height: 300px;
  background-color: rgba(50, 130, 184, 0.3); //#3282B8;
  border: 2px solid #0f4c75;
  border-radius: 10px;
`;

interface ImgProps {
  src: string;
}

export const ImgBox = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  /* flex-basis: 1000%; */
  /* width: 50px; */
  height: 100%;
`;

// 광공해 슬라이드
export const MainLightPollution = styled.div`
  color: white;
  padding-left: 4.5em;
  padding-right: 4.5em;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LPLeftBox = styled.div`
  flex-basis: 50%;
`;
export const LPRightBox = styled.div`
  flex-basis: 50%;
`;

export const LPImgBox = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  /* flex-basis: 1000%; */
  /* width: 50px; */
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LPBox1 = styled.div`
  padding: 10px;
  /* flex-basis: 50%; */
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
  border: 3px solid yellow;
  color: white;
  padding-left: 4.5em;
  padding-right: 4.5em;
  min-height: 100vh;
`;
