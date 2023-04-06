import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileImageWrapper = styled.div`
  width: calc(100%-5px);
  height: 100%;
  padding: 5px;
`;

export const ProfileBorderDiv = styled.div`
  width: 40%;
  height: 100%;
`;

export const ProfileImageBorder = styled.div`
  width: 70px;
  height: 70px;
  margin: auto;
  transform: translateY(8px);
  border: 2px solid white;
  border-radius: 50%;
`;

export const ProfileMypageLink = styled(Link)`
  cursor: pointer;
`;

export const ProfileImage = styled.div<{ url: string }>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${(props) => props.url});
  border-radius: 50%;

  :hover {
    box-shadow: 0px 0px 20px #f700ff;
  }

  .login {
    cursor: pointer;
  }
`;
