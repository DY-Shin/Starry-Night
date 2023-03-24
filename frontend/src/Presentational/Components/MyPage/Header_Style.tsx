import styled from 'styled-components';
import { Link } from 'react-router-dom';

// header
export const MainNav = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
`;
export const WrapNav = styled.nav`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
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

export const NavLogo = styled.div`
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;
export const NavLogin = styled(Link)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;
