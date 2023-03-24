import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 30px;
  height: 50px;
  /* background-color: #00429e; */
  width: 100%;
`;

export const HeaderNav = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  width: 60%;
`;

export const HeaderItem = styled.button`
  border-width: 0;
  border-color: black;
  background-color: #00429e;
  border-radius: 30pc;
  width: 400px;
  margin: 0 5%;
  &:hover {
    background-color: #009e3d;
  }
`;

export const HeaderText = styled.div`
  color: white;
  font-size: 200%;
`;
