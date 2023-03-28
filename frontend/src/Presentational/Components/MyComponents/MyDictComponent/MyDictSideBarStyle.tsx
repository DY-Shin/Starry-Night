import styled from 'styled-components';

export const Container = styled.div`
  position: flex;
  height: 50%;
  color: #f0f0f0;
  /* background-color: darkorange; */
  opacity: 100%;
  width: 10%;
  flex-direction: column;
  justify-content: center;
  margin-left: 4em;
`;

export const DictItem = styled.div`
  position: flex;
  display: flex;
  margin: 0.5vh;
  height: 5vh;
  font-size: 100%;
  background-color: navy;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;

  border-radius: 1vh;
`;
