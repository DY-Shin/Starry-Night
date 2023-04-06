import styled from 'styled-components';

const textColor = '#d6d6d6e2';

export const BoardBottomWrapper = styled.div`
  width: 100%;
  height: 10%;
`;

export const BoardPostWrapper = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BoardTopHeader = styled.p`
  height: 10%;
  font-size: x-large;
  font-weight: 500;
  color: ${textColor};
  margin: 0;
`;

export const BoardPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: default;
`;
