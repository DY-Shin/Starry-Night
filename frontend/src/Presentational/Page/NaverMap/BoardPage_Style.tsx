import styled from 'styled-components';

export const BoardPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const BoardTopHeader = styled.p`
  font-size: x-large;
  font-weight: 500;
  margin: 0;
`;

export const BoardTopHeaderLine = styled.hr`
  background-color: black;
  height: 1px;
  position: relative;
  width: calc(100% - 100px);
  transform: translate(100px, -14px);
  margin: 0;
`;
