import styled from 'styled-components';

export const DictMainBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  /* background-color: red; */
`;
export const DictItemBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 4.5em;
  /* background-color: blue; */
  flex-direction: column;
`;

export const DictSubBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: green; */
`;

export const BjrBox = styled.div`
  width: 150px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7bd6cd;
  /* background-color: purple; */
  flex-direction: column;
  &:hover {
    color: goldenrod;
    transition: all 2s;
    cursor: help;
  }
`;

export const BjrSymbol = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  background: #016040;
  border-radius: 50%;
  border-color: pink;
  border-width: 3px;
  border-style: solid;
`;

export const BjrName = styled.div`
  width: 140px;
  height: 70px;
  display: flex;
  font-size: 1.3rem;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  background: #016040;
  border-radius: 10px;
  border-color: purple;
  border-width: 3px;
  border-style: solid;
`;
