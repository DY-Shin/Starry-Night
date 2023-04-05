import styled from 'styled-components';

export const SidBarBody = styled.div`
  /* background-color: white; */
  background-color: #222430;
  width: 350px;
  height: 100%;
  position: absolute;
  box-shadow: 0 0 0 1px #58585839 inset;
  top: 0;
  &.close {
    left: 0;
    transition: 500ms;
  }
  &.open {
    left: -350px;
    transition: 500ms;
  }
  z-index: 1;
  & * {
    font-family: 'PyeongChang-Bold', sans-serif; /* 새로운 코드 */
  }
  /* & .contentsArea {
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  } */
`;

export const SidBarContentsArea = styled.div`
  width: 100% - 20px;
  height: calc(100% - 387px);
  padding: 5px 10px 5px 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SidBarLine = styled.hr`
  margin: 0 0 5px 0;
  background-color: #646675;
  border: 0;
  height: 1px;
`;

export const FoldBtn = styled.div`
  position: absolute;
  /* background-color: white; */
  background-color: #222430;
  width: 30px;
  height: 60px;
  top: 45%;
  &.close {
    left: 350px;
    transition: 500ms;
  }
  &.open {
    left: 0px;
    transition: 500ms;
  }
  box-shadow: 0 0 0 1px #58585839 inset;
  :hover {
    cursor: pointer;
  }
  z-index: 1;
`;

export const FoldText = styled.p`
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 55px;
  color: #fad9f2;
`;
