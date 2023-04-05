import styled, { keyframes } from 'styled-components';

const backgroundColor = '#0e2f3f';

const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;
export const SkyText = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  transform: translateY(-20px);
`;
export const SkyWrapper = styled.div`
  /* position: fixed; */
  /* position: relative; */
  border-radius: 10px;
  width: 100%;
  height: 200px;
  /* z-index: 1000; */
  /* background-color: #007dc5; */
  background-color: ${backgroundColor};
  /* background-color: #ffffff; */
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 0 30px 0;

  box-shadow: 0 0 0 4px ${backgroundColor} inset, 0 0 0 8px #fff inset;

  & .icon {
    color: white;
    width: 100px;
    height: 100px;
    position: relative;
    margin: auto;
    animation: ${moveUpDown} 2s infinite;
  }
`;
