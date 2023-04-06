import styled, { keyframes } from 'styled-components';

const backgroundColor = '#0e2f3f';
const backgroundColor2 = '#0e2f3f';
const waterColor = '#5bd5fa';

export const moveTop = (percent: number) => keyframes`
  0% {
    top: 100%;
  }
  100% {
    top: ${percent}%;
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

export const HumidityWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin: 10px 0 30px 0;
  cursor: default;
`;

export const StyledLoader = styled.div<{ percent: number }>`
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: ${backgroundColor};
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 0 0 0 4px ${backgroundColor} inset, 0 0 0 8px #fff inset;

  svg {
    height: 282px;
    z-index: 10001;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-44%, -45%);

    #rect4487 {
      fill: ${backgroundColor2};
    }
  }

  .loader {
    height: 90px;
    width: 85px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    border-radius: 50%;
    left: -20%;
    top: 26px;
  }

  .water {
    background: ${waterColor};
    position: relative;
    top: 50%;
    height: 200%;
    width: 200%;
    z-index: 1000;
    border-radius: 38%;
    left: -30%;
    transform: rotate(360deg);
    transition: all 1s ease;
    animation: ${wave} 10s linear infinite, ${(props) => moveTop(props.percent)} 2s linear forwards;
  }
`;

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
