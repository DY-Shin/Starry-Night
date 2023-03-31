import styled from 'styled-components';

// 광공해 슬라이드
export const MainLightPollution = styled.div`
  color: white;
  padding-left: 4.5em;
  padding-right: 4.5em;
  min-height: 100vh;
  display: flex;
  overflow: hidden;

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
  justify-content: center;
  padding-left: 1rem;
  @media all and (max-width: 1200px) {
    padding-left: 0em;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;

export const LPRightBox = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;
  @media all and (max-width: 1200px) {
    padding-left: 0em;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;

interface ImgProps {
  src: string;
}

export const LPImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  height: 100%;
  border-radius: 10px;
`;

export const LPImgBox1 = styled.div`
  /* padding: 10px; */
  display: flex;
  align-items: center;
  height: 300px;
  /* background-color: rgba(50, 130, 184, 0.3); //#3282B8; */
  /* border: 2px solid #0f4c75; */

  filter: drop-shadow(0 0 10px rgba(50, 130, 184, 1));
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
  font-weight: bold;
  font-size: 39px;
  @media all and (max-width: 1200px) {
    font-size: 39px;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
    font-size: 36px;
  }
`;

export const LPText2 = styled.span`
  font-size: 19px;
  @media all and (max-width: 1200px) {
    font-size: 20px;
  }
  @media all and (max-width: 768px) {
    font-size: 20px;
  }
  @media all and (max-width: 500px) {
    font-size: 18px;
  }
`;
