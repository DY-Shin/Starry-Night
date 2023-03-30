import styled from 'styled-components';

interface ImgProps {
  src: string;
}

export const LoginImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  cursor: pointer;
  width: 70%;
  margin-top: 20px;
  &:hover {
    filter: opacity(0.8);
    /* border: px solid red; */
    border-radius: 10px;
  }
`;
