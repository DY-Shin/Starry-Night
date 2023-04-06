import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MyNav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyNavContainer = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  /* a {
    text-decoration: none;
    color: gold;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  } */
`;

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
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;

export const MenuSet = styled.ul`
  text-decoration: none;
  list-style: none;
`;

export const Menu = styled.li`
  float: left;
  margin-right: 15px;
  /* color: white;
  text-decoration: none; */
`;

export const MenuLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
  &.active {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
    cursor: default;
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
  margin-left: 20px;
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

export const ToMap = styled.div`
  color: #fff;
  height: 28px;
  width: 28px;
  background-color: #f23;
`;

export const ProfileText = styled.div``;
