import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  margin-left: 4em;
  margin-right: 2.5em;
  margin-top: 4em;
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

export const DictButton = styled.div`
  position: flex;
  display: flex;
  /* margin: 0.5vh; */
  margin-bottom: 1.5rem;
  height: 50px;
  width: 120px;
  font-size: 120%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f0f0f0;
  /* color: black; */
  align-items: center;
  justify-content: center;

  border-radius: 1vh;
  border-color: rgba(52, 152, 219, 0.8);
  color: white;
  box-shadow: 0 0 7px 0px rgba(52, 152, 219, 0.8) inset, 0 0 7px 4px rgba(52, 152, 219);
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 5px rgba(52, 152, 219) inset, 0 0 0px 4px rgba(52, 152, 219);
  }
`;

export const MenuLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  /* &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  } */
  &.active {
    filter: drop-shadow(0 0 3px rgba(52, 152, 255, 1));
    cursor: default;
  }
`;
