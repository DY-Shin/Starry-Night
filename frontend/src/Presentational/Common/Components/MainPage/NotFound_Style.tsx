import styled from 'styled-components';

export const Back = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  background-repeat: no-repeat;
  position: relative;
  @media all and (max-width: 1200px) {
    flex-direction: column;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;

interface ImgProps {
  src: string;
}

export const AstImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  width: 450px;
  @media all and (max-width: 600px) {
    width: 300px;
  }
`;

export const TextImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  width: 700px;
  margin-left: 20px;
  @media all and (max-width: 600px) {
    width: 450px;
  }
`;

export const WrapLogo = styled.div`
  position: absolute;
  bottom: 50px;
  @media all and (max-width: 1200px) {
    top: 35px;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;
