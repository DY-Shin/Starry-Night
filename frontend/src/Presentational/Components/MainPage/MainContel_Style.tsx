import styled from 'styled-components';

// footer
export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  background-image: url('assets/mainpage/space.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  color: white;
`;

export const MainContel = styled.div`
  color: white;
  padding-left: 4.5em;
  padding-right: 4.5em;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  cursor: default;
  backdrop-filter: blur(0.4px);
  filter: drop-shadow(0 0 10px rgba(50, 130, 184, 1));
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;

export const WrapSlide = styled.div`
  width: 50vw;
  border: 3px solid #0f4c75;
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

export const WrapContel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapMenu = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  flex-basis: 33.4%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #0f4c75;
  cursor: pointer;
  &:hover {
    background-color: gray;
    opacity: 0.8;
  }
`;

export const Name = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #3282b8;
  filter: drop-shadow(0 0 10px rgba(50, 130, 184, 1));
`;

interface ImgProps {
  src: string;
}

export const TestImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))``;
