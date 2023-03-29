import styled from 'styled-components';
import { BiPowerOff } from 'react-icons/bi';

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  border-radius: 5px;
  width: 125px;
  top: 48px;
  height: 150px;
  font-size: 18px;
  background-color: white;
  color: black;
  z-index: 20;
  cursor: default;
  /* all: unset; */
  /* &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  } */
  @media all and (max-width: 1100px) {
    margin-right: 9vw;
  }
  @media all and (max-width: 768px) {
    margin-right: 11vw;
  }
  @media all and (max-width: 600px) {
    margin-right: 15vw;
  }
`;

interface ImgProps {
  src: string;
}

export const UserImg1 = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
`;
export const UserImg2 = styled(BiPowerOff)`
  margin-right: 5px;
`;

export const UserName = styled.div`
  padding-top: 10px;
`;

export const UserMenu1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: underline;
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;

export const UserMenu2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  &:hover {
    text-decoration: underline;
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;

export const UserMenuLine = styled.div`
  width: 99%;
  border: 1px solid gray;
`;
