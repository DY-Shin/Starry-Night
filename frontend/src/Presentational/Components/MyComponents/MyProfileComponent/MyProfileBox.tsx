import styled from 'styled-components';

export const ProfileMainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: black; */
  height: 90vh;
  width: 100%;
`;

export const ProfileSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: white; */
  height: 90%;
  width: 50%;
`;

export const ProfileButtonContainer = styled.div`
  color: gold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: red; */
  height: 80%;
  width: 90%;
`;

export const Photo = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  font-size: 1.5rem;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  background: #016040;
  border-radius: 50%;
  border-color: pink;
  border-width: 3px;
  border-style: solid;
`;

export const Nick = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  font-size: 1.5rem;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  background: #016040;
  border-radius: 10px;
  border-color: purple;
  border-width: 3px;
  border-style: solid;
`;

export const MyProfileContent = styled.div`
  display: flex;
  color: gold;
  align-items: center;
  justify-content: left;
  font-size: x-large;
  height: 50%;
  width: 200px;
`;
