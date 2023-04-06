import styled from 'styled-components';

export const WrapLogin = styled.div`
  width: 100%;
  margin-top: 15px;
`;

interface ImgProps {
  src: string;
}

export const LoginImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  cursor: pointer;
  width: 100%;
  /* margin-top: 10px; */
  &:hover {
    filter: opacity(0.8);
    /* border: px solid red; */
    border-radius: 10px;
  }
`;
