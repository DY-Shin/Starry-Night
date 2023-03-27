import styled from 'styled-components';
import Slider from 'react-slick';

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
  overflow: hidden;
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
  border-top: 2px solid white;
  border-bottom: 2px solid white;
`;
