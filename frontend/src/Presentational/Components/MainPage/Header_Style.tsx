import styled from 'styled-components';
import { Link } from 'react-router-dom';

// header
export const MainNav = styled.div`
  height: 50px;
  display: flex;
  box-shadow: 0 5px 5px -5px white;
`;
export const WrapNav = styled.nav`
  width: 100%;
  max-width: 1050px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  color: white;
  margin: 0 auto;
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;

export const NavLogo = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;

export const NavLogin = styled.div`
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;

// 로그인 하고 보이는 유저 이미지 모양
export const NavLogOut = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* backdrop-filter: blur(0px); */
`;

interface ImgProps {
  src: string;
}

export const ProfileImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;

export const LogoImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  height: 27px;
  /* border-radius: 50%; */
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;

export const ProfileText = styled.div``;
