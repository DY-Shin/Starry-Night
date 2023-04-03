import styled, { keyframes } from 'styled-components';

export const PercentText = styled.p`
  position: relative;
  margin: 0;
  width: 0;
  height: 0;
  color: white;
  font-size: 50px;
  font-weight: bold;
  transform: translate(180px, -80px);
`;

export const HumidityWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 10px;
  /* border: 1px solid #858585a0 double; */
`;

export const moveTop = keyframes`
  0% {
    top: 100%;
  }
  100% {
    top: 20%;
  }
`;

export const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  /* position: fixed; */
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  /* background-color: #007dc5; */
  background-color: #149be9;
  /* background-color: #ffffff; */
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 0 0 0 4px #149be9 inset, 0 0 0 8px #fff inset;

  svg {
    height: 282px;
    z-index: 10001;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-44%, -45%);

    #rect4487 {
      fill: #149be9;
      /* fill: #ffffff; */
    }
  }

  .loader {
    height: 100px;
    width: 87px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    border-radius: 50%;
    left: -20%;
    top: 20px;
  }

  .water {
    background: white;
    /* background: #007dc5; */
    position: relative;
    top: 50%;
    height: 200%;
    width: 200%;
    z-index: 1000;
    border-radius: 38%;
    left: -30%;
    transform: rotate(360deg);
    transition: all 1s ease;
    animation: ${wave} 10s linear infinite, ${moveTop} 2s linear forwards;
  }
`;
