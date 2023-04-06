import styled, { keyframes } from 'styled-components';

const backgroundColor = '#0e2f3f';

const fluidFill = (percent: number) => keyframes`
  0% {
    height: 0%;
  }
  100% {
    height: ${percent}%;
  }
`;

export const TemperTextWrapper = styled.div`
  margin: 60px 0 0 20px;
  color: white;
  font-size: 50px;
  font-weight: bold;
`;

export const TemperWrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 200px;
  background-color: ${backgroundColor};
  display: flex;

  box-shadow: 0 0 0 4px ${backgroundColor} inset, 0 0 0 8px #fff inset;

  margin: 10px 0 30px 0;
  cursor: default;
`;

export const ThermometerContainer = styled.div`
  width: 80px;
  height: 155px;
  display: block;
  position: relative;
  margin-left: 70px;
`;

export const Thermometer = styled.div`
  border: 5px solid #5c525f;
  border-bottom: transparent;
  box-sizing: border-box;
  display: block;
  position: absolute;
  z-index: 1;
  left: 14px;
  width: 24px;
  height: 100px;
  top: 21px;
  border-radius: 50px 50px 0 0;
  background: #fff;
`;

export const Base = styled.div`
  box-shadow: 0 0 0 5px #fff, 0 0 0 10px #5c525f;
  background: #ff3737;
  display: block;
  text-align: center;
  font-size: 14px;
  line-height: 60px;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

export const Stem = styled.div`
  background: #efefef;
  position: relative;
  display: block;
  width: 10px;
  height: 95px;
  border-radius: 10px 10px 0 0;
  margin: 5px auto;
`;

export const Fluid = styled.div<{ percent: number }>`
  background: #ff3737;
  display: block;
  width: 100%;
  height: 0%;
  border-radius: 25px 25px 0 0;
  position: absolute;
  bottom: 0;

  animation-name: ${(props) => fluidFill(props.percent)};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;
