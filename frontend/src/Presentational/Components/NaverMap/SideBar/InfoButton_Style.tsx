import styled, { keyframes } from 'styled-components';

const buttonColor = '#222430;';

export const ButtonBody = styled.div`
  position: absolute;
  background-color: ${buttonColor};
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  width: 210px;
  height: 50px;
  border-radius: 36px;
  z-index: 1;
  bottom: 20px;
  left: 45%;
  cursor: pointer;
`;
export const ButtonText = styled.h4`
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin: 12px 0 10px 0;
  font-size: 18px;
  text-align: center;
  color: white;
`;
