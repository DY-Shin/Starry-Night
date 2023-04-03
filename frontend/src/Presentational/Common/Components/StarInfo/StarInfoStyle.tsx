import styled from 'styled-components';
import Slider from 'react-slick';

export const StarInfoContainer = styled.div`
  width: 200vw;
  height: 200vh;
  display: flex;
  align-items: center;
  justify-content: middle;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StarInfoBox = styled.dialog`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #330033;
  z-index: 10000;
`;

export const StarInfoTitle = styled.div`
  width: 400px;
  height: 60px;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: center;
  color: floralwhite;
`;
export const StarInfoPhoto = styled.div`
  width: 400px;
  height: 240px;
  background-color: blue;
`;

export const WrapImg = styled(Slider)`
  margin: 0 5px;
`;

export const StarInfoDescription = styled.div`
  width: 400px;
  height: 120px;
  border-top: solid 3px grey;
  border-bottom: solid 1.5px grey;
  box-sizing: border-box;
  overflow: auto;
  white-space: normal;
  word-break: break-all;
`;
export const StarInfoManual = styled.div`
  width: 400px;
  height: 120px;
  border-top: solid 1.5px grey;
  border-bottom: solid 3px grey;
  box-sizing: border-box;
  overflow: auto;
  white-space: normal;
  word-break: break-all;
`;
export const StarInfoEtc = styled.div`
  width: 400px;
  height: 60px;
  background-color: red;
`;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
`;
