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
  height: 50px;
  width: 200px;
`;

export const MyDia = styled.span`
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: pink;
  position: relative;
  top: -36px;
  :before {
    content: '';
    position: absolute;
    left: -10px;
    top: 36px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: pink;
  }
`;

export const MyStar = styled.span`
  margin: 0px 0;
  margin-left: 3px;
  margin-right: 3px;
  bottom: 5px;
  position: flex;
  display: flex;
  color: gold;
  width: 0px;
  height: 0px;
  border-right: 10px solid transparent;
  border-bottom: 7px solid gold;
  border-left: 10px solid transparent;
  border-radius: 5px;
  transform: rotate(180deg);
  :before {
    position: absolute;
    display: block;
    color: gold;
    top: 0px;
    left: -10px;
    width: 0px;
    height: 0px;
    border-right: 10px solid transparent;
    border-bottom: 7px solid gold;
    border-left: 10px solid transparent;
    border-radius: 5px;
    transform: rotate(75deg);
    content: '';
  }
  :after {
    position: absolute;
    display: block;
    color: gold;
    top: 0px;
    left: -10px;
    width: 0px;
    height: 0px;
    border-right: 10px solid transparent;
    border-bottom: 7px solid pink;
    border-left: 10px solid transparent;
    border-radius: 5px;
    transform: rotate(-70deg);
    content: '';
  }
`;
