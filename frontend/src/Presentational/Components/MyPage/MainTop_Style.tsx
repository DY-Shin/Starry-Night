import styled from 'styled-components';

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
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 850px) {
    font-size: 84px;
  }
  @media all and (max-width: 500px) {
    font-size: 72px;
  }
`;

export const TopMap = styled.div`
  margin-top: 20px;
  border: 1px solid white;
  padding: 20px;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;
