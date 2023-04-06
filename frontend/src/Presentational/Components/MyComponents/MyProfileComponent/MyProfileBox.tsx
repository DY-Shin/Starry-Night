import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
  height: 90vh;
  width: 100%;
  padding-top: 4rem;
`;

export const ProfileSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: white; */
  height: 90%;
  /* width: 50%; */
  flex-basis: 40%;
`;

export const ProfileButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: red; */
  height: 80%;
  width: 100%;
  flex-basis: 40%;
`;

interface ImgProps {
  src: string;
}

export const Photo = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
}))`
  width: 300px;
  height: 300px;
  display: flex;
  font-size: 1.5rem;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border-style: solid;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 7px 0px rgba(52, 152, 219, 0.8) inset, 0 0 7px 2px rgba(52, 152, 219);
`;

export const Nick = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  font-size: 3rem;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  background: #244170;
  border-radius: 10px;
  border-style: solid;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 7px 0px rgba(52, 152, 219, 0.8) inset, 0 0 7px 2px rgba(52, 152, 219);
`;

export const MyProfileContent = styled.div`
  display: flex;
  color: whitesmoke;
  align-items: center;
  justify-content: left;
  font-size: x-large;
  height: 50%;
  width: 200px;
`;

export const MyButton = styled(Link)`
  height: 75px;
  width: 250px;
  display: flex;
  font-size: 2rem;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-style: solid;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 7px 0px rgba(52, 152, 219, 0.8) inset, 0 0 7px 2px rgba(52, 152, 219);
  text-decoration: none;
  &:hover {
    box-shadow: 0 0 10px 5px rgba(52, 152, 219, 0.8) inset, 0 0 70px 2px rgba(52, 152, 219);
  }
`;
