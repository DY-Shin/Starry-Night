import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileBorderDiv = styled.div`
  width: 40%;
  height: 100%;
`;

export const ProfileMypageLink = styled(Link)`
  cursor: pointer;
`;

export const ProfileImageWrapper = styled.div`
  width: calc(100%-5px);
  /* height: 110px; */
  height: 100%;
  padding: 5px;
`;
export const ProfileImageBorder = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  transform: translateY(8px);
  /* margin-left: 10px; */
  margin: auto;
`;
export const ProfileImage = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  border-radius: 50%;
  background-size: cover;
  width: 100%;
  height: 100%;

  :hover {
    box-shadow: 0px 0px 20px #f700ff;
  }

  .login {
    cursor: pointer;
  }
`;
