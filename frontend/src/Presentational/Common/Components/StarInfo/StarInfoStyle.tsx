import styled from 'styled-components';
import Slider from 'react-slick';

export const StarInfoContainer = styled.div`
  width: 200vw;
  height: 200vh;
  display: flex;
  align-items: center;
  justify-content: middle;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
export const StarInfoContainer2 = styled.div`
  width: 200vw;
  height: 200vh;
  display: flex;
  align-items: center;
  justify-content: middle;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const StarInfoBox = styled.dialog`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: rgba(15, 76, 120, 1);
  z-index: 1000;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 1));
`;

export const StarInfoTitle = styled.div`
  width: 500px;
  height: 60px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: floralwhite;
  filter: drop-shadow(0 0 2px #0f4c75);
`;
export const StarInfoPhoto = styled.div`
  width: 500px;
  height: 240px;
  background-color: blue;
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
`;

export const WrapImg = styled(Slider)`
  margin: 0 5px;
`;

export const StarInfoDescription = styled.div`
  padding: 0 15px;
  width: 500px;
  height: 120px;
  border-top: solid 3px grey;
  border-bottom: solid 1.5px grey;
  box-sizing: border-box;
  overflow: auto;
  white-space: normal;
  word-break: break-all;
  color: floralwhite;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(50, 130, 184, 1);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #0f4c75;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
export const StarInfoManual = styled.div`
  padding: 0 15px;
  width: 500px;
  height: 120px;
  border-top: solid 1.5px grey;
  border-bottom: solid 3px grey;
  box-sizing: border-box;
  overflow: auto;
  white-space: normal;
  word-break: break-all;
  color: floralwhite;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(50, 130, 184, 1);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #0f4c75;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
export const StarInfoEtc = styled.div`
  padding: 10px 15px 0;
  width: 500px;
  height: 60px;
  color: floralwhite;
`;

export const Backdrop = styled.div`
  width: 200vw;
  height: 200vh;
  position: fixed;
  top: 0;
  z-index: 999;
`;

export const filter = styled.div`
  padding: 4px 0px;
  font-size: 1.5rem;
  filter: drop-shadow(0 0 1.4px rgba(255, 255, 255, 1));
  /* font-weight: bold; */
`;
