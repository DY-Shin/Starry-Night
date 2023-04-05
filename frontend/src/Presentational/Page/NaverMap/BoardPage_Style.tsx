import styled from 'styled-components';

const textColor = '#d6d6d6e2';

export const BoardPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const BoardTopHeader = styled.p`
  font-size: x-large;
  font-weight: 500;
  color: ${textColor};
  margin: 0;
`;

export const BoardPostWrapper = styled.div`
  width: 100%;
  height: 85%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BoardTopHeaderLine = styled.hr`
  background-color: black;
  height: 1px;
  position: relative;
  width: calc(100% - 100px);
  transform: translate(100px, -14px);
  margin: 0;
`;
