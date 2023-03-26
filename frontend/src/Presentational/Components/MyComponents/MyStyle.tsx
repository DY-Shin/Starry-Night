import styled from 'styled-components';

export const Mypage = styled.div``;

export const Container = styled.div`
  width: 100%;
  height: 85vh;
`;

export const MyButton = styled.button`
  background-color: black;
  color: gold;
  border-style: solid;
  border-width: 1px;
  font-size: x-large;
  border-color: #746200;
  height: 50%;
  width: 200px;
`;

export const MyDia = styled.span`
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: pink;
  position: relative;
  top: -37px;
  :before {
    content: '';
    position: absolute;
    left: -10px;
    top: 37px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: pink;
  }
`;
