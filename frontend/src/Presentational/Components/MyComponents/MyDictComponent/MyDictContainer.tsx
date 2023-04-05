import styled from 'styled-components';
import { BsFillPatchCheckFill } from 'react-icons/bs';

export const WrapConstellations = styled.div`
  flex-basis: 75%;
  position: relative;
  display: grid;
  justify-content: stretch;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 2em;
  column-gap: 2em;
  margin-top: 2em;
`;

// 페이지 네이션
export const WrapPagination = styled.ul`
  position: absolute;
  left: 47.5%;
  transform: translateX(-47.5%);
  bottom: -4rem;
  list-style: none;
  z-index: -1;
`;

// 가려는 페이지
export const CurrentPage = styled.li`
  color: white;
  text-decoration: none;
  float: left;
  margin: 0 10px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 7px 0px rgba(52, 152, 219, 0.8) inset, 0 0 7px 2px rgba(52, 152, 219);
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(52, 152, 219, 0.8);
  }
`;
// 지금 있는 페이지
export const MatchCurrentPage = styled.li`
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 0 7px 0px rgba(52, 152, 219, 0.8) inset, 0 0 7px 2px rgba(52, 152, 219);
  filter: drop-shadow(0 0 3px rgba(52, 152, 255, 1));
  text-decoration: none;
  float: left;
  margin: 0 10px;
  padding: 10px;
  cursor: pointer;
`;

export const DictMainBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DictItemBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 4.5em;
  flex-direction: column;
`;

export const DictSubBox = styled.div`
  width: 1000px;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: green; */
`;

export const BjrBox = styled.div`
  position: relative;
  width: 150px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: goldenrod;
  flex-direction: column;
  &:hover {
    color: goldenrod;
    transition: all 1s;
    cursor: help;
  }
`;

export const BjrSymbol = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(50, 130, 184, 0.7);
  border-color: #0f4c75;
  border-radius: 50%;
  border-width: 3px;
  border-style: solid;
  margin-bottom: 10px;
  /* filter: drop-shadow(0 0 2px #0f4c75); */
`;

export const Check = styled(BsFillPatchCheckFill)`
  position: absolute;
  /* top: 5px; */
  bottom: 35%;
  right: 20px;
`;

export const BjrName = styled.div`
  width: 170px;
  height: 50px;
  display: flex;
  font-size: 1.2rem;
  color: black;
  align-items: center;
  justify-content: center;
  background-color: rgba(50, 130, 184, 0.7);
  border-color: #0f4c75;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  /* filter: drop-shadow(0 0 2px #0f4c75); */
`;

export const FalseBjrSymbol = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  background-color: rgba(50, 130, 184, 0.7);
  border-color: #0f4c75;
  border-radius: 50%;
  border-width: 3px;
  border-style: solid;
  margin-bottom: 10px;
  /* filter: drop-shadow(0 0 2px #0f4c75); */
`;

export const FalseBjrName = styled.div`
  width: 170px;
  height: 50px;
  display: flex;
  font-size: 1.2rem;
  color: black;
  align-items: center;
  justify-content: center;
  background-color: rgba(50, 130, 184, 0.7);
  border-color: #0f4c75;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  /* filter: drop-shadow(0 0 2px #0f4c75); */
  /* padding: 0px 5px; */
`;
