import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GoTelescope } from 'react-icons/go';

// top 슬라이드
export const MainTop = styled.div`
  color: white;
  padding-left: 4.5em;
  padding-right: 4.5em;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  backdrop-filter: blur(0.4px);
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;

export const TopTitle = styled.div`
  font-size: 144px;
  cursor: default;
  font-family: 'InkLipquid';
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 850px) {
    font-size: 80px;
  }
  @media all and (max-width: 500px) {
    font-size: 72px;
  }
`;

export const TopMap = styled(Link)`
  margin-top: 20px;
  /* border: 1px solid white; */
  padding: 20px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;

export const telescope = styled(GoTelescope)`
  margin-right: 5px;
`;
