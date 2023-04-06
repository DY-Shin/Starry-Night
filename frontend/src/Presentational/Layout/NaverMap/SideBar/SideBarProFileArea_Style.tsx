import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 20%;
  background-color: white;
  background-image: url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-size: cover;
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 20%;
  background-color: #00000062;
  display: flex;
  justify-content: end;

  & .icon {
    margin: 2px 10px 0 0;
    cursor: pointer;
    color: white;
  }
`;

export const TopHomeLink = styled(Link)`
  margin: 0;
  color: white;
`;

export const MiddleWrapper = styled.div`
  width: 100%;
  height: 50%;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: 50px;
`;

export const BottomNameText = styled.p`
  margin: 0;
  margin-left: 30px;
  color: white;
  font-size: large;
  font-weight: bold;
  text-align: left;
  text-shadow: 2px 2px 2px gray;
  line-height: 60px;

  :hover {
    cursor: default;
  }
`;
