import styled from 'styled-components';

export const FoldBtn = styled.div`
  width: 30px;
  height: 60px;
  position: absolute;
  top: 45%;
  background-color: #222430;
  box-shadow: 0 0 0 1px #58585839 inset;
  z-index: 1;

  :hover {
    cursor: pointer;
  }

  &.close {
    left: 350px;
    transition: 500ms;
  }

  &.open {
    left: 0px;
    transition: 500ms;
  }
`;

export const FoldText = styled.p`
  width: 100%;
  height: 100%;
  margin: 0;
  color: #fad9f2;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 55px;
`;

export const SidBarBody = styled.div`
  width: 350px;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: #222430;
  z-index: 1;

  & * {
    font-family: 'PyeongChang-Bold', sans-serif;
  }

  &.close {
    left: 0;
    transition: 500ms;
  }

  &.open {
    left: -350px;
    transition: 500ms;
  }
`;

export const SidBarContentsArea = styled.div`
  width: 100% - 20px;
  height: calc(60% - 20px);
  margin: 0 10px 0 10px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
