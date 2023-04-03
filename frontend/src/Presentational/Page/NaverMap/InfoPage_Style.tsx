import styled from 'styled-components';

export const InfoWrapper = styled.div`
  width: 100%;
`;

export const InfoHeader = styled.p`
  font-size: x-large;
  font-weight: 500;
  margin: 0;
`;

export const InfoHeaderLine = styled.hr`
  background-color: black;
  height: 1px;
  position: relative;
  width: calc(100% - 100px);
  transform: translate(90px, -14px);
  margin: 0;
`;
