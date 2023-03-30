import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% { transform: rotate(360deg); }
`;

export const RefreshButton = styled.div`
  position: absolute;
  background-color: #416dea;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  width: 210px;
  height: 50px;
  border-radius: 36px;
  z-index: 1;
  bottom: 20px;
  left: 45%;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 1fr;
  cursor: pointer;

  & .icon {
    /* margin-left: 5px; */
    margin: auto;
    color: #ffff;
    animation: ${rotate} 2s linear infinite;
  }
`;
export const RefreshText = styled.h4`
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin: 10px 0 10px 0;
  color: white;
`;
