import styled from 'styled-components';

export const InfoWrapper = styled.div`
  width: 100%;
`;

const textColor = '#f9fae9e1;';

export const InfoHeader = styled.p`
  font-size: x-large;
  font-weight: 600;
  color: ${textColor};
  margin: 0;
  &.fineDust {
    font-size: 22px;
    font-weight: 600;
    margin: 0;
  }
`;

export const InfoHeaderLine = styled.hr`
  background-color: ${textColor};
  height: 1px;
  position: relative;
  width: calc(100% - 100px);
  transform: translate(90px, -14px);
  margin: 0;
`;
