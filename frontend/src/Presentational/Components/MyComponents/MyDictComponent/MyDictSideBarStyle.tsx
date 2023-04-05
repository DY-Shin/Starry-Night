import styled from 'styled-components';

export const Container = styled.div`
  position: flex;
  height: 50%;
  color: #f0f0f0;
  /* background-color: darkorange; */
  opacity: 100%;
  display: flex;
  width: 10%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 4.5em;
  margin-right: 2.5em;
  a {
    text-decoration: none;
    color: #f0f0f0;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
`;

export const DictButton = styled.button`
  position: flex;
  display: flex;
  margin: 0.5vh;
  height: 50px;
  width: 120px;
  font-size: 120%;
  background-color: navy;
  color: #f0f0f0;
  align-items: center;
  justify-content: center;

  border-radius: 1vh;
`;
