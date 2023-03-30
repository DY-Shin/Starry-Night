import styled from 'styled-components';

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
  @media all and (max-width: 600px) {
    width: 450px;
  }
`;

export const Back = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  background-repeat: no-repeat;
  @media all and (max-width: 1200px) {
    flex-direction: column;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;
